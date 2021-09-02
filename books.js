// Take input From user
function searchBooks() {
    document.getElementById('not-found').style.display = 'none';
    const searchField = document.getElementById('input-field');
    // Clear the input field
    const searchText = searchField.value;
    // For check empty or not
    if (searchText === '') {
        alert('PLEASE ENTER A BOOK NAME');
    }
    else {
        searchField.value = '';

        fetch(`https://openlibrary.org/search.json?q=${searchText}`)
            .then(res => res.json())
            .then(data => displayBook(data));
    }

}
// Get data from the search text
const displayBook = booksInfo => {
    const books = booksInfo.docs;
    const container = document.getElementById('result');
    // Clear the container
    container.textContent = '';
    // Display total books found
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<p class="text-center text-info mt-3">Search Result Found: ${booksInfo.numFound}</p>`;
    container.appendChild(newDiv);

    // Display books information
    const newContainer = document.getElementById('book-data');
    newContainer.textContent = '';

    if (booksInfo.numFound === 0) {
        document.getElementById('not-found').style.display = 'block';
        document.getElementById('result').style.display = 'none';
    }
    else {
        document.getElementById('result').style.display = 'block';
        books.forEach(bookInfo => {
            // console.log(bookInfo);
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="col">
                <div class="card">
                    <img src="https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg" class="card-img-top    img-fluid img-size" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${bookInfo.title}</h5>
                        <p class="card-text">Author Name: ${bookInfo.author_name}</p>
                        <p class="card-text">First Published: ${bookInfo.first_publish_year}</p>
                    </div>
                </div>
                `;
            newContainer.appendChild(div);
        });
    }

}