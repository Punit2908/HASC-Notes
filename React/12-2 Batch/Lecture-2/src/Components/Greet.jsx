import React from 'react'
import Props from './Props'

const product = {
    name: "iPhone 14",
    price: 999,
    discount: 10,
    isAvailable: true
}
const Available = ({ name, price, discount, isAvailable }) => {

    return (
        <div>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Discount: {discount}%</p>
            <p>Is Available: {isAvailable ? 'Yes' : 'No'}</p>
        </div>
    )
}

const UnAvailable = ({ name, price, discount, isAvailable }) => {

    return (
        <div>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Discount: {discount}%</p>
            <p>Is Available: {isAvailable ? 'Yes' : 'No'}</p>
        </div>
    )
}
export default function Greet(props) {

    // const arr = ["Hello", "World", "!"]
    const product = {
        name: "iPhone 14",
        price: 999,
        discount: 10,
        isAvailable: false
    }
    const { children } = props
    const { name, price, discount, isAvailable } = product
    return (
        <div>
            {/* {children} */}
            {/* <Props name={name} price={price} discount={discount} isAvailable={isAvailable} /> */}
            {isAvailable ? <Available name={name} price={price} discount={discount} isAvailable={isAvailable} /> : <UnAvailable name={name} price={price} discount={discount} isAvailable={isAvailable} />}
        </div>
    )
}
