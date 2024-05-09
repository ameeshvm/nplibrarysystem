let index=0

let bookNumber = [];
let bookTitle = [];
let bookAuthor = [];
let publicationDate = [];

function addBook(){ // nts: only need indexing for this function

    document.getElementById('bookForm').addEventListener('submit', function(event) {
        event.preventDefault();

        alert(index);

        bookNumber[index] = document.getElementById('BookNumber').value;
        bookTitle[index] = document.getElementById('BookTitle').value;
        bookAuthor[index] = document.getElementById('BookAuthor').value;
        publicationDate[index] = document.getElementById('PublicationDate').value;
        let Action = document.getElementById('Action').checked;
        let Adventure = document.getElementById('Adventure').checked;
        let Biography = document.getElementById('Biography').checked;
        let Fiction = document.getElementById('Fiction').checked;
        let Nonfiction = document.getElementById('Non-fiction').checked;
        index++;

        alert(`The following information has been inputted:
Book Number: ${bookNumber}
Book Title: ${bookTitle}
Book Author: ${bookAuthor}
Publication Date: ${publicationDate}
Genre: Action ${Action}
Genre: Adventure ${Adventure}
Genre: Biography ${Biography}
Genre: Fiction ${Fiction}
Genre: Non- fiction ${Nonfiction}`);

    document.getElementById('bookForm').reset();

    });

    document.getElementById('cancelButton').addEventListener('click', function() {
        document.getElementById('bookForm').reset();
    });
}

function checkoutBook(){
    
    document.getElementById('bookForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let bookNumber = document.getElementById('BookNumber').value;
        let bookTitle = document.getElementById('BookTitle').value;
        let byodNumber = document.getElementById('BYODNumber').value;

        alert(`The following information has been inputted:
Book Number: ${bookNumber}
Book Title: ${bookTitle}
Student/Teacher Number: ${byodNumber}`);
    });

    document.getElementById('cancelButton').addEventListener('click', function() {
        document.getElementById('bookForm').reset();
    });
}

function deleteBook(){

    document.getElementById('bookForm').addEventListener('submit', function(event) {
        event.preventDefault();


        let bookNumber = document.getElementById('BookNumber').value;
        let bookTitle = document.getElementById('BookTitle').value;


        alert(`The following information has been inputted:
Book Number: ${bookNumber}
Book Title: ${bookTitle}`);
    });

    document.getElementById('cancelButton').addEventListener('click', function() {
        document.getElementById('bookForm').reset();
    });
}

function returnBook(){
    
    document.getElementById('bookForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let bookNumber = document.getElementById('BookNumber').value;
        let bookTitle = document.getElementById('BookTitle').value;

        alert(`The following information has been inputted:
Book Number: ${bookNumber}
Book Title: ${bookTitle}`);
    });

    document.getElementById('cancelButton').addEventListener('click', function() {
        document.getElementById('bookForm').reset();
    });

}

