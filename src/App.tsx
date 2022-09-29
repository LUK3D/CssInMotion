import { Checkbox, ColorInput, NumberInput, SegmentedControl, Slider, TextInput, Tooltip } from '@mantine/core';
import {  useState } from 'react';
import './App.css'
import { CIMotionDropZone } from './components/dropZone';

import { Poperty } from './components/Property';
import { CSSInMotionProject } from './interfaces/CSSInMotionProject';
import { Editor } from './components/editor';
import { Welcome } from './components/welcome';
import { PropertyPanel } from './components/propertyPanel';
import { Vector2 } from './interfaces/timeline';

function App() {7

  let baseEl = <div className='w-40 h-40 bg-gray-200'></div>;

    const [project, setProject] = useState<CSSInMotionProject>({
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
    });

    

  return (
    <div className="App w-screen h-screen bg-dark-600 grid grid-cols-12 overflow-y-hidden">
      <Welcome></Welcome>
      <Editor project={project} setProject={setProject}></Editor>
      <PropertyPanel></PropertyPanel>
    </div>
  )
}

export default App
