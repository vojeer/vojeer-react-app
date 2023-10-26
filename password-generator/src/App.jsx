import { useCallback, useEffect, useState } from 'react'

import './App.css'
import { useRef } from 'react';

function App() {
  const [passlength, setPassLength] = useState(8);
  const [charAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    generatePassword();
  }, [passlength, charAllowed, numberAllowed, setPassword])

  //use ref hook
  const passWordRef  = useRef(null);
  const copyPass = useCallback(() => {
    passWordRef.current?.select();
    passWordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password);
  }, [password])

  const generatePassword = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (charAllowed) str += '!@#$%^&*';
    if (numberAllowed) str += '1234567890'
    let pass = '';
    for (let i = 1; i < passlength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass);

    }

    setPassword(pass);

  }, [passlength, charAllowed, numberAllowed, setPassword])
  return (
    <div className=''>
      <h1 className='text-center mt-5'>Password Generator</h1>
      <div className='w-full max-w-xl mx-auto  shadow-lg rounded-lg px-0 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='outline-none w-full py-3 px-3' ref={passWordRef} value={password} placeholder='Password' type="text" />
          <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex justify-between px-2 py-2'>
          <div>
            <input onChange={(e) => setPassLength(e.target.value)} type="range" min={6} max={100} />
            <label className='ms-1 text-white'>Length: <span className='text-orange-500'>{passlength}</span></label>
          </div>

          <div>
            <label className='ms-2 text-white'>Number Allowed</label>
            <input onChange={() => {
              setNumberAllowed((pre) => !pre)
            } } type="checkbox" className='ms-2' />
          </div>
          <div>
            <label className='ms-2 text-white'>character Allowed</label>
            <input  onChange={() => {
              setCharacterAllowed((pre) => !pre)
            } } type="checkbox" className='ms-2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
