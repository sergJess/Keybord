import nodeCreator from '../helpers/node-creator';
export default class App{
  private root = nodeCreator({elem: document.createElement('div'), classList: [], id: 'root'});
  parentNode:HTMLElement;
  constructor(parent:HTMLElement){
this.parentNode = parent;
  }
  start():void{
    this.parentNode.append(this.root);
  }
}