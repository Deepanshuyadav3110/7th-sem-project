import React from 'react'
import './list.css'
import Chatlist from './chatList/Chatlist'
import Userinfo from './userInfo/Userinfo'
function List() {
  return (
    <div className='list'>
      <Userinfo />
      <Chatlist />
    </div>
  )
}

export default List
