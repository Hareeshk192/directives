import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, ViewEncapsulation, } from "@angular/core";

@Component({
    selector: 'app-structural',
    templateUrl: './structural.component.html',
    styles:['p{font-size:18px}, p{font-family:serif}'],
    encapsulation: ViewEncapsulation.None
    
    
})

export class StructuralComponent{
  toggle:boolean= false;
  el1=false;
  el2=true;
  items=['Hareesh','king','sarila'];
  toggleit()
  {
      this.toggle= !this.toggle;
  }
}