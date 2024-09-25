import React from 'react'
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import DefaultPfp from '../../assets/default.jpg'
import DivOrigami from '../LogoAnimation/LogoAnimation.jsx'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons'
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
  const [insta,SetInsta]=useState('');
  const [Description,setDescription]=useState('');
  const [LinkedIn,SetLinkedIn]=useState('');
  const [GitHub,SetGitHub]=useState('');
  const [Location,SetLocation]=useState('');
  const [data, setData] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  let year;
  let loadApi=()=>{
    let FunctionToBeCalled=async ()=>{
    let id;
    id=user.email;
    id=id.slice(0,7);
    id=id.toUpperCase();
    year="20"+((Number)(id.slice(2,4))+4);
    const result=await axios.get(`https://cse-chapter-28-server.vercel.app/api/${year}/id?id=${id}`);
    const dt=result.data;
    setData(dt);
    console.log(result.data);
    setLoad(true);
    console.log(loading);
    if(dt[0].image)
    setImg(dt[0].image);
    if(dt[0].Instagram)
      SetInsta(dt[0].Instagram);
    if(dt[0].GitHub)
      SetGitHub(dt[0].GitHub);
    if(dt[0].LinkedIn)
      SetLinkedIn(dt[0].LinkedIn);
    if(dt[0].Description)
      setDescription(dt[0].Description);
    if(dt[0].Location)
      SetLocation(dt[0].Location);
  }
  setLoad(false);
  FunctionToBeCalled();
};
  useEffect(loadApi,[]);
  let SubmitCall=async (e)=>{
    e.preventDefault();
    year="20"+((Number)(data[0].id.slice(2,4))+4);
    await axios.post(`https://cse-chapter-28-server.vercel.app/${year}/profile`,
      {
        id:data[0].id, // This is the body part
        location:Location,
        instagram:insta,
        github:GitHub,
        description:Description,
        image:img,
        linkedin:LinkedIn
      },{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }
    );
  }

  return (
    <div >
      {loading ? (<div className='md:text-xl lg:text-2xl lg:mt-8'>
        <form onSubmit={SubmitCall}>

          <div className='flex justify-center h-[100%] w-[100%] mx-auto
        lg:flex-row flex-col items-center lg:px-[10%]'>

            <div className='sm:w-[40%] md:w-[50%] w-[80%] flex flex-col items-center'>

              <div className='h-[100%] rounded-full relative'>
              <img
                    className='lg:w-[300px] aspect-square lg:h-[300px] border-8 border-[#002f26] md:w-[250px] md:h-[250px]
                    w-[225px] h-[225px] 
                    rounded-full object-fill mx-auto hover:opacity-80 cursor-pointer'
                    
                    src={img ? img : DefaultPfp}
                />
                <div className='bg-[#002f26] rounded-full h-[4.5rem] w-[4.5rem] absolute right-0 bottom-0'>
                <label htmlFor='upload' className='h-[4.5rem] w-[4.5rem] rounded-full flex items-center justify-center'>
                <FontAwesomeIcon icon={faPen} className='h-[1.5rem] w-[1.5rem]' style={{color: "#ffffff",}} />
                </label>
                <input
                  className='[4.5rem] w-[4.5rem] rounded-full bg-transparent opacity-0'
                  id='upload'
                  hidden
                  type='file' onChange={ImageInput}>
                </input>
                </div>
              </div>

              <input
                className='w-[90%] lg:mx-auto md:ml-20 bg-white bg-opacity-0 p-2 mt-6 rounded-lg font-extrabold text-center text-white text-3xl uppercase'
                readOnly type='text' name='name' placeholder="Name" value={data[0].name}></input>

              <input
                className='w-[100%] bg-white bg-opacity-0 p-2  rounded-lg font-extrabold text-center text-white'
                readOnly hidden type='text' name='id' placeholder="Id" value={data[0].id}></input>

              <div className=' w-[90%] flex justify-center '>
                <img
                  className='inline w-10 h-10 mr-3'
                  src="https://img.icons8.com/material-sharp/48/marker.png" alt="marker" />
                <input
                  className='w-[75%] lg:w-[90%] mr-10 bg-white bg-opacity-20 backdrop-blur-sm p-2 pl-3  rounded-lg max-w-[86%]  placeholder-black'
                  type='text' name='location' value={Location} placeholder='Location'
                  onChange={(event)=>SetLocation(event.target.value)}>
                </input>
              </div>
            </div>

            <div className=' sm:w-[50%] w-[80%] h-[70%]'>

              <br />
              <h1 className=' font-extrabold  text-4xl text-center'>About me</h1>
              <textarea
                className=' w-[100%] bg-white h-[30%] bg-opacity-20 xl:max-w-3xl backdrop-blur-sm pt-3 
                 mt-6 rounded-lg max-w-2xl  placeholder-black resize-none p-4' rows='4'
                name='description' value={Description} placeholder='Description'
                onChange={(event)=>setDescription(event.target.value)}>
              </textarea>
              <br />
              <br />

              <div className='w-[100%] flex mt-5'>
                <img 
                  className='inline mx-4 size-12 '
                  src="https://img.icons8.com/glyph-neue/64/instagram-new--v1.png" alt="instagram-new--v1" />
                <input
                  className='w-[89.25%]  bg-white bg-opacity-20 backdrop-blur-sm p-2 pl-3  rounded-lg  placeholder-black'
                  type='text' name='instagram' value={insta} placeholder='Instagram'
                  onChange={(event)=>SetInsta(event.target.value)}></input>
              </div>

              <div className='w-[100%] flex mt-5'>
                <img
                  className='inline mx-4 size-12'
                  src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" />
                <input
                  className='w-[89.25%] bg-white bg-opacity-20 backdrop-blur-sm p-2 pl-3  rounded-lg placeholder-black'
                  type='text' name='linkedin' value={LinkedIn} placeholder='LinkedIn'
                  onChange={(event)=>SetLinkedIn(event.target.value)}></input>
              </div>

              <div className='w-[100%] flex mt-5'>
                <img 
                  className='inline mx-4 mb-[2px] size-12'
                  src="https://img.icons8.com/glyph-neue/64/github.png" alt="github" />
                <input
                  className='w-[89.25%] bg-white bg-opacity-20 backdrop-blur-sm p-2 pl-3  rounded-lg  placeholder-black'
                  type='text' name='github' value={GitHub} placeholder='GitHub'
                  onChange={(event)=>SetGitHub(event.target.value)}></input>
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
