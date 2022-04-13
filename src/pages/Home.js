import React, { useState } from 'react'
import { colors, components } from '../data/data'
import Selectbox from '../components/Selectbox';

function Home() {
  const [title, setTitles] = useState([])

  useState(() => {
    let titleOnly = components.map(item => {
      return item.title
    })
    setTitles(titleOnly)
  }, [])

  return (
    <>
      <Selectbox data={colors} />
      <Selectbox data={title} />
    </>
  )
}

export default Home