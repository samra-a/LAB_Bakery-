const Cake = ({ cake, sellCake }) => {

    const ingredientsList = cake.ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
    })

    const handleClick = () => {
        sellCake(cake.price)
    }

    return (
        <>
            <h3>{cake.cakeName}</h3>
            <p>Ingredients: </p>Í
            <ul>
                {ingredientsList}
            </ul>

            <p>Price: £{cake.price} </p>
            <p>Rating: {cake.rating}</p>
            <button onClick={handleClick} >Sell Cake </button>
            <hr />
        </>
    )
}

export default Cake;