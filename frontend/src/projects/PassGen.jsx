import React, { useState,useCallback, useEffect , useRef} from 'react'

const PassGen = () => {
    const [length, setLength] = useState(1);
    const [number, setNumber] = useState(false);
    const [char, setChar] = useState(false);
    const [password, setPassord] = useState('');

    const passwordRef = useRef(null);
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Accessing DOM node directly
  }
    const passwordGenerator = useCallback(() => {
        let pass= ""
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (number) str += "0123456789";
        if (char) str += "!@#$%^&*()_+-=[]{}|;:,.<>?~"

        for(let i = 1; i<=length ; i++) {
            let char = Math.floor(Math.random()* str.length +1);
            pass += str.charAt(char)
        }
        
        setPassord(pass)
        
    }, [length,number,char, setPassord])

    const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand('copy');
      alert('Password copied to clipboard!');
    }
      window.navigator.clipboard.writeText(password)
    }, [password]);
        
  useEffect(() => {
    passwordGenerator();

    //  let pass= ""
    //     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    //     if (number) str += "0123456789";
    //     if (char) str += "!@#$%^&*()_+-=[]{}|;:,.<>?~"
    //     for(let i = 1; i<=length ; i++) {
    //         let char = Math.floor(Math.random()* str.length +1);
    //         pass += str.charAt(char)
    //     }
        
    //     setPassord(pass)
        // counter();
  }, [length,number,char])


    // }
  return (
    <div className='w-full max-w-md text-white mx-auto mt-30 rounded-lg bg-gray-800 '>
      <h1 className='text-white p-3 text-2xl'>Password Generator</h1>
      <div className=' shadow-2xl bg-gray-900 rounded-lg p-4 flex-col gap-4'>
        <input className='border-2 border-gray-600 bg-gray-800 text-white p-2 rounded-lg' 
        type="text" value={password} onChange={(e) => setLength(e.target.value)} readOnly ref={passwordRef}/>
        <button onClick={copyPassword} className=' max-w-2border-2 border-gray-600 bg-gray-800 hover:bg-gray-500 text-white p-2 pointer-events-auto rounded-lg'>copy</button>
      </div>
      <div className=' gap-4 p-4'>
        <div className='flex items-center gap-2'>
          <input type="range" value={length} onChange={(e) => setLength(e.target.value)} min="1" max="100" 
          className='border-2 border-gray-600 bg-gray-800 hover:bg-gray-500 text-white p-2 rounded-lg ' />
          <label>Length {length}</label>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
          <input type="checkbox" checked={number} onChange={(e) => setNumber(e.target.checked)} />
          <label>Include Numbers</label>
        </div>
        <div className='flex items-center gap-2 mr-5'>
          <input type="checkbox" checked={char} onChange={(e) => setChar(e.target.checked)} />
          <label>Include Special Characters</label>
        </div>
        </div>

      </div>
         <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
    </div>
    
  )
}

export default PassGen
