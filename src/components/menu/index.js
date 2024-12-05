import React, { useCallback, useEffect, useState } from 'react'
import ShopingCart from '../shoping-cart';
import MyCard from '../my-card';

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

const Menu = () => {
    const [selectedItem, setSelectedItem] = useState(null)
    const [cardItems, setCardItems] = useState([])
    const [currentShopingCard, setCurrentShopingCard] = useState(null)

    const onClickItem = useCallback((item) => {
        return () => {
            setSelectedItem(item)
            setCurrentShopingCard(item)
            // alert(item?.name)
        }
    }, [])

    const onClickAddToCard = useCallback(() => {
            // alert('onClickAddToCard:  ' + JSON.stringify(currentShopingCard))
            setCardItems(x => ([
                ...x,
                currentShopingCard
            ]))
    }, [currentShopingCard])


    const onUpdateShopingCardItem = useCallback((newCardItem) => {
        // alert('onUpdateShopingCardItem:     ' + JSON.stringify(newCardItem))
        setCurrentShopingCard(newCardItem)
    }, [setCurrentShopingCard]) 

    useEffect(() => {
        for (let i = 0; i < cardItems.length; i++) {
            if (currentShopingCard) {
                if (cardItems[i].name == currentShopingCard.name) {
                    cardItems[i] = currentShopingCard
                }
    
                setCardItems(cardItems)
            }
        }
    },[currentShopingCard, cardItems])

    const onDeleteItem = useCallback((selectedItem) => {
        setCardItems(x => [...(x.filter(t => t.name != selectedItem.name))])
    }, [])

    return (
        <div>
            <ul style={{marginBottom: 32}}>
                {
                    inventory.map((item, i) => (
                    <li key={i} onClick={onClickItem(item)}>{item.name}</li>
                    ))

                }
            </ul>

            <ShopingCart item={selectedItem} onChange={onUpdateShopingCardItem}></ShopingCart>
            <button style={{padding: 24}} onClick={onClickAddToCard}>Add To Card</button>
            <MyCard itemList={cardItems} onDeleteItem={onDeleteItem}></MyCard>
        </div>
    )
}

export default Menu