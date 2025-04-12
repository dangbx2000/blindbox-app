import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './BlindBoxSwiper.css';

// Dữ liệu cho các Box và Popup
import popupData from './popupData.json';

const BlindBoxSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftSwipeCount, setLeftSwipeCount] = useState(0);
  const [popupInfo, setPopupInfo] = useState(null);

  // Khi vuốt trái
  const swipedLeft = (index) => {
    setLeftSwipeCount(leftSwipeCount + 1);
    console.log(`Box ${index + 1} được bỏ qua!`);
  };

  // Khi vuốt phải
  const swipedRight = (index) => {
    console.log(`Box ${index + 1} được mở!`);
    setCurrentIndex(index + 1);
    // Hiển thị popup với thông tin từ file JSON
    const boxData = popupData[index];
    setPopupInfo(boxData);  // Cập nhật thông tin popup
  };

  // Xử lý khi không vuốt
  const outOfFrame = (index) => {
    console.log(`Box ${index + 1} đã bị bỏ qua hoàn toàn`);
  };

  return (
    <div className="container">
      <div className="card-container">
        {popupData.map((character, index) => (
          <TinderCard
            key={index}
            className="swipe"
            onSwipe={(direction) => direction === 'left' ? swipedLeft(index) : swipedRight(index)}
            onCardLeftScreen={() => outOfFrame(index)}
            preventSwipe={['up', 'down']}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${character.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="overlay">
                <div className="info-box">
                  <h2>{character.name}</h2>
                  <p>{character.info}</p>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="controls">
        {leftSwipeCount === popupData.length && <h3>🎉 Chúc mừng! Bạn đã mở hết các hộp!</h3>}
      </div>

      {popupInfo && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-left">
              <img src={popupInfo.popupImage} alt={popupInfo.name} /> {/* Ảnh trong Popup Left */}
            </div>
            <div className="popup-right">
              <h2>{popupInfo.name}</h2>
              <p>{popupInfo.details}</p>
            </div>
            <button onClick={() => setPopupInfo(null)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlindBoxSwiper;
