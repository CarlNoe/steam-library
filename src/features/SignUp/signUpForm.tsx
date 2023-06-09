import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpForm() {
	const [mail, setMail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:8080/user/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ mail, username, password }),
			});
			const data = await response.json();
			const { ...userData } = data;

			// Stockage du reste des données dans le local storage
			localStorage.setItem('registerData', JSON.stringify(userData));
			window.location.href = '/SignIn';
		} catch (error) {
			throw new Error(String(error));
		}
	};

	return (
		<div className="flex min-h-[calc(100vh-100px)] items-center justify-center">
			<div className="rounded-lg bg-steam-grey px-12 py-8 shadow-lg">
				<h1 className="mb-8 text-3xl font-medium text-white">
					Create an account
				</h1>
				<form onSubmit={handleFormSubmit}>
					<div className="mb-6">
						<label
							htmlFor="mail"
							className="mb-2 block font-medium text-gray-300"
						>
							Email address
						</label>
						<input
							aria-label="Email address"
							id="email"
							name="mail"
							type="mail"
							required
							value={mail}
							onChange={(e) => setMail(e.target.value)}
							className="w-full appearance-none rounded border border-gray-600 px-3 py-2 leading-tight text-black focus:border-indigo-500 focus:outline-none"
							placeholder="you@example.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="username"
							className="mb-2 block font-medium text-gray-300"
						>
							Username
						</label>
						<input
							aria-label="Username"
							id="username"
							name="username"
							type="text"
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full appearance-none rounded border border-gray-600 px-3 py-2 leading-tight text-black focus:border-indigo-500 focus:outline-none"
							placeholder="Username"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="mb-2 block font-medium text-gray-300"
						>
							Password
						</label>
						<input
							aria-label="Password"
							id="password"
							name="password"
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full appearance-none rounded border border-gray-600 px-3 py-2 leading-tight text-black focus:border-indigo-500 focus:outline-none"
							placeholder="********"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="focus:shadow-outline-indigo rounded bg-indigo-500 px-6 py-2 font-medium text-white hover:bg-indigo-400 focus:outline-none"
						>
							Sign Up
						</button>

						<Link
							to="/SignIn"
							className="ml-4 font-medium hover:text-indigo-400"
						>
							Already have an account? Sign in
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUpForm;
