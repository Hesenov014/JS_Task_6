const first = {x: 4, y: 5, z: 6};  
const second = Object.assign({x: 5, z: 6, w: 7}, first);  
document.write(second.z + "</br>");
document.write(second.w + "</br>");
document.write(second.x);