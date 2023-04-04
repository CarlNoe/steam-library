import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle sign-in submission here
    };

    return (
        <div className="min-h-screen  flex items-center justify-center">
            <div className="bg-steam-grey rounded-lg shadow-lg px-12 py-8">
                <h1 className="text-3xl font-medium text-white mb-8">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email address</label>
                        <input
                            aria-label="Email address"
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none border border-gray-600 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-indigo-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-300 font-medium mb-2">Password</label>
                        <input
                            aria-label="Password"
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none border border-gray-600 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-indigo-500"
                            placeholder="********"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-400 text-white font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline-indigo"
                        >
                            Sign In
                        </button>
                        <Link to="/SignUp" className="ml-4 hover:text-indigo-400 font-medium">
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;
