import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SvgService} from "./svg.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent{

  @Input() plano: any;
  @Input() desc: any;
  @Input() svgIcon: any;
  @Input() svgIcon2: any;

  constructor() {
  }

  // ngOnChanges(){
  //
  //   if(this.plano && this.desc){
  //     switch (this.plano){
  //       case 'Broker' : {
  //         console.log(this.desc, this.plano)
  //         let idSvg = [1,2,3,4,5,6,9,10]
  //         idSvg.forEach((value => {
  //           this.getSvgByCase('broker',value)
  //         }))
  //       }break;
  //       case 'Start' : {
  //         console.log(this.desc, this.plano)
  //         let idSvg = [1,2,3,4,5,6,9,10]
  //         idSvg.forEach((value => {
  //           this.getSvgByCase('start',value)
  //         }))
  //       }break;
  //       case 'Light' : {
  //         console.log(this.desc, this.plano)
  //         let idSvg = [1,2,3,4,5,6,9,10]
  //         idSvg.forEach((value => {
  //           this.getSvgByCase('light',value)
  //         }))
  //       }break;
  //       case 'Premium' : {
  //         console.log(this.desc, this.plano)
  //         let idSvg = [1]
  //         idSvg.forEach((value => {
  //           this.getSvgByCase('premium',value);
  //         }))
  //       }break;
  //       case 'Personalite' : {
  //         console.log(this.desc, this.plano)
  //         let idSvg = [1,2,3,4,5,6,9,10]
  //         idSvg.forEach((value => {
  //           this.getSvgByCase('personalite',value)
  //         }))
  //       }break;
  //     }
  //   }
  //
  // }
  //
  // getSvgByCase( caminho: string,idSvg: any){
  //   let path = `${caminho}/proposta-${caminho}${idSvg}`;
  //   this.svgService.getSvg(path).subscribe((value: any) => {
  //     this.svgIcon.push(this.sanitizer.bypassSecurityTrustHtml(value));
  //   })
  //
  // }


}
