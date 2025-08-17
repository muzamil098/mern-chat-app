import React from 'react'

const Header = ({ fullName }) => {
  return (
    <div className='flex items-center justify-between px-4 py-2 bg-gray-500/20 backdrop-blur-sm bg-clip-padding border-b border-gray-300/30 shadow-sm'>
     To: {fullName}
    </div>
  )
}

export default Header
