import { RawGameData } from './gameTypes';

export interface RawUserData {
	id: string;
	mail: string;
	username: string;
	hashedPassword: string;
	favorites: RawGameData[];
}
