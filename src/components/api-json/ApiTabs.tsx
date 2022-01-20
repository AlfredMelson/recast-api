import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { AnimatePresence } from 'framer-motion'
import _ from 'lodash'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ApiTabDataAlias, ApiTabPanelAlias } from '../../cms'
import {
  DataHeaders,
  DataResponse,
  DTypescript,
  EditResponse,
  FullResponse,
  TsInterface
} from '../../pages/api-json/tab'
import {
  apiTabSelectedAtom,
  axiosResponseAtom,
  currentApiQuerySelector,
  userToggledApiAtom
} from '../../recoil-state'
import { BrandSwatch } from '../../style'
import { SvgTsLogoDtype } from '../icons'
import { TabSx, TabWrapperSx } from '../mui'

type TabPanelAlias = {
  index: number
  value: number
  children?: React.ReactNode
}

function TabPanel({ children, value, index, ...other }: TabPanelAlias) {
  return (
    <Box
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`apijson-tabpanel-${index}`}
      aria-labelledby={`apijson-tab-${index}`}
      {...other}>
      {value === index && children}
    </Box>
  )
}

function a11yProps(index: number) {
  return {
    id: `apijson-tab-${index}`,
    'aria-controls': `apijson-tabpanel-${index}`
  }
}

export function ApiTabs() {
  // state of user toggled api response
  const setUserToggledApi = useSetRecoilState(userToggledApiAtom)
  // state of full response returned from Axios api call
  const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)

  // dispatch tab panel
  const [value, setValue] = React.useState<number>(0)

  const handleDataTabs = (_event: React.SyntheticEvent, newResponse: number) => {
    setValue(newResponse)
  }

  // edit a property of the object
  const EditObj = (newValue: any, key: string | number) => {
    const newObj = axiosResponse
    newObj[key] = newValue
    setAxiosResponse(axiosResponse)
  }
  // delete a property of the object
  const DeleteObj = key => {
    setAxiosResponse(_.omit(axiosResponse, key))
  }
  // split and pop to isolate d.ts file name
  // const lastSegment = userSubmittedUrl !== undefined && userSubmittedUrl.split('/').pop()

  // AnimatePresense
  const local = useLocation()

  const setApiTabSelected = useSetRecoilState(apiTabSelectedAtom)

  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  const ApiTabPanel: ApiTabPanelAlias[] = [
    { index: 0, panel: <DataResponse data={currentApiQuery?.data} /> },
    {
      index: 1,
      panel: <EditResponse data={currentApiQuery} onDelete={DeleteObj} onEdit={EditObj} />
    },
    { index: 2, panel: <FullResponse data={currentApiQuery} /> },
    { index: 3, panel: <DataHeaders data={currentApiQuery?.headers} /> },
    { index: 4, panel: <TsInterface data={currentApiQuery} /> },
    { index: 5, panel: <DTypescript data={currentApiQuery} /> }
  ]

  const ApiTabData: ApiTabDataAlias[] = [
    { index: '0', num: 0, label: 'Data response', icon: null, value: 'data' },
    { index: '1', num: 1, label: 'Edit response', icon: null, value: 'edit' },
    { index: '2', num: 2, label: 'Full response', icon: null, value: 'full' },
    { index: '3', num: 3, label: 'Headers', icon: null, value: 'headers' },
    { index: '4', num: 4, label: ' interface', icon: <SvgTsLogoDtype />, value: 'ts' },
    { index: '5', num: 5, label: ' * .d.ts', icon: <SvgTsLogoDtype />, value: 'dtype' }
  ]

  return (
    <>
      {currentApiQuery !== undefined && (
        <Box sx={{ mt: 30 }}>
          <TabWrapperSx
            key={local.pathname}
            aria-label='api data tabs'
            onChange={handleDataTabs}
            value={value}>
            {ApiTabData.map(({ index, num, label, icon, value }) => (
              <TabSx
                key={num}
                index={index}
                label={label}
                icon={icon}
                iconPosition='start'
                {...a11yProps(num)}
                onClick={() => {
                  setUserToggledApi(value), setApiTabSelected(index)
                }}
              />
            ))}
          </TabWrapperSx>
          <Paper
            sx={{
              backgroundColor: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[800]
                  : BrandSwatch.Light.Grey[200]
            }}>
            <PanelWrapper>
              <AnimatePresence>
                {ApiTabPanel.map(({ index, panel }) => (
                  <TabPanel key={index} value={value} index={index}>
                    {panel}
                  </TabPanel>
                ))}
              </AnimatePresence>
            </PanelWrapper>
          </Paper>
        </Box>
      )}
    </>
  )
}

const PanelWrapper = styled('div')(() => ({
  position: 'relative',
  overflow: 'hidden'
}))
