import axios,{
    AxiosResponse, AxiosError
} from "../../node_modules/axios/index";
import {Icar} from "./Icar";

let ContentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let GetAllCarsButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("GetAllButton");
GetAllCarsButton.addEventListener("click", ShowAllCars);

let AddCarButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("addButton");
AddCarButton.addEventListener("click",AddACar);

let DeleteButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("deleteButton");
DeleteButton.addEventListener("click", AddACar);

function ShowAllCars():void {
    axios.get<Icar[]>("https://webapicar20190326034339.azurewebsites.net/api/cars")
        .then(function (response: AxiosResponse<Icar[]>) : void {
            console.log(response)

            let result: string = "<ol>";

            response.data.forEach((car: Icar) => {
                result += "<li>" +car.model + "<br> " + car.vendor + "<br>" + car.price + "<br>" + car.id + "</li>"
            })
            result += "</ol>"
            ContentElement.innerHTML = result;
        })
        .catch(function (error: AxiosError) : void {
            console.error(error.message)
        })
}
function AddACar(): void {
    let addModelelement: HTMLInputElement = <HTMLInputElement> document.getElementById("addModel");
    let addVendorelement: HTMLInputElement = <HTMLInputElement> document.getElementById("addVendor");
    let addPriceelement: HTMLInputElement = <HTMLInputElement> document.getElementById("addPrice");

    let myModel : string = addModelelement.value;
    let myVendor : string = addVendorelement.value;
    let myPrice : number = +addPriceelement.value;

    let newCar : Icar = {id: 0, vendor: myVendor, model: myModel, price: myPrice}
    axios.post<Icar>("https://webapicar20190326034339.azurewebsites.net/api/cars",newCar)
        .then(function () {
            ShowAllCars()
        })
        .catch(function (error : AxiosError) : void {
            console.log(error.message)
        })
}
function DeleteAllCars(): void {
    let car: Icar
    axios.delete<Icar>("https://webapicar20190326034339.azurewebsites.net/api/cars/")
}