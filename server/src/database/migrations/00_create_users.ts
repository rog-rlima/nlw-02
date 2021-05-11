import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('avatar', 200).notNullable();
        table.string('whatsapp', 15).notNullable();
        table.string('bio', 400).notNullable();
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropSchema('users');
}