import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// Handle sign-in submission here
	};

	return (
		<div className="flex  min-h-screen items-center justify-center">
			<div className="rounded-lg bg-steam-grey px-12 py-8 shadow-lg">
				<h1 className="mb-8 text-3xl font-medium text-white">Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="mb-2 block font-medium text-gray-300"
						>
							Email address
						</label>
						<input
							aria-label="Email address"
							id="email"
							name="email"
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full appearance-none rounded border border-gray-600 px-3 py-2 leading-tight text-white focus:border-indigo-500 focus:outline-none"
							placeholder="you@example.com"
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
							className="w-full appearance-none rounded border border-gray-600 px-3 py-2 leading-tight text-white focus:border-indigo-500 focus:outline-none"
							placeholder="********"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="focus:shadow-outline-indigo rounded bg-indigo-500 px-6 py-2 font-medium text-white hover:bg-indigo-400 focus:outline-none"
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
