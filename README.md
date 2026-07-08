# Portfolio Website

A clean, professional portfolio website built with HTML, CSS, and JavaScript - perfect for GitHub Pages deployment.

## Features

- **Responsive Design** - Looks great on desktop, tablet, and mobile devices
- **Single Page Layout** - Smooth navigation between sections
- **Modern UI/UX** - Clean aesthetics with smooth animations
- **Customizable** - Easy to personalize with your content
- **SEO-Friendly** - Proper semantic HTML structure
- **Fast Loading** - No external dependencies or frameworks

## Getting Started

### Prerequisites

- A GitHub account (required for GitHub Pages)
- Basic text editor knowledge

### Local Setup

1. Clone or download this repository to your computer
2. Open `portfolio-site/index.html` in a web browser
3. Or use a live server extension for development

### Deploying to GitHub Pages

#### Option 1: Enable via Repository Settings (Recommended)

1. Go to your GitHub repository settings
2. Navigate to **Pages** tab
3. Under **Build and deployment** → **Branch**, select **main/master** and `/ (root)**
4. Click **Save**
5. Wait 1-2 minutes, then visit: `https://yourusername.github.io`

#### Option 2: Custom Subdomain

1. Go to repository settings → Pages
2. Enter your custom domain (e.g., `portfolio.yourname.com`)
3. Follow GitHub's DNS setup instructions

## Customization Guide

### Personal Information

Edit these placeholder text blocks in `index.html`:

| Section | What to Change |
|---------|---------------|
| `[Your Name]` | Your full name |
| `[Your email]` | Your contact email |
| `[your username]` | GitHub/Twitter/LinkedIn handles |
| Project descriptions | Your actual project details |

### Skills Section

Edit the skill lists in the `#skills` section:

```html
<!-- Frontend skills -->
<li>HTML5 & CSS3</li>
<li>JavaScript (ES6+)</li>
<!-- Add/remove your skills here -->
```

### Projects Section

Duplicate project cards to add more projects:

```html
<!-- Copy a project-card block and modify -->
<article class="project-card">
  <div class="project-image" style="background-color: #667eea;">
    <span class="project-icon">&#128187;</span>
  </div>
  <div class="project-content">
    <h3>[Your Project Name]</h3>
    <p class="project-description">[Your description here...]</p>
    <div class="project-tags">
      <span class="tag">Technology1</span>
      <span class="tag">Technology2</span>
    </div>
    <div class="project-links">
      <a href="https://yourproject.com" class="link-btn" target="_blank">View Live &rarr;</a>
      <a href="https://github.com/you/repo" class="link-btn secondary" target="_blank">GitHub Repo</a>
    </div>
  </div>
</article>
```

### Color Theme

Edit CSS variables in `css/styles.css`:

```css
:root {
  --primary-color: #667eea;      /* Main accent color */
  --secondary-color: #764ba2;    /* Secondary accent */
  --accent-color: #f06595;       /* Third accent */
}
```

### Form Backend (Optional)

To receive form submissions, add a backend service:

1. **Formspree** (simplest - no coding):
   - Sign up at [formspree.io](https://formspree.io)
   - Replace form action: `<form action="YOUR_FORMSPREE_ENDPOINT" method="POST">`

2. **Netlify Forms** (if hosted on Netlify):
   - Add `netlify` attribute to form tag

3. **Custom Backend**:
   ```html
   <form class="contact-form" action="/api/contact" method="POST">
   ```

## Project Structure

```
portfolio-site/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (responsive included)
├── js/
│   └── main.js         # Interactivity and animations
└── README.md           # This file
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13.1+
- Edge 80+

## License

This project is open source and available for personal use. Feel free to fork and customize!

---

**Tips for a Great Portfolio:**
- Update with real content (don't leave placeholders!)
- Include screenshots of your projects
- Write compelling descriptions focusing on impact
- Keep it updated with recent work