import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CSSInMotionProject, ILayer } from "../interfaces/CSSInMotionProject";
import { RootState } from "./store";



let initialState:CSSInMotionProject = {
    animation:"My First ANimation",
    layers:[
      {
   
        animated:true,
        attributes:[
          {
            keyframes:[
              {
                position:{x:40,y:0},
                value:'rgb(0,0,0)'
              }
            ],
            name:"Position"
          },
          {
            keyframes:[
              {
                position:{x:40,y:0},
                value:'rgb(0,0,0)'
              },
              {
                position:{x:140,y:0},
                value:'rgb(0,0,0)'
              },
            ],
            name:"Scale"
          },
        ],
        name:"Shape 01",
        show_keyframes:true
      },
     
    ]
  };


export const projectSlice = createSlice(
    {
        name:"project",
        initialState,
        reducers:{
            addLayer:(state, action:PayloadAction<ILayer>)=>{
                return {...state, layers:[...state.layers,action.payload]}
            }

        }
    }
)

export const  {addLayer}  = projectSlice.actions;

export const project = (state: RootState)=>state.project;

export default projectSlice.reducer ;
