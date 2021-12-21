import getContrastYIQ from "../helpers";

function Brand(props) {
    const { brand } = props
    return ( 
        <div className="brand">
            <h5>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <span key={Math.random()} style={{'--bgColor': `#${color}` , '--textColor':getContrastYIQ(color)}} >{color}</span>
                ))}
            </div>
        </div>

    );
}

export default Brand;