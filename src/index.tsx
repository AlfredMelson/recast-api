import CssBaseline from '@mui/material/CssBaseline'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom'
import { RecoilRoot } from 'recoil'
import App from './app'
import './style/BrandGlobal.css'
import { BrandThemeProvider } from './style'

// create entry point using unique id from Document
const rootElement = document.getElementById('app')
// test for root element prior to invoking ReactDOM.createRoot
if (!rootElement) throw new Error('Failed to find the root element')
// create root
const root = createRoot(rootElement)
// initial render
root.render(
  <StrictMode>
    <RecoilRoot>
      <BrandThemeProvider>
        <CssBaseline>
          <App />
        </CssBaseline>
      </BrandThemeProvider>
    </RecoilRoot>
  </StrictMode>
)
