import React from 'react'


function Header(){
  return (
    <div className='header'>
        <img src={require('../images/Troll_Face.png')} width={60} height={60} />
        <h1>Meme Generator</h1>
    </div>
  )
}

export default Header