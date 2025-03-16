export interface InputProps
{
    placeholder: string,
    type: string,
    value: string,
    setValue: (value: string) => void;
    className: string
}

export function Input({placeholder, type, value, setValue, className} : InputProps )
{
    return (
        <input placeholder={placeholder} type={type} className={className} value={value} onChange={(e)=>setValue(e.target.value)}>
        </input>
    );
}