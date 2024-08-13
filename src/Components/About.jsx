import React from 'react'

function About({info}) {
  // const {info} = (props)
  console.log(info)
  return (
    <div>
  <h1>{info.Title}</h1>
  <img src={info.Image} alt={info.Image} />
  <h2>{info.Heading}</h2>
    </div>

  )
}

export default About