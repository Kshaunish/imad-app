//console.log('Loaded!');
var button = document.getElementById('counter');
button.onclick = function () {
    //Make a request to the counter endpoint
    //Capture and store the response in a variable
    //Render the variable in the correct span
    counter  = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};