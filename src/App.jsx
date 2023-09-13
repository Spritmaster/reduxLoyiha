import React from 'react'
import BasketProducts from './components/BasketProducts'
import Header from './components/Header'

const App = () => {
  return (
    <div className='h-full bg-[#fffafa] bg-[url(https://rare-gallery.com/mocahbig/60097-Abstract-Glass-4k-Ultra-HD-Wallpaper.png)] bg-cover bg-no-repeat'   >
      <Header/>
      <BasketProducts/>
    </div>
  )
}

export default App