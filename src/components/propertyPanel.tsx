import { Button, Checkbox, ColorInput, NumberInput, SegmentedControl, Slider, TextInput, Tooltip } from "@mantine/core";
import { useEffect, useState } from "react";
import { CSSInMotionProject, ILayer } from "../interfaces/CSSInMotionProject";
import { Vector2 } from "../interfaces/timeline";
import { useAppDispatch } from "../redux/hooks";
import { moveLayerElement } from "../redux/projectSlice";
import { normaliZe, readTextFromInput, saveFile } from "../utils";
import { CIMotionDropZone } from "./dropZone";
import { Poperty } from "./Property";

export const PropertyPanel = (args:{project:CSSInMotionProject, setProject:Function, selectedLayer?:ILayer, trackPosition:Vector2, addKey:Function})=>{
  const dispatcher = useAppDispatch();
  var selectedId = '';
  let el: HTMLElement | null

  const [animatedProps,setAnimatedPros] = useState({});

  function animateElement(prop:string, value:string){
    document.getElementById('animation_preview')?.remove();

    if(args.selectedLayer?.name ){
      let posX = (parseFloat(normaliZe(args.trackPosition.x,0,10).split(':')[0])*10) + '%';

      //@ts-ignore
      let data = {...animatedProps};

      el = document.getElementById(args.selectedLayer!.name??selectedId);
      el!.style.position = 'absolute';
     
      //@ts-ignore
      el!.style[prop] = value;
      //@ts-ignore
      if(!data[args.selectedLayer?.name]){
        //@ts-ignore
        data[args.selectedLayer?.name] = {};
      }
       //@ts-ignore
       if(!data[args.selectedLayer?.name]?.[posX]){
        //@ts-ignore
        data[args.selectedLayer?.name][posX] = {};
      }
      //----------------------------------------------------------------
      //@ts-ignore
      data[args.selectedLayer?.name][posX][prop] = value;
      setAnimatedPros(data);
      //----------------------------------------------------------------
      if(args.addKey){
        args.addKey({prop:prop, val:value});
      }
    }
    
  }


  function Save(inMemory = false){
    let html = document.getElementById('paper');
    let data:{html?:string, timeline?:CSSInMotionProject} = {};
    data.html = html?.innerHTML;
    data.timeline = args.project;

    if(inMemory){
      let f = JSON.stringify(data, undefined, '\t');
      localStorage.setItem('cssinmotionproject_tmp',f);
    }else{
      saveFile((args.project.animation.trim()!=''?args.project.animation:'New Project') + '.json',JSON.stringify(data))
    }
  }

  function LoadProject(result:string){
    newProject();
    let html = document.getElementById('paper');
    let data:{html?:string, timeline?:CSSInMotionProject} = JSON.parse(result);
    if(!data.html || !data.timeline){
      return;
    }
    html!.innerHTML = data.html;
    args.setProject(data.timeline);
  }
  useEffect(() => {
    let data = localStorage.getItem('cssinmotionproject_tmp');

    if(data){
      setTimeout(()=>{
        LoadProject(data!);
      },1000)
    }
   setInterval(()=>{
     Save(true);
   },3000)
  }, []);


  function newProject(){
    document.getElementById('animation_preview')?.remove();

    args.setProject({
      animation:'',
      layers:[]
    });
    document.getElementById('paper')!.innerHTML = '';
  }
  
 
  

  
    return(
        <div className='h-full  overflow-y-auto col-span-3 border-l border-dark-900 flex flex-col'>
              <div className="header p-2 border-b border-dark-900 flex items-center justify-between">
                <p>Properties</p>
               <div>
               <Button size="xs" className="mr-2" color='gray' onClick={()=>newProject()} >New Project</Button>
               <Button size="xs" color='gray' onClick={()=>Save()} >Save</Button>
                <input onChange={(e)=>readTextFromInput(e,(result?:string)=>{
                  if(result){
                    LoadProject(result);
                  
                  }
                })} type="file" name="project" id="project" className="hidden" />
               <label htmlFor="project" className="px-2 bg-purple-500 text-white py-1 rounded-sm ml-2" >
               Load Project
               </label>
               </div>
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
                          <NumberInput onChange={(val)=>{
                            animateElement('left', `${val}px`)
                          }}  icon={'X'}className='mx-2'/>
                          <NumberInput onChange={(val)=>{
                            animateElement('top', `${val}px`)
                          }}  icon={'Y'}className='mx-2'/>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Dimentions</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput 
                          onChange={(val)=>{
                            animateElement('width', `${val}px`)
                          }}
                          
                          icon={'W'}className='mx-2'/>
                          <NumberInput 
                          onChange={(val)=>{
                            animateElement('height', `${val}px`)
                          }}

                          icon={'H'}className='mx-2'/>
                        </div>
                      </div>
                      
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Scale</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput
                          min={0.0}
                          max={1000}
                          onChange={(val)=>{
                            animateElement('scale', `${(val??1)*0.010}`)
                          }}
                           className='mx-2'/>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Rotation</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput
                          onChange={(val)=>{
                            animateElement('rotate', `${val}deg`)
                          }}
                          icon={'º'} className='mx-2'/>
                        </div>
                      </div>
                    </div>
                  }
                  ></Poperty>
                  <Poperty tittle='Padding'
                  body={
                    <div className='w-full p-5 flex flex-col'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>X</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput onChange={(val)=>{
                            animateElement('paddingLeft', `${val}px`)
                          }}  icon={'L'}className='mx-2'/>
                          <NumberInput onChange={(val)=>{
                            animateElement('paddingTop', `${val}px`)
                          }}  icon={'T'}className='mx-2'/>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Y</p>
                        </div>
                        <div className='w-4/5 flex'>
                          <NumberInput 
                          onChange={(val)=>{
                            animateElement('paddingRight', `${val}px`)
                          }}
                          
                          icon={'R'}className='mx-2'/>
                          <NumberInput 
                          onChange={(val)=>{
                            animateElement('paddingBottom', `${val}px`)
                          }}

                          icon={'B'}className='mx-2'/>
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
                        <Slider 
                      
                        />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Z-Index</p>
                        </div>
                        <div className='w-4/5 '>
                        <NumberInput 
                       onChange={(val)=>{
                        animateElement('z-index', `${val}`)
                      }}
                        />
                        </div>
                      </div>
                      
                    </div>
                  }
                  ></Poperty>

                <Poperty tittle='Text'
                  body={
                    <div className='w-full p-5 flex flex-col'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Color</p>
                        </div>
                        <div className='w-4/5 '>
                        <ColorInput 
                           onChange={(val)=>{
                            animateElement('color', `${val}`)
                          }}
                        
                        format="rgb"  swatches={['rgb(38, 39, 43)', 'rgb(131, 138, 145)', 'rgb(250, 85, 85)', 'rgb(235, 75, 131)', 'rgb(190, 75, 219)', 'rgb(121, 80, 242)', 'rgb(74, 107, 240)', 'rgb(35, 142, 235)', 'rgb(21, 174, 194)', 'rgb(19, 186, 136)', '#40c057', '#82c91e', '#fab005', 'rgb(255, 126, 20)', 'rgba(255, 255, 55,0)']} />
                        </div>
                      </div>
                      
                      
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <Tooltip color={"black"} label={`It can be one of those: Center, \n top, left, right, or an X,Y values`}>
                          <p>Size</p>
                          </Tooltip>
                        </div>
                        <div className='w-4/5 '>
                          <NumberInput
                            onChange={(val)=>{
                              animateElement('fontSize', `${val}px`);
                            }}
                          />
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
                        <ColorInput 
                           onChange={(val)=>{
                            animateElement('background-color', `${val}`)
                          }}
                        
                        format="rgb"  swatches={['rgb(38, 39, 43)', 'rgb(131, 138, 145)', 'rgb(250, 85, 85)', 'rgb(235, 75, 131)', 'rgb(190, 75, 219)', 'rgb(121, 80, 242)', 'rgb(74, 107, 240)', 'rgb(35, 142, 235)', 'rgb(21, 174, 194)', 'rgb(19, 186, 136)', 'rgb(65, 191, 88)', 'rgb(131, 201, 32)', 'rgb(255, 180, 5)', 'rgb(255, 126, 20)', 'rgba(255, 255, 55,0)']} />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Image</p>
                        </div>
                        <div className='w-4/5 '>
                          <CIMotionDropZone onImage={(img:string)=>{
                            animateElement('background-image', `url("${img}")`);
                          }}></CIMotionDropZone>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                         
                        </div>
                        <div className='w-4/5 '>
                        <Checkbox  label='Repeate'
                          onChange={(event)=>{
                            animateElement('background-repeat', `${event.currentTarget.checked?'repeat':'no-repeat'}`);
                          }}
                        />
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
                            onChange={(val)=>{
                              animateElement('background-position', `${val.target.value}`);
                            }}
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
                            onChange={(val)=>{
                              animateElement('background-size', `${val.target.value}`);
                            }}
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
                              onChange={(val)=>{
                                animateElement('border-style', `${val}`);
                              }}
                            />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Width</p>
                        </div>
                        <div className='w-4/5 '>
                          <NumberInput
                            onChange={(val)=>{
                              animateElement('border-width', `${val}px`);
                            }}
                          />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Color</p>
                        </div>
                        <div className='w-4/5 '>
                        <ColorInput 
                        onChange={(val)=>{
                          animateElement('border-color', `${val}`);
                        }}
                        
                        format="rgb"  swatches={['rgb(38, 39, 43)', 'rgb(131, 138, 145)', 'rgb(250, 85, 85)', 'rgb(235, 75, 131)', 'rgb(190, 75, 219)', 'rgb(121, 80, 242)', 'rgb(74, 107, 240)', 'rgb(35, 142, 235)', 'rgb(21, 174, 194)', 'rgb(19, 186, 136)', '#40c057', '#82c91e', '#fab005', 'rgb(255, 126, 20)', 'rgba(255, 255, 55,0)']} />
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-2/6 flex items-center'>
                          <p>Radius</p>
                        </div>
                        <div className='w-4/5 '>
                        <NumberInput 
                          onChange={(val)=>{
                            animateElement('border-radius', `${val}px`);
                          }}
                         />
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
                        <ColorInput format="rgb"  swatches={['rgb(38, 39, 43)', 'rgb(131, 138, 145)', 'rgb(250, 85, 85)', 'rgb(235, 75, 131)', 'rgb(190, 75, 219)', 'rgb(121, 80, 242)', 'rgb(74, 107, 240)', 'rgb(35, 142, 235)', 'rgb(21, 174, 194)', 'rgb(19, 186, 136)', '#40c057', '#82c91e', '#fab005', 'rgb(255, 126, 20)', 'rgba(255, 255, 55,0)']} />
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
    );
}

function setState(arg0: {}): [any, any] {
  throw new Error("Function not implemented.");
}
