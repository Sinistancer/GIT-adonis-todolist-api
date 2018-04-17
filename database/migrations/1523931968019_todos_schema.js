'use strict'

const Schema = use('Schema')

class TodosSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.string('name', 500).nullable()
      table.integer('priority').nullable()
      table.string('location', 273).nullable()
      table.time('time_start').nullable()
      table.string('username', 100).nullable()
      table.string('password', 20).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodosSchema
