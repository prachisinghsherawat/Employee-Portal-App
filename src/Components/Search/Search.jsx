import { useState } from "react"
import axios from "axios"


export const Search = () => {

    const [food ,setFood] = useState([])   

    const getData = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then((res)=> setFood(res.data.meals))
    }
    console.log(food)

    return( 

        <>

        <div>
            <input type="text" placeholder="enter your food" id="foodItems" />
            <button onClick={getData}>Submit</button>
        </div>

        {food.map((el) =>(

            <div>
                <img src={el.strMealThumb} alt="food_img" />
                <h1>{el.strMeal}</h1>
            </div>
        ))}

        </>
    )
}