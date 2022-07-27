import React from 'react'

const Glosarry = ({list}) => {
  return (
    <>
      {list.map(item => (

        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </>
  )
}

export default Glosarry