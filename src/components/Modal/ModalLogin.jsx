import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import Cookies from 'js-cookie'

const ModalLogin = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const dataSend = {
            email: email,
            password: password
        }
        axios.post(`${process.env.REACT_APP_API}/login`, dataSend, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            if(res.data.status === 200) {
                Cookies.set('user_token', res.data.data.token)
                navigate('/dashboard')
            } else {
                navigate("/")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName='p-4'
                >
                <div className='text-center'>
                    <h1 className='font-weight-bold'>Login</h1>
                    <p><small>Silakan masukan Email utama dan Password yang Anda daftarkan</small></p>
                </div>
                <Modal.Body>
                    <form onSubmit={(e) => handleLogin(e)}>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Email Utama</label>
                            <input onChange={() => setEmail()} type="text" class="form-control" id="formGroupExampleInput" placeholder="Email Utama" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Password</label>
                            <input onChange={() => setPassword()} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password" />
                        </div>
                        <div>
                            <p><small>Lupa password <a href="/faq">Bantuan</a></small></p>
                        </div>
                        <button type='submit' className='py-2 text-white font-weight-bold' style={{backgroundColor: "#003565", width:"100%", border:"none", borderRadius:"10px"}}>Login</button>
                    </form>
                </Modal.Body>
                <div className='text-center'>
                    <p><small>Belum mempunyai akun? <a href="/faq">Daftar</a></small></p>
                </div>
            </Modal>
        </>
    )
}

export default ModalLogin