import Box from '@mui/material/Box'
import _ from 'lodash'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ApiTabData } from '../../cms'
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
  axiosDataAtom,
  axiosHeadersAtom,
  axiosResponseAtom,
  userSubmittedUrlAtom,
  userToggledApiAtom
} from '../../recoil'
import { SvgTsLogoDtype } from '../icons/SvgTsLogoTs'
import { PanelStyle, TabSx, TabWrapperSx } from '../mui'

type TabPanelAlias = {
  index: number
  value: number
  children?: React.ReactNode
}

function TabPanel({ children, value, index, ...other }: TabPanelAlias) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`apijson-tabpanel-${index}`}
      aria-labelledby={`apijson-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `apijson-tab-${index}`,
    'aria-controls': `apijson-tabpanel-${index}`
  }
}

export function ApiTabs() {
  // state when user submits user entered url
  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)
  // state of user toggled api response
  const setUserToggledApi = useSetRecoilState(userToggledApiAtom)
  // state of full response returned from Axios api call
  const [axiosResponse, setAxiosResponse] = useRecoilState(axiosResponseAtom)
  // state of response.headers returned from fetch api call
  const axiosHeaders = useRecoilValue(axiosHeadersAtom)
  // dispatch tab panel
  const [value, setValue] = React.useState<number>(0)
  //
  //
  const axiosData = useRecoilValue(axiosDataAtom)

  const handleDataTabs = (_event: React.SyntheticEvent, newResponse: number) => {
    setValue(newResponse)
  }

  // edit a property of the object
  const EditObj = (newValue, key) => {
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

  const TabPanels = [
    { index: 0, panel: <DataResponse data={axiosData} /> },
    { index: 1, panel: <EditResponse data={axiosData} onDelete={DeleteObj} onEdit={EditObj} /> },
    { index: 2, panel: <FullResponse data={axiosResponse} /> },
    { index: 3, panel: <DataHeaders data={axiosHeaders} /> },
    { index: 4, panel: <TsInterface data={axiosData} /> },
    { index: 5, panel: <DTypescript data={axiosData} /> }
  ]

  return (
    <Box sx={{ mt: 30 }}>
      {userSubmittedUrl !== undefined && (
        <>
          <TabWrapperSx
            key={local.pathname}
            aria-label='api data tabs'
            onChange={handleDataTabs}
            value={value}>
            {ApiTabData.map(({ index, num, label, isIcon, value }) => (
              <TabSx
                key={num}
                index={index}
                label={label}
                icon={isIcon && <SvgTsLogoDtype />}
                iconPosition='start'
                {...a11yProps(num)}
                onClick={() => {
                  setUserToggledApi(value), setApiTabSelected(index)
                }}
              />
            ))}
          </TabWrapperSx>
          <PanelStyle>
            {TabPanels.map(({ index, panel }) => (
              <TabPanel key={index} value={value} index={index}>
                {panel}
              </TabPanel>
            ))}
          </PanelStyle>
        </>
      )}
    </Box>
  )
}
