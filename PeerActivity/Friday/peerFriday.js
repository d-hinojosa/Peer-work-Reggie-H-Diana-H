// 1. Find two new examples of event handlers that you haven’t heard of before. What are they called and what do they do?

// animationend	-The event occurs when a CSS animation has completed
// canplay	        -The event occurs when the browser can start playing the media (when it has buffered enough to begin)
// abort	        -The event occurs when the loading of a media is aborted



// 2. What are three different methods to have JavaScript work with events?
// target, the DOM element that originated the event
// type, the type of event
// stopPropagation(), called to stop propagating the event in the DOM


// 3. Create a page with a button that when clicked, will change the background color to a randomly selected color. 

function changeColor() {
 
   let color = Math.floor(Math.random() * 5);
   console.log(color); 

   switch(color) {
        case 1:
            return document.getElementById('changeColor').style.color = "pink";
        case 2:
            return document.getElementById('changeColor').style.color = "red";
        case 3:
            return document.getElementById('changeColor').style.color = "green";
        case 4:
            return document.getElementById('changeColor').style.color = "yellow";
        case 5:
            return document.getElementById('changeColor').style.color = "blue";
        default:
            return document.getElementById('changeColor').style.color = "purple";
    }  

}



// 4. Create a function in JS to assign and use the onmouseover event handler for an image. When you mouse over this image, make a description appear next to it. 
function description() {
   document.getElementById('main').innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, aliquam corrupti quibusdam, explicabo minus at repudiandae dolores beatae ut hic fugit aliquid. Molestiae labore eos adipisci asperiores quidem quia architecto!'
   
   document.getElementById("main").style.transition = "2s ease-in-out";
   //document.getElementById("mango").style.transition = "all 2s";
    
}
