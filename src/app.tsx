import { FunctionComponent } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Layout } from './layout'
import { ApiJson, NoMatch } from './pages'

const App: FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ApiJson />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
