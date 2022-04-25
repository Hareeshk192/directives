import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  al:any;
  constructor(private elref:ElementRef) { 
     this.al=elref.nativeElement;
    this.change();
   }
   change()
   {
     this.al.style.color='green';
   }

}
