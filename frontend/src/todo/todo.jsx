import React from 'react'
import PageHeader from '../template/pageheader'
import TodoForm from './todoForm'
import TodoList from './todoList'

   
export default props => (
    <div>
        <PageHeader name="ToDo" small="Register"/>
        <TodoForm />
        <TodoList />
    </div>
)
