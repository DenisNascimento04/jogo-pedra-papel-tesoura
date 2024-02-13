import React, { useState } from 'react';
import iconPedra from './assets/icon-rock.svg';
import iconPapel from './assets/icon-paper.svg';
import iconTesoura from './assets/icon-scissors.svg';
import iconLagarto from './assets/icon-lizard.svg';
import iconSpock from './assets/icon-spock.svg';
import logo from './assets/logo.svg';
import logoBonus from './assets/logo-bonus.svg';
import bgTri from './assets/bg-triangle.svg';
import bgPenta from './assets/bg-pentagon.svg';
import imgWin from './assets/img-win.png';
import imgRules from './assets/image-rules.svg';
import imgRulesBonus from './assets/image-rules-bonus.svg';
import iconClose from './assets/icon-close.svg';
import './App.css';

function App() {

  const [jogador, setJogador] = useState('');
  const [pc, setPC] = useState('');

  const [escolha, setEscolha] = useState(true);
  const [suspense, setSupense] = useState(false);
  const [resultado, setResultado] = useState(false);
  const [regras, setRegras] = useState(false);
  const [modoBonus, setModoBonus] = useState(false);

  const [pontos, setPontos] = useState(0);

  const [ganhador, setGanahador] = useState('YOU WIN');

  const escolhasPC = [
    "tesoura",
    "papel",
    "pedra"
  ]
  const escolhasPCBonus = [
    "tesoura",
    "papel",
    "pedra",
    "spock",
    "lagarto"
  ]

  function Jogar(escolha: string) {
    setEscolha(false);
    setSupense(true);
    setJogador(escolha);
    var escolhapc = escolhasPC[Math.floor(Math.random() * (escolhasPC.length - 0) + 0)];
    setTimeout(() => {
      setPC(escolhapc);
    }, 2000);
    setTimeout(() => {
      if (escolha === "pedra") {
        if (escolhapc === "tesoura") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true)
            setPontos(pontos+1);
        } else if (escolhapc === "papel"){
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
        } else if (escolhapc === "pedra") {
            setGanahador("draw");
            setSupense(false);
            setResultado(true);
        }
  
      }
      else if (escolha === "tesoura") {
          if (escolhapc === "pedra") {
              setGanahador("you lose");
              setSupense(false);
              setResultado(true);
              if (pontos > 0) {
                setPontos(pontos-1);
              }
          } else if (escolhapc === "papel"){
              setGanahador("you win");
              setSupense(false);
              setResultado(true);
              setPontos(pontos+1);
          } else if (escolhapc === "tesoura") {
              setGanahador("draw");
              setSupense(false);
              setResultado(true)
          }
      }
      else if (escolha === "papel"){
          if (escolhapc === "pedra") {
              setGanahador("you win");
              setSupense(false);
              setResultado(true);
              setPontos(pontos+1);
          }else if (escolhapc === "tesoura") {
              setGanahador("you lose");
              setSupense(false);
              setResultado(true);
              if (pontos > 0) {
                setPontos(pontos-1);
              }
          }else if (escolhapc === "papel")  {
              setGanahador("draw");
              setSupense(false);
              setResultado(true);
          }
      }
    }, 2500);
  }
  function JogarBonus(escolha: string) {
    setEscolha(false);
    setSupense(true);
    setJogador(escolha);
    var escolhapc = escolhasPCBonus[Math.floor(Math.random() * (escolhasPCBonus.length - 0) + 0)];
    setTimeout(() => {
      setPC(escolhapc);
    }, 2000);
    setTimeout(() => {
      if (escolha === "pedra") {
        if (escolhapc === "tesoura") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true)
            setPontos(pontos+1);
        } else if (escolhapc === 'lagarto'){
            setGanahador("you win");
            setSupense(false);
            setResultado(true)
            setPontos(pontos+1);
        } else if (escolhapc === "spock"){
          setGanahador("you lose");
          setSupense(false);
          setResultado(true);
          if (pontos > 0) {
            setPontos(pontos-1);
          }
        } else if (escolhapc === "papel"){
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
        } else if (escolhapc === "pedra") {
            setGanahador("draw");
            setSupense(false);
            setResultado(true);
        }
  
      }
      else if (escolha === "tesoura") {
        if (escolhapc === "pedra") {
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
        } else if (escolhapc === "spock") {
          setGanahador("you lose");
          setSupense(false);
          setResultado(true);
          if (pontos > 0) {
            setPontos(pontos-1);
          }
        } else if (escolhapc === "lagarto"){
          setGanahador("you win");
          setSupense(false);
          setResultado(true);
          setPontos(pontos+1);
        } else if (escolhapc === "papel"){
            setGanahador("you win");
            setSupense(false);
            setResultado(true);
            setPontos(pontos+1);
        } else if (escolhapc === "tesoura") {
            setGanahador("draw");
            setSupense(false);
            setResultado(true)
        }
      }
      else if (escolha === "papel"){
        if (escolhapc === "pedra") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true);
            setPontos(pontos+1);
        } else if (escolhapc === "spock") {
          setGanahador("you win");
          setSupense(false);
          setResultado(true);
          setPontos(pontos+1);
        } else if (escolhapc === "tesoura") {
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
        } else if (escolhapc === "lagarto") {
          setGanahador("you lose");
          setSupense(false);
          setResultado(true);
          if (pontos > 0) {
            setPontos(pontos-1);
          }
        } else if (escolhapc === "papel")  {
            setGanahador("draw");
            setSupense(false);
            setResultado(true);
        }
      }
      else if (escolha === "spock"){
          if (escolhapc === "tesoura") {
              setGanahador("you win");
              setSupense(false);
              setResultado(true);
              setPontos(pontos+1);
          } else if (escolhapc === "pedra") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true);
            setPontos(pontos+1);
          } else if (escolhapc === "papel") {
              setGanahador("you lose");
              setSupense(false);
              setResultado(true);
              if (pontos > 0) {
                setPontos(pontos-1);
              }
          } else if (escolhapc === "lagarto") {
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
          } else if (escolhapc === "spock")  {
              setGanahador("draw");
              setSupense(false);
              setResultado(true);
          }
      }
      else if (escolha === "lagarto"){
          if (escolhapc === "spock") {
              setGanahador("you win");
              setSupense(false);
              setResultado(true);
              setPontos(pontos+1);
          } else if (escolhapc === "papel") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true);
            setPontos(pontos+1);
          } else if (escolhapc === "tesoura") {
              setGanahador("you lose");
              setSupense(false);
              setResultado(true);
              if (pontos > 0) {
                setPontos(pontos-1);
              }
          } else if (escolhapc === "pedra") {
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
          } else if (escolhapc === "lagarto")  {
              setGanahador("draw");
              setSupense(false);
              setResultado(true);
          }
      }
    }, 2500);
  }

  function playAgain() {
    setPC('');
    setResultado(false);
    setEscolha(true);
  }
  function ModoBonus() {
    setPC('');
    setResultado(false);
    setEscolha(true);
    setModoBonus(!modoBonus)
  }

  return (
    <div className="container">
      {modoBonus ? 
        <>
          <header>
            <img src={logoBonus} alt="Logo" />
            <div className='pontuacao'>
              <h1>SCORE</h1>
              <p>{pontos}</p>
            </div>
          </header>
          {escolha &&
            <div className='escolher-bonus'>
              <img src={bgPenta} alt="bg-triangulo" className='back bonus' />
              <button onClick={() => JogarBonus('pedra')} className='escolhas pedra'>
                <div className='interior'>
                  <img src={iconPedra} alt="icon pedra" />
                </div>
              </button>
              <button onClick={() => JogarBonus('papel')} className='escolhas papel'>
                <div className='interior'>
                  <img src={iconPapel} alt="icon papel" />
                </div>
              </button>
              <button onClick={() => JogarBonus('tesoura')} className='escolhas tesoura'>
                <div className="interior">
                  <img src={iconTesoura} alt="icon tesoura" />
                </div>
              </button>
              <button onClick={() => JogarBonus('spock')} className='escolhas spock'>
                <div className="interior">
                  <img src={iconSpock} alt="icon spock" />
                </div>
              </button>
              <button onClick={() => JogarBonus('lagarto')} className='escolhas lagarto'>
                <div className="interior">
                  <img src={iconLagarto} alt="icon lagarto" />
                </div>
              </button>
            </div>
          }
          {suspense && 
            <div className='suspense'>
              <div>
                <h1>YOU PICKED</h1>
                {jogador === "pedra" &&
                  <button className='escolhas grande pedra'>
                    <div className='interior'>
                      <img src={iconPedra} alt="icon pedra" />
                    </div>
                  </button>
                }
                {jogador === "papel" &&
                  <button className='escolhas grande papel'>
                    <div className='interior'>
                      <img src={iconPapel} alt="icon papel" />
                    </div>
                  </button>
                }
                {jogador === "tesoura" &&
                  <button className='escolhas grande tesoura'>
                    <div className='interior'>
                      <img src={iconTesoura} alt="icon tesoura" />
                    </div>
                  </button>
                }
                {jogador === "spock" &&
                  <button className='escolhas grande spock'>
                    <div className='interior'>
                      <img src={iconSpock} alt="icon spock" />
                    </div>
                  </button>
                }
                {jogador === "lagarto" &&
                  <button className='escolhas grande lagarto'>
                    <div className='interior'>
                      <img src={iconLagarto} alt="icon lagarto" />
                    </div>
                  </button>
                }
              </div>
              <div>
                <h1>THE HOUSE PICKED</h1>
                {pc === '' &&
                  <div className='vazio'/>
                }
                {pc === "pedra" &&
                  <button className='escolhas grande pedra'>
                    <div className='interior'>
                      <img src={iconPedra} alt="icon pedra" />
                    </div>
                  </button>
                }
                {pc === "papel" &&
                  <button className='escolhas grande papel'>
                    <div className='interior'>
                      <img src={iconPapel} alt="icon papel" />
                    </div>
                  </button>
                }
                {pc === "tesoura" &&
                  <button className='escolhas grande tesoura'>
                    <div className='interior'>
                      <img src={iconTesoura} alt="icon tesoura" />
                    </div>
                  </button>
                }
                {pc === "spock" &&
                  <button className='escolhas grande spock'>
                    <div className='interior'>
                      <img src={iconSpock} alt="icon spock" />
                    </div>
                  </button>
                }
                {pc === "lagarto" &&
                  <button className='escolhas grande lagarto'>
                    <div className='interior'>
                      <img src={iconLagarto} alt="icon lagarto" />
                    </div>
                  </button>
                }
              </div>
            </div>
          }
          {resultado &&
            <div className='resultado'>
              <div>
                <h1>YOU PICKED</h1>
                {jogador === "pedra" &&
                  <button className='escolhas grande pedra'>
                    <div className='interior'>
                      <img src={iconPedra} alt="icon pedra" />
                    </div>
                  </button>
                }
                {jogador === "papel" &&
                  <button className='escolhas grande papel'>
                    <div className='interior'>
                      <img src={iconPapel} alt="icon papel" />
                    </div>
                  </button>
                }
                {jogador === "tesoura" &&
                  <button className='escolhas grande tesoura'>
                    <div className='interior'>
                      <img src={iconTesoura} alt="icon tesoura" />
                    </div>
                  </button>
                }
                {jogador === "spock" &&
                  <button className='escolhas grande spock'>
                    <div className='interior'>
                      <img src={iconSpock} alt="icon spock" />
                    </div>
                  </button>
                }
                {jogador === "lagarto" &&
                  <button className='escolhas grande lagarto'>
                    <div className='interior'>
                      <img src={iconLagarto} alt="icon lagarto" />
                    </div>
                  </button>
                }
              </div>
              <div className='centro'>
                <h1>{ganhador}</h1>
                <button onClick={() => playAgain()}>PLAY AGAIN</button>
              </div>
              <div>
                <h1>THE HOUSE PICKED</h1>
                {pc === '' &&
                  <div className='vazio'/>
                }
                {pc === "pedra" &&
                  <button className='escolhas grande pedra'>
                    <div className='interior'>
                      <img src={iconPedra} alt="icon pedra" />
                    </div>
                  </button>
                }
                {pc === "papel" &&
                  <button className='escolhas grande papel'>
                    <div className='interior'>
                      <img src={iconPapel} alt="icon papel" />
                    </div>
                  </button>
                }
                {pc === "tesoura" &&
                  <button className='escolhas grande tesoura'>
                    <div className='interior'>
                      <img src={iconTesoura} alt="icon tesoura" />
                    </div>
                  </button>
                }
                {pc === "spock" &&
                  <button className='escolhas grande spock'>
                    <div className='interior'>
                      <img src={iconSpock} alt="icon spock" />
                    </div>
                  </button>
                }
                {pc === "lagarto" &&
                  <button className='escolhas grande lagarto'>
                    <div className='interior'>
                      <img src={iconLagarto} alt="icon lagarto" />
                    </div>
                  </button>
                }
              </div>  
            </div>
          }
          {resultado && ganhador !== 'draw' &&
            <div className={`detalhe ${ganhador === 'you win' ? 'left' : 'right'}`}>
              <img src={imgWin} alt="imagem win" />
            </div>
          }
          <button className='botao-regra' onClick={() => setRegras(true)}>
            RULES
          </button>
          {regras &&
            <div className='regras'>
              <div className='regra'>
                <div>
                  <h1>RULES</h1>
                  <button onClick={() => setRegras(false)}>
                    <img src={iconClose} alt="" />
                  </button>
                </div>
                <img src={imgRulesBonus} alt="imagem regras" />
              </div>
            </div>
          }
        </>
      :
        <>
          <header>
            <img src={logo} alt="Logo" />
            <div className='pontuacao'>
              <h1>SCORE</h1>
              <p>{pontos}</p>
            </div>
          </header>
          {escolha &&
            <div className='escolher'>
              <img src={bgTri} alt="bg-triangulo" className='back' />
              <button onClick={() => Jogar('pedra')} className='escolhas pedra'>
                <div className='interior'>
                  <img src={iconPedra} alt="icon pedra" />
                </div>
              </button>
              <button onClick={() => Jogar('papel')} className='escolhas papel'>
                <div className='interior'>
                  <img src={iconPapel} alt="icon papel" />
                </div>
              </button>
              <button onClick={() => Jogar('tesoura')} className='escolhas tesoura'>
                <div className="interior">
                  <img src={iconTesoura} alt="icon tesoura" />
                </div>
              </button>
            </div>
          }
          {suspense && 
            <div className='suspense'>
              <div>
                <h1>YOU PICKED</h1>
                {jogador === "pedra" &&
                  <button className='escolhas grande pedra'>
                    <div className='interior'>
                      <img src={iconPedra} alt="icon pedra" />
                    </div>
                  </button>
                }
                {jogador === "papel" &&
                  <button className='escolhas grande papel'>
                    <div className='interior'>
                      <img src={iconPapel} alt="icon papel" />
                    </div>
                  </button>
                }
                {jogador === "tesoura" &&
                  <button className='escolhas grande tesoura'>
                    <div className='interior'>
                      <img src={iconTesoura} alt="icon tesoura" />
                    </div>
                  </button>
                }
              </div>
              <div>
                <h1>THE HOUSE PICKED</h1>
                {pc === '' &&
                  <div className='vazio'/>
                }
                {pc === "pedra" &&
                  <button className='escolhas grande pedra'>
                    <div className='interior'>
                      <img src={iconPedra} alt="icon pedra" />
                    </div>
                  </button>
                }
                {pc === "papel" &&
                  <button className='escolhas grande papel'>
                    <div className='interior'>
                      <img src={iconPapel} alt="icon papel" />
                    </div>
                  </button>
                }
                {pc === "tesoura" &&
                  <button className='escolhas grande tesoura'>
                    <div className='interior'>
                      <img src={iconTesoura} alt="icon tesoura" />
                    </div>
                  </button>
                }
              </div>
            </div>
          }
          {resultado &&
            <div className='resultado'>
              <div>
                <h1>YOU PICKED</h1>
                {jogador === "pedra" &&
                  <button className='escolhas grande pedra'>
                    <div className='interior'>
                      <img src={iconPedra} alt="icon pedra" />
                    </div>
                  </button>
                }
                {jogador === "papel" &&
                  <button className='escolhas grande papel'>
                    <div className='interior'>
                      <img src={iconPapel} alt="icon papel" />
                    </div>
                  </button>
                }
                {jogador === "tesoura" &&
                  <button className='escolhas grande tesoura'>
                    <div className='interior'>
                      <img src={iconTesoura} alt="icon tesoura" />
                    </div>
                  </button>
                }
              </div>
              <div className='centro'>
                <h1>{ganhador}</h1>
                <button onClick={() => playAgain()}>PLAY AGAIN</button>
              </div>
              <div>
                <h1>THE HOUSE PICKED</h1>
                {pc === '' &&
                  <div className='vazio'/>
                }
                {pc === "pedra" &&
                  <button className='escolhas grande pedra'>
                    <div className='interior'>
                      <img src={iconPedra} alt="icon pedra" />
                    </div>
                  </button>
                }
                {pc === "papel" &&
                  <button className='escolhas grande papel'>
                    <div className='interior'>
                      <img src={iconPapel} alt="icon papel" />
                    </div>
                  </button>
                }
                {pc === "tesoura" &&
                  <button className='escolhas grande tesoura'>
                    <div className='interior'>
                      <img src={iconTesoura} alt="icon tesoura" />
                    </div>
                  </button>
                }
              </div>  
            </div>
          }
          {resultado && ganhador !== 'draw' &&
            <div className={`detalhe ${ganhador === 'you win' ? 'left' : 'right'}`}>
              <img src={imgWin} alt="imagem win" />
            </div>
          }
          <button className='botao-regra' onClick={() => setRegras(true)}>
            RULES
          </button>
          {regras &&
            <div className='regras'>
              <div className='regra'>
                <div>
                  <h1>RULES</h1>
                  <button onClick={() => setRegras(false)}>
                    <img src={iconClose} alt="" />
                  </button>
                </div>
                <img src={imgRules} alt="imagem regras" />
              </div>
            </div>
          }
        </>
      }
      <button className={`botao-bonus ${modoBonus ? 'on' : 'off'}`} onClick={() => ModoBonus()}>
        Modo Bonus
      </button>
    </div>
  );
}

export default App;
