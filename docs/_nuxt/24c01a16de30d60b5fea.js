(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(t,i,e){var n=e(160);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(25).default)("456f72f0",n,!0,{})},158:function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMTAgMTYuNWw2LTQuNS02LTQuNXY5ek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+"},159:function(t,i,e){"use strict";var n=e(157);e.n(n).a},160:function(t,i,e){(t.exports=e(24)(!1)).push([t.i,"\n.container[data-v-e337b908]{position:relative\n}\n.container[data-v-e337b908],video[data-v-e337b908]{width:100%;height:100%\n}\nvideo[data-v-e337b908]{-o-object-fit:contain;object-fit:contain\n}\n.btn[data-v-e337b908]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:64px;height:64px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:none;padding:0;-webkit-filter:drop-shadow(0 0 .75rem #000);filter:drop-shadow(0 0 .75rem black)\n}",""])},161:function(t,i,e){"use strict";var n={name:"VideoPlayer",props:{src:{type:String,required:!0,default:""}},data:function(){return{isPlaying:!0}},mounted:function(){this.$refs.video},methods:{play:function(){this.$refs.video.play();this.isPlaying=!0}}},a=(e(159),e(11)),o=Object(a.a)(n,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("video",{ref:"video",attrs:{src:this.src,width:"1920",height:"1080",muted:"",autoplay:"",playsinline:"",loop:""},domProps:{muted:!0}}),this._v(" "),!1===this.isPlaying?i("button",{staticClass:"btn",on:{click:this.play}},[i("img",{attrs:{src:e(158),width:"64",height:"64"}})]):this._e()])},[],!1,null,"e337b908",null);o.options.__file="VideoPlayer.vue";i.a=o.exports},165:function(t,i,e){var n=e(196);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(25).default)("b9005922",n,!0,{})},195:function(t,i,e){"use strict";var n=e(165);e.n(n).a},196:function(t,i,e){(t.exports=e(24)(!1)).push([t.i,"",""])},247:function(t,i,e){"use strict";e.r(i);var n={components:{VideoPlayer:e(161).a}},a=(e(195),e(11)),o=Object(a.a)(n,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"slide-container"},[i("VideoPlayer",{attrs:{src:"/181120_AdobeMaxJapan2018/video/adobexd_uxp.mov"}}),this._v(" "),i("div",{staticClass:"slide-caption"},[this._v("XDの自動アニメーションを使った接続型アニメーション")])],1)},[],!1,null,"d1fd9072",null);o.options.__file="18.vue";i.default=o.exports}}]);