import React from 'react'

export const User = () => {
  return (
    <div className='card-container'>
        <span className='stage'>ONLINE</span>
        <img className='img' src="images/1.jpg" alt="user1" />
        <h3>Full name</h3>
        <h3>native</h3>
        <p>front end developer</p>
        <div className='buttons'>
            <button className='primary'>message</button>
            <button className='primary outline'>Following</button>
        </div>
        <div className='skills'>
            <h6>skills</h6>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Front End Frameworks</li>
                <li>CSS Preprocessors</li>
                <li>RESTful Services/APIs</li>
            </ul>
        </div>

    </div>
  )
}
