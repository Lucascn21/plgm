const COURSES = {
	AprendeProgramando: {
		synopsis: "Miriadax es un prologías y competencias.",
		tech: ["Html5", "CSS3", "Javascript"],
	},
	"Codo a Codo": {
		synopsis:
			"Cursos en línea abiertos y masivos, así como cursos especializados y programas específicos sobre nuevas tecnologías y competencias.",
		tech: ["OOP", "Java", "SQL", "MySQL", "UML"],
	},
	"Carlos Slim": {
		synopsis:
			"Cursos en línea abiertos y masivos, así como cursos especializados y programas específicos sobre nuevas tecnologías y competencias.",
		tech: ["OOP", "Java", "SQL", "MySQL", "UML"],
	},
	Miriadax: {
		synopsis:
			"Miriadax es un proyecto de educación en línea que se surgió a principios del año 2013 fruto de la colaboración entre Banco Santander y Telefónica, ofrece MOOC (Cursos en línea abiertos y masivos), así como cursos especializados y programas específicos sobre nuevas tecnologías y competencias.",
		tech: [
			"NodeJs",
			"Express",
			"Html5",
			"CSS3",
			"Javascript",
			"MVC",
			"Sequelize",
			"Git",
			"GitHub",
			"Netlify",
			"PWA",
			"REST",
		],
	},

	ComunidadIt: {
		synopsis: "",
		tech: [
			"NodeJs",
			"Express",
			"Axios",
			"Javascript",
			"HTML5",
			"CSS3",
			"Bootstrap",
			"Handlebars",
			"MongoDB",
			"MongoAtlas",
			"Git",
			"GitHub",
			"Scrum",
		],
	},
};

const PROJECTS = {
	IRSO: {
		synopsis: "My college's code",
		tech: ["C C++ C#"],
	},
	TGIF: {
		synopsis:
			"Se trata de una pagina que muestra datos de una api del congreso. Propublica Basada en un Mock, incluido en el repo. Hay una implementacion de Vue.Js, el cual arma las listas de attendance.",
		tech: ["NodeJS", "Express", "Html5", "CSS3", "Javascript", "VueJs", "Github"],
	},
	Tyranido: {
		synopsis:
			"Tyranido es mi proyecto final de ComunidadIT. Se trata de una WebApp que consume una Api de Peliculas. Posee un registro y login, basicos, con base de datos en la nube. Axios maneja las solicitudes de Node. El frontend se compone de vistas de Handlebars+Bootstrap4.",
		tech: [
			"NodeJs",
			"Express",
			"Javascript",
			"Git",
			"GitHub",
			"MongoDB",
			"MongoAtlas",
			"Axios",
			"Bootstrap",
			"Handlebars",
		],
	},
};

const TOASTMSGS = {
	landing: `<p class="text-white">Welcome to my site. </p>`,
	projects: `<p class="text-white">These are the projects i've selected for you to view</p>`,
	skills: `<p class="text-white">These are my skills, projects and courses.<br> The skills icons are clickable and will highlight their corresponding course and or project.<br> <span class="text-warning">Yellow meaning SOME of the selected skills were learned/applied in the highlighted course or project.</span><br> <span class="text-success">Green means that a full stack of the selected skills was learned or applied in the highlighted course or project.</span><br><br> Hovering the mouse over a course or project will highlight its corresponding skills in green.<br> Clicking a course or project will show a detailed view.</p>`,
	about: `<p class="text-white">The about me section has a TLDR version and a long version of who i am.<br> The project's about section is an overall overview of this project and its development</p>`,
};

export { COURSES, PROJECTS, TOASTMSGS };
