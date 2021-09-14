import React, { useState, FormEvent } from 'react'
import { useProducts } from '../../Hooks/useProducts';
const Form: React.FC = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const { createProduct } = useProducts()

    const handleAddName = (event: any) => {
        setName(event.target.value)
    }
    const handleAddCategory = (event: any) => {
        setCategory(event.target.value)
    }
    const onSubmitter = (e: FormEvent) => {
        e.preventDefault()
        if (!name) {
            alert("nome obrigatorio")
            return
        }
        if (!category) {
            alert("categoria obrigatoria")
            return
        }
        createProduct({ name: name, category: category })
        alert("adicionado com sucesso!!")
    }

    return (
        <>
            <form onSubmit={onSubmitter}>
                <input type="text" value={name} name="name" onChange={handleAddName} />
                <input type="text" value={category} name="category" onChange={handleAddCategory} />
                <button type="submit">adicionar</button>
            </form>
        </>
    )
}
export default Form