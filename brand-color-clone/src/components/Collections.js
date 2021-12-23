import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../MainContext";
import LazyLoad from 'react-lazyload';
import Brand from "./Brand";
import { GrLinkPrevious} from "react-icons/gr";
import { Link , useHistory } from "react-router-dom";




function Collections() {

    const { slugs } = useParams();
    const { brands , selectedBrands , setSelectedBrands } = useContext(MainContext)
    const history = useHistory();

    console.log(slugs.split(","));

    useEffect(() => {

        setSelectedBrands(slugs.split(","))


    },[])

    const clearSelectedBrands = () => {
        setSelectedBrands([]);
        history.push("/")
    }


    return ( 

        <main className="content">
            <header className="header"> 

                <Link to="/" onClick={clearSelectedBrands}>
                    <button className="back-btn">
                        <GrLinkPrevious /> All Brands
                    </button>
                </Link>
              
            </header>

            <section className="brands">
                {selectedBrands.map(slug  => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return (
                        <LazyLoad key={brand.slug} once={true} overflow={true} placeholder="Loading..."> 
                            <Brand brand={brand}  />
                        </LazyLoad>
                    ) 
                })}


            </section>
        
         </main>

     );
}

export default Collections;