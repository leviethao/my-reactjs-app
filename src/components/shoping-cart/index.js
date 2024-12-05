import React, { useCallback, useEffect, useState } from 'react'

const inventory = [
    { name: 'bacon', unitPrice: 10.99, quantity: 10},
    { name: 'eggs', unitPrice: 3.99, quantity: 10},
    { name: 'cheese', unitPrice: 6.99, quantity: 10},
    { name: 'chives', unitPrice: 1.00, quantity: 10},
    { name: 'wine', unitPrice: 11.99, quantity: 10},
    { name: 'brandy', unitPrice: 17.55, quantity: 10},
    { name: 'bananas', unitPrice: 0.69, quantity: 10},
    { name: 'ham', unitPrice: 2.69, quantity: 10},
    { name: 'tomatoes', unitPrice: 3.26, quantity: 10},
    { name: 'tissue', unitPrice: 8.45, quantity: 10},
];

const ShopingCart = ({item, onChange}) => {
    const [updatedItem, setUpdatedItem] = useState(item)

    useEffect(() => {
        setUpdatedItem(item)
    }, [item])
    // const onClickItem = useCallback((item) => {
    //     return () => {
    //         alert(item.name)
    //     }
    // }, [])

    const onClickIncrease = useCallback(() => {
        const newItem = {
            ...updatedItem,
            quantity: updatedItem.quantity + 1
        }
        onChange && onChange(newItem)
        setUpdatedItem(newItem)
        return  newItem
    }, [updatedItem])

    const onClickDecrease = useCallback(() => {
            let newQuantity = updatedItem.quantity-1
            if (newQuantity < 0) {
                newQuantity = 0
            }

            const newItem = {
                ...updatedItem,
                quantity: newQuantity
            }

            onChange && onChange(newItem)
            setUpdatedItem(newItem)
            return newItem
    }, [updatedItem])

    return (
        <div style={{background: 'gray', width: '100%', height: 400}}>
            <div>{updatedItem?.name}</div>
            <div>{updatedItem?.quantity}</div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={onClickIncrease}>+</button>
            <button onClick={onClickDecrease}>-</button>
            </div>
        </div>
    )
}

export default ShopingCart