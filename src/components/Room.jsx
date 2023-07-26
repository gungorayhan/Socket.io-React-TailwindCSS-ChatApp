import React from 'react'

function Room({username,room, setUsername,setRoom,setChatScreen,socket}) {

  const sendRoom=()=>{
    socket.emit('room',room) // emit ile yayınla diyoruz
    setChatScreen(true)
  }
  
  return (
    <div className="flex justify-center items-center h-full">
        <div className="w-1/3 h-[300px] rounded-lg bg-indigo-600 flex flex-col space-y-4 p-3">
            <h1 className='text-center my-4 font-bold text-2xl'>Welcome To Chat</h1>
            <input value={username} onChange={e=>setUsername(e.target.value)} className='h-12 rounded-xl p-3 outline-none' type="text" placeholder='Username'/>
            <input value={room} onChange={e=>setRoom(e.target.value)}  className='h-12 rounded-xl p-3 outline-none' type='text' placeholder='Room'/>
            <div onClick={()=>sendRoom()} className='tracking-wider hover:opacity-70 bg-indigo-900 text-white cursor-pointer h-12 pt-2 text-xl text-center rounded-xl'>CHAT!!! </div>
        </div>
    </div>
  )
}

export default Room