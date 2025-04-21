import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [char, setchar] = useState(false)
  const [number, setnumber] = useState(false)
  const [password, setpassword] = useState("")

  const passwordref = useRef(null)

  const generator = useCallback(()=>{
    let pass=""
    let str="qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ"
    if(char) str+="!@#$%^&*()_+"
    if(number) str+="0123456789"

    for(let i=1;i<=length;i++){
      let char1=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char1)
    }

    setpassword(pass)

  },[length,char,number,setpassword])

  const clipboard1=useCallback(()=>{

      passwordref.current?.select()

      window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{

      generator()

  },[length,char,number,setpassword])

  return (
    <>
      <div className=" absolute bg-[url('pass.jpg')] bg-cover bg-center h-screen w-full text-orange-300 m-auto">

        

          <div className='text-[#f5f5dc] h-45 w-190 relative m-auto mt-[16%] bg-green-900 rounded-4xl'>

            <span className='text-center block text-4xl mt-1.5 pt-5.5'>PASSWORD GENERATER</span>

            <input 
            type="text"
            value={password}
            placeholder='password'
            className='w-[600px] py-1 px-3 m-5 outline-1 outline-black rounded-3xl'
            readOnly
            ref={passwordref}
            
            
             />
             <button className='bg-black m-2.5 p-2.5 rounded-4xl' onClick={clipboard1}>COPY</button>
             <div className='flex gap-3'>
             <div className=' m-4  h-10'>
              <input 
              type="range"
              min={8}
              max={40}
              value={length}
              onChange={(e)=>{setlength(e.target.value)}}
              />
              <label className='m-[12px]' >   length : {length}</label>

             </div>
             <div className=' flex mb-4 p-1.5 gap-4'>
              <input 
              type="checkbox" 
              defaultChecked={number} 
              id="Numberinput" 
              onChange={()=>setnumber((prev)=>!prev)}/>
              <label className='m-2'>NUMBER</label>
              <input 
              type="checkbox" 
              defaultChecked={char} 
              id="charinput" 
              onChange={()=>setchar((prev)=>!prev)}/>
              <label className='m-2'>CHARACTER</label>
             </div>

             </div>


            

          </div>
      </div>
    </>
  )
}

export default App
