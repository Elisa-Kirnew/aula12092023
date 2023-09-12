import OláMundo from './components/OláMundo';
import Frases from './components/Frases';
import DigaMeuNome from './components/DigaMeuNome';
import './App.css';

function App() {
  return (
    <div className="Container">
      <h1> Qual é meu nome</h1>
      <DigaMeuNome nome="Elisa Kirnew" idade="17" profissão="Estilista" >

      </DigaMeuNome>
    </div>
  );
}

export default App;
