import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any[], filterString:string, propName: string): unknown {
    const resultArray = [];
    if(value.length === 0 || filterString === "" || propName === ""){
      return value;
    }
    for(const item of value){
        if( item[propName].toLowerCase().indexOf(filterString.toLowerCase()) >= 0 ){
          resultArray.push(item);
        } 
    }
    return resultArray;
  }

}
