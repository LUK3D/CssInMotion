import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import logo  from "../assets/cim_blue.svg";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter';


export function Welcome() {
  const [opened, setOpened] = useState(true);
//@ts-ignore
  const {count} = useSelector(state=>state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overlayBlur={2}
        size={700}
        centered={true}
      >
        {
        
        <div className='w-full h-full flex flex-col justify-center items-center text-center text-sm' >
            <img src={logo} className="w-1/4 mb-5" />
            <p className='text-6xl text-white font-black mb-2'>CSS In Motion</p>
            <p>Welcome to Css In Motion Project!</p>
            <p>This is a free and opensource tool for creating stunning animations for your Web App</p>
            <p className=' text-lg mt-5'>We do have a lot of features allready implemented but the project is still under development, in the future we will add many other functionalities. 
            </p>
            <p className='font-bold mt-2'>Stay up to date by giving a star on our github repository</p>
            <div className='flex flex-col my-5'>
            <a href="https://github.com/LUK3D/CssInMotion">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-15 w-15 fill-gray-300 "><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
            </a>
            </div>

            {/* <div>
              <p>{count}</p>

              <div>
                <button onClick={()=>dispatch(increment())} className='p-3 px-10 mx-2 border'>+</button>
                <button onClick={()=>dispatch(decrement())} className='p-3 px-10 mx-2 border'>-</button>
              </div>
            </div> */}

            <button onClick={()=>setOpened(false)} className='px-10 py-4 mb-5 border border-orange-500 transform transition hover:scale-110  rounded-lg bg-orange-700 shadow-2xl text-white'>Let's Try it out! </button>
        </div>
        }
      </Modal>
      
    </>
  );
}