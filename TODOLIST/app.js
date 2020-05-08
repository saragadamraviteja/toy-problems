var i = 1;
document.querySelector('#submit_button').onclick = () => {
    let userInput = document.querySelector('#user_input').value;
    // console.log(userInput.length)
	if (userInput.length) {
		document.querySelector('#user_input').value = '';

        const eachTask = document.createElement('p');
        eachTask.id = i;
        // console.log(eachTask)

        let check_box = document.createElement('INPUT');
        // console.log(check_box)
        check_box.setAttribute('type', 'checkbox');
        // console.log(check_box)
        check_box.id = 'task' + i;
        // console.log(check_box)

		let task = document.createElement('label');
		task.setAttribute('for', 'task' + i);
		task.appendChild(document.createTextNode(userInput));
        // console.log(task)

		check_box.onchange = () => {
			if (check_box.checked) {
				task.innerHTML = userInput.strike();
			} else {
				task.innerHTML = userInput;
			}
		};

		const delete_button = document.createElement('button');
		delete_button.innerText = 'Delete';
		delete_button.style.width = '1.5cm';
		delete_button.style.height = '0.6cm';
		delete_button.style.marginLeft = '4cm';
		delete_button.onclick = () => {
            // console.log(document.getElementById(i))
			eachTask.remove(document.getElementById(i));
		};

		const br = document.createElement('br');
		eachTask.appendChild(check_box);
		eachTask.appendChild(task);
		eachTask.appendChild(delete_button);
		eachTask.appendChild(br);
		document.querySelector('#task_section').appendChild(eachTask);
		document.querySelector('#user_input').focus();
	}
};
