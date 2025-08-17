import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './conversations'
import LogoutButton from './LogoutButton'
const Sidebar = () => {
  return (
    <div className='border-r border-gray-200 w-80 h-full min-h-0 flex flex-col p-4 gap-3'>
      <SearchInput />
      <Conversations />
      <div className='divider my-2'></div>
      <LogoutButton />
    </div>
  )
}

export default Sidebar;
