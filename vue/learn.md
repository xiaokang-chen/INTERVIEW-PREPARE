# 博客文章学习

[toc]

## 一、基本原理

1. vue 的本质
   vue 的核心功能强调的是状态（M）到界面（V）的映射，所以单纯只使用其核心功能时，它并不是一个框架，而像一个**视图模板引擎**，这也是为什么 vue 开发者把其命名成读音类似于 view 的原因。

2. 渐进式
   vue 的核心功能时一个视图模板引擎（声明式渲染）。在此基础上，我们可以添加组件系统、状态管理、路由来构建一个完整的框架。**这些功能相互独立**，你可以再核心功能的基础上任意选用其他部件。可以看出，所说的<font color='red'>渐进式</font>，其实就是 vue 的使用方式。

3. 用 key 管理 vue 元素
   Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这会使得 vue 的渲染变得很快，但是这也会引起一些问题，就是在两个模板中使用同种类型的元素时（比如 input），那么在重新渲染时：

   ```vue
   <template v-if="loginType === 'username'">
     <label>Username</label>
     <input placeholder="Enter your username" />
   </template>
   <template v-else>
     <label>Email</label>
     <input placeholder="Enter your email address" />
   </template>
   ```

   上面这段代码，在 loginType 改变的时候，<input>元素不会被替换，而替换的只是属性等不同的地方（Vue 内部的优化算法）。
   所以 vue 提供了一种表示两个元素是完全独立的方式：<font color='red'>key</font>。

   ```vue
   <template v-if="loginType === 'username'">
     <label>Username</label>
     <input placeholder="Enter your username" key="username-input" />
   </template>
   <template v-else>
     <label>Email</label>
     <input placeholder="Enter your email address" key="email-input" />
   </template>
   ```

   在给 input 添加 key 之后，每次切换，输入框都会被重新渲染，来保证两个输入框相互独立。<font color='red'>（这里的 label 依然会被高效利用--diff 算法，因为他没有添加 key）</font>

4. v-show 和 v-if

   v-if 是“惰性”的，首次不会渲染。只有当条件为 true 时，才会渲染。而 v-show 不管条件是什么，都会渲染，只不过会根据条件的 true 或 false 来进行 css 切换（display）.

   结论：<font color='red'>v-if 有更高的切换开销，v-show 有更高的初始渲染开销。所以，需要频繁切换，则使用 v-show，否则 v-if。</font>

   PS：<font color='blue'>v-if 不要和 v-for 一起使用</font>

## 二、数据双向绑定原理

1. vue 双向绑定原理
   vue 的双向绑定是由**数据劫持**+**发布订阅模式**实现的。其中数据劫持是<font color='red'>通过 Object.defineProperty()来劫持对象属性的 getter 和 setter，在数据变动时做你想要做的事情</font>。发布订阅模式则就像我们平时订报纸的场景一样：首先我们去报社注册订购，然后当有新报纸的时候，报社会让邮递员去给我们发放报纸。在这个流程中，报社相当于 Observer，而我们相当于 Watcher。

2. 代码实现双向绑定
   实现 vue 的 mvvm 的双向绑定，主要包含两个方面：**视图变化更新数据，数据变化更新视图**。视图的变化更新数据可以通过事件监听来实现（比如 input 监听输入）；而数据变化更新视图是实现的关键。

&emsp;&emsp;data 变化更新 view 的重点是<font color='red'>如何知道 view 什么时候变化了。</font>通过 Object.defineProperty( )对属性设置一个 set 函数，当属性变化时就会触发这个函数，所以我们只需要将一些更新 dom 的方法放在 set 函数中就可以实现 data 变化更新 view 了

要实现数据的双向绑定，要先对数据进行劫持监听，所以需要一个**监听器 Observer**，用来监听所有属性，当属性有变化的时候，通知**订阅者 Watcher**，看是否需要更新。因为可能存在多个属性，所以会有多个订阅者，故需要一个消息订阅器 Dep 来专门收集这些订阅者，并在<font color='red'>监听器和订阅者之间进行统一管理。</font>因节点元素上可能存在一些指令，所以还需要有一个指令解析器 Compiler

## 三、参考资料

1. https://zoyi14.smartapps.cn/pages/note/index?slug=5990a386132a&origin=share&_swebfr=1
2. https://m.php.cn/article/417685.html
