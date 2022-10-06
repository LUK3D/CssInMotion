import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';
import { Keyframe } from './keyFrame';
import { Vector2 } from '../interfaces/timeline';
import { Attribute, CSSInMotionProject, ILayer } from '../interfaces/CSSInMotionProject';

interface Layer{
  selector:string,
  layer_name:string,
  currentMousePositiononTrack:Vector2,
  attributes:Array<Attribute>,
  project: CSSInMotionProject,
  setProject:Function,
}

export function LayerFrames(args:Layer) {
  const [opened, setOpened] = useState(false);
  const [canIDrag, setCanIDrag] = useState(false);
  const [offset, setOffset] = useState<number>(0);



  function updateFramePosition(oldPos:Vector2, newPos:Vector2, attrib:string){
    let layer = args.project.layers.filter(l=>l.name == args.layer_name);
    let attrs = layer[0].attributes.filter(a=>a.name == attrib);

   let keyframes = attrs[0].keyframes.map(kf=>{
    if( kf.position == oldPos)
    kf.position = newPos;
    return kf;

   })
   attrs[0].keyframes =  keyframes;


    layer[0].attributes.map(a=>a.name!=attrib?a:attrs[0]);
    args.setProject({...args.project, layers:args.project.layers.map(l=>l.name!=layer[0].name?l:layer[0])});
    
  }

  

  return (
    <div  className='w-full flex flex-col border-b border-dark-900' onDragOver={(e)=>setOffset(e.currentTarget.offsetLeft)} onMouseMove={(e)=>setOffset(e.currentTarget.offsetLeft)} >
      <Button id={"key_"+args.selector} onClick={() => setOpened((o) => !o)} color='orange' className={` pointer-events-none rounded-none flex bg-blue-500 hover:bg-blue-500 ${opened?'border-b border-dark-900 border-t-0':''} `}>
      </Button>

      <Collapse in={opened} className="  bg-blue-900 bg-opacity-20">
      {
        args.attributes.map((attribute,index)=>{
          return <div key={attribute.name+index} className='flex items-center justify-between py-5 border-b border-dark-800 pr-5 pl-10  relative'>
          {attribute.keyframes.map((keyframe)=>{
           return <Keyframe onUpdatePosition={(oldPosition:Vector2,newPosition:Vector2)=>updateFramePosition(oldPosition,newPosition, attribute.name)}  key={'position_key_'+keyframe.position.x} initialPosition={keyframe.position}  currentMousePositionOnTrack={args.currentMousePositiononTrack}></Keyframe>
          })}
      </div>
        })
      }
       
      </Collapse>
    </div>
  );
}