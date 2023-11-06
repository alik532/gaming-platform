import {FC, useState} from 'react'
import classes from '../styles/Profile.module.css'
import { auth } from '../firebase/firebase'
import { useAppSelector } from '../hooks'
import { useParams } from 'react-router-dom'
import { profileIMG } from '../assets'
import { AiOutlineUser } from 'react-icons/ai'
import Container from '../components/Container'
import { platforms } from '../data/data'
import MainButton from '../components/MainButton'
import Title from '../components/Title'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { clearUser } from '../reducers/userReducer'
import { useAppDispatch } from '../store/store'

const Profile:FC = () => {

	const [isUserLoading, setIsUserLoading] = useState(true)
	const dispatch = useAppDispatch()

	const navigate = useNavigate();

	auth.onAuthStateChanged(() => {
		setIsUserLoading(false)
		if (auth.currentUser == null && isMyProfile) {
			navigate('/register')
		}
	})

	const {id} = useParams()

	const currentUserId = useAppSelector(state => state.userReducer.data.userId)
	const isMyProfile = currentUserId == id

	const user = useAppSelector(state => state.userReducer.data)	

	if (isUserLoading) {
		return <h1>Loading</h1>
	}
  return (
	<div className={classes.profile}>
		<div className={classes.heroImg} style={{backgroundImage: `url(${profileIMG})`}}/>
		<div className={classes.logoutButton}>
			<MainButton isPatterned={false} text='Log out' onClick={() => {signOut(auth); dispatch(clearUser())}}/>
		</div>
		<Container>
			<Header />
			<div className={classes.main}>
				<div className={classes.pfp}>
					<AiOutlineUser className={classes.pfpImg}/>
				</div>
				<h1 className={classes.name}>{user.name}</h1>
			</div>
			<div className={classes.statWrapper}>
				<div className={classes.stats}>
					<div className={classes.stat}>
						<h6 className={classes.statName}>Completed games:</h6>
						<h2 className={classes.statValue}>{user.completed_games.length ? user.completed_games.length : 0}</h2>
					</div>
					<div className={classes.stat}>
						<h6 className={classes.statName}>Following devs:</h6>
						<h2 className={classes.statValue}>{user.followingDevs ? user.followingDevs : 0}</h2>
					</div>
					<div className={classes.stat}>
						<h6 className={classes.statName}>Preferred genre:</h6>
						<h2 className={classes.statValue}>{user.preferredGenre ? user.preferredGenre : '-'} </h2>
					</div>
					<div className={classes.stat}>
						<h6 className={classes.statName}>Main platform:</h6>
						<h2 className={classes.statValue}>{user.platform}<div className={classes.mainPlatform}>{user.platform ? platforms.find(platform => platform.slug == user.platform)?.icon : '-'}</div></h2>
					</div>
				</div>
				<div className={classes.buttonWrapper}>
					<MainButton isPatterned={true} text={isMyProfile ? 'Edit profile' : 'Follow'}/>
				</div>
			</div>
			<div className={classes.favoriteGames}>
				<Title text='Favorite games'/>
				<div className={classes.favGamesList}>
					{user.favoriteGames ? user.favoriteGames.map(game => <h1>{game.game}</h1>) : <h2>There will be your favorite games</h2>}
				</div>
			</div>
		</Container>
	</div>
  )
}

export default Profile