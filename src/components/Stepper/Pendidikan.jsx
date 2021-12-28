import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Col, Container, Form, Row } from 'react-bootstrap'
import NavbarMenu from '../Navbar'
import Select from 'react-select'
import Footer from '../Footer'

const Pendidikan = (props) => {
    const [jenjang, setJenjang] = useState("")
    const [namaInstitusi, setNamaInstitusi] = useState("")
    const [perguruan, setPerguruan] = useState("")
    const [kotaInstitusi, setKotaInstitusi] = useState("")
    const [akreditasi, setAkreditasi] = useState("")
    const [fakultas, setFakultas] = useState("")
    const [jurusan, setJurusan] = useState("")
    const [akreditasiJurusan, setAkreditasiJurusan] = useState("")
    const [periodeMasuk, setPeriodeMasuk] = useState("")
    const [periodeLulus, setPeriodeLulus] = useState("")
    const [TanggalLulus, setTanggalLulus] = useState("")
    const [ipk, setIpk] = useState("")
    const [gelar, setGelar] = useState("")

    const navigate = useNavigate()

    const jenjangPendidikan = [
        {value: "SMA / SMK", label: "SMA / SMK"},
        {value: "Diploma 3 / D3", label: "Diploma 3 / D3"},
        {value: "Strata 1 / S1", label: "Strata 1 / S1"},
        {value: "Strata 2 / S2", label: "Strata 2 / S2"},
        {value: "Strata 3 / S3", label: "Strata 3 / S3"},
    ]

    const jenisPerguruan = [
        {value: "Perguruan Tinggi Negeri", label: "Perguruan Tinggi Negeri"},
        {value: "Perguruan Tinggi Swasta", label: "Perguruan Tinggi Swasta"},
        {value: "Perguruan Tinggi Luar Negeri", label: "Perguruan Tinggi Luar Negeri"}
    ]

    const akrInstitusi = [
        {value: "A", label: "A"},
        {value: "B", label: "B"},
        {value: "C", label: "C"}
    ]

    const akrJurusan = [
        {value: "A", label: "A"},
        {value: "B", label: "B"},
        {value: "C", label: "C"}
    ]

    useEffect(() => {
        // handleProvinsi()
        // handleKota()
        // handleKecamatan()
        // handleKelurahan()
        // handleKodePost()
    }, [])

    const handleSavePendidikan = async (e) => {
        e.preventDefault()
        props.next()
        window.scroll(0,0)
        // const dataSend = {
        //     no_regis_user: "test",
        //     jenjang: jenjang,
        //     nama_institusi: namaInstitusi,
        //     perguruan: perguruan,
        //     kota_institusi: kotaInstitusi,
        //     akreditasi_institusi: akreditasi,
        //     fakultas: fakultas,
        //     jurusan: jurusan,
        //     akreditasi_jurusan: akreditasiJurusan,
        //     periode_dari: periodeMasuk,
        //     periode_ke: periodeLulus,
        //     tgl_lulus: TanggalLulus,
        //     ipk: ipk,
        //     gelar: gelar
        // }
        // await axios.post(`${process.env.REACT_APP_API}/pendidikan`, dataSend, {
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
                                <h2 className='pb-3 border-bottom mb-4 d-inline-block' style={{color: "#003565"}}><b>Pendidikan</b></h2>                               
                            </div>
                            <Form onSubmit={(e) => handleSavePendidikan(e)}>
                                <Form.Group className="mb-3" controlId="jenjang">
                                    <Form.Label>Jenjang Pendidikan</Form.Label>
                                    <Select options={jenjangPendidikan} onChange={(e) => setJenjang(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nama-institusi">
                                    <Form.Label>Nama Institusi</Form.Label>
                                    <Form.Control type="text" placeholder="Nama Institusi" onChange={(e) => setNamaInstitusi(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="perguruan">
                                    <Form.Label>Jenis Perguruan</Form.Label>
                                    <Select options={jenisPerguruan} onChange={(e) => setPerguruan(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="telepon">
                                    <Form.Label>Kota Institusi</Form.Label>
                                    <Form.Control type="text" placeholder="Kota Institusi" onChange={(e) => setKotaInstitusi(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="perguruan">
                                    <Form.Label>Akreditasi Institusi</Form.Label>
                                    <Select options={akrInstitusi} onChange={(e) => setAkreditasi(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="fakultas">
                                    <Form.Label>Fakultas</Form.Label>
                                    <Form.Control type="text" placeholder="Fakultas" onChange={(e) => setFakultas(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="jurusan">
                                    <Form.Label>Jurusan</Form.Label>
                                    <Form.Control type="text" placeholder="Jurusan" onChange={(e) => setJurusan(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="akreditasi-jurusan">
                                    <Form.Label>Akreditasi Jurusan</Form.Label>
                                    <Select options={akrJurusan} onChange={(e) => setAkreditasiJurusan(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="periode-masuk">
                                    <Form.Label>Periode Masuk</Form.Label>
                                    <Form.Control type="date" placeholder="Periode Masuk" onChange={(e) => setPeriodeMasuk(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="periode-lulus">
                                    <Form.Label>Periode Lulus</Form.Label>
                                    <Form.Control type="date" placeholder="Periode Lulus" onChange={(e) => setPeriodeLulus(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="periode-lulus">
                                    <Form.Label>Tanggal Lulus</Form.Label>
                                    <Form.Control type="date" placeholder="Periode Lulus" onChange={(e) => setTanggalLulus(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="ipk">
                                    <Form.Label>IPK</Form.Label>
                                    <Form.Control type="number" placeholder="IPK" onChange={(e) => setIpk(e.target.value)} />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="gelar">
                                    <Form.Label>Gelar</Form.Label>
                                    <Form.Control type="text" placeholder="Gelar Pendidikan" onChange={(e) => setGelar(e.target.value)} />
                                </Form.Group>

                                <button className='py-2 px-3 text-white ml-auto btn-navigation' type="submit">
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

export default Pendidikan
