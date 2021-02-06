
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id').primary();

        tbl.text('project_name')
        .notNullable()
        .unique();

        tbl.text('project_description')

        tbl.boolean('project_completed').defaultTo(false);
      })

    .createTable('resources', tbl => { 

        tbl.increments('resource_id').primary();

        tbl.text('resource_name')
        .notNullable()
        .unique();

        tbl.text('resource_description')
    })

    .createTable('tasks', tbl => { 
        tbl.increments('task_id').primary();

        tbl.text('task_description')
        .notNullable()

        tbl.text('task_notes')

        tbl.boolean('project_completed').defaultTo(false);

        tbl.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks');
};
