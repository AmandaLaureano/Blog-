import './App.css';
import { Conteudo } from './Conteudo';
import { Main } from './Main';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Main />
      <Conteudo />
      <footer>
        <div className="footer-content">
          <h3>Astrônomo Blog</h3>
          <p>Fique por dentro das nossas redes sociais!</p>
          <ul className="socials">
            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>
        <div className="footer_bottom">
          <p>copyright &copy;2022. Designed by <span>Amanda Laureano.</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
