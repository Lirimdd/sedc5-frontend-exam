$(document).ready(function () {
    class Books {
        constructor(type) {
            this.type = type;
        }
    }

    class antology extends novel {
        constructor(title, editor, publisher, year, lenght, stories, isbn, rewiev) {
            this.atitle = title;
            this.aeditor = editor;
            this.apublisher = publisher;
            this.ayear = year;
            this.alenght = lenght;
            this.astories = stories;
            this.aisbn = isbn
            this.arewiev = rewiev;

        }
    }
});
function Book(type, title, author, publisher, year, series, isbn, rewiev){
    this.type = type;
    this.title = title;
    this.author = author;
    this.publisher - publisher;
    this.year = year;
    this.series = series;
    this.isbn = isbn;
    this.rewiev = rewiev;
}
var books = [];
let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("btn");


btn.onclick = function () {
    event.preventDefault();
    modal.style.display = "block";
    $('#myBtn').css('display', 'none');

}

$('#btn').onclick = () => {
    $('#myModal').toggle();
}



$('#btn').on('click', function () {
    let number = $('#num').val();
    $('#num').val("");
    let title = $('#title').val();
    $('#title').val("");
    let editor = $('#editor').val();
    $('#editor').val("")
    let publisher = $('#year').val();
    $('#year').val("");
    let lenght = $('#lenght').val();
    $('#lenght').val("");
    let lenghtElements = $('#content').children().length;
    console.log(lenghtElements);
    let newElement = $('<tr>', { id: lenghtElements });
    let newNum = $('<td>').text(lenghtElements + 1);
    let newTitle = $('<td>').text(title);
    let newEditor = $('<td>').text(editor);
    let newPublisher = $('<td>').text(publisher);
    let newLength = $('<td>').text(lenght);
    $(newElement).append(newNum);
    $(newElement).append(newTitle);
    $(newElement).append(newEditor);
    $(newElement).append(newPublisher);
    $(newElement).append(newLength);
    $('#content').append(newElement);
    let book = new Book('novel',title, editor, publisher, lenght);
    books.push(JSON.stringify(books));
    if(localStorage.getItem('books') == null){
        localStorage.setItem('books',JSON.stringify(books));        
    }
    else{
        let booksLocalStorage = localStorage.getItem('books');
        var booksFromStorage = $.each(JSON.parse(booksFromStorage),function(i,element){
            return JSON.parse(element);
        });
        console.log(booksFromStorage);
        let newBooks = booksFromStorage.concat(books);
        localStorage.setItem('books',newBooks);
    }
    // localStorage.setItem();  
    console.log(localStorage.getItem('books'));
});



$('.close').on('click', function () {
    $('#myModal').hide();
    $('#myBtn').css('display', 'block');
})













