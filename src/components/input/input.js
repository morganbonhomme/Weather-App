import React from "react";
import classes from './input.module.css'

const cityInput = (props) => {
  return (
  <form className={classes.Input} onSubmit={props.citySubmitted}>
    <input className={classes.textInput} type="text" placeholder="Your city"/>
  </form >
  )
}

export default cityInput