# Personal Portfolio - GitHub Pages Deployment

This portfolio is configured for deployment on GitHub Pages.

## Deployment Instructions

### 1. Build the Project
```bash
npm run build
```

### 2. Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build the Next.js application with GitHub Pages configuration
- Generate static HTML files in the `out` directory
- Deploy to the `gh-pages` branch using the `gh-pages` package

### 3. Configure GitHub Repository

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set the source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save the settings

### 4. Access Your Site

Your site will be available at:
- `https://naufalzaid17.github.io/naufalzaid17.github.io/`

## Configuration Details

The project is configured with:
- `output: 'export'` for static HTML generation
- `basePath` and `assetPrefix` for proper GitHub Pages routing
- `images: { unoptimized: true }` for GitHub Pages compatibility

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages