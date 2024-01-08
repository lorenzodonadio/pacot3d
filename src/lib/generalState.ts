import { get, writable } from 'svelte/store';
import type { DiceConfig } from './types/dice';
export interface RollResult {
	id: string;
	faceUp: number;
}

export type GameStates = 'start' | 'play' | 'finish';
export const gameState = writable<GameStates>('start');
export const diceAmount = writable<number>(5);
export const rollResult = writable<RollResult[]>([]);
export const diceConfig = writable<DiceConfig[] | null>(null);

export function checkGameFinished() {
	const dice = get(diceConfig);
	const results = get(rollResult).map((x) => x.id);

	if (!dice || dice.length < 1) return;
	if (results.length < 1) return;

	for (const id of dice.map((x) => x.id)) {
		if (!results.includes(id)) return;
	}

	gameState.set('finish');
}

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
