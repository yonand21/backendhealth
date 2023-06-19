const {
  getAllArtikelHandler,
  getArtikelByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/artikel',
    handler: getAllArtikelHandler,
  },
  {
    method: 'GET',
    path: '/artikel/{id}',
    handler: getArtikelByIdHandler,
  },
];

module.exports = routes;
