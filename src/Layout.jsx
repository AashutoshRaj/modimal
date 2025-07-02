import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { useProfileAuth } from './UserProfileContext'

const Layout = () => {

 const {isLoading} = useProfileAuth()

    if(isLoading){
            return(
                <div>Loading...</div>
            )
    }
    return (
        <>
            <Header />               
                <main className={`${''}`}>
                 <Outlet />
                </main>
            <Footer />
        </>
    )
}

export default Layout
