import{_ as o,r as s,o as r,c as l,a as t,d as i,b as n,e as c}from"./app-X-Dis4ur.js";const a="/assets/1698159134354-U-QrQbww.png",h="/assets/1698159222237-x9ET9RBV.png",d={},p=t("h2",{id:"_1-git是一款分布式源代码管理工具-版本控制工具",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-git是一款分布式源代码管理工具-版本控制工具","aria-hidden":"true"},"#"),i(" 1.Git是一款分布式源代码管理工具(版本控制工具)")],-1),_=t("div",{class:"custom-container info"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M12 8h.01"}),t("path",{d:"M11 12h1v4h1"})])]),t("p",{class:"custom-container-title"},"Git?"),t("p",null,"Git得其数据更像是一系列微型文件系统的快照。使用Git，每次提交或保存项目状态时，Git基本上都会记录当时所有文件的外观，并存储对该快照的引用。为了提高效率，如果文件没有改变，Git不会再次存储文件，只是指向它已存储的上一个相同文件的链接。Git认为它的数据更像是一个快照流，会将数据作为项目的快照存储一段时间。可以有效、高速地处理从很小到非常大的项目版本管理。 也是Linus Torvalds为了帮助管理Linux内核开发而开发的一个开放源码的版本控制软件。（一句话概括：Git是目前世界上最先进的分布式版本控制系统。 Git是免费、开源的！ 最初Git是为辅助 Linux 内核开发的，来替代 BitKeeper 作者👨🏻‍🦲 Linux和Git之父李纳斯·托沃兹（Linus Benedic Torvalds）1969、芬兰人）")],-1),g=t("h2",{id:"_2-git数据库介绍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-git数据库介绍","aria-hidden":"true"},"#"),i(" 2."),t("strong",null,"Git数据库介绍")],-1),u=t("div",{class:"custom-container info"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M12 8h.01"}),t("path",{d:"M11 12h1v4h1"})])]),t("p",{class:"custom-container-title"},"GitDataBase"),t("p",null,"Git中的大多数操作只需要本地文件和资源来运行 - 通常不需要来自网络上另一台计算机的信息。当您在Git中执行操作时，几乎所有操作都只将数据添加到Git数据库。很难让系统做任何不可撤销的事情或者以任何方式擦除数据。与任何VCS一样，您可能会丢失或搞乱尚未提交的更改，但在将快照提交到Git之后，很难丢失，尤其是在您经常将数据库推送到另一个存储库时。")],-1),m=t("p",null,[t("img",{src:a,alt:"1698159134354"})],-1),w=t("h2",{id:"_3-git的使用",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-git的使用","aria-hidden":"true"},"#"),i(" 3.Git的使用")],-1),x=t("div",{class:"custom-container warning"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M12 8v4"}),t("path",{d:"M12 16h.01"})])]),t("p",{class:"custom-container-title"},"Use"),t("p",null,"当你需要做一个大工程的时候，文件的管理无疑是非常庞大的工作，因为你需要不断的修改更新文件内容，同时可能还要保留旧版本保证可以复原，这样就需要备份多个版本的文件。"),t("p",null,"并且在大多数情况下一个工程需要在多数人来共同维护，那么这种情况下不同人之间修改内容的合并也是非常麻烦的，这时使用git就可以很轻松的解决这些问题。")],-1),k=c('<p><img src="'+h+'" alt="1698159222237"></p><h2 id="_4-优缺点" tabindex="-1"><a class="header-anchor" href="#_4-优缺点" aria-hidden="true">#</a> 4.优缺点</h2><p><strong>优点</strong>：</p><ul><li>适合分布式开发，强调个体。</li><li>公共服务器压力和数据量都不会太大。</li><li>速度快、灵活。</li><li>开发者之间可以很容易的解决冲突。</li><li>离线工作。</li></ul><p><strong>缺点：</strong></p><ul><li>模式上比SVN更加复杂。</li><li>不符合常规思维。</li><li>代码保密性差，一旦开发者把整个库克隆下来就可以完全公开所有代码和版本信息。</li></ul>',6),f={href:"https://git-scm.com/",title:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/git/git/",title:"https://github.com/git/git/",target:"_blank",rel:"noopener noreferrer"};function G(b,B){const e=s("ExternalLinkIcon");return r(),l("div",null,[p,_,g,u,m,w,x,k,t("p",null,[i("官网："),t("a",f,[i("https://git-scm.com/"),n(e)])]),t("p",null,[i("源码："),t("a",v,[i("https://github.com/git/git/"),n(e)])])])}const V=o(d,[["render",G],["__file","git_1.html.vue"]]);export{V as default};