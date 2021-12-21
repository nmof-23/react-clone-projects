import React,{useState} from "react";
import Search from "./Search";
import BrandsData from "../brands.json"
import Brand from "./Brand";

function Content() {
    console.log(BrandsData);

    const brandsArr = [];
    Object.keys(BrandsData).map(key => (
        brandsArr.push(BrandsData[key])
    ))

    console.log(brandsArr);


    const [brands , setBrands] = useState(brandsArr)
    return (
        <main className="content">
            <header className="header"> 
                <Search />
            </header>

            <section className="brands">
                {brands.map((brand , index) => (
                    <Brand brand={brand} key={index} />
                ))}


            </section>
          
        </main>
    );
}

export default Content;