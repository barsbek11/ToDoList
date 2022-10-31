import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import './formTodoList.scss'

export function FormTodo({ addTodo }) {
	const [value, setValue] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		if (!value) return
		addTodo(value)
		setValue('')
	}

	return (
		<Form className='form' onSubmit={handleSubmit}>
			<Form.Group className='addTodo'>
				<Form.Control
					type='text'
					className='input'
					value={value}
					onChange={e => setValue(e.target.value)}
					placeholder='Add new todo'
				/>
				<Button className='addButton' variant='primary ' type='submit'>
					Add
				</Button>
			</Form.Group>
		</Form>
	)
}
