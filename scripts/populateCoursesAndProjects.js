import { COURSES, PROJECTS } from "./constants.js";

let coursesArea = document.getElementById("coursesArea").getElementsByTagName("h3")[0];
let projectsArea = document.getElementById("projectsArea").getElementsByTagName("h3")[0];

//Populating the courses and project areas
populate(COURSES, coursesArea, "course");
populate(PROJECTS, projectsArea, "project");
//Generic(ish) function that inserts each course and project buttons and offcanvas elements
function populate(elements, elementsArea, elementIdentity) {
	Object.entries(elements).forEach((element) => {
		const [key, value] = element;
		elementsArea.insertAdjacentHTML(
			"afterend",
			`<button  onmouseover="highlightTechs(this)"  onmouseout="deHighlightTechs(this)" onclick="addIcons(this)" class="btn btn-dark btn-shadow ${elementIdentity.toLowerCase()}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" data-tech="${
				value.tech
			}" data-synopsis="${value.synopsis}" aria-controls="offcanvasWithBothOptions">${key}</button>
			<div class="offcanvas offcanvas-bottom" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
				<div class="offcanvas-header">
				  <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">${key}</h5>
				  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
				  <p id="synopsis"></p>
				<span id="icons"></span>
				</div>
			</div>
		</div>`
		);
	});
}
