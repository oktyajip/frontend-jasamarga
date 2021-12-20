import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoppm from '../Images/logoppm.png'
import ModalLogin from '../components/Modal/ModalLogin'

const NavbarMenu = () => {
    const [navbarTrans, setNavbarTrans] = useState(false)
    const [modalShow, setModalShow] = React.useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                setNavbarTrans(false)
            } else setNavbarTrans(true)
          })
          return () => {
            window.removeEventListener('scroll', null)
          }
    }, [])

    return (
        <>
            <ModalLogin 
                show={modalShow}
                onHide={() => setModalShow(false)} />
            <Navbar className={`${navbarTrans ? "bg-transparent" : "bg-white"} fixed-top`} expand="lg">
                <Container className='d-flex justify-content-between'>
                    <Navbar.Brand href="/">
                        <img src={logoppm} alt="" />
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto align-items-center">
                            <Nav.Item className='nav-item mx-2'><Link to='/'>Beranda</Link></Nav.Item>
                            <Nav.Item className='nav-item mx-2'><Link to='/tentang'>Tentang Kami</Link></Nav.Item>
                            <Nav.Item className='nav-item mx-2'><a href="#informasi">Informasi</a></Nav.Item>
                            <Nav.Item className='nav-item mx-2'><a href="#informasi">Pendaftaran</a></Nav.Item>
                            <Nav.Item className='nav-item mx-2'>
                                <NavDropdown title="Bantuan" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to='/bantuan/faqs'>FAQs</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Lupa Password</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    <Button onClick={() => setModalShow(true)} className='btn-login' style={{backgroundColor:'#003565', borderRadius:"10px", border:"none"}}><span>&#128272;</span> Login</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMenu
