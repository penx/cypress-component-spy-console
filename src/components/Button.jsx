import React from 'react'

const Wrapper = props => {
  console.error('Some error e.g. relating to prop types')
  return <div {...props} />
}

export default ({ children }) => <Wrapper><button>{children}</button></Wrapper>