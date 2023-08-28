import React from 'react'

function Counts({text,count}) {
    console.log(`RENDERING ${count}`)
  return (
    <div>
      {text}  -  {count}
    </div>
  )
}

export default React.memo(Counts);
