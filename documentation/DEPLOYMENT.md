# GitHub Pages Deployment Setup

This guide explains how to set up automatic deployment of the MasLazu.AspNet documentation to GitHub Pages.

## Prerequisites

1. **Repository Settings**: Ensure your repository has GitHub Pages enabled
2. **Branch Protection**: The workflow is configured to deploy from both `main` and `develop` branches
3. **Permissions**: The repository needs proper permissions for GitHub Actions

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when triggered

### 2. Repository Configuration

The documentation is already configured in `docusaurus.config.ts`:

```typescript
// Set the production url of your site here
url: "https://maslazu.github.io",
// Set the /<baseUrl>/ pathname under which your site is served
baseUrl: "/MasLazu.AspNet/",

// GitHub pages deployment config
organizationName: "MasLazu", // Your GitHub org/user name
projectName: "MasLazu.AspNet", // Your repo name
```

### 3. Workflow Triggers

The GitHub Actions workflow (`.github/workflows/deploy-docs.yml`) triggers on:

- **Push to main/develop**: Automatic deployment when documentation changes
- **Pull Request to main**: Build verification (no deployment)
- **Manual Trigger**: Can be run manually from GitHub Actions tab
- **Path Filtering**: Only runs when files in `documentation/**` change

### 4. Deployment Process

1. **Build Stage**:

   - Checkout repository code
   - Setup Node.js 20 with npm cache (using documentation/package-lock.json)
   - Install dependencies with `npm ci`
   - Build documentation with `npm run build`
   - Upload build artifacts

2. **Deploy Stage**:
   - Deploy to GitHub Pages environment
   - Site becomes available at: `https://maslazu.github.io/MasLazu.AspNet/`

## Workflow Features

### ✅ **Performance Optimizations**

- **npm Cache**: Speeds up dependency installation
- **npm ci**: Ensures consistent, reproducible builds
- **Concurrency Control**: Prevents conflicting deployments
- **Path Filtering**: Only builds when documentation changes

### ✅ **Security**

- **Minimal Permissions**: Only required permissions granted
- **Environment Protection**: Uses GitHub Pages environment
- **Token Management**: Uses automatic GitHub token

### ✅ **Branch Strategy**

- **Main Branch**: Production deployment
- **Develop Branch**: Preview deployment
- **Pull Requests**: Build verification only

## Manual Deployment

You can also deploy manually:

```bash
cd documentation
npm install
npm run build
npm run deploy
```

## Troubleshooting

### Common Issues

1. **Build Failures**:

   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for broken links in documentation

2. **Deployment Failures**:

   - Ensure GitHub Pages is enabled
   - Check repository permissions
   - Verify workflow permissions

3. **Site Not Loading**:
   - Check the `baseUrl` configuration
   - Verify the GitHub Pages source is set to "GitHub Actions"
   - Wait a few minutes for DNS propagation

### Useful Commands

```bash
# Local development
npm start

# Build for production
npm run build

# Serve built site locally
npm run serve

# Clear cache
npm run clear
```

## Site URLs

- **Production**: https://maslazu.github.io/MasLazu.AspNet/
- **Local Development**: http://localhost:3000

The documentation will be automatically updated whenever you push changes to the `documentation/` folder in the main or develop branches! 🚀
