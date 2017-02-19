$(document).ready(function(){
    let books = localStorage.getItem('books');
    let bookArray = books.split("[^{,]+),([^}]+")
    console.log(bookArray);    
})