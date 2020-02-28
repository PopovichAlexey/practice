import React from 'react'
import PropTypes from 'prop-types'

const  Input = () => {
  return(
    <div>
      <Input type="text" name="name" placeholder="login">
        <div></div>
      </input>
      <Input type="text" name="password" placeholder="password">
        <div></div>
      </input>
    </div>
  )
}

export default Input;
