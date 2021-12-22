import React,{useContext, useState} from "react";
import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";

function Content() {

    const {brands} = useContext(MainContext)


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