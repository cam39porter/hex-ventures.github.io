webpackJsonp([0xa93941ba78cd],{81:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),c=r(l),u=n(46),s=n(49),f=r(s),p=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges&&this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this,t=this.getPostList();return c.default.createElement("div",{className:"w-90 center pb5"},!this.props.shouldNotShowAlpha&&c.default.createElement(f.default,{title:"The blog is just the beginning.",body:"If you enjoy what you see here, we bet you will love what we are building. Just click the button and not only will you be at the front of the line for exclusive access to Tangle, we will send you updates on our progress and new content."}),this.props.category&&c.default.createElement("div",{className:"pt5 pb5 f3 fw3 tc measure-narrow center pointer",onClick:function(){(0,u.navigateTo)("/categories/"+e.props.category.replace(/ /g,"-"))}},this.props.category),this.props.categoryDescription&&c.default.createElement("div",{className:"pb4 f5 fw3 tc measure bb b--accent center gray"},this.props.categoryDescription),t.map(function(e,t){return c.default.createElement("div",{className:"relative center ba br4 b--light-gray pv4 ph3 pa4-l measure mv5 grow pointer",onClick:function(){(0,u.navigateTo)(e.path)},key:""+e.title+t},c.default.createElement("div",{className:"f7 absolute br4 top--1 right--1 bg-accent white pv2 ph3"},e.timeToRead," mins"),c.default.createElement("div",{className:"f4 fw5 lh-copy dark-gray pb4"},e.title),c.default.createElement("div",{className:"f6 fw3 lh-copy mid-gray pb4"},e.excerpt),c.default.createElement("div",{className:"f7 absolute br4 bottom-0 right-0 gray pv2 ph3"},e.date))}))},t}(c.default.Component);t.default=p,e.exports=t.default},136:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),c=r(l),u=n(39),s=r(u),f=n(21),p=r(f),d=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,a=void 0,o=void 0,i=void 0,l=void 0;if(r){var u=t.frontmatter;a=u.title,o=u.description?u.description:t.excerpt,i=u.cover,l=p.default.siteUrl+p.default.pathPrefix+n}else a=p.default.siteTitle,o=p.default.siteDescription,i=p.default.siteLogo;var f="/"===p.default.pathPrefix?"":p.default.pathPrefix;i=p.default.siteUrl+f+i;var d=p.default.siteUrl+p.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:a,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:""}];return r&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:a,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:a,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:"",headline:a,image:{"@type":"ImageObject",url:i},description:o}),c.default.createElement(s.default,null,c.default.createElement("meta",{name:"description",content:o}),c.default.createElement("meta",{name:"image",content:i}),c.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),c.default.createElement("meta",{property:"og:url",content:r?l:d}),r?c.default.createElement("meta",{property:"og:type",content:"article"}):null,c.default.createElement("meta",{property:"og:title",content:a}),c.default.createElement("meta",{property:"og:description",content:o}),c.default.createElement("meta",{property:"og:image",content:i}),c.default.createElement("meta",{property:"fb:app_id",content:p.default.siteFBAppID?p.default.siteFBAppID:""}),c.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.default.createElement("meta",{name:"twitter:creator",content:p.default.userTwitter?p.default.userTwitter:""}),c.default.createElement("meta",{name:"twitter:title",content:a}),c.default.createElement("meta",{name:"twitter:description",content:o}),c.default.createElement("meta",{name:"twitter:image",content:i}))},t}(l.Component);t.default=d,e.exports=t.default},322:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),c=r(l),u=n(39),s=r(u),f=n(81),p=r(f),d=n(49),m=r(d),h=n(129),g=n(46),y=n(136),b=r(y),w=n(21),E=r(w),v=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return c.default.createElement("div",{className:"w-100"},c.default.createElement(s.default,{title:E.default.siteTitle}),c.default.createElement(b.default,{postEdges:e}),c.default.createElement(m.default,{title:"The blog is just the beginning.",body:"If you enjoy what you see here, we bet you will love what we are building. Just click the button and not only will you be at the front of the line for exclusive access to Tangle, we will send you updates on our progress and new content."}),c.default.createElement("div",{className:"mt5 mb5 measure-wide center pa4 ba br4 b--light-gray"},c.default.createElement(p.default,{shouldNotShowAlpha:!0,postEdges:e.filter(function(e,t){return"The Tangle Blog"===e.node.frontmatter.category}).filter(function(e,t){return t<3}),category:"The Tangle Blog",categoryDescription:"Learn more about the product and what it can do for you"}),c.default.createElement("div",{className:"accent tc grow pointer",onClick:function(){(0,g.navigateTo)("/categories/the-tangle-blog")}},c.default.createElement(h.ChevronsDown,{size:24}))),c.default.createElement("div",{className:"mb5 measure-wide center pa4 ba br4 b--light-gray"},c.default.createElement(p.default,{shouldNotShowAlpha:!0,postEdges:e.filter(function(e,t){return"The KM Corner"===e.node.frontmatter.category}).filter(function(e,t){return t<3}),category:"The KM Corner",categoryDescription:"Educate yourself on knowledge management best practices"}),c.default.createElement("div",{className:"accent tc grow pointer",onClick:function(){(0,g.navigateTo)("/categories/the-km-corner")}},c.default.createElement(h.ChevronsDown,{size:24}))),c.default.createElement("div",{className:"mb5 measure-wide center pa4 ba br4 b--light-gray"},c.default.createElement(p.default,{shouldNotShowAlpha:!0,postEdges:e.filter(function(e,t){return"The Insight Area"===e.node.frontmatter.category}).filter(function(e,t){return t<3}),category:"The Insight Area",categoryDescription:"Explore the interesting ideas we love to write about"}),c.default.createElement("div",{className:"accent tc grow pointer",onClick:function(){(0,g.navigateTo)("/categories/the-insight-area")}},c.default.createElement(h.ChevronsDown,{size:24}))))},t}(c.default.Component);t.default=v;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-jsx-0511d91207ab79765fcd.js.map