# Quick Setup Guide

Follow these steps to get your portfolio website up and running:

## ✅ Step 1: Add Your Profile Image

1. Take or choose a professional photo (headshot recommended)
2. Resize it to 300x300px or larger (square format)
3. Save it as `avatar-placeholder.jpg` in the `assets/img/` folder
4. Alternatively, rename your photo to `avatar-placeholder.jpg`

## ✅ Step 2: Add Your CV

1. Create a folder named `cv` in the root directory (same level as `index.html`)
2. Place your CV file as `Roei_Sarid_CV.pdf` in the `cv` folder
3. Make sure the filename matches exactly: `Roei_Sarid_CV.pdf`

## ✅ Step 3: Update GitHub Username

Replace `USERNAME` with your actual GitHub username in these files:

### In `index.html`:

- Line 48: Hero section GitHub button
- Line 234: Contact section GitHub link

### In `assets/js/projects-data.js`:

- Lines 7, 15, 23: All GitHub repository URLs

**Find and replace**: Search for `USERNAME` and replace with your GitHub username

## ✅ Step 4: Test Locally

### Option A: Double-click

Simply double-click `index.html` to open in your browser

### Option B: Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code
Install "Live Server" extension, right-click index.html → "Open with Live Server"
```

Then open: `http://localhost:8000`

## ✅ Step 5: Verify Everything Works

Check these items:

- [ ] Navigation menu works (all links scroll to sections)
- [ ] Mobile menu opens/closes (test on narrow screen)
- [ ] Profile image displays in About section
- [ ] All 3 projects appear in Projects section
- [ ] Download CV button works
- [ ] All external links open in new tabs
- [ ] Smooth scrolling works
- [ ] Active link highlights as you scroll
- [ ] Animations trigger when scrolling to sections

## ✅ Step 6: Deploy to GitHub Pages

1. **Create repository on GitHub**:

   - Go to github.com
   - Click "New repository"
   - Name it `portfolio` (or any name you prefer)
   - Don't initialize with README (you already have one)

2. **Push your code**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:

   - Go to repository Settings
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes for deployment

4. **Access your site**:
   - Your portfolio will be live at: `https://YOUR-USERNAME.github.io/portfolio/`

## 🎨 Optional Customizations

### Change Colors

Edit `assets/css/styles.css` (lines 7-9):

```css
--primary-color: #2563eb; /* Change this */
--secondary-color: #0ea5e9; /* And this */
```

### Add More Projects

Edit `assets/js/projects-data.js` and add new project objects to the array

### Update Content

Edit `index.html` to modify any text content in the sections

## 🆘 Troubleshooting

**Projects not showing?**

- Check browser console (F12) for errors
- Verify `projects-data.js` is in the correct location
- Make sure `main.js` has `type="module"` in the script tag

**Images not loading?**

- Check file paths are correct
- Verify image files are in `assets/img/` folder
- Check filename spelling matches exactly

**Styles not applying?**

- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check `styles.css` path in `index.html`
- Verify CSS file is in `assets/css/` folder

**Mobile menu not working?**

- Check browser console for JavaScript errors
- Verify `main.js` is loading correctly
- Test in different browsers

## 📞 Need Help?

If you encounter issues:

1. Check the browser console (F12) for error messages
2. Verify all file paths match the structure
3. Make sure all files are saved
4. Try opening in a different browser

---

**Ready to launch? Follow the steps above and your portfolio will be live in minutes!** 🚀
