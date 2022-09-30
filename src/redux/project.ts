import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayer } from "../interfaces/CSSInMotionProject";


export const projectSlice = createSlice(
    {
        name:"project",
        initialState:{
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
          },
        reducers:{
            addLayer:(state, action:PayloadAction<ILayer>)=>{
                state.layers.push(action.payload)
            }

        }
    }
)

export const  {addLayer}  = projectSlice.actions;

export default projectSlice.reducer;
