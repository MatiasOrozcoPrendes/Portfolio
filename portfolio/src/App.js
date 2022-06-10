import './App.css';
import AvatarInferior from './Componentes/AvatarInferior';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Section from './Componentes/Section';

function App() {
  return (
    <div className="App" id='Inicio'>
      <div className="Separador" id='SobreMi'>
        <p>.</p>
      </div>
      <Header />
      <Section />
      <AvatarInferior />
      <Footer />
    </div>
  );
}



export default App;
