import comics from '../data/comics.js'

function AppMain() {
  return (
    <main className="app-main">
      {/* immagine messa come background nel CSS: è decorativa, non contenuto */}
      <div className="jumbotron"></div>

      <section className="container comics-section">
        {/* posizionata in absolute rispetto a .comics-section */}
        <h2 className="section-label">Current Series</h2>

        <div className="comics-grid">
          {comics.map((comic) => (
            <div className="comic-card" key={comic.id}>
              {/* le copertine sono URL esterni presi da comics.js */}
              <img src={comic.thumb} alt={comic.title} />
              <h3>{comic.series}</h3>
            </div>
          ))}
        </div>

        {/* TODO: per ora non fa nulla, servirà lo state per caricare altri fumetti */}
        <button className="btn-load">Load more</button>
      </section>
    </main>
  );
}

export default AppMain