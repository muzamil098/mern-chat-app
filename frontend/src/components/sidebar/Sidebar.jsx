import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './conversations'
import LogoutButton from './LogoutButton'
const Sidebar = () => {
  return (
    <div className='border-r border-gray-200 w-80 h-full flex flex-col '>
      <SearchInput />
    <Conversations />
      <div className='divider px-3'></div>
      <LogoutButton /> 
    </div>
  )
}

export default Sidebar;
