import {FC} from 'react'
import classes from '../styles/RatingItem.module.css'

const RatingItem:FC<{title: string, percent: number}> = ({title, percent}) => {
  return (
	<div className={classes.item}>
		<div className={classes.rating}>
			<h2 className={classes.title}>{title}</h2>
			<div className={classes.bar}>
				<div className={classes.full} style={{height: `${percent}%`}}></div>
			</div>
		</div>
		<h1 className={classes.percent}>{percent.toFixed(0)}%</h1>
	</div>
  )
}

export default RatingItem