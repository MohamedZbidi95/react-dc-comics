import buyItems from '../data/buyItems.js'

function AppBuyBar() {
  return (
    <section className="buy-bar">
      <ul className="container buy-list">
        {buyItems.map((item) => (
          <li key={item.id}>
            {/* alt vuoto: icona decorativa, il testo accanto dice già tutto */}
            <img src={item.img} alt="" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AppBuyBar