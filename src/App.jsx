import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import IssueDetails from './pages/IssueDeatils/IssueDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
      </Routes>
    </>
  )
}

export default App