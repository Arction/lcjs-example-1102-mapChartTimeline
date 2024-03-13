(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,n,t)=>{const o=t(89),{lightningChart:a,MapTypes:r,PalettedFill:l,LUT:i,ColorRGBA:d,emptyFill:s,emptyLine:c,UIOrigins:p,LegendBoxBuilders:u,UIElementBuilders:m,UILayoutBuilders:g,Themes:b}=o,x=a().Dashboard({theme:b[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,numberOfColumns:3,numberOfRows:2}),h=x.getTheme(),y=new l({lut:new i({steps:[{value:-5,color:h.examples.badGoodColorPalette[h.examples.badGoodColorPalette.length-1],label:"-5%"},{value:0,color:d(200,200,200),label:"0%"},{value:5,color:h.examples.badGoodColorPalette[0],label:"+5%"}],interpolate:!0,color:d(255,255,255)})}),k=(e,n,t,o,a)=>(e.addRow("",n.name,"").addRow("",`Population change ${U}`,""),t&&e.addRow("",`${t>0?"+":""}${t.toFixed(2)} %`,""),e),w=x.createMapChart({type:r.NorthAmerica,columnIndex:0,rowIndex:0,columnSpan:1}).setTitle("North America").setFillStyle(y).setCursorResultTableFormatter(k),f=x.createMapChart({type:r.SouthAmerica,columnIndex:1,rowIndex:0,columnSpan:1}).setTitle("South America").setFillStyle(y).setCursorResultTableFormatter(k),v=x.createMapChart({type:r.Europe,columnIndex:0,rowIndex:1,columnSpan:3,rowSpan:1}).setTitle("Europe").setFillStyle(y).setCursorResultTableFormatter(k),C=x.createUIPanel({columnIndex:2,rowIndex:0,columnSpan:1,rowSpan:1});C.onResize(((e,n,t,o,a)=>{block.style.width=n+"px",block.style.left=o-n+"px"})),v.onResize(((e,n,t,o,a)=>{block.style.top=a-t-82+"px"}));const S=C.addUIElement(g.Column).setPosition({x:0,y:20}).setOrigin(p.LeftBottom).setMargin(6).setMouseInteractions(!1).setBackground((e=>e.setFillStyle(s).setStrokeStyle(c))),I=(S.addElement(m.TextBox).setText("Population change (% / year)"),u.HorizontalLegendBox.addStyler((e=>e.setBackground((e=>e.setFillStyle(s).setStrokeStyle(c))).setTitle("")))),R=(S.addElement(I).add(w),S.addElement(I).add(f),S.addElement(I).add(v),document.createElement("div"));R.id="block";const T=document.createElement("input");T.type="range",T.min=1961,T.max=2018,T.value=T.min,T.id="slider";const E=document.createElement("span");E.id="marker",R.appendChild(E),R.appendChild(T),x.engine.container.append(R);const F="rgb(0, 0, 200, 0.6)",B="rgb(200, 0, 0)";let P,U=T.min,L=!0;fetch(document.head.baseURI+"examples/assets/1102/population60-21.json").then((e=>e.json())).then((e=>{T.oninput=()=>{U=T.value,clearInterval(P),L=!1,E.style.background=B,t(e,U);const n=100*(T.value-T.min)/(T.max-T.min);T.style.background="linear-gradient(to right, rgba(0,0,255,.6)"+n+"%, #fff "+n+"%, white 100%)"},E.onmouseover=()=>{E.style.background=L?"rgb(150, 0, 0)":"rgb(0, 0, 150)"},E.onmouseout=()=>{E.style.background=L?F:B},E.onclick=()=>{L?(clearInterval(P),L=!1,E.style.background=B):(n(),L=!0,E.style.background=F)};const n=()=>{P=setInterval((()=>{if(t(e,U),U>=2019&&L)setTimeout((()=>{U=T.min}),1800);else{T.value=U;const e=100*(T.value-T.min)/(T.max-T.min);T.style.background="linear-gradient(to right, rgba(0,0,255,.6)"+e+"%, #fff "+e+"%, white 100%)",U++}}),200)};n();const t=(e,n)=>{E.textContent=n;const t=e.map((e=>({ISO_A3:e["Country Code"],value:100*(e[n]-e[n-1])/e[n]})));v.invalidateRegionValues(t),f.invalidateRegionValues(t),w.invalidateRegionValues(t)}})),function(e){const n=document.createElement("style");n.textContent='\n\n  * {\n    box-sizing: border-box;\n  }\n  \n  #block{\n    width: 33%;\n    height: 60px;\n    top: calc(40% - 13px);\n    right: -2px;\n    position: absolute;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 30px 10px;\n    z-index: 1;\n    box-sizing: border-box\n  }\n\n  #slider{\n    -webkit-appearance: none;\n    margin: 0;\n    padding: 0;\n    width: 75%;\n    height: 5px;\n    position: relative;\n    cursor: pointer;\n    border-radius: 10px;\n    border: solid 1px; \n    background: linear-gradient(to right, #fff 0%, white 100%)\n  }\n  \n  #slider::-webkit-slider-thumb{\n    -webkit-appearance: none;\n    height: 20px;\n    width: 20px;\n    padding: 0;\n    background-color: lightgray;\n    cursor: pointer;\n    border-radius: 50%;\n    border: solid 1px gray\n  }\n\n  #marker {\n    background: rgb(0, 0, 200, 0.6);\n    color: white;\n    height: 30px;\n    width: 50px;\n    top: -13px;\n    position: relative;\n    border-radius: 4px;\n    text-align:center; \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n  #marker::after {\n    content: "";\n    text-align: center;\n    position: absolute;\n    left: 100%;\n    border-bottom: 5px solid transparent;\n    border-top: 5px solid transparent;\n    border-left: 5px solid lightgray;\n  }\n\n  #marker:active {\n    transform: scale(0.9);\n  }\n\n  ',document.head.append(n)}()}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);