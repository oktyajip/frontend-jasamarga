import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavbarMenu from '../components/Navbar'
import Akhlak from '../Images/akhlak.png'

const Tentang = () => {
    return (
        <>
            <NavbarMenu />
            <div className="hero-tentang d-flex align-items-center">
                <Container>
                    <div className="hero-content mx-5">
                        <div className='text-center'>
                            <p className='border d-inline-block font-weight-bold text-white' style={{borderRadius:"10px"}}>Ketahui lebih lanjut</p>
                        </div>
                        <div className="content-desc font-weight-bold text-white mb-3">
                            <h1 className='text-center mb-4'>Sekilas Jasa Ma​rga</h1>
                            <p className='mb-4'>Jasa Marga merupakan pengembang dan operator jalan tol pertama serta terbesar di Indonesia dengan pangsa pasar sebesar 66% untuk panjang jalan tol komersial yang telah beroperasi (± 1.246 km). Dengan pengalaman selama lebih dari 40 tahun, Jasa Marga saat ini mengelola 34 konsesi jalan tol dengan total panjang jalan 1.603 km.</p>
                            <p className='mb-4'>Sebagai salah satu Badan Usaha Milik Negara, 70% saham Jasa Marga dimiliki oleh Pemerintah Indonesia. Sejak 2007, Jasa Marga menjadi perusahaan publik melalui Penawaran Umum Perdana Saham (Initial Public Offering/IPO) dan mencatatkan sahamnya di Bursa Efek Indonesia.</p>
                        </div>
                    </div>
                </Container>
            </div>
            <section className='my-5'>
                <Container>
                    <Row className='mb-3'>
                        <Col className='d-flex'>
                            <h2 className='mx-3'>&#128188;</h2>
                            <div className="buss-desc">
                                <h5 className='font-weight-bold'>Bisnis Utama</h5>
                                <p>Konstruksi, operasi dan pemeliharaan jalan tol.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex'>
                            <h2 className='mx-3'>&#128188;</h2>
                            <div className="buss-desc">
                                <h5 className='font-weight-bold'>Bisnis pendukung/bisnis lainnya</h5>
                                <ul>
                                    <li>Layanan pengoperasian jalan tol (Menyediakan jasa pengoperasian untuk kelompok usaha Jasa Marga dan investor lain jalan tol).</li>
                                    <li>Layanan pemeliharaan jalan tol (Menyediakan layanan pemeliharaan untuk kelompok usaha Jasa Marga dan investor lain jalan tol).</li>
                                    <li>Properti (Mengelola rest area dan properti lainnya di koridor jalan tol).</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="jejak">
                <Container>
                    <div className="heading-jejak text-center">
                        <h1 className='font-weight-bold'>Rekam Jejak</h1>
                        <h5>Pencapaian Penting Jasa Marga Selama 43 Tahun</h5>
                    </div>
                    <div className="riwayat">
                        <div className="riwayat-item">
                            <p className='px-2 py-1 d-inline-block rounded-lg font-weight-bold' style={{color:"#003565", backgroundColor:"lightblue"}}>1978</p>
                            <p>Jasa Marga didirikan dengan fokus pengelolaan usaha, pemeliharaan, dan pengadaan jaringan jalan tol. Jagorawi merupakan jalan tol pertama yang mulai dioperasikan di Indonesia.</p>
                        </div>
                        <div className="riwayat-item">
                            <p className='px-2 py-1 d-inline-block rounded-lg font-weight-bold' style={{color:"#003565", backgroundColor:"lightblue"}}>1987</p>
                            <p>​Pemerintah menawarkan kesempatan kepada pihak swasta untuk berpartisipasi di bisnis jalan tol melalui system BOT (Build, Operate and Transfer ) dengan Jasa Marga. Jalan tol Jakarta dioperasikan oleh Jasa Marga memulai pengoperasian secara bertahap.</p>
                        </div>
                        <div className="riwayat-item">
                            <p className='px-2 py-1 d-inline-block rounded-lg font-weight-bold' style={{color:"#003565", backgroundColor:"lightblue"}}>2004</p>
                            <p>Fungsi kewenangan pengatur jalan tol dikembalikan kepada Badan Pengatur Jalan Tol (BPJT) di bawah Kementerian PUPR.</p>
                        </div>
                        <div className="riwayat-item">
                            <p className='px-2 py-1 d-inline-block rounded-lg font-weight-bold' style={{color:"#003565", backgroundColor:"lightblue"}}>2007</p>
                            <p>Jasa Marga menjadi perusahaan publik melalui Penawaran Umum Perdana Saham (Initial Public Offering/IPO)​ dan mencatatkan sahamnya di Bursa Efek Indonesia.</p>
                        </div>
                        <div className="riwayat-item">
                            <p className='px-2 py-1 d-inline-block rounded-lg font-weight-bold' style={{color:"#003565", backgroundColor:"lightblue"}}>2017</p>
                            <p>Sistem pembayaran elektronik diimplementasikan di seluruh jalan tol. <br />
                            Menerbitkan produk alternatif pendanaan: Sekuritisasi Jagorawi, Project Bond MLJ, dan Komodo Bond.</p>
                        </div>
                        <div className="riwayat-item">
                            <p className='px-2 py-1 d-inline-block rounded-lg font-weight-bold' style={{color:"#003565", backgroundColor:"lightblue"}}>2018</p>
                            <p>
                            Mengoperasikan jalan tol sepanjang ±1.000 km. <br />
                            Sukses menyambungkan kota Jakarta dan Surabaya dengan pengoperasian Tol Trans Jawa. <br />
                            Menerbitkan produk alternatif pendanaan berbasis ekuitas, yaitu Reksa Dana Penyertaan Terbatas. <br />
                            </p>
                        </div>
                        <div className="riwayat-item">
                            <p className='px-2 py-1 d-inline-block rounded-lg font-weight-bold' style={{color:"#003565", backgroundColor:"lightblue"}}>2019</p>
                            <p>
                            Menggandakan bisnis dengan mengoperasikan 28 konsesi jalan tol sepanjang ±1.162 km.<br />
                            Menerbitkan produk alternatif pendanaan: Dana Investasi Infrasturktur (DINFRA) dan Sukuk Ijarah di ruas Gempol-Pandaan.
                            </p>
                        </div>
                        <div className="riwayat-item">
                            <p className='px-2 py-1 d-inline-block rounded-lg font-weight-bold' style={{color:"#003565", backgroundColor:"lightblue"}}>2020</p>
                            <p>
                            Mengoperasikan jalan tol sepanjang 1.191 km.<br />
                            Menerbitkan produk alternatif pendanaan: Surat Berharga Komersial (SBK) dan Obligasi Penawaran Umum Berkelanjutan Tahap I.</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='visi'>
                <Container>
                    <div className="heading-jejak text-center my-5">
                        <h1 className='font-weight-bold pt-2'>Visi dan Misi</h1>
                    </div>
                    <Row>
                        <Col className='d-flex'>
                            <h2 className='mx-3'>&#128188;</h2>
                            <div className="buss-desc">
                                <h5 className='font-weight-bold'>Visi</h5>
                                <p>Menjadi Perusahaan Jalan Tol Nasional Terbesar, Terpercaya dan Berkesinambungan.</p>
                            </div>
                        </Col>
                        <Col className='d-flex'>
                            <h2 className='mx-3'>&#128188;</h2>
                            <div className="buss-desc">
                                <h5 className='font-weight-bold'>Misi</h5>
                                <ol>
                                    <li>Memimpin usaha jalan tol di seluruh rantai nilai secara profesional dan berkesinambungan guna meningkatkan konektivitas Nasional.</li>
                                    <li>Mengoptimalkan pengembangan kawasan untuk kemajuan masyarakat.</li>
                                    <li>Meningkatkan nilai bagi pemegang saham.</li>
                                    <li>Meningkatkan kepuasan pelanggan dengan pelayanan prima.</li>
                                    <li>Mendorong pengembangan dan peningkatan kinerja karyawan dalam lingkungan yang harmoni.</li>
                                </ol>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="nilai mt-5">
                <Container>
                    <div className="heading-jejak text-center mb-4">
                        <h1 className='font-weight-bold'>Tata Nilai Perusahaan</h1>
                        <img style={{width:"300px"}} src={Akhlak} alt="" />
                    </div>                    
                        <Row className="mb-3">
                            <Col className='d-flex'>
                                <h2 className='mx-3'>&#9989;</h2>
                                <div className="nilai-desc">
                                    <h5 className='font-weight-bold'>Amanah</h5>
                                    <p>Memegang teguh kepercayaan yang diberikan.</p>
                                </div>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className='mx-3'>&#9989;</h2>
                                <div className="nilai-desc">
                                    <h5 className='font-weight-bold'>Kompeten</h5>
                                    <p>Terus belajar dan mengembangkan kapabilitas.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className='d-flex'>
                                <h2 className='mx-3'>&#9989;</h2>
                                <div className="nilai-desc">
                                    <h5 className='font-weight-bold'>Amanah</h5>
                                    <p>Memegang teguh kepercayaan yang diberikan.</p>
                                </div>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className='mx-3'>&#9989;</h2>
                                <div className="nilai-desc">
                                    <h5 className='font-weight-bold'>Harmonis</h5>
                                    <p>Terus belajar dan mengembangkan kapabilitas.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className='d-flex'>
                                <h2 className='mx-3'>&#9989;</h2>
                                <div className="nilai-desc">
                                    <h5 className='font-weight-bold'>Amanah</h5>
                                    <p>Memegang teguh kepercayaan yang diberikan.</p>
                                </div>
                            </Col>
                            <Col className='d-flex'>
                                <h2 className='mx-3'>&#9989;</h2>
                                <div className="nilai-desc">
                                    <h5 className='font-weight-bold'>Kompeten</h5>
                                    <p>Terus belajar dan mengembangkan kapabilitas.</p>
                                </div>
                            </Col>
                        </Row>
                        <div className='text-center mb-3'>
                            <Button className='mx-auto mt-4 font-weight-bold py-2 px-4' style={{border:"none", backgroundColor:"#003565"}}>Selengkapnya</Button>
                        </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Tentang
