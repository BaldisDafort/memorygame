import logo from './logo.svg';
import React from 'react';
import './App.css'; // Ajoutez des styles pour la grille

function App() {
  // Tableau avec 16 éléments pour remplir la grille 4x4
  const fruits = [
    "pomme", "banane", "orange", "fraise", 
    "raisin", "mangue", "ananas", "kiwi",
  ];

  return (
    <div>
      <h1>Grille de fruits 4x4</h1>
      <div className="grid">
        {fruits.map((fruit, index) => (
          <div key={index} className="grid-item">
            {fruit}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

