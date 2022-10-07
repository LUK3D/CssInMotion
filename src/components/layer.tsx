import { useEffect, useState } from 'react';
import { Button, Collapse } from '@mantine/core';
import { Attribute, ILayer } from '../interfaces/CSSInMotionProject';

interface Layer{
    text:string,
    selector:string,
    layer:ILayer,
    selectdLayer?:ILayer,
    onSelectLayer:Function,
    onAddKeyframe:Function
}

export function Layer(args:Layer) {
  const [opened, setOpened] = useState(false);
  const [selectLayer, setSelectLayer] = useState(false);

  useEffect(() => {
    if(args.selectdLayer?.name == args.layer.name){
      setSelectLayer(true);
    }else{
      setSelectLayer(false);
    }
  }, [args.selectdLayer])
  

  function openFrames(){
    document.getElementById('key_'+args.selector)?.click();
  }


  return (
    <div className='w-full flex flex-col border-b border-dark-900'>
      <button id={'layer_'+args}  className={` text-white text-sm h-9.1 w-full flex items-center justify-between rounded-none flex bg-transparent ${opened?'border-0 border-b border-dark-900 border-t-0 ':''} ${selectLayer == true?'bg-purple-600':''}`}>
        <div className='w-4/4 flex justify-between'>
        <div className='flex  py-2' onClick={() => {setOpened((o) => !o); openFrames();}} >
          <div className='mr-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`transition transform  ${opened?'rotate-90':''} w-4 h-4`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          </div> {args.text}
        </div>
        <div className='w-full h-full  py-4.5 ' onClick={() => { args.onSelectLayer(args.layer); setSelectLayer(true)}} >
        </div>
        </div>
      </button>

      <Collapse in={opened} className="  bg-blue-900 bg-opacity-20">
       {
        args.layer.attributes.map((attribute, index)=>{
          return  <div key={'layer_'+attribute.name+index} className='flex items-center justify-between py-2 border-b border-dark-800 pr-5 pl-10  '>
          <div className='flex items-center'>
              <div onClick={()=>args.onAddKeyframe(attribute.name)} className='w-2.5 h-2.5 bg-gray-500 hover:bg-orange-500 mr-3 transform rotate-45 rounded-sm cursor-pointer' title='Add keyframe'></div>  <p>{attribute.name}</p>
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