
//creates the function that executes everything
const renderItems = (books) => {
	
	const bookList = document.getElementById('books-place') //creates a variable to look for the HTML ID

	// Loop through each item in the data array
	books.forEach((item) => {
    console.log(item.title)

		//let conditionalClass = '' // Set an empty class variable

		// if (!item.alsoWasWriter) { // Conditional if this is `false` (“not true”)
		// 	conditionalClass = 'faded' // Update the variable
		// }

		let listItem =
			`
        <div class="book">
          <div class="book-inner"><p>${item.title}</p></div>
        </div>

			`

		bookList.insertAdjacentHTML('beforeend', listItem) // effectlive add the HTML? 
	})
}



// Fetchs local JSON file
fetch('assets/books.json')
	.then(response => response.json())
	.then(books => {
    console.log (books)
		
    //Calls the Function
		renderItems(books)
	})
