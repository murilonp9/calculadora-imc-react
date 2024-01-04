import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100; // Convertendo para metros
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setImc(imcCalculado.toFixed(2));

      // Classificação do IMC
      if (imcCalculado < 18.5) {
        setClassificacao('Magreza');
      } else if (imcCalculado < 24.9) {
        setClassificacao('Normal');
      } else if (imcCalculado < 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imcCalculado < 34.9) {
        setClassificacao('Obesidade Grau I');
      } else if (imcCalculado < 39.9) {
        setClassificacao('Obesidade Grau II');
      } else {
        setClassificacao('Obesidade Grau III');
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm): </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular</button>

      {imc !== null && classificacao && (
        <div>
          <h2>IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;