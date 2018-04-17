'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group(() => {
    Route.post('todos', 'TodoController.store')
    Route.get('todos', 'TodoController.index')
    Route.get('todos/:username', 'TodoController.show')
    Route.get('todos/:username/:sorting', 'TodoController.priority')
    Route.put('todos/:id', 'TodoController.update')
    Route.delete('todos/:id', 'TodoController.delete')
}).prefix('api/v1')