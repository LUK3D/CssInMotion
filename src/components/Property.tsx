import { ReactNode, useState } from 'react';
import { Button, Collapse } from '@mantine/core';

interface IProperty {

    tittle:ReactNode|string,
    body?:ReactNode|string,
}

export const Poperty = (args: IProperty)=>{
    const [opened, setOpened] = useState(false);
    return (
        <>
          <Button onClick={() => setOpened((o) => !o)} className={`min-h-[40px] hover:bg-dark-200 rounded-none flex bg-transparent ${opened?'border-0 border-b border-dark-900 border-t-0 bg-dark-500':''} `}>
            <div className='mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`transition transform  ${opened?'rotate-90':''} w-4 h-4`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </div>
            {args.tittle}
          </Button>
    
          <Collapse in={opened} className="bg-dark-800 flex flex-col">
            {args.body}
          </Collapse>
        </>
      );

}