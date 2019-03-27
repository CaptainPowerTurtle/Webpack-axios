import axios,{
    AxiosResponse, AxiosError
} from "../../node_modules/axios/index";
import {Icar} from "./Icar";

let ContentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

function ShowAllCars():void {
    axios.get<Icar[]>("https://webapicar20190326034339.azurewebsites.net/api/car")
        .then(function (response: AxiosResponse<Icar[]>) : void {
            console.log(response)
        })
        .catch(function (error: AxiosError) : void {
            console.error(error.message)
        })
}

function UpdateOneCar():void{
    axios.put<Icar[]>("https://webapicar20190326034339.azurewebsites.net/api/car")
}
ShowAllCars();