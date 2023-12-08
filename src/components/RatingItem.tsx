import {FC} from 'react'
import classes from '../styles/RatingItem.module.css'
import { ratingColors } from '../data/data'

const RatingItem:FC<{title: string, percent: number}> = ({title, percent}) => {

	console.log(title)

  return (
	<div className={classes.item}>
		<div className={classes.rating}>
			<h2 className={classes.title} style={{color: ratingColors[title][0]}}>{title}</h2>
			<div className={classes.bar}>
				<div className={classes.full} style={{height: `${percent}%`, background: `linear-gradient(180deg, ${ratingColors[title][0]}, ${ratingColors[title][1]})`, boxShadow: `${ratingColors[title][0]}80 0px 0px 50px 0px`}}></div>
			</div>
		</div>
		<h1 className={classes.percent} style={{color: ratingColors[title][0]}}>{percent.toFixed(0)}%</h1>
	</div>
  )
}

export default RatingItem