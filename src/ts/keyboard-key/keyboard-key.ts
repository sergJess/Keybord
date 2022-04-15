import nodeCreator from '../helpers/node-creator';
type KeySize ={
  size:string
}
export type KeyInput = {
  size: string;
  text: string;
  click: () => void;
}
export class KeyboardKey{
  private parentNode:HTMLElement;
  private onclickFunction:()=> void;
  private key = nodeCreator({elem:document.createElement('div'), classList: ['keyboard-key']}); 
  constructor(parent:HTMLElement, clickFunction:()=> void){
this.parentNode = parent;
this.onclickFunction = clickFunction;
this.key.onclick = ():void => {
  this.onclickFunction();
}
  }
  setTextContent(text: string):void{
this.key.textContent = text;
  }
  setSize(size: KeySize):void{
this.key.classList.add(`keyboard-key__${size}`);
  }
  render():void{
    this.parentNode.append(this.key);
  }
}