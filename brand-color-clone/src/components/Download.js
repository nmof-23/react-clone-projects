import { useContext, useEffect, useState } from "react";
import MainContext from "../MainContext";
import { GrLink , GrDownload , GrClose} from "react-icons/gr";


function Download() {

    const { selectedBrands , setSelectedBrands , brands } = useContext(MainContext)
    const [downloadUrl , setDownloadUrl] = useState(''); 
    const [cssMethod , setCssMethod] = useState('css'); 
    

    const getLink = () => {
        prompt("Here's the URL to share" , `http://localhost:3000/collections/${selectedBrands.join(',')}`)
    }

    useEffect(() => {
        if(selectedBrands.length > 0){

            let output = '';

            switch(cssMethod) {

              case 'css':
                    output += ':root{\n'
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color , key) => {
                            output += `--${slug}-${key}: #${color};\n`
                        }) 
                    })
                    output += '}'
                    
                    break;
                  
              
              case 'scss':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color , key) => {
                            output += `\$${slug}-${key}: #${color};\n`
                        }) 
                    })


                    break;
              
              case 'less':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color , key) => {
                            output += `@$${slug}-${key}: #${color};\n`
                        }) 
                    })


                    break;

            }

            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)

            return () => {
                URL.revokeObjectURL(url);
                setDownloadUrl('')
            }

        }
    },[selectedBrands , cssMethod])

    return ( 
        <div className="download">
            <div className="actions">
                <select className="select" onChange={(e) => setCssMethod(e.target.value)}>
                    <option value={"css"}>CSS</option>
                    <option value={"scss"}>SCSS</option>
                    <option value={"less"}>LESS</option>
                </select>
                <a href={downloadUrl} download={`brand.${cssMethod}`} >
                    <GrDownload />
                </a>
              

                <button onClick={getLink}>
                    <GrLink />
                </button>

                <button onClick={() => {setSelectedBrands([])}}>
                    <GrClose />
            </button>
            </div>

            <div className="selected">
            
                {selectedBrands.length} brands collected 
                
            </div>
        </div>
     );
}

export default Download;