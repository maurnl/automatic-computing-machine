import { useEffect } from "react";
import { appTitle } from "../config/config.tsx";

export interface TitleProps
{
    title: string
}

export default function Title({title}: TitleProps)
{
    useEffect(()=>
    {
        
        document.title = `${appTitle} - ${title}`;
    }, [title])

    return null;
}