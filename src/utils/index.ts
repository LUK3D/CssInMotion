
   export function time_convert(num:number)
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


   export function normaliZe(val:number, max:number, min:number) { 
      max = document.getElementById('animation_layers')?.clientWidth??0;
      let num = (val - min) / (max - min)*600;
      
      return time_convert(Math.min(Math.max(num, 0), 1000)).split('.')[0]; 
    }

    export function setScrollY(scroll:number){
        document.getElementById("layers_frames")!.scrollTop = scroll;
        document.getElementById("layers")!.scrollTop = scroll;
      }


     export function saveFile(name:string, data:string) {
        let a = document.createElement("a");
        if (typeof a.download !== "undefined") a.download = name;
        a.href = URL.createObjectURL(new Blob([data], {
            type: "application/octet-stream"
        }));
        a.dispatchEvent(new MouseEvent("click"));
        a.remove();
    }


    export async function readTextFromInput(event:React.ChangeEvent<HTMLInputElement>, callBack:Function) {
      const file = event.target.files?.item(0)
      const text = await file?.text();
      if(callBack){
        callBack(text)
      }
      
    }