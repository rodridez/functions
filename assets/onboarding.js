
	//fucntion for the next steps on onboarding
	let nextStep = document.querySelectorAll(".next_step")
	console.log(nextStep)

	nextStep.forEach((nextStepPressed) => {

		nextStepPressed.onclick = () => {
			console.log("You Clicked Next!")
			let bookDescriptionBox = nextStepPressed.closest('.book_description_box')

			//bookDescriptionBox.classList.remove('active')
			bookDescriptionBox.nextElementSibling.classList.toggle('active')
		}
	})


	//function to start the onboarding

	let startOnboarding = document.querySelector("#startOnboarding")
	let firstStep = document.querySelector("#firstStep")

	startOnboarding.onclick = () => {
		firstStep.classList.toggle('active')
	}
