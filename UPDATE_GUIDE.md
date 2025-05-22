# Portfolio Update Guide

This guide explains how to easily update your portfolio content without touching the code.

## 🎨 Theme Toggle
Your portfolio now includes a **dark/light theme toggle button** in the navigation bar! Users can:
- Click the sun/moon icon to switch themes
- The theme preference is automatically saved in browser storage
- System preference (light/dark) is detected automatically

## 📝 Easy Content Updates

### Method 1: Configuration File (Recommended)
Edit the file: `src/config/portfolioConfig.ts`

#### Personal Information
```typescript
personal: {
  name: "Your Name",
  title: "Your Professional Title", 
  tagline: "Your professional tagline",
  email: "your.email@example.com",
  location: "Your City, Country",
  availability: "Remote & On-site",
  resumeUrl: "https://your-resume-link.com"
}
```

#### Social Links
```typescript
socialLinks: [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github"  // Available: Github, Linkedin, Twitter, Instagram, LeetCode, Kaggle
  }
  // Add more social links...
]
```

#### About Section
```typescript
about: {
  description: "Your professional description...",
  experienceYears: "5+",
  highlights: [
    {
      title: "Your Strength",
      description: "Description of your strength",
      icon: "Brain"  // Available: Brain, Lightbulb, Target, Users
    }
  ],
  quickTechnologies: ["Tech1", "Tech2", "Tech3"]
}
```

#### Skills
```typescript
skills: {
  categories: [
    {
      title: "Category Name",
      description: "Detailed description...",
      color: "from-blue-500 to-cyan-500",  // Tailwind gradient classes
      icon: "Code",  // Available: Code, Brain, Database, Network
      items: ["Skill1", "Skill2", "Skill3"]
    }
  ],
  additionalTechnologies: ["Tech1", "Tech2"]
}
```

#### Work Experience
```typescript
experience: {
  experiences: [
    {
      title: "Job Title",
      company: "Company Name",
      location: "City, Country",
      period: "Start Date - End Date",
      duration: "X months/years",
      type: "Full-time",
      description: "Job description...",
      achievements: [
        "Achievement 1",
        "Achievement 2"
      ],
      technologies: ["Tech1", "Tech2"],
      gradient: "from-blue-600 to-purple-600"
    }
  ]
}
```

#### Projects
```typescript
projects: {
  projects: [
    {
      title: "Project Name",
      description: "Project description...",
      technologies: ["Tech1", "Tech2"],
      githubUrl: "https://github.com/username/repo",
      category: "Project Category",
      impact: "Key Impact Metric",
      gradient: "from-blue-500 to-purple-600"
    }
  ]
}
```

### Method 2: Reference Guide (PORTFOLIO_CONFIG.md)
Check the `PORTFOLIO_CONFIG.md` file for detailed examples and structure.

## 🚀 How to Apply Changes

1. **Edit the configuration file**: `src/config/portfolioConfig.ts`
2. **Save your changes**
3. **Rebuild the website**:
   ```bash
   npm run build
   ```
4. **Test locally** (optional):
   ```bash
   npm run dev
   ```

## 🎨 Customization Options

### Colors and Gradients
Use Tailwind CSS gradient classes:
- `from-blue-500 to-purple-600`
- `from-green-500 to-emerald-500`
- `from-orange-500 to-red-500`
- `from-purple-500 to-pink-500`

### Icons
Available icons for different sections:
- **Social**: Github, Linkedin, Twitter, Instagram, LeetCode, Kaggle
- **Skills**: Code, Brain, Database, Network
- **About**: Brain, Lightbulb, Target, Users

### Adding New Social Links
1. Add the link to the `socialLinks` array
2. Use one of the available icons
3. The color will be automatically mapped

### Adding New Projects
1. Add to the `projects` array
2. Choose a gradient color scheme
3. Select an appropriate category and impact metric

## 🔧 Advanced Customization

### Adding New Icons
If you need new icons:
1. Import from `lucide-react` in the component file
2. Add to the `iconMap` in the respective component
3. Update the configuration to use the new icon name

### Custom Styling
The portfolio uses Tailwind CSS with custom animations. You can:
- Modify colors in `src/index.css`
- Add new animations
- Customize component styles

## 📞 Contact Section
The contact section now shows only the "Get in Touch" information with:
- Contact details (Email, Location, Availability)
- Social media links
- Clean, centered layout
- No contact form (removed as requested)

To re-enable the contact form, set `showContactForm: true` in the configuration.

## 📱 Responsive Design
The portfolio is fully responsive and works on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1019px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🌙 Dark Mode Features
- Automatic system preference detection
- Manual toggle with persistent storage
- Optimized colors for both themes
- Smooth transitions between themes

## 🚀 Deployment
After making changes:
1. Run `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Your changes will be live!

## 💡 Tips
- Keep descriptions concise but informative
- Use action verbs in achievements
- Include metrics and numbers where possible
- Test on different devices after major changes
- Keep the color scheme consistent across sections

## 🆘 Need Help?
- Check the browser console for errors
- Ensure all required fields are filled
- Verify URLs are valid
- Make sure gradient classes are valid Tailwind CSS classes