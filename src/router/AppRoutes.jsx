import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { MainLayout } from '../layout/MainLayout'
import { WorkPage } from '../pages/WorkPage'
import {MyBlogs} from '../pages/MyBlogs'
import {Contact} from '../components/Contact'


export const AppRoutes = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/aboutme'} element={<AboutPage />} />
                    <Route path={'/work'} element={<WorkPage/>} />
                    <Route path={'/blogs'} element={<MyBlogs />} />
                    <Route path={'/contact'} element={<Contact />} />
                </Routes>
            </MainLayout>
        </Router>
    )
}
