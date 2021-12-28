import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Col, Container, Form, Row } from 'react-bootstrap'
import NavbarMenu from '../Navbar'
import Select from 'react-select'
import Footer from '../Footer'

const Pekerjaan = (props) => {
    const [jenisPengalaman, setJenisPengalaman] = useState("")
    const [jenisPerusahaan, setJenisPerusahaan] = useState("")
    const [periodeMasuk, setPeriodeMasuk] = useState("")
    const [periodeKeluar, setPeriodeKeluar] = useState("")
    const [status, setStatus] = useState("")
    const [statusKerja, setStatusKerja] = useState("")
    const [gaji, setGaji] = useState("")
    const [perusahaanFungsi, setPerusahaanFungsi] = useState("")
    const [pihakReferensi, setPihakReferensi] = useState("")
    const [hubunganReferensi, setHubunganReferensi] = useState("")
    const [teleponReferensi, setTeleponReferensi] = useState("")

    const navigate = useNavigate()

    const statusPekerjaan = [
        {value: "Kontrak", label: "Kontrak"},
        {value: "Tetap", label: "Tetap"},
        {value: "Magang", label: "Magang"}
    ]

    const kondisiKerja = [
        {value: "Masih Aktif Bekerja", label: "Masih Aktif Bekerja"},
        {value: "Sudah Tidak Aktif Bekerja", label: "Sudah Tidak Aktif Bekerja"}
    ]

    const handleSavePekerjaan = async (e) => {
        e.preventDefault()
        props.next()
        window.scroll(0,0)
        // const dataSend = {
        //     no_regis_user: "test",
        //     jenis_pengalaman: jenisPengalaman,
        //     jenis_perusahaan: jenisPerusahaan,
        //     periode_dari: periodeMasuk,
        //     periode_ke: periodeKeluar,
        //     status: status,
        //     status_kerja: statusKerja,
        //     gaji: gaji,
        //     perusahaan_fungsi: perusahaanFungsi,
        //     pihak_referensi: pihakReferensi,
        //     hubungan_referensi: hubunganReferensi,
        //     no_tlpn_referensi: teleponReferensi
        // }
        // await axios.post(`${process.env.REACT_APP_API}/pendidikan`, dataSend, {
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

                                <Form.Group className="mb-3" controlId="nama-institusi">
                                    <Form.Label>Posisi Pekerjaan</Form.Label>
                                    <Form.Control type="text" placeholder="Posisi Pekerjaan" onChange={(e) => setJenisPengalaman(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nama-institusi">
                                    <Form.Label>Jenis Perusahaan</Form.Label>
                                    <Form.Control type="text" placeholder="Jenis Perusahaan" onChange={(e) => setJenisPerusahaan(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="periode-masuk">
                                    <Form.Label>Periode Masuk</Form.Label>
                                    <Form.Control type="date" placeholder="Periode Masuk" onChange={(e) => setPeriodeMasuk(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="periode-keluar">
                                    <Form.Label>Periode Keluar</Form.Label>
                                    <Form.Control type="date" placeholder="Periode Keluar" onChange={(e) => setPeriodeKeluar(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="status">
                                    <Form.Label>Status</Form.Label>
                                    <Select options={statusPekerjaan} onChange={e => setStatus(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="status-kerja">
                                    <Form.Label>Status Kerja</Form.Label>
                                    <Select options={kondisiKerja} onChange={e => setStatusKerja(e.value)}/>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="gaji">
                                    <Form.Label>Gaji</Form.Label>
                                    <Form.Control type="number" placeholder="Gaji" onChange={(e) => setGaji(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nama-institusi">
                                    <Form.Label>Perusahaan Fungsi</Form.Label>
                                    <Form.Control type="text" placeholder="Perusahaan Fungsi" onChange={(e) => setPerusahaanFungsi(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="gaji">
                                    <Form.Label>Pihak Referensi</Form.Label>
                                    <Form.Control type="text" placeholder="Gaji" onChange={(e) => setPihakReferensi(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nama-institusi">
                                    <Form.Label>Hubungan Referensi</Form.Label>
                                    <Form.Control type="text" placeholder="Perusahaan Fungsi" onChange={(e) => setHubunganReferensi(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nama-institusi">
                                    <Form.Label>Nomor Telepon Referensi</Form.Label>
                                    <Form.Control type="telp" placeholder="Perusahaan Fungsi" onChange={(e) => setTeleponReferensi(e.target.value)}/>
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

export default Pekerjaan
