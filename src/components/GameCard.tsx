import {FC} from 'react'
import classes from '../styles/GameCard.module.css'
import { IGame } from '../data/types'
import GenreItem from './GenreItem'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/store'
import { addCompletedGame } from '../helpers/thunks'

const GameCard:FC<Pick<IGame, 'background_image' | 'name' | 'genres' | 'id'>> = ({background_image, name, genres, id}) => {

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

  return (
	<div className={classes.card}>
		<div className={classes.img} style={{backgroundImage: `url(${background_image})`}}>
			<div className={classes.genres}>
				{genres.map(genre => 
					<GenreItem key={genre.id} name={genre.name} img={genre.image_background}/>
				)}
			</div>
			<div className={classes.buttonsWrapper}>
				<button className={classes.exploreButton} onClick={() => navigate(`/game/${id}`)}>Explore</button>
				<button className={classes.completedButton} onClick={auth.currentUser ? () => dispatch(addCompletedGame(id)) : () => navigate('/signin')}>Mark as completed</button>
			</div>
		</div>
		<h2 className={classes.name}>
			{name}
		</h2>
	</div>
  )
}

export default GameCard