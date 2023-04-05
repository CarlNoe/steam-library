import { handleResponse } from './apiUtils';

const API_BASE_URL = 'http://localhost:8080';

interface UserData {
	mail: string;
	username: string;
	password: string;
}

export default function insertUserToElasticSearch(data: UserData) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	};
	const url = `${API_BASE_URL}/user/register`;

	return fetch(url, requestOptions)
		.then(handleResponse)
		.catch((error: Error) => {
			// Specify the type of the error parameter
			throw error;
		});
}
