import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import QueryProvider from '@/api/QueryProvider'
import { AppThemeProvider } from '@theme'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from '@routes'
import { enableMapSet } from 'immer'

enableMapSet()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AppThemeProvider>
          <MainRoutes />
        </AppThemeProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
)
