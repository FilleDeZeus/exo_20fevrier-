import React from 'react'
import { CardList } from './components/card/card'
export const App = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl text-center font-bold mb-4">User List</h1>
        <CardList />
      </div>
    </div>
  )
}
