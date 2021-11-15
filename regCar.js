let car = new Car("Honda", 
"CRV",
"2008",
"$11,501",
"Clean Title");
console.log(car);
//Instantiate HONDA & CRV
let carAd = document.querySelector(".carAdPost");
carAd.textContent = "" +car.make+ " " +car.type+"";

const makes = ["Honda","Subaru", "Acura", "Toyota", "Ford", "Lincoln", "Porshe", "Ferrari", "Jeep", "Chrysler"];
const types = ["CRV","Impreza", "MDX", "Camry", "Fiesta ST", "Aviator", "911 Turbo", "458", "Compass", "300C"];
const newCar = new Array();
for (let index = 0; index <=9; index++){
    car = new Car(makes[index],
    types[index],
    2008,
    11501.00,
    "Clean Title")
newCar.push(car);
}

const carList = document.createElement("ul");
newCar.forEach(car => {
    let str =
        `${car.make} ${car.type}`;
    // Create a list item
    let carListItem = document.createElement("li");
    carListItem.textContent = str;
    carList.append(carListItem);
}
);
carDiv = document.querySelector(".newCarBox")
carDiv.append(carList);
console.log(newCar)