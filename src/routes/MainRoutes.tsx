import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@layout'
import ResumeListPage from '@pages/ResumeListPage'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to={'/resume-matcher'} />} />
        <Route path='resume-matcher' element={<ResumeListPage />} />
      </Route>
    </Routes>
  )
}
