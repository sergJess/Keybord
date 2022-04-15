import nodeCreator from '../helpers/node-creator';
export default class Keyboard{
  private parentNode:HTMLElement;
  private keyboardInner = nodeCreator({elem: document.createElement('div'), classList:['keyboard-inner']})
  constructor(parent){
this.parentNode = parent;
this.parentNode.append(this.keyboardInner);
  }
  
}