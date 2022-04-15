type nodeCreating = {
  elem:HTMLElement,
  classList: string[],
  id?: string,
}
export default function nodeCreator(node:nodeCreating):HTMLElement {
const elem = node.elem;
const length = node.classList.length;
if(length){
  node.classList.map((item:string)=>{
    elem.classList.add(item);
  });
}
if(node.id){
  elem.setAttribute('id', node.id);
}
return elem;
}