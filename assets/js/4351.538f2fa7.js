"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[4351],{65130:function(n,e,r){r.d(e,{b:function(){return i},k:function(){return c}});var t=r(67294),u=r(44700),o=t.createContext(null);function i(n){var e=n.children,r=function(n){return(0,t.useMemo)((function(){return{metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}}),[n])}(n.content);return t.createElement(o.Provider,{value:r},e)}function c(){var n=(0,t.useContext)(o);if(null===n)throw new u.i6("DocProvider");return n}},14353:function(n,e,r){r.d(e,{D:function(){return c},f:function(){return a}});var t=r(67294),u=r(44700),o=Symbol("EmptyContext"),i=t.createContext(o);function c(n){var e=n.children,r=(0,t.useState)(null),u=r[0],o=r[1],c=(0,t.useMemo)((function(){return{expandedItem:u,setExpandedItem:o}}),[u]);return t.createElement(i.Provider,{value:c},e)}function a(){var n=(0,t.useContext)(i);if(n===o)throw new u.i6("DocSidebarItemsExpandedStateProvider");return n}},2730:function(n,e,r){r.d(e,{a:function(){return i}});var t=r(67294),u=r(12466),o=r(85936);function i(n){var e=n.threshold,r=(0,t.useState)(!1),i=r[0],c=r[1],a=(0,t.useRef)(!1),s=(0,u.Ct)(),f=s.startScroll,l=s.cancelScroll;return(0,u.RF)((function(n,r){var t=n.scrollY,u=null==r?void 0:r.scrollY;u&&(a.current?a.current=!1:t>=u?(l(),c(!1)):t<e?c(!1):t+window.innerHeight<document.documentElement.scrollHeight&&c(!0))})),(0,o.S)((function(n){n.location.hash&&(a.current=!0,c(!1))})),{shown:i,scrollToTop:function(){return f(0)}}}},96841:function(n,e,r){r.d(e,{S:function(){return a}});var t=r(67294),u=r(86668);function o(n){var e=n.getBoundingClientRect();return e.top===e.bottom?o(n.parentNode):e}function i(n,e){var r,t,u=e.anchorTopOffset,i=n.find((function(n){return o(n).top>=u}));return i?function(n){return n.top>0&&n.bottom<window.innerHeight/2}(o(i))?i:null!=(t=n[n.indexOf(i)-1])?t:null:null!=(r=n[n.length-1])?r:null}function c(){var n=(0,t.useRef)(0),e=(0,u.L)().navbar.hideOnScroll;return(0,t.useEffect)((function(){n.current=e?0:document.querySelector(".navbar").clientHeight}),[e]),n}function a(n){var e=(0,t.useRef)(void 0),r=c();(0,t.useEffect)((function(){if(!n)return function(){};var t=n.linkClassName,u=n.linkActiveClassName,o=n.minHeadingLevel,c=n.maxHeadingLevel;function a(){var n=function(n){return Array.from(document.getElementsByClassName(n))}(t),a=function(n){for(var e=n.minHeadingLevel,r=n.maxHeadingLevel,t=[],u=e;u<=r;u+=1)t.push("h"+u+".anchor");return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),s=i(a,{anchorTopOffset:r.current}),f=n.find((function(n){return s&&s.id===function(n){return decodeURIComponent(n.href.substring(n.href.indexOf("#")+1))}(n)}));n.forEach((function(n){!function(n,r){r?(e.current&&e.current!==n&&e.current.classList.remove(u),n.classList.add(u),e.current=n):n.classList.remove(u)}(n,n===f)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[n,r])}},23477:function(n,e,r){r.r(e),r.d(e,{AnnouncementBarProvider:function(){return E.pl},BlogPostProvider:function(){return x.n},Collapsible:function(){return a.z},ColorModeProvider:function(){return d.S},DEFAULT_SEARCH_TAG:function(){return o.HX},DocProvider:function(){return T.b},DocSidebarItemsExpandedStateProvider:function(){return P.D},DocsPreferredVersionContextProvider:function(){return S.L5},DocsSidebarProvider:function(){return y.b},DocsVersionProvider:function(){return L.q},HtmlClassNameProvider:function(){return l.FG},NavbarProvider:function(){return V.V},NavbarSecondaryMenuFiller:function(){return v.Zo},PageMetadata:function(){return l.d},PluginHtmlClassNameProvider:function(){return l.VC},ReactContextError:function(){return f.i6},ScrollControllerProvider:function(){return F.OC},TabGroupChoiceProvider:function(){return H.z},ThemeClassNames:function(){return s.k},composeProviders:function(){return f.Qc},containsLineNumbers:function(){return I.nt},createStorageSlot:function(){return u.W},docVersionSearchTag:function(){return o.os},duplicates:function(){return b.l},findFirstCategoryLink:function(){return i.Wl},findSidebarCategory:function(){return i.em},getPrismCssVariables:function(){return I.QC},isActiveSidebarItem:function(){return i._F},isDocsPluginEnabled:function(){return i.cE},isMultiColumnFooterLinks:function(){return g.a},isRegexpStringMatch:function(){return p.F},isSamePath:function(){return O.Mg},keyboardFocusedClassName:function(){return z.h},listStorageKeys:function(){return u._},listTagsByLetters:function(){return h.P},parseCodeBlockTitle:function(){return I.bc},parseLanguage:function(){return I.Vo},parseLines:function(){return I.nZ},splitNavbarItems:function(){return V.A},translateTagsPageTitle:function(){return h.M},uniq:function(){return b.j},useAlternatePageUtils:function(){return M.l},useAnnouncementBar:function(){return E.nT},useBackToTopButton:function(){return X.a},useBlogPost:function(){return x.C},useCodeWordWrap:function(){return Y.F},useCollapsible:function(){return a.u},useColorMode:function(){return d.I},useContextualSearchFilters:function(){return o._q},useCurrentSidebarCategory:function(){return i.jA},useDoc:function(){return T.k},useDocById:function(){return i.xz},useDocRouteMetadata:function(){return i.hI},useDocSidebarItemsExpandedState:function(){return P.f},useDocsPreferredVersion:function(){return S.J},useDocsPreferredVersionByPluginId:function(){return S.Oh},useDocsSidebar:function(){return y.V},useDocsVersion:function(){return L.E},useDocsVersionCandidates:function(){return i.lO},useEvent:function(){return f.zX},useFilteredAndTreeifiedTOC:function(){return B.b},useHideableNavbar:function(){return j.c},useHistoryPopHandler:function(){return R.R},useHomePageRoute:function(){return O.Ns},useIsomorphicLayoutEffect:function(){return f.LI},useKeyboardNavigation:function(){return z.t},useLayoutDoc:function(){return i.vY},useLayoutDocsSidebar:function(){return i.oz},useLocalPathname:function(){return A.b},useLocationChange:function(){return N.S},useLockBodyScroll:function(){return q.N},useNavbarMobileSidebar:function(){return D.e},useNavbarSecondaryMenu:function(){return k.Y},usePluralForm:function(){return c.c},usePrevious:function(){return f.D9},usePrismTheme:function(){return C.p},useScrollController:function(){return F.sG},useScrollPosition:function(){return F.RF},useScrollPositionBlocker:function(){return F.o5},useSearchPage:function(){return Q},useSidebarBreadcrumbs:function(){return i.s1},useSkipToContent:function(){return K.a},useSmoothScrollTo:function(){return F.Ct},useTOCHighlight:function(){return U.S},useTabGroupChoice:function(){return H.U},useThemeConfig:function(){return t.L},useTitleFormatter:function(){return w.p},useTreeifiedTOC:function(){return B.a},useWindowSize:function(){return m.i}});var t=r(86668),u=r(50012),o=r(43320),i=r(53438),c=r(88824),a=r(86043),s=r(35281),f=r(44700),l=r(10833),d=r(92949),v=r(13102),m=r(87524),h=r(35155),g=r(42489),p=r(98022),b=r(67392),C=r(66412),S=r(60373),P=r(14353),L=r(74477),y=r(1116),T=r(65130),x=r(9460),E=r(59689),H=r(7094),D=r(93163),k=r(76857),M=r(94711),I=r(37016),w=r(82128),N=r(85936),A=r(51753),R=r(91980),B=r(39665),F=r(12466),O=r(48596),V=r(58978),U=r(96841),j=r(99445),z=r(19727),q=r(69800),_=r(67294),G=r(76775),W=r(52263),Z="q";function Q(){var n=(0,G.k6)(),e=(0,W.Z)().siteConfig.baseUrl,r=(0,_.useState)(""),t=r[0],u=r[1];return(0,_.useEffect)((function(){var n,e=null!=(n=new URLSearchParams(window.location.search).get(Z))?n:"";u(e)}),[]),{searchQuery:t,setSearchQuery:(0,_.useCallback)((function(e){var r=new URLSearchParams(window.location.search);e?r.set(Z,e):r.delete(Z),n.replace({search:r.toString()}),u(e)}),[n]),generateSearchPageLink:(0,_.useCallback)((function(n){return e+"search?"+"q="+encodeURIComponent(n)}),[e])}}var Y=r(85448),K=r(68721),X=r(2730)},35155:function(n,e,r){r.d(e,{M:function(){return u},P:function(){return o}});var t=r(95999),u=function(){return(0,t.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function o(n){var e={};return Object.values(n).forEach((function(n){var r=function(n){return n[0].toUpperCase()}(n.label);null!=e[r]||(e[r]=[]),e[r].push(n)})),Object.entries(e).sort((function(n,e){var r=n[0],t=e[0];return r.localeCompare(t)})).map((function(n){return{letter:n[0],tags:n[1].sort((function(n,e){return n.label.localeCompare(e.label)}))}}))}},39665:function(n,e,r){r.d(e,{a:function(){return c},b:function(){return s}});var t=r(80102),u=r(67294),o=["parentIndex"];function i(n){var e=n.map((function(n){return Object.assign({},n,{parentIndex:-1,children:[]})})),r=Array(7).fill(-1);e.forEach((function(n,e){var t=r.slice(2,n.level);n.parentIndex=Math.max.apply(Math,t),r[n.level]=e}));var u=[];return e.forEach((function(n){var r=n.parentIndex,i=(0,t.Z)(n,o);r>=0?e[r].children.push(i):u.push(i)})),u}function c(n){return(0,u.useMemo)((function(){return i(n)}),[n])}function a(n){var e=n.toc,r=n.minHeadingLevel,t=n.maxHeadingLevel;return e.flatMap((function(n){var e=a({toc:n.children,minHeadingLevel:r,maxHeadingLevel:t});return function(n){return n.level>=r&&n.level<=t}(n)?[Object.assign({},n,{children:e})]:e}))}function s(n){var e=n.toc,r=n.minHeadingLevel,t=n.maxHeadingLevel;return(0,u.useMemo)((function(){return a({toc:i(e),minHeadingLevel:r,maxHeadingLevel:t})}),[e,r,t])}},86010:function(n,e,r){function t(n){var e,r,u="";if("string"==typeof n||"number"==typeof n)u+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(r=t(n[e]))&&(u&&(u+=" "),u+=r);else for(e in n)n[e]&&(u&&(u+=" "),u+=e);return u}function u(){for(var n,e,r=0,u="";r<arguments.length;)(n=arguments[r++])&&(e=t(n))&&(u&&(u+=" "),u+=e);return u}r.d(e,{Z:function(){return u}})}}]);