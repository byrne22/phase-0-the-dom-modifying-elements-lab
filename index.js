// Write your code here!

  
// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

//'newHeader' variable that points to node 'h1#victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader);
 
//Insert message in the h1 element
newHeader.textContent += "Byron is the champion";