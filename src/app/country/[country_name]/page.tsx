import { pages } from "next/dist/build/templates/app-page";
import Link from "next/link";

export default function CountryName ({params}:any){
    const countries :{
       name:string,
       capital:string,
       population:number,
    }[] =[{
        name: "Pakistan",
        capital:"Islamabad",
        population:235800000,
    },{
        name: "China",
        capital: "Beijing",
        population:1412000000,
    },{
        name: "Iran",
        capital: "Tehran",
        population: 88550000,
    },{
        name: "Afghanistan",
        capital: "Kabul",
        population: 41130000,
    },{
        name: "India",
        capital: "New Delhi",
        population: 1417000000,
    },];

    function findCountry(country_url:string){
     return countries.find(country => country.name.toLocaleLowerCase() == country_url.toLocaleLowerCase())
    }
   let result = findCountry(params.country_name);
    
    return (
        <div>
            {
                result ? (
                    <>
                    <h1>Country Name :{result.name}</h1>
                    <h1>Capital Name :{result.capital}</h1>
                    <h1>Population : {result.population}</h1>
                    </>
                ):(
                    <h1>Country not found!</h1>
                )
                
}
            <Link href="/"><button style={{textAlign:"right",padding:"10px",color:"blue" }}><h1>Back To Home Page </h1></button></Link>
        </div>
    );
}