import React from 'react'
import './detail.css'
import { auth, db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';


function Detail() {
  const {chatId, user, isCurrentUserBlocked, isReceiverBlocked,changeBlock} = useChatStore();

  const {currentUser} = useUserStore();

  const handleBlock = async () =>{
    if(!user) return;
    const userDocRef = doc(db,"users",currentUser.id)
      try{
        await updateDoc(userDocRef,{
          blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
        });
        console.log(` User ${isReceiverBlocked ? "unblocked" : "blocked"} successfully. `);
        changeBlock()
      }
      catch(err){
        console.log(err);
      }
  };

    const handleLogout = async () => {
        try {
          await auth.signOut();
          console.log("User signed out successfully.");
        } catch (error) {
          console.error("Error signing out:", error);
        }
      };
  return (
    <div className='detail'>
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username }</h2>
        <p>faith in yourself</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>{
          isCurrentUserBlocked ? "you are Blocked!" :isReceiverBlocked ? "User Blocked" : "Block User"
          }
        </button>
        <button className='logout' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Detail
