import React from 'react'
import { useState,useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import DivOrigami from '../LogoAnimation/LogoAnimation.jsx'
import axios from 'axios';
function Login() {
  const [img,setImg]=useState();

  const imagebase64=(file)=>{
    const reader=new FileReader();
    reader.readAsDataURL(file);
    const data=new Promise((resolve,reject)=>{
      reader.onload=()=>resolve(reader.result);
      reader.onerror=(err)=>reject(err);
    })
    return data;
  }
  let ImageInput=async (e)=>{
    const file=e.target.files[0];
    const image=await imagebase64(file);
    setImg(image);
  }
  const {data,setData}=useState('');
  const {user,isAuthenticated}=useAuth0();
  useEffect(()=>{let FunctionToBeCalled=async ()=>{
    let id=user.email;
    id=id.slice(0,7);
    id=id.toUpperCase();
    const result=await axios.get(`https://cse-chapter-28-server.vercel.app/api/2027/id?id=${id}`);
    console.log(result.data);
    setData(result.data);
  }
  FunctionToBeCalled();
},[])
  return (
    <div>
    {data?(<div>
      {img?<img src={img}/>:''};
      <form method='POST'>
      <input type='file' onChange={ImageInput}></input>
      <br/>
      <br/>
      <input type='text' name='Name' placeholder='Name'></input>
      <br/>
      <br/>
      <input type='text' name='Id' placeholder='Id'></input>
      <br/>
      <br/>
      <input type='text' name='Location' placeholder='Location'></input>
      <br/>
      <br/>
      <input type='text' name='Instagram' placeholder='Instagram'></input>
      <br/>
      <br/>
      <input type='text' name='LinkedIn' placeholder='LinkedIn'></input>
      <br/>
      <br/>
      <input type='text' name='GitHub' placeholder='GitHub'></input>
      <br/>
      <br/>
      <input type='text' name='Mail' placeholder='Mail'></input>
      <br/>
      <br/>
      <textarea className='h-[20px] w-[50px] bg-white' name='Description' placeholder='Description'></textarea>
      <br/>
      <br/>
      <input type='submit'/>
      </form>
    </div>):(<DivOrigami/>)
  }
  </div>
  )
}

export default Login