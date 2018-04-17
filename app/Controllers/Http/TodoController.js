'use strict'

const Todo = use('App/Models/Todo')
const Database = use('Database')

class TodoController {
    async index({response}){
        let todos = await Todo.all()

        return response.json(todos)
    }

    async show({params, response}){
        const todo = await Database.table('todos').where('username', params.username)

        return response.json(todo)
    }

    async priority({params, response}){
        const todo = await Database.table('todos').where('username', params.username).orderBy('priority', params.sorting)

        return response.json(todo)
    }

    async store({request, response}){
        const todoInfo = request.only(['name', 'priority', 'location', 'time_start', 'username', 'password'])

        const todo = new Todo()
        todo.name = todoInfo.name
        todo.priority = todoInfo.priority
        todo.location = todoInfo.location
        todo.time_start = todoInfo.time_start
        todo.username = todoInfo.username
        todo.password = todoInfo.password

        await todo.save()

        return response.status(201).json(todo)
    }

    async update ({params, request, response}) {
        const todoInfo = request.only(['name', 'priority', 'location', 'time_start', 'username', 'password'])

        const todo = await Todo.find(params.id)
        if (!todo) {
            return response.status(404).json({data: 'Resource not found'})
        }

        todo.name = todoInfo.name
        todo.priority = todoInfo.priority
        todo.location = todoInfo.location
        todo.time_start = todoInfo.time_start
        todo.username = todoInfo.username
        todo.password = todoInfo.password

        await todo.save()

        return response.status(200).json(todo)
    }

    async delete ({params, response}) {
        const todo = await Todo.find(params.id)
        if (!todo) {
            return response.status(404).json({data: 'Resource not found'})
        }
        await todo.delete()

            return response.status(204).json(null)
    }
}

module.exports = TodoController
