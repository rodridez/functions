
//creates the function that executes everything
const renderItems = (books) => {
	
	const bookList = document.getElementById('books-place') //creates a variable to look for the HTML ID
	const readingBooks = document.getElementById('readingBooks')

	// Loop through each item in the data array
	books.forEach((item, index) => {
    console.log(item.title)
	let delay = index * 0.1;
	
	let checkboxId = `checkbox_${item.title}`

		if (item.doneReading == true) 
		
		{
			let listItem = 
			`
			<button class="book" style="cursor: grab; width: ${item.pageNumber > 500 ? item.pageNumber / 8 : item.pageNumber / 5}px; height: calc(200px - ${item.pageNumber / 50}px); background-color: ${item.color}; animation-delay: ${delay}s">
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
					<button class="close">&times;</button>
					<div class="form_checkbox">
                            <input type="checkbox" name="${item.title}" id="${checkboxId}" checked>
                            <label class="checkbox-label" for="${checkboxId}">Done reading</label>
                    </div>
				</div>
			</div>
			`

			bookList.insertAdjacentHTML('beforeend', listItem) // effectlive add the HTML? 
		}

		else 
		{
			let listItem = 
			`
			<button class="book-reading" style="cursor: grab; width: ${item.pageNumber > 500 ? item.pageNumber / 8 : item.pageNumber / 5}px; height: calc(200px - ${item.pageNumber / 50}px); background-color: ${item.color}; animation-delay: ${delay}s;">
				<div class="overlay"></div>
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
					<button class="close">&times;</button>
					<div class="form_checkbox">
						<input type="checkbox" name="${item.title}" id="${item.title}">
						<label class="checkbox-label" for="${item.title}">Done reading</label>
					</div>
				</div>
			</div>
			`
			bookList.insertAdjacentHTML('beforeend', listItem) // effectlive add the HTML? 
		}

		
	})

	books.forEach((item) => {
		console.log(item.pageNumber)

		if (item.doneReading == false)
		{
			if (item.pageNumber <= 210) {

			let readingBookItem =
			
			`
			<li id="book-calendar" style="height: calc(2 * ${item.pageNumber}px / 20); background-color: ${item.color};"><p></p></li>

			<div class="book_description_box ">
				<div class="book_description">
					<div class="book_description_img"><img src="${item.coverImg}".png"></div>
					<div class="book_description_text">
						<h2>${item.title}</h2>
						<h3>${item.author}</h3>
						<p>${item.description}</p>
					</div>
					<button class="close">&times;</button>
					<div class="form_checkbox">
						<input type="checkbox" name="${item.title}2" id="${item.title}2">
						<label class="checkbox-label" for="${item.title}2">Done reading</label>
					</div>
				</div>
			</div>
			`

			readingBooks.insertAdjacentHTML('beforeend', readingBookItem)

			}

			else {

			let readingBookItem =
			
			`
			<li id="book-calendar" style="height: calc(2 * ${item.pageNumber}px / 20); background-color: ${item.color};"><p>${item.title}</p></li>

			<div class="book_description_box ">
				<div class="book_description">
					<div class="book_description_img"><img src="${item.coverImg}".png"></div>
					<div class="book_description_text">
						<h2>${item.title}</h2>
						<h3>${item.author}</h3>
						<p>${item.description}</p>
					</div>
					<button class="close">&times;</button>
					<div class="form_checkbox">
						<input type="checkbox" name="${item.title}2" id="${item.title}2">
						<label class="checkbox-label" for="${item.title}2">Done reading</label>
					</div>
				</div>
			</div>
			`
		
			readingBooks.insertAdjacentHTML('beforeend', readingBookItem)
				
			}
		}

	})

	//fuunction to make today's date
	let todaysDate = document.getElementById("todaysDate")

	let today = new Date().getDate();
	
	todaysDate.textContent = today;

	//function to make the book-butotn work
	let switchButton = document.querySelectorAll('.book')
	console.log("you got it!", switchButton)

	switchButton.forEach((pressButton) => {
		
		pressButton.onclick = () => {
			console.log("you are clicking!")
			pressButton.nextElementSibling.classList.toggle('active')
		}
	})

	let switchButton2 = document.querySelectorAll('.book-reading')
	console.log("you got it!", switchButton2)

	switchButton2.forEach((pressButton) => {
		
		pressButton.onclick = () => {
			console.log("you are clicking!")
			pressButton.nextElementSibling.classList.toggle('active')
		}
	})

	let switchButton3 = document.querySelectorAll('#book-calendar')
	console.log("you got it!", switchButton3)

	switchButton3.forEach((pressButton) => {
		
		pressButton.onclick = () => {
			console.log("you are clicking on the book in the calendar!")
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

	//function to open the form

	let openForm = document.querySelector('#book_form_box')
	let formButton = document.querySelectorAll('.add-button')

	formButton.forEach((formButtonPress) => {
	
		formButtonPress.onclick = () => {
			console.log ("you clicked!")
			openForm.classList.toggle('active')
		}
	})

	//fuction to close the form
	let closeForm = document.querySelectorAll('.closeForm')

	closeForm.forEach((closeFormPress) => {

		closeFormPress.onclick = () => {
			openForm.classList.remove('active')
		}
	})

	//function to open the calendar

	let openCal = document.querySelector('#openCal')
	let calBox = document.querySelector('#calendar_box')

	openCal.onclick = () => {
			console.log ("you clicked to open Call!")
			calBox.classList.add('active')
		}
	

	//fuction to close the calendar
	let closeCal = calBox.querySelector('.closeCal')

	closeCal.onclick = () => {
		console.log ("you closed the call!")
			calBox.classList.remove('active')
		}
}



// Fetchs local JSON file
fetch('assets/books.json')
	.then(response => response.json())
	.then(books => {
    console.log (books)
		
    //Calls the Function
		renderItems(books)
	})



