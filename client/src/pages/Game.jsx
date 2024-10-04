import React from 'react';

function Game() {
  return (
    <div className='flex justify-center align-center items-center p-10'>
      <iframe 
        width={640} 
        height={480} 
        src='https://www.tinytap.com/activities/g56n3/player/embed/' 
        webkitallowfullscreen=''
        mozallowfullscreen='' 
        allowFullScreen='' 
        style={{border: "0"}}
      >
      </iframe>
    </div>
  );
}

export default Game;
