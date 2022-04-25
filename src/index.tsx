import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { DeckProvider } from './provider/DeckProvider';

ReactDOM.render(
  <DeckProvider>
    <App />
  </DeckProvider>,
  document.getElementById('root')
);
