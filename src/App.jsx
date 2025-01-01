import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx"
import HomePage from "./Views/HomePage.jsx"
import BusinessCard from "./Views/BusinessCard.jsx"

function App() {
//<Route exact path="/business-card" element={<BusinessCard />} />
  return (
    <>
          <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
