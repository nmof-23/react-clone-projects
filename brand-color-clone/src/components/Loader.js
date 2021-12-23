import React from "react"
import ContentLoader from "react-content-loader"

function Loader() {
    return (  
        <ContentLoader 
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="218" y="118" rx="0" ry="0" width="7" height="0" /> 
        <rect x="19" y="49" rx="0" ry="0" width="70" height="40" /> 
        <rect x="91" y="49" rx="0" ry="0" width="70" height="40" /> 
        <rect x="164" y="49" rx="0" ry="0" width="70" height="40" /> 
        <rect x="237" y="49" rx="0" ry="0" width="70" height="40" /> 
        <rect x="310" y="49" rx="0" ry="0" width="70" height="40" />
      </ContentLoader>
    );
}

export default Loader;