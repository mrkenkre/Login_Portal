import React from 'react'
import CardComp from '../../Components/Cards/CardComp'
import Navbar from '../../Components/Navbar/Navbar'

function Contact() {
  return (
    <div>
    <Navbar />

    <CardComp
      title={"Contact"}
      desc={
        "Please feel free to give feedback!"
      }
    />

  </div>
  )
}

export default Contact