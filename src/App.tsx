import { Slider } from '@mantine/core'
import './App.css'

function App() {

  return (
    <div className="App w-screen h-screen bg-dark-600 grid grid-cols-12">
      <div className='h-full  col-span-9 bg-dark-900 flex flex-col'>
          <div className="2dView w-full h-full">

          </div>
          <div className="layers-container w-full h-[300px] bg-dark-600 border-t border-dark-900 flex">
            <div className=" w-2/7 border-r border-dark-900 ">
              <div className='w-full flex layers p-2 border-b border-dark-900'>
                 <p>LAYERS</p>
              </div>
            </div>
            <div className=" w-5/7 bg-dark-900">
              <div className='w-full  layers p-2 border-b border-dark-900 bg-dark-600 flex flex-col h-10'>
              <Slider
              size='sm'
                  marks={[
                    { value: 20, label: '20%' },
                    { value: 50, label: '50%' },
                    { value: 80, label: '80%' },
                  ]}
                />  
              </div>
            </div>

          </div>
      </div>
      <div className='h-full  overflow-y-auto col-span-3 border-l border-dark-900 '></div>
    </div>
  )
}

export default App
