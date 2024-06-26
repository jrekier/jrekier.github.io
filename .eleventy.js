const { DateTime } = require('luxon')
const fs = require("fs");
const htmlmin = require("html-minifier-security-fix");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
// const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
// const nodePandoc = require('node-pandoc');
const path = require("path");
const eleventyCiteproc = require("eleventy-plugin-citeproc");

module.exports = function(eleventyConfig) {

  if (process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addTransform("htmlmin", htmlminTransform);
  } else {
    eleventyConfig.setBrowserSyncConfig({ callbacks: { ready: browserSyncReady }});
  }

  // Passthrough
  eleventyConfig.addPassthroughCopy({ "src/static": "." });
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "./images" });  
  // eleventyConfig.addPassthroughCopy({ "src/images": "./images" });  
  eleventyConfig.addPassthroughCopy({ "src/js": "./js" });  

  // Watch targets
  eleventyConfig.addWatchTarget("./src/styles/");

  var pathPrefix = "";
  if (process.env.GITHUB_REPOSITORY) {
    pathPrefix = process.env.GITHUB_REPOSITORY.split('/')[1];
  }

  // Filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy")
  })

  // https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
  eleventyConfig.addCollection('posts', collection => {
    const coll = collection.getAllSorted().filter(post => post.data.category === 'blog')
  //   const coll = collection.getFilteredByTag("blog")
    for(let i = 0; i < coll.length; i++) {
      const prevPost = coll[i-1]
      const nextPost = coll[i+1]
      coll[i].data["prevPost"] = prevPost
      coll[i].data["nextPost"] = nextPost
    }
    return coll.reverse()
  })
  eleventyConfig.addCollection('reviews', collection => {
    const coll = collection.getAllSorted().filter(post => post.data.category === 'book')
    for(let i = 0; i < coll.length; i++) {
      const prevPost = coll[i-1]
      const nextPost = coll[i+1]
      coll[i].data["prevPost"] = prevPost
      coll[i].data["nextPost"] = nextPost
    }
    return coll.reverse()
  })
	eleventyConfig.addCollection("projects", function (collectionApi) {
		return collectionApi.getFilteredByGlob("src/projects/*.md");
	});
  // markdown stuff
  let markdownIt = require("markdown-it");
  let markdownItFootnote = require("markdown-it-footnote");
  let markdownItPrism = require('markdown-it-prism');
  let markdownfigcaption = require('markdown-it-image-figures');
  let figoptions = {
    figcaption: true
  };
  
  let options = {
    html: true, // Enable HTML tags in source
    breaks: true,  // Convert '\n' in paragraphs into <br>
    linkify: true // Autoconvert URL-like text to links
  };
  // configure the library with options
  let markdownLib =  markdownIt(options);
  markdownLib.use(markdownItFootnote);
  markdownLib.use(markdownItPrism);
  markdownLib.use(markdownfigcaption,figoptions);  
  // set the library to process markdown files
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin(eleventyCiteproc, {
    bibliographicStylePath: path.join(__dirname, 'geophysics.csl'),
    bibliographicLocalizationPath: path.join(__dirname, 'locales-en-US.xml'),
    bibliographicDataPath: path.join(__dirname, 'bibliography.json')
});

  // // If you have other `addPlugin` calls, it’s important that UpgradeHelper is added last.
	// eleventyConfig.addPlugin(UpgradeHelper);

  return {
    dir: {
      input: "src"
    },
    pathPrefix
  }
};

function browserSyncReady(err, bs) {
  bs.addMiddleware("*", (req, res) => {
    const content_404 = fs.readFileSync('_site/404.html');
    // Provides the 404 content without redirect.
    res.write(content_404);
    // Add 404 http status code in request header.
    // res.writeHead(404, { "Content-Type": "text/html" });
    res.writeHead(404);
    res.end();
  });
}

function htmlminTransform(content, outputPath) {
  if( outputPath.endsWith(".html") ) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });
    return minified;
  }
  return `<main>${this.references(content)}</main><footer>${this.bibliography(content)}</footer>`;
}
