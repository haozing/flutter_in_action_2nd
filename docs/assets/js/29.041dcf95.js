(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{319:function(t,e,s){t.exports=s.p+"assets/img/14-3.7141498f.png"},405:function(t,e,s){t.exports=s.p+"assets/img/14-1.bd5c2d9d.png"},406:function(t,e,s){t.exports=s.p+"assets/img/14-2.075fa468.png"},635:function(t,e,s){"use strict";s.r(e);var n=s(45),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_14-2-element、buildcontext和renderobject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-2-element、buildcontext和renderobject"}},[t._v("#")]),t._v(" 14.2 Element、BuildContext和RenderObject")]),t._v(" "),n("h2",{attrs:{id:"_14-2-1-element"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-2-1-element"}},[t._v("#")]),t._v(" 14.2.1 Element")]),t._v(" "),n("p",[t._v("在“Widget简介”一节，我们介绍了Widget和Element的关系，我们知道最终的UI树其实是由一个个独立的Element节点构成。我们也说过组件最终的Layout、渲染都是通过"),n("code",[t._v("RenderObject")]),t._v("来完成的，从创建到渲染的大体流程是：根据Widget生成Element，然后创建相应的"),n("code",[t._v("RenderObject")]),t._v("并关联到"),n("code",[t._v("Element.renderObject")]),t._v("属性上，最后再通过"),n("code",[t._v("RenderObject")]),t._v("来完成布局排列和绘制。")]),t._v(" "),n("p",[t._v("Element就是Widget在UI树具体位置的一个实例化对象，大多数Element只有唯一的"),n("code",[t._v("renderObject")]),t._v("，但还有一些Element会有多个子节点，如继承自"),n("code",[t._v("RenderObjectElement")]),t._v("的一些类，比如"),n("code",[t._v("MultiChildRenderObjectElement")]),t._v("。最终所有Element的RenderObject构成一棵树，我们称之为”Render Tree“即”渲染树“。总结一下，我们可以认为Flutter的UI系统包含三棵树：Widget树、Element树、渲染树。他们的依赖关系是：Element树根据Widget树生成，而渲染树又依赖于Element树，如图14-1 所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(405),alt:"图14-1"}})]),t._v(" "),n("p",[t._v("现在我们重点看一下Element，Element的生命周期如下：")]),t._v(" "),n("ol",[n("li",[t._v("Framework 调用"),n("code",[t._v("Widget.createElement")]),t._v(" 创建一个Element实例，记为"),n("code",[t._v("element")])]),t._v(" "),n("li",[t._v("Framework 调用 "),n("code",[t._v("element.mount(parentElement,newSlot)")]),t._v(" ，mount方法中首先调用"),n("code",[t._v("element")]),t._v("所对应Widget的"),n("code",[t._v("createRenderObject")]),t._v("方法创建与"),n("code",[t._v("element")]),t._v("相关联的RenderObject对象，然后调用"),n("code",[t._v("element.attachRenderObject")]),t._v("方法将"),n("code",[t._v("element.renderObject")]),t._v("添加到渲染树中插槽指定的位置（这一步不是必须的，一般发生在Element树结构发生变化时才需要重新attach）。插入到渲染树后的"),n("code",[t._v("element")]),t._v("就处于“active”状态，处于“active”状态后就可以显示在屏幕上了（可以隐藏）。")]),t._v(" "),n("li",[t._v("当有父Widget的配置数据改变时，同时其"),n("code",[t._v("State.build")]),t._v("返回的Widget结构与之前不同，此时就需要重新构建对应的Element树。为了进行Element复用，在Element重新构建前会先尝试是否可以复用旧树上相同位置的element，element节点在更新前都会调用其对应Widget的"),n("code",[t._v("canUpdate")]),t._v("方法，如果返回"),n("code",[t._v("true")]),t._v("，则复用旧Element，旧的Element会使用新Widget配置数据更新，反之则会创建一个新的Element。"),n("code",[t._v("Widget.canUpdate")]),t._v("主要是判断"),n("code",[t._v("newWidget")]),t._v("与"),n("code",[t._v("oldWidget")]),t._v("的"),n("code",[t._v("runtimeType")]),t._v("和"),n("code",[t._v("key")]),t._v("是否同时相等，如果同时相等就返回"),n("code",[t._v("true")]),t._v("，否则就会返回"),n("code",[t._v("false")]),t._v("。根据这个原理，当我们需要强制更新一个Widget时，可以通过指定不同的Key来避免复用。")]),t._v(" "),n("li",[t._v("当有祖先Element决定要移除"),n("code",[t._v("element")]),t._v(" 时（如Widget树结构发生了变化，导致"),n("code",[t._v("element")]),t._v("对应的Widget被移除），这时该祖先Element就会调用"),n("code",[t._v("deactivateChild")]),t._v(" 方法来移除它，移除后"),n("code",[t._v("element.renderObject")]),t._v("也会被从渲染树中移除，然后Framework会调用"),n("code",[t._v("element.deactivate")]),t._v(" 方法，这时"),n("code",[t._v("element")]),t._v("状态变为“inactive”状态。")]),t._v(" "),n("li",[t._v("“inactive”态的element将不会再显示到屏幕。为了避免在一次动画执行过程中反复创建、移除某个特定element，“inactive”态的element在当前动画最后一帧结束前都会保留，如果在动画执行结束后它还未能重新变成“active”状态，Framework就会调用其"),n("code",[t._v("unmount")]),t._v("方法将其彻底移除，这时element的状态为"),n("code",[t._v("defunct")]),t._v(",它将永远不会再被插入到树中。")]),t._v(" "),n("li",[t._v("如果"),n("code",[t._v("element")]),t._v("要重新插入到Element树的其它位置，如"),n("code",[t._v("element")]),t._v("或"),n("code",[t._v("element")]),t._v("的祖先拥有一个GlobalKey（用于全局复用元素），那么Framework会先将element从现有位置移除，然后再调用其"),n("code",[t._v("activate")]),t._v("方法，并将其"),n("code",[t._v("renderObject")]),t._v("重新attach到渲染树。")])]),t._v(" "),n("p",[t._v("看完Element的生命周期，可能有些读者会有疑问，开发者会直接操作Element树吗？其实对于开发者来说，大多数情况下只需要关注Widget树就行，Flutter框架已经将对Widget树的操作映射到了Element树上，这可以极大的降低复杂度，提高开发效率。但是了解Element对理解整个Flutter UI框架是至关重要的，Flutter正是通过Element这个纽带将Widget和RenderObject关联起来，了解Element层不仅会帮助读者对Flutter UI框架有个清晰的认识，而且也会提高自己的抽象能力和设计能力。另外在有些时候，我们必须得直接使用Element对象来完成一些操作，比如获取主题Theme数据，具体细节将在下文介绍。")]),t._v(" "),n("h2",{attrs:{id:"_14-2-2-buildcontext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-2-2-buildcontext"}},[t._v("#")]),t._v(" 14.2.2 BuildContext")]),t._v(" "),n("p",[t._v("我们已经知道，"),n("code",[t._v("StatelessWidget")]),t._v("和"),n("code",[t._v("StatefulWidget")]),t._v("的"),n("code",[t._v("build")]),t._v("方法都会传一个"),n("code",[t._v("BuildContext")]),t._v("对象：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("我们也知道，在很多时候我们都需要使用这个"),n("code",[t._v("context")]),t._v(" 做一些事，比如：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Theme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取主题")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Navigator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//入栈新路由")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Localizations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取Local")]),t._v("\ncontext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取上下文大小")]),t._v("\ncontext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findRenderObject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查找当前或最近的一个祖先RenderObject")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("那么"),n("code",[t._v("BuildContext")]),t._v("到底是什么呢，查看其定义，发现其是一个抽象接口类：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("那这个"),n("code",[t._v("context")]),t._v("对象对应的实现类到底是谁呢？我们顺藤摸瓜，发现"),n("code",[t._v("build")]),t._v("调用是发生在"),n("code",[t._v("StatelessWidget")]),t._v("和"),n("code",[t._v("StatefulWidget")]),t._v("对应的"),n("code",[t._v("StatelessElement")]),t._v("和"),n("code",[t._v("StatefulElement")]),t._v("的"),n("code",[t._v("build")]),t._v("方法中，以"),n("code",[t._v("StatelessElement")]),t._v("为例：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatelessElement")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentElement")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" widget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("发现"),n("code",[t._v("build")]),t._v("传递的参数是"),n("code",[t._v("this")]),t._v("，很明显！这个"),n("code",[t._v("BuildContext")]),t._v("就是"),n("code",[t._v("StatelessElement")]),t._v("。同样，我们同样发现"),n("code",[t._v("StatefulWidget")]),t._v("的"),n("code",[t._v("context")]),t._v("是"),n("code",[t._v("StatefulElement")]),t._v("。但"),n("code",[t._v("StatelessElement")]),t._v("和"),n("code",[t._v("StatefulElement")]),t._v("本身并没有实现"),n("code",[t._v("BuildContext")]),t._v("接口，继续跟踪代码，发现它们间接继承自"),n("code",[t._v("Element")]),t._v("类，然后查看"),n("code",[t._v("Element")]),t._v("类定义，发现"),n("code",[t._v("Element")]),t._v("类果然实现了"),n("code",[t._v("BuildContext")]),t._v("接口:")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Element")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiagnosticableTree")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("至此真相大白，"),n("code",[t._v("BuildContext")]),t._v("就是widget对应的"),n("code",[t._v("Element")]),t._v("，所以我们可以通过"),n("code",[t._v("context")]),t._v("在"),n("code",[t._v("StatelessWidget")]),t._v("和"),n("code",[t._v("StatefulWidget")]),t._v("的"),n("code",[t._v("build")]),t._v("方法中直接访问"),n("code",[t._v("Element")]),t._v("对象。我们获取主题数据的代码"),n("code",[t._v("Theme.of(context)")]),t._v("内部正是调用了Element的"),n("code",[t._v("dependOnInheritedWidgetOfExactType()")]),t._v("方法。")]),t._v(" "),n("blockquote",[n("p",[t._v("思考题：为什么build方法的参数不定义成Element对象，而要定义成BuildContext ?")])]),t._v(" "),n("h3",{attrs:{id:"进阶"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[t._v("#")]),t._v(" 进阶")]),t._v(" "),n("p",[t._v("我们可以看到Element是Flutter UI框架内部连接widget和"),n("code",[t._v("RenderObject")]),t._v("的纽带，大多数时候开发者只需要关注widget层即可，但是widget层有时候并不能完全屏蔽"),n("code",[t._v("Element")]),t._v("细节，所以Framework在"),n("code",[t._v("StatelessWidget")]),t._v("和"),n("code",[t._v("StatefulWidget")]),t._v("中通过"),n("code",[t._v("build")]),t._v("方法参数又将"),n("code",[t._v("Element")]),t._v("对象也传递给了开发者，这样一来，开发者便可以在需要时直接操作"),n("code",[t._v("Element")]),t._v("对象。那么现在笔者提一个问题：")]),t._v(" "),n("ol",[n("li",[t._v("如果没有widget层，单靠"),n("code",[t._v("Element")]),t._v("层是否可以搭建起一个可用的UI框架？如果可以应该是什么样子？")]),t._v(" "),n("li",[t._v("Flutter UI框架能不做成响应式吗？")])]),t._v(" "),n("p",[t._v("对于问题1，答案当然是肯定的，因为我们之前说过widget树只是"),n("code",[t._v("Element")]),t._v("树的映射，我们完全可以直接通过Element来搭建一个UI框架。下面举一个例子：")]),t._v(" "),n("p",[t._v("我们通过纯粹的Element来模拟一个"),n("code",[t._v("StatefulWidget")]),t._v("的功能，假设有一个页面，该页面有一个按钮，按钮的文本是一个9位数，点击一次按钮，则对9个数随机排一次序，代码如下：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HomeView")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HomeView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" widget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456789"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),t._v(" primary"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Theme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("primaryColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GestureDetector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Center")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextButton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" primary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          onPressed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shuffle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("markNeedsBuild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点击后将该Element标记为dirty，Element将会rebuild")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("ul",[n("li",[n("p",[t._v("上面"),n("code",[t._v("build")]),t._v("方法不接收参数，这一点和在"),n("code",[t._v("StatelessWidget")]),t._v("和"),n("code",[t._v("StatefulWidget")]),t._v("中"),n("code",[t._v("build(BuildContext)")]),t._v("方法不同。代码中需要用到"),n("code",[t._v("BuildContext")]),t._v("的地方直接用"),n("code",[t._v("this")]),t._v("代替即可，如代码注释1处"),n("code",[t._v("Theme.of(this)")]),t._v("参数直接传"),n("code",[t._v("this")]),t._v("即可，因为当前对象本身就是"),n("code",[t._v("Element")]),t._v("实例。")])]),t._v(" "),n("li",[n("p",[t._v("当"),n("code",[t._v("text")]),t._v("发生改变时，我们调用"),n("code",[t._v("markNeedsBuild()")]),t._v("方法将当前Element标记为dirty即可，标记为dirty的Element会在下一帧中重建。实际上，"),n("code",[t._v("State.setState()")]),t._v("在内部也是调用的"),n("code",[t._v("markNeedsBuild()")]),t._v("方法。")])]),t._v(" "),n("li",[n("p",[t._v("上面代码中build方法返回的仍然是一个widget，这是由于Flutter框架中已经有了widget这一层，并且组件库都已经是以widget的形式提供了，如果在Flutter框架中所有组件都像示例的"),n("code",[t._v("HomeView")]),t._v("一样以"),n("code",[t._v("Element")]),t._v("形式提供，那么就可以用纯"),n("code",[t._v("Element")]),t._v("来构建UI了"),n("code",[t._v("HomeView")]),t._v("的build方法返回值类型就可以是"),n("code",[t._v("Element")]),t._v("了。")])])]),t._v(" "),n("p",[t._v("如果我们需要将上面代码在现有Flutter框架中跑起来，那么还是得提供一个“适配器”widget将"),n("code",[t._v("HomeView")]),t._v("结合到现有框架中，下面"),n("code",[t._v("CustomHome")]),t._v("就相当于“适配器”：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomHome")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Element")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HomeView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("现在就可以将"),n("code",[t._v("CustomHome")]),t._v("添加到widget树了，我们在一个新路由页创建它，最终效果如下如图14-2 和14-3（点击后）所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(406),alt:"图14-2"}}),t._v(" "),n("img",{attrs:{src:s(319),alt:"图14-3"}})]),t._v(" "),n("p",[t._v("点击按钮则按钮文本会随机排序。")]),t._v(" "),n("p",[t._v("对于问题2，答案当然也是肯定的，Flutter 引擎提供的 API是原始且独立的，这个与操作系统提供的API类似，上层UI框架设计成什么样完全取决于设计者，完全可以将UI框架设计成 Android 风格或 iOS 风格，但这些事Google不会再去做，我们也没必要再去搞这一套，这是因为响应式的思想本身是很棒的，之所以提出这个问题，是因为笔者认为做与不做是一回事，但知道能不能做是另一回事，这能反映出我们对知识的理解程度。")]),t._v(" "),n("h2",{attrs:{id:"renderobject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#renderobject"}},[t._v("#")]),t._v(" RenderObject")]),t._v(" "),n("p",[t._v("在上一节我们说过每个"),n("code",[t._v("Element")]),t._v("都对应一个"),n("code",[t._v("RenderObject")]),t._v("，我们可以通过"),n("code",[t._v("Element.renderObject")]),t._v(" 来获取。并且我们也说过"),n("code",[t._v("RenderObject")]),t._v("的主要职责是Layout和绘制，所有的"),n("code",[t._v("RenderObject")]),t._v("会组成一棵渲染树Render Tree。本节我们将重点介绍一下"),n("code",[t._v("RenderObject")]),t._v("的作用。")]),t._v(" "),n("p",[n("code",[t._v("RenderObject")]),t._v("就是渲染树中的一个对象，它主要的作用是实现事件响应以及渲染管线中除过 build 的部分（build 部分由 element 实现），即包括：布局、绘制、层合成以及上屏，这些我们将在后面章节介绍。")]),t._v(" "),n("p",[n("code",[t._v("RenderObject")]),t._v("拥有一个"),n("code",[t._v("parent")]),t._v("和一个"),n("code",[t._v("parentData")]),t._v(" 插槽（slot），所谓插槽，就是指预留的一个接口或位置，这个接口和位置是由其它对象来接入或占据的，这个接口或位置在软件中通常用预留变量来表示，而"),n("code",[t._v("parentData")]),t._v("正是一个预留变量，它正是由"),n("code",[t._v("parent")]),t._v(" 来赋值的，"),n("code",[t._v("parent")]),t._v("通常会通过子"),n("code",[t._v("RenderObject")]),t._v("的"),n("code",[t._v("parentData")]),t._v("存储一些和子元素相关的数据，如在Stack布局中，"),n("code",[t._v("RenderStack")]),t._v("就会将子元素的偏移数据存储在子元素的"),n("code",[t._v("parentData")]),t._v("中（具体可以查看"),n("code",[t._v("Positioned")]),t._v("实现）。")]),t._v(" "),n("p",[n("code",[t._v("RenderObject")]),t._v("类本身实现了一套基础的layout和绘制协议，但是并没有定义子节点模型（如一个节点可以有几个子节点，没有子节点？一个？两个？或者更多？）。 它也没有定义坐标系统（如子节点定位是在笛卡尔坐标中还是极坐标？）和具体的布局协议（是通过宽高还是通过constraint和size?，或者是否由父节点在子节点布局之前或之后设置子节点的大小和位置等）。")]),t._v(" "),n("p",[t._v("为此，Flutter框架提供了一个"),n("code",[t._v("RenderBox")]),t._v("和一个 "),n("code",[t._v("RenderSliver")]),t._v("类，它们都是继承自"),n("code",[t._v("RenderObject")]),t._v("，布局坐标系统采用笛卡尔坐标系，这和Android和iOS原生坐标系是一致的，都是屏幕的top、left是原点，然后分宽高两个轴，大多数情况下。而 Flutter 基于这两个类分别实现了基于 RenderBox 的盒模型布局和基于 Sliver 的按需加载模型，这个我们已经在前面章节介绍过。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("本节详细的介绍了"),n("code",[t._v("Element")]),t._v("的生命周期，以及它Widget、BuildContext的关系，最后介绍了 Flutter UI框架中另一个重要的角色RenderObject，下一节我们将重点介绍一下 Flutter 渲染管线中的布局流程。")])])}),[],!1,null,null,null);e.default=a.exports}}]);