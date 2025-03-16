import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './index.css';

// Components
import Layout  from './lib/templates/Layout.tsx';
import Login from './lib/routes/Login.tsx';
import Home from './lib/routes/Home.tsx';
import SignUp from "./lib/routes/SignUp.tsx";
import { ToastProvider } from "./lib/context/toast/ToastProvider.tsx";

const root = document.getElementById('root')!;
root.classList.add('w-full', 'h-full', 'bg-slate-200');

ReactDOM.createRoot(root).render(
	<StrictMode>
		<Router>
			<ToastProvider>
				<Layout>
					<Routes>
						<Route index element={<Login />} />
						<Route path={`/home`} element={<Home />} />
						<Route path={`/signup`} element={<SignUp />}/>
					</Routes>
				</Layout>
			</ToastProvider>
		</Router>
	</StrictMode>,
);