import React from 'react'

function Packages({data}) {

    const {name, description} = data


  return (

    <div className='Container'>
        <div className="name-container">
            <p>{name}</p>
        </div>
            <div className="btn-container">
                <button>{description}</button>
            </div>
    </div>
  )
}

export default Packages