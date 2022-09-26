import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

interface ILayer{
    text:string,
    selector:string,
}

export function Layer(args:ILayer) {
  const [opened, setOpened] = useState(false);


  function openFrames(){
    document.getElementById('key_'+args.selector)?.click();
  }


  return (
    <div className='w-full flex flex-col border-b border-dark-900'>
      <Button id={'layer_'+args} onClick={() => {setOpened((o) => !o); openFrames();}} color='orange' className={`rounded-none flex bg-transparent ${opened?'border-b border-dark-900 border-t-0':''} `}>
        <div className='mr-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`transition transform  ${opened?'rotate-90':''} w-4 h-4`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

        </div> {args.text}
      </Button>

      <Collapse in={opened} className="  bg-blue-900 bg-opacity-20">
        <div className='flex items-center justify-between py-2 border-b border-dark-800 pr-5 pl-10  '>
            <div className='flex items-center'>
                <div className='w-2.5 h-2.5 bg-gray-500 hover:bg-orange-500 mr-3 transform rotate-45 rounded-sm cursor-pointer' title='Add keyframe'></div>  <p>Position</p>
            </div>
            <div title='toggel animation' className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
        <div className='flex items-center justify-between py-2 border-b border-dark-800 pr-5 pl-10  '>
            <div className='flex items-center'>
                <div className='w-2.5 h-2.5 bg-gray-500 hover:bg-orange-500 mr-3 transform rotate-45 rounded-sm cursor-pointer' title='Add keyframe'></div>  <p>Rotation</p>
            </div>
            <div title='toggel animation' className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
       
      </Collapse>
    </div>
  );
}