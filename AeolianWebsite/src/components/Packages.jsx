import React from 'react'
import {Link} from 'react-router-dom'
function Packages({data}) {

    const {name, description,link} = data


  return (

    <div className='Container'>
        <div className="name-container">
            <p> <Link to={link}>{name}</Link></p>
        </div>
            <div className="btn-container">
                <button>{description}</button>
            </div>
    </div>
  )
}

export default Packages