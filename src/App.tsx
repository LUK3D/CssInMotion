import { Checkbox, ColorInput, NumberInput, SegmentedControl, Slider, TextInput, Tooltip } from '@mantine/core';
import {  useState } from 'react';
import './App.css'
import { CIMotionDropZone } from './components/dropZone';

import { Poperty } from './components/Property';
import { CSSInMotionProject, ILayer } from './interfaces/CSSInMotionProject';
import { Editor } from './components/editor';
import { Welcome } from './components/welcome';
import { PropertyPanel } from './components/propertyPanel';
import { Vector2 } from './interfaces/timeline';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { createAction } from '@reduxjs/toolkit';


function App() {7

  let baseEl = <div className='w-40 h-40 bg-gray-200'></div>;

  const project = useAppSelector(state=>state.project);
  const dispatcher = useAppDispatch();
   
  


  return (
    <div className="App w-screen h-screen bg-dark-600 grid grid-cols-12 overflow-y-hidden">
      <Welcome></Welcome>
      <Editor project={project} ></Editor>
      
    </div>
  )
}

export default App
function useSelect() {
  throw new Error('Function not implemented.');
}

