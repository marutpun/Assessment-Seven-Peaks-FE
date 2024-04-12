import logo from '../assets/images/Logo_White.png';

export default function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header__inner">
          <img src={logo} alt="Seven Peaks Logo" className="Header__brand" />
          <h1 className="Header__title">Assessment Seven Peaks 2021</h1>
        </div>
      </div>
    </header>
  );
}
