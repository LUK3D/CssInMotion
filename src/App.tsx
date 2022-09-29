import { Checkbox, ColorInput, NumberInput, SegmentedControl, Slider, TextInput, Tooltip } from '@mantine/core';
import {  useState } from 'react';
import './App.css'
import { CIMotionDropZone } from './components/dropZone';

import { Poperty } from './components/Property';
import { CSSInMotionProject } from './interfaces/CSSInMotionProject';
import { Editor } from './components/editor';
import { Welcome } from './components/welcome';

function App() {

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
        }
      ]
    });


 


 
    

    



  return (
    <div className="App w-screen h-screen bg-dark-600 grid grid-cols-12 overflow-y-hidden">
      <Welcome></Welcome>
      <Editor project={project} setProject={setProject}></Editor>
      <div className='h-full  overflow-y-auto col-span-3 border-l border-dark-900 flex flex-col'>
              <div className="header p-2 border-b border-dark-900">
                <p>Properties</p>
              </div>
              <div className='h-full w-full overflow-y-auto flex flex-col'>
                  <Poperty tittle='Transform'
                  body={
                    <div className='w-full p-5 flex flex-col'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Position</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput icon={'X'}className='mx-2'/>
                          <NumberInput icon={'Y'}className='mx-2'/>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Scale</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput icon={'W'}className='mx-2'/>
                          <NumberInput icon={'H'}className='mx-2'/>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Rotation</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput icon={'º'} className='mx-2'/>
                        </div>
                      </div>
                    </div>
                  }
                  ></Poperty>
                  <Poperty tittle='Layer'
                  body={
                    <div className='w-full p-5 flex flex-col'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Opacity</p>
                        </div>
                        <div className='w-4/5 '>
                        <Slider/>
                        </div>
                      </div>
                      
                    </div>
                  }
                  ></Poperty>

                <Poperty tittle='Background'
                  body={
                    <div className='w-full p-5 flex flex-col'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Color</p>
                        </div>
                        <div className='w-4/5 '>
                        <ColorInput format="rgb"  swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']} />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Image</p>
                        </div>
                        <div className='w-4/5 '>
                          <CIMotionDropZone></CIMotionDropZone>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                         
                        </div>
                        <div className='w-4/5 '>
                        <Checkbox  label='Repeate' />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <Tooltip color={"black"} label={`It can be one of those: Center, \n top, left, right, or an X,Y values`}>
                          <p>Position</p>
                          </Tooltip>
                        </div>
                        <div className='w-4/5 '>
                          <TextInput
                          />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <Tooltip color={"black"} label={`It can be one of those: Container, \n cover, crop, or an X,Y values`}>
                          <p>Size</p>
                          </Tooltip>
                        </div>
                        <div className='w-4/5 '>
                          <TextInput
                          />
                        </div>
                      </div>
                     
                    </div>
                  }
                  ></Poperty>

                <Poperty tittle='Boborder'
                  body={
                    <div className='w-full p-5 flex flex-col'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Types</p>
                        </div>
                        <div className='w-4/5 '>
                          <SegmentedControl
                          fullWidth
                          className=' bg-dark-900'
                              data={[
                                { label: < div className='w-full  justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>

                                </ div>, value: 'none' },
                                { label: '-----', value: 'dashed' },
                                { label: 
                                <div className='flex justify-center items-center h-[25px] w-full'>
                                  <div className='w-7 h-0.5 bg-gray-400'></div>
                                </div>, value: 'solid' },
                              ]}
                            />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Color</p>
                        </div>
                        <div className='w-4/5 '>
                        <ColorInput format="rgb"  swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']} />
                        </div>
                      </div>

                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Radius</p>
                        </div>
                        <div className='w-4/5 '>
                        <Slider/>
                        </div>
                      </div>
                    </div>
                  }
                  ></Poperty>

                <Poperty tittle='Shadow'
                  body={
                    <div className='w-full p-5 flex flex-col'>

                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Offset</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput icon={'X'}className='mr-2'/>
                          <NumberInput icon={'Y'}className='ml-2'/>
                        </div>
                      </div>
                      
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Color</p>
                        </div>
                        <div className='w-4/5 '>
                        <ColorInput format="rgb"  swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']} />
                        </div>
                      </div>

                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Blur</p>
                        </div>
                        <div className='w-4/5 '>
                          <NumberInput icon={'X'} />
                        </div>
                      </div>
                    </div>
                  }
                  ></Poperty>
              </div>

      </div>
    </div>
  )
}

export default App
