import { GrSearch } from "react-icons/gr";
import { useContext } from "react";
import MainContext from "../MainContext";

function Search() {

  const { search , setSearch } = useContext(MainContext)

    return ( 
        <div className="search">
            <div className="search-icon">
                <GrSearch />
            </div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Brands"/>
        </div>
     );
}

export default Search;