import React from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi';

export default function App() {
  return (
    <div classname="container">
      <h1 classname="title">Buscador CEP</h1>

      <div classname="containerInput">
        <input type="text" placeholder="Digite Seu CEP..." />

        <button classname="buttonSearch">
          <FiSearch />
          </button>
      </div>

      <main classname="main">
        <h2>05665-060</h2>

      </main>


    </div>
  );
}
