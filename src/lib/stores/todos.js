import { writable } from 'svelte/store';
import { Todo } from '../classes/todo';

let sampleTodo = {
	text: 'This is your first todo',
	description: 'click the box to mark todos as completed',
	project: 'inbox',
	dueDate: '11/10/1989',
	priority: 'low'
};

const sampleTodos = [new Todo(sampleTodo)];

//this is the store for all todos
export const todos = writable([...sampleTodos]);
