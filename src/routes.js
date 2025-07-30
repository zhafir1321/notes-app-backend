const {
  addNoteHandler,
  getAllNotesHandler,
  getNotesByIDHandler,
  editNoteByIDHandler,
  deleteNoteByIDHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByIDHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIDHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIDHandler,
  },
];

module.exports = routes;
