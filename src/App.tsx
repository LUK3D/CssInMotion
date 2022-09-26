import { Slider } from '@mantine/core'
import './App.css'
import { Layer } from './components/layer'

function App() {

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
              <div className='h-full overflow-y-auto'>
              {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((key)=><Layer text="Shape01" key={`layer_${key}`}></Layer>)
              }
              </div>
            </div>
            <div className=" w-5/7 bg-dark-900">
              <div className='w-full  layers p-2 border-b border-dark-900 bg-dark-600 flex flex-col h-10'>

              </div>
            </div>

          </div>
      </div>
      <div className='h-full  overflow-y-auto col-span-3 border-l border-dark-900 '></div>
    </div>
  )
}

export default App
