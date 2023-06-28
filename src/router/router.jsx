import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/mainPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { UsersPage } from '../pages/UsersPage/UsersPage'
import { AboutPage } from '../pages/AboutPage/AboutPage'
import { HelloWorldPage } from '../pages/HelloWorldPage/HelloWorldPage'
import { UserPage } from '../pages/UserPage/UserPage'
import { UserTest } from '../components/UsersE2E/UserTest'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/hello' element={<HelloWorldPage />} />
      <Route path='/users-test' element={<UserTest />} />
      <Route path='/users/:id' element={<UserPage />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  )
}
