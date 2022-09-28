import { Checkbox, ColorInput, NumberInput, SegmentedControl, Slider, TextInput, Tooltip } from '@mantine/core';
import { useEffect, useState } from 'react';
import './App.css'
import { CIMotionDropZone } from './components/dropZone';
import { Vector2 } from './components/interfaces/timeline';
import { Layer } from './components/layer'
import { LayerFrames } from './components/layerFrames'
import { Poperty } from './components/Property';
import createPanZoom from "panzoom";

function App() {


    const [frames, setFrames] = useState([
      0,1,2,3,4,5,6,7,8,9,10
    ])
    const [trackPosition, setTrackPosition] = useState<Vector2>({x:20, y:0});
    const [dragging, setDragging] = useState<boolean>(false);
    const [mousePosOnFramesTrack, setMousePosOnFramesTrack] = useState<Vector2>({x:0, y:0});


    function moveTrackX(x:number){
        if(dragging){
          // console.log(x);
          let max = document.getElementById('animation_layers')?.clientWidth??0;
            if(x>=0 && x<=max){
              setTrackPosition({x:x,y:0})
            }
        }
      // trackPosition.x = x;
    }
    function moveTrackXByClick(x:number){
      let max = document.getElementById('animation_layers')?.clientWidth??0;
      if(x>=0 && x<=max){
        setTrackPosition({x:x,y:0})
      }
    }

    function time_convert(num:number)
    { 
     let hours = Math.floor(num / 60).toString();  
     let minutes = (num % 60).toString();

     if(hours.length<=1){
      hours = '0'+hours
     }
     if(minutes.length<=1){
      minutes = '0'+minutes
     }
     return hours + ":" + minutes;         
   }


    function normaliZe(val:number, max:number, min:number) { 
      max = document.getElementById('animation_layers')?.clientWidth??0;
      let num = (val - min) / (max - min)*600;
      
      return time_convert(Math.min(Math.max(num, 0), 1000)).split('.')[0]; 
    }

    useEffect(() => {
      let zommEl = createPanZoom(document.getElementById('canvas')!);
    
     
    }, [])
    

    

  function setScrollY(scroll:number){
    document.getElementById("layers_frames")!.scrollTop = scroll;
    document.getElementById("layers")!.scrollTop = scroll;
  }

  return (
    <div className="App w-screen h-screen bg-dark-600 grid grid-cols-12 overflow-y-hidden">
      <div id='editor' className='h-full  col-span-9 bg-dark-900 flex flex-col'>
          <div className="2dView w-full h-full relative group flex flex-col overflow-hidden">

            <div id='canvas' className="canvas w-full h-full relative flex justify-center items-center">
                <div className="paper w-[400px] h-[400px] bg-white relative overflow-hidden">

                  
                </div>
            </div>

          <div className='absolute text-sm bottom-0 w-full flex justify-between items-center py-2 px-2'>
              <button>🔥</button>
              <div className="controls transform  p-2 fill-light-100 rounded-md flex items-center bg-dark-800 bg-opacity-70">
                <p>00:{normaliZe(trackPosition.x,0,10)}</p>
                <div className='mx-5'>
                  <button className='mx-1'>
                      <svg className='w-5 h-5 transform rotate-180' viewBox="0 0 14.25 12" version="1.1"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 0C12.3357 0 12 0.335693 12 0.75L12 11.25C12 11.6643 12.3357 12 12.75 12L13.5 12C13.9143 12 14.25 11.6643 14.25 11.25L14.25 0.75C14.25 0.335693 13.9143 0 13.5 0L12.75 0L12.75 0ZM2.80493 0.310059C1.55493 -0.403076 0 0.5 0 1.93994L0 10.062C0 11.502 1.55493 12.405 2.80493 11.6899L9.91309 7.62891C11.1731 6.90894 11.1731 5.09302 9.91309 4.37305L2.80493 0.311035L2.80493 0.310059Z" id="Forma" fill="current" fillRule="evenodd" stroke="none" />
                      </svg>
                  </button>
                  <button className='mx-3'>
                    <svg className='w-5 h-5 transform transition hover:scale-125' viewBox="0 0 10.85791 11.87915" version="1.1"  xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.80493 0.249023C1.55493 -0.464111 0 0.438965 0 1.87891L0 10.001C0 11.4409 1.55493 12.344 2.80493 11.6289L9.91309 7.56787C11.1731 6.8479 11.1731 5.03198 9.91309 4.31201L2.80493 0.25L2.80493 0.249023Z" id="Forma" fill="current" fillRule="evenodd" stroke="none" />
                    </svg>
                  </button>
                  <button className='mx-1'>
                      <svg className='w-5 h-5' viewBox="0 0 14.25 12" version="1.1"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 0C12.3357 0 12 0.335693 12 0.75L12 11.25C12 11.6643 12.3357 12 12.75 12L13.5 12C13.9143 12 14.25 11.6643 14.25 11.25L14.25 0.75C14.25 0.335693 13.9143 0 13.5 0L12.75 0L12.75 0ZM2.80493 0.310059C1.55493 -0.403076 0 0.5 0 1.93994L0 10.062C0 11.502 1.55493 12.405 2.80493 11.6899L9.91309 7.62891C11.1731 6.90894 11.1731 5.09302 9.91309 4.37305L2.80493 0.311035L2.80493 0.310059Z" id="Forma" fill="current" fillRule="evenodd" stroke="none" />
                      </svg>
                  </button>
                </div>
                <p>00:00:00</p>

              </div>
              <a href='https://github.com/LUK3D' target='_blank' className='flex items-center'>Made by <span className='bg-blue-500 bg-opacity-25 rounded-md p-1 mx-1 '>LUK3D</span> <img className='w-10 h-10 rounded-full ml-2' src="https://avatars.githubusercontent.com/u/31851972?v=4" alt="" /></a>
          </div>
          </div>
          <div className="layers-container w-full h-[300px] bg-dark-600 border-t border-dark-900 flex">
            <div className=" w-2/7 border-r border-dark-900 flex flex-col">
              <div className='w-full flex layers p-2 border-b border-dark-900'>
                 <p>LAYERS</p>
              </div>
              <div className='h-full overflow-y-auto' id='layers' onScroll={(e)=>setScrollY(
                //@ts-ignore
                e.target.scrollTop
                )}>
              {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((key)=><Layer text="Shape01" selector={`${key}`} key={`layer_${key}`}></Layer>)
              }
              </div>
            </div>
            <div id='animation_layers' className=" w-5/7 bg-dark-900 flex flex-col"   onMouseMove={(e)=>{
              moveTrackX(e.pageX-e.currentTarget.offsetLeft);
            }} onDragOver={(e)=>{
              setMousePosOnFramesTrack({x:e.pageX-e.currentTarget.offsetLeft,y:e.pageY-e.currentTarget.offsetTop})
            }}
            
            >
              <div onClick={(e)=>moveTrackXByClick(e.pageX-e.currentTarget!.offsetLeft)} className='w-full  layers p-2 border-b border-dark-900 bg-dark-600 flex  items-center justify-between h-12 relative'>
                {
                  frames.map((x)=><p key={"frame_"+x}>{x}s</p>)
                }
              <div  onMouseUp={()=>setDragging(false)} onMouseDown={(e)=>setDragging(true)} className={`${dragging?'':'transition-all'} select-none   fill-white draggable timeline_position_bar absolute  h-[400px] w-0.7 bg-light-300 flex flex-col items-center top-[80%] z-20`} style={{
                left:trackPosition.x,
                cursor:'w-resize',
              }}>
                <div className={`w-4 h-4  rounded-sm transition transform transition hover:scale-125 `}>
                  <svg  className=' w-full h-full stroke-current  color-blue-500' viewBox="0 0 28.5 40.088257" version="1.1"  xmlns="http://www.w3.org/2000/svg">
                    <path stroke='current' fill='current' d="M0 1.99902L0 27.0723Q0 27.2903 0.0469899 27.5032Q0.0939798 27.7161 0.18575 27.9138Q0.277521 28.1116 0.409758 28.2849Q0.541995 28.4582 0.708481 28.5989L13.0048 38.9935Q13.0719 39.0502 13.1438 39.1009Q13.2157 39.1516 13.2918 39.1957Q13.3679 39.2399 13.4475 39.2772Q13.5272 39.3145 13.6098 39.3446Q13.6924 39.3748 13.7773 39.3976Q13.8623 39.4204 13.9489 39.4356Q14.0355 39.4509 14.1232 39.4584Q14.2108 39.466 14.2987 39.4659Q14.3867 39.4657 14.4743 39.4578Q14.5619 39.45 14.6484 39.4344Q14.735 39.4189 14.8199 39.3958Q14.9048 39.3727 14.9873 39.3423Q15.0698 39.3118 15.1493 39.2743Q15.2288 39.2367 15.3047 39.1923Q15.3807 39.1478 15.4524 39.0969Q15.5241 39.046 15.5911 38.989L27.7968 28.5986Q27.9621 28.4579 28.0934 28.2849Q28.2246 28.112 28.3157 27.9149Q28.4068 27.7177 28.4534 27.5057Q28.5 27.2936 28.5 27.0765L28.5 1.99902Q28.5 1.90082 28.4904 1.80308Q28.4807 1.70535 28.4616 1.60903Q28.4424 1.51271 28.4139 1.41874Q28.3854 1.32476 28.3478 1.23403Q28.3103 1.1433 28.264 1.05669Q28.2177 0.970081 28.1631 0.888425Q28.1085 0.80677 28.0462 0.730856Q27.9839 0.654942 27.9145 0.5855Q27.8451 0.516058 27.7692 0.453757Q27.6932 0.391456 27.6116 0.336896Q27.5299 0.282336 27.4433 0.236042Q27.3567 0.189748 27.266 0.152167Q27.1753 0.114585 27.0813 0.0860773Q26.9873 0.0575697 26.891 0.0384107Q26.7947 0.0192517 26.6969 0.00962584Q26.5992 0 26.501 0L1.99899 0Q1.90079 0 1.80306 0.00962584Q1.70533 0.0192517 1.60901 0.0384107Q1.51269 0.0575697 1.41872 0.0860773Q1.32474 0.114585 1.23401 0.152167Q1.14328 0.189748 1.05667 0.236042Q0.970066 0.282336 0.888412 0.336896Q0.806758 0.391456 0.730845 0.453757Q0.654932 0.516058 0.585491 0.5855Q0.516051 0.654942 0.45375 0.730856Q0.39145 0.80677 0.336891 0.888425Q0.282332 0.970081 0.236039 1.05669Q0.189745 1.1433 0.152164 1.23403Q0.114583 1.32476 0.0860759 1.41874Q0.0575688 1.51271 0.0384101 1.60903Q0.0192514 1.70535 0.0096257 1.80308Q0 1.90082 0 1.99902Z" id="Vetor"  />
                  </svg>
                </div>
              </div>
              </div>
              <div className='flex flex-col overflow-y-auto h-full relative' id='layers_frames' onScroll={(e)=>setScrollY(
                //@ts-ignore
                e.target.scrollTop
                )}>
              {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((key)=><LayerFrames currentMousePositiononTrack={mousePosOnFramesTrack}  selector={key.toString()} key={'key_'+key}></LayerFrames>)
              }
              </div>
            </div>
          </div>
      </div>
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
