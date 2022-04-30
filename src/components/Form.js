import React from 'react'
import memesData from '../memesData'


let repeatedImageIndex = -1;
function Form(){
    const[meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const[allMeme, setAllMeme] = React.useState(memesData)

    function getMemeImage(){
        let randomNumber = Math.floor(Math.random() * memesData.data.memes.length)
        if(repeatedImageIndex === randomNumber){
            if(randomNumber === memesData.data.memes.length){
                randomNumber = 0;
            }else{
                randomNumber += 1;
            }
        }
        repeatedImageIndex = randomNumber;
        let url = allMeme.data.memes[randomNumber].url
            setMeme(function(prevMeme){
                return(
                    {...prevMeme,
                    randomImage: url    
                    }  
                )
            })
    }

    let imageExist = false;
    if(meme.randomImage !== ""){
        imageExist = true;
    }

    function onHandleChange(event){
        setMeme(function(prev){
            return({
                ...prev,
                [event.target.name]: event.target.value
            })
        })
    }

  return (
      <div>
        <div className='form'>
            <input type="text" className='form--input' placeholder='top text' maxLength={70} onChange={onHandleChange} name='topText' value={meme.topText}/>
            <input type="text" className='form--input' placeholder='bottom text' maxLength={70} onChange={onHandleChange} name='bottomText' value={meme.bottomText}/>
            <button onClick={getMemeImage} className='form--button'>{imageExist ? "Get a new meme image" : "Get a meme image"}</button>
        </div>    
        <div>
            {imageExist && <img src={meme.randomImage} className='meme--image'/>}
            <h1 className='top--text'>{meme.topText}</h1>
            <h1 className='bottom--text'>{meme.bottomText}</h1>
        </div>
    </div>
  )
}

export default Form

