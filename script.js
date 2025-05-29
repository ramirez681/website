const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.3
});

projects.forEach(project => {
  project.style.opacity = 0;
  project.style.transform = 'translateY(20px)';
  observer.observe(project);
});
