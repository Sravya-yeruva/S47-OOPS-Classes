import React from 'react'

function StudentDetails(props) {
  return (
    
    <div>
     
      <div className='box'>
      <h2>Name:{props.Name}</h2>
      <h2>Telugu:{props.Telugu}</h2>
      <h2>Hindi:{props.Hindi}</h2>
      <h2>English:{props.English}</h2>
      <h2>Maths:{props.Maths}</h2>
      <h2>Science:{props.Science}</h2>
      <h2>Social:{props.Social}</h2>
      </div>
    </div>
  )
}

export default StudentDetails
