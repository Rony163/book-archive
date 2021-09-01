// Take input From user
function searchBooks() {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';

    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => displayBook(data.docs));
}

const displayBook = booksInfo => {
    const container = document.getElementById('result');
    booksInfo.forEach(bookInfo => {
        console.log(bookInfo);
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>Book Name: ${bookInfo.title}</h2>
        <h3>Author Name: ${bookInfo.author_name[0]} </h3>
        `;
        container.appendChild(div);
    })
}