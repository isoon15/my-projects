let inputtext = document.querySelector('#add-book input');

let ul = document.querySelector('ul')

let spandelet = `<span class = "delete">حذف</span>`;

let link = document.querySelector('.button').addEventListener('click',
 function(e){
    let body = document.createElement('span')
    body.className = ('name')
    body.textContent = inputtext.value;
    let li = document.createElement('li');
    li.appendChild(body)
    li.innerHTML += spandelet
    ul.appendChild(li);

    slstorage(inputtext.value);

    e.preventDefault();
    inputtext.value = '';
});

document.addEventListener('DOMContentLoaded', function(e){
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } 
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }

    for(let item of tasks){
        let body = document.createElement('span')
    body.className = ('name')
    body.textContent = item;
    let li = document.createElement('li');
    li.appendChild(body)
    li.innerHTML += spandelet
    ul.appendChild(li);
    }

})

function slstorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } 
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }

    tasks.push(task);
    localStorage.setItem('tasks', tasks);
}

// .......................................................................

let checkbox = document.querySelector('#hide input')

checkbox.addEventListener('change',
function(e){
    if(checkbox.checked){
        ul.style.display = 'none'
    }
    else{
        ul.style.display = 'block'
    }
})
// ......................................................................


ul.addEventListener('click', function(e){
    if(e.target.className === 'delete')
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.children[0].textContent);
})


function removeFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } 
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }

    for (let i =0 ; i < task.length; i++){
        if(tasks[i] === task){
            tasks.splice(i , 1)
        }
    }

    if(tasks.length === 0){
        localStorage.clear();
    } else{
        localStorage.setItem('tasks', tasks)
        
    }

}
// ........................................................................
let searchbox = document.querySelectorAll('input')[0];

searchbox.addEventListener('keyup', function(e){
    for(let book of ul.children){
        if(book.firstElementChild.textContent.indexOf(searchbox.value) !==-1){
            book.style.display = 'block'
        }
        else{
            book.style.display = 'none'
        }
    }
})



// let pagebanner = document.getElementById
// ('page-banner');

// let titles = document.getElementsByClassName
// ('title');


// let lis = document.getElementsByTagName
// ('li')

// // for (let element of lis){
//     // console.log(element);
// // }

// // console.log(lis[0]);

// let qselector = document.querySelector('#page-banner')

// // console.log(qselector);

// qselector = document.querySelectorAll('.title')

// // console.log(qselector);

// qselector = document.querySelectorAll('li')

// // console.log(qselector);

// // for (let element of qselector){
// //     console.log(element);
// // }

// // qselector = document.querySelectorAll('#book-list  li .name')[1];

// // console.log(qselector);

// let result;
// let list = document.querySelector('ul');
// let li = document.querySelectorAll('li')[2];

// result = list.firstElementChild;

// result = list.lastElementChild;

// result = list.childElementCount;

// // in mishe vales ya hamoon father

// result = li.parentElement;

// // result = list.children[1].children[0].innerHTML;
// console.log(result);

// let heading = document.createElement('h2')

// heading.className = 'sepehr'
// // heading.id = 'alaei'
// // heading.setAttribute('sepehr' , 'alaei');

// heading.className += ' alaei'

// heading.innerHTML = `
// <ul>
//     <li>sepehr</li>
//     <li>alaei</li>
// </ul>
// `;

// console.log(heading);

// let newheading = document.createElement('h1')

// newheading.className = 'title'

// newheading.innerHTML = 'لیست کتاب ها';

// let oldheading = document.querySelectorAll('.title')[1];

// let parentheading = document.querySelector('#book-list')

// parentheading.replaceChild(newheading, oldheading);

// // console.log(parentheading);

// let li = document.querySelectorAll('li')[1];
// let ul = document.querySelector('ul');
// // li.remove();
// ul.children[1].remove();
// console.log(li);

// in baray double clicke

// let link = document.querySelector('.button').addEventListener('dblclick',
//  function(e){
//     e.preventDefault();
//     parentt.appendChild(body);
    
//     console.log(e.type);
// });
// let link = document.querySelector('.button').addEventListener('mousedown',
//  function(e){
//     e.preventDefault();
//     parentt.appendChild(body);
    
//     console.log(e.type);
// });
// let link = document.querySelector('.button').addEventListener('mouseup',
//  function(e){
//     e.preventDefault();
//     parentt.appendChild(body);
    
//     console.log(e.type);
// });
// let link = document.querySelector('.button').addEventListener('mouseenter',
//  function(e){
//     e.preventDefault();
//     parentt.appendChild(body);
    
//     console.log(e.type);
// });

// let link = document.querySelector('.button').addEventListener('mouseout',
//  function(e){
//     e.preventDefault();
//     parentt.appendChild(body);
    
//     console.log(e.type);
// });

// let link = document.querySelector('.button').addEventListener('mousemove',
//  function(e){
//     e.preventDefault();
//     parentt.appendChild(body);
    
//     console.log(e.type);
// });

// let newheading = document.createElement('h1')

// newheading.className = 'title'

// let oldheading = document.querySelectorAll('.title')[1];

// let parentheading = document.querySelector('#book-list')


// document.body.addEventListener('mousemove',
// function(e){
//     newheading.innerHTML = `x possision : ${e.offsetX}
//     y possision : ${e.offsetY}`;
//     parentheading.replaceChild(newheading, oldheading);

// })

// inputtext.addEventListener('keyup',
// function(e){
//     console.log(inputtext.value);
// })
// inputtext.addEventListener('focus',
// function(e){
//     console.log("selected");
// })
// inputtext.addEventListener('blur',
// function(e){
//     console.log("unselected");
// })

// localStorage.setItem('sepehr1', 'alaei1');
// localStorage.setItem('sepehr2', 'alaei2');
// localStorage.setItem('sepehr3', 'alaei3');

// localStorage.removeItem('sepehr2');

// localStorage.clear();
// let arr = ['sepehr1','sepehr2'];
// let obj = {name : 'sepehr', age : 15}

// localStorage.setItem('array', arr);

// localStorage.setItem('object', obj);