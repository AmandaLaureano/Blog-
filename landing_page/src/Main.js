
export function Main(){
  return(
    <div className="main">
      <div className="center">
        <div className="menu">
          <div>
            <h3>Astronômo Blog</h3>
            <div className="item-menu">
              <input type="button" className="buttonLogin" value="Login"/>
            </div>
          </div>
        </div>

        <div className="form">
          <h2>Se inscreva em nossa newsletter!</h2>
          <form>
            <div className="itens-form">
              <input type="text" className="campotxt" placeholder="Digite seu nome" />
              <input type="text" className="campotxt"placeholder="E-mail" />
              <input type="button" className="button" value="Enviar"/>
            </div>
          </form>
        </div>

          
      </div>
    </div>  
  );
}

