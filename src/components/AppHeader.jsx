import navLinks from '../data/navLinks.js'

function AppHeader() {
  return (
    <header>
      <div className="container header-content">
        {/* i file in public/ si raggiungono con un path che parte da "/" */}
        <img src="/img/dc-logo.png" alt="DC Comics" className="logo" />

        <nav>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader