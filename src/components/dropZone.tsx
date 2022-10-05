import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export const CIMotionDropZone = (args:{onImage?:Function})=>{

    const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);

    

    let res = (
      <img
        key={index}
        src={imageUrl}
        onLoad={()=>URL.revokeObjectURL(imageUrl)}
        className="w-full h-[100px] object-cover rounded-md "
      />
    );

    if(args.onImage){
      args.onImage!(imageUrl);
    }

    return res;
    
  });

  return (
    <div className='w-full'>
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles} className="w-full">
        <Text align="center">Drop images here</Text>
        <div className='flex w-full mt-2'>
        {previews}
        </div>
      </Dropzone>

     
    </div>
  );

}