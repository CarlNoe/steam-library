import { RawGameData } from './gameTypes';

export type SortableFields = Extract<keyof RawGameData, string>;
export type SortOrder = 'asc' | 'desc';
export type FilterValue = `${SortableFields}_${SortOrder}` | 'default';

export interface FilterOption {
	name: string;
	value: FilterValue;
}
