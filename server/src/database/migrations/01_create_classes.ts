import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject', 50).notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropSchema('classes');
}