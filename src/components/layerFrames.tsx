import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

interface ILayer{
  selector:string,
}

export function LayerFrames(args:ILayer) {
  const [opened, setOpened] = useState(false);

  

  return (
    <div className='w-full flex flex-col border-b border-dark-900'>
      <Button id={"key_"+args.selector} onClick={() => setOpened((o) => !o)} color='orange' className={` pointer-events-none rounded-none flex bg-blue-500 hover:bg-blue-500 ${opened?'border-b border-dark-900 border-t-0':''} `}>
       
      </Button>

      <Collapse in={opened} className="  bg-blue-900 bg-opacity-20">
        <div className='flex items-center justify-between py-2 border-b border-dark-800 pr-5 pl-10  '>
            <div className='flex items-center py-1.7'>
                <div className='w-2.5 h-2.5 bg-gray-500 hover:bg-orange-500 mr-3 transform rotate-45 rounded-sm cursor-pointer' title='Add keyframe'></div>  
            </div>
           
        </div>
        <div className='flex items-center justify-between py-2 border-b border-dark-800 pr-5 pl-10  '>
            <div className='flex items-center py-1.7'>
                <div className='w-2.5 h-2.5 bg-gray-500 hover:bg-orange-500 mr-3 transform rotate-45 rounded-sm cursor-pointer' title='Add keyframe'></div> 
            </div>
   
        </div>
       
      </Collapse>
    </div>
  );
}