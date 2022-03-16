import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lenfilter'
})
export class LenfilterPipe implements PipeTransform {

  transform(value:string[]):any{
  let list:string[]=[];
    for(let i of value){
      list.push(i.substring(0,2));
    }

    return list;
  
  }

}
