// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-template-archive-js": () => import("./../../../src/template/archive.js" /* webpackChunkName: "component---src-template-archive-js" */),
  "component---src-template-blog-details-js": () => import("./../../../src/template/blog-details.js" /* webpackChunkName: "component---src-template-blog-details-js" */),
  "component---src-template-category-post-js": () => import("./../../../src/template/category-post.js" /* webpackChunkName: "component---src-template-category-post-js" */),
  "component---src-template-tag-template-js": () => import("./../../../src/template/tag-template.js" /* webpackChunkName: "component---src-template-tag-template-js" */)
}

