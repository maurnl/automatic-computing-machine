import { DataAccessFetch } from "./services/DataAccessFetch.tsx";
import { useNavigate } from "react-router";
import { BACK_PATH } from "../config/config.tsx";
import { CheckMail } from './utilities/common.tsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function Register(email: string, password: string)
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

    let dataAcces = new DataAccessFetch();
    let payload = { email: email, password: password };
    try
    {
        let serverResponse = await dataAcces.postData(`${BACK_PATH}/auth/register`, payload, true, true);

        if(!serverResponse)
        {
            toast.warn('Check your connection.');
            return false;
        }

        if((serverResponse as Response).ok)
        {
            let navigate = useNavigate();
            toast.success('Account registered!');
            setTimeout(() => {
                navigate('/');
            }, 5000);
        }
        else
        {
            toast.warn('[ some error here ]');
        }
    }
    catch(error)
    {
        toast.error(`${error}`);
    }
}