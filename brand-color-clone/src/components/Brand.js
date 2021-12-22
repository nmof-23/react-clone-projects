import getContrastYIQ from "../helpers";
import { useContext } from "react";
import MainContext from "../MainContext";

function Brand(props) {
    const { brand } = props

    const {selectedBrands , setSelectedBrands} = useContext(MainContext);

    const toggleSelected = () => {
        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(b => b !== brand.slug))
        }
        else{
            setSelectedBrands([...selectedBrands,  brand.slug])
        }
    }

    

    return ( 
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <span key={Math.random()} style={{'--bgColor': `#${color}` , '--textColor':getContrastYIQ(color)}} >{color}</span>
                ))}
            </div>
        </div>

    );
}

export default Brand;