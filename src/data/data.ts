import { heroIMG, heroIMG2, heroIMG3, heroIMG4, heroIMG5, heroIMG6, aboutIMG, aboutIMG2, aboutIMG3} from '../assets'
import { BsXbox, BsPlaystation, BsWindows, } from 'react-icons/bs'



export const heroGames = [
	{img: heroIMG, txt: "God of War"},
	{img: heroIMG2, txt: "Ghost of Tsushima"},
	{img: heroIMG3, txt: "The last of us 2"},
	{img: heroIMG4, txt: "Moral Combat 1"},
	{img: heroIMG5, txt: "Death Stranding"},
	{img: heroIMG6, txt: "Sekiro: Shadows Die Twice"},
]

export const aboutSections = [
	{img: aboutIMG, txt: "AAA Projects"},
	{img: aboutIMG2, txt: "E-Sports"},
	{img: aboutIMG3, txt: "Eternal classic"},
]

export const platforms = [
	{icon: BsWindows, name: "PC", games: 6729, },
	{icon: BsPlaystation, name: "PS", games: 517915, },
	{icon: BsXbox, name: "XBOX", games: 5558, },
]