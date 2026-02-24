import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { ProfilePage } from '../pages/ProfilePage'
import { AboutPage } from '../pages/AboutPage'
import { ProjectPage } from '../pages/ProjectPage'


export const AppRoutes = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path={'/'} element={<ProfilePage />} />
                    <Route path={'/aboutme'} element={<AboutPage />} />
                    <Route path={'/work'} element={<ProjectPage />} />
                    
                </Routes>
            </MainLayout>
        </Router>
    )
}
