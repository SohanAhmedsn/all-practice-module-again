import React, {useState} from 'react';

const Restaurant = () => {
    const [searhText, setSearchText] = useState('');
    const [meals, setMeals] =useState([]);


    useEffect(()=>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searhText}`;

        fetch(url)
        .then(res=>json())
        .then(data=>setMeals(data.meals))

    },[]);


    const handleSearchField = e =>{
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>
           <input onChange={handleSearchField} placeholder="Search meals here" type="text" /> 
           <div>
                {
                    meals.map(meal=> <Meal meal={meal}></Meal>);
                }
           </div>
        </div>
    );
};

export default Restaurant;