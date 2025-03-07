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

document.getElementById('arrow').addEventListener('click', () => {
	document.getElementById('description-container').scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll("[data-animation]");
  
	elements.forEach(el => el.style.visibility = "hidden");
  
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  const animation = entry.target.dataset.animation;
		  entry.target.classList.add(animation);
		  entry.target.style.visibility = "visible";
  
		  observer.unobserve(entry.target);
		}
	  });
	});
  
	elements.forEach(element => observer.observe(element));
});