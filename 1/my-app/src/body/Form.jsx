import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input.jsx'

const  Form = () => {
  return(
    <form className="singup-form"></form>
      <Input type="text" name="firstname" placeholder="Фамилия">
        <div></div>
      </input>
      <Input type="text" name="lastname" placeholder="Имя">
        <div></div>
      </input>
      <Input type="email" name="email" placeholder="E-mail">
        <div></div>
      </input>
      <Input type="password" name="password" placeholder="Пароль">
        <div></div>
      </input>
      <button className='registration'>Регистрация</button>
    </form>
  )
}

export default Form;
