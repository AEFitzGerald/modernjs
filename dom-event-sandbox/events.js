document.querySelector('.clear-tasks').addEventListener('click', onClick);
  function onClick(e){
    //console.log('Hello World')
    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    //Event type
    val = e.type;

    //Timestamp
    val = e.timeStamp;

    // Cords event relative to the window
    val = e.clientY;
    val = e.clientX;

    //coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val)


    console.log(val)
    e.preventDefault();
}