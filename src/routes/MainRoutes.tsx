import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@layout'
import ResumeListPage from '@pages/ResumeListPage'
import LoginPage from '@pages/LoginPage'
import { ProtectedRoute } from './ProtectedRoute'

export default function MainRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to={'/resume-matcher'} />} />
        <Route path='resume-matcher' element={<ResumeListPage />} />
        <Route path='resume-matcher/:folderId' element={<ResumeListPage />} />
      </Route>
      <Route path='login' element={<LoginPage />} />
    </Routes>
  )
}
