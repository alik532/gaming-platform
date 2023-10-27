import {FC} from 'react'
import { pattern } from '../assets'
import classes from '../styles/MainButton.module.css'

const MainButton:FC<{text: string, isPatterned: boolean}> = ({text, isPatterned}) => {
  return (
	<button className={classes.button} style={isPatterned ? {background: `url(${pattern})`, border: "1px solid var(--orange)"} : {border: "1px solid var(--white)"}}>
		{text}
	</button>
  )
}

export default MainButton;