import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/os-slu-website/__docusaurus/debug',
    component: ComponentCreator('/os-slu-website/__docusaurus/debug', '9de'),
    exact: true
  },
  {
    path: '/os-slu-website/__docusaurus/debug/config',
    component: ComponentCreator('/os-slu-website/__docusaurus/debug/config', '24a'),
    exact: true
  },
  {
    path: '/os-slu-website/__docusaurus/debug/content',
    component: ComponentCreator('/os-slu-website/__docusaurus/debug/content', 'f54'),
    exact: true
  },
  {
    path: '/os-slu-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/os-slu-website/__docusaurus/debug/globalData', '78a'),
    exact: true
  },
  {
    path: '/os-slu-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/os-slu-website/__docusaurus/debug/metadata', '103'),
    exact: true
  },
  {
    path: '/os-slu-website/__docusaurus/debug/registry',
    component: ComponentCreator('/os-slu-website/__docusaurus/debug/registry', '5c9'),
    exact: true
  },
  {
    path: '/os-slu-website/__docusaurus/debug/routes',
    component: ComponentCreator('/os-slu-website/__docusaurus/debug/routes', '852'),
    exact: true
  },
  {
    path: '/os-slu-website/home',
    component: ComponentCreator('/os-slu-website/home', 'b42'),
    exact: true
  },
  {
    path: '/os-slu-website/news/',
    component: ComponentCreator('/os-slu-website/news/', '964'),
    exact: true
  },
  {
    path: '/os-slu-website/news/archive',
    component: ComponentCreator('/os-slu-website/news/archive', '35d'),
    exact: true
  },
  {
    path: '/os-slu-website/news/first-blog-post',
    component: ComponentCreator('/os-slu-website/news/first-blog-post', 'c02'),
    exact: true
  },
  {
    path: '/os-slu-website/news/long-blog-post',
    component: ComponentCreator('/os-slu-website/news/long-blog-post', 'b31'),
    exact: true
  },
  {
    path: '/os-slu-website/news/mdx-blog-post',
    component: ComponentCreator('/os-slu-website/news/mdx-blog-post', '0dd'),
    exact: true
  },
  {
    path: '/os-slu-website/news/tags',
    component: ComponentCreator('/os-slu-website/news/tags', '1c0'),
    exact: true
  },
  {
    path: '/os-slu-website/news/tags/docusaurus',
    component: ComponentCreator('/os-slu-website/news/tags/docusaurus', '463'),
    exact: true
  },
  {
    path: '/os-slu-website/news/tags/facebook',
    component: ComponentCreator('/os-slu-website/news/tags/facebook', '849'),
    exact: true
  },
  {
    path: '/os-slu-website/news/tags/hello',
    component: ComponentCreator('/os-slu-website/news/tags/hello', '26d'),
    exact: true
  },
  {
    path: '/os-slu-website/news/tags/hola',
    component: ComponentCreator('/os-slu-website/news/tags/hola', 'ab0'),
    exact: true
  },
  {
    path: '/os-slu-website/news/welcome',
    component: ComponentCreator('/os-slu-website/news/welcome', '6ab'),
    exact: true
  },
  {
    path: '/os-slu-website/docs',
    component: ComponentCreator('/os-slu-website/docs', 'a62'),
    routes: [
      {
        path: '/os-slu-website/docs/about',
        component: ComponentCreator('/os-slu-website/docs/about', 'c93'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/os-slu-website/',
    component: ComponentCreator('/os-slu-website/', 'a11'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
