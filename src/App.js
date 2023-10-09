import React, {useState} from "react";
import { icons } from "react-icons";
import {BiUserCircle, BiComment, BiShare} from "react-icons/bi"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import {FaShareFromSquare} from "react-icons/fa6"

function App() {
  const [like, setLike] = useState(false)
  const [count, setCount] = useState(0)
  //handle likes
  const handleLikes = () =>{
    if (!like){
      setLike(true)
      setCount(count + 1)
    }else{
      setLike(false)
      setCount(count - 1)
    }
  } 
  const imageUrl = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
  return (
    <>
      <div className="main-container">
        <h1 className="text-info">POST LIKE APP</h1>
        <h4> Likes count : {count}</h4>
        <div className='card' style={{width: '18rem'}}>
          <div className='card-header'>
            <BiUserCircle/> User Name
          </div>
          <img src={imageUrl} alt='post-img' height={"300px"} width="100%"/>
          <div className='card-footer'>
            { like ? <AiFillHeart size={25} className="text-danger" onClick={handleLikes} style={{cursor: 'pointer'}}/> : <AiOutlineHeart size={25} onClick={handleLikes}/> }
            &nbsp;
            <BiComment size={25}/> &nbsp;
            <BiShare size={25}/>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
