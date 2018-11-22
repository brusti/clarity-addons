(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{lIAz:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),b=u("zl1X"),a=u("pMnS"),s=u("8KBR"),d=u("+Xo0"),c=u("0G9f"),i=u("6/Z3"),r=u("QkwE"),o=u("vAyd"),h=u("mrSG"),y=u("N+3j"),p='\n<clr-paged-search-result-list [clrItems]="pagedItems"\n                              [clrPage]="currentPage"\n                              [clrPageSize]="pageSize"\n                              [clrTotalItems]="allItems.length"\n                              (clrPageChange)="onPageChanged($event)">\n    <ng-template let-item="item">\n        <div class="col-xs-12">\n            <div class="card">\n                <div class="card-header">\n                    {{item}}\n                </div>\n                <div class="card-block">\n                    <div class="card-text">\n                        This is an example card.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</clr-paged-search-result-list>\n            \n',m=function(l){function n(){var n=l.call(this,"paged-search-result-list")||this;return n.htmlExample=p,n.allItems=["Nelson","Graham","Olene","Dorian","Nidia","Keenan","Luna","Letisha","Lenny","Jeana","Alica","Sheridan","Georgia","Brad","Ellen","Brynn","Roslyn","Rhona","Marcella","Sibyl","Shenika","Desirae","Beverly","Johnson","Kaitlin","Lucius","Darla","Debby","Lottie","Genoveva"],n.pageSize=3,n.pagedItems=[],n.currentPage=1,n}return Object(h.c)(n,l),n.prototype.onPageChanged=function(l){var n=this;this.currentPage=l;var u=(l-1)*this.pageSize,e=Math.min(u+this.pageSize-1,this.allItems.length-1);setTimeout(function(){return n.pagedItems=n.allItems.slice(u,e+1)},0)},n}(y.a),g=e.ob({encapsulation:2,styles:[],data:{}});function q(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Ib(3,null,[" "," "])),(l()(),e.qb(4,0,null,null,2,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"div",[["class","card-text"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" This is an example card. "]))],null,function(l,n){l(n,3,0,n.context.item)})}function I(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,135,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,d.b,d.a)),e.pb(1,49152,null,0,c.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.qb(2,0,null,0,133,"article",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"h5",[["class","component-summary"],["id","search-result-list-header"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The Paged Search Result List component is a basic component used to display a list of generic data including a pager above and below the list."])),(l()(),e.qb(5,0,null,null,4,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Style"])),(l()(),e.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["You can style the list any way you want - this component allows you to use a custom template to show all items of your list. The custom template can range from a single line representing text to one or more completely new angular components."])),(l()(),e.qb(10,0,null,null,1,"h3",[["id","usage"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Usage"])),(l()(),e.qb(12,0,null,null,13,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["To set a template for each item of your list simply add a "])),(l()(),e.qb(14,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ng-template"])),(l()(),e.Ib(-1,null,[" inside the "])),(l()(),e.qb(17,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["clr-paged-search-result-list"])),(l()(),e.Ib(-1,null,[". By defining "])),(l()(),e.qb(20,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['let-item="item"'])),(l()(),e.Ib(-1,null,[" on your "])),(l()(),e.qb(23,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ng-template"])),(l()(),e.Ib(-1,null,[" you can get the context of each individual item."])),(l()(),e.qb(26,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Angular Component"])),(l()(),e.qb(28,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Summary of Options"])),(l()(),e.qb(30,0,null,null,95,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.qb(31,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.qb(32,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(33,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Input/Output"])),(l()(),e.qb(35,0,null,null,1,"th",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Values"])),(l()(),e.qb(37,0,null,null,1,"th",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default"])),(l()(),e.qb(39,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Effect"])),(l()(),e.qb(41,0,null,null,84,"tbody",[],null,null,null,null,null)),(l()(),e.qb(42,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(43,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(44,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrItems]"])),(l()(),e.qb(46,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: Array"])),(l()(),e.qb(48,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: undefined"])),(l()(),e.qb(50,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Array"])),(l()(),e.qb(52,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["undefined"])),(l()(),e.qb(54,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Sets the items of the current page"])),(l()(),e.qb(56,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(57,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(58,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrPage]"])),(l()(),e.qb(60,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: Number"])),(l()(),e.qb(62,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: undefined"])),(l()(),e.qb(64,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Number"])),(l()(),e.qb(66,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["undefined"])),(l()(),e.qb(68,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Sets the current page "])),(l()(),e.qb(70,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(71,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(72,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrPageSize]"])),(l()(),e.qb(74,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: Number"])),(l()(),e.qb(76,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: undefined"])),(l()(),e.qb(78,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Number"])),(l()(),e.qb(80,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["undefined"])),(l()(),e.qb(82,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Sets the page size "])),(l()(),e.qb(84,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(85,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(86,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrTotalItems]"])),(l()(),e.qb(88,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: Number"])),(l()(),e.qb(90,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: undefined"])),(l()(),e.qb(92,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Number"])),(l()(),e.qb(94,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["undefined"])),(l()(),e.qb(96,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Necessary to calculate the number of pages. "])),(l()(),e.qb(98,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(99,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(100,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrPagerPosition]"])),(l()(),e.qb(102,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: String"])),(l()(),e.qb(104,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: 'bottom'"])),(l()(),e.qb(106,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["'bottom', 'top', 'both'"])),(l()(),e.qb(108,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["'bottom'"])),(l()(),e.qb(110,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Defines where to show the generic pager. "])),(l()(),e.qb(112,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(113,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(114,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["(clrPageChange)"])),(l()(),e.qb(116,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: Function"])),(l()(),e.qb(118,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["N/A"])),(l()(),e.qb(120,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Function"])),(l()(),e.qb(122,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["N/A"])),(l()(),e.qb(124,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Fired every time the page changes "])),(l()(),e.qb(126,0,null,null,9,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.qb(127,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Code & Examples"])),(l()(),e.qb(129,0,null,null,4,"div",[["class","margin-top-24"]],null,null,null,null,null)),(l()(),e.qb(130,0,null,null,3,"clr-paged-search-result-list",[],null,[[null,"clrPageChange"]],function(l,n,u){var e=!0;return"clrPageChange"===n&&(e=!1!==l.component.onPageChanged(u)&&e),e},s.C,s.l)),e.pb(131,49152,null,1,i.w,[],{pageSize:[0,"pageSize"],currentPage:[1,"currentPage"],totalItems:[2,"totalItems"],items:[3,"items"]},{pageChange:"clrPageChange"}),e.Gb(335544320,1,{itemTemplate:0}),(l()(),e.ib(0,[[1,2]],null,0,null,q)),(l()(),e.qb(134,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),e.pb(135,4243456,null,0,o.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,131,0,u.pageSize,u.currentPage,u.allItems.length,u.pagedItems),l(n,135,0,u.htmlExample)},function(l,n){l(n,0,0,!0)})}function f(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"clr-search-result-list-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,I,g)),e.pb(1,49152,null,0,m,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var v=e.mb("clr-search-result-list-demo",m,f,{},{},[]),x=u("Ip0R"),w=u("gIcY"),P=u("xLE1"),S=u("XPsC"),z=u("ZYCi"),C=u("JsA7");u.d(n,"PagedSearchResultListDemoModuleNgFactory",function(){return T});var T=e.nb(t,[],function(l){return e.xb([e.yb(512,e.j,e.db,[[8,[b.eb,b.a,b.b,b.d,b.e,b.f,b.g,b.h,b.ab,b.bb,b.cb,b.db,b.c,a.a,s.a,v]],[3,e.j],e.x]),e.yb(4608,x.q,x.p,[e.u,[2,x.G]]),e.yb(4608,w.v,w.v,[]),e.yb(4608,i.f,i.f,[]),e.yb(1073742336,x.b,x.b,[]),e.yb(1073742336,P.cb,P.cb,[]),e.yb(1073742336,P.xc,P.xc,[]),e.yb(1073742336,P.Wd,P.Wd,[]),e.yb(1073742336,P.U,P.U,[]),e.yb(1073742336,P.d,P.d,[]),e.yb(1073742336,P.W,P.W,[]),e.yb(1073742336,P.r,P.r,[]),e.yb(1073742336,P.ie,P.ie,[]),e.yb(1073742336,P.p,P.p,[]),e.yb(1073742336,P.zc,P.zc,[]),e.yb(1073742336,P.L,P.L,[]),e.yb(1073742336,w.s,w.s,[]),e.yb(1073742336,w.e,w.e,[]),e.yb(1073742336,P.hb,P.hb,[]),e.yb(1073742336,P.xb,P.xb,[]),e.yb(1073742336,P.Bb,P.Bb,[]),e.yb(1073742336,P.Fb,P.Fb,[]),e.yb(1073742336,P.Xb,P.Xb,[]),e.yb(1073742336,P.Z,P.Z,[]),e.yb(1073742336,P.nb,P.nb,[]),e.yb(1073742336,P.Jc,P.Jc,[]),e.yb(1073742336,P.vd,P.vd,[]),e.yb(1073742336,P.E,P.E,[]),e.yb(1073742336,P.Pb,P.Pb,[]),e.yb(1073742336,P.cc,P.cc,[]),e.yb(1073742336,P.v,P.v,[]),e.yb(1073742336,P.rb,P.rb,[]),e.yb(1073742336,P.mb,P.mb,[]),e.yb(1073742336,P.i,P.i,[]),e.yb(1073742336,P.j,P.j,[]),e.yb(1073742336,P.pb,P.pb,[]),e.yb(1073742336,P.ub,P.ub,[]),e.yb(1073742336,P.Dd,P.Dd,[]),e.yb(1073742336,P.Ub,P.Ub,[]),e.yb(1073742336,P.hc,P.hc,[]),e.yb(1073742336,P.kb,P.kb,[]),e.yb(1073742336,P.Ib,P.Ib,[]),e.yb(1073742336,P.ac,P.ac,[]),e.yb(1073742336,P.yb,P.yb,[]),e.yb(1073742336,P.lc,P.lc,[]),e.yb(1073742336,P.P,P.P,[]),e.yb(1073742336,P.a,P.a,[]),e.yb(1073742336,S.a,S.a,[]),e.yb(1073742336,z.o,z.o,[[2,z.u],[2,z.l]]),e.yb(1073742336,C.a,C.a,[]),e.yb(1073742336,i.J,i.J,[]),e.yb(1073742336,i.z,i.z,[]),e.yb(1073742336,i.x,i.x,[]),e.yb(1073742336,i.h,i.h,[]),e.yb(1073742336,i.e,i.e,[]),e.yb(1073742336,i.q,i.q,[]),e.yb(1073742336,i.m,i.m,[]),e.yb(1073742336,i.s,i.s,[]),e.yb(1073742336,i.o,i.o,[]),e.yb(1073742336,i.c,i.c,[]),e.yb(1073742336,i.v,i.v,[]),e.yb(1073742336,i.F,i.F,[]),e.yb(1073742336,i.B,i.B,[]),e.yb(1073742336,i.a,i.a,[]),e.yb(1073742336,t,t,[]),e.yb(1024,z.j,function(){return[[{path:"",component:m}]]},[])])})}}]);