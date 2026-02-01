# Content Management System

This website uses a **Markdown-based content management system** where all website content is stored in separate markdown files. This allows you to update content without touching the code.

## 📁 Content Structure

```
content/
├── home/
│   ├── hero.md                    # Hero slider content
│   ├── section1-competitive-edge.md
│   ├── section2-leadership.md
│   ├── section3-reform.md
│   ├── section4-transformation.md
│   ├── section5-why-adopt.md
│   ├── section6-vs-party.md
│   └── section7-funding.md
├── about.md                       # About Us page
├── team.md                        # Team page
└── whom-we-serve.md              # Whom We Serve page
```

## ✏️ How to Update Content

### Option 1: Edit Markdown Files Directly

1. Navigate to the `content/` folder
2. Open the markdown file you want to edit
3. Update the content
4. Save and commit changes
5. Push to GitHub - the website will automatically update

### Option 2: Use GitHub Web Interface

1. Go to your repository on GitHub
2. Navigate to the `content/` folder
3. Click on the file you want to edit
4. Click the "Edit" button (pencil icon)
5. Make your changes
6. Commit directly to main branch
7. Vercel will automatically rebuild with new content

## 📝 Content File Format

Each markdown file uses a simple structure:

```markdown
## Section Name
title: "Section Title"
icon: "📊"
content: "Your content here..."

## Another Section
title: "Another Title"
items:
  - "Item 1"
  - "Item 2"
  - "Item 3"
```

## 🔄 Workflow

1. **Edit** → Update markdown files in `content/` folder
2. **Commit** → `git add content/ && git commit -m "Update content"`
3. **Push** → `git push origin main`
4. **Deploy** → Vercel automatically rebuilds (if connected)

## 📋 Available Content Files

- `content/home/hero.md` - Hero slider slides
- `content/home/section1-competitive-edge.md` - Competitive edge section
- `content/home/section2-leadership.md` - Leadership framework
- `content/home/section3-reform.md` - Need for reform
- `content/home/section4-transformation.md` - Transformation strategy
- `content/home/section5-why-adopt.md` - Why adopt BrahMoID
- `content/home/section6-vs-party.md` - BrahMoID vs Political Party
- `content/home/section7-funding.md` - Clean funding section
- `content/about.md` - About Us page
- `content/team.md` - Team page
- `content/whom-we-serve.md` - Whom We Serve page

## 💡 Tips

- Keep content concise and clear
- Use icons sparingly (emoji format: 📊)
- Maintain consistent formatting
- Test changes locally before pushing
- Use descriptive commit messages

## 🚀 Quick Update Example

To update the hero slider:

1. Edit `content/home/hero.md`
2. Change the title, subtitle, or description
3. Save and commit
4. Push to GitHub
5. Website updates automatically!
