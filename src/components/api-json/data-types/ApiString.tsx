import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useRecoilState } from 'recoil'
import { selectedElementAtom } from '../../../recoil-state'
import { BrandSwatch } from '../../../style'
import { ApiEditHighlighter } from '../../action'
import { ApiApplyIcon, ApiCloseIcon, ApiDeleteIcon } from '../../icons'
import { ButtonSxApiJsonEditItem, IconButtonSxApiEdit, InputSxEditApi } from '../../mui'
import { ApiStringAlias } from './typeAliases'
import { DataTypeLabelSx } from '.'

export function ApiString({ index, value, dataKey, dataType, onEdit, onDelete }: ApiStringAlias) {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)

  const [currentValue, setCurrentValue] = React.useState<ApiStringAlias['value'] | any>()

  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const handleStringEdit = (dataKey: string | number) => {
    onEdit(currentValue, dataKey)
    setSelectedElement(null)
  }

  const handleStringDelete = () => {
    onDelete(dataKey)
    setSelectedElement(null)
  }

  const handleCancelStringEdit = () => {
    setSelectedElement(null)
  }

  return (
    <Box sx={{ ml: 48, cursor: 'pointer' }}>
      <ApiEditHighlighter selected={selectedElement === index} direction='row'>
        {selectedElement === index ? (
          <Stack direction='row' justifyContent='center' alignItems='flex-end'>
            <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
            <DataTypeLabelSx type={dataType} association='edit' />
            <InputSxEditApi
              currentValue={currentValue}
              dataKey={dataKey}
              onChange={event => {
                setCurrentValue(event.target.value)
              }}
              onEdit={onEdit}
              quotes={true}
            />
            <ButtonGroup variant='text'>
              <IconButtonSxApiEdit disabled={true} onClick={() => handleStringEdit(index)}>
                <ApiApplyIcon
                  sx={{
                    color: theme => theme.palette.text.primary,
                    mr: 5,
                    '&:hover ': {
                      color: BrandSwatch.Dark.Green[300]
                    }
                  }}
                />
              </IconButtonSxApiEdit>
              <IconButtonSxApiEdit onClick={handleStringDelete}>
                <ApiDeleteIcon />
              </IconButtonSxApiEdit>
              <IconButtonSxApiEdit onClick={handleCancelStringEdit}>
                <ApiCloseIcon />
              </IconButtonSxApiEdit>
            </ButtonGroup>
          </Stack>
        ) : (
          <ButtonSxApiJsonEditItem onClick={() => setSelectedElement(index)}>
            <Typography
              sx={{
                color: theme => theme.palette.text.primary
              }}
              variant='code'>
              &#34;{dataKey}&#34;&#58;&nbsp;
            </Typography>
            <DataTypeLabelSx type={dataType} association='edit' />
            <Typography
              variant='code'
              sx={{
                color: theme =>
                  theme.palette.mode === 'dark'
                    ? BrandSwatch.Dark.Green[300]
                    : BrandSwatch.Light.Green[500]
              }}>
              &#34;{currentValue}&#34;
            </Typography>
          </ButtonSxApiJsonEditItem>
        )}
      </ApiEditHighlighter>
    </Box>
  )
}
