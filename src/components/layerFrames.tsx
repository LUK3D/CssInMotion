import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';
import { Keyframe } from './keyFrame';
import { Vector2 } from './interfaces/timeline';

interface ILayer{
  selector:string,
  currentMousePositiononTrack:Vector2
}

export function LayerFrames(args:ILayer) {
  const [opened, setOpened] = useState(false);
  const [canIDrag, setCanIDrag] = useState(false);
  const [offset, setOffset] = useState<number>(0);

  let PositionFrames:Array<Vector2> = [
    {x:10,y:0},
    {x:50,y:0},
    {x:45,y:0},
    {x:75,y:0},
    {x:205,y:0},
  ];
  let RotationFrames:Array<Vector2> = [
    {x:15,y:0},
    {x:60,y:0},
    {x:85,y:0},
    {x:205,y:0},
    {x:305,y:0},
  ];


  

  return (
    <div  className='w-full flex flex-col border-b border-dark-900' onDragOver={(e)=>setOffset(e.currentTarget.offsetLeft)} onMouseMove={(e)=>setOffset(e.currentTarget.offsetLeft)} >
      <Button id={"key_"+args.selector} onClick={() => setOpened((o) => !o)} color='orange' className={` pointer-events-none rounded-none flex bg-blue-500 hover:bg-blue-500 ${opened?'border-b border-dark-900 border-t-0':''} `}>
       
      </Button>

      <Collapse in={opened} className="  bg-blue-900 bg-opacity-20">
      <div className='flex items-center justify-between py-5 border-b border-dark-800 pr-5 pl-10  relative'>
        {
          RotationFrames.map((fram)=>{
          return <Keyframe initialPosition={fram}  currentMousePositionOnTrack={args.currentMousePositiononTrack}></Keyframe>
          })
        }
        </div>
        <div className='flex items-center justify-between py-5 border-b border-dark-800 pr-5 pl-10  relative'>

          {
            PositionFrames.map((fram)=>{
             return <Keyframe initialPosition={fram}  currentMousePositionOnTrack={args.currentMousePositiononTrack}></Keyframe>
            })
          }
        </div>
       
      </Collapse>
    </div>
  );
}