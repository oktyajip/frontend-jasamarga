import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import NavbarMenu from '../components/Navbar'
import Footer from '../components/Footer'

const Pendaftaran = () => {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nik, setNik] = useState("")
    const [kelamin, setKelamin] = useState("")
    const [lokasi, setLokasi] = useState("")
    const navigate = useNavigate()
    const [tabActive, setTabActive] = useState("1")

    const handleDaftar = async (e) => {
        e.preventDefault()
        const dataSend = {
            nama: nama,
            email: email,
            password: password,
            no_ktp: nik,
        }
        await axios.post(`${process.env.REACT_APP_API}/register`, dataSend, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            if (res.data.status === 200) {
                navigate('/dashboard')
            } else {
                alert("gagal mendaftar, cobalah beberapa saat lagi")
            }
        })
    }

    // const handleDaftarMti = async (e) => {
    //     e.preventDefault()
    //     const dataSend = {
    //         nama: nama,
    //         email: email,
    //         password: password,
    //         tanggal_lahir: ttl,
    //         no_ktp: nik,
    //         jenis_kelamin: kelamin,
    //         lokasi_tes: lokasi,
    //         kode: "MTI"
    //     }
    //     await axios.post(`${process.env.REACT_APP_API}/register`, dataSend, {
    //         headers: {
    //             'Content-Type' : 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     .then(res => {
    //         if (res.data.status === 200) {
    //             navigate('/dashboard')
    //         } else {
    //             alert("gagal mendaftar, cobalah beberapa saat lagi")
    //         }
    //     })
    // }

    return (
        <>
            <NavbarMenu />
            <Container style={{marginTop:"150px", marginBottom:"50px"}}>
                <Row>
                    <Col className='mx-auto border p-5' md={8} style={{borderRadius:"10px"}}>
                        <div className={`${tabActive === "1" ? 'd-block' : 'd-none'} tab-content`}>
                            <div className="form-heading text-center">
                                <h2 className='pb-3 border-bottom mb-4 d-inline-block' style={{color: "#003565"}}><b>Pendaftaran</b></h2>                               
                            </div>
                            <Form onSubmit={(e) => handleDaftar(e)}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control type="text" placeholder="Nama Lengkap" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email Aktif" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nik">
                                    <Form.Label>NIK</Form.Label>
                                    <Form.Control type="number" placeholder="Nomor Induk Kependudukan" />
                                </Form.Group>

                                <button className='py-2 px-4 text-white' style={{backgroundColor:"#003565", border:"none", borderRadius:"10px"}} type="submit">
                                    Submit
                                </button>
                            </Form>
                        </div>
                    </Col>    
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Pendaftaran
