import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const [moveCount, setMoveCount] = useState(0);
  const [showYesButton, setShowYesButton] = useState(true);
  const [showPleaseImage, setShowPleaseImage] = useState(false);
  const [isAfterSixMoves, setIsAfterSixMoves] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts = [];
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 5 + Math.random() * 5,
          size: 10 + Math.random() * 20,
          delay: Math.random() * 5
        });
      }
      setHearts(newHearts);
    };

    createHearts();
    const interval = setInterval(createHearts, 10000); // Recreate hearts every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const nextPage = () => {
    router.push('/yes');
  };

  const moveButton = () => {
    const noBtnElement = document.getElementById("noButton");
    const buttonRect = noBtnElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxX = viewportWidth - buttonRect.width;
    const maxY = viewportHeight - buttonRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtnElement.style.position = "fixed";
    noBtnElement.style.left = randomX + "px";
    noBtnElement.style.top = randomY + "px";

    const newMoveCount = moveCount + 1;
    setMoveCount(newMoveCount);
    
    if (newMoveCount >= 1 && !isAfterSixMoves) {
      setShowYesButton(false);
    }
    
    if (newMoveCount === 4) {
      setTimeout(() => {
        setShowYesButton(true);
        setShowPleaseImage(true);
        setIsAfterSixMoves(true);
      }, 3000);
    }
  };
  
  return (
    <>
      <Head>
        <title>Will You Be My Valentine?</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" />
      </Head>
      <div className="hearts-bg">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
              fontSize: `${heart.size}px`,
              animationDelay: `${heart.delay}s`
            }}
          >
            ❤
          </div>
        ))}
      </div>
      <div className="container">
        <div>
          <h1 className="header_text">Will you be my valentine, bubby?</h1>
        </div>
        <div className="gif_container">
          <img 
            src="https://64.media.tumblr.com/44437aaa3af65ef5b5dc25b2cf1e81d1/6acc7d78ea83e207-45/s400x600/5b30035952803850ed3136fbe760ceff97ee8d19.gif" 
            alt="Cute animated illustration"
          />
        </div>
        <div className="buttons">
          {showYesButton && (
            <div className={`yes-container ${moveCount >= 6 ? 'after-six' : ''}`}>
              {showPleaseImage && (
                <img 
                  src="/images/Pang-asar.gif"
                  alt="Please say yes" 
                  className="please-image"
                />
              )}
              <button 
                className="btn" 
                id="yesButton" 
                onClick={nextPage}
              >
                {moveCount >= 6 ? 'Yes na kasi!' : 'Yes'}
              </button>
            </div>
          )}
          <button className="btn" id="noButton" onMouseOver={moveButton}>No</button>
        </div>
        <p className="made-with-love">
          Made with love and a sprinkle of creativity by Aguilar, Acy Klyne 💖
        </p>
      </div>
    </>
  );
}