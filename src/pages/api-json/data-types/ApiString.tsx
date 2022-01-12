import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup'
import { ApiEditHighlighter } from '../../../components/action'
import { ApiDeleteIcon, ApiCloseIcon, ApiApplyIcon } from '../../../components/icons'
import { selectedElementAtom } from '../../../recoil'
import {
  InputSxEditApi,
  ButtonSxApiJsonEditItem,
  IconButtonSxApiEdit,
} from '../../../components/mui'
import { BrandSwatch } from '../../../style'
import { ApiStringAlias } from './typeAliases'
import ApiDataTypeLabel from './ApiDataTypeLabel'

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
            <ApiDataTypeLabel type={dataType} variant='edit' />
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
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? BrandSwatch.Dark.Grey[50]
                        : BrandSwatch.Light.Grey[900],
                    mr: 5,
                    '&:hover ': {
                      color: BrandSwatch.Dark.Green[300],
                    },
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
                color: theme =>
                  theme.palette.mode === 'dark'
                    ? BrandSwatch.Dark.Grey[50]
                    : BrandSwatch.Light.Grey[900],
              }}
              variant='code'>
              &#34;{dataKey}&#34;&#58;&nbsp;
            </Typography>
            <ApiDataTypeLabel type={dataType} variant='edit' />
            <Typography
              variant='code'
              sx={{
                color: theme =>
                  theme.palette.mode === 'dark'
                    ? BrandSwatch.Dark.Green[300]
                    : BrandSwatch.Light.Green[500],
              }}>
              &#34;{currentValue}&#34;
            </Typography>
          </ButtonSxApiJsonEditItem>
        )}
      </ApiEditHighlighter>
    </Box>
  )
}
