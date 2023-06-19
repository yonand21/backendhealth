const artikel = require('./artikel');

const getAllArtikelHandler = (request, h) => {
  const {id, title} = request.query;

  let filteredArtikel = artikel;

  if (id !== undefined) {
    filteredArtikel = filteredArtikel.filter((artikel) =>
      artikel.id.toLowerCase().includes(id.toLowerCase()),
    );
  }

  if (title !== undefined) {
    filteredArtikel = filteredArtikel.filter(
        (artikel) => artikel.title === !!Number(title),
    );
  }

  const response = h.response({
    status: 'success',
    data: {
      artikel: filteredArtikel.map((artikel) => ({
        id: artikel.id,
        title: artikel.title,
        img: artikel.img,
        source: artikel.source,
        overview: artikel.overview,
      })),
    },
  });
  response.code(200);
  return response;
};

const getArtikelByIdHandler = (request, h) => {
  const {id} = request.params;
  const artikel = artikel.filter((b) => b.id === id)[0];

  if (artikel !== undefined) {
    return {
      status: 'success',
      data: {
        artikel,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Artikel tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  getAllArtikelHandler,
  getArtikelByIdHandler,
};
