(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{160:function(t,e,i){var a=i(163);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(25).default)("0b9c0c22",a,!0,{})},161:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMTAgMTYuNWw2LTQuNS02LTQuNXY5ek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+"},162:function(t,e,i){"use strict";var a=i(160);i.n(a).a},163:function(t,e,i){(t.exports=i(24)(!1)).push([t.i,"\n.container[data-v-2a9184b6]{position:relative\n}\n.container[data-v-2a9184b6],video[data-v-2a9184b6]{width:100%;height:100%\n}\nvideo[data-v-2a9184b6]{-o-object-fit:contain;object-fit:contain\n}\n.btn[data-v-2a9184b6]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:64px;height:64px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:none;padding:0;-webkit-filter:drop-shadow(0 0 .75rem #000);filter:drop-shadow(0 0 .75rem black)\n}",""])},164:function(t,e,i){"use strict";var a={name:"VideoPlayer",props:{src:{type:String,required:!0,default:""}},data:function(){return{isPlaying:!0}},methods:{play:function(){this.$refs.video.play();this.isPlaying=!0}}},n=(i(162),i(11)),o=Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("video",{directives:[{name:"video-loader",rawName:"v-video-loader"}],ref:"video",attrs:{src:this.src,width:"1920",height:"1080",muted:"",autoplay:"",playsinline:"",loop:""},domProps:{muted:!0}}),this._v(" "),!1===this.isPlaying?e("button",{staticClass:"btn",on:{click:this.play}},[e("img",{attrs:{src:i(161),width:"64",height:"64"}})]):this._e()])},[],!1,null,"2a9184b6",null);o.options.__file="VideoPlayer.vue";e.a=o.exports},250:function(t,e,i){"use strict";i.r(e);var a={name:"Slide66",components:{VideoPlayer:i(164).a}},n=i(11),o=Object(n.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("VideoPlayer",{attrs:{src:"/181120_AdobeMaxJapan2018/video/creative-icons.mov"}})},[],!1,null,null,null);o.options.__file="65.vue";e.default=o.exports}}]);