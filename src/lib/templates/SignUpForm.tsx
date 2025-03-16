import { Input } from "../components/Input.tsx";
import { useNavigate } from "react-router";

interface SignUpFormProps
{
    email: string,
    setEmail: (value: string) => void;
    password: string,
    setPassword: (value: string) => void;
    onRegister: (mail: string, password: string) => void;
}

export function SignUpForm({email, setEmail, password, setPassword, onRegister} : SignUpFormProps)
{
    const clasnNameString = `border border-slate-400 border-b-4 bg-slate-300 text-slate-700
    placeholder:text-slate-700 placeholder:italic outline-hidden focus:border-b-violet-600 focus:placeholder:opacity-[0.0] 
    caret-black p-2 mb-5`;

    const btnClassNameString = `bg-emerald-700 hover:cursor-pointer p-2 hover:bg-orange-700
        shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.8)] duration-[250ms] active:translate-y-[4px] active:shadow-[0px_4px_0px_0px_rgba(0,_0,_0,_0.8)]`

    const goBack = useNavigate();

    return(
        <div className='bg-slate-200'>
            <div className='flex flex-col px-[50px] py-[50px]'>
                <Input
                    placeholder="e-mail" type="email" value={email} setValue={setEmail}
                    className={clasnNameString}
                />
                <Input
                    placeholder="password" type="password" value={password} setValue={setPassword}
                    className={clasnNameString}
                />    

                <button className={btnClassNameString} onClick={()=>onRegister(email, password)}>
                    Register
                </button>

                <button className={btnClassNameString + ' mt-5'} onClick={()=>goBack(`/`)}>
                    Go back
                </button>
            </div>
        </div>
    );
}