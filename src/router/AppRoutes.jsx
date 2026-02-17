import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {MainLayout} from '../layout/MainLayout'
import { ProfilePage } from '../pages/ProfilePage'
import { AboutPage } from '../pages/AboutPage'
import { ProjectPage } from '../pages/ProjectPage'
import { MyBlogs } from '../pages/MyBlogs'
import { Contact } from '../components/Contact'


export const AppRoutes = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path={'/'} element={<ProfilePage />} />
                    <Route path={'/aboutme'} element={<AboutPage />} />
                    <Route path={'/projects'} element={<ProjectPage/>} />
                    <Route path={'/blogs'} element={<MyBlogs />} />
                    <Route path={'/contact'} element={<Contact />} />
                </Routes>
            </MainLayout>
        </Router>
    )
}
