export const isDev = import.meta.env.MODE === 'development';
export const BASE_PATH = isDev ? 'https://localhost:5173' : '';
export const BACK_PATH = isDev ? 'https://localhost' : window.location.origin;
export const appTitle = 'BANAN-APP';