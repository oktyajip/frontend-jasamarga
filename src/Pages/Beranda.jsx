import React, { useState } from 'react'
import './style.css'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import NavbarMenu from '../components/Navbar'
import BgHero from "../Images/jnk.jpeg"
import People from '../Images/man-talent.png'
import JerRoad from '../Images/jetroadster.png'
import Talent1 from '../Images/talent-1.jpg'
import Talent2 from '../Images/talent-5.jpg'
import Map from '../Images/flow-jetroadster.svg'
import Alur01 from '../Images/alur01.png'
import Alur02 from '../Images/alur02.png'
import Alur03 from '../Images/alur03.png'
import Alur04 from '../Images/alur04.png'
import Alur05 from '../Images/alur05.png'
import Alur06 from '../Images/alur06.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import 'animate.css'

const Beranda = () => {
    const [tabActive, setTabActive] = useState("1")

    return (
        <>
            <NavbarMenu />
            <div className='hero'>
                <Container>
                    <Row className='d-flex'>
                        <Col className='content py-5 d-flex align-items-center'>
                            <div>
                                <p className='text-sm font-weight-bold d-inline-block border border-dark rounded-pill p-2'>Reg. Online : 3 - 9 November 2021 Pk. 23:59 WIB</p>
                                <h1 className="font-weight-bolder animate__animated animate__bounceIn" style={{color: "#003565"}}>Toll Road Industry Leader in Indonesia Needs Future Leader JET ROADSTER 2021</h1>
                                <p>Perhatian! PT Jasa Marga (Persero) Tbk tidak memungut biaya apapun selama proses seleksi.</p>
                                <div>
                                    <button className='px-4 py-2 text-white mr-2' style={{backgroundColor:'#003565', borderRadius:"10px", border:"none"}}>Daftar</button>
                                    <button className='px-4 py-2 text-white mr-2' style={{backgroundColor:'transparent', borderRadius:"10px", border:"#fff 1px solid"}}>Profil Kami</button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={5} className='align-self-end'>
                            <img style={{width:"500px"}} src={People} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <section id='information' className="program">
                <Container>
                    <Row className='py-5'>
                        <Col xs={8}>
                            <div className='tag'>
                                <p className='px-4 py-2 border d-inline-block rounded-pill text-sm'>Program Rekrutmen</p>
                            </div>
                            <div className="heading">
                                <h1 className='font-weight-bold'>JET ROADSTER 2021</h1>
                                <h4 className='font-weight-bold'>Conquer The Limitations Through Innovation!</h4>
                            </div>
                            <div className="desc py-4 my-4">
                                <p>Program Management Trainee Jasa Marga yang didesain untuk talenta muda terbaik yang ingin belajar, bertumbuh dan berkontribusi untuk Indonesia.</p>
                            </div>
                            <Row className='mb-3'>
                                <Col md={5} className='bg-white shadow p-2 mx-2 animate__animated animate__fadeIn' style={{borderRadius: "10px"}}>
                                    <Row className='d-flex align-items-center'>
                                        <Col xs={2}>
                                            <h2 className='mx-auto'>&#128640;</h2>
                                        </Col>
                                        <Col xs={10}>
                                            <h6 style={{color:"#003565"}}>Career Acceleration</h6>
                                            <p>Providing a fast-track talent mobility.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={5} className='bg-white shadow p-2 mx-2 animate__animated animate__fadeIn' style={{borderRadius: "10px"}}>
                                    <Row className='d-flex align-items-center'>
                                        <Col xs={2}>
                                            <h2 className='mx-auto'>&#128176;</h2>
                                        </Col>
                                        <Col xs={10}>
                                            <h6 style={{color:"#003565"}}>Attractive Total Reward</h6>
                                            <p>Offering attractive remuneration packages and benefits.</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col md={5} className='bg-white shadow p-3 mx-2 animate__animated animate__fadeIn' style={{borderRadius: "10px"}}>
                                    <Row className='d-flex align-items-center'>
                                        <Col xs={2}>
                                            <h2 className='mx-auto'>&#129504;</h2>
                                        </Col>
                                        <Col xs={10}>
                                            <h6 style={{color:"#003565"}}>Unique Learning Experience</h6>
                                            <p>Giving unique personalized-learning experiences and training from top-management mentor.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={5} className='bg-white shadow p-3 mx-2 animate__animated animate__fadeIn' style={{borderRadius: "10px"}}>
                                    <Row className='d-flex align-items-center'>
                                        <Col xs={2}>
                                            <h2 className='mx-auto'>&#127891;</h2>
                                        </Col>
                                        <Col xs={10}>
                                            <h6 style={{color:"#003565"}}>Overseas Education Opportunity</h6>
                                            <p>Opening up opportunities to take short course programs abroad.</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='d-flex animate__animated animate__fadeIn' xs={4} style={{backgroundColor:"#EAF2FF", borderRadius:"10px"}}>
                            <img className='img-thumbnail align-self-center' style={{backgroundColor:"#EAF2FF", border:"none"}} src={JerRoad} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col>
                            <div className="heading mb-4 animate__animated animate__fadeIn">
                                <h1 className='font-weight-bold'>Jadilah Bagian dari Kami</h1>
                            </div>
                            <div>
                                <div className='d-flex mb-3 animate__animated animate__fadeIn'>
                                    <h2>&#127759;</h2>
                                    <p className='mx-4'>Pemegang periode konsesi terlama di Asia yang mencerminkan pendapatan yang stabil.</p>
                                </div>
                                <div className='d-flex mb-3 animate__animated animate__fadeIn'>
                                    <h2>&#127380;</h2>
                                    <p className='mx-4'>Penting secara strategis dengan kepemilikan pemerintah yang kuat dimana seluruh proyek yang sedang dibangun termasuk ke dalam Proyek Strategis Nasional (PSN).</p>
                                </div>
                                <div className='d-flex mb-3 animate__animated animate__fadeIn'>
                                    <h2>&#127981;</h2>
                                    <p className='mx-4'>Industri yang Tangguh dengan fokus pemerintah yang kuat.</p>
                                </div>
                                <div className='d-flex mb-3 animate__animated animate__fadeIn'>
                                    <h2>&#128200;</h2>
                                    <p className='mx-4'>Profil keuangan yang solid di tengah ekspansi pembangunan jalan tol baru.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Row className='mb-4 p-0'>
                                <Col>
                                    <img className='img-fluid animate__animated animate__fadeIn' style={{borderRadius: "10px"}} src={Talent1} alt="" />
                                </Col>
                                <Col>
                                    <img className='img-fluid animate__animated animate__fadeIn' style={{borderRadius: "10px"}} src={Talent2} alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img className='img-fluid animate__animated animate__fadeIn' style={{borderRadius: "10px"}} src={Talent1} alt="" />
                                </Col>
                                <Col>
                                    <img className='img-fluid animate__animated animate__fadeIn' style={{borderRadius: "10px"}} src={Talent2} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='py-3'>
                <Container className='position-relative'>
                    <div className="heading text-center animate__animated animate__fadeIn">
                        <h1 className='font-weight-bold'>Jadwal dan Proses Seleksi</h1>
                        <p>Jadwal masih dapat berubah berdasarkan keputusan Panitia Rekrutmen dan Seleksi.</p>
                    </div>
                    <Row>
                        <Col className='position-relative animate__animated animate__fadeIn'>
                            <div className='sticky-top' style={{paddingTop:"100px", paddingBottom:'100px'}}>
                                <img src={Map} alt="" />
                            </div>
                        </Col>
                        <Col>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#003565",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process border border-dark p-0" style={{borderRadius:"10px"}}>
                                    <div>
                                        <div className="p-heading px-3 py-2" style={{borderBottom: "black solid 1px"}}>
                                            <p className='font-weight-bold m-0'>Tahap 1a : Registrasi Online dan Seleksi Administrasi</p>
                                        </div>
                                        <div className="p-content px-3 py-2">
                                            <p className='m-0'>3 - 9 November 2021 Pk. 23:59 WIB</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#E9F2FE",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process p-0" style={{borderRadius:"10px", border:"#E9F2FE 1px solid"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "#E9F2FE solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Pengumuman Tahap 1a</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>18 November 2021 Pk. 21:00 WIB</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#003565",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process border border-dark p-0" style={{borderRadius:"10px"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "black solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Tahap 1b : Tes Potensi Akademik dan Bahasa Inggris</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>20 November 2021</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#E9F2FE",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process p-0" style={{borderRadius:"10px", border:"#E9F2FE 1px solid"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "#E9F2FE solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Pengumuman Seleksi Tahap 1b</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>24 November 2021 Pk. 21:00 WIB</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#003565",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process border border-dark p-0" style={{borderRadius:"10px"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "black solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Tahap 2 : Work Quality Test dan Video Tiktok Profile</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>25 - 27 November 2021</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#E9F2FE",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process p-0" style={{borderRadius:"10px", border:"#E9F2FE 1px solid"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "#E9F2FE solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Pengumuman Seleksi Tahap 2</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>2 Desember 2021 Pk. 21:00 WIB</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#003565",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process border border-dark p-0" style={{borderRadius:"10px"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "black solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Tahap 3 : Brand Knowledge TikTok Video dan Online Psychological Test</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>3 - 5 Desember 2021</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#E9F2FE",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process p-0" style={{borderRadius:"10px", border:"#E9F2FE 1px solid"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "#E9F2FE solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Pengumuman Seleksi Tahap 3</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>9 Desember 2021</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#003565",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process border border-dark p-0" style={{borderRadius:"10px"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "black solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Tahap 4 : Project Assignment, Leaderless Group Discussion dan Wawancara</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>11 - 13 Desember 2021</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#E9F2FE",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process p-0" style={{borderRadius:"10px", border:"#E9F2FE 1px solid"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "#E9F2FE solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Pengumuman Seleksi Tahap 4</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>Akan diinformasikan kemudian</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 animate__animated animate__fadeInUp'>
                                <Col xs={2}>
                                    <div className='dot mr-4' style={{backgroundColor:"#003565",width:'30px', height:'30px', borderRadius:"7px"}}></div>
                                </Col>
                                <Col xs={10} className="process border border-dark p-0" style={{borderRadius:"10px"}}>
                                    <div className="p-heading px-3 py-2" style={{borderBottom: "black solid 1px"}}>
                                        <p className='font-weight-bold m-0'>Tahapan selanjutnya di PT Jasa Marga (Persero) Tbk</p>
                                    </div>
                                    <div className="p-content px-3 py-2">
                                        <p className='m-0'>www.jasamarga.com/recruitment</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='py-3'>
                <Container>
                    <div className='mb-5'>
                        <h1 className='font-weight-bold text-center'>Ketentuan Umum</h1>
                    </div>
                </Container>
                <div className="desc-ketentuan">
                    <Container>
                        <Row className="mb-3 text-sm">
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#9989;</h2>
                                <p className='text-xs'>Setiap pelamar hanya diperbolehkan mendaftar 1 (satu) kali.</p>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#127760;</h2>
                                <p className='text-xs'>Pendaftaran dilakukan secara online melalui <b>https://ppm-rekrutmen.com/jasamarga</b>. Panitia tidak menerima lamaran melalui pos atau media pengiriman lainnya.</p>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#128187;</h2>
                                <p className='text-xs'>Bagi Pelamar yang pernah mengirimkan lamaran, diwajibkan memperbaharui lamaran dengan melakukan registrasi online melalui situs-web ini.</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#9989;</h2>
                                <p className='text-xs'>Proses rekrutmen dan seleksi seluruhnya dilakukan oleh PPM Manajemen, kecuali Wawancara User dilakukan oleh Pihak Perusahaan.</p>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#128226;</h2>
                                <p className='text-xs' style={{backgroundColor: "#E9F2FE"}}>Seluruh kegiatan seleksi online dan pengumuman tiap tahapan seleksi akan melalui <b>https://ppm-rekrutmen.com/jasamarga.</b></p>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#128196;</h2>
                                <p className='text-xs'>Panitia dan Manajemen Perusahaan berhak sepenuhnya menetapkan daftar kandidat yang dinilai memenuhi kualifikasi pada setiap tahapan seleksi.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#128222;</h2>
                                <p className='text-xs'>Seluruh tahapan proses rekrutmen dan seleksi <b>tidak dipungut biaya apapun</b>. Apabila ada pihak yang berusaha meminta biaya/menjanjikan sesuatu/menawarkan bantuan atas proses rekrutmen dan seleksi dapat melapor ke call center PPM Manajemen.</p>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#128176;</h2>
                                <p className='text-xs'>Seluruh biaya akomodasi dan transportasi selama proses seleksi menjadi tanggungan pelamar.</p>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className="mx-2">&#128197;</h2>
                                <p className='text-xs'>Masa waktu registrasi online adalah 3 - 9 November 2021 2021 Pk. 23:59 WIB.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section>
                <Container>
                    <div className='mb-5'>
                        <h1 className='font-weight-bold text-center'>Tata Cara Melamar</h1>
                    </div>
                    <ol>
                        <li className='mb-3'>Pelamar hanya dapat melamar melalui situs web https://ppm-rekrutmen.com/jasamarga dengan mengikuti petunjuk pendaftaran. Tidak ada jalur lain yang digunakan untuk pengiriman lamaran.</li>
                        <li className='mb-3'>Pelamar wajib memiliki alamat e-mail pribadi dan nomor telepon seluler yang masih aktif untuk dapat mengikuti proses seleksi ini. Pelamar dilarang menggunakan alamat e-mail milik orang lain/kantor dalam proses pendaftaran.</li>
                        <li className='mb-3'>Tidak ada layanan untuk perubahan/koreksi seluruh data-data serta dokumen yang telah dikirim oleh pelamar.</li>
                        <li className='mb-3'>Untuk memudahkan registrasi online, persiapkan terlebih dahulu beberapa dokumen ini. Data dan soft file (dengan format JPG, masing-masing file/dokumen berukuran maksimum 100kb untuk Pas Foto dan E-KTP/Surat Keterangan Perekaman E-KTP serta maksimum 500kb untuk lainnya) dari dokumen tersebut diperlukan untuk melengkapi form registrasi unggah dokumen sebagai berikut:
                            <Table striped bordered hover className='my-3'>
                                <thead>
                                    <tr>
                                        <th style={{width:'60%'}}></th>
                                        <th className='text-center' style={{width:'20%'}}>
                                            <span className='d-block'>Pelamar Eksternal</span>
                                            <span className='d-block' style={{color:"gray", fontSize:"small"}}>Kode: MTE</span>
                                        </th>
                                        <th className='text-center' style={{width:'20%'}}>
                                            <span className='d-block'>Pelamar Internal</span>
                                            <span className='d-block' style={{color:"gray", fontSize:"small"}}>Kode: MTI</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pas Foto terbaru</td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>E-KTP/Surat Keterangan Perekaman E-KTP Asli</td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Ijazah S1/Sederajat/Surat Keterangan Lulus Asli yang digunakan untuk melamar dan Penyetaraan Ijazah bagi pelamar dari Perguruan Tinggi Luar Negeri yang dikeluarkan oleh DIKTI</td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Transkrip Nilai Asli yang digunakan untuk melamar</td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Surat Pernyataan sesuai format <a href="/">download</a></td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Surat Rekomendasi dari atasan sesuai format <a href="/">download</a></td>
                                        <td className='text-center'></td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Sertifikat Vaksin minimal dosis pertama</td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Sertifikat Magang (Jika pernah mengikuti Magang)</td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'></td>
                                    </tr>
                                    <tr>
                                        <td>Sertifikat Prestasi Akademik dan atau Non Akademik <span className='font-weight-bold border border-dark px-2 py-1' style={{fontSize:"small", color:"#003565", borderRadius:"10px"}}>Jika ada</span></td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Sertifikat Keahlian <span className='font-weight-bold border border-dark px-2 py-1' style={{fontSize:"small", color:"#003565", borderRadius:"10px"}}>Jika ada</span></td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Sertifikat TOEFL ITP <span className='font-weight-bold border border-dark px-2 py-1' style={{fontSize:"small", color:"#003565", borderRadius:"10px"}}>Jika ada</span></td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                    <tr>
                                        <td>Sertifikat Pencapaian/Penghargaan <span className='font-weight-bold border border-dark px-2 py-1' style={{fontSize:"small", color:"#003565", borderRadius:"10px"}}>Jika ada</span></td>
                                        <td className='text-center'>&#10004;</td>
                                        <td className='text-center'>&#10004;</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </li>
                        <li className='mb-3'>Batas akhir unggah dan submit dokumen yang dipersyaratkan sampai dengan 9 November 2021 Pk. 23:59 WIB.</li>
                        <li className='mb-3'>Pelamar wajib melakukan registrasi secara online dari 3 - 9 November 2021. Bagi pelamar yg tidak menggunakan web registrasi yang tertera pada pengumuman ini dan diluar waktu registrasi dinyatakan tidak memenuhi kualifikasi.</li>
                        <li className='mb-3'>Jadwal kegiatan dan tanggal pengumuman hasil seleksi setiap tahap dapat dilihat pada Jadwal dan Proses Seleksi.</li>
                    </ol>
                </Container>
            </section>
            <section className='pb-5'>
                <Container>
                    <Row>
                        <Col>
                            <div className="heading my-5">
                                <h1 className='font-weight-bold text-center'>Alur Registrasi Online</h1>
                            </div>
                            <div className="tabs d-flex justify-content-around align-items-center mb-5">
                                <Button className='px-5 bg-white text-dark font-weight-bold shadow-sm rounded' style={{border:"none", borderBottom: tabActive === "1" ? "solid 2px #003565" : "#fff"}} onClick={() => setTabActive("1")}>
                                    Step 1
                                </Button>
                                <Button className='px-5 bg-white text-dark font-weight-bold shadow-sm rounded' style={{border:"none", borderBottom: tabActive === "2" ? "solid 2px #003565" : "#fff"}} onClick={() => setTabActive("2")}>
                                    Step 2
                                </Button>
                                <Button className='px-5 bg-white text-dark font-weight-bold shadow-sm rounded' style={{border:"none", borderBottom: tabActive === "3" ? "solid 2px #003565" : "#fff"}} onClick={() => setTabActive("3")}>
                                    Step 3
                                </Button>
                                <Button className='px-5 bg-white text-dark font-weight-bold shadow-sm rounded' style={{border:"none", borderBottom: tabActive === "4" ? "solid 2px #003565" : "#fff"}} onClick={() => setTabActive("4")}>
                                    Step 4
                                </Button>
                                <Button className='px-5 bg-white text-dark font-weight-bold shadow-sm rounded' style={{border:"none", borderBottom: tabActive === "5" ? "solid 2px #003565" : "#fff"}} onClick={() => setTabActive("5")}>
                                    Step 5
                                </Button>
                                <Button className='px-5 bg-white text-dark font-weight-bold shadow-sm rounded' style={{border:"none", borderBottom: tabActive === "6" ? "solid 2px #003565" : "#fff"}} onClick={() => setTabActive("6")}>
                                    Step 6
                                </Button>
                            </div>

                            <div className={`${tabActive === "1" ? 'd-block' : 'd-none'} tab-content text-center mb-4`}>
                                <h4 className='font-weight-bold'>1. Membaca Seluruh Informasi</h4>
                                <p className='mb-3'>Membaca seluruh informasi ketentuan dan persyaratan yang berada di situs web ini. ppm-rekrutmen.com/jasamarga</p>
                                <img style={{width:"500px"}} src={Alur01} alt="" />
                            </div>
                            
                            <div className={`${tabActive === "2" ? 'd-block' : 'd-none'} tab-content text-center mb-4`}>
                                <h4 className='font-weight-bold'>2. Daftar</h4>
                                <p className='mb-3'>Menekan tombol daftar di posisi yang dipilih, centang seluruh pernyataan dan tekan tombol setuju.</p>
                                <img style={{width:"500px"}} src={Alur02} alt="" />
                            </div>
                            
                            <div className={`${tabActive === "3" ? 'd-block' : 'd-none'} tab-content text-center mb-4`}>
                                <h4 className='font-weight-bold'>3. Mengisi Form Registrasi dan Submit Data</h4>
                                <p className='mb-3'>Silakan mengisi form yang telah disediakan, pastikan data benar dan valid. Akhiri dengan menekan tombol Kirim. Perhatian! Setelah menekan tombol kirim, data Anda tidak bisa diubah kembali.</p>
                                <img style={{width:"500px"}} src={Alur03} alt="" />
                            </div>

                            <div className={`${tabActive === "4" ? 'd-block' : 'd-none'} tab-content text-center mb-4`}>
                                <h4 className='font-weight-bold'>4. Unggah Dokumen</h4>
                                <p className='mb-3'>Biodata Anda telah terekam di sistem kami. Selanjutnya tekan tombol login, Anda diwajibkan untuk unggah dokumen yang dipersyaratkan sesuai posisi yang dipilih.</p>
                                <img style={{width:"500px"}} src={Alur04} alt="" />
                            </div>

                            <div className={`${tabActive === "5" ? 'd-block' : 'd-none'} tab-content text-center mb-4`}>
                                <h4 className='font-weight-bold'>5. Submit Dokumen</h4>
                                <p className='mb-3'>Setelah menunggah dokumen yang dipersyaratkan, pastikan tidak ada salah dan akhiri dengan menekan tombol submit.</p>
                                <img style={{width:"500px"}} src={Alur05} alt="" />
                            </div>

                            <div className={`${tabActive === "6" ? 'd-block' : 'd-none'} tab-content text-center mb-4`}>
                                <h4 className='font-weight-bold'>6. Selesai</h4>
                                <p className='mb-3'>Lamaran Anda telah kami terima. Proses selanjutnya menunggu hasil seleksi tahap 1.</p>
                                <img style={{width:"500px"}} src={Alur06} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section style={{backgroundColor:"#003565"}}>
                <Container>
                    <Row>
                        <Col>
                            <div className="heading my-5 text-center text-white">
                                <p className='d-inline-block border border-light px-2 py-1' style={{borderRadius: "10px"}}>Bacalah dengan teliti</p>
                                <h1 className='font-weight-bold text-center'>Persyaratan dan Pendaftaran</h1>
                                <p style={{fontSize:"small"}}>Sebelum mendaftar pastikan Anda telah membaca seluruh ketentuan umum, tata cara melamar dan jadwal kegiatan rekrutmen dan seleksi di situs web ini.</p>
                            </div>
                            <ol className='text-white'>
                                <li>Warga Negara Indonesia.</li>
                                <li>Bersedia mengikuti ikatan dinas.</li>
                                <li>Bersedia ditempatkan di seluruh wilayah operasi Jasa Marga Grup (Seluruh Indonesia).</li>
                                <li>Telah melaksanakan vaksin minimal dosis pertama dan melampirkan bukti vaksin.</li>
                                <li>Sehat jasmani, rohani dan bebas narkoba.</li>
                                <li>Tidak menjadi anggota atau pengurus partai atau terlibat politik praktis.</li>
                                <li>Tidak menjadi anggota atau pengurus organisasi terlarang.</li>
                                <li>Tidak pernah dan/atau tidak sedang dalam proses pengadilan atau terlibat dalam proses hukum.</li>
                                <li>Tidak pernah terlibat perbuatan kriminal secara langsung maupun tidak langsung.</li>
                            </ol>
                            <Row className='text-white pb-4' style={{borderBottom:"#E9F2FE 1px solid"}}>
                                <Col>
                                    <h3 className='font-weight-bold'>Bagi pelamar yang berasal dari Eksternal</h3>
                                    <h2 className='font-weight-bold d-inline-block p-2 rounded' style={{backgroundColor:"#F8C72C"}}>KODE : MTE</h2>
                                </Col>
                                <Col>
                                    <ol className='text-white'>
                                        <li>Usia maksimal 26 tahun per 31 Desember 2021.</li>
                                        <li>Jenjang pendidikan minimal S1/Sederajat.</li>
                                        <li>Jurusan Pendidikan: 
                                            <ol type='a'>
                                                <li>Teknik (Teknik Sipil, Teknik Lingkungan, Planologi, Teknik Industri);</li>
                                                <li>IT (Teknik Informatika, Sistem Informasi, Teknik Elektro Bidang Komputer dan Informatika, Ilmu Komputer);</li>
                                                <li>Komunikasi (Ilmu Komunikasi, Marketing Communication, Marketing, Public Relations, Manajemen Komunikasi);</li>
                                                <li>Hukum;</li>
                                                <li>Statistika, Matematika;</li>
                                                <li>Keuangan (Akuntansi, Perpajakan)</li>
                                                <li>Manajemen (Manajemen Keuangan, Manajemen SDM, Manajemen Bisnis)</li>
                                                <li>Psikologi.</li>
                                            </ol>
                                        </li>
                                    </ol>
                                    <Button className='mt-4 font-weight-bold bg-warning py-2 px-4' style={{border:"none"}}><Link className='text-white' to="/pendaftaran">Daftar</Link></Button>
                                </Col>
                            </Row>
                            <Row className='text-white pt-4'>
                                <Col>
                                    <h3 className='font-weight-bold'>Bagi pelamar yang berasal dari Internal</h3>
                                    <h2 className='font-weight-bold d-inline-block p-2 rounded' style={{backgroundColor:"#F8C72C"}}>KODE : MTI</h2>
                                </Col>
                                <Col>
                                    <ol className='text-white'>
                                        <li>Usia maksimal 35 tahun per 31 Desember 2021.</li>
                                        <li>Merupakan karyawan PKWTT Jasa Marga Group dengan jabatan setara dengan Senior Officer, Supervisor Customer Services, Officer, Customer Service.</li>
                                        <li>Jenjang pendidikan minimal S1/Sederajat.</li>
                                        <li>Jurusan Pendidikan: 
                                            <ol type='a'>
                                                <li>Teknik (Teknik Sipil, Teknik Lingkungan, Planologi, Teknik Industri);</li>
                                                <li>IT (Teknik Informatika, Sistem Informasi, Teknik Elektro Bidang Komputer dan Informatika, Ilmu Komputer);</li>
                                                <li>Komunikasi (Ilmu Komunikasi, Marketing Communication, Marketing, Public Relations, Manajemen Komunikasi);</li>
                                                <li>Hukum;</li>
                                                <li>Statistika, Matematika;</li>
                                                <li>Keuangan (Akuntansi, Perpajakan)</li>
                                                <li>Manajemen (Manajemen Keuangan, Manajemen SDM, Manajemen Bisnis)</li>
                                                <li>Psikologi.</li>
                                            </ol>
                                        </li>
                                        <li><b>Mendapatkan rekomendasi dari Atasan.</b></li>
                                    </ol>
                                    <Button className='my-4 font-weight-bold bg-warning py-2 px-4' style={{border:"none"}}><Link className='text-white' to="/pendaftaran">Daftar</Link></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Beranda
