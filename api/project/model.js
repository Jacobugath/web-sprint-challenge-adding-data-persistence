const db = require('../../data/dbConfig');

const get = () =>{
    return db('projects');
}

const findById = id =>{
    return db('projects')
    .where('project_id', id)
    .first()
}

const update = (changes, id) => {
    return db('projects')
      .where('project_id', id)
      .update(changes)
      .then(a =>{
          return findById(id);
      })
  }

  const add = project =>{
    return db('projects')
    .insert(project)
    .then(a => {return findById(a)})
}
  

  module.exports = {
    get,
    update,
    add
  };

