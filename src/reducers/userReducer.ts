import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { addCompletedGame, fetchCurrentUser } from '../helpers/thunks'

interface IUserReducer {
	status: string
	error: string | undefined
	data: IResponse
}

interface IResponse {
	userId: string | undefined
	name: string | undefined,
	platform?: string,
	completed_games: Array<number>,
	followingDevs?: number,
	preferredGenre?: string,
	favoriteGames?: Array<{game: string}>
}

const initialState:IUserReducer = {
	status: 'idle',
	error: undefined,
	data: {
		userId: undefined,
		name: undefined,
		completed_games: []
	}
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action:PayloadAction<{id: string, name: string}>) => {
			state.data.userId = action.payload.id
			state.data.name = action.payload.name
		},
		clearUser: (state) => {
			state.data = initialState.data
			state.status = initialState.status
			state.error = initialState.error
		}
	},
	extraReducers: function(builder) {
		builder
			.addCase(fetchCurrentUser.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<IResponse | null>) => {
				state.status = 'succeeded'
				console.log(action.payload)
				if (action.payload == null) {
					state.status = 'error'
					return;
				}
				state.data = action.payload
			})
			.addCase(fetchCurrentUser.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error.message
			})
			.addCase(addCompletedGame.fulfilled, (state, action: PayloadAction<number | null>) => {
				if (action.payload)
					if (state.data.completed_games.find(gameId => gameId == action.payload) == null)
						state.data.completed_games.push(action.payload)
			})

	}
})

export default userSlice.reducer

export const {setUser, clearUser} = userSlice.actions