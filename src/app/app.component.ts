import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {SvgService} from "./shared/svg.service";
import * as moment from "moment";
import {Formulario} from "./model/formulario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true
})

export class AppComponent {

  planoEscolhido: string = '';
  selecionarDesconto: boolean = false;
  personalizado: boolean = false;
  svgPlano: any[] = [];

  planos = [
    { name: 'Broker' },
    { name: 'Start' },
    { name: 'Light' },
    { name: 'Premium' },
    { name: 'Personalite' }
  ];

  desconto: any[] = [
    { name: 'Sim', key: true },
    { name: 'Não', key: false },
  ];

  formulario: Formulario = {
    cliente: '',
    qtdUsuarios: 0,
    email: 0,
    vlMensal: 0,
    vlOnboarding: 0,
    qtdContratos: 0,
    observacao: '',
    checked: true,
    checked2: true,
    checked3: true,
    checked4: true,
    checked5: true,

  }

  constructor(
    private svgService: SvgService,
    private sanitizer: DomSanitizer,
  ) {}

  openPrint() {
    window.print();
  }

  changeInput(event: any, idElement: string){
    let campo = event.target.value;
    document.getElementById(idElement)!.innerHTML = idElement == 'observacao' ? `* ${campo}` :`<tspan>${campo.toUpperCase()}</tspan>`;
  }

  changeNomePrincipal(){
    const demoClasses = document.querySelectorAll('.nomePrincipal');
    demoClasses.forEach(element => {
      element.textContent = this.personalizado ? `PLANO ${this.planoEscolhido.toUpperCase()} PERSONALITÉ` : `PLANO ${this.planoEscolhido.toUpperCase()}`;
    });
    if( this.planoEscolhido == 'Premium') document.getElementById('qtdContratos')!.innerHTML = `5 0`;
  }

  changePlano(){
    if(this.planoEscolhido){
      switch (this.planoEscolhido){
        case 'Broker' : {
          let idSvg = [1,2,3,4,5,9,10];
          idSvg.forEach((value,index) => {
            this.getSvgByCase('broker', value, index)
          })
        }break;
        case 'Start' : {
          let idSvg = [1,2,3,4,5,9,10];
          idSvg.forEach((value,index) => {
            this.getSvgByCase('start', value, index)
          })
        }break;
        case 'Light' : {
          let idSvg = [1,2,3,4,5,6,8,9,10];
          idSvg.forEach((value,index) => {
            this.getSvgByCase('light', value,index)
          })
        }break;
        case 'Premium' : {
          let idSvg = [1,2,3,4,5,6,7,8,9,10];
          idSvg.forEach((value,index) => {
            this.getSvgByCase('premium', value,index);
          })
        }
      }
    }

  }

  getSvgByCase(caminho: string, idSvg: any, index: number){
    let path = `${caminho}/proposta-${caminho}${idSvg}`;
    this.svgService.getSvg(path).subscribe((value: any) => {
       this.svgPlano[index] = this.sanitizer.bypassSecurityTrustHtml(value)
    })
  }

  changeDesconto(){
    let date = moment().format('DD/MM/YYYY HH:mm');
    document.getElementById('idDesconto')!.innerHTML = this.selecionarDesconto ?
    `<g class="cls-802">
      <path class="cls-835" d="M148.05,805.19l54.85,38.92a4.29,4.29,0,0,0,7.64-2.08l10.87-44.7Z" transform="translate(15.42 13.25)"/>
      <polygon class="cls-836" points="236.83 810.58 231.61 832.04 163.47 818.43 236.83 810.58"/>
      <path class="cls-811" d="M450.33,805.49v7.27a16.87,16.87,0,0,1-16.87,16.87H226.06l5.11-24.14Z" transform="translate(15.42 13.25)"/>
      <path class="cls-810" d="M148.05,805.19l324.07,1.14a20.39,20.39,0,0,0,15.8-7.5l47-57.65a22.07,22.07,0,0,0,.87-26.76l-33.7-47.27a15.61,15.61,0,0,0-12.71-6.56l-299.11-1.08A25.94,25.94,0,0,0,164.55,682Z" transform="translate(15.42 13.25)"/>
      <path class="cls-834" d="M205.76,794.31a87.58,87.58,0,0,1-24-3.2,58.52,58.52,0,0,1-19.68-9.51l15.23-23.43a45.61,45.61,0,0,0,14.2,7.11,55.11,55.11,0,0,0,16.36,2.47q10.13,0,15.51-3.6a11.22,11.22,0,0,0,5.38-9.88,8.92,8.92,0,0,0-4.16-7.8q-4.16-2.82-14.45-2.8l-33.36.06,19.3-67.92,73.87-.13-5.1,25.41-62.25.1,19.73-14.47-13,45.83-13.8-14.41,22.91,0q21.41,0,32.46,8.33t11.08,24a38.18,38.18,0,0,1-7.26,23.34,46.61,46.61,0,0,1-20,15.22q-12.69,5.32-29,5.36" transform="translate(15.42 13.25)"/>
      <path class="cls-834" d="M305,794.14q-13.29,0-23.08-5.27a36.55,36.55,0,0,1-15.14-15.25q-5.32-9.95-5.35-24.22a96.53,96.53,0,0,1,4.43-29.8,75.52,75.52,0,0,1,12.75-24.26,60.25,60.25,0,0,1,19.55-16.22,53.62,53.62,0,0,1,24.89-5.85q13.29,0,23,5.27a37.24,37.24,0,0,1,15.13,15.25q5.42,9.94,5.44,24.22a94.59,94.59,0,0,1-4.52,29.81,77.57,77.57,0,0,1-12.74,24.25,59.24,59.24,0,0,1-19.47,16.22A53.5,53.5,0,0,1,305,794.14m3.11-26.89a15.33,15.33,0,0,0,11.27-4.92A38.94,38.94,0,0,0,327.36,750a77.72,77.72,0,0,0,4.71-15.78,82.15,82.15,0,0,0,1.55-15.27q0-10.12-3.76-14.43a12.39,12.39,0,0,0-9.88-4.3,15.32,15.32,0,0,0-11.29,4.91,39.1,39.1,0,0,0-7.94,12.38,78.08,78.08,0,0,0-4.7,15.78,82.22,82.22,0,0,0-1.56,15.27q0,10.13,3.76,14.44a12.46,12.46,0,0,0,9.89,4.3" transform="translate(15.42 13.25)"/>
      <path class="cls-834" d="M381.68,704a12.27,12.27,0,0,1-8.77-3.2q-3.41-3.21-3.42-9.1a20.34,20.34,0,0,1,1.86-8.84,14.56,14.56,0,0,1,13.8-8.55,12.19,12.19,0,0,1,8.8,3.2q3.38,3.21,3.38,9.1a20.27,20.27,0,0,1-1.86,8.83A14.44,14.44,0,0,1,381.68,704m-11,24.57L417.28,675l11.55,0-46.5,53.63Zm11.8-31.84a4,4,0,0,0,3.29-1.54,9.43,9.43,0,0,0,1.76-3.79,18.45,18.45,0,0,0,.52-4.32,6.59,6.59,0,0,0-1.07-4.24,3.39,3.39,0,0,0-2.68-1.26,4,4,0,0,0-3.29,1.53,9.41,9.41,0,0,0-1.75,3.76,18.36,18.36,0,0,0-.53,4.36c0,2,.37,3.4,1.11,4.24a3.41,3.41,0,0,0,2.64,1.26m32,32.46a12.19,12.19,0,0,1-8.8-3.2q-3.37-3.21-3.38-9.1a19.93,19.93,0,0,1,1.86-8.8,14.61,14.61,0,0,1,13.79-8.51,12.23,12.23,0,0,1,8.8,3.16q3.38,3.16,3.39,9.06a20.49,20.49,0,0,1-1.86,8.84,14.48,14.48,0,0,1-13.8,8.55m.83-7.19a3.92,3.92,0,0,0,3.25-1.54,9.86,9.86,0,0,0,1.72-3.83,19.53,19.53,0,0,0,.52-4.36,6.53,6.53,0,0,0-1.08-4.24,3.29,3.29,0,0,0-2.6-1.26,4,4,0,0,0-3.29,1.53,9.69,9.69,0,0,0-1.75,3.79,19.17,19.17,0,0,0-.53,4.33,6.82,6.82,0,0,0,1.08,4.28,3.34,3.34,0,0,0,2.68,1.3" transform="translate(15.42 13.25)"/>
      <path class="cls-834" d="M382.74,792.38A26.06,26.06,0,0,1,371.26,790a17.9,17.9,0,0,1-7.59-6.6,18.13,18.13,0,0,1-2.69-9.9,23.08,23.08,0,0,1,3.27-12.29,23.59,23.59,0,0,1,9-8.54,27,27,0,0,1,13.15-3.16,26.32,26.32,0,0,1,11.52,2.31,17.88,17.88,0,0,1,7.55,6.53,18.16,18.16,0,0,1,2.69,9.94,23.24,23.24,0,0,1-3.27,12.32,23.56,23.56,0,0,1-9,8.59,27,27,0,0,1-13.15,3.16m.82-11.56a8.91,8.91,0,0,0,5.12-1.5,10,10,0,0,0,3.47-4.1,13.87,13.87,0,0,0,1.26-6.12,8.4,8.4,0,0,0-2-5.73,7.3,7.3,0,0,0-5.78-2.29,9.17,9.17,0,0,0-5.12,1.46,9.89,9.89,0,0,0-3.48,4.1,14.18,14.18,0,0,0-1.25,6.16,8.14,8.14,0,0,0,2.08,5.85,7.5,7.5,0,0,0,5.74,2.17" transform="translate(15.42 13.25)"/>
      <path class="cls-834" d="M420.68,791.62l-15.15,0,10.62-53.57,41.93-.07-2.36,11.71-26.77,0Zm4.84-30.07,24.72,0-2.36,11.71-24.63,0Z" transform="translate(15.42 13.25)"/>
      <path class="cls-834" d="M464.06,791.55l-15.15,0L459.53,738l41.92-.07-2.35,11.71-26.77,0Zm4.84-30.07,24.71,0-2.35,11.71-24.63,0Z" transform="translate(15.42 13.25)"/>
    </g>
    <text class="cls-837" transform="translate(267.24 835.16)">VÁLIDO POR 48H</text>
    <text class="cls-826" transform="translate(268.42 854.25)">*A partir de ${date}</text>` : '';

  }

  changeChecked(value: any, input: number){
    let incluso = `Incluso na proposta`
    switch (input){
      case 1:
        document.getElementById('prefeitura')!.innerHTML = !value ? `(R$ 50,00 mensais e R$ 500,00 Setup único)` : `(${incluso})`;
        break;
      case 2:
        document.getElementById('seguro')!.innerHTML = !value ? `(R$ 150,00 - Esse módulo vou boniﬁcar pra você)` : `(${incluso})`;
        break;
      case 3:
        document.getElementById('whats')!.innerHTML = !value ? `(R$ 100,00<tspan x="0" y="27.61">mensais com setup de R$ 150,00 investimento único)</tspan>` : `<tspan x="0" y="27.61">(${incluso})</tspan>`;
        break;
      case 4:
        document.getElementById('gestao')!.innerHTML = !value ? `(R$ 50,00 mensais)` : `(${incluso})`;
        break;
      case 5:
        document.getElementById('leads')!.innerHTML = !value ? `(R$ 90,00 mensais)` : `(${incluso})`;
        break;
    }

  }

  resetForm(){
    this.formulario = new Formulario();
    this.planoEscolhido = '';
    this.selecionarDesconto = false;
    this.personalizado = false;
    this.svgPlano = [];
  }

}
