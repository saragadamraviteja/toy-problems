function Task(props) {
    console.log('Task')
    console.log(props.task.status)
	return (
		<li
			style={{
                textDecoration: props.task.status ? 'line-through' : ''
            }}
		>
			{props.task.name}, {props.task.dueDate.toLocaleTimeString()} ,{' '}
			<input
				type="checkbox"
				onChange={() => {
					props.onChange(props.task.id);
				}}
			/>
			<button value="delete" onClick={() => props.onDelete(props.task.id)}>
				delete
			</button>
		</li>
	);
}

class TodoList extends React.Component {
	constructor(props) {
        super(props);
        console.log("HI");
		this.state = { list: props.list };
		// this.handleAddTask = this.handleAddTask.bind(this);
	}

	handleAddTask = (task) => {
		console.log('add task clicked');
		this.state.list.push(task);
		this.setState({ list: this.state.list });
	};

	handleDeleteTask = (taskId) => {
		console.log('delete button clicked');
		const list = this.state.list.filter((t) => t.id !== taskId);
		this.setState({ list: list });
	};

	handleChange = (taskId) => {
		console.log('checkbox clicked');
		this.setState({
			list: this.state.list.map((task) => {
				if (task.id === taskId) {
					return {
						...task,
						status: !task.status
					};
				} else {
					return task;
				}
			})
		});
	};

	render() {
        console.log('render up')
		return (
			<div>
				<h1>TODO List</h1>
				<ol>
					{this.state.list.map((t) => (
						<Task key={t.id} onDelete={this.handleDeleteTask} onChange={this.handleChange} task={t} />
					))}
				</ol>
				<TaskNameForm onAddTask={this.handleAddTask} />
			</div>
		);
	}
}

class TaskNameForm extends React.Component {
	constructor(props) {
        console.log('Tasknamr cons')
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		const taskList = this.props.taskList;
        // create a task object
        console.log('handle submit')
		event.preventDefault();
		const task = {
			id: Date.now(),
			name: this.state.value,
			dueDate: new Date(),
			status: false
		};
		// add the task object to the task list
        this.props.onAddTask(task);
		this.setState({ value: '' });
	}

	handleChange(event) {
        // code to set the state of the component
        console.log('handle change')
		this.setState({ value: event.target.value });
	}

	render() {
        console.log('down render')
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<input type="submit" value="Add Task" />
			</form>
		);
	}
}

ReactDOM.render(<TodoList list={[]} />, document.getElementById('todo'));
