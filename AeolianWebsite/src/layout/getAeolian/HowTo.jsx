import React from 'react'
import '../../layout/layout-styles/howTo.css'
function HowTo() {

  return (
    <section className='how-to-container'>
          <div className="description-container">
            <div className="description">
            <div className="title-container-HOW">
                <p>How to download the packages</p>
            </div>
            <div className="list-container">
                <ul>
                    <li>First, download the latest release of Python by clicking the above link</li>
                    <li>Once installed, open your operating system's command prompt</li>
                    <li>Next, copy each pip install line for the above packages and run them into the command prompt</li>
                    <li>Once all the packages have been installed, download and extract the source code files from the GitHub repository</li>
                    <li>Finally, locate and run the file 'LSgui.py' which is in 'data/src/'</li>
                </ul>
            </div>
            
            </div>
          </div>

          <div className="picture-container">

          </div>
          
    </section>
  )
}

export default HowTo