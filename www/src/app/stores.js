import { writable } from 'svelte/store';

export const value = writable(20000000);
export const countWasm = writable(0);
export const countJS = writable(0);
