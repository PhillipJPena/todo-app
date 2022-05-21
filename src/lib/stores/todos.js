import { writable } from 'svelte/store';
import { Todo } from '../classes/todo';

const sampleTodos = [
	new Todo('sample 1', 'this is sample description', '11/10/1989', 'low'),
	new Todo('sample 2', 'this is sample description', '11/10/1989', 'med'),
	new Todo('sample 3', 'this is sample description', '11/10/1989', 'high'),
	new Todo(
		'sample 4: lets see what happens when this text is very long',
		'this is sample description',
		'11/10/1989'
	)
];

//this is the store for all todos
export const todos = writable([...sampleTodos]);
