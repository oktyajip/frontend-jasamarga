import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import NavbarMenu from '../components/Navbar'

const Pendaftaran = () => {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ttl, setTtl] = useState("")
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
                    <Col>
                        <div className="tabs mb-5 text-center">
                            <Button className={`px-5 mx-4`} style={{backgroundColor: tabActive === "1" ? "#003565" : "#E9F2FE", color: tabActive === "1" ? "#fff" : "#687b9c", border: "none"}} onClick={() => setTabActive("1")}>
                                Daftar MTE
                            </Button>
                            <Button className='px-5 mx-4' style={{backgroundColor: tabActive === "2" ? "#003565" : "#E9F2FE", color: tabActive === "2" ? "#fff" : "#687b9c", border: "none"}} onClick={() => setTabActive("2")}>
                                Daftar MTI
                            </Button>
                        </div>
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
                                {/* <div className={`${tabActive === "2" ? 'd-block' : 'd-none'} tab-content`}>
                                    <div className="form-heading text-center">
                                        <h2 className='pb-3 border-bottom mb-4 d-inline-block' style={{color: "#003565"}}><b>Pendaftaran MTI</b></h2>                               
                                    </div>
                                    <Form onSubmit={(e) => handleDaftarMti(e)}>
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

                                        <Form.Group className="mb-3" controlId="ttl">
                                            <Form.Label>Tanggal Lahir</Form.Label>
                                            <Form.Control type="date" placeholder="Tanggal Lahir" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="nik">
                                            <Form.Label>NIK</Form.Label>
                                            <Form.Control type="number" placeholder="Nomor Induk Kependudukan" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="jeniskelamin">
                                            <Form.Label>Jenis Kelamin</Form.Label>
                                            <Form.Select>
                                                <option value="Laki - Laki">Laki - Laki</option>
                                                <option value="Perempuan">Perempuan</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Lokasi Tes</Form.Label>
                                            <Form.Control type="text" placeholder="Lokasi Test" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Nama Instansi Internal</Form.Label>
                                            <Form.Control type="text" placeholder="Nama Instansi Internal" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>No. Pegawai Internal</Form.Label>
                                            <Form.Control type="text" placeholder="Nomor Pegawai Internal" />
                                        </Form.Group>

                                        <Button className='py-2 px-4 text-white' style={{backgroundColor:"#003565"}} type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div> */}
                            </Col>
                        </Row>
                    </Col>    
                </Row>
            </Container>
        </>
    )
}

export default Pendaftaran
