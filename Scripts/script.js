window.onload = function() {
	var loaderContainer = document.getElementById('loader-container');
	var content = document.getElementById('content');
  
	setTimeout(function() {
		if (loaderContainer) {
			loaderContainer.style.display = 'none';
		}
	
		if (content) {
			content.style.display = 'block';
	
			setTimeout(function() {
				content.classList.add('show');
			}, 50);
		}
	}, 2000);
};

var birthDate = new Date("2003-10-05");
var currentDate = new Date();
var age = currentDate.getFullYear() - birthDate.getFullYear();
if (
  currentDate.getMonth() < birthDate.getMonth() ||
  (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
) {
  age--;
}
document.getElementById('head_age').innerHTML = age;

var hoverElements = document.querySelectorAll('.projectName');

const Images = [
  "/Assets/Images/dawillu.png", 
  "/Assets/Images/dabot.png", 
  "/Assets/Images/connect4.png", 
  "/Assets/Images/tictactoe.png"
];

const projects = ["dawillu", "dabot", "connect4", "tictactoe"];
let currentIndex = 0;
let intervalId;

function rotateImage() {
  document.getElementById("dynamic-change-img").style.opacity = "0";

  currentIndex = (currentIndex + 1) % Images.length;
  document.getElementById("dynamic-change-img").src = Images[currentIndex];
  
  document.getElementById("dynamic-change-img").style.opacity = "0.9";

  projects.forEach(id => {
      document.getElementById(id).style.opacity = "1";
  });

  document.getElementById(projects[currentIndex]).style.opacity = "0.6";
}

function startRotation() {
  intervalId = setInterval(rotateImage, 3000);
}

function stopRotation() {
  clearInterval(intervalId);
}

const projectsContainer = document.getElementById("projects-title-container");

projects.forEach((id, index) => {
  const projectDiv = document.getElementById(id);

  projectDiv.addEventListener("mouseenter", () => {
      stopRotation();

      document.getElementById("dynamic-change-img").src = Images[index];

      projects.forEach((otherId) => {
          document.getElementById(otherId).style.opacity = otherId === id ? "0.6" : "1";
      });
  });

  projectDiv.addEventListener("mouseleave", () => {
      startRotation();

      projects.forEach((otherId) => {
          document.getElementById(otherId).style.opacity = "1";
      });
  });
});

startRotation();

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  document.getElementById('start').scrollIntoView({ behavior: "smooth" });
}

document.getElementById('project-btn').addEventListener('click', () => {
	document.getElementById('projects').scrollIntoView({ behavior: "smooth" });
});
document.getElementById('about-btn').addEventListener('click', () => {
	document.getElementById('description-container').scrollIntoView({ behavior: "smooth" });
});
document.getElementById('title').addEventListener('click', () => {
	document.getElementById('start').scrollIntoView({ behavior: "smooth" });
});
