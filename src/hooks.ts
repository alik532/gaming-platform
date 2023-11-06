import { useDispatch, useSelector,  } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from './store/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { setUser, clearUser } from './reducers/userReducer'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const rootAction = {
	setUser,
	clearUser,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return () => bindActionCreators(rootAction, dispatch)
}
