/*jshint esversion: 6 */
//Bootstrap Modal
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

let clickedTech = [];

//Focus on buttons
function focusOn(button) {
	//Get courses and projects on focus
	let coursesAndProjects = [];
	coursesAndProjects = Array.prototype.concat.apply(coursesAndProjects, document.getElementsByClassName("course"));
	coursesAndProjects = Array.prototype.concat.apply(coursesAndProjects, document.getElementsByClassName("project"));

	//Handling the highlighting on click and sizing the buttons
	let className = button.getAttribute("class");
	if (className.includes("btn-outline-warning")) {
		button.className = "btn btn-dark btn-shadow px-3 my-2 ml-0 text-left mr-1 shadow-none";
		clickedTech.splice(clickedTech.indexOf(button.innerText.toLowerCase()), 1);
	} else {
		button.className = "btn btn-dark btn-shadow px-3 my-2 ml-0 text-left mr-1 btn-lg btn-outline-warning ";
		clickedTech.splice(0, 0, button.innerText.toLowerCase());
	}
	highlightRelated(coursesAndProjects, clickedTech);
}

function highlightRelated(coursesAndProjects, clickedTech) {
	Object.entries(coursesAndProjects).forEach((element) => {
		const [key, value] = element;

		let currTechStack = coursesAndProjects[key].attributes["data-tech"].textContent.toLowerCase().split(",");

		//highlighting/dehighlighting the courses and project that match/not match
		const foundSome = currTechStack.some((r) => clickedTech.includes(r));
		if (foundSome) {
			coursesAndProjects[key].classList.add("btn-outline-warning");
		} else {
			coursesAndProjects[key].classList.remove("btn-outline-warning");
			coursesAndProjects[key].classList.remove("btn-outline-success");
		}
		const foundEvery = currTechStack.every((r) => clickedTech.includes(r));
		if (foundEvery) {
			coursesAndProjects[key].classList.remove("btn-outline-warning");
			coursesAndProjects[key].classList.add("btn-outline-success");
		}
		if (clickedTech == 0) {
			coursesAndProjects[key].classList.remove("btn-outline-warning");
			coursesAndProjects[key].classList.remove("btn-outline-success");
		}
	});
}

//Function that receives the data from the button and appends the icons and paragraph
function addIcons(courseButton) {
	//DOM elements
	let iconsElement = document.getElementById("icons");
	let synopsisElement = document.getElementById("synopsis");
	let titleElement = document.getElementById("offcanvasWithBothOptionsLabel");

	//If there is no synopsis fill with lorem
	if (!courseButton.attributes["data-synopsis"].textContent) {
		courseButton.attributes["data-synopsis"].textContent +=
			"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?";
	}
	//Data
	let synopsis = courseButton.attributes["data-synopsis"].textContent.split(",");
	let tech = courseButton.attributes["data-tech"].textContent.split(",");

	//HTML elements get their content
	iconsElement.innerHTML = generateIcons(tech);
	synopsisElement.innerHTML = synopsis;
	titleElement.innerHTML = courseButton.innerText;
}

//Function that returns the icon's html
function generateIcons(tech) {
	let techStack = "";
	//Case-specific hack, i would have to implement some big architectural changes to my site in order to avoid this, i will definetly do a better architecture next time.
	if (tech[0] === "C C++ C#") tech = ["C", "Cplusplus", "Csharp"];
	Object.entries(tech).forEach((tech) => {
		const [key, value] = tech;

		techStack += `<img class="img-fluid"  onerror="this.onerror=null;this.src='img/iconos/placeholder.png';" src="img/iconos/${value.toLowerCase()}.png" title="${value}">`;
	});
	return techStack;
}

//AutoTyping in the Landing area
let landingAsideText = document.getElementById("landingAsideText");
let typewriter = new Typewriter(landingAsideText, {
	loop: true,
});

typewriter
	.typeString("Systems Analyst Student")
	.pauseFor(3500)
	.deleteAll()
	.typeString("Selftaught Developer")
	.pauseFor(3500)
	.deleteChars(9)
	.typeString("C1 English User")
	.pauseFor(3500)
	.start();

//Whats my age again? function
let landingAgeText = document.getElementById("landingAgeText");
function calculate_age(dob) {
	let diff_ms = Date.now() - dob.getTime();
	let age_dt = new Date(diff_ms);

	return Math.abs(age_dt.getUTCFullYear() - 1971);
}
landingAgeText.textContent = calculate_age(new Date(1992, 2, 8));

//Highlight / Dehighlight stuff
function highlightTechs(selectedTech) {
	//Highlight the tech related to the course or project
	let totalTech = [];
	let courseTech = selectedTech.attributes["data-tech"].textContent.toLowerCase().split(",");
	document
		.getElementById("tech")
		.querySelectorAll(".btn")
		.forEach(function (Button) {
			Button.classList.remove("btn-outline-success");
			if (courseTech.indexOf(Button.textContent.toLowerCase()) != -1) {
				Button.classList.add("highlightGreen");
				selectedTech.classList.add("btn-lg");
			}
			totalTech.push(Button.textContent.toLowerCase());
		});
}

function deHighlightTechs(selectedTech) {
	document
		.getElementById("courses&projects")
		.querySelectorAll(".btn")
		.forEach(function (CoursesProjectsButton) {
			if (CoursesProjectsButton.textContent == CoursesProjectsButton.textContent) {
				CoursesProjectsButton.classList.remove("highlightGreen");
				selectedTech.classList.remove("highlightGreen", "btn-lg");
			}
		});
	document
		.getElementById("tech")
		.querySelectorAll(".btn")
		.forEach(function (techButton) {
			techButton.classList.remove("highlightGreen");
		});
}

//About's accordions toggle + -
let svgIconPlus = ` <svg id="svgPlus" class="svg-icon" viewBox="0 0 20 20">
<path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
</svg> `;

let svgIconMinus = `<svg id="svgMinus"class="svg-icon" viewBox="0 0 20 20">
<path d="M14.776,10c0,0.239-0.195,0.434-0.435,0.434H5.658c-0.239,0-0.434-0.195-0.434-0.434s0.195-0.434,0.434-0.434h8.684C14.581,9.566,14.776,9.762,14.776,10 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.691-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.382,10c0-4.071-3.312-7.381-7.382-7.381C5.929,2.619,2.619,5.93,2.619,10c0,4.07,3.311,7.382,7.381,7.382C14.07,17.383,17.382,14.07,17.382,10"></path>
</svg>`;

function toggleIcon(section) {
	//Change the icon according to the state of the acorddion
	if (section.className == "collapsed") {
		section.childNodes[1].outerHTML = svgIconPlus;
	} else {
		section.childNodes[1].outerHTML = svgIconMinus;
	}
}

//Toast toggle minimize/maximize and hide
let svgIconMinimize = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"><path d="M6 9l6 6 6-6"/></svg>`;
let svgIconMaximize = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"><path d="M18 15l-6-6-6 6"/></svg>`;

const hideToastBody = (toastButton) => {
	if (document.getElementById("toastText").classList[1] == "hidden") {
		toastButton.innerHTML = svgIconMinimize;
	} else {
		toastButton.innerHTML = svgIconMaximize;
	}
	document.getElementById("toastText").classList.toggle("hidden");
};

const hideToast = () => {
	document.getElementById("toast").classList.add("hidden");
};
