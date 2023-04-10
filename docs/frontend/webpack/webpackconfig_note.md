# webpack

pre-requisites:
npm 개념

npm(node package manager) : managing packages, a set of modules and libraries, related to node
패키지(모듈이나 라이브러리들의 집합)을 관리하는 소프트웨어

1. package.json을 읽고 이해할 줄 알아야한다.

   - 어떤 dependency들이 install 되어 있고, 어디에 install되어 작동이 가능한지 안다.
   - `dependency`란? one file depends on another, webpack treats it as `dependency`.
   - 예를 들어 어떤 파일이 다른 라이브러리안에 있는 모듈을 가져와서 그 모듈안에 있는 함수를 사용할 때, 함수를 사용하고 있는 파일이 `depends on another file`이라는 상황에 놓여져있게 된다. 그런 상황을 dependency라고 webpack은 정의하고 있고, 주로 `함수를 가져와서 쓰게 된 모듈` 혹은 `라이브러리`를 dependency라 한다. dependency들은 package.json이라는 파일에 명시한다.
   - 어떤 파일로 부터 함수를 `수입해서` 혹은 `가져와서` 혹은 `빌려서` 쓸 때, `dependency injection`인 상황이 된다.
   - package.json에 dependency들이 명시가 되려면 `npm install [dependency-name] --save`과정을 terminal을 통해서 거쳐야하고, 그게 됐을 때 `node_modules`이라는 폴더가 생성되면서 그 안에 `라이브러리나 모듈들이 저장`된다. 나중에 github에 내 프로젝트 코드를 저장할 때 꼭 node_modules 폴더 안에 있는 내용까지 저장할 필요없다. 오히려 node_modules폴더 그대로를 저장하게 되면 `너무 많은 라이브러리 설치`가 화근이 되서(으로 인해) 프로젝트 파일의 크기가 커지고, 그 파일을 github저장소에 저장하다가 저장소에 메모리를 너무 많이 차지하게 된다. 그 문제를 해결하기 위해서 .gitignore이라는 파일을 생성해서 그 파일 안에 `/node_modules`파일을 ignore할 수 있게 명시해 둔다. 나중에 github에서 프로젝트 파일을 다시 clone 할 경우, `npm install` command를 이용해서 다시 필요한 라이브러리나 모듈을 저장한다.

   - 어떤 libraries들이 node modules에 저장되어있는지 package.json파일 내용을 보고 알기
   - 라이브러리(library) 란? 관련된 파일들의 집합해서 한 패키지로 존재하는 큰 범위의 모듈.
   - 모듈(module)이란? 어떤 함수들을 관련있는 것들끼리 모아서 묶음으로 존재하는 객체(object).
   - `npm install`을 프로젝트 시작 전에 해야하는 이유: node module가 save가 안되어있고, gitignore되에 있기때문에

   - .gitignore 파일의 존재 이유: github에 내 프로젝트 코드를 저장 할 때, 굳이 저장할 필요없는 파일이나 폴더들 혹은 숨기고 싶은 파일들을 ignore하기 위한 `숨어 있는 파일`이다. - 여기서 `숨어 있는 파일`이라하면, `.파일이름`처럼 점(.)으로 시작하는 파일을 말한다. `.env`파일 혹은 dev.js파일을 명시하고 있는 server쪽의 .`gitignore`파일이 좋은 예다. 파일을 숨기는 이유는 어떤 private key나 private information, confidential information을 public으로 부터 공유하지 않기 위해서다. 이 것은 `protecting privacy`를 할 뿐만 아니라 if `libraries are out-dated (deprecated)` or `version is out-dated`, node_modules을 저장 안함으로 인해서 시간이 지났을 때 꼭 `유통기한이 지난` 혹은 `더 이상 사용되지 않는`라이브러리나 모듈을 `같이 다운받을 필요가 없다`.

## webpack 핵심:

1. webpack이란? webpack 기본 메커니즘
2. loader란? loader의 존재 및 하는 일
3. plugin이란? plugin의 존재 이유 및 webpack에서 하는 일
4. mode이란? production mode vs development mode설정

## webpack

webpack이란?
`webpack`이란 static module bundler로써 한 프로젝트에서 여러 파일들이 서로 dependent하게 엮겨있을 때 이 모든 것을 한개의 bundle파일을 만들어서 좀 더 정리된 형태의 한개 큰 파일을 생성한다.

```sh
webpack app.js bundle.js
```

위의 예제을 예로 들면, app.js라는 파일이 다른 파일의 함수를 사용하기 위해서 `require`와 `export` 키워드를 사용해서 다른 파일들과 dependency injection관계가 형성되어있다. 이 파일을 webpack으로 분석해서 bundle.js라는 1개의 큰 파일에 다시 정돈 된 상태로 생성된다. `require`는 import(수입, 다른 파일로부터 필요한 함수나 모듈을 불러오는 것) 하는 것이고, `export`는 export(수출, 내가 갖고 있는 함수나 모듈을 다른 파일들이 쓸 수 있게 제공하는 것)한는 것이다.

다시 말해, app.js를 가공해서 buddle.js를 만드는 것을 webpack으로 한다.

`webpack` can only read `js` and `json` files

## loader

`loaders` can read `html`, `css` files that are not readable by `webpack`.
예를 들어,
I import a .css file into a .js file, then webpack cannot understand the .css file that was imported.
In this case, I install the `loaders` modules, and then I state the required loaders in `webpack.config.js` `module` sections. So that webpack can understand the .css file.

loader는 일종의 모듈 혹은 라이브러리라고 볼 수 있다..js파일 안에서 webpack이 import한 다른 타입의 파일(css, html)들을 이해할 수 있게 도와주는 라이브러리라고 생각 할 수 있다. 그런게 가능하기 위해서 module 섹션에서 규칙(rule)을 정하는데,`test`와 `use` 라는 key가 존재한다.
`test`: 파일에 타입이 무언인가?
`use`: test에 적힌 파일 타입을 이해하기 위해서 필요한 loader가 무엇인가?

`module`이라는 키워드는 자바스크립트 객체 object {key:value}이며,`rules`이라는 key를 갖고 있고, array []형식의 값을 갖고 있다.
`rules`라는 key는 [{test:value, use:value}] 형태의 값을 갖고 있는데,
`test`, `use` key의 의미:

- `test`: 파일에 타입이 무언인가?
- `use`: test에 적힌 파일 타입을 이해하기 위해서 필요한 loader가 무엇인가?

format:

```
module:{
    rules: [
        {
            test:
            use:
        }
    ]

}
```

1. 필요한 loader를 다운받는다.

```
$ npm install style-loader --save
$ npm install css-loader --save
```

2. webpack.config.js 파일의 module섹션에 rule을 명시한다.

```js
 module:{
        rules:[
            {
                test:/\.css$/, // what kind of file is it? .css file
                use:[
                    'style-loader', // what loaders are required?
                    'css-loader'
                ]
            }
        ]
    },
```

## plugin

`plugins`

plugin이란?
While loaders are used to transform certain types of modules, plugins can be leveraged to perform `a wider range of tasks` like `bundle optimization`, `asset management` and `injection of environment variables`.

플러그인(plugin)은 웹팩의 기본적인 동작에 `추가적인 기능을 제공`하는 속성입니다. 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 `해당 결과물의 형태를 바꾸는 역할`을 한다고 보면 됩니다.

```js
module:{
        rules:[
            {
                test:/\.css$/, // what kind of file is it? .css file
                use:[
                    'style-loader', // what loaders are required?
                    'css-loader'
                ]
            }
        ]
    },
plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new HtmlWebpackPlugin(),
    new webpack.ProgressPlugin()
    ];
```

## mode

mode이란? production mode vs development mode설정

## Browser Compatibility

- webpack은 ES5 호환 (IE8 이하는 지원되지 않음)되는 모든 브라우저를 지원합니다.

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  }, // transfer: app.js -. bundle.js, bundle.js = all the dependency gather to run app.js
  // location: ./dist/bundle.js

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "production", // production mode vs development mode
};
```

helpful resources:
link:
https://hannut91.github.io/blogs/webpack/concepts/01.concepts
https://www.youtube.com/watch?v=9c3dBhvtt6o
https://joshua1988.github.io/webpack-guide/concepts/plugin.html#plugin
https://webpack.js.org/concepts/#plugins

## 정리

1. Entry 속성은 웹팩을 실행할 대상 파일. 진입점
2. Output 속성은 웹팩의 결과물에 대한 정보를 입력하는 속성. 일반적으로 filename과 path를 정의
3. Loader 속성은 CSS, 이미지와 같은 비 자바스크립트 파일을 웹팩이 인식할 수 있게 추가하는 속성. 로더는 오른쪽에서 왼쪽 순으로 적용
4. Plugin 속성은 웹팩으로 변환한 파일에 추가적인 기능을 더하고 싶을 때 사용하는 속성. 웹팩 변환 과정 전반에 대한 제어권을 갖고 있음

참조: webpackConfigDiagram.jpg

dependency injection
link: api 관점에서의 dependency injection https://www.youtube.com/watch?v=0eVeSlml9xA

- interface
- inversion of control
- dependency injection
- dependency inversion

dependency
