import { useDispatch, useSelector,  } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from './store/store'
import setUser from './reducers/userReducer'
import { bindActionCreators } from '@reduxjs/toolkit'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const rootAction = {
	setUser,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return () => bindActionCreators(rootAction, dispatch)
}