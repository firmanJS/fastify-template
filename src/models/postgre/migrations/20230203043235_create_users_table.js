const { MODEL_PROPERTIES: { TABLES } } = require('../../../utils')

exports.up = function (knex) {
  return knex.schema.createTable(TABLES.USERS, (table) => {
    table.increments('id').primary()
    table.string('username', 50).notNullable().unique()
    table.string('email', 150).notNullable()
    table.string('salt', 225).notNullable()
    table.string('password', 225).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.uuid('created_by')
    table.timestamp('updated_at')
    table.uuid('updated_by')
    table.timestamp('deleted_at')
    table.uuid('deleted_by')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(TABLES.USERS)
}
