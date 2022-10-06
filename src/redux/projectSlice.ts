import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CSSInMotionProject, ILayer, Keyframe } from "../interfaces/CSSInMotionProject";
import { Vector2 } from "../interfaces/timeline";
import { RootState } from "./store";



let initialState:CSSInMotionProject = {
    animation:"My First ANimation",
    layers:[
     
    ]
  };

interface iaddKeyframe{
  key:Keyframe,
  layer:ILayer
}
export const projectSlice = createSlice(
    {
        name:"project",
        initialState,
        reducers:{
            addLayer:(state, action:PayloadAction<ILayer>)=>{
                return {...state, layers:[...state.layers,action.payload]}
            },
            // addKeyframe:(state,  action:PayloadAction<iaddKeyframe>)=>{
            //   let layers = state.layers.filter((_layer)=>_layer.name != action.payload.layer.name);

            //   return {...state, layers:[...layers,action.payload]}
            // },
            moveLayerElement:(state, action:PayloadAction<{keyframe_position:Vector2,layer_name:string, position:Vector2}>)=>{
                let layer = state.layers.find(x=>x.name == (action.payload.layer_name));
                if(!layer){
                  return state;
                }
                if(layer){
                  let position = layer.attributes.find(p=>p.name == 'position');
                  if(!position){
                    position = {name:'position',keyframes:[]}
                  }
                    let keyframes = position.keyframes.filter(x=>x.position == action.payload.keyframe_position);
                    if(keyframes.length>0){
                      keyframes.map(x=>x.value = `${action.payload.position.x}px ${action.payload.position.y}px `);
                    }else{
                      keyframes.push({
                        position:action.payload.position,
                        value:`${action.payload.position.x}px ${action.payload.position.y}px `
                      });
                    }
                }

                return {...state,layers:[...state.layers,layer]}
                
            }

        }
    }
)

export const  {addLayer, moveLayerElement}  = projectSlice.actions;

export const project = (state: RootState)=>state.project;

export default projectSlice.reducer ;
