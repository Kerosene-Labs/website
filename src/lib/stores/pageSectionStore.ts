import { writable } from "svelte/store";

export const pageSectionStore = writable<Function | null>(null);