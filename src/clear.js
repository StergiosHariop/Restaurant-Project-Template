export function clear(){
    const container = document.getElementById('content');
    while(container.childElementCount > 2){
        container.lastChild.remove();
    }   
}