import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavbarMenu from '../components/Navbar'


const Faq = () => {
    const [tabActive, setTabActive] = useState("1")
    
    return (
        <>
            <NavbarMenu />
            <section className='' style={{paddingTop: "100px"}}>
                <div className="heading my-5 text-center">
                    <p className='d-inline-block px-2' style={{borderRadius: "10px", color:"#003565", border:"1px solid #003565"}}><small><b>Apa yang bisa kami bantu?</b></small></p>
                    <h1 className='font-weight-bold text-center'>Pusat Bantuan</h1>
                </div>
            </section>
            <section className='mb-5'>
                <Container fluid>
                    <Row className='mx-5'>
                        <Col md={3}>
                            <div className='d-flex'>
                                <p style={{color: tabActive === "1" ? "#003565" : null}}><b>Spesifikasi Perangkat</b></p>
                                {
                                    tabActive === "1" ? <hr style={{width: "30%", borderTop: "4px #003565 solid", borderRadius:"2px"}}/> : null
                                }
                            </div>
                            <div className='d-flex'>
                                <p style={{color: tabActive === "2" ? "#003565" : null}}><b>Registrasi Online</b></p>
                                {
                                    tabActive === "2" ? <hr style={{width: "30%", borderTop: "4px #003565 solid", borderRadius:"2px"}}/> : null
                                }
                                
                            </div>
                            <div className='d-flex'>
                                <p style={{color: tabActive === "3" ? "#003565" : null}}><b>Informasi dan Data</b></p>
                                {
                                    tabActive === "3" ? <hr style={{width: "30%", borderTop: "4px #003565 solid", borderRadius:"2px"}}/> : null
                                }
                            </div>
                            <div className='d-flex'>
                                <p style={{color: tabActive === "4" ? "#003565" : null}}><b>Kelengkapan Dokumen</b></p>
                                {
                                    tabActive === "4" ? <hr style={{width: "30%", borderTop: "4px #003565 solid", borderRadius:"2px"}}/> : null
                                }
                            </div>
                            <div className='d-flex'>
                                <p style={{color: tabActive === "5" ? "#003565" : null}}><b>Upload Dokumen</b></p>
                                {
                                    tabActive === "5" ? <hr style={{width: "30%", borderTop: "4px #003565 solid", borderRadius:"2px"}}/> : null
                                }
                            </div>
                        </Col>
                        <Col>
                            <div class="accordion mb-4" id="accordionExample">
                                <div class="card">
                                    <div class="card-header p-0" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-block text-left p-3" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <b>Q.</b> Perangkat
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body" style={{color:"gray"}}>
                                            <ol>
                                                <li>Koneksi Internet ISP broadband wired atau wireless (4G/LTE)</li>
                                                <li>Laptop/PC/Smartphone</li>
                                                <li>Webcam atau HD webcam built-in /USB plug-in atau HD cam / HD camcorder dengan video capture card *</li>
                                                <li>Speaker, Microphone built-in/USB plug-in/wireless Bluetooth **</li>
                                            </ol>
                                            <small>* digunakan saat Anda dinyatakan lolos seleksi administrasi dan saat pengerjaan online test</small><br />
                                            <small>** digunakan saat Anda dinyatakan lolos seleksi administrasi dan saat pengerjaan wawancara dan forum group disccusion online</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion mb-4" id="accordion01">
                                <div class="card">
                                    <div class="card-header p-0" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-block text-left p-3" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            <b>Q.</b> Sistem Operasi
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion01">
                                        <div class="card-body" style={{color:"gray"}}>
                                            <ol>
                                                <li>macOS X with macOS 10.7 atau lebih ditinggi</li>
                                                <li>Windows 10</li>
                                                <li>Windows 8 atau 8.1</li>
                                                <li>Windows 7</li>
                                                <li>iOS</li>
                                                <li>Android</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion mb-4" id="accordion02">
                                <div class="card">
                                    <div class="card-header p-0" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-block text-left p-3" type="button" data-toggle="collapse" data-target="#collapse02" aria-expanded="true" aria-controls="collapse02">
                                            <b>Q.</b> Aplikasi
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapse02" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion02">
                                        <div class="card-body" style={{color:"gray"}}>
                                            <p>Browser</p>
                                            <ol>
                                                <li>Windows : Firefox 65+, Chrome 68+</li>
                                                <li>Mac: Firefox 65+, Chrome 68+, Safari 11+</li>
                                            </ol>
                                            <p>Meeting Conference : Zoom Meeting 5.0 *</p>
                                            <p>
                                                <small>* digunakan saat Anda dinyatakan lolos seleksi administrasi dan saat pengerjaan asesmen, wawancara dan forum group disccusion online</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion mb-4" id="accordion03">
                                <div class="card">
                                    <div class="card-header p-0" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-block text-left p-3" type="button" data-toggle="collapse" data-target="#collapse03" aria-expanded="true" aria-controls="collapse03">
                                            <b>Q.</b> Prosesor dan RAM
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapse03" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion03">
                                        <div class="card-body" style={{color:"gray"}}>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Deskripsi</th>
                                                    <th>Minimum</th>
                                                    <th>Rekomendasi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Prosesor</td>
                                                    <td>Single Core 1Ghz or Higher</td>
                                                    <td>Dual Core 2Ghz or Higher (i3/i5/i7 or AMD equivalent)</td>
                                                </tr>
                                                <tr>
                                                    <td>RAM</td>
                                                    <td>N/A</td>
                                                    <td>4 GB</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion mb-4" id="accordion04">
                                <div class="card">
                                    <div class="card-header p-0" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-block text-left p-3" type="button" data-toggle="collapse" data-target="#collapse04" aria-expanded="true" aria-controls="collapse04">
                                            <b>Q.</b> Bandwidth
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapse04" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion04">
                                        <div class="card-body" style={{color:"gray"}}>
                                            <p>Pengalaman terbaik menggunakan minimal 1 Mbps dengan koneksi lancar dan stabil</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className='px-5 py-4 rounded-lg' style={{backgroundColor:"#E9F2FE", color:"#454545"}}>
                                <h2 className='mb-4'><b>Kontak Kami</b></h2>
                                <p><small><b>Senin s.d Jumat 07.30 - 18.00 WIB</b><br /> Pastikan Anda telah membaca seluruh Informasi, Persyaratan, Ketentuan, Tata Cara Melamar, Jadwal Kegiatan dan FAQs di situs web ini</small></p>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex'>
                                <h4 className='mx-2 rounded px-1 pt-1' style={{backgroundColor:"#E9F2FE"}}>&#128222;</h4>
                                <div className='mx-2'>
                                    <span className='d-block'><b>Call Center</b></span>
                                    <a style={{textDecoration:"none", color:"#000000"}} href="tel:+62211500314">1500314</a>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <h4 className='mx-2 rounded px-1 pt-1' style={{backgroundColor:"#E9F2FE"}}>&#128222;</h4>
                                <div className='mx-2'>
                                    <span className='d-block'><b>WhatsApp (Chat Only)</b></span>
                                    <p><span><small>Line 1</small></span><a href="https://wa.me/6282228211182?text=Terima%20kasih%20telah%20menghubungi%20Call%20Center%20PPM%20Manajemen,%0D%0ASebelum%20menjawab%20pertanyaan%20Anda,%20silahkan%20isi%20 format%20berikut%20ini%20:%0D%0ANama%20Lengkap%20:%0D%0ANo%20Handphone%20: Email%20:%0D%0AProgram%20Rekrutmen%20:PPM%20Manajemen">082228211182</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <h2><b>Kontak Kami</b></h2>
                            <p>Senin s.d Jumat 07.30 - 18.00 WIB Pastikan Anda telah membaca seluruh Informasi, Persyaratan, Ketentuan, Tata Cara Melamar, Jadwal Kegiatan dan FAQs di situs web ini</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer /> 
        </>
    )
}

export default Faq
