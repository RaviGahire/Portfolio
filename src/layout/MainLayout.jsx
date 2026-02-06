import React from 'react'
import { Header } from '../components/Header'

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main aria-label='ravi-gahire-portfolio'>
                {children}
            </main>
        </>
    )
}
