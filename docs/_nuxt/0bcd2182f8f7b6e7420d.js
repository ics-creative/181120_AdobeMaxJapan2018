(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{160:function(t,a,i){var e=i(163);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(25).default)("0b9c0c22",e,!0,{})},161:function(t,a){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMTAgMTYuNWw2LTQuNS02LTQuNXY5ek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+"},162:function(t,a,i){"use strict";var e=i(160);i.n(e).a},163:function(t,a,i){(t.exports=i(24)(!1)).push([t.i,"\n.container[data-v-2a9184b6]{position:relative\n}\n.container[data-v-2a9184b6],video[data-v-2a9184b6]{width:100%;height:100%\n}\nvideo[data-v-2a9184b6]{-o-object-fit:contain;object-fit:contain\n}\n.btn[data-v-2a9184b6]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:64px;height:64px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:none;padding:0;-webkit-filter:drop-shadow(0 0 .75rem #000);filter:drop-shadow(0 0 .75rem black)\n}",""])},164:function(t,a,i){"use strict";var e={name:"VideoPlayer",props:{src:{type:String,required:!0,default:""}},data:function(){return{isPlaying:!0}},methods:{play:function(){this.$refs.video.play();this.isPlaying=!0}}},n=(i(162),i(11)),o=Object(n.a)(e,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("video",{directives:[{name:"video-loader",rawName:"v-video-loader"}],ref:"video",attrs:{src:this.src,width:"1920",height:"1080",muted:"",autoplay:"",playsinline:"",loop:""},domProps:{muted:!0}}),this._v(" "),!1===this.isPlaying?a("button",{staticClass:"btn",on:{click:this.play}},[a("img",{attrs:{src:i(161),width:"64",height:"64"}})]):this._e()])},[],!1,null,"2a9184b6",null);o.options.__file="VideoPlayer.vue";a.a=o.exports},186:function(t,a,i){var e=i(235);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(25).default)("7196260d",e,!0,{})},234:function(t,a,i){"use strict";var e=i(186);i.n(e).a},235:function(t,a,i){(t.exports=i(24)(!1)).push([t.i,"\nimg.base[data-v-78acf28d]{width:100%;height:100%;-o-object-fit:contain;object-fit:contain\n}\nimg.gif[data-v-78acf28d]{position:absolute;right:7%;top:26%;width:24%;height:auto\n}",""])},251:function(t,a,i){"use strict";i.r(a);var e={components:{VideoPlayer:i(164).a}},n=(i(234),i(11)),o=Object(n.a)(e,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"slide-container"},[a("img",{directives:[{name:"image-loader",rawName:"v-image-loader"}],staticClass:"base",attrs:{src:"/181120_AdobeMaxJapan2018/slides/181120_AdobeMax_web.060.jpeg",width:"1920",height:"1080"}}),this._v(" "),a("img",{directives:[{name:"image-loader",rawName:"v-image-loader"}],staticClass:"gif",attrs:{src:"/181120_AdobeMaxJapan2018/video/adobeblog-api-image11.gif"}})])},[],!1,null,"78acf28d",null);o.options.__file="60.vue";a.default=o.exports}}]);