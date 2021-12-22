import React,{useState , useEffect} from 'react'
import BrandsData from "./brands.json"
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './MainContext';
import './App.css';
import Copied from './Copied';

function App() {

  console.log(BrandsData);

  const brandsArr = [];
  Object.keys(BrandsData).map(key => (
      brandsArr.push(BrandsData[key])
  ))

  console.log(brandsArr);
  


  const [brands , setBrands] = useState(brandsArr)
  const [selectedBrands , setSelectedBrands] = useState([])
  const [copied , setCopied] = useState(false);
  const [search , setSearch] = useState('');



  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  }

  console.log(copied);

  useEffect(() => {
    
    if(copied){

      const timeout =  setTimeout(() => {
            setCopied(false)
      },2000)

      return () => {
          clearTimeout(timeout)
      }
    }
    
  },[copied, setCopied])


  useEffect(() => {
    setBrands(brandsArr.filter(brand => brand.title.toLowerCase().includes(search)))
  },[search])
  
  return (

   <> 
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </MainContext.Provider>
   </>

   
 

  )
}

export default App;


