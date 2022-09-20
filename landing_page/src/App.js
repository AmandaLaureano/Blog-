import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div>
              <h3>Astronomia Blog</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>
          </div>

          <div className="form">
            <h2>Se inscreva em nossa newsletter!</h2>
            <form>
              <div className="itens-form">
                <input type="text" placeholder="Digite seu nome" />
                <input type="text" placeholder="E-mail" />
                <input type="button" value="Enviar"/>
              </div>
            </form>
          </div>
        </div>
      </div>  

      <div className="conteudo">
        <div className="center">
          <div className="conteudo-single">
            <h3>Título da chamada</h3>
            <p>
              Aqui vai o conteúdo
            </p>
          </div>
          <div className="conteudo-single">
            <h3>Título da chamada</h3>
            <p>
              Aqui vai o conteúdo
            </p> 
          </div>  
        </div>
      </div>
    </div>
  );
}

export default App;
