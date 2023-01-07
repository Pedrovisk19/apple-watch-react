import { useState } from 'react'
// import watch2 from './assets/watch-2.png'
import './App.css'

function App() {
  const productOptions = [
    {
      id: 1,
      src: "/watch-1.png",
      price: "5.299",
    },
    {
      id: 2,
      src: "/watch-2.png",
      price: "5.500",
    },
    {
      id: 3,
      src: "/watch-3.png",
      price: "5.400",
    },
    {
      id: 4,
      color: "#000000",
      src: "/watch-4.png",
      price: "5.500",
    },
  ];
  const [img, setImg] = useState('/watch-2.png')
  const [price, setPrice] = useState('6.600$')

  // const hancleCLick = () => {
  //   setImg(price)
  // }

  const selectOption = (option) => {
    setImg(option.src)
    setPrice(option.price)
  }

  const renderProdutcs = () => {
     
    return productOptions.map((option) => {
      const newId = `color_picker_${option.id}`
      return (
        <div key={option.id} id={newId} onClick={() => {selectOption(option)}}  className="color-picker-options"></div>
      )
    })
  }

  return (
    <main>
    <div className="container">
      <div className="row">
        <div className="col">
          <h6>The next Dev</h6>
          <h1>
            New <br />
            Series 8 <br />
            Apple
            <span>Watch.</span>
          </h1>
          <p>
            New Apple Watch, a healthy leap ahead. With a healthy dose of
            style.
            <br />
            <br />
            Copyright @wazana - All rights reserved.
          </p>
          <div className="info-container">
            <h5 id="price">{price}</h5>
            <div id="color-picker">
              {renderProdutcs()}
            </div>
          </div>
          <button onClick="">Buy</button>
        </div>
        <div className="col">
          <img
            src={img}
            id="apple-watch"
            alt=""
            type="text/javascript"
          />
        </div>
      </div>
    </div>
  </main>
  )
}

export default App
