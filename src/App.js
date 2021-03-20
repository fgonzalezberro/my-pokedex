// Import Styles
import './assets/sass/index.scss';

// Import components
import Header from './components/header/Header.js';
import Dashabord from './components/dashboard/Dashboard.js';
import Footer from './components/footer/Footer.js';


function App() {
  return (
    <div className="pokedex-app">
      <Header />
      <Dashabord />
      <Footer />
    </div>
  );
}

export default App;