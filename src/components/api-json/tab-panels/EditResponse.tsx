import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
// import { AsideEditInfo } from '..'
import { ErrorBoundary } from '../../../lib'
import { currentApiQuerySelector, currentDataAtom, elementStateAtom } from '../../../recoil-state'
import { BrandSwatch } from '../../../style'
import { ArrowRightIcon } from '../../icons'
import { IconButtonSxApiIcons, PaperSx } from '../../mui'
import { ApiDataSort } from '../data-types'
import { EditResponseAlias, getType } from '../data-types/typeAliases'

export default function EditResponse({ onDelete, onEdit }: EditResponseAlias) {
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  const data = currentApiQuery?.data

  // state representing an array of element ids
  const [elementState, setElementState] = useRecoilState(elementStateAtom)
  // state representing...
  const [currentData, setCurrentData] = useRecoilState(currentDataAtom)
  // state of data reveal toggle
  const [reveal, setReveal] = useState(true)

  // const [keys, setKeys] = useState<string[]>([])

  // const [currentData, setCurrentData] = useState<EditResponseAlias>({})

  useEffect(() => {
    if (!currentApiQuery) {
      return
    } else {
      const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
      setElementState(newkeys)
      setCurrentData(data)
    }
  }, [currentApiQuery, data, setCurrentData, setElementState])

  const renderData = () => {
    return elementState.map((key: string, index: number) => {
      return (
        <ApiDataSort
          key={index}
          index={index}
          dataType={currentData ? getType(currentData[key]) : ''}
          dataValue={currentData ? currentData[key] : ''}
          dataKey={key}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )
    })
  }

  function IconToggle() {
    return (
      <IconButtonSxApiIcons
        onClick={(): void => setReveal(!reveal)}
        sx={{
          transform: reveal ? 'rotate(90deg)' : 'rotate(0deg)',
          mr: 10
        }}>
        <ArrowRightIcon />
      </IconButtonSxApiIcons>
    )
  }

  const renderEditResponseContent = () => {
    if (reveal)
      return (
        <>
          <Stack direction='row'>
            <IconToggle />
            <Typography variant='code'>data&#58;&nbsp;&#123;</Typography>
          </Stack>
          {renderData()}
          <Typography variant='code' sx={{ pl: 5 }}>
            &#125;
          </Typography>
        </>
      )

    return (
      <>
        <Stack direction='row'>
          <IconToggle />
          <Typography variant='code'>
            {elementState.length === 0 ? (
              ''
            ) : (
              <>
                data&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
                <Box
                  component='span'
                  sx={{
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? BrandSwatch.Dark.Grey[200]
                        : BrandSwatch.Light.Grey[900]
                  }}>
                  &#47;&#47;&nbsp;
                  {elementState.length}&nbsp;
                  {elementState.length === 1 ? 'item' : 'items'}
                </Box>
              </>
            )}
          </Typography>
        </Stack>
      </>
    )
  }

  return (
    <PaperSx sx={{ pl: 30, pr: 70 }}>
      <ErrorBoundary>
        {renderEditResponseContent()}
        {/* <AsideEditInfo /> */}
      </ErrorBoundary>
    </PaperSx>
  )
}
