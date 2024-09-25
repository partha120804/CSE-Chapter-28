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
    if(dt[0].image)
      setImg(dt[0].image);
  }
  setLoad(false);
  FunctionToBeCalled();
};
  useEffect(loadApi,[]);
  let HandleSubmit=(e)=>{
    e.preventDefault();

  }
  return (
    <div >
    {loading ? (<div className='md:text-xl lg:text-2xl lg:mt-8'>
      <form method='POST' action='https://cse-chapter-28-server.vercel.app/api/2027/profile'>

        <div className='flex justify-center h-[100%] w-[100%] mx-auto
      lg:flex-row flex-col items-center'>

          <div className='sm:w-[40%] md:w-[50%] w-[80%] items-center mx-auto lg:ml-36  md:ml-32'>

            <div className='h-[100%] w-[50%] md:ml-44 lg:mx-auto mx-auto rounded-full'>
              <label htmlFor="upload" className='lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[200px]
                  w-[145px] h-[145px]  rounded-full'>
                <img
                  className='lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[200px]
                  w-[145px] h-[145px] 
                  rounded-full object-fill mx-auto hover:opacity-80 cursor-pointer'
                  src={img ? img : DefaultPfp}
                />
              </label>
              <input
                className='hidden'
                id='upload'
                type='file' onChange={ImageInput}>
              </input>
            </div>

            <input
              className='w-[100%] lg:mx-auto md:ml-20 bg-white bg-opacity-0 p-2 mt-6 rounded-lg font-extrabold text-center text-white text-3xl uppercase'
              readOnly type='text' name='name' placeholder="Name" value={data[0].name}></input>

            <input
              className='w-[100%] bg-white bg-opacity-0 p-2  rounded-lg font-extrabold text-center text-white'
              readOnly hidden type='text' name='id' placeholder="Id" value={data[0].id}></input>

            <div className=' w-[100%] md:ml-24 mx-auto'>
              <img
                width="32" height="32"
                className='inline mx-4 '
                src="https://img.icons8.com/material-sharp/48/marker.png" alt="marker" />
              <input
                className='w-[75%] lg:w-[60%] bg-white bg-opacity-20 backdrop-blur-sm p-2 pl-3 mt-6 rounded-lg max-w-[86%]  placeholder-black'
                type='text' name='location' placeholder="Location" value={data[0].Location}>
              </input>
            </div>
          </div>

          <div className=' sm:w-[40%] w-[80%] mx-auto lg:mr-32'>

            <br />
            <h1 className=' font-extrabold  text-4xl text-center'>About me</h1>
            <textarea
              className='sm:h-[100%] w-[100%] bg-white bg-opacity-20 xl:max-w-3xl backdrop-blur-sm p-20 pt-3 pl-4 mt-6 rounded-lg max-w-2xl xl:ml-6 placeholder-black resize-none max-h-[40%]'
              name='description' placeholder='Description' value={data[0].Description}>
            </textarea>
            <br />
            <br />

            <div className='w-[100%]'>
              <img width="32" height="32"
                className='inline mx-4'
                src="https://img.icons8.com/glyph-neue/64/instagram-new--v1.png" alt="instagram-new--v1" />
              <input
                className='w-[75%]  xl:w-[100%] bg-white bg-opacity-20 backdrop-blur-sm p-2 pl-3 mt-6 rounded-lg max-w-[86%]  placeholder-black'
                type='text' name='instagram' placeholder='Instagram' value={data[0].Instagram}></input>
            </div>

            <div className='w-[100%]'>
              <img width="32" height="32"
                className='inline mx-4'
                src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" />
              <input
                className='w-[75%]  xl:w-[100%] bg-white bg-opacity-20 backdrop-blur-sm p-2 pl-3 mt-6 rounded-lg max-w-[86%]  placeholder-black'
                type='text' name='linkedin' placeholder='LinkedIn' value={data[0].LinkedIn}></input>
            </div>

            <div className='w-[100%]'>
              <img width="32" height="32"
                className='inline mx-4 mb-[2px]'
                src="https://img.icons8.com/glyph-neue/64/github.png" alt="github" />
              <input
                className='w-[75%]  xl:w-[100%] bg-white bg-opacity-20 backdrop-blur-sm p-2 pl-3 mt-6 rounded-lg max-w-[86%]  placeholder-black'
                type='text' name='github' placeholder='GitHub' value={data[0].GitHub}></input>
            </div>
            <br />
            <br />



            <input type='text' hidden name="image" value={img} />
          </div>
        </div>
        <div >
          <button
            className='
            hover:border-black border-[1px]
            md:ml-[45vw] ml-[35vw] px-8 py-2 lg:mt-6 
            rounded-lg bg-[#B2D7D0] font-extrabold md:text-2xl self-center'
            type="submit">
            SUBMIT
            <input
              className='hidden'
              type='submit' />
          </button>
        </div>
      </form>
      <br />

    </div>) : (<DivOrigami />)
    }
  </div>
  )
}

export default Login