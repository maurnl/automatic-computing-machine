import { useState } from "react";
import { SignUpForm } from "../templates/SignUpForm.tsx";
import { Register } from "../hooks/RegisterHook.tsx";
import Title from "../components/Title.tsx";

export default function SignUp()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <Title title="Sign Up"/>
            <div className='rounded-md overflow-hidden mt-[10%] w-[400px] self-center shadow-[0px_10px_6px_0px_rgba(0,_0,_0,_0.35)]'>
                <div className='py-[20px] flex justify-center bg-blue-700 text-slate-200 font-bold text-2xl'>
                    Sign Up
                </div>
                <SignUpForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} onRegister={Register}/> { /* jamas usar funciones asi, siempre traer un hook */ }
                
            </div>
        </>
    );
}