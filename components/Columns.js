import React from 'react'

function Columns() {
    const items=[
        {
            id:1,
            title:'hai'
        },
        {
            id:2,
            title:'hello'
        }
    ]
  return (
    items.map(item=>(
        <React.Fragment key={item.id}>
         <h1>Title</h1>
         <p>{item.id}</p>
       </React.Fragment>
    ))
    
  )
}

export default Columns
