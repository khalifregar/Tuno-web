// src/stores/panelStore.js
import { writable } from 'svelte/store';

export const panelVisible = writable(false);
export const panelContent = writable(null);

export function openPanel(content) {
	panelContent.set(content);
	panelVisible.set(true);
}

export function closePanel() {
	panelVisible.set(false);
	panelContent.set(null);
}
