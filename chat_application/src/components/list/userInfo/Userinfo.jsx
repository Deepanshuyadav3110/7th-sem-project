import React from 'react'
import { useUserStore } from "../../../lib/userStore"
import './userInfo.css'
function Userinfo() {
  const { currentUser } = useUserStore();
  return (
    <div className='userInfo'>
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h4>{currentUser.username}</h4>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  )
}

export default Userinfo
