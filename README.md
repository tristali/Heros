👉 [🔗 Instructions by Hahow.](https://github.com/hahow/hahow-recruit/blob/master/frontend.md) <br />
👉 [🔗 Demo on Github Page.](https://tristali.github.io/Heros/#/) <br />

## 🚀 Quick Start

#### 👉 To run this project website locally.

1. Clone the project from Heros `https://github.com/tristali/Heros.git`.
2. Under project root, run `npm install` to install all dependencies.
3. Make sure that localhost:3000 port is available.
4. Run `npm start`.

#### 👉 Step
```
git clone https://github.com/tristali/Heros.git
cd Heros
npm install
npm start
```

## 🧱 File Structure

```
└── src
    ├── API                  
    │   ├── Heros                          /** The folder according to views. */
    │   └── method.tsx                     /** About set HTTP methods by fetch. */
    ├── assets                             /** About CSS setting and img. */     
    │   ├── components
    │   │   ├── BoomDialog                 /** Wrapped svg component - BoomDialog. */
    │   │   ├── GlobalStyle.tsx
    │   │   └── ResetStyle.tsx
    │   ├── img
    │   ├── config.tsx                    /** Object about CSS setting. ex. font, color and so on. */
    │   └── method.tsx                    /** About set media screens and default font-size method. */
    ├── components                        /** About Basic common components. */           
    │   ├── Avatar
    │   ├── BorderText
    │   ├── Button
    │   ├── DotBackground
    │   ├── Header
    │   ├── IconButton
    │   └── Loading
    ├── router                    
    │   ├── components
    │   │   └── Route.tsx                 /** Component return Route and this child Routes. */
    │   ├── config.tsx                    /** Object about all routes setting. */
    │   ├── index.tsx                     /** Component return all Route Component wrapped in Switch. */
    │   └── method.tsx                    /** About map Route method from array. */
    ├── store                             /** Redux store */
    │   ├── reducer
    │   │   ├── index.tsx
    │   │   └── type.tsx
    │   └── action.tsx
    ├── views
    │   ├── Heros                          /** The folder according to page. */
    │   │   ├── List
    │   │   │   ├── components/Card
    │   │   │   ├── index.tsx
    │   │   │   └── style.tsx
    │   │   ├── Profile
    │   │   │   ├── components            /** All customized components about this component */
    │   │   │   │   ├── ConfirmButton
    │   │   │   │   ├── Counter
    │   │   │   │   ├── Form
    │   │   │   │   ├── Info
    │   │   │   │   └── Remained
    │   │   │   ├── index.tsx
    │   │   │   └── style.tsx
    │   │   └── method.tsx
    │   ├── NotFound404
    │   └── ViewLayer                      /** This component about render web background and router. */
    ├── App.tsx                            /** This component about setting router and redux root, and reset, global css. */
    └── index.tsx                          /** Setting ReactDOM render in HTML. */
```

## 📚 Third-party Libraries

### [🔗 Styled-Components](https://styled-components.com/)
> 📄 A styling technique where JavaScript is used to style components.

👉【Purpose of usage】 Use CSS in JavaScript.

### [🔗 React Router](https://reactrouter.com/)
> 📄 A collection of navigational components that compose declaratively with your application.

👉 【Purpose of usage】 Build a single-page web application with navigation without the page refreshing as the user navigates.

### [🔗 Redux](https://redux.js.org/)
> 📄 A Predictable State Container for JavaScript Apps.

👉 【Purpose of usage】 Manage all state in one store.

### [🔗 TypeScript](https://www.typescriptlang.org)
> 📄 It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

👉 【Purpose of usage】 Make code easier to read, understand and debug.

### [🔗 Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm)
> 📄 For TypeScript, which contains all the definitions, or just use (window as any) (see Recipes for an example).

👉 【Purpose of usage】 Solve the error problem for 「Redux DevTools Extension」 `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` argument in .tsx.


## 📝 Principal of annotation
👉 When the constant, variable or key can't express the definition fully.
> [🔗 Example](https://github.com/tristali/Heros/blob/master/src/assets/config.tsx) line 35-43

👉 If one file has more than one important things, I'll add annotation on it to distinguish them.
> [🔗 Example](https://github.com/tristali/Heros/blob/master/src/assets/method.tsx)

## 💪 Obstacle

### 😓 Related state manage about set `backgroundColor` and so on is based on the current Hero.

👀【Reason 1️⃣ 】`backgroundColor` setting in the outermost (originally in `App.js`), and profile component separated by multiple layers. However, I didn't use redux at the beginning. <br />
👉【Solution 1️⃣ 】Use redux, and it based on last description. <br />
<br />
👀【Reason 2️⃣ 】During the exercise, I found that component which have `Provider` could not use the react-redux `useDispatch` method.
> note. `backgroundColor` setting in the outermost (originally in App.js).

👉【Solution 2️⃣ 】Try in coding and wrapped `DotBackground` in `ViewLayer` component of `views` folder, because the `backgroundColor` is also the display layer root. <br />