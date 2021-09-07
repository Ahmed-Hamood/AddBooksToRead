document.addEventListener('DOMContentLoaded' , function(){
  
});

let check = document.querySelector('#search-books input');

check.removeAttribute('class');

//const list = document.querySelector('#book-list ul li');//only first <li> selected
const list = document.querySelector('#book-list ul');
 
// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){ // no need this line

    const TheList = e.target.parentElement; // TheList = <li>
   
    
    // store parent element <li> in TheList 
    // event click happen in <span> child which it's parent is <li>
    
    TheList.parentNode.removeChild(TheList);
    //or
    //TheList.parentElement.removeChild(TheList);
    // in parent ul  remove <li> child where it occurs
  }
});
 
// document.getElementById('add').addEventListener('click' , function(e){

//    e.preventDefault();

//   let book_name = document.getElementById('txt').value;
//  if( book_name != ''){
//     document.querySelector('#book-list ul ').innerHTML += 
//     `<li>
//     <span class="name">${book_name}</span>
//     <span class="delete">delete</span>
//   </li>`;

//   document.getElementById('txt').value ='';
//  }
//  else{
//    alert('no book');
//  }
 
// });

let content = document.querySelector('#book-list ul');
let addform = document.forms['add-book'];

addform.addEventListener('submit' , function(e){

   e.preventDefault();

   // get input field value
   let value = addform.querySelector('input[type="text"]').value; // get input value

   // create Element

   let li = document.createElement('li');
   let BookName = document.createElement('span');
   let DeleteBtn = document.createElement('span');

   // add text content and class to each element
     DeleteBtn.textContent = 'delete';
     DeleteBtn.classList.add('delete');

     BookName.textContent = value;
     BookName.classList.add('name');

     // add spans to li
   li.appendChild(BookName);
   li.appendChild(DeleteBtn);
   content.appendChild(li);
});

let checkbox = document.getElementById('hidechk');
checkbox.addEventListener('change' , function(e){

    if(checkbox.checked){ //or  e.target.checked
       list.style.display = 'none';
    }else{
      list.style.display = 'initial';
    }


});


let search = document.forms['search-books'].querySelector('input');

search.addEventListener('keyup' , function(e){

   let searchget = e.target.value.toLowerCase();

   let books = list.getElementsByTagName('li');

   Array.from(books).forEach(function (b){

     let title = b.firstElementChild.textContent;

     if(title.toLowerCase().indexOf(searchget) != -1){
      b.style.display = 'block';
     }else{
      b.style.display = 'none';
     }
   });


});

