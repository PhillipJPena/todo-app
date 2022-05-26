export class Todo {
	constructor({ text, description, dueDate, priority, project = 'inbox' }) {
		this.text = text;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.project = project;
	}
	uid = Math.random();
	checked = false;
}
