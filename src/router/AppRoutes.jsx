import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { MainLayout } from '../layout/MainLayout'


export const AppRoutes = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/aboutme'} element={<AboutPage />} />
                </Routes>
            </MainLayout>
        </Router>
    )
}
