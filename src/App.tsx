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
import { Escolhas } from './components/Escolhas';

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

  const escolhasPadrão = [
    {
      tipo: "tesoura",
      cor: "var(--ScissorsGradient)",
      img: iconTesoura
    },
    {
      tipo: "papel",
      cor: "var(--PaperGradient)",
      img: iconPapel
    },
    {
      tipo: "pedra",
      cor: "var(--RockGradient)",
      img: iconPedra
    },
  ]
  const escolhasBonus = [
    {
      tipo: "tesoura",
      cor: "var(--ScissorsGradient)",
      img: iconTesoura
    },
    {
      tipo: "papel",
      cor: "var(--PaperGradient)",
      img: iconPapel
    },
    {
      tipo: "pedra",
      cor: "var(--RockGradient)",
      img: iconPedra
    },
    {
      tipo: "spock",
      cor: "var(--Cyan)",
      img: iconSpock
    },
    {
      tipo: "lagarto",
      cor: "var(--LizardGradient)",
      img: iconLagarto
    },
  ]
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
    var escolhapc = escolhasPadrão[Math.floor(Math.random() * (escolhasPC.length - 0) + 0)];
    setTimeout(() => {
      setPC(escolhapc.tipo);
    }, 2000);
    setTimeout(() => {
      if (escolha === "pedra") {
        if (escolhapc.tipo === "tesoura") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true)
            setPontos(pontos+1);
        } else if (escolhapc.tipo === "papel"){
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
        } else if (escolhapc.tipo === "pedra") {
            setGanahador("draw");
            setSupense(false);
            setResultado(true);
        }
  
      }
      else if (escolha === "tesoura") {
          if (escolhapc.tipo === "pedra") {
              setGanahador("you lose");
              setSupense(false);
              setResultado(true);
              if (pontos > 0) {
                setPontos(pontos-1);
              }
          } else if (escolhapc.tipo === "papel"){
              setGanahador("you win");
              setSupense(false);
              setResultado(true);
              setPontos(pontos+1);
          } else if (escolhapc.tipo === "tesoura") {
              setGanahador("draw");
              setSupense(false);
              setResultado(true)
          }
      }
      else if (escolha === "papel"){
          if (escolhapc.tipo === "pedra") {
              setGanahador("you win");
              setSupense(false);
              setResultado(true);
              setPontos(pontos+1);
          }else if (escolhapc.tipo === "tesoura") {
              setGanahador("you lose");
              setSupense(false);
              setResultado(true);
              if (pontos > 0) {
                setPontos(pontos-1);
              }
          }else if (escolhapc.tipo === "papel")  {
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
    var escolhapc = escolhasBonus[Math.floor(Math.random() * (escolhasPCBonus.length - 0) + 0)];
    setTimeout(() => {
      setPC(escolhapc.tipo);
    }, 2000);
    setTimeout(() => {
      if (escolha === "pedra") {
        if (escolhapc.tipo === "tesoura") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true)
            setPontos(pontos+1);
        } else if (escolhapc.tipo === 'lagarto'){
            setGanahador("you win");
            setSupense(false);
            setResultado(true)
            setPontos(pontos+1);
        } else if (escolhapc.tipo === "spock"){
          setGanahador("you lose");
          setSupense(false);
          setResultado(true);
          if (pontos > 0) {
            setPontos(pontos-1);
          }
        } else if (escolhapc.tipo === "papel"){
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
        } else if (escolhapc.tipo === "pedra") {
            setGanahador("draw");
            setSupense(false);
            setResultado(true);
        }
  
      }
      else if (escolha === "tesoura") {
        if (escolhapc.tipo === "pedra") {
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
        } else if (escolhapc.tipo === "spock") {
          setGanahador("you lose");
          setSupense(false);
          setResultado(true);
          if (pontos > 0) {
            setPontos(pontos-1);
          }
        } else if (escolhapc.tipo === "lagarto"){
          setGanahador("you win");
          setSupense(false);
          setResultado(true);
          setPontos(pontos+1);
        } else if (escolhapc.tipo === "papel"){
            setGanahador("you win");
            setSupense(false);
            setResultado(true);
            setPontos(pontos+1);
        } else if (escolhapc.tipo === "tesoura") {
            setGanahador("draw");
            setSupense(false);
            setResultado(true)
        }
      }
      else if (escolha === "papel"){
        if (escolhapc.tipo === "pedra") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true);
            setPontos(pontos+1);
        } else if (escolhapc.tipo === "spock") {
          setGanahador("you win");
          setSupense(false);
          setResultado(true);
          setPontos(pontos+1);
        } else if (escolhapc.tipo === "tesoura") {
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
        } else if (escolhapc.tipo === "lagarto") {
          setGanahador("you lose");
          setSupense(false);
          setResultado(true);
          if (pontos > 0) {
            setPontos(pontos-1);
          }
        } else if (escolhapc.tipo === "papel")  {
            setGanahador("draw");
            setSupense(false);
            setResultado(true);
        }
      }
      else if (escolha === "spock"){
          if (escolhapc.tipo === "tesoura") {
              setGanahador("you win");
              setSupense(false);
              setResultado(true);
              setPontos(pontos+1);
          } else if (escolhapc.tipo === "pedra") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true);
            setPontos(pontos+1);
          } else if (escolhapc.tipo === "papel") {
              setGanahador("you lose");
              setSupense(false);
              setResultado(true);
              if (pontos > 0) {
                setPontos(pontos-1);
              }
          } else if (escolhapc.tipo === "lagarto") {
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
          } else if (escolhapc.tipo === "spock")  {
              setGanahador("draw");
              setSupense(false);
              setResultado(true);
          }
      }
      else if (escolha === "lagarto"){
          if (escolhapc.tipo === "spock") {
              setGanahador("you win");
              setSupense(false);
              setResultado(true);
              setPontos(pontos+1);
          } else if (escolhapc.tipo === "papel") {
            setGanahador("you win");
            setSupense(false);
            setResultado(true);
            setPontos(pontos+1);
          } else if (escolhapc.tipo === "tesoura") {
              setGanahador("you lose");
              setSupense(false);
              setResultado(true);
              if (pontos > 0) {
                setPontos(pontos-1);
              }
          } else if (escolhapc.tipo === "pedra") {
            setGanahador("you lose");
            setSupense(false);
            setResultado(true);
            if (pontos > 0) {
              setPontos(pontos-1);
            }
          } else if (escolhapc.tipo === "lagarto")  {
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
              {escolhasBonus.map((item) => (
                <Escolhas 
                  click={() => JogarBonus(item.tipo)}
                  escolha={item}
                />
              ))}
            </div>
          }
          {suspense && 
            <div className='suspense'>
              <div>
                <h1>YOU PICKED</h1>
                {escolhasBonus.map((item) => {
                  if(item.tipo === jogador){
                    return(
                      <Escolhas 
                        click={() => {}}
                        escolha={item}
                      />
                    );
                  }
                  return null
                })}
              </div>
              <div>
                <h1>THE HOUSE PICKED</h1>
                {pc === '' &&
                  <div className='vazio'/>
                }
                {escolhasBonus.map((item) => {
                  if(item.tipo === pc){
                    return(
                      <Escolhas 
                        click={() => {}}
                        escolha={item}
                      />
                    );
                  }
                })}
              </div>
            </div>
          }
          {resultado &&
            <div className='resultado'>
              <div>
                <h1>YOU PICKED</h1>
                {escolhasBonus.map((item) => {
                  if(item.tipo === jogador){
                    return(
                      <Escolhas 
                        click={() => {}}
                        escolha={item}
                      />
                    );
                  }
                })}
              </div>
              <div className='centro'>
                <h1>{ganhador}</h1>
                <button onClick={() => playAgain()}>PLAY AGAIN</button>
              </div>
              <div>
                <h1>THE HOUSE PICKED</h1>
                {escolhasBonus.map((item) => {
                  if(item.tipo === pc){
                    return(
                      <Escolhas 
                        click={() => {}}
                        escolha={item}
                      />
                    );
                  }
                })}
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
              {escolhasPadrão.map((item) => (
                <Escolhas 
                  click={() => Jogar(item.tipo)}
                  escolha={item}
                />
              ))}
            </div>
          }
          {suspense && 
            <div className='suspense'>
              <div>
                <h1>YOU PICKED</h1>
                {escolhasPadrão.map((item) => {
                  if(item.tipo === jogador){
                    return(
                      <Escolhas 
                        click={() => {}}
                        escolha={item}
                      />
                    );
                  }
                })}
              </div>
              <div>
                <h1>THE HOUSE PICKED</h1>
                {pc === '' &&
                  <div className='vazio'/>
                }
                {escolhasPadrão.map((item) => {
                  if(item.tipo === pc){
                    return(
                      <Escolhas 
                        click={() => {}}
                        escolha={item}
                      />
                    );
                  }
                })}
              </div>
            </div>
          }
          {resultado &&
            <div className='resultado'>
              <div>
                <h1>YOU PICKED</h1>
                {escolhasPadrão.map((item) => {
                  if(item.tipo === jogador){
                    return(
                      <Escolhas 
                        click={() => {}}
                        escolha={item}
                      />
                    );
                  }
                })}
              </div>
              <div className='centro'>
                <h1>{ganhador}</h1>
                <button onClick={() => playAgain()}>PLAY AGAIN</button>
              </div>
              <div>
                <h1>THE HOUSE PICKED</h1>
                {escolhasPadrão.map((item) => {
                  if(item.tipo === pc){
                    return(
                      <Escolhas 
                        click={() => {}}
                        escolha={item}
                      />
                    );
                  }
                })}
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