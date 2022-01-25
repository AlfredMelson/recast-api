import { Tabs } from '@mui/material'
import Box from '@mui/material/Box'
import _ from 'lodash'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ApiTabDataAlias, ApiTabPanelAlias } from '../../cms'
import { ErrorBoundary } from '../../lib'
import {
  apiTabSelectedAtom,
  axiosResponseAtom,
  currentApiQuerySelector,
  httpClientAtom,
  userToggledApiAtom
} from '../../recoil-state'
import { AxiosIcon, TypescriptIcon, UseSWRIcon } from '../icons'
import { CircularProgressStyle, TabSx } from '../mui'
import { DataConfig, DataHeaders, DataResponse, DTypescript, EditResponse } from './tab-panels'

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

export default function ApiTabs() {
  // state of user toggled api response
  const setUserToggledApi = useSetRecoilState(userToggledApiAtom)
  // state of full response returned from Axios api call
  const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)

  // dispatch tab panel
  const [value, setValue] = React.useState<number>(1)

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
  const currentApiQuery = useRecoilValue(currentApiQuerySelector)

  const setApiTabSelected = useSetRecoilState(apiTabSelectedAtom)

  const ApiTabPanel: ApiTabPanelAlias[] = [
    { index: 0, panel: null },
    { index: 1, panel: <DataResponse /> },
    { index: 2, panel: <DataHeaders /> },
    { index: 3, panel: <DataConfig /> },
    { index: 4, panel: <EditResponse onDelete={DeleteObj} onEdit={EditObj} /> },
    { index: 5, panel: <DTypescript /> }
    // { index: 6, panel: <TsInterface /> }
  ]
  const httpClient = useRecoilValue(httpClientAtom)

  const ApiTabData: ApiTabDataAlias[] = [
    {
      index: '0',
      num: 0,
      label: httpClient === '1' ? '' : 'SWR',
      icon: httpClient === '1' ? <AxiosIcon /> : <UseSWRIcon sx={{ pr: 10 }} />,
      value: 'axios'
    },
    { index: '1', num: 1, label: 'Response', icon: null, value: 'data' },
    { index: '2', num: 2, label: 'Headers', icon: null, value: 'headers' },
    { index: '3', num: 3, label: 'Config', icon: null, value: 'config' },
    { index: '4', num: 4, label: 'Edit Response', icon: null, value: 'edit' },
    { index: '5', num: 5, label: ' * .d.ts', icon: <TypescriptIcon />, value: 'dtype' }
    // { index: '6', num: 6, label: ' interface', icon: <TypescriptIcon />, value: 'ts' }
  ]

  // AnimatePresense
  const local = useLocation()

  return (
    <>
      {currentApiQuery && (
        <>
          <Box sx={{ pt: 30, overflowX: 'hidden' }}>
            <ErrorBoundary>
              <React.Suspense fallback={<CircularProgressStyle />}>
                <Tabs
                  variant='scrollable'
                  scrollButtons='auto'
                  selectionFollowsFocus
                  key={local.pathname}
                  aria-label='api tabs'
                  onChange={handleDataTabs}
                  value={value}>
                  {ApiTabData.map(({ index, num, label, icon, value }) => (
                    <TabSx
                      key={num}
                      index={index}
                      label={label}
                      icon={icon}
                      {...a11yProps(num)}
                      onClick={() => {
                        setUserToggledApi(value), setApiTabSelected(index)
                      }}
                    />
                  ))}
                </Tabs>
              </React.Suspense>
            </ErrorBoundary>
          </Box>
          <Box>
            <ErrorBoundary>
              <React.Suspense fallback={<CircularProgressStyle />}>
                <Box sx={{ position: 'relative' }}>
                  {ApiTabPanel.map(({ index, panel }) => (
                    <TabPanel key={index} value={value} index={index}>
                      {panel}
                    </TabPanel>
                  ))}
                </Box>
              </React.Suspense>
            </ErrorBoundary>
          </Box>
        </>
      )}
    </>
  )
}
