import React from 'react';
import { UseSate } from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite Seu CEP..." />

        <button className="buttonSearch">
          <FiSearch />
        </button>
      </div>

      <main className="main">
        <h2>05665-060 </h2>

        <span>Rua: </span>
        <span>Complemento: </span>
        <span>Bairro: </span>
        <span>Localização:</span>
      </main>
    </div>
  );
}
