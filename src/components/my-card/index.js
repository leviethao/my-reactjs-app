import React, { useCallback, useEffect, useState } from 'react'

const MyCard = ({ itemList, onDeleteItem }) => {
    const [selectedItem, setSelectedItem] = useState(null)

    const deleteItem = useCallback(() => {
        if (selectedItem) {
            onDeleteItem && onDeleteItem(selectedItem)
        }
    }, [selectedItem])

    console.log('itemList: ',itemList)
    return (
        <div style={{ background: 'gray', width: '100%', height: 400 }}>
            <ul style={{ marginBottom: 32 }}>
                {
                    itemList?.map((item, i) => (
                        <li key={i} onClick={() => setSelectedItem(item)} style={{ background: selectedItem?.name == item?.name ? 'yellow' : 'none' }}>
                            <div>{item?.name}</div>
                            <div>{item?.quantity}</div>
                        </li>
                    ))

                }
            </ul>
            <button onClick={deleteItem}>Delete Selected Item</button>
        </div>
    )
}

export default MyCard