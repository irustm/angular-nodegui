# AngularNodeGUI

[![npm version](https://badge.fury.io/js/angular-nodegui.svg)](https://www.npmjs.com/package/angular-nodegui)

Build performant, native and cross-platform desktop applications with Angular.🚀

Angular NodeGUI is powered by Angular 🅰️ and Qt5 💚 which makes it CPU and memory efficient as compared to other chromium based solutions like electron. Angular NodeGUI is essentially a Angular renderer for NodeGUI.

## Docs

Main docs: https://docs.nodegui.org

# Getting started

## Requirements

- CMake 3.1 and up
- Make, GCC v7
- NodeJS 12.x and up.

Setting up on [macOS](https://docs.nodegui.org/docs/guides/getting-started#setting-up-on-macos), [Windows](https://docs.nodegui.org/docs/guides/getting-started#setting-up-on-windows), [Linux](https://docs.nodegui.org/docs/guides/getting-started#setting-up-on-linux)

[Getting started](https://docs.nodegui.org/docs/guides/getting-started)

## Easy start

```
npm i
npm start
```

## Demo

### Start app

[Link](https://github.com/irustm/angular-nodegui/tree/master/src/app)

<p align="center">
  <img src="https://raw.githubusercontent.com/irustm/angular-nodegui/master/demo/demo_app.png" width="350" title="angular nodegui demo">
</p>

### Router

Use `NodeguiRouterModule` instead of `RouterModule` for routing. [Example](https://github.com/irustm/angular-nodegui/blob/master/src/app/app.module.ts#L23)

```js
NodeguiRouterModule.forRoot(appRoutes);
```

### Widget

[Link](https://github.com/irustm/angular-nodegui/tree/master/projects/weather-demo)

#### Mac

<p align="center">
  <img src="https://raw.githubusercontent.com/irustm/angular-nodegui/master/demo/demo_widget_mac.png" width="300" title="angular nodegui demo">
</p>

#### Windows

<p align="center">
  <img src="https://raw.githubusercontent.com/irustm/angular-nodegui/master/demo/demo_weather_widget.png" width="600" title="angular nodegui demo">
</p>
