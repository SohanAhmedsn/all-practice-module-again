/* function animalCount(miles) {
    // oneAnimal
    const oneAnimal = 10; 
    //twoAnimal
    const twoAnimal = 50;
    //animalRest
    const animalRest = 100;
    if (miles <= 10) {
       // oneAnimal
        const count = miles * oneAnimal;
        return count;
    } else if (miles <= 20) {
        // oneAnimal
            //destiny1
        const destiny1 = 10 * oneAnimal;
        const rest = miles - 10;
        //twoAnimal
        const density2 = rest * twoAnimal;
        const totalAnimals = destiny1 + density2;
        return totalAnimals;
    } else {
        // oneAnimal
        const destiny1 = 10 * oneAnimal;
        //twoAnimal
        const density2 = 10 * twoAnimal;
        const rest = miles - 20;
        //animalRest
        const restDensity = rest * animalRest;
        const totalAnimals = destiny1 + density2 + restDensity;
        return totalAnimals;
    }
}

const animals = animalCount(35);
console.log(animals); */









/* function animalCount(miles){
    const oneAnimal =10;
    const twoAnimal =50;
    const animalRest = 100;
    if(miles <= 10){
        const count = miles * oneAnimal;
        return count;

    }
    else if(miles <= 20){
        const destiny1sityAnimals = 10 * oneAnimal;
        const rest = miles -10;
        const density2sityAnimals = rest * twoAnimal;
        const totalAnimals = furstDensityAnimals + density2sityAnimals;
        return totalAnimals;

    }
    else{
        const destiny1 = 10 * oneAnimal;
        const density2sityAnimals 
    }
} */
















function animalCount(miles) {
    // oneAnimal
    const oneAnimal = 10;
    //twoAnimal
    const twoAnimal = 50;
    //animalRest
    const animalRest = 100;
    if (miles <= 10) {
        // oneAnimal
        const count = miles * oneAnimal;
        return count;
    } else if (miles <= 20) {
        // oneAnimal
        //destiny1
        const destiny1 = 10 * oneAnimal;
        const rest = miles - 10;
        //twoAnimal
        const density2 = rest * twoAnimal;
        const totalAnimals = destiny1 + density2;
        return totalAnimals;
    } else {
        // oneAnimal
        const destiny1 = 10 * oneAnimal;
        //twoAnimal
        const density2 = 10 * twoAnimal;
        const rest = miles - 20;
        //animalRest
        const restDensity = rest * animalRest;
        const totalAnimals = destiny1 + density2 + restDensity;
        return totalAnimals;
    }
}

const animals = animalCount(10);
console.log(animals);