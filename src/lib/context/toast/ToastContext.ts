
import { createContext} from 'react';
import { Id, toast } from 'react-toastify';

export interface Toast {
    showMessage: (message: string) => Id;
}

export const ToastContext = createContext<Toast>({
    showMessage: (message: string) => toast.warn(message),// aca se pueden agregar los otros metodos
});
