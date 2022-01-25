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
import { DataTypeLabelSx } from '../primitive-styles'
import { ApiNumberAlias } from './typeAliases'

export function ApiNumber({ index, value, dataKey, dataType, onEdit, onDelete }: ApiNumberAlias) {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)

  const [currentValue, setCurrentValue] = React.useState<ApiNumberAlias['value'] | any>()

  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const handleNumberEdit = () => {
    onEdit(currentValue, dataKey)
    setSelectedElement(null)
  }

  const handleNumberDelete = () => {
    onDelete(dataKey)
    setSelectedElement(null)
  }

  const handleCancelNumberEdit = () => {
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
            />
            <ButtonGroup variant='text'>
              <IconButtonSxApiEdit onClick={handleNumberEdit}>
                <ApiApplyIcon
                  sx={{
                    color: theme => theme.palette.text.primary,
                    mr: 5,
                    '&:hover': {
                      color: BrandSwatch.Dark.Green[300]
                    }
                  }}
                />
              </IconButtonSxApiEdit>
              <IconButtonSxApiEdit onClick={handleNumberDelete}>
                <ApiDeleteIcon />
              </IconButtonSxApiEdit>
              <IconButtonSxApiEdit onClick={handleCancelNumberEdit}>
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
                    ? BrandSwatch.Dark.Purple[500]
                    : BrandSwatch.Light.Purple[600]
              }}>
              {currentValue}
            </Typography>
          </ButtonSxApiJsonEditItem>
        )}
      </ApiEditHighlighter>
    </Box>
  )
}
