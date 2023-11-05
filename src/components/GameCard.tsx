import {FC} from 'react'
import classes from '../styles/GameCard.module.css'
import { IGame } from '../data/types'
import GenreItem from './GenreItem'

const GameCard:FC<Pick<IGame, 'background_image' | 'name' | 'genres'>> = ({background_image, name, genres}) => {

  return (
	<div className={classes.card}>
		<img src={background_image} className={classes.glow} alt="" />
		<div className={classes.img} style={{backgroundImage: `url(${background_image})`}}>
			<div className={classes.genres}>
				{genres.map(genre => 
					<GenreItem name={genre.name} img={genre.image_background}/>
				)}
			</div>
		</div>
		<h2 className={classes.name}>
			{name}
		</h2>
	</div>
  )
}

export default GameCard