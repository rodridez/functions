
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

		let listItem = //I was working here >> 
		`
        <button class="book" style="cursor: grab; width: ${item.pageNumber > 500 ? item.pageNumber / 8 : item.pageNumber / 5}px; height: calc(200px - ${item.pageNumber / 50}px); background-color: ${item.color}" onmouseout="this.style.width='75px'; this.style.backgroundColor='black';">
          <p>${item.title}</p> 
        </button>

		<div class="book_description_box ">
			<div class="book_description">
				<div class="book_description_img"><img src="${item.coverImg}".png"></div>
				<div class="book_description_text">
					<h2>${item.title}</h2>
					<h3>${item.author}</h3>
					<p>${item.description}</p>
				</div>
				<button class="close">X</button>
			</div>
		</div>
		`

		bookList.insertAdjacentHTML('beforeend', listItem) // effectlive add the HTML? 
	})

	//function to make the book-butotn work
	let switchButton = document.querySelectorAll('.book')
	console.log("you got it!", switchButton)

	switchButton.forEach((pressButton) => {
		
		pressButton.onclick = () => {
			console.log("you are clicking!")
			pressButton.nextElementSibling.classList.toggle('active')
		}
	})

	//fuction to close the lightbox
	let switchOff = document.querySelectorAll('.close')

	switchOff.forEach((closeButton) => {

		closeButton.onclick = () => {
			closeButton.parentElement.parentElement.classList.remove('active')
		}
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




	// let sarahExampleVariable1 = document.querySelectorAll('step_1')

	// sarahExampleVariable1.forEach((createASeparateItem) => {
		
	// 	createASeparateItem.onclick = () => {

	// 		createASeparateItem.classList.toggle('active')
	// 	}
	// })

