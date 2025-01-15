// Activity 1: Basic Event Handling

//Task 1: Add a click event listener to a button that changes the text content of a paragraph.

document.getElementById("myBttn").addEventListener('click', function(){

    const element = document.getElementById("myPara");
    element.textContent = "Hello World!";
})

//Task 2: Add a double-click event listener to an image that toggles its visibility.

document.getElementById("img").addEventListener('dblclick', function(){

    this.classList.toggle('hidden');
})

// Activity 2: Mouse Events

//Task 3: Add a mouseover event listener to an element that changes its background color.

document.getElementById("colorDiv").addEventListener('mouseover', function(){

    this.style.backgroundColor = 'lightblue';
})

//Task 4: Add a mouseout event listener to an element that resets its background color.


document.getElementById("myElement").addEventListener('mouseout', function(){

    this.style.backgroundColor = 'lightblue';
})

document.getElementById("myElement").addEventListener('mouseover', function(){

    this.style.backgroundColor = 'lightgreen';
})

// Activity 3: Keyboard Events

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

document.getElementById("keyInput").addEventListener('keydown', (event) => {
    console.log('key pressed:', event.key);
})

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

document.getElementById("keyInput").addEventListener('keyup', function(event){
    document.getElementById("inputValue").textContent = this.value;
})

// Activity 4: Form Events

//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.getElementById("myForm").addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(this);
    for( const [key, value] of formData.entries()){
        console.log(`${key} : ${value}`);
    }
});

//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

document.getElementById('dropdown').addEventListener('change', function(){
    document.getElementById('selectedValue').textContent = `Selected: ${this.value}`
})

// Activity 5: Event Delegation

//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

document.getElementById('itemList').addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        console.log('List Item clicked:', event.target.textContent);
    }
})

//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

document.getElementById('parentElement').addEventListener('click', function(event) {
    if(event.target.tagName === 'BUTTON') {
        console.log('Button clicked:', event.target.id);   
    }
})

// Feature Requests

//Feature Request 1: Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.




//Feature Request 2: Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.



//Feature Request 3: Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.



//Feature Request 4: Form Events Script: Create a script that handles form submission and change events on a select dropdown.



//Feature Request 5: Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.