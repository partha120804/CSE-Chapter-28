import React from 'react'
import { useState,useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import DefaultPfp from '../../assets/default.jpg'
import DivOrigami from '../LogoAnimation/LogoAnimation.jsx'
import axios from 'axios';
function Login() {
  const [img,setImg]=useState();
  const [loading,setLoad]=useState(false);
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
  };
  const [data,setData]=useState([]);
  const {user,isAuthenticated}=useAuth0();
  let loadApi=()=>{
    let FunctionToBeCalled=async ()=>{
    let id=user.email;
    id=id.slice(0,7);
    id=id.toUpperCase();
    const result=await axios.get(`https://cse-chapter-28-server.vercel.app/api/2027/id?id=${id}`);
    const dt=result.data;
    setData(dt);
    console.log(result.data);
    setLoad(true);
    console.log(loading);
    setImg(data[0].image);
  }
  setLoad(false);
  FunctionToBeCalled();
};
  useEffect(loadApi,[])
  return (
    <div>
    {loading?(<div>
      {img?<img src={img}/>:<img src={DefaultPfp}/>};
      <form method='POST' action='https://cse-chapter-28-server.vercel.app/api/2027/profile'>
      <input type='file' onChange={ImageInput}></input>
      <br/>
      <br/>
      <input disabled type='text' name='Name' placeholder="Name" value={data[0].name}></input>
      <br/>
      <br/>
      <input disabled type='text' name='Id' placeholder="Id" value={data[0].id}></input>
      <br/>
      <br/>
      <input type='text' name='Location' placeholder="Location" value={data[0].Location}></input>
      <br/>
      <br/>
      <input type='text' name='Instagram' placeholder='Instagram' value={data[0].Instagram}></input>
      <br/>
      <br/>
      <input type='text' name='LinkedIn' placeholder='LinkedIn' value={data[0].Linkedin}></input>
      <br/>
      <br/>
      <input type='text' name='GitHub' placeholder='GitHub' value={data[0].GitHub}></input>
      <br/>
      <br/>
      <textarea className='h-[20px] w-[50px] bg-white' name='Description' placeholder='Description' value={data[0].Description}></textarea>
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