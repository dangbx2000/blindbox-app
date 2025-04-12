import React from 'react';
import TinderCard from 'react-tinder-card';

const BlindboxCard = ({ character, onSwipe, isOpen }) => {
  return (
    <TinderCard
      className="swipe"
      onSwipe={(dir) => onSwipe(dir, character)}
      preventSwipe={['up', 'down']}
    >
      <div className="card">
        {!isOpen ? (
          <div className="box-face">🎁 Blindbox</div>
        ) : (
          <div className="cv-info">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.bio}</p>
          </div>
        )}
      </div>
    </TinderCard>
  );
};

export default BlindboxCard;
