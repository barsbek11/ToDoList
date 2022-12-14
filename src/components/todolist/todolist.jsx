import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { FormTodo } from './formTodoList/formTodoList'
import { Todo } from './todolistitem/todolistitem'
import './todolist.scss'

export const Todolist = () => {
	const [todos, setTodos] = useState([])
	const addTodo = text => {
		const newTodos = [...todos, { text }]
		setTodos(newTodos)
	}
	const markTodo = index => {
		const newTodos = [...todos]
		newTodos[index].isDone = true
		setTodos(newTodos)
	}
	const removeTodo = index => {
		const newTodos = [...todos]
		newTodos.splice(index, 1)
		setTodos(newTodos)
	}
	return (
		<div className='app'>
			<div>
				<h1 className='text-center mb-4'>Todo List</h1>
				<FormTodo addTodo={addTodo} />
			</div>
			<div className='container'>
				<div>
					{todos.map((todo, index) => (
						<Card>
							<Card.Body>
								<Todo
									key={index}
									index={index}
									todo={todo}
									markTodo={markTodo}
									removeTodo={removeTodo}
								/>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
