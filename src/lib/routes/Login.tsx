import { LoginForm } from "../templates/LoginForm.tsx";
import { useNavigate } from "react-router";
import Title from "../components/Title.tsx";
import { useLogin } from "../hooks/useLogin.ts";

export default function Login() {
    
    const navigate = useNavigate();
    const { email, setEmail, password, setPassword, loading, handleLogin } = useLogin();

    if (loading) {
        return null; // FIXME: siempre retornar `null` en lugar de un string vacío
    }

    return(
        <>
            <Title title="Login"/>
            <div className='rounded-md overflow-hidden mt-[10%] w-[400px] self-center shadow-[0px_10px_6px_0px_rgba(0,_0,_0,_0.35)]'>
                <div className='py-[20px] flex justify-center bg-green-700 text-slate-200 font-bold text-2xl'>
                    Login
                </div>
                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    onLogin={handleLogin}
                    // onLogin={LogIn} no llamar a la funcion asi
                />
                <p className="bg-slate-200 text-slate-700 flex justify-center pb-3">Need an account?
                    <span onClick={()=>navigate(`/signUp`)}
                        className="ml-1 hover:cursor-pointer text-green-600 hover:text-green-500"
                        >Sign up!
                    </span>
                </p>

            </div>
        </>
    );
}