import { useCallback } from "react";
import { toast } from "react-toastify";
import { ToastContext } from "./ToastContext";

export interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const showMessage = useCallback((message: string) => {
        return toast.warn(message);
    }, []);

    return (
        <ToastContext.Provider value={{ showMessage }}>
            {children}
        </ToastContext.Provider>
    );
}
