import Head from 'next/head';
import Link from 'next/link';

export default function Yes() {
    return (
      <>
        <Head>
          <title>Yay! Thank You!</title>
          <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" rel="stylesheet" />
        </Head>
        <div className="container">
          <div>
            <h1 className="header_text">Yay! Gae ka</h1>
          </div>
          <div className="gif_container">
            <Link href="https://drive.google.com/file/d/10Yrm4hEPMOnU-FBDmsIJaEs8_KyLe2gM/view?usp=sharing" target="_blank">
              <img 
                src="https://i.gifer.com/Pak.gif" 
                alt="Cute animated illustration" 
                className="clickable-gif"
              />
            </Link>
          </div>
          <p className="happy-text">Happy is so delighted to have you in his life!</p>
          <p className="happy-text">Click mo si Cinnamon Roll crush mo naman ako eh</p>
          <p style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: '#000000' }}>
            "No" ka pa ng "No" ha, kita ko yun 🙄
          </p>
        </div>
      </>
    );
  }