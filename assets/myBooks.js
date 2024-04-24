
//creates the function that executes everything
const renderItems = (books) => {
	
	const bookList = document.getElementById('books-place') //creates a variable to look for the HTML ID
	const readingBooks = document.getElementById('readingBooks')

	// Loop through each item in the data array
	books.forEach((item, index) => {
	console.log(item.title)
	let delay = index * 0.1
	
	let checkboxId = `checkbox_${item.title}`

		if (item.doneReading == true) // this is for if you are done with the book
		
		{
			let listItem = 
			`
			<button class="book" style="cursor: grab; width: ${item.pageNumber > 500 ? item.pageNumber / 8 : item.pageNumber / 5}px; height: calc(200px - ${item.pageNumber / 50}px); background-color: ${item.color}; animation-delay: ${delay}s">
				<div class="overlay hidden"></div>
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
					<div class="book_side">
						<button class="close">&times;</button>
						<button class="shareBook"><img src="assets/share.png"></img></button>
					</div>
					<div class="form_checkbox">
							<input type="checkbox" name="${item.title}" id="${checkboxId}" checked>
							<label class="checkbox-label" for="${checkboxId}">Done reading</label>
					</div>
				</div>
			</div>
			`

			bookList.insertAdjacentHTML('beforeend', listItem) // effectlive add the HTML? 
		}

		else //this is if you are still reading the book
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
					<div class="book_side">
						<button class="close">&times;</button>
						<button class="shareBook"><img src="assets/share.png"></img></button>
					</div>
					<div class="form_checkbox">
						<input type="checkbox" name="${item.title}" id="${item.title}">
						<label class="checkbox-label" for="${item.title}">Done reading</label>
					</div>
				</div>
			</div>
			`
			bookList.insertAdjacentHTML('beforeend', listItem) // effectlive add the HTML? 
		}

			// share function for the book
			const shareButtons = document.querySelectorAll('.shareBook')

			shareButtons.forEach((button) => {
		
				button.onclick = () =>  {
					console.log("you clicked to share!")
			
					let url = window.location.href
					let encodedUrl = encodeURIComponent(url)

					let message = `Hey! Look at what I am reading: ${item.title}. Check it out:`

					let encodedMessage = encodeURIComponent(message)
					let whatsappLink = `https://web.whatsapp.com/send?text=${encodedMessage} ${encodedUrl}`

					window.open(whatsappLink, '_blank')
				}
			})
		
	})

	//now for adding books to the calendar
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
					<div class="book_side">
						<button class="close">&times;</button>
						<button class="shareBook"><img src="assets/share.png"></img></button>
					</div>
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
					<div class="book_side">
						<button class="close">&times;</button>
						<button class="shareBook"><img src="assets/share.png"></img></button>
					</div>
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

	let today = new Date().getDate()
	
	todaysDate.textContent = today

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
			closeButton.parentElement.parentElement.parentElement.classList.remove('active')
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

	// share function for the whole page
	const shareButton = document.querySelector('#sharePage')

	shareButton.onclick = () => {
		console.log("you clicked to shar page!")
	
			let url = window.location.href
			let encodedUrl = encodeURIComponent(url)

			let message = `Hey! Look at my book collection:`

			let encodedMessage = encodeURIComponent(message)
			let whatsappLink = `https://web.whatsapp.com/send?text=${encodedMessage} ${encodedUrl}`

			window.open(whatsappLink, '_blank')
	}

	
}



//trying to play with the live form thingy
const submitBook = document.querySelector('form')
const bookList = document.getElementById('books-place')
		
submitBook.onsubmit = (event) => {
	event.preventDefault()

	let bookTitle = document.getElementById('book-title')
	let bookAuthor = document.getElementById('author')
	let bookPageNumber = document.getElementById('page-number')
	let bookCoverImg = document.getElementById('cover-image')
	let bookDescription = document.getElementById('description')
	let bookSpineColor = document.getElementById('spine-color').value
	let bookDoneReading = document.getElementById('done_reading').checked

	let buttonClass = bookDoneReading ? 'book' : 'book-reading'
	//let backgroundColor = bookDoneReading ? bookSpineColor : '#f1f7f7'

	let listItem = 
		`
		<button class="${buttonClass}" style="cursor: grab; width: ${bookPageNumber.value > 500 ? bookPageNumber.value / 8 : bookPageNumber.value / 5}px; height: calc(200px - ${bookPageNumber.value / 50}px); background-color: ${bookSpineColor};">
			<div class="overlay"></div>
			<p>${bookTitle.value}</p> 
		</button>

		<div class="book_description_box ">
			<div class="book_description">
				<div class="book_description_img"><img src="${bookCoverImg.value}".png"></div>
				<div class="book_description_text">
					<h2>${bookTitle.value}</h2>
					<h3>${bookAuthor.value}</h3>
					<p>${bookDescription.value}</p>
				</div>
				<div class="book_side">
					<button class="close">&times;</button>
					<button class="shareBook"><img src="assets/share.png"></img></button>
				</div>
				<div class="form_checkbox">
						<input type="checkbox" name="newbook" id="newbook" ${bookDoneReading ? 'checked' : ''}>
						<label class="checkbox-label" for="newbook">Done reading</label>
				</div>
			</div>
		</div>
		`
		bookList.insertAdjacentHTML('afterbegin', listItem)

		if (!bookDoneReading) {
			
			let readingBooks = document.getElementById('readingBooks')
			let readingBookItem =
				
				`
				<li id="book-calendar" class="new_book" style="height: calc(2 * ${bookPageNumber.value}px / 20); background-color: ${bookSpineColor};"><p>${bookTitle.value}</p></li>
	
				<div class="book_description_box">
					<div class="book_description">
						<div class="book_description_img"><img src="${bookCoverImg.value}".png"></div>
						<div class="book_description_text">
							<h2>${bookTitle.value}</h2>
							<h3>${bookAuthor.value}</h3>
							<p>${bookDescription.value}</p>
						</div>
						<div class="book_side">
							<button class="close">&times;</button>
							<button class="shareBook"><img src="assets/share.png"></img></button>
						</div>
						<div class="form_checkbox" id="${bookTitle.value}">
							<input type="checkbox" name="${bookTitle.value}2" id="${bookTitle.value}2">
							<label class="checkbox-label" for="${bookTitle.value}2">Done reading</label>
						</div>
					</div>
				</div>
				`
	
				readingBooks.insertAdjacentHTML('beforeend', readingBookItem)

			}

		

		let openForm = document.querySelector('#book_form_box')
		openForm.classList.remove('active')


		//function to open the lightbox for an added book???
		let switchButton = document.querySelectorAll('.book')

		switchButton.forEach((pressButton) => {
		
			pressButton.onclick = () => {
				console.log("you are clicking!")
				pressButton.nextElementSibling.classList.toggle('active')
			}
		})

		let switchButton2 = document.querySelectorAll('.book-reading')

		switchButton2.forEach((pressButton) => {
		
			pressButton.onclick = () => {
				console.log("you are clicking!")
				pressButton.nextElementSibling.classList.toggle('active')
			}
		})

		let switchButton3 = document.querySelectorAll('#book-calendar')

		switchButton3.forEach((pressButton) => {
			
			pressButton.onclick = () => {
				pressButton.nextElementSibling.classList.toggle('active')
			}
		})

		//fuction to close the lightbox <--- this is annoying
		let switchOff = document.querySelectorAll('.close')

		switchOff.forEach((closeButton) => {

			closeButton.onclick = () => {
				closeButton.parentElement.parentElement.parentElement.classList.remove('active')
			}
		})

		
		//now trying to change classes with the check button
		const formCheckboxes = document.querySelectorAll('.form_checkbox input[type="checkbox"]')


		formCheckboxes.forEach((checkbox) => {
			checkbox.addEventListener('change', function() {

				const checkboxId = this.id
				const parentBox = this.parentElement.parentElement.parentElement.previousElementSibling

				const bookButton = document.getElementById(checkboxId)
				let overlay = document.querySelector('.overlay')

				//this if is to remove the book from the calendar
				if (parentBox.classList.contains('new_book')) {
					parentBox.classList.add('hidden')
				}

				// this if is to change the book to book-reading and vice verse
				if (this.checked) {
					bookButton.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('book-reading')
					bookButton.parentElement.parentElement.parentElement.previousElementSibling.classList.add('book')
					overlay.classList.toggle('hidden')
				} else {
					bookButton.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('book')
					bookButton.parentElement.parentElement.parentElement.previousElementSibling.classList.add('book-reading')
				}

			})
		})
	

	submitBook.reset()
}



// Fetchs local JSON file
fetch('assets/books.json')
	.then(response => response.json())
	.then(books => {
	console.log (books)
		
	//Calls the Function
		renderItems(books)
	})



