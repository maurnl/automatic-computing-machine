import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Layout({ children } : { children: React.ReactNode })
{
    return (
        <main className='w-full h-full bg-slate-950 flex justify-center'>
            <div className='bg-slate-700 w-[75%] h-full text-slate-200 flex flex-col'>
                <ToastContainer>                    
                </ToastContainer>
                {children}
            </div>
        </main>
    );
}