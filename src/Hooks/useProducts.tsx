import { createContext, useContext, useState, ReactNode } from "react";
import { TypeProducts } from "../Types/Products";
interface ProductsProviderProp {
    children: ReactNode
}
interface ProductsContextProp{
    products: TypeProducts[],
    createProduct: (productsObject: TypeProducts) => void
}
const ProductsContext = createContext<ProductsContextProp>({} as ProductsContextProp)
export function ProductsProvider({children}: ProductsProviderProp){
    const [products, setProducts] = useState<TypeProducts[]>([])

    function createProduct(productObject: TypeProducts){
        setProducts([
            ...products,
            productObject
        ])
        
    }
    return (
        <ProductsContext.Provider value={{products, createProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export function useProducts(){
    const context = useContext(ProductsContext)
    return context
}