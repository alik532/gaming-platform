import {useEffect, useState} from 'react'
import classes from '../styles/Feed.module.css'
import axios, { AxiosResponse } from 'axios'
import { IGame, IGamesResponse } from '../data/types'
import Container from '../components/Container'
import Header from '../components/Header'
import GameStat from '../components/GameStat'
import RatingItem from '../components/RatingItem'
import { platforms } from '../data/data'
import GenreItem from '../components/GenreItem'

const Feed = () => {

	const [games, setGames] = useState<Array<IGame>>([])
	const otherGames = games.slice(5, games.length)
	const heroGames = games.slice(0, 5)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [heroGameIndx, setHeroGameIndx] = useState(0)

	useEffect(() => {
		const fetchGames = () => {
			axios.get("https://api.rawg.io/api/games?key=7fc5502620c64a2da2116a770ca355ea",).then((response: AxiosResponse<IGamesResponse>) => setGames(response.data.results))
		}
		if (!games.length) {
			fetchGames()
		}
	})

	console.log(heroGames[heroGameIndx], games, otherGames)

	if (!games.length) {
		return <div>Loading</div>
	}
  return (
	<div className={classes.feed}>
		<div className={classes.heroBgImg} style={{backgroundImage: `url(${heroGames[heroGameIndx].background_image})`, backgroundColor: "red"}}></div>
		<div className={classes.heroGradient}></div>
		<Container>
			<Header/>
			<div className={classes.hero}>
				<img src={heroGames[heroGameIndx].background_image} alt="" className={classes.heroImg}/>
				<div className={classes.content}>
					<h1 className={classes.heroName}>{heroGames[heroGameIndx].name}</h1>
					<div className={classes.heroStats}>
						<GameStat name='release date' value={heroGames[heroGameIndx].released}/>
						<GameStat name='metascore' value={heroGames[heroGameIndx].metacritic.toString()}/>
						<GameStat name='average playtime' value={heroGames[heroGameIndx].playtime.toString()+' hours'}/>
					</div>
					<div className={classes.info}>
						<div className={classes.platforms}>
							{platforms.map(platform => 
								<div className={classes.heroPlatform} key={platform.slug}>
									<platform.icon className={classes.heroPlatformIcon}/>
								</div>	
							)}
						</div>
						<div className={classes.genres}>
							{heroGames[heroGameIndx].genres.map(genre => 
								<GenreItem name={genre.name} img={genre.image_background} key={genre.id}/>
							)}
						</div>
					</div>
					<div className={classes.ratings}>
						<h2 className={classes.heroTitle}>Ratings</h2>
						<div className={classes.ratingsList}>
							{heroGames[heroGameIndx].ratings.map(rating => 
								<RatingItem key={rating.id} title={rating.title} percent={rating.percent} />	
							)}
						</div>
					</div>
				</div>
			</div>
			<div className={classes.heroGames}>
				{heroGames.filter((_game, indx) => indx != heroGameIndx).map(game => 
					<div className={classes.heroGame} style={{backgroundImage: `url(${game.background_image})`}}>
						<h3 className={classes.heroGameName}>{game.name}</h3>
					</div>	
				)}
			</div>
		</Container>
	</div>
  )
}

export default Feed