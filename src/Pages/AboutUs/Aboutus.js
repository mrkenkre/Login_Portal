import React from 'react'
import CardComp from '../../Components/Cards/CardComp'
import Navbar from '../../Components/Navbar/Navbar'

function Aboutus() {
  return (
    <div>
      <Navbar />

      <CardComp
        title={"About"}
        desc={
          "We are ever ready to help you in every possible way!"
        }
      />

    </div>
  )
}

export default Aboutus