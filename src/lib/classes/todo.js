export class Todo {
	constructor({ text, description, dueDate, priority }) {
		this.text = text;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}
	uid = Math.random();
	checked = false;
}
