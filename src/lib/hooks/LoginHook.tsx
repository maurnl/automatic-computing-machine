import { DataAccessFetch } from './services/DataAccessFetch.tsx';
import { useNavigate } from "react-router";
import { BACK_PATH, isDev } from '../config/config.tsx';
import { CheckMail } from './utilities/common.tsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function LogIn(email: string, password: string)
{    
    if( email == '' || password == '' )
    {
        toast.warn('Error: Please enter both email and password.');
        return false;
    }
    if(!CheckMail(email))
    {
        toast.warn('Error: Please check your entered email.');
        return false;
    }

    const dataAccess = new DataAccessFetch();
    const payload = { email: email, password: password };
    try
    {
        const serverResponse = await dataAccess.postData(`${BACK_PATH}/auth/login`, payload, true, true);

        if(!serverResponse)
        {
            toast.warn('Check your connection.');
            return false;
        }

        const resp = await (serverResponse as Response).json();
        if(resp.ok)
        {
            const svResponse = JSON.parse(resp['response']);

            if(Object.prototype.hasOwnProperty.call(svResponse, 'token')) // usar Object.prototype.hasOwnProperty
            {                
                const navigate = useNavigate();   // los hooks no se pueden llamar dentro de ifs !! aca se tiene q refactorizar  
                setTimeout(() =>
                {                        
                    navigate(`/home`);
                }, 1000);
            }
        }
        else
        {
            toast.error('Login failed. Please check your credentials.');
        }
    }
    catch(error)
    {
        toast.error(`${error}`);
    }
}

export async function CheckIfLoggedIn()
{
    if(isDev)
    {
        return false;
    }
    const dataAcces = new DataAccessFetch();
    const serverResponse = await dataAcces.getData(`${BACK_PATH}/auth/validate`, null, false, true, true);    
    return serverResponse;
}