import React from 'react'

function Login() {
  return (
    <div>
      <form method='POST'>
      <input type='file'></input>
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
      <textare className='h-[20px] w-[50px] bg-white' name='Description' placeholder='Description'>ad;fkajsd;lfk</textare>
      <br/>
      <br/>
      <input type='submit'/>
      </form>
    </div>
  )
}

export default Login