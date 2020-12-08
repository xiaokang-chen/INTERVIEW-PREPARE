# WebPack官网学习

[toc]

## 一、概念

webpack是一个js应用程序的模块打包器。打包时，它会构建一个**依赖关系图**，包含了应用程序需要的每个模块，然后将这些模块打包成一个或多个bundle。

了解webpack需要先了解以下概念：

- 入口
- 输出
- loader
- 插件

### 1.1 入口（entry）

入口起点指示了webpack应该使用哪个模块，作为构建其内部依赖图的开始。
简单的entry配置如下，默认入口是./src：

```js
module.exports = {
    entry: './path/...'
}
```

### 1.2 出口(output)

output告诉webpack在哪里输出它创建的bundles，以及输出文件命名，默认值是./dist。
简单的output配置如下：

```js
const path = require('path');

module.exports = {
    entry: './path/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
}
```

### 1.3 loader

loader让webpack能够去处理非js文件（webpack自身只能理解js）。**本质上，webpack loader将所有类型的文件，转换为应用程序的依赖图可以直接引用的模块。**

在webpack中配置loader，主要配置下面两个属性：

1. test：标识应该被对应use配置的loader进行转换的文件（可以是多个）
2. use：转换时，使用哪个loader

```js
const path = require('path');

const config = {
    output: {
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            // test用正则表示出一类文件（txt文件）
            {test: /\.txt$/, use: 'raw-loader'}
        ]
    }
};

module.exports = config;
```

上面的配置信息表示：当webpack编译器，在import或者require时遇到.txt的路径，对它打包前，先用raw-loader

### 1.4 插件（plugins）

插件的任务范围包括打包优化、压缩、重新定义环境中的变量等。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')    //通过npm安装
const webpack = require('webpack');     //访问内置插件

const config = {
    module: {
        ...
    },
    // 插件的使用
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
```

### 1.5 模式

可以选择development或production之中的一个，设置mode参数，来启动相应模式下的优化。

```js
module.exports = {
    mode: 'production'
}
```

## 二、入口起点

### 2.1 单个入口（简写）语法

简写语法是对象语法的简写方式：

```js
const config = {
    entry: './path/file.js'
}
```

entry可以接受单个入口文件，同时也可以接受多个入口文件（以数组的形式）。在想要多个依赖文件一起注入时，多文件入口方式会很有用。

### 2.2 对象语法

```js
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
}
```

这种语法比较繁琐，但是扩展性更好（可重用app、vendors）

### 2.3 常用场景

<font color='red'>分离应用程序（app.js）和第三方库（vendors.js）入口</font>

```js
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
}
```

上述配置表示webpack从app.js和vendors.js开始创建依赖图，这些依赖图互相独立。适合于只有一个入起点的**单页面应用程序**

<font color='red'>多页面应用程序</font>

```js
const config = {
    entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
}
```

通过设置多个独立分离的依赖图，实现在多页面应用程序中，由于入口起点增多，多页应用能够复用入口起点之间的大量代码。

## 三、输出

配置output选项可以控制webpack如何向硬盘写入编译文件

```js
const config = {
    output: {
        filename: 'bundle.js',
        path: '/home/proj/assets'
    }
}
```

上述配置的结果是将一个单独的bundle.js文件输出到/home/proj/assets目录中

<font color='red'>多个文件入口时：</font>

```js
const path = require('path');

// 配置多个起点，则使用占位符保证每个文件有唯一名称
const config = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}
// 写入到硬盘的./dist/app.js和./dist/search.js
```

<font color='red'>使用CDN时：</font>

```js
output: {
    path: "/home/proj/cdn/assets/[hash]",
    publicPath: "http://cdn.example.com/assets/[hash]/"
}
```

## 四、模式

提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。

```js
module.exports = {
    mode: 'development'
}
```

## 五、loader

loader用于对模块的源代码进行转换。

例：你可以使用loader告诉webpack加载CSS文件，或者将ts转化为js

1、先安装对应的loader

```js
npm install --save-dev css-loader
npm install --save-dev ts-loader
```

2、指示webpack对每个.css使用css-loader，对每个.ts文件使用ts-loader

```js
module.exports = {
    module: {
        rules: [
            // 其中$代表匹配字符串结束的位置
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.ts$/, use: 'ts.loader'}
        ]
    }
}
```

使用loader的三种方式：

- 配置（推荐）：在webpack.config.js文件中指定loader
- 内联：在每个import中指定
- CLI：在shell命令中指定

1、配置
如上图的配置代码

2、内联

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

3、CLI

```js
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```

这会对 .jade 文件使用 jade-loader，对 .css 文件使用 style-loader 和 css-loader

loader特性：

- loader运行在node中
- 除了可以使用package.json常见的main属性，还可以将普通npm模块导出为loader，方法是在package.json里定义一个loader字段
- loader能够产生额外的文件
...

loader遵从node的模块解析，loader模块需要导出为一个函数，使用npm进行管理。

## 六、插件

插件存在的目的在于解决loader无法解决的事情。webpack插件是一个**具有apply属性的js对象**

如下列插件：

```js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin'

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler){
        compiler.hooks.run.tap(
            (pluginName, compilation) => {
                console.log("webpack 构建过程开始! ")
            }
        )
    }
}
```

插件的配置：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './path/entry/file.js',
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'bable-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};

module.exports = config;
```

## 七、配置

webpack的配置文件，是导出一个对象的js文件，所以它本身就是js代码。

1、基本配置：

```js
let path = require('path');

module.exports = {
    mode: 'development',
    entry: './foo.js',
    output: {
        filename: 'foo.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```

2、多个Target

可以导出为一个函数、一个promise，甚至导出多个配置对象

```js
// 导出一个函数
module.exports = function(env, args){
    return {
       mode: env.production ? 'production' : 'development',
       devtool: env.production ? 'source-maps' : 'eval',
       ...
    }
}

// 导出一个promise
module.exports = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                entry: './app.js',
                ...
            })
        }, 5000)
    })
}

// 导出多个配置对象，对于针对多个构建目标打包成一个library时用
module.exports = [{
  output: {
    filename: './dist-amd.js',
    libraryTarget: 'amd'
  },
  entry: './app.js',
  mode: 'production',
}, {
  output: {
    filename: './dist-commonjs.js',
    libraryTarget: 'commonjs'
  },
  entry: './app.js',
  mode: 'production',
}]
```

## 八、模块

模块是应用程序分解出来离散的功能块

## 九、模块解析

模块解析使用resolver库，帮助我们找到模块的绝对路径，一个模块可以作为另一个模块的引用，例如：

```js
// es6语法
import foo from 'path/to/module';
// commonjs语法
require('path/to/module');
```

解析规则：

1. 如果遇到的是绝对路径，那么就不需要进一步解析了；如果遇到的是相对路径时，会转换成绝对路径；如果是模块路径，那么会在模块目录中搜索
2. 如果指向的是一个文件：
    - 如果路径具有该文件，则直接将文件打包
    - 否则将使用resolve.extensions作为文件扩展名来解析
3. 如果指向的是一个文件夹：
    - 如果文件夹中包含package.json文件，则按照package.json中的特定字段确定文件路径。
    - 如果package.json不存在或特定字段中的文件路径不对，则按照顺序查找 resolve.mainFiles 配置选项中指定的文件名，看是否能在 import/require 目录下匹配到一个存在的文件名。
    - 文件扩展名通过 resolve.extensions 选项采用类似的方法进行解析

## 十、依赖图

webpack 从命令行或配置文件中定义的一个模块列表开始，处理你的应用程序。 从这些 入口起点 开始，webpack 递归地构建一个 依赖图 ，这个依赖图包含着应用程序所需的每个模块，然后将所有这些模块打包为少量的 bundle - 通常只有一个 - 可由浏览器加载

## 十一、manifest

在使用webpack构建的典型应用程序中，有三种主要的类型代码：

1. 项目代码
2. 项目代码依赖的第三方库
3. webpack的runtime和manifest

runtime：在模块交互时，连接模块所需要的加载和解析逻辑。
manifest：当index.html、打包后的bundle和各种资源加载到浏览器时，会在运行时通过Manifest来解析和加载模块，无论用哪种模块语法（commonjs、es6、amd...），那些import和require语句都会转化为__webpack__require__方法，此方法指向模块标识符。<font color='red'>通过使用 manifest中的数据，runtime将能够查询模块标识符，检索出背后对应的模块。</font>

## 十二、构建目标

因为服务器和浏览器都可以使用js编写，所以webpack提供了多种构建目标，包括web（默认）、node等

```js
// nodejs的require来加载chunk
module.exports = {
    target: 'node'
};
```

多个Target：

```js
// 可以通过打包两份来满足不同环境下包的应用
let path = require('path');
let serverConfig = {
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist');
        filename: 'lib.node.js'
    }
    // ...
};

let clientConfig = {
    target: 'web',  // default
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.js'
    }
    // ...
};

module.exports = [serverConfig, clientConfig];
```

## 十三、模块热更替

不太明白，详情在后面的Guide里再看