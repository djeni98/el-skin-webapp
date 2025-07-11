import { ReactComponent as BuscaIcon } from "../assets/busca.svg";
import { ReactComponent as SacolaIcon } from "../assets/sacola.svg";
import './Header.css'

function Header() {
  const menuItems = [
    { href: "/categorias", title: "Categorias" },
    { href: "/tipo-pele", title: "Tipo de pele" },
    { href: "/necessidade", title: "Necessidade" },
    { href: "/ingredientes", title: "Ingredientes" },
  ]

  return (
    <header className="container">
      <div className="header-search">
        <span>AL SKIN</span>
        <div>
          <input placeholder="O que você está procurando?" />
          <button><BuscaIcon /></button>
        </div>
        <button><SacolaIcon /></button>
      </div>

      <div className="header-menu">
        <div className="menu-items">
          { menuItems.map((item) => (
            <a
              className="menu-item"
              key={item.href}
              href={item.href}
            >{item.title}</a>
          ))}
        </div>

        <a href="/kits-50-off">Kits até 50% OFF</a>
      </div>
    </header>
  )
};

export default Header;