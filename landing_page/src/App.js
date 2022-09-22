import './App.css';
import { Conteudo } from './Conteudo';
import { Main } from './Main';
import React from 'react'
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <Main />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;



