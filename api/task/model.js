const db = require('../../data/dbConfig');

const get = () =>{
    return db('tasks')
    .join('projects', 'tasks.project_id', '=', 'projects.project_id')
    .select('tasks.task_id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed', 'projects.project_name', 'projects.project_description'  )
}

const findById = id =>{
    return db('tasks')
    .where('task_id', id)
    .first()
}

const update = (changes, id) => {
    return db('tasks')
      .where('task_id', id)
      .update(changes)
      .then(a =>{
          return findById(id);
      })
  }

  const add = task =>{
    return db('tasks')
    .insert(task)
    .then(a => {return findById(a)})
}
  

  module.exports = {
    get,
    update,
    add
  };