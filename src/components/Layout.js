// components/Layout.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { getSession, setSession } from "../utils/session"

const Layout = ({ children }) => {

    let [userSession, setUserSession] = useState("")

    useEffect(() => {
        setUserSession(getSession())
    }, [])

    const logoutfn = () => {
        setSession("false")
        setUserSession(false)
        Router.push('/');
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ justifyContent: 'flex-end', backgroundColor: '#817abc' }} >
                    <Typography variant="h6">
                        <Link href="/" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }}>Home</Link>
                    </Typography>
                    <Typography variant="h6">
                        <Link href="/about" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }}>About</Link>
                    </Typography>
                    <Typography variant="h6">
                        <Link href="/contactUs" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }}>Contact</Link>
                    </Typography>
                    {
                        (userSession == "true") &&
                        <Typography variant="h6">
                            <Link href="/posts" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }}>Posts</Link>
                        </Typography>
                    }
                    <Typography variant="h6">
                        {
                            (userSession == "true") ?
                                <Link href="/" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }} onClick={() => logoutfn()}>Logout</Link> :
                                <Link href="/login" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }}>Login</Link>
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>{children}</main>
            <footer>
                <AppBar position="static">
                    <Toolbar style={{ justifyContent: 'flex-end', backgroundColor: '#817abc' }} >
                        <Typography variant="h6">
                            <Link href="#" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }}>Home</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link href="/about" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }}>About</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link href="/contactUs" color="inherit" style={{ marginLeft: '1rem', fontSize: '1rem' }}>Contact</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </footer>
        </div>
    )
}

export default Layout;
