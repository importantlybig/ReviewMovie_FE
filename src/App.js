import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConfirmPassword from './components/auth/ConfirmPassword'
import EmailVerification from './components/auth/EmailVerification'
import ForgotPassword from './components/auth/ForgotPassword'
import SingleMovie from './components/user/SingleMovie'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import MovieReviews from './components/user/MovieReviews'
import SearchMovies from './components/user/SearchMovies'
import NotFound from './components/NotFound'
import Navbar from './components/user/Navbar'
import { useAuth } from './hooks'
import AdminNavigator from './navigator/AdminNavigator'

export default function App() {
	const { authInfo } = useAuth()
	//console.log(authInfo)

	const isAdmin = authInfo.profile?.role === 'admin'
	//console.log(isAdmin)
	if (isAdmin) return <AdminNavigator />

	return (
		<>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth/signin' element={<Signin />} />
				<Route path='/auth/signup' element={<Signup />} />
				<Route path='/auth/verification' element={<EmailVerification />} />
				<Route path='/auth/forgot-password' element={<ForgotPassword />} />
				<Route path='/auth/reset-password' element={<ConfirmPassword />} />
				<Route path='/movie/:movieId' element={<SingleMovie />} />
				<Route path='/movie/reviews/:movieId' element={<MovieReviews />} />
				<Route path='/movie/search' element={<SearchMovies />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
