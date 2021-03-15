// Import Styles
import './assets/sass/index.scss';

// Import Material UI
import { Button }  from '@material-ui/core';

// Import components
import Seeker from './components/Seeker';

function App() {
  return (
    <div className="PokeApp">
      <Seeker />
      <Button color="primary">Buscar Pokemon</Button>
    </div>
  );
}

export default App;