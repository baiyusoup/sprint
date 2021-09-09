(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{556:function(t,a,r){"use strict";r.r(a);var s=r(6),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"标记清除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[t._v("#")]),t._v(" 标记清除")]),t._v(" "),r("p",[t._v("标记清除是JavaScript最常用的垃圾回收策略。当变量进入上下文时，这个变量会被加上存在于上下文的标记，当变量离开上下文时，也会被加上离开上下文的标记。垃圾回收程序运行的时候，标记内存中存储的所有变量，然后它会将所有在上下文中的变量，以及被上下文中的变量引用的变量的标记去掉，在这之后再被加上标记的变量就是待删除的变量，随后垃圾回收程序做一次内存请求，销毁带标记的所有值并收回它们的内存。")]),t._v(" "),r("h2",{attrs:{id:"引用计数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引用计数"}},[t._v("#")]),t._v(" 引用计数")]),t._v(" "),r("p",[t._v("对每个值都记录它被引用的次数。声明变量并给它赋一个引用值时，这个的引用数为1，如果同一个值又被赋给另一个变量，那么引用数加1。类似地，如果保存对该值引用的变量被其他值给覆盖，那么引用数减1。当一个值的引用数为0时，就说明没办法再访问到这个值了，可以安全地回收其内存。")]),t._v(" "),r("p",[t._v("垃圾回收程序下次运行的时候就会释放引用数为0的值的内存。")])])}),[],!1,null,null,null);a.default=e.exports}}]);