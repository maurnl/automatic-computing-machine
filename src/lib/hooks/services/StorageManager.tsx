export class StorageManager
{
    WriteLS(key: string, value: string): void
    {
        localStorage.setItem(key, value);
    }

    WriteSS(key: string, value: string): void
    {
        sessionStorage.setItem(key, value);
    }

    ReadLS(key: string): string | null
    {
        return localStorage.getItem(key);
    }

    ReadSS(key: string): string | null
    {
        return sessionStorage.getItem(key);
    }

    RemoveLS(key: string): void
    {
        localStorage.removeItem(key);
    }

    RemoveSS(key: string): void
    {
        sessionStorage.removeItem(key);
    }
}
