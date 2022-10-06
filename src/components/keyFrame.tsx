import { useEffect, useState } from "react";
import { CSSInMotionProject } from "../interfaces/CSSInMotionProject";
import { Vector2 } from "../interfaces/timeline";

interface IKeyframe {
    currentMousePositionOnTrack: Vector2
    initialPosition?: Vector2
    onUpdatePosition:Function
}

export const Keyframe = (args: IKeyframe) => {

    const [oldPosition, setOldPosition] = useState<Vector2>({ x: 0, y: 0 });
    const [position, setPosition] = useState<Vector2>({ x: 0, y: 0 });
    const [dragging, setDragging] = useState<boolean>(false);


    function dragKeyFrame(x: number) {
        if (dragging) {
            setPosition({ x: args.currentMousePositionOnTrack.x, y: 0 });
        }
    }

  
    

    useEffect(() => {
        //📝 Defining initial position for the keyframe
        if (args.initialPosition) {
            setPosition(args.initialPosition);
            setOldPosition(position);
        }
    }, [])


    return (
        <div draggable

            onDragStart={(e) => {
                var img = document.createElement("img");
                img.style.display = 'none';
                e.dataTransfer.setDragImage(img, 0, 0);
                setOldPosition(position);
            }}

            onDrag={(e) => {
                dragKeyFrame(e.clientX - e.currentTarget.clientLeft);
            }} 

            onDragEnd={()=>{
                args.onUpdatePosition(oldPosition, position);
            }}
            
            onMouseDown={() => { 
                setOldPosition(position);
                setDragging(true);
            }} 
            onMouseUp={() => { 
                setDragging(false); 
            }} 
            className='flex items-center py-2 absolute cursor-pointer active:cursor-pointer transition transform hover:scale-125' 
            style={{
                left: position.x
            }}>

            <div className='w-2.5 h-2.5 bg-gray-700 shadow-md border border-gray-500 hover:bg-orange-500 hover:cursor-move  transform rotate-45 rounded-sm cursor-pointer' ></div>
        </div>
    );
}