import React from 'react'
import '../App.css'
function ContentPage() {
  return (
    <div ClassName="App-Center">
      <img src={process.env.PUBLIC_URL + "./static/ind.jpg"} width="100%" height="100%"/>

    </div>
  )
}

export default ContentPage
