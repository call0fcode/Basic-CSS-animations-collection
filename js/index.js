/**
* This script changes the metatag theme-color depending on the screen size.
* The metatag theme-color assigns a color of the navigation bar on Chrome for Android.
*/

if (screen.width < 425) { 
 var m = document.createElement('meta'); 
 m.name = 'theme-color'; 
 m.content = '#A8D7BC'; 
 document.head.appendChild(m);
} else { 
 var m = document.createElement('meta'); 
 m.name = 'theme-color'; 
 m.content = '#D66D90'; 
 document.head.appendChild(m);
}