import { useEffect, useState } from "react"
import axios from "axios"



export const Search = () => {

    const [food , setFood] = useState([])
    useEffect(() => {getData()},[])

    const getData = () => {
        axios.get("www.themealdb.com/api/json/v1/1/search.php?f=a").then((res)=> setFood(res.data))
    }
    console.log(food)

    return(

        <div>
            <input type="text" placeholder="enter your food" id="foodItems" />
            <button>Submit</button>
        </div>
    )
}