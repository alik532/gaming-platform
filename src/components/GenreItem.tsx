import {FC} from 'react'
import classes from '../styles/GenreItem.module.css'

const GenreItem:FC<{img: string, name: string}> = ({img, name}) => {
  return (
	<div className={classes.item}>
		<img src={img} alt="" className={classes.img}/>
		<h3 className={classes.name}>{name}</h3>
	</div>
  )
}

export default GenreItem