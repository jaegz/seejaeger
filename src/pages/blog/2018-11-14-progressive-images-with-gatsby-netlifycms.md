---
templateKey: 'blog-post'
title: Progressive Images With Gatsby + Netlify CMS
date: 2018-11-14 18:06:10
description: Get progressive images working with Gatsby and Netlify CMS
tags:
  - gatsbyjs
  - netlify cms
  - progressive images
  - semantic ui
---

If you are using Semantic UI, ditch the Image component for gatsby's PreviewCompatibleImage

Make sure the path to your image is relative to the path of your markdown file, otherwise you will get a build error similar to:
`error GraphQL Error Field "image" must not have a selection since type "String" has no subfields.`

