function Book(title, author, genre, quote, pages) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.quote = quote;
	this.pages = pages;
}

let books = [];

// Modal form input fields
const title = document.getElementById('title');
const author = document.getElementById('author');
const genre = document.getElementById('genre');
const quote = document.getElementById('quote');
const pages = document.getElementById('pages');
const imgURL = document.getElementById('img-url');
const readCheckbox = document.getElementById('read')

// All buttons
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const submit = document.querySelector('.modal form button');

const modal = document.querySelector('.modal');

const grid = document.querySelector('.bookshelf .grid');

// Hide or close modal
openModal.addEventListener('click', () => {
	modal.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
	modal.style.display = 'none';
})

// add book to bookshelf
submit.addEventListener('click', (e) => {
	e.preventDefault()
	const book = new Book(title.value, author.value, genre.value, quote.value, pages.value);
	books.push(book);

	if (title.value && author.value && genre.value && quote.value && pages.value) {
		// Creating card
		const card = document.createElement('div');
		card.classList.add('card');
		card.style.backgroundImage = imgURL.value ? `url(${imgURL.value})` : "url('imgs/book.svg')";

		const bookDetails = document.createElement('div');
		bookDetails.classList.add('book-details');
		bookDetails.innerHTML = `
			<div>
				<p>${book.title}</p>
				<p>${book.author}</p>
				<p>${book.genre}</p>
				<p>${book.quote}</p>
				<p>${book.pages}</p>
			</div>
			<div class="read">
				<input type="checkbox" ${readCheckbox.checked ? "checked" : ""}>
				<label>Read</label>
			</div>
		`;

		card.appendChild(bookDetails);
		grid.appendChild(card);
		
		// Close modal
		modal.style.display = 'none';

		// Emptify form
		title.value = "";
		author.value = "";
		genre.value = "";
		quote.value = "";
		pages.value = "";
		imgURL.value = "";
		readCheckbox.checked = false;

	}
})
