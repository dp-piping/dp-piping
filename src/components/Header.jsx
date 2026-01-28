import logo from '../assets/images/logo.jpg'

export default function Header() {
    return (
      <header className="site-header">
        <div className="container header-content">
          <div className="logo">
            <img src={logo} alt="D.P. Piping Company Logo" />
            <span className="company-name">D.P. Piping</span>
          </div>
        </div>
      </header>
    );
  }
  