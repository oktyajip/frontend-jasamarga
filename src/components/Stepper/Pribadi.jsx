import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Col, Container, Form, Row } from 'react-bootstrap'
import NavbarMenu from '../Navbar'
import Select from 'react-select'
import Footer from '../Footer'

const Pribadi = (props) => {
    const [isClear, setIsClear] = useState(false)
    const [tempatLahir, setTempatLahir] = useState("")
    const [tglLahir, setTglLahir] = useState("")
    const [statusMenikah, setStatusMenikah] = useState("")
    const [agama, setAgama] = useState("")
    const [tinggiBadan, setTinggiBadan] = useState("")
    const [beratBadan, setBeratBadan] = useState("")
    const [telepon, setTelepon] = useState("")
    const [handphone, setHandphone] = useState("")
    const [keahlian, setKeahlian] = useState("")
    const [deskripsiDiri, setDeskripsiDiri] = useState("")
    const [motivasi, setMotivasi] = useState("")
    const [alamatKtp, setAlamatKtp] = useState("")
    const [provinsiKtp, setProvinsiKtp] = useState("")
    const [kotaKtp, setKotaKtp] = useState("")
    const [kecamatanKtp, setKecamatanKtp] = useState("")
    const [kelurahanKtp, setKelurahanKtp] = useState("")
    const [kodePosKtp, setKodePosKtp] = useState("")
    const [alamatDomisili, setAlamatDomisili] = useState("")
    const [provinsiDomisili, setProvinsiDomisili] = useState("")
    const [kotaDomisili, setKotaDomisili] = useState("")
    const [kecamatanDomisili, setKecamatanDomisili] = useState("")
    const [kelurahanDomisili, setKelurahanDomisili] = useState("")
    const [kodePosDomisili, setKodePosDomisili] = useState("")

    const [provincies, setProvincies] = useState([])
    const [cities, setCities] = useState([])
    const [kecamatans, setKecamatans] = useState([])
    const [kelurahans, setKelurahans] = useState([])
    const [kodePost, setKodePost] = useState([])

    const navigate = useNavigate()

    const listAgama = [
        {value: "Islam", label: "Islam"},
        {value: "Protestan", label: "Protestan"},
        {value: "Katolik", label: "Katolik"},
        {value: "Hindu", label: "Hindu"},
        {value: "Khonghucu", label: "Khonghucu"},
    ]

    const pernikahan = [
        {value: "Belum Menikah", label: "Belum Menikah"},
        {value: "Sudah Menikah", label: "Sudah Menikah"},
        {value: "Pernah Menikah", label: "Pernah Menikah"},
    ]

    useEffect(() => {
        handleProvinsi()
        handleKota()
        handleKecamatan()
        handleKelurahan()
        handleKodePost()
    }, [])

    const handleProvinsi = () => {
        axios.get(`${process.env.REACT_APP_API}/provinsi`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            setProvincies(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleKota = () => {
        axios.get(`${process.env.REACT_APP_API}/provinsi`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            setCities(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleKecamatan = () => {
        axios.get(`${process.env.REACT_APP_API}/provinsi`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            setKecamatans(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleKelurahan = () => {
        axios.get(`${process.env.REACT_APP_API}/provinsi`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            setKelurahans(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleKodePost = () => {
        axios.get(`${process.env.REACT_APP_API}/provinsi`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            setKodePost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSavePribadi = async (e) => {
        e.preventDefault()
        props.next()
        window.scroll(0,0)
        // const dataSend = {
        //     tmpt_lahir: tempatLahir,
        //     tgl_lahir: tglLahir,
        //     status_nikah: statusMenikah,
        //     agama: agama,
        //     tinggi_badan: tinggiBadan,
        //     berat_badan: beratBadan,
        //     no_tlpn: telepon,
        //     no_hp: handphone,
        //     keahlian: keahlian,
        //     deskripsi_diri: deskripsiDiri,
        //     motivasi: motivasi,
        //     alamat_ktp: alamatKtp,
        //     provinsi_ktp: provinsiKtp,
        //     kota_ktp: kotaKtp,
        //     kecamatan_ktp: kecamatanKtp,
        //     kelurahan_ktp: kelurahanKtp,
        //     kode_pos_ktp: kodePosKtp,
        //     alamat_domisili: alamatDomisili,
        //     provinsi_domisili: provinsiDomisili,
        //     kota_domisili: kotaDomisili,
        //     kecamatan_domisili: kecamatanDomisili,
        //     kelurahan_domisili: kelurahanDomisili,
        //     kode_pos_domisili: kodePosDomisili,
        // }
        // await axios.post(`${process.env.REACT_APP_API}/pribadi`, dataSend, {
        //     headers: {
        //         'Content-Type' : 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        // .then(res => {
        //     if (res.data.status === 200) {
        //         setIsClear(true)
        //         alert("data berhasil disimpan")
        //         props.next()
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
                                <h2 className='pb-3 border-bottom mb-4 d-inline-block' style={{color: "#003565"}}><b>Profil Pribadi</b></h2>                               
                            </div>
                            <Form onSubmit={(e) => handleSavePribadi(e)}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Tempat Lahir</Form.Label>
                                    <Form.Control type="text" placeholder="Tempat Lahir" onChange={(e) => setTempatLahir(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control type="date" placeholder="Tempat Lahir" onChange={(e) => setTglLahir(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Status Menikah</Form.Label>
                                    <Select options={pernikahan} onChange={(e) => setStatusMenikah(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Agama</Form.Label>
                                    <Select options={listAgama} onChange={(e) => setAgama(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="tinggi-badan">
                                    <Form.Label>Tinggi Badan</Form.Label>
                                    <Form.Control type="number" placeholder="Tinggi Badan" onChange={(e) => setTinggiBadan(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="berat-badan">
                                    <Form.Label>Berat Badan</Form.Label>
                                    <Form.Control type="number" placeholder="Berat Badan" onChange={(e) => setBeratBadan(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="telepon">
                                    <Form.Label>No. Telp</Form.Label>
                                    <Form.Control type="telp" placeholder="Nomor Telephone Aktif" onChange={(e) => setTelepon(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="telepon">
                                    <Form.Label>No. Hp</Form.Label>
                                    <Form.Control type="telp" placeholder="Nomor Handphone Aktif" onChange={(e) => setHandphone(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Keahlian</Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={(e) => setKeahlian(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="deskripsi">
                                    <Form.Label>Deskripsi Diri</Form.Label>
                                    <Form.Control as="textarea" rows={3}  onChange={(e) => setDeskripsiDiri(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="motivasi">
                                    <Form.Label>Motivasi</Form.Label>
                                    <Form.Control as="textarea" rows={3}  onChange={(e) => setMotivasi(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Alamat KTP</Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={(e) => setAlamatKtp(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Provinsi KTP</Form.Label>
                                    <Select options={provincies} onChange={e => setProvinsiKtp(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Kabupaten/Kota KTP</Form.Label>
                                    <Select options={cities} onChange={e => setKotaKtp(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="kecamatan-ktp">
                                    <Form.Label>Kecamatan KTP</Form.Label>
                                    <Form.Control type="text" placeholder="Kecamatan KTP" onChange={(e) => setKecamatanKtp(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="kelurahan-ktp">
                                    <Form.Label>Kelurahan KTP</Form.Label>
                                    <Form.Control type="text" placeholder="Kelurahan KTP" onChange={(e) => setKelurahanKtp(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Kode Pos Ktp</Form.Label>
                                    <Select options={kodePost} onChange={e => setKodePosKtp(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Alamat Domisili</Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={(e) => setAlamatDomisili(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Provinsi Domisili</Form.Label>
                                    <Select options={provincies} onChange={e => setProvinsiDomisili(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Kabupaten/Kota Domisili</Form.Label>
                                    <Select options={cities} onChange={e => setKotaDomisili(e.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="kecamatan-domisili">
                                    <Form.Label>Kecamatan Domisili</Form.Label>
                                    <Form.Control type="text" placeholder="Kecamatan Domisili" onChange={(e) => setKecamatanDomisili(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="kelurahan-domisili">
                                    <Form.Label>Kelurahan Domisili</Form.Label>
                                    <Form.Control type="text" placeholder="Kecamatan Domisili" onChange={(e) => setKelurahanDomisili(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="keahlian">
                                    <Form.Label>Kode Pos Domisili</Form.Label>
                                    <Select options={kodePost} onChange={e => setKodePosDomisili(e.value)}/>
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

export default Pribadi
