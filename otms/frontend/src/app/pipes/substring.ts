import { PipeTransform, Pipe } from '@angular/core';

//'hyderabad' | substring:2

@Pipe({ "name" : "substring" })
export class SubstringPipe implements PipeTransform{
   
    /**
     * 
     * @param original contains the value we are transforming
     * @param args is extra args required in our pipe
     */
    transform(original: string, ...args:number[] ):string {   
       let start:number=args[0];
       let end:number=args[1];
   console.log("inside substring transform, original="+original+" start="+start+" end="+end);     

   if(end==undefined){
    let desired=original.substring(start);
    return desired;   
   }     

    let desired=original.substring(start,end);
     return desired;
    }


}
