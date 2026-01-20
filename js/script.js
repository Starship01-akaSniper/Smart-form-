// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Feature cards animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Observe steps
document.querySelectorAll('.step').forEach(step => {
  step.style.opacity = '0';
  step.style.transform = 'translateY(30px)';
  step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(step);
});

// Add interactive hover effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.style.setProperty('--mouse-x', `${x}px`);
    this.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('body::before');
  if (parallax) {
    document.body.style.setProperty('--scroll', scrolled * 0.5 + 'px');
  }
});

// CTA tracking (for analytics - placeholder)
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Track CTA clicks
    console.log('CTA clicked:', this.textContent);
    // In production, send to analytics
  });
});

// Add loading animation for demo image
const demoImg = document.getElementById('demo-img');
if (demoImg) {
  demoImg.addEventListener('load', function() {
    this.style.opacity = '1';
  });
  demoImg.style.opacity = '0';
  demoImg.style.transition = 'opacity 0.5s ease';
}

// Add icon with fallback
const logoIcon = document.getElementById('logo-icon');
logoIcon.onerror = function() {
  this.style.display = 'none';
};

console.log('SmartForm AI - Landing page loaded successfully! 🚀');
