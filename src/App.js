// Import Styles
import './assets/sass/index.scss';
  
// Import components
import Header from './components/header/Header.js';
import Dashabord from './components/dashboard/Dashboard.js';
import Footer from './components/footer/Footer.js';

// Import context provider
import Provider from './application/provider.js';

function App() {
  return (
    <div className="pokedex-app">
      <Provider>
        <Header />
        <Dashabord />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;