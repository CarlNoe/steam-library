import { useState } from 'react';

function SignUpForm() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
              
                <div className="bg-gray-800 rounded-lg shadow-lg px-12 py-8">
                    <h1 className="text-3xl font-medium text-white mb-8">Create an account</h1>
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
                            <label htmlFor="username" className="block text-gray-300 font-medium mb-2">Username</label>
                            <input
                                aria-label="Username"
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="appearance-none border border-gray-600 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-indigo-500"
                                placeholder="Username"
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
                                Sign up
                            </button>
                            <a href="#" className="ml-4 text-gray-300 hover:text-gray-200 font-medium">Already an Account ? It's Here !</a>
                        </div>
                    </form>
                </div>
            </div>
        
    );
}

export default SignUpForm;
