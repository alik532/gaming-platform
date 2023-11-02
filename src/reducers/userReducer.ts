import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth, db, } from '../config/firebase'
import { PayloadAction } from '@reduxjs/toolkit'
import { collection, doc, getDoc } from 'firebase/firestore'

interface IUserReducer {
	status: string
	error: string | undefined
	data: {
		userId: string | undefined,
		name: string | undefined,
		platform?: string,
		completedGames?: number,
		followingDevs?: number,
		preferredGenre?: string,
		favoriteGames?: Array<{game: string}>
	}
}

interface IResponse {
	userId: string | undefined
	name: string | undefined,
}

const initialState:IUserReducer = {
	status: 'idle',
	error: undefined,
	data: {
		userId: undefined,
		name: undefined,
	}
}

export const fetchCurrentUser = createAsyncThunk('user/fetchUser', async function name() 	
 {
	const collectionRef = collection(db, 'users')
	console.log("user ref: " + collectionRef)
	const userDocRef = doc(collectionRef, auth.currentUser?.uid)
	console.log(userDocRef)	
	return {name: (await getDoc(userDocRef)).get('name'), userId: userDocRef.id}
})

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action:PayloadAction<{id: string, name: string}>) => {
			state.data.userId = action.payload.id
			state.data.name = action.payload.name
		}
	},
	extraReducers: function(builder) {
		builder
			.addCase(fetchCurrentUser.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<IResponse>) => {
				state.status = 'succeeded'
				state.data.name = action.payload.name
			})
			.addCase(fetchCurrentUser.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error.message
			})

	}
})

export default userSlice.reducer

export const selectUserName = (state: IUserReducer) => state.data
export const selectUserId = (state: IUserReducer) => state.data