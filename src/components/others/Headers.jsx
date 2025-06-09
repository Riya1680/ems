import React from 'react'
// import { setLocalStorage } from '../../utilis/localstorage'

const Headers = (props) => {


  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')   //ki jaise he setUser null hoga mera Login wala component show ho gya
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'> username👋</span></h1>
      <button onClick={logOutUser}
      className='bg-red-600 text-lg font-medium outline-none text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Headers
