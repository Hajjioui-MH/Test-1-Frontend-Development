import { useState, useEffect } from 'react'
import Table from './components/table'
import DropDown from './components/dropDown'
import { motion } from "framer-motion"
import Wave from "./components/Wave"

const App = ()=> {

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([])
  const [value, setValue] = useState(null)

  useEffect(() => {
    fetch('http://app.getrecall.com:8080/products')
      .then(response=>response.json())
      .then( data=> {
            setData( value == null ? data.products : data.products.filter(product=> product.category === value))
            const allCategroy = data.products.map(product => product.category )
            const singleCategory = allCategroy.filter((item,index) => allCategroy.indexOf(item)===index)
            setCategories(singleCategory)
          } );
  }, [value])
  useEffect(() => {
    console.log("   ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️       Made By Me : Mohamed Hajjioui                  ✏️")
    console.log("   ✏️       Thank You for Giving Me This Opportunity       ✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️                                                      ✏️")
    console.log("   ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️")
  }, [])


  return (
    <div className="App">
      {/* Header----------------------------------------------------*/}
      <motion.div 
        className="header" 
        initial={{y:-30}}
        animate={{y:0, transition:{duration:0.25}}}
        >
        <h2 className="App-h2" >Test #1 : Frontend Development</h2>
        <h2 className="App-h2" >Matious Digital</h2>
      </motion.div>

      <motion.div
        initial={{opacity:-0.4}}
        animate={{opacity:1, transition:{duration:1}}}>
        {/* Dropdown----------------------------------------------------*/}
        <DropDown categories={categories} value={value} onChange={(val)=> setValue(val)} />

        {/* Table----------------------------------------------------*/}
        <Table data={data} />
      </motion.div>
      <Wave/>
    </div>
  );
}

export default App;
