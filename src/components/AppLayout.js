import React from 'react'
import NavbarPanel from './NavbarPanel'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../Store/Store'
const AppLayout = () => {
    return (
        <>
            <Provider store={store}>
                <NavbarPanel />
                <main className="container">
                    <Outlet />
                </main>
            </Provider>
        </>
    )
}

export default AppLayout