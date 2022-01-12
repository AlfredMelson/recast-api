import * as React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import _ from 'lodash'
import { useLocation } from 'react-router-dom'
import { userSubmittedUrlAtom, userToggledApiAtom } from '../../recoil/api-json/atom'
import { SvgTsLogoDtype } from '../icons/SvgTsLogoTs'
import { TabSx, TabWrapperSx } from '../mui'
import {
  DataResponse,
  EditResponse,
  FullResponse,
  DataHeaders,
  TsInterface,
  DTypescript,
} from '../../pages/api-json/tab'
import { PanelStyle } from '../mui/Panel.style'
import { axiosDataAtom, axiosResponseAtom, axiosHeadersAtom } from '../../recoil/api-json/axios'
import { ApiTabData } from '../../cms'
import { apiTabSelectedAtom } from '../../recoil/api-json/tab'

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
    'aria-controls': `apijson-tabpanel-${index}`,
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
            <TabPanel value={value} index={0}>
              <DataResponse data={axiosData} />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <EditResponse data={axiosData} onDelete={DeleteObj} onEdit={EditObj} />
            </TabPanel>

            <TabPanel value={value} index={2}>
              <FullResponse data={axiosResponse} />
            </TabPanel>

            <TabPanel value={value} index={3}>
              <DataHeaders data={axiosHeaders} />
            </TabPanel>

            <TabPanel value={value} index={4}>
              <TsInterface data={axiosData} />
            </TabPanel>

            <TabPanel value={value} index={5}>
              <DTypescript data={axiosData} />
            </TabPanel>
          </PanelStyle>
        </>
      )}
    </Box>
  )
}
