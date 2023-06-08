import React from 'react'
import LoginForm from '../../components/Forms/LoginForm'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='container mx-auto  min-h-screen flex justify-center items-center'>
      <div className="w-96 px-4 py-16 rounded-lg bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
      <LoginForm/>
      <Link to={'/signup'} className="underline text-gray-500 dark:text-gray-400">create a new account ?</Link>

      </div>
    </div>
  )
}
