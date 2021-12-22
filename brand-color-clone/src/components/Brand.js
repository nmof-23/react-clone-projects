import getContrastYIQ from "../helpers";
import { useContext } from "react";
import MainContext from "../MainContext";
import Clipboard from 'react-clipboard.js';

function Brand(props) {
    const { brand } = props

    const {selectedBrands , setSelectedBrands  , setCopied} = useContext(MainContext);

    const toggleSelected = () => {
        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(b => b !== brand.slug))
        }
        else{
            setSelectedBrands([...selectedBrands,  brand.slug])
        }
    }

    const setColor = (color) => {
        setCopied(color)
    }    

    return ( 

        <div  className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <Clipboard component="span" onSuccess={() => {setColor(color)}} data-clipboard-text={color} key={Math.random()} style={{'--bgColor': `#${color}` , '--textColor':getContrastYIQ(color)}}>
                        {color}
                    </Clipboard>
                ))}
            </div>
        </div>

    );
}

export default Brand;