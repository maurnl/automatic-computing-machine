import { useState, useEffect } from "react";
import { LogIn, CheckIfLoggedIn } from "./LoginHook";
import { useNavigate } from "react-router";
import { CheckMail } from "./utilities/common";
import { useToast } from "./useToast";

// este hook no tiene tanto sentido puesto que se loguearia solo en una pagina por ej. pero en este caso esta bien porque aisla la logica de la vista
// aca, mientras que la logica de peticiones de login puede quedar en otro lado.
// capaz habria que cheueqar si se puede llamar `useAuth` y meter el register aca
export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const { showMessage }= useToast();

    // Check if user is already logged in on component mount
    useEffect(() => {
        async function checkAuthStatus() {
            try {
                const isLoggedIn = await CheckIfLoggedIn();
                if (isLoggedIn) {
                    navigate('/home');
                }
            } catch (error) {
                console.error('Auth check error:', error);
            } finally {
                setLoading(false);
            }
        }
        
        checkAuthStatus();
    }, [navigate]);

    useEffect(() => {
        if (errorMessage) {
            showMessage(errorMessage);
        }
    }, [errorMessage, showMessage]); // use effect se llama cuando cambian las deps

    // Local validation before sending to server
    const validateInputs = () => {
        if (!email || !password) {
            setErrorMessage('Please enter both email and password');
            return false;
        }
        
        if (!CheckMail(email)) {
            setErrorMessage('Please enter a valid email address');
            return false;
        }
        
        setErrorMessage('');
        return true;
    };

    const handleLogin = async () => {
        if (!validateInputs()) {
            return;
        }
        
        try {
            setLoading(true);
            await LogIn(email, password);
            // Note: LogIn already handles navigation and error toasts
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/signup');
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        handleLogin,
        errorMessage,
        handleSignUpRedirect
    };
};