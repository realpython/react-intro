# Discover React

## Part 1 - React

In this part, we'll detail how to set up a basic React todo app, utilizing ES6 syntax, Babel to transpile ES6 to ES5, and Webpack to bundle everything together.

### Prerequisites

1. Work through the React [Getting Started](https://facebook.github.io/react/docs/getting-started.html) guide
1. Read this [props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md) guide, making sure to understand the differences between a React component's props and state

### What is React?

React simplifies both the building and maintaining of Single Page Applications by making it easy to create reusible UI components and manage changes (e.g., state) to your application's data.

- React is a library not a framework. Unlike full JavaScript UI Frameworks, like Angular and Ember, React is just a JavaScript library that provies a view for data rendered as HTML. Put another way, it's the *view* in MVC!
- It's an implementation of Web Components, the new standard for custom HTML5 UI elements
- Compared to AngularJS directives: "React is all about building reusable components. In fact, with React the only thing you do is build components. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy." (Source: [Facebook](https://facebook.github.io/react/docs/why-react.html#build-composable-components))

Who's using React?

- [Facebook](http://facebook.com) (*duh*)
- [Instagram](http://instagram.com)
- [Netflix](http://netflix.com)
- [Atom Editor](http://atom.io)
- [Pivotal Tracker](http://khanacademy.com)
- [NFL](https://github.com/nfl?utf8=%E2%9C%93&query=react)
- [Khan Academy](http://khanacademy.com)
- [Cloudflare](http://www.cloudflare.com)
- [Venmo](http://venmo.com)
- [Trulia](http://trulia.com)
- [Rally Software](http://rallydev.com)
- [Docker](http://hub.docker.com)
- [Instacart](http://instacart.com)

### Tools

Modern-day JavaScript development is all about tools. We will utilize:

- [NPM](https://www.npmjs.com/) for managing dependncies
- [Webpack](https://webpack.github.io) for bundling modules
- [Babel](https://babeljs.io/) for transpiling ES6 to ES5

Let's get them installed!

Start by going to the [Node.js Foundation](https://nodejs.org/en/) to install both NodeJS and NPM.

Once done, clone down the boilerplate structure and install the remaining dependencies:

- React and the React DOM

  ```sh
  npm install --save react@0.14.8
  npm install --save react-dom@0.14.8
  ```

- Webpack and the Webpack development server (the latter is used for serving up the bundled JavaScript application):

  ```sh
  npm install --save-dev webpack@1.12.14
  npm install -g webpack-dev-server@1.14.1
  ```

- Babel and the Babel tools for React

  ```sh
  npm install --save-dev babel-core@6.7.4
  npm install --save-dev babel-loader@6.2.4
  npm install --save-dev babel-preset-es2015@6.6.0
  npm install --save-dev babel-preset-react@6.5.0
  ```

## Project Structure

Your project Structure should now look like this:

```sh
├── index.html
├── package.json
├── src
│   ├── components
│   │   └── App.jsx
│   └── index.js
└── webpack.config.js
```

ADD EXPLANATION

## Components

- ES6
- `this.state`
- `this.props`

## Build



## What's next
