import React, { useEffect, useState } from 'react'
import {AuthImg, AuthRegister} from '../../assets'
import Login from "../login/login"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Auth = () => {
    const [sign, setSign] = useState(false)

    const handleSign = () => {
        sign === true ? setSign(false) : setSign(true)
    }

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className='flex flex-cols items-center justify-around h-screen px-[100px]
        w-screen '>
            <div 
            data-aos="fade-right"
            data-aos-duration="2000"
            className='w-[550px] h-[550px]'>
                <img src={sign ? AuthImg : AuthRegister} alt="" className='w-full h-full object-cover' />
            </div>
            <div
                data-aos="fade-left"
                data-aos-duration="2000"
            >
                <Login 
                    handleSign={handleSign} sign={sign}
                />
            </div>
        </div>
    )
}

export default Auth