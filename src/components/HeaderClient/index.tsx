import logoIcon from '../../assets/images/GUI.png'

export default function HeaderClient () {
return (
    <header className="dsc-header-client">
    <nav className="dsc-container">
      <h1><img src={logoIcon} alt="Carrinho de compras" /></h1>
      <div className="dsc-navbar-right">
        <div className="dsc-menu-items-container">
          <div className="dsc-menu-item">
            <p>Carrinho</p>
          </div>
        </div>
        <a href="#">Entrar</a>
      </div>
    </nav>
  </header>
);
}