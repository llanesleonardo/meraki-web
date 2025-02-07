import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx"
import HomePage from "./Views/HomePage.jsx"
import BusinessCard from "./Views/BusinessCard.jsx"
import NotFound from "./Views/NotFound.jsx";

function App() {
//<Route exact path="/business-card" element={<BusinessCard />} />
  return (
    <>
          <Router>
        <Layout>
          <Routes>
            {/* <Route exact path="/" element={<HomePage />} /> */}
                    {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App


/**
 * {
    "routes": [
      {
        "route": "/*",
        "statusCode": 200
      }
    ],
    "navigationFallback": {
        "rewrite": "index.html",
        "exclude": ["/images/*.{png,jpg,gif}", "/css/*"]
      },
      "responseOverrides": {
        "404": {
          "rewrite": "/404.html"
        }
      }
  }
 * 
 */