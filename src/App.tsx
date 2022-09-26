import { useState } from 'react';
import './App.css'
import { Layer } from './components/layer'
import { LayerFrames } from './components/layerFrames'

function App() {


    const [frames, setFrames] = useState([
      0,1,2,3,4,5,6,7,8,9,10
    ])


  function setScrollY(scroll:number){
    document.getElementById("layers_frames")!.scrollTop = scroll;
    document.getElementById("layers")!.scrollTop = scroll;
  }

  return (
    <div className="App w-screen h-screen bg-dark-600 grid grid-cols-12">
      <div className='h-full  col-span-9 bg-dark-900 flex flex-col'>
          <div className="2dView w-full h-full">

          </div>
          <div className="layers-container w-full h-[300px] bg-dark-600 border-t border-dark-900 flex">
            <div className=" w-2/7 border-r border-dark-900 flex flex-col">
              <div className='w-full flex layers p-2 border-b border-dark-900'>
                 <p>LAYERS</p>
              </div>
              <div className='h-full overflow-y-auto' id='layers' onScroll={(e)=>setScrollY(e.target.scrollTop)}>
              {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((key)=><Layer text="Shape01" selector={`${key}`} key={`layer_${key}`}></Layer>)
              }
              </div>
            </div>
            <div className=" w-5/7 bg-dark-900 flex flex-col">
              <div className='w-full  layers p-2 border-b border-dark-900 bg-dark-600 flex  items-center justify-between h-12'>
                {
                  frames.map((x)=><p>{x}s</p>)
                }
              </div>
              <div className='flex flex-col overflow-y-auto h-full ' id='layers_frames' onScroll={(e)=>setScrollY(e.target.scrollTop)}>
              {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((key)=><LayerFrames selector={key.toString()} key={'keys_'+key}></LayerFrames>)
              }
              

              </div>
            </div>

          </div>
      </div>
      <div className='h-full  overflow-y-auto col-span-3 border-l border-dark-900 '></div>
    </div>
  )
}

export default App
