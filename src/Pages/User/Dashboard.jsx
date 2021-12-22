import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const userToken = Cookies.get("user_token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!userToken) {
            navigate("/")
        }
    }, [])

    return (
        <>
          <h1>Selamat Datang !</h1>  
        </>
    )
}

export default Dashboard
