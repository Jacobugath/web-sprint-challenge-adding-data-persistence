
exports.up = async function(knex) {
    await knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id').primary();

        tbl.text('project_name')
        .notNullable()

        tbl.text('project_description')

        tbl.boolean('project_completed').defaultTo(false);
      })

    await knex.schema.createTable('resources', tbl => { 

        tbl.increments('resource_id').primary();

        tbl.text('resource_name')
        .notNullable()
        .unique();

        tbl.text('resource_description')
    })

    await knex.schema.createTable('tasks', tbl => { 
        tbl.increments('task_id').primary();

        tbl.text('task_description')
        .notNullable()

        tbl.text('task_notes')

        tbl.boolean('task_completed').defaultTo(false);

        tbl.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects')
    })
    await knex.schema.createTable('project_resources', tbl => { 
        tbl.integer("project_id")
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        tbl.integer("resource_id")
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        tbl.primary(["project_id", "resource_id"])
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};