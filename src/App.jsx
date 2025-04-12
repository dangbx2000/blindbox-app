import React, { useState } from 'react';
import BlindboxCard from './components/BlindboxCard';
import { characters } from './data';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState([]);
  const [lastOpened, setLastOpened] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleSwipe = (direction, character) => {
    if (direction === 'right') {
      setOpened((prev) => [...prev, character]);
      setLastOpened(character);
    }
    if (index + 1 >= characters.length) {
      setFinished(true);
    } else {
      setIndex(index + 1);
    }
  };

  const goBack = () => {
    setIndex(index - 1);
    setLastOpened(null);
  };

  return (
    <div className="App">
      <h1>🎁 Blindbox Tinder</h1>

      {!finished ? (
        <BlindboxCard
          character={characters[index]}
          onSwipe={handleSwipe}
          isOpen={lastOpened?.name === characters[index].name}
        />
      ) : (
        <div className="congrats">
          🎉 Bạn đã mở hết tất cả blindbox!
        </div>
      )}

      {lastOpened && (
        <button onClick={goBack} className="back-btn">↩️ Quay lại</button>
      )}
    </div>
  );
}

export default App;
