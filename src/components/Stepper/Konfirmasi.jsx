import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavbarMenu from '../Navbar'
import Footer from '../Footer'
import { Col, Container, Form, Row } from 'react-bootstrap'

const Konfirmasi = (props) => {
    const [posisiDilamar, setPosisiDilamar] = useState("")
    const navigate = useNavigate()

    const handleKonfirmasi = async (e) => {
        e.preventDefault()
        props.next()
        window.scroll(0,0)
        // const dataSend = {
        //     posisi_dilamar: posisiDilamar
        // }
        // await axios.post(`${process.env.REACT_APP_API}/konfirmasi`, dataSend, {
        //     headers: {
        //         'Content-Type' : 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        // .then(res => {
        //     if (res.data.status === 200) {
        //         navigate('/dashboard')
        //     } else {
        //         alert("gagal mendaftar, cobalah beberapa saat lagi")
        //     }
        // })
    }
    return (
        <>
            <Container style={{marginTop:"50px", marginBottom:"50px"}}>
                <Row>
                    <Col className='mx-auto border p-5' md={8} style={{borderRadius:"10px"}}>
                        <div className="tab-content">
                            <div className="form-heading text-center">
                                <h2 className='pb-3 border-bottom mb-4 d-inline-block' style={{color: "#003565"}}><b>Konfirmasi Data</b></h2>                               
                            </div>
                            <Form onSubmit={(e) => handleKonfirmasi(e)}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>&#128231; <b>Email</b></Form.Label>
                                    <p>ujicoba@gmail.com</p>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>&#128697; <b>Nama Lengkap</b></Form.Label>
                                    <p>Ujicoba dulu</p>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>&#128222; <b>Nomor Telpon</b></Form.Label>
                                    <p>082121213434</p>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>&#128205; <b>Alamat</b></Form.Label>
                                    <p>Gedung Bina Manajemen, Jl. Menteng Raya No.9, RT.1/RW.10, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta</p>
                                </Form.Group>

                                <button className='py-2 px-4 text-white ml-auto btn-navigation' type="submit">
                                    &#8594; Selanjutnya
                                </button>
                            </Form>
                        </div>
                    </Col>    
                </Row>
            </Container>
        </>
    )
}

export default Konfirmasi
