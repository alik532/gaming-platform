import {FC} from 'react'
import { pattern } from '../assets'
import classes from '../styles/MainButton.module.css'

const MainButton:FC<{text: string, isPatterned: boolean, onClick?: (e: React.MouseEvent) => void}> = ({text, isPatterned, onClick}) => {
  return (
	<button onClick={(e) => {onClick ? onClick(e) : 1; }} className={classes.button} style={isPatterned ? {background: `url(${pattern})`} : {border: "white 1px solid"}}>
		{text}
	</button>
  )
}

export default MainButton;