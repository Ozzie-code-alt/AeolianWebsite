import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './packages.css'
function Packages({data}) {

    const {name, description,link} = data

  const [copiedText, setCopiedText] = useState('')
  const [isCopied, setIsCopied] = useState(false)


    const copyFunction = ()=>{
  // create temporary inputElement to copy the text 
  const tempInput = document.createElement('input')
  tempInput.value = description // put description in temptInput Var
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  document.body.removeChild(tempInput)

  setCopiedText(description)
  setIsCopied(true)
    }

  return (

    <div className='Container'>
        <div className="name-container">
            <p> <Link to={link}>{name}</Link></p>
        </div>
            <div className="btn-container">
                <button onClick={copyFunction}>{ isCopied ? 'Copied!' : description}</button>
            </div>
    </div>
  )
}

export default Packages