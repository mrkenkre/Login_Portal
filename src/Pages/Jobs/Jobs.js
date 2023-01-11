import React from 'react'
import CardComp from '../../Components/Cards/CardComp'
import Navbar from '../../Components/Navbar/Navbar'

function Jobs() {
  return (
    <div>
      <Navbar />

      <CardComp
        title={"Jobs"}
        desc={
          "Your search for Job ends here!"
        }
      />

    </div>
  )
}

export default Jobs