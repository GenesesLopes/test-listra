const parsePrice = (price) => {
    return price.toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
}

export default parsePrice