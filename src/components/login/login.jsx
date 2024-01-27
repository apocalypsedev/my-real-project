import Button from './../../UI-FORM/button'
import Input from '../../UI-FORM/input';
import { FaUserTie } from "react-icons/fa";
import { MdError} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useState } from 'react';
import Register from './../register/register'

const Login = ({handleSign, sign}) => {

    const [showPass, setShowPass] = useState(false)
    const handleShowPass = () => {
        if (showPass) {
            setShowPass(false);
        } else {
            setShowPass(true);
        }
    }

    return (
        <div className="flex flex-col w-[500px] shadow h-auto p-4">
            <h1 className='text-center text-3xl font-bold mb-4'>{sign ? 'Login' : 'Register'}</h1>
            {
                sign ? (
                    <form 
                className="flex flex-col gap-5 w-[500px]  h-auto p-8"
            >
                <div className="flex items-center gap-4 border border-red-100 rounded p-4 bg-red-200/30">
                    <MdError className="text-red-700 text-xl" />
                    <p className="text-red-700">Error!</p>
                </div>
                <label className='flex items-center gap-4'>
                <FaUserTie />
                <Input    
                    type="text"
                    name="username"
                    placeholder={'Username'}
                    className={'h-10 rounded border border-green-500  outline-none px-4 w-[400px]'}
                />
                </label>
                <label className='flex items-center gap-4'>
                <RiLockPasswordFill />
                <div className="flex items-center justify-between h-10 rounded border border-green-500 outline-none px-4 w-[400px]">
                    <Input    
                        type={showPass ? "password" : "text"}
                        name="password"
                        placeholder={'Password'}
                        className={"border-none outline-none w-[80%]"}
                    />
                    <div onClick={handleShowPass}>
                        {showPass
                        ? <IoEyeOutline/>
                        : <IoEyeOffOutline/>
                        }
                    </div>
                </div>
                </label>
                <Button  
                    className="h-10 rounded text-xl font-semibold text-white bg-green-500 hover:bg-green-400 duration-200"
                    children={'Login'}
                />
            </form>
                ) : (
                    <Register />
                )
            }
            <p className="text-center"> {sign ? 'Already have an account?' : "Create an account!"} <span className="text-green-600 hover:underline duration-200" onClick={handleSign}>{sign ? 'Sign Up' : 'Login'} </span></p>
        </div>
    )
}


export default Login;