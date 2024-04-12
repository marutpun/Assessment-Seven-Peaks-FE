import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout({ children }) {
  return (
    <div class="wrapper">
      <Header />
      <div className="main-wrapper">{children}</div>
      <Footer />
    </div>
  );
}
