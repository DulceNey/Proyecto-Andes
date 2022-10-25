

const Product = ({data, addToCart}) => {
  const {id, name, price}=data; 
  return (
    <div className='box-content w-32 h-32 p-4 border-black bg-orange'>
        <h4>{name}</h4>
        <h5>$ {price}</h5>
        <button onClick={() => addToCart(id)}>agregar</button>
    </div>
  )
}

export default Product