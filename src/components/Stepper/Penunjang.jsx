import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Col, Container, Form, Row } from 'react-bootstrap'
import NavbarMenu from '../Navbar'
import Select from 'react-select'
import Footer from '../Footer'

const Penunjang = (props) => {
    const [namaAyah, setNamaAyah] = useState("")
    const [pekerjaanAyah, setPekerjaanAyah] = useState("")
    const [namaIbu, setNamaIbu] = useState("")
    const [pekerjaanIbu, setPekerjaanIbu] = useState("")
    const [namaKerabat, setNamaKerabat] = useState("")
    const [hubunganKerabat, setHubunganKerabat] = useState("")
    const [pekerjaanKerabat, setPekerjaanKerabat] = useState("")
    const [skorToefl, setSkorToefl] = useState("")
    const [statusToefl, setStatusToefl] = useState("")
    const [noToefl, setNoToefl] = useState("")
    const [tahunToefl, setTahunToefl] = useState("")
    const [lembagaToefl, setLembagaToefl] = useState("")
    const [twitter, setTwitter] = useState("")
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinkedin] = useState("")

    const navigate = useNavigate()

    const handleSavePekerjaan = async (e) => {
        e.preventDefault()
        props.next()
        window.scroll(0,0)
        // const dataSend = {
        //     no_regis_user: "test",
        //     nama_ayah: namaAyah,
        //     pekerjaan_ayah: pekerjaanAyah,
        //     nama_ibu: namaIbu,
        //     pekerjaan_ibu: pekerjaanIbu,
        //     nama_kerabat: namaKerabat,
        //     hubungan_kerabat: hubunganKerabat,
        //     pekerjaan_kerabat: pekerjaanKerabat,
        //     skor_toefl: skorToefl,
        //     status_toefl: statusToefl,
        //     no_toefl: noToefl,
        //     thn_toefl: tahunToefl,
        //     lembaga_toefl: lembagaToefl,
        //     twitter: twitter,
        //     facebook: facebook,
        //     instagram: instagram,
        //     linkedin: linkedin
        // }
        // await axios.post(`${process.env.REACT_APP_API}/penunjang`, dataSend, {
        //     headers: {
        //         'Content-Type' : 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        // .then(res => {
        //     if (res.data.status === 200) {
        //         navigate('/penunjang')
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
                                <h2 className='pb-3 border-bottom mb-4 d-inline-block' style={{color: "#003565"}}><b>Riwayat Pekerjaan</b></h2>                               
                            </div>
                            <Form onSubmit={(e) => handleSavePekerjaan(e)}>

                                <Form.Group className="mb-3" controlId="nama-ayah">
                                    <Form.Label>Nama Ayah</Form.Label>
                                    <Form.Control type="text" placeholder="Nama Ayah" onChange={(e) => setNamaAyah(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="pekerjaan-ayah">
                                    <Form.Label>Pekerjaan Ayah</Form.Label>
                                    <Form.Control type="text" placeholder="Pekerjaan Ayah" onChange={(e) => setPekerjaanAyah(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nama-ibu">
                                    <Form.Label>Nama Ibu</Form.Label>
                                    <Form.Control type="text" placeholder="Nama Ibu" onChange={(e) => setNamaIbu(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="pekerjaan-ibu">
                                    <Form.Label>Pekerjaan Ibu</Form.Label>
                                    <Form.Control type="text" placeholder="Pekerjaan Ibu" onChange={(e) => setPekerjaanIbu(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nama-kerabat">
                                    <Form.Label>Nama Kerabat</Form.Label>
                                    <Form.Control type="text" placeholder="Nama Kerabat" onChange={(e) => setNamaKerabat(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="hubungan-kerabat">
                                    <Form.Label>Hubungan Kerabat</Form.Label>
                                    <Form.Control type="text" placeholder="Hubungan Kerabat" onChange={(e) => setHubunganKerabat(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="pekerjaan-kerabat">
                                    <Form.Label>Pekerjaan Kerabat</Form.Label>
                                    <Form.Control type="text" placeholder="Pekerjaan Kerabat" onChange={(e) => setPekerjaanKerabat(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="skor-toefl">
                                    <Form.Label>Skor TOEFL</Form.Label>
                                    <Form.Control type="number" placeholder="Skor TOEFL" onChange={(e) => setSkorToefl(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="status-toefl">
                                    <Form.Label>Status TOEFL</Form.Label>
                                    <Form.Control type="text" placeholder="Status TOEFL" onChange={(e) => setStatusToefl(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="skor-toefl">
                                    <Form.Label>Nomor TOEFL</Form.Label>
                                    <Form.Control type="number" placeholder="Skor TOEFL" onChange={(e) => setNoToefl(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="tahun-toefl">
                                    <Form.Label>Tahun TOEFL</Form.Label>
                                    <Form.Control type="number" placeholder="Tahun TOEFL" onChange={(e) => setTahunToefl(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="lembaga-toefl">
                                    <Form.Label>Lembaga TOEFL</Form.Label>
                                    <Form.Control type="text" placeholder="Lembaga TOEFL" onChange={(e) => setLembagaToefl(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="twitter">
                                    <Form.Label>Twitter</Form.Label>
                                    <Form.Control type="text" placeholder="Twitter" onChange={(e) => setTwitter(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="facebook">
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control type="text" placeholder="Facebook" onChange={(e) => setFacebook(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="instagram">
                                    <Form.Label>Instagram</Form.Label>
                                    <Form.Control type="text" placeholder="Instagram" onChange={(e) => setInstagram(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="linkedin">
                                    <Form.Label>LinkedIn</Form.Label>
                                    <Form.Control type="text" placeholder="linkedin" onChange={(e) => setLinkedin(e.target.value)}/>
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

export default Penunjang
