import {
	FilterValue,
	SortableFields,
	SortOrder,
} from '../types/gameFilteringTypes';

export const splitFilterValueString = (
	value: FilterValue
): [SortableFields, SortOrder] => {
	const fieldAndOrder = value.match(/(.*?)_([^_]*)$/);
	if (fieldAndOrder) {
		return [fieldAndOrder[1] as SortableFields, fieldAndOrder[2] as SortOrder];
	}
	throw new Error(`Invalid filter value: ${value}`);
};

export const splitBySemicolon = (value: string): string[] => value.split(';');
