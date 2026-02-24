import { HeaderComponent } from "../components/Header"



export const MainLayout = ({ children }) => {
    return (
        <>
            <HeaderComponent />
            <main aria-label='ravi-gahire-portfolio' className=' mx-auto max-w-7xl z-100 min-h-screen'>
                            
                {children}
            </main>
        </>
    )
}





