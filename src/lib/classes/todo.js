export class Todo {
	constructor(text, description) {
		this.text = text;
		this.description = description;
	}
	uid = Math.random();
}
