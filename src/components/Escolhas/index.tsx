import React from 'react';
import './styles.css';

type ProppEscolhas = {
    click: () => void,
    escolha: {
        img: string,
        tipo: string,
        cor: string
    }
}

export function Escolhas({ click, escolha }: ProppEscolhas) {
  return (
    <button 
        onClick={click} 
        className={`escolhas ${escolha.tipo}`}
        style={{ background: `linear-gradient(${escolha.cor})` }}
    >
        <div className='interior'>
            <img src={escolha.img} alt={`icon ${escolha.tipo}`} />
        </div>
    </button>
  );
}