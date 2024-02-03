import React from 'react';
import "../css/Main.css";

const Main = () => {
  return (
    <section className='main-content'>
      <div className="container justify-content-center align-items-center">
        <div className='row justify-content-center align-items-center'>
          <div className="col-1 d-none d-xl-block">
            <img src="planet2.png" alt="" className='position-absolute planet' />
          </div>
          <div className="col-12 col-xl-5 about-me">
            <h2>Welcome to my Portfolio</h2>
            <h1 className="">Hi! I'm Lance Kian Flores</h1>
            <p className='lead'>
              Welcome to my website! I'm Lance Kian Flores, a passionate front-end
              developer dedicated to crafting engaging and user-friendly
              web experiences.
            </p>
          </div>
          <div className="col-2"></div>
          <div className="col-12 col-xl-4 mypicture mt-5">
            <div className='position-relative'>
              <img className='me img-fluid' src="me.png" alt="me" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Main;
