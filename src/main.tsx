import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccountDetail } from './components/AccountDetail.tsx'
import Nav from './components/Nav.tsx'
import { AccountPage } from './pages/AccountPage.tsx'
import { DashboardPage } from './pages/DashboardPage.tsx'
import { CategoriesPage } from './pages/CategoriesPage.tsx'
import { MovementsPage } from './pages/MovementsPage.tsx'
import { MyNewTheme } from './styles/theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={MyNewTheme}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/accounts' element={<AccountPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/movements' element={<MovementsPage />} />


          <Route path='/:account_id' element={<AccountDetail />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
