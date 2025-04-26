import React from 'react'

const Logo = ({image, width}) => {
  return (
    <img style={{width: width ? width : '100%'}} src={image && image} alt="logo" />
  )
}

export default Logo
