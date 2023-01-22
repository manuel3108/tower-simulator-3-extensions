import { readable } from 'svelte/store';
import FileSystemHelper from './FileSystemHelper';

export const fileSystemHelper = readable(new FileSystemHelper());
