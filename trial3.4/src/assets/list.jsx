import React from 'react'
import Block from './looper'

const Arr =   [{name:"nick devris",
from: "kyu",
id:"45444f"
},
{name:"max versterppen",
from: "kyu",
id:"45444f"
},
{name:"lewis hamilto",
from: "kyu",
id:"45444f"
}
]

function List() {
 
  return (
   Arr.map(function(e){
    return<Block name ={e.name} sch={e.from} id={e.id}/>
   })
  )
}

export default List