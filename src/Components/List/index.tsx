import React from 'react'
import {useProducts} from '../../Hooks/useProducts'

const List: React.FC = () => {
    const {products} = useProducts()
    return (
        <>
            {products?.map((product) => (
                <>
                    <p>{product?.name}</p>
                    <p>{product?.category}</p>
                </>
            ))}
        </>
    )
}
export default List