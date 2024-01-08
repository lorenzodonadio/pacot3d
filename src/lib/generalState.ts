import { writable } from 'svelte/store';
import type { DiceConfig } from './types/dice';
export interface RollResult {
	id: string;
	faceUp: number;
}
export const diceAmount = writable<number>(5);
export const rollResult = writable<RollResult[]>([]);
export const diceConfig = writable<DiceConfig[] | null>(null);

export function groupDiceByFaceUp(diceResults: RollResult[]): { [faceUpValue: number]: number } {
	const groupedResults: { [faceUpValue: number]: number } = {};

	diceResults.forEach((die) => {
		if (groupedResults[die.faceUp]) {
			groupedResults[die.faceUp]++;
		} else {
			groupedResults[die.faceUp] = 1;
		}
	});

	return groupedResults;
}
