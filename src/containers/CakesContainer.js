import { useState } from "react";
import Cake from "../components/Cake";
import CakeList from "../components/CakeList";
import CakeForm from "../components/CakeForm";

//sfc
const CakesContainer = () => {
    //useState returns array:
    //1- state- manages state- get the value to display wiht victoria sponge
    //2- another function- setter- set the value to display wiht victoria sponge 

    const [cakes, setCakes] = useState([
        {
            cakeName: "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter",
                "sugar",
                "self-raising flour",
                "baking powder",
                "milk"
            ],
            price: 5,
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: [
                "eggs",
                "oil",
                "dried fruit",
                "sugar",
                "self-raising flour",
                "strong tea",
            ],
            price: 2,
            rating: 3
        },
        {
            cakeName: "Carrot Cake",
            ingredients: [
                "carrots",
                "walnuts",
                "oil",
                "cream cheese",
                "flour",
                "sugar",
            ],
            price: 8,
            rating: 5
        }
    ]);

    const [totalSales, setTotalSales] = useState(0)

    const sellCake = (cakePrice) => {
        setTotalSales(totalSales + cakePrice)
    }


    return (
        <>
            <h2>Cake Recipes</h2>
            {/* <p>Average Rating: {(victoriaSponge.rating + teaLoaf.rating + carrotCake.rating)/3}</p> */}
            <h3>Total Sales: £{totalSales}</h3>
            {/* cake data being passed down from state- like a photocopy- so data can't be changed  */}
            {/* <Cake cake={victoriaSponge} sellCake = {sellCake}/> 
        <Cake cake={teaLoaf} sellCake = {sellCake}/>
        <Cake cake={carrotCake} sellCake = {sellCake} /> */}
            {/* forms */}
            <CakeList cakes={cakes} />
            <CakeForm cakes={cakes} setCakes={setCakes} />
        </>
    )
}

export default CakesContainer;


            //-------------------------------HARD CODE VALUES----------------------------------
    //     const [victoriaSponge, setVictoriaSponge] = useState({
//         cakeName: "Victoria Sponge",
//            ingredients: [
//                "eggs",
//               "butter",
//               "sugar",
//               "self-raising flour",
//               "baking powder",
//               "milk"
//             ],
//           price: 5,
//             rating: 5
//     });

//     const [teaLoaf, setTeaLoaf] = useState({
//         cakeName: "Tea Loaf",
//           ingredients: [
//               "eggs",
//              "oil",
//              "dried fruit",
//              "sugar",
//              "self-raising flour",
//              "strong tea",
//          ],
//          price: 2,
//          rating: 3
//    });

//     const [carrotCake, setCarrotCake] = useState({
//         cakeName: "Carrot Cake",
//           ingredients: [
//            "carrots",
//              "walnuts",
//              "oil",
//              "cream cheese",
//              "flour",
//              "sugar",
//           ],
//           price: 8,
//           rating: 5
//    } );





