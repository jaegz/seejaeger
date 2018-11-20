import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import PortfolioPostPreview from './preview-templates/PortfolioPostPreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPostPreview)
