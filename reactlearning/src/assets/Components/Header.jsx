import React from 'react'

export const Header = () => {
  const customCss = "code"
  const isLoggedin = false
  const greeting = isLoggedin?<p>welcome back</p>: <p>please login</p>

  const items = ['item1','item2','item3']
  return (
    <div>
        <h1 className='bannerText'>Wilson Joseph</h1>
        <p className="slogan">Learn react</p>

        <p className={customCss}>25+45={25+45}</p>

        {/* conditional rendering */}
        {greeting}

        {/* jsx list */}
        <ul>
        {
          items.map((item,index)=>(
            <li key = {index}>{item}</li>
          ))
        }
        </ul>
       
    </div>
  )
}
