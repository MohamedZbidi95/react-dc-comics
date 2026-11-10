import footerLinks from '../data/footerLinks.js'
import socialLinks from '../data/socialLinks.js'

function AppFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container footer-top-content">
          <div className="footer-columns">
            {footerLinks.map((column) => (
              <div key={column.id} className="footer-column">
                <h3>{column.title}</h3>
                <ul>
                  {/* la key deve essere unica solo tra fratelli: gli id ripartono da 1 in ogni colonna */}
                  {column.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <img src="/img/dc-logo-bg.png" alt="" className="footer-logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          {/* TODO: collegare a un form di iscrizione */}
          <button className="btn-signup">Sign-up now!</button>

          <div className="social">
            <span>Follow us</span>
            {socialLinks.map((social) => (
              <a key={social.id} href={social.url}>
                {/* l'icona è l'unico contenuto del link, quindi l'alt fa da testo */}
                <img src={social.img} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter