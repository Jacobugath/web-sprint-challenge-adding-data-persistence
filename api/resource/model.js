const db = require('../../data/dbConfig');

const get = () =>{
    return db('resources');
}

const findById = id =>{
    return db('resources')
    .where('resource_id', id)
    .first()
}

const update = (changes, id) => {
    return db('resources')
      .where('id', id)
      .update(changes)
      .then(a =>{
          return findById(id);
      })
  }

  const add = resource =>{
    return db('resources')
    .insert(resource)
    .then(a => {return findById(a)})
}
  

  module.exports = {
    get,
    update,
    add
  };