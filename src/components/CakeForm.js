import { useState } from "react";

const CakeForm = ({ cakes, setCakes }) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const [error, setError] = useState("");

    const handleValidation = () => {
        let errorMessage = "";

        // Check if cake exists
        if (cakes.find((cake) => cake.cakeName === cakeName)) {
            errorMessage = "This cake already exists";
        }
        // Check if fields are blank
        if (cakeName === "" || ingredients === "" || price === "" || rating === "") {
            errorMessage = "Please fill in all fields";

        }

        setError(errorMessage);
        return errorMessage !== "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!handleValidation()) {
            let ingredientsArray = ingredients.split(",");
            let updatedCakes = [...cakes];
            updatedCakes.push({
                cakeName,
                ingredients: ingredientsArray,
                price,
                rating
            })
            setCakes(updatedCakes);
        }

    };

    return (
        <>
            <h2>Cake Recipes</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="cakeName"
                    placeholder="Cake Name"
                    value={cakeName}
                    onChange={(e) => setCakeName(e.target.value)}
                />
                <input
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
            {error !== "" ? <p>{error}</p> : <></>}
        </>
    );
};

export default CakeForm;
