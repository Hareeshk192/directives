import{Component} from '@angular/core';

@Component({
          selector: 'app-attribute',
          templateUrl: './attribute.component.html',
          //styleUrls:['./attribute.component.css'],
          styles:[`.box{
                  background-color:blue;
                  height:100px;
                  width:100px;
                  }
                  .color{
                    color: white;
                  }`
        ]
})

export class AttributeComponent{
 style1=false;
 style2=true;
}