import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

export interface ReadTimeConfig{
  wordsPerMinut:number;
}


@Directive({
  selector: '[appReadTime]'
})
export class ReadTimeDirective {
@Input() configuration:ReadTimeConfig={
  wordsPerMinut:200
}

@Output() readTimeCalculated=new EventEmitter<number>();

  constructor(private el:ElementRef) { }
ngOnInit(){
  const text=this.el.nativeElement.textContent;
  const time=this.calculateReadTime(text);
  console.log('readTime :' + time)
  this.readTimeCalculated.emit(time)
}

calculateReadTime(text:string){
const wordcount=text.split(/\s+/g).length;
const minutes =wordcount / this.configuration.wordsPerMinut;
return Math.ceil(minutes);
}
}
