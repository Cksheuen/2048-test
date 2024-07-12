/* tslint:disable */
/* eslint-disable */
/**
*/
export function start(): void;
/**
*/
export enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
  None = 4,
}
/**
*/
export class Game {
  free(): void;
/**
*/
  constructor();
/**
* @returns {number}
*/
  width(): number;
/**
* @returns {number}
*/
  height(): number;
/**
* @param {Position} pos
* @returns {number}
*/
  get_index(pos: Position): number;
/**
*/
  random_two(): void;
/**
* @returns {number}
*/
  cells(): number;
/**
*/
  display(): void;
}
/**
*/
export class Position {
  free(): void;
/**
*/
  x: number;
/**
*/
  y: number;
}
