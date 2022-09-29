import { useEffect, useState } from "react";
import { Vector2 } from "../interfaces/timeline"

interface IRecatangle{
    position:Vector2
}

export const Rectangle = (args:IRecatangle)=>{
    const [position, setPosition] = useState<Vector2>(args.position);
    const [mousePosition, setMousePosition] = useState<Vector2>(args.position);
    const [isMoving, setIsMoving] = useState<boolean>(false);


    // useEffect(() => {
    //     window.addEventListener('mousemove',(e)=>{
    //         setMousePosition({x:e.clientX, y:e.clientY});
    //         setPosition({x:e.pageX, y:e.pageY});
    //         console.log("Moving...", mousePosition,{x:e.clientX, y:e.clientY})
    //     })
    // }, [])


    
    
    

    return (
        <div onMouseDown={()=>setIsMoving(true)} onMouseUp={()=>setIsMoving(false)} className="w-[40px] h-[40px] bg-gray-300 absolute"
        style={{
            top:position.y,
            left:position.x
        }}
        >

        </div>
    );
}