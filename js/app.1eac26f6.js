(function(e){function t(t){for(var i,s,a=t[0],c=t[1],d=t[2],u=0,l=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);g&&g(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ring-fit/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var g=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0302":function(e,t,n){},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"0497":function(e,t,n){e.exports=n.p+"img/22.2fb23584.png"},"0f29":function(e,t,n){e.exports=n.p+"img/11_1.b80b6a32.png"},1:function(e,t){},"18b9":function(e,t,n){e.exports=n.p+"img/20.d1a75b28.png"},2:function(e,t){},"25d9":function(e,t,n){e.exports=n.p+"img/24.3e3f1ecb.png"},2711:function(e,t,n){e.exports=n.p+"img/7.1c6aee6d.png"},2777:function(e,t,n){e.exports=n.p+"img/23_0.8d2d5f1a.png"},"2cb3":function(e,t,n){e.exports=n.p+"img/20_1.be234118.png"},"2d11":function(e,t,n){e.exports=n.p+"img/4_1.5f15572a.png"},"2d4b":function(e,t,n){},"2f08":function(e,t,n){e.exports=n.p+"img/17_0.fe5a7157.png"},"30d4":function(e,t,n){e.exports=n.p+"img/2.7cc6adee.png"},3314:function(e,t,n){e.exports=n.p+"img/14_0.7b20b96c.png"},"33cf":function(e,t,n){e.exports=n.p+"img/4.cf15eac1.png"},"3fa8":function(e,t,n){"use strict";var i=n("c70b"),r=n.n(i);r.a},"42b6":function(e,t,n){e.exports=n.p+"img/10.66fac188.png"},"4eee":function(e,t,n){e.exports=n.p+"img/14_1.90b4b5ba.png"},"51c1":function(e,t,n){"use strict";var i=n("2d4b"),r=n.n(i);r.a},"539d":function(e,t,n){e.exports=n.p+"img/15_1.1e23240e.png"},5429:function(e,t,n){e.exports=n.p+"img/17_1.2ee2befc.png"},"54be":function(e,t,n){e.exports=n.p+"img/10_0.01305337.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("99af"),n("4de4"),n("caad"),n("d81d"),n("d3b7"),n("2532"),n("ddb0"),n("96cf");var i=n("1da1"),r=n("3835"),o=n("b85c"),s=n("ade3"),a=n("2909"),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-header",[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("message.smoothiePageHeader")))]),e._v(" | "),n("router-link",{attrs:{to:"/ingredient_location"}},[e._v(e._s(e.$t("message.ingredientLocationPageHeader")))]),e._v(" | "),n("router-link",{attrs:{to:"/course"}},[e._v(e._s(e.$t("message.coursePageHeader")))]),e._v(" | "),n("router-link",{attrs:{to:"/ingredient/0"}},[e._v(e._s(e.$t("message.ingredientPageHeader")))]),e._v(" | "),n("router-link",{attrs:{to:"/world_map"}},[e._v(e._s(e.$t("message.worldMapPageHeader")))]),n("single-locale-modifier",{staticStyle:{"padding-top":"5px",float:"right"}})],1)]),n("router-view")],1)},g=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-modifier"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},e._l(e.langs,(function(t,i){return n("option",{key:"Lang"+i,domProps:{value:t}},[e._v(e._s(t))])})),0)])},l=[],p={name:"SingleLocaleModifier",data:function(){return{langs:["zh","en"]}}},f=p,m=n("2877"),h=Object(m["a"])(f,u,l,!1,null,"6401a56b",null),b=h.exports,_={components:{SingleLocaleModifier:b}},v=_,x=(n("034f"),Object(m["a"])(v,d,g,!1,null,null,null)),$=x.exports,y=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("filter-bar"),n("SmoothieList",{attrs:{smoothies:e.$store.state.smoothies}})],1)},w=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{margin:"auto"},attrs:{data:e.smoothieParsed,"row-class-name":e.getRowClass},on:{"row-click":e.flip}},[n("el-table-column",{attrs:{label:e.$t("message.name"),prop:"name",sortable:""}}),e._l(3,(function(t){return n("el-table-column",{key:t,attrs:{label:e.$t("message.ingredient")+t,prop:"ingredient"+t}})})),n("el-table-column",{attrs:{label:e.$t("message.recovery"),prop:"recovery",sortable:""}}),n("el-table-column",{attrs:{label:e.$t("message.effect"),prop:"effect"}}),n("el-table-column",{attrs:{label:e.$t("message.world"),prop:"world",sortable:""}}),n("el-table-column",{attrs:{label:e.$t("message.description"),prop:"description"}})],2)},S=[],j=(n("a4d3"),n("e01a"),n("b0c0"),{props:["smoothies"],methods:{ingredientCountToText:function(e){if(0===e.name.length)return"";var t=this.$store.state.ingredientEnToID[e.name],n=this.$t("ingredients["+t+"]");return n+" x "+e.count},getRowClass:function(e){var t=e.row;e.rowIndex;return this.$store.state.selectedSmoothies.includes(t.id)?"userSelected":""},flip:function(e){this.$store.commit("flipSmoothie",e.id)}},computed:{smoothieParsed:function(){var e=this;return this.smoothies.map((function(t){return{id:t.id,name:e.$t("smoothies["+e.$store.state.smoothieEnToID[t.name]+"]"),ingredient1:e.ingredientCountToText(t.ingredients[0]),ingredient2:e.ingredientCountToText(t.ingredients[1]),ingredient3:e.ingredientCountToText(t.ingredients[2]),recovery:t.recovery,effect:t.effect,world:t.world,description:t.description}}))}}}),L=j,P=(n("3fa8"),Object(m["a"])(L,O,S,!1,null,null,null)),E=P.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",[n("el-row",{attrs:{gutter:24}},[n("smoothie-filter"),n("ingredient-filter")],1)],1)},k=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-col",{attrs:{sm:24,lg:8}},[n("el-button",{staticStyle:{"margin-right":"5px"},attrs:{icon:"el-icon-right",size:"small"},on:{click:e.importFromReferred}}),n("el-select",{staticStyle:{width:"calc(98% - 50px)"},attrs:{multiple:"",filterable:"",clearable:""},model:{value:e.selectedIngredients,callback:function(t){e.selectedIngredients=t},expression:"selectedIngredients"}},e._l(e.ingredients,(function(t){return n("el-option",{key:t[0],attrs:{label:t[1],value:t[0]}},[e._v(" "+e._s(t[1])+" ")])})),1)],1)},C=[],N={name:"IngredientFilter",computed:{selectedIngredients:{set:function(e){this.$store.commit("updateSelectedIngredients",e)},get:function(){return this.$store.state.selectedIngredients}},ingredients:function(){var e=this;return this.$store.state.ingredients.map((function(t){return[t[0],e.$t("ingredients["+e.$store.state.ingredientEnToID[t[1]]+"]")]}))}},methods:{importFromReferred:function(){this.selectedIngredients=this.$store.state.ingredientsReferred,"/ingredient_location"!==this.$router.currentRoute&&this.$router.push("/ingredient_location")}}},H=N,R=Object(m["a"])(H,D,C,!1,null,"61590405",null),M=R.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-col",{attrs:{sm:24,lg:16}},[n("el-row",[n("el-col",{attrs:{sm:24,lg:8}},[n("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"",clearable:"",size:"medium"},model:{value:e.selectedSmoothies,callback:function(t){e.selectedSmoothies=t},expression:"selectedSmoothies"}},e._l(e.smoothieTexts,(function(t){return n("el-option",{key:t[0],attrs:{label:t[1],value:t[0]}},[e._v(" "+e._s(t[1])+" ")])})),1)],1),n("el-col",{attrs:{sm:24,lg:16}},e._l(e.ingredientsReferred,(function(t){return n("el-tag",{key:t,staticClass:"tag",attrs:{size:"small",type:"warning"}},[e._v(" "+e._s(e.$t("ingredients["+t+"]"))+" ")])})),1)],1)],1)},F=[],U=(n("6062"),n("3ca3"),{name:"SmoothieFilter",computed:{selectedSmoothies:{set:function(e){this.$store.commit("updateSelectedSmoothies",e)},get:function(){return this.$store.state.selectedSmoothies}},ingredientsReferred:function(){var e,t=this,n=new Set,i=Object(o["a"])(this.selectedSmoothies);try{for(i.s();!(e=i.n()).done;){var r=e.value,s=this.smoothies[parseInt(r)];n.add(s.ingredients[0].name),n.add(s.ingredients[1].name),n.add(s.ingredients[2].name)}}catch(d){i.e(d)}finally{i.f()}n.delete("");var c=Object(a["a"])(n).map((function(e){return t.$store.state.ingredientEnToID[e]}));return this.$store.commit("updateIngredientReferred",c),c},smoothies:function(){return this.$store.state.smoothies},smoothieTexts:function(){var e=this;return this.$store.state.smoothies.map((function(t){return[t.id,e.$t("smoothies["+t.id+"]")]}))}}}),W=U,B=(n("e722"),Object(m["a"])(W,z,F,!1,null,"49d18270",null)),Z=B.exports,J={name:"FilterBar",components:{IngredientFilter:M,SmoothieFilter:Z}},A=J,q=Object(m["a"])(A,T,k,!1,null,"791af6cc",null),G=q.exports,K={name:"SmoothiePage",components:{SmoothieList:E,FilterBar:G}},Q=K,V=Object(m["a"])(Q,I,w,!1,null,null,null),X=V.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("filter-bar"),n("IngredientLocationList",{attrs:{"ingredient-locations":e.ingredientLocations,"highlighted-ingredients":e.$store.state.selectedIngredients}})],1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{margin:"auto"},attrs:{data:e.ingredientLocationsParsed}},[n("el-table-column",{attrs:{label:e.$t("message.world"),prop:"world",sortable:""}}),n("el-table-column",{attrs:{label:e.$t("message.stageNumber"),prop:"stageNumber"}}),e._l(5,(function(t){return n("el-table-column",{key:t,attrs:{label:e.$t("message.ingredient")+t,prop:"ingredient"+t},scopedSlots:e._u([{key:"default",fn:function(i){return[n("div",{class:{"unit-selected":e.$store.state.ingredientEnToID.hasOwnProperty(i.row["ingredient"+t])&&e.highlightedIngredients.includes(e.$store.state.ingredientEnToID[i.row["ingredient"+t]])}},[e._v(" "+e._s(e.$t("ingredients["+e.$store.state.ingredientEnToID[i.row["ingredient"+t]]+"]"))+" ")])]}}],null,!0)})})),n("el-table-column",{attrs:{label:e.$t("message.course"),prop:"course"}}),n("el-table-column",{attrs:{label:e.$t("message.difficulty"),prop:"difficulty",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{style:{color:"#000000",backgroundColor:"#"+t.row.difficultyColor}},[e._v(" "+e._s(t.row.difficulty)+" ")])]}}])})],2)},ne=[],ie=n("5530"),re=n("2f62"),oe={name:"IngredientLocationList",props:["ingredientLocations","highlightedIngredients"],computed:Object(ie["a"])({ingredientLocationsParsed:function(){var e=this;return this.ingredientLocations.map((function(t){var n=e.stageNumberToID[t.stageNumber],i=e.stages[n][4];return{world:t.world,stageNumber:t.stageNumber,ingredient1:t.ingredients[0],ingredient2:t.ingredients[1],ingredient3:t.ingredients[2],ingredient4:t.ingredients[3],ingredient5:t.ingredients[4],course:i,difficulty:e.courses[i][2],difficultyColor:e.courses[i][1]}}))}},Object(re["b"])(["stageNumberToID","stages","courses"]))},se=oe,ae=(n("bb4c"),Object(m["a"])(se,te,ne,!1,null,"36a6bc24",null)),ce=ae.exports,de={name:"ingredient-location-page",components:{IngredientLocationList:ce,FilterBar:G},computed:{allIngredientLocations:function(){return this.$store.state.ingredientLocations},ingredientLocations:function(){var e=this;return 0===this.selectedIngredients.length?this.allIngredientLocations:this.allIngredientLocations.filter((function(t){return t.ingredients.filter((function(t){return e.selectedIngredients.includes(e.$store.state.ingredientEnToID[t])})).length>0}))},selectedIngredients:function(){return this.$store.state.selectedIngredients}}},ge=de,ue=Object(m["a"])(ge,Y,ee,!1,null,null,null),le=ue.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("course-list")],1)},fe=[],me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticStyle:{margin:"auto",width:"100%"}},e._l(e.courses,(function(e,t){return n("course",{key:t,attrs:{course:e}})})),1)},he=[],be=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("td",[e._v(e._s(e.course[0]))]),i("td",[i("el-tag",{style:{color:"#000000",backgroundColor:"#"+e.course[1]}},[e._v(e._s(e.course[2]))])],1),i("img",{attrs:{src:n("5e40")("./"+e.course[0]+".png"),width:"50px",height:"50px"}}),i("td",[e._v(e._s(e.course[3]))])])},_e=[],ve={name:"Course",props:["course"]},xe=ve,$e=Object(m["a"])(xe,be,_e,!1,null,"c10c00bc",null),ye=$e.exports,Ie={name:"CourseList",computed:{courses:function(){return this.$store.state.courses}},components:{Course:ye}},we=Ie,Oe=Object(m["a"])(we,me,he,!1,null,"226903d7",null),Se=Oe.exports,je={name:"CoursePage",components:{CourseList:Se}},Le=je,Pe=Object(m["a"])(Le,pe,fe,!1,null,"bb1a38e2",null),Ee=Pe.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-container",[n("el-aside",{staticStyle:{height:"calc(100vh - 85px)"},attrs:{width:"100px"}},[n("el-scrollbar",{staticStyle:{height:"100%","overflow-x":"hidden"}},[n("ingredient-list")],1)],1),n("el-main",[n("ingredient-detail")],1)],1)],1)},ke=[],De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{attrs:{"default-active":e.$route.params.id},on:{select:e.selectIngredient}},e._l(e.$store.state.ingredients,(function(t,i){return n("el-menu-item",{key:i,staticStyle:{padding:"0px","text-align":"center"},attrs:{index:String(i)}},[e._v(e._s(e.$t("ingredients["+i+"]")))])})),1)},Ce=[],Ne={name:"IngredientList",methods:{selectIngredient:function(e){e=parseInt(e),this.$store.commit("updateSelectedIngredient",e),this.$router.push({path:"/ingredient/"+e})}}},He=Ne,Re=Object(m["a"])(He,De,Ce,!1,null,null,null),Me=Re.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"left"}},[n("p",[e._v("ID: "+e._s(e.ingredient.id))]),n("p",[e._v("English Name: "+e._s(e.ingredient.nameEn))]),n("p",[e._v("中文名称: "+e._s(e.ingredient.nameZh))]),n("p",{staticClass:"segment-header"},[e._v(e._s(e.$t("message.smoothiePageHeader")))]),n("smoothie-list",{attrs:{smoothies:e.ingredient.smoothies}}),n("p",{staticClass:"segment-header"},[e._v(e._s(e.$t("message.ingredientLocationPageHeader")))]),n("ingredient-location-list",{attrs:{"ingredient-locations":e.ingredient.locations,"highlighted-ingredients":[e.ingredient.id]}})],1)},Fe=[],Ue=(n("45fc"),{name:"IngredientDetail",components:{IngredientLocationList:ce,SmoothieList:E},computed:{ingredient:function(){var e=this.$store.state.selectedIngredient,t=this.$store.state.ingredients;if(e>=t.length)return{id:"",nameEn:"",nameZh:"",smoothies:[],locations:[]};var n=t[e],i={};i.id=n[0],i.nameEn=this.$t("ingredients["+n[0]+"]","en"),i.nameZh=this.$t("ingredients["+n[0]+"]","zh");var r=this.$store.state.smoothies,o=this.$store.state.ingredientLocations;return i.smoothies=r.filter((function(e){return e.ingredients.some((function(e){return e.name===i.nameEn}))})),i.locations=o.filter((function(e){return e.ingredients.includes(i.nameEn)})),i}}}),We=Ue,Be=(n("51c1"),Object(m["a"])(We,ze,Fe,!1,null,"fd9a4026",null)),Ze=Be.exports,Je={name:"IngredientPage.vue",components:{IngredientDetail:Ze,IngredientList:Me},watch:{$route:function(){this.$store.commit("updateSelectedIngredient",this.$route.params.id)}}},Ae=Je,qe=(n("e49b"),Object(m["a"])(Ae,Te,ke,!1,null,null,null)),Ge=qe.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-row",{attrs:{span:24,gutter:5}},e._l(e.imageList,(function(e,t){return n("el-col",{key:t,attrs:{xl:8,lg:8,sm:24}},[n("img",{staticStyle:{width:"100%"},attrs:{src:e}})])})),1)],1)},Qe=[],Ve=[1,1,1,2,2,2,1,2,2,2,2,1,1,2,2,2,2,1,2,2,2,2,2],Xe={name:"WorldMapPage.vue",computed:{imageList:function(){for(var e=[],t=0;t<Ve.length;t++)for(var i=0;i<Ve[t];i++)e.push(n("be1c")("./"+(t+1)+"_"+i+".png"));return e}}},Ye=Xe,et=Object(m["a"])(Ye,Ke,Qe,!1,null,"bc7be2c0",null),tt=et.exports;c["default"].use(y["a"]);var nt=[{path:"/",name:"SmoothiePage",component:X},{path:"/ingredient_location",name:"IngredientLocationPage",component:le},{path:"/course",name:"CoursePage",component:Ee},{path:"/ingredient/:id",name:"IngredientPage",component:Ge},{path:"/world_map",name:"WorldMapPage",component:tt}],it=new y["a"]({routes:nt}),rt=it,ot=n("5c96"),st=n.n(ot),at=(n("0fae"),n("bc3a")),ct=n.n(at),dt=n("86ec"),gt=n.n(dt),ut=n("a925"),lt=n("d4ec"),pt=function e(t,n){Object(lt["a"])(this,e),Object(s["a"])(this,"name",void 0),Object(s["a"])(this,"count",void 0),this.name=t,this.count=n},ft=function e(t){Object(lt["a"])(this,e),Object(s["a"])(this,"id",void 0),Object(s["a"])(this,"name",void 0),Object(s["a"])(this,"ingredients",void 0),Object(s["a"])(this,"recovery",void 0),Object(s["a"])(this,"effect",void 0),Object(s["a"])(this,"world",void 0),Object(s["a"])(this,"description",void 0),this.id=t[0],this.name=t[1],this.ingredients=[new pt(t[2],t[3]),new pt(t[4],t[5]),new pt(t[6],t[7])],this.recovery=t[8],this.effect=t[9],this.world=parseInt(t[10]),this.description=t[11]},mt=function e(t){Object(lt["a"])(this,e),Object(s["a"])(this,"world",void 0),Object(s["a"])(this,"stageNumber",void 0),Object(s["a"])(this,"ingredients",void 0),Object(s["a"])(this,"course",void 0),this.world=parseInt(t[0]),this.stageNumber=t[1],this.ingredients=[t[2],t[3],t[4],t[5],t[6]]};c["default"].config.productionTip=!1,c["default"].use(st.a),c["default"].use(re["a"]),c["default"].use(ut["a"]);var ht={en:{message:{smoothiePageHeader:"Smoothies",ingredientLocationPageHeader:"Ingredient Locations",coursePageHeader:"Courses",ingredientPageHeader:"Ingredient",worldMapPageHeader:"World Map",world:"World",stageNumber:"Stage",ingredient:"Ingredient",course:"Course",difficulty:"Difficulty",name:"Name",recovery:"Recovery",effect:"Effect",description:"Description"}},zh:{message:{smoothiePageHeader:"果汁",ingredientLocationPageHeader:"素材位置",coursePageHeader:"关卡类型",ingredientPageHeader:"素材",worldMapPageHeader:"世界地图",world:"世界",stageNumber:"关卡",ingredient:"素材",course:"关卡类型",difficulty:"难度",name:"名称",recovery:"回复量",effect:"效果",description:"获取方式"}}},bt=new ut["a"]({locale:"zh",messages:ht}),_t=new re["a"].Store({state:{selectedIngredients:[],ingredients:[],selectedSmoothies:[],ingredientsReferred:[],smoothies:[],ingredientEnToID:[],smoothieEnToID:[],courses:[],stages:[],stageNumberToID:{},selectedIngredient:0,ingredientLocations:[]},mutations:{updateIngredientReferred:function(e,t){e.ingredientsReferred=t},updateSelectedIngredients:function(e,t){e.selectedIngredients=t},updateSelectedSmoothies:function(e,t){e.selectedSmoothies=t},updateIngredients:function(e,t){e.ingredients=t},updateSmoothies:function(e,t){e.smoothies=t},flipSmoothie:function(e,t){e.selectedSmoothies.includes(t)?e.selectedSmoothies=e.selectedSmoothies.filter((function(e){return e!==t})):e.selectedSmoothies.push(t)},updateSmoothieTrans:function(e,t){e.smoothieEnToID=Object.assign.apply(Object,[{}].concat(Object(a["a"])(t.map((function(e){return Object(s["a"])({},e[1],e[0])}))))),ht.en.smoothies=t.map((function(e){return e[1]})),ht.zh.smoothies=t.map((function(e){return e[2]}))},updateIngredientTrans:function(e,t){e.ingredientEnToID=Object.assign.apply(Object,[{"":-1}].concat(Object(a["a"])(t.map((function(e){return Object(s["a"])({},e[1],e[0])}))))),ht.en.ingredients=t.map((function(e){return e[1]})),ht.en.ingredients[-1]="-",ht.zh.ingredients=t.map((function(e){return e[2]})),ht.zh.ingredients[-1]="-"},updateCourses:function(e,t){e.courses=t},updateStages:function(e,t){e.stages=t;var n,i=Object(o["a"])(t.entries());try{for(i.s();!(n=i.n()).done;){var s=Object(r["a"])(n.value,2),a=s[0],c=s[1],d=c[1];e.stageNumberToID.hasOwnProperty(d)||(e.stageNumberToID[d]=a)}}catch(g){i.e(g)}finally{i.f()}},updateSelectedIngredient:function(e,t){e.selectedIngredient=t},updateIngredientLocations:function(e,t){e.ingredientLocations=t}},actions:{fetchData:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:ct.a.all([ct.a.get("/ring-fit/data/ingredient.csv"),ct.a.get("/ring-fit/data/smoothie.csv"),ct.a.get("/ring-fit/data/ingredient_en_zh.csv"),ct.a.get("/ring-fit/data/smoothie_en_zh.csv"),ct.a.get("/ring-fit/data/course.csv"),ct.a.get("/ring-fit/data/stage.csv"),ct.a.get("/ring-fit/data/ingredient_location.csv")]).then(ct.a.spread((function(t,n,i,r,o,s,a){var c=gt()(t.data,{from_line:2}),d=gt()(n.data,{from_line:2}),g=gt()(i.data,{from_line:2}),u=gt()(r.data,{from_line:2}),l=gt()(o.data,{from_line:2}),p=gt()(s.data,{from_line:2}),f=gt()(a.data,{from_line:2});e.commit("updateIngredients",c),e.commit("updateSmoothies",d.map((function(e){return new ft(e)}))),e.commit("updateIngredientTrans",g),e.commit("updateSmoothieTrans",u),e.commit("updateCourses",l),e.commit("updateStages",p),e.commit("updateIngredientLocations",f.map((function(e){return new mt(e)})))})));case 1:case"end":return t.stop()}}),t)})))()}}});_t.dispatch("fetchData"),new c["default"]({router:rt,store:_t,i18n:bt,render:function(e){return e($)}}).$mount("#app")},5798:function(e,t,n){e.exports=n.p+"img/7_0.ec6c6377.png"},5804:function(e,t,n){e.exports=n.p+"img/9.beb4885e.png"},"5b43":function(e,t,n){e.exports=n.p+"img/6_1.030cbeec.png"},"5c5d":function(e,t,n){e.exports=n.p+"img/13.4694ebec.png"},"5db2":function(e,t,n){e.exports=n.p+"img/19_1.e3b25f69.png"},"5e40":function(e,t,n){var i={"./0.png":"7561","./1.png":"e1df","./10.png":"42b6","./11.png":"c4e5","./12.png":"e51d","./13.png":"5c5d","./14.png":"d80b","./15.png":"ba4a","./16.png":"a0c4","./17.png":"be18","./18.png":"7140","./19.png":"84c5","./2.png":"30d4","./20.png":"18b9","./21.png":"cf20","./22.png":"0497","./23.png":"f47e","./24.png":"25d9","./25.png":"c2f7","./26.png":"96bd","./27.png":"f219","./28.png":"e73d","./29.png":"9831","./3.png":"799a","./30.png":"ee82","./31.png":"6efb","./32.png":"79f8","./33.png":"f040","./4.png":"33cf","./5.png":"789a","./6.png":"f9d5","./7.png":"2711","./8.png":"a1d3","./9.png":"5804"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id="5e40"},"5ffa":function(e,t,n){},6543:function(e,t,n){e.exports=n.p+"img/6_0.4fa3139b.png"},"6efb":function(e,t,n){e.exports=n.p+"img/31.f3ccf319.png"},7140:function(e,t,n){e.exports=n.p+"img/18.9b7a5ca2.png"},"733e":function(e,t,n){e.exports=n.p+"img/5_1.762c3e5e.png"},"749e":function(e,t,n){e.exports=n.p+"img/23_1.ca24e9ac.png"},7561:function(e,t,n){e.exports=n.p+"img/0.f9dbe2ea.png"},"789a":function(e,t,n){e.exports=n.p+"img/5.787d1d92.png"},"799a":function(e,t,n){e.exports=n.p+"img/3.a4a5c0fa.png"},"79f8":function(e,t,n){e.exports=n.p+"img/32.886e2d8c.png"},"815e":function(e,t,n){e.exports=n.p+"img/21_0.36c659ab.png"},"833c":function(e,t,n){},"84c5":function(e,t,n){e.exports=n.p+"img/19.16faf5c8.png"},"84ff":function(e,t,n){e.exports=n.p+"img/5_0.c1ab057a.png"},"85ec":function(e,t,n){},"85ef":function(e,t,n){e.exports=n.p+"img/16_1.1142df61.png"},"890f":function(e,t,n){e.exports=n.p+"img/3_0.e47fd437.png"},"8bf3":function(e,t,n){e.exports=n.p+"img/12_0.b9bc7888.png"},"8d89":function(e,t,n){e.exports=n.p+"img/9_1.18ac6d48.png"},"914c":function(e,t,n){e.exports=n.p+"img/9_0.609f35b9.png"},"960a":function(e,t,n){e.exports=n.p+"img/11_0.7affb7b3.png"},"96bd":function(e,t,n){e.exports=n.p+"img/26.15311f54.png"},9831:function(e,t,n){e.exports=n.p+"img/29.9acbd553.png"},"9eae":function(e,t,n){e.exports=n.p+"img/8_1.72aede86.png"},a0c4:function(e,t,n){e.exports=n.p+"img/16.2600484e.png"},a1d3:function(e,t,n){e.exports=n.p+"img/8.fd15d3d3.png"},a211:function(e,t,n){e.exports=n.p+"img/21_1.90feeb39.png"},a5d0:function(e,t,n){e.exports=n.p+"img/13_0.6ba9ad6a.png"},aa0b:function(e,t,n){e.exports=n.p+"img/22_1.212927c3.png"},ba4a:function(e,t,n){e.exports=n.p+"img/15.89560a2e.png"},bae0:function(e,t,n){e.exports=n.p+"img/4_0.29f874ce.png"},bb4c:function(e,t,n){"use strict";var i=n("5ffa"),r=n.n(i);r.a},be18:function(e,t,n){e.exports=n.p+"img/17.01bc47ff.png"},be1c:function(e,t,n){var i={"./10_0.png":"54be","./10_1.png":"ed87","./11_0.png":"960a","./11_1.png":"0f29","./12_0.png":"8bf3","./13_0.png":"a5d0","./14_0.png":"3314","./14_1.png":"4eee","./15_0.png":"d25f","./15_1.png":"539d","./16_0.png":"d712","./16_1.png":"85ef","./17_0.png":"2f08","./17_1.png":"5429","./18_0.png":"e647","./19_0.png":"d55b","./19_1.png":"5db2","./1_0.png":"fd8c","./20_0.png":"feff","./20_1.png":"2cb3","./21_0.png":"815e","./21_1.png":"a211","./22_0.png":"d47f","./22_1.png":"aa0b","./23_0.png":"2777","./23_1.png":"749e","./2_0.png":"be5c","./3_0.png":"890f","./4_0.png":"bae0","./4_1.png":"2d11","./5_0.png":"84ff","./5_1.png":"733e","./6_0.png":"6543","./6_1.png":"5b43","./7_0.png":"5798","./8_0.png":"fa6d","./8_1.png":"9eae","./9_0.png":"914c","./9_1.png":"8d89"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id="be1c"},be5c:function(e,t,n){e.exports=n.p+"img/2_0.7954e841.png"},c2f7:function(e,t,n){e.exports=n.p+"img/25.e6d48b06.png"},c4e5:function(e,t,n){e.exports=n.p+"img/11.f227f16f.png"},c70b:function(e,t,n){},cf20:function(e,t,n){e.exports=n.p+"img/21.9c2c0d35.png"},d25f:function(e,t,n){e.exports=n.p+"img/15_0.e6bab9e5.png"},d47f:function(e,t,n){e.exports=n.p+"img/22_0.ed9e385d.png"},d55b:function(e,t,n){e.exports=n.p+"img/19_0.c59c0c23.png"},d712:function(e,t,n){e.exports=n.p+"img/16_0.138f7adb.png"},d80b:function(e,t,n){e.exports=n.p+"img/14.b319065a.png"},e1df:function(e,t,n){e.exports=n.p+"img/1.eedd11c4.png"},e49b:function(e,t,n){"use strict";var i=n("833c"),r=n.n(i);r.a},e51d:function(e,t,n){e.exports=n.p+"img/12.10a2df90.png"},e647:function(e,t,n){e.exports=n.p+"img/18_0.17e37ab5.png"},e722:function(e,t,n){"use strict";var i=n("0302"),r=n.n(i);r.a},e73d:function(e,t,n){e.exports=n.p+"img/28.1f34e829.png"},ed87:function(e,t,n){e.exports=n.p+"img/10_1.8d32b600.png"},ee82:function(e,t,n){e.exports=n.p+"img/30.b1033c07.png"},f040:function(e,t,n){e.exports=n.p+"img/33.e53f9f52.png"},f219:function(e,t,n){e.exports=n.p+"img/27.af8d7d5a.png"},f47e:function(e,t,n){e.exports=n.p+"img/23.79faa7a0.png"},f9d5:function(e,t,n){e.exports=n.p+"img/6.9954d1c5.png"},fa6d:function(e,t,n){e.exports=n.p+"img/8_0.51c2cb19.png"},fd8c:function(e,t,n){e.exports=n.p+"img/1_0.35c7feac.png"},feff:function(e,t,n){e.exports=n.p+"img/20_0.a065c6d3.png"}});
//# sourceMappingURL=app.1eac26f6.js.map