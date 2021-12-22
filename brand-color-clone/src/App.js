import React,{useState} from 'react'
import BrandsData from "./brands.json"
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './MainContext';
import './App.css';
function App() {

  console.log(BrandsData);

  const brandsArr = [];
  Object.keys(BrandsData).map(key => (
      brandsArr.push(BrandsData[key])
  ))

  console.log(brandsArr);
  


  const [brands , setBrands] = useState(brandsArr)
  const [selectedBrands , setSelectedBrands] = useState([])

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands
  }

  console.log(selectedBrands);
  
  return (

   <> 
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
   </>

   
 

  )
}

export default App;


