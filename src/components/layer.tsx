import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';
import { Attribute, ILayer } from '../interfaces/CSSInMotionProject';

interface Layer{
    text:string,
    selector:string,
    layer:ILayer
}

export function Layer(args:Layer) {
  const [opened, setOpened] = useState(false);


  function openFrames(){
    document.getElementById('key_'+args.selector)?.click();
  }


  return (
    <div className='w-full flex flex-col border-b border-dark-900'>
      <Button id={'layer_'+args} onClick={() => {setOpened((o) => !o); openFrames();}}  className={` rounded-none flex bg-transparent ${opened?'border-0 border-b border-dark-900 border-t-0 bg-purple-600':''} `}>
        <div className='mr-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`transition transform  ${opened?'rotate-90':''} w-4 h-4`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        </div> {args.text}
      </Button>

      <Collapse in={opened} className="  bg-blue-900 bg-opacity-20">
       {
        args.layer.attributes.map((attribute, index)=>{
          return  <div key={'layer_'+attribute.name+index} className='flex items-center justify-between py-2 border-b border-dark-800 pr-5 pl-10  '>
          <div className='flex items-center'>
              <div className='w-2.5 h-2.5 bg-gray-500 hover:bg-orange-500 mr-3 transform rotate-45 rounded-sm cursor-pointer' title='Add keyframe'></div>  <p>{attribute.name}</p>
          </div>
          <div title='toggel animation' className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </div>
      </div>
        })
       }
       
        
      </Collapse>
    </div>
  );
}