// Activity 1: Selecting and Manipulating Elements

// Task 1 - Select an HTML element by its ID and change its text content.

document.getElementById('header').textContent = 'New Header Text';

// Task 2 - Select an HTML element by its class and change its background color.

document.querySelector('.content').style.backgroundColor = 'lightblue';

// Activity 2: Creating and Appending Elements

// Task 3 - Create a new `div` element with some text content and append it to the body.

const newDiv = document.createElement('div');    // Create a new div element
newDiv.textContent = 'New Div Element';          // Add text content to the div
document.body.appendChild(newDiv) // Append the div to the body


// Task 4 - Create a new `li` element and add it to an existing `ul` list.

const newLi = document.createElement('li');      // Create a new li element
newLi.textContent = 'New List Item';              // Add text content to the li
document.getElementById('myList').appendChild(newLi); // Append the li to the ul

// Activity 3: Removing Elements

// Task 5 - Select an HTML element and remove it from the DOM.

const elemenToRemove = document.getElementById('itemRemove')
if(elemenToRemove){
    elemenToRemove.remove();
}

// Task 6 - Remove the last child of a specific HTML element.

const parentElement = document.getElementById('myList');
if( parentElement.lastElementChild){
    parentElement.lastElementChild.remove(); // Remove the last child of the
}

// Activity 4: Modifying Attributes and Classes

// Task 7 - Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).

document.getElementById('image').setAttribute('src', 'https://images.pexels.com/photos/30145999/pexels-photo-30145999/free-photo-of-traditional-turkish-coffee-pouring-ceremony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');// Change the src attribute of the image

// Task 8 - Add and remove a CSS class to/from an HTML element.

const headerElement = document.getElementById('header');
headerElement.classList.add('newClass'); // Add a new class to the header
headerElement.classList.remove('content'); // Remove the class from the header

// Activity 5: Event Handling

// Task 9 - Add a click event listener to a button that changes the text content of a paragraph.

document.getElementById('myButton').addEventListener('click', function(){
    document.getElementById('myParagraph').textContent = 'Button Clicked!'
});

// Task 10 - Add a mouseover event listener to an element that changes its border color.

document.getElementById('hoverElement').addEventListener('mouseover', function(){
    this.style.borderColor = 'red';
    this.style.borderStyle = 'solid';
});

// Feature Requests

// 1. Text Content Manipulation Script - Write a script that selects an HTML element by its ID and changes its text content.

function changeTextContext(elementID , newText){

    const element = document.getElementById(elementID);
    if( element ) { 
        element.textContent = newText;
    }
}

changeTextContext('header', 'Updated Header Text');

// 2. Element Creation Script - Create a script that demonstrates creating a new `div` element and appending it to the body.

function createNewDiv(){
    
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Text Updated with Script';
    document.body.appendChild(newDiv);
}

createNewDiv();

// 3. Element Removal Script - Write a script that selects an HTML element and removes it from the DOM.

function removeElement(elementId){

    const element = document.getElementById(elementId);
    if (element){
        element.remove();
    }

}

removeElement('itemToRemove')

// 4. Attribute Modification Script - Create a script that changes the attributes of an HTML element.

function changeElementAttribute(elementId, attribute, newValue){

    const element = document.getElementById(elementId);
    if (element) {
        element.setAttribute(attribute, newValue);
    }
}

changeElementAttribute('image', 'src', 'https://images.pexels.com/photos/16480801/pexels-photo-16480801/free-photo-of-top-view-of-a-cup-filled-with-coffee-beans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

// 5. Event Handling Script - Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

function addClickListenerToButton(buttonId, paragraphId){

    const button = document.getElementById(buttonId)
    const paragraph = document.getElementById(paragraphId)
    if(button && paragraph) {
        button.addEventListener('click', function(){
            paragraph.textContent = 'Button was clicked! (Script)'
        });
    }

}

addClickListenerToButton('myButton', 'myParagraph');

function addMouseOverListenerToButton(elementId){

    const element = document.getElementById(elementId)

    if(element) {
        element.addEventListener('mouseover', function(){
            this.style.borderColor = 'blue';
            this.style.borderStyle = 'solid';
        });
    }

}

addMouseOverListenerToButton('hoverElement');