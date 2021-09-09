(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{557:function(t,e,o){"use strict";o.r(e);var r=o(6),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"原型的概述"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#原型的概述"}},[t._v("#")]),t._v(" 原型的概述")]),t._v(" "),o("p",[t._v("创建一个函数的时候，会按照特定的规则为这个函数创建一个prototype属性，指向一个能给其它对象提供共享属性的对象，这个对象就是原型。默认情况下，所有原型对象自动获取一个叫constructor的属性，指回与之关联的构造函数。")]),t._v(" "),o("p",[t._v("在自定义构造函数的时候，原型对象默认只会获得constructor属性，其他的所有方法都继承自Object。每次调用构造函数创建一个新实例，这个实例的内部"),o("code",[t._v("[[Prototype]]")]),t._v("指针就会被赋值给构造函数的原型对象，我们可以通过实例的"),o("code",[t._v("__proto__")]),t._v("属性访问到这个原型对象。")]),t._v(" "),o("h2",{attrs:{id:"原型链"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),o("p",[t._v("每个对象拥有一个原型对象("),o("code",[t._v("__proto__")]),t._v("属性的指向)，对象以它的原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推，这种关系就是原型链。")]),t._v(" "),o("h2",{attrs:{id:"操作原型属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#操作原型属性"}},[t._v("#")]),t._v(" 操作原型属性")]),t._v(" "),o("ol",[o("li",[t._v("Object.getPrototypeOf(obj) 返回指定对象的原型")]),t._v(" "),o("li",[t._v("Object.setPrototypeOf(s, t) 设置指定对象t的原型prototype")])])])}),[],!1,null,null,null);e.default=_.exports}}]);