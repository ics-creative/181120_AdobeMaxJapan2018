(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(t,i,a){var e=a(163);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(25).default)("0b9c0c22",e,!0,{})},161:function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMTAgMTYuNWw2LTQuNS02LTQuNXY5ek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+"},162:function(t,i,a){"use strict";var e=a(160);a.n(e).a},163:function(t,i,a){(t.exports=a(24)(!1)).push([t.i,"\n.container[data-v-2a9184b6]{position:relative\n}\n.container[data-v-2a9184b6],video[data-v-2a9184b6]{width:100%;height:100%\n}\nvideo[data-v-2a9184b6]{-o-object-fit:contain;object-fit:contain\n}\n.btn[data-v-2a9184b6]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:64px;height:64px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:none;padding:0;-webkit-filter:drop-shadow(0 0 .75rem #000);filter:drop-shadow(0 0 .75rem black)\n}",""])},164:function(t,i,a){"use strict";var e={name:"VideoPlayer",props:{src:{type:String,required:!0,default:""}},data:function(){return{isPlaying:!0}},methods:{play:function(){this.$refs.video.play();this.isPlaying=!0}}},n=(a(162),a(11)),o=Object(n.a)(e,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("video",{directives:[{name:"video-loader",rawName:"v-video-loader"}],ref:"video",attrs:{src:this.src,width:"1920",height:"1080",muted:"",autoplay:"",playsinline:"",loop:""},domProps:{muted:!0}}),this._v(" "),!1===this.isPlaying?i("button",{staticClass:"btn",on:{click:this.play}},[i("img",{attrs:{src:a(161),width:"64",height:"64"}})]):this._e()])},[],!1,null,"2a9184b6",null);o.options.__file="VideoPlayer.vue";i.a=o.exports},167:function(t,i,a){var e=a(197);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(25).default)("ed3677fa",e,!0,{})},196:function(t,i,a){"use strict";var e=a(167);a.n(e).a},197:function(t,i,a){(t.exports=a(24)(!1)).push([t.i,"",""])},275:function(t,i,a){"use strict";a.r(i);var e={components:{VideoPlayer:a(164).a}},n=(a(196),a(11)),o=Object(n.a)(e,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"slide-container"},[i("VideoPlayer",{attrs:{src:"/181120_AdobeMaxJapan2018/video/xd_parallax.mov"}}),this._v(" "),i("div",{staticClass:"slide-caption"},[this._v("XDの自動アニメーションを使ったパララックス")])],1)},[],!1,null,"65c53454",null);o.options.__file="17.vue";i.default=o.exports}}]);