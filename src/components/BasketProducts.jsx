import Product from './Product'
import React from 'react'
import { useSelector } from 'react-redux'

const BasketProducts = () => {
    const { products } = useSelector((store) => store.basket)
    const totalPrice =useSelector((state)=>state.basket.total)
    const umumiyNarx=totalPrice >0?totalPrice.toFixed(2):totalPrice
    console.log(products);
    return (
        <div className='max-w-[1000px] mx-[auto] mt-[2rem]'>
            {products && products.map((item) => {
                const { name, price, image, amount ,id } = item
                return (
                    <Product
                        key={new Date().getTime() + Math.random()}
                        name={name}
                        price={price}
                        image={image}
                        amount={amount}
                        id={id}
                    />
                )
            })}

            <div className='flex justify-between'>
                <h1 className='text-[2rem] font-semibold text-[#fff]'>Total</h1>  
                <p className='text-[2rem] text-[#ffae3d] '>${umumiyNarx}</p></div>
        </div>
    )
}

export default BasketProducts;