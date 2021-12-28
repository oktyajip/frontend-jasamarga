import Cookies from 'js-cookie'
import React, { useEffect, useState, Component } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Select from 'react-select'
import NavbarMenu from '../../components/Navbar'
import Footer from '../../components/Footer'
import Index from '../../components/Stepper/Index'

const Dashboard = () => {
    const userToken = Cookies.get("user_token")
    const navigate = useNavigate()
    const [provinsi, setProvinsi] = useState ([])
    const [selectedProvinsi, setSelectedProvinsi] = useState ([])
    const [kota, setKota] = useState ([])

    // useEffect(() => {
    //     if (!userToken) {
    //         navigate("/")
    //     }
    // }, [])

    useEffect(() => {
        handleProvinsi()
        handleKota()
    },[selectedProvinsi])

    const handleProvinsi = () => {
        axios.get(`${process.env.REACT_APP_API}/provinsi`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            setProvinsi(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleKota = () => {
        const dataSend = {
            prov_id: selectedProvinsi
        }
        axios.post(`${process.env.REACT_APP_API}/kota`, dataSend,{
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            setKota(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const options = [...provinsi]
    const options2 = [...kota]

    return (
        <>
           {/* <Select options={options} onChange={e => setSelectedProvinsi(e.value)}/>
           <Select options={options2} /> */}
           <NavbarMenu />
           <Index />
           <Footer />
        </>
    )
}

export default Dashboard
