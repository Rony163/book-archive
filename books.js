// Take input From user
function searchBooks() {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';

    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => console.log(data));
}