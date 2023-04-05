import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="flex  min-h-screen items-center justify-center">
			<div className="rounded-lg bg-steam-grey px-12 py-8 shadow-lg">
				<h1 className="mb-8 text-3xl font-medium text-white">Sign In</h1>
				<form method="POST" action="http://localhost:8080/user/login">
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
							className="focus:shadow-outline-indigo rounded bg-indigo-500 px-6 py-2 font-medium  hover:bg-indigo-400 focus:outline-none"
						>
							Sign In
						</button>
						<Link
							to="/SignUp"
							className="ml-4 font-medium hover:text-indigo-400"
						>
							Don&apos;t have an account? Sign up
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignInForm;
