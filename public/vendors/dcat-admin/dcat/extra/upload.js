!function(e){var a={};function t(i){if(a[i])return a[i].exports;var r=a[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(i,r,function(a){return e[a]}.bind(null,r));return i},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/",t(t.s=12)}({12:function(e,a,t){e.exports=t(13)},13:function(e,a){!function(e,a){function t(t){t=a.extend({wrapper:".web-uploader",addFileButton:".add-file-button",inputSelector:"",isImage:!1,preview:[],server:"",updateServer:"",autoUpload:!1,sortable:!1,deleteUrl:"",deleteData:{},thumbHeight:160,disabled:!1,autoUpdateColumn:!1,disableRemove:!1,dimensions:{},lang:{exceed_size:"文件大小超出",interrupt:"上传暂停",upload_failed:"上传失败，请重试",selected_files:"选中:num个文件，共:size。",selected_has_failed:'已成功上传:success个文件，:fail个文件上传失败，<a class="retry"  href="javascript:"";">重新上传</a>失败文件或<a class="ignore" href="javascript:"";">忽略</a>',selected_success:"共:num个(:size)，已上传:success个。",dot:"，",failed_num:"失败:fail个。",pause_upload:"暂停上传",go_on_upload:"继续上传",start_upload:"开始上传",upload_success_message:"已成功上传:success个文件",go_on_add:"继续添加",Q_TYPE_DENIED:"对不起，不允许上传此类型文件",Q_EXCEED_NUM_LIMIT:"对不起，已超出文件上传数量限制，最多只能上传:num个文件",F_EXCEED_SIZE:"对不起，当前选择的文件过大",Q_EXCEED_SIZE_LIMIT:"对不起，已超出文件大小限制",F_DUPLICATE:"文件重复",confirm_delete_file:"您确定要删除这个文件吗？"},upload:{formData:{_id:null},thumb:{width:160,height:160,quality:70,allowMagnify:!0,crop:!0,preserveHeaders:!1,type:"image/jpeg"}}},t);var i=a(t.selector),r=t.upload.formData.upload_column||"webup"+Math.floor(1e4*Math.random()),n=t.upload.formData._relation,s=t.elementName;void 0!==t.upload.formData._id&&t.upload.formData._id||(t.upload.formData._id=r+Math.floor(1e4*Math.random()));var l,o,d,c,u,f,p,m,h,v,b,g=e.Dcat,_=t.isImage,w=g.helpers.len(t.preview),y=i.find(t.inputSelector),I=function(e){return s.replace(/[\[\]]*/g,"_")+"-"+e},k=function(e){return a("#"+I(e))},x=t.addFileButton,E={},F={},C=0,N=0,U="pedding",D={},S=(v=new Image,b=!0,v.onload=v.onerror=function(){1==this.width&&1==this.height||(b=!1)},v.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b),A=function(){var e;try{e=(e=navigator.plugins["Shockwave Flash"]).description}catch(a){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(a){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1],10)}(),T=function(e){return e.type.match(/^image/)},L=g.Translator(t.lang),z=L.trans.bind(L),j=[];function M(e){var i,s,l=WebUploader.formatSize(e.size),d=e.name||null;_?(i=a('<li id="'.concat(I(e.id),'" title="').concat(d,'" >\n                    <p class="file-type">').concat(e.ext.toUpperCase()||"FILE",'</p>\n                    <p class="imgWrap "></p>\n                    <p class="title" style="">').concat(e.name,'</p>\n                    <p class="title" style="margin-bottom:20px;">(<b>').concat(l,"</b>)</p>\n                    </li>")),s=a('<div class="file-panel">\n                    <a class="btn btn-sm btn-white" data-file-act="cancel"><i class="feather icon-x red-dark" style="font-size:13px"></i></a>\n                    <a class="btn btn-sm btn-white" data-file-act="delete" style="display: none">\n                    <i class="feather icon-trash red-dark" style="font-size:13px"></i></a>\n                    <a class="btn btn-sm btn-white" data-file-act="preview" ><i class="feather icon-zoom-in"></i></a>\n                    <a class=\'btn btn-sm btn-white\' data-file-act=\'order\' data-order="1" style="display: none"><i class=\'feather icon-arrow-up\'></i></a>\n                    <a class=\'btn btn-sm btn-white\' data-file-act=\'order\' data-order="0" style="display: none"><i class=\'feather icon-arrow-down\'></i></a>\n\n                    </div>').appendTo(i)):(i=a('\n                    <li id="'.concat(I(e.id),'" title="').concat(e.nam,'">\n                    <p class="title" style="display:block">\n                        <i class="feather icon-check green _success icon-success"></i>\n                        ').concat(e.name," (").concat(l,")\n                    </p>\n                    </li>\n                ")),s=a('\n<span style="right: 45px;" class="file-action d-none" data-file-act=\'order\' data-order="1"><i class=\'feather icon-arrow-up\'></i></span>\n<span style="right: 25px;" class="file-action d-none" data-file-act=\'order\' data-order="0"><i class=\'feather icon-arrow-down\'></i></span>\n<span data-file-act="cancel" class="file-action" style="font-size:13px">\n    <i class="feather icon-x red-dark"></i>\n</span>\n<span data-file-act="delete" class="file-action" style="display:none">\n    <i class="feather icon-trash red-dark"></i>\n</span>\n').appendTo(i));var c=i.find("p.imgWrap"),u=a('<p class="error"></p>'),f=function(e,a){var t="";switch(e){case"exceed_size":t=z("exceed_size");break;case"interrupt":t=z("interrupt");break;default:t=z("upload_failed")}E[a.id]=a,u.text(t).appendTo(i)};if(i.appendTo(o),setTimeout((function(){i.css({margin:"5px"})}),50),"invalid"===e.getStatus())f(e.statusText,e);else{if(_){var p=m.makeThumb(e,(function(e,t){var r;if(c.empty(),e)return i.find(".title").show(),void i.find(".file-type").show();S?(r=a('<img src="'+t+'">'),c.append(r)):i.find(".file-type").show()}));try{p.once("load",(function(){e._info=e._info||p.info(),e._meta=e._meta||p.meta();var a=e._info.width,i=e._info.height;if(!function(e){if(!_||!T(e)||!g.helpers.len(t.dimensions))return!0;var a=t.dimensions,i=e._info.width,r=e._info.height,n=g.helpers.isset;if(n(a,"width")&&a.width!=i||n(a,"min_width")&&a.min_width>i||n(a,"max_width")&&a.max_width<i||n(a,"height")&&a.height!=r||n(a,"min_height")&&a.min_height>r||n(a,"max_height")&&a.max_height<r||n(a,"ratio")&&a.ratio!=i/r)return!1;return!0}(e))return g.error("The image dimensions is invalid."),m.removeFile(e),!1;p.resize(a,i)}))}catch(a){return setTimeout((function(){m.removeFile(e)}),10)}}D[e.id]=[e.size,0],e.rotation=0}e.on("statuschange",(function(a,t){"progress"===t||"queued"===t&&(s.find('[data-file-act="cancel"]').hide(),s.find('[data-file-act="delete"]').show()),"error"===a||"invalid"===a?(f(e.statusText,e),D[e.id][1]=1):"interrupt"===a?f("interrupt",e):"queued"===a?D[e.id][1]=0:"progress"===a?u.remove():"complete"===a&&(_?i.append('<span class="success"><em></em><i class="feather icon-check"></i></span>'):i.find("._success").show()),i.removeClass("state-"+t).addClass("state-"+a)})),(_?s.find("a"):s).on("click",(function(){switch(a(this).data("file-act")){case"cancel":return void m.removeFile(e);case"deleteurl":case"delete":if(t.disableRemove)return Z(e.serverId),m.removeFile(e);g.confirm(z("confirm_delete_file"),e.serverId,(function(){var i=t.deleteData;if(i.key=e.serverId,!i.key)return Z(e.serverId),m.removeFile(e);i._column=r,i._relation=n,g.loading(),a.post(t.deleteUrl,i,(function(a){if(g.loading(!1),a.status)return Z(e.serverId),void m.removeFile(e);g.error(a.message||"Remove file failed.")}))}));break;case"preview":g.helpers.previewImage(c.find("img").attr("src"),null,e.name);break;case"order":a(this).attr("data-id",e.serverId),K.apply(this)}}))}function O(e){var a=k(e.id);delete D[e.id],P(),a.off().find(".file-panel").off().end().remove()}function P(){var e,t=0,i=0,r=p.find(".progress-bar");a.each(D,(function(e,a){i+=a[0],t+=a[0]*a[1]})),e=i?t/i:0,e=Math.round(100*e)+"%",r.text(e),r.css("width",e),Q()}function Q(){var e,a="";function t(){(e=m.getStats()).successNum&&(a=z("selected_success",{num:C,size:WebUploader.formatSize(N),success:e.successNum})),e.uploadFailNum&&(a+=(a?z("dot"):"")+z("failed_num",{fail:e.uploadFailNum}))}m&&("ready"===U?(e=m.getStats(),C?a=z("selected_files",{num:C,size:WebUploader.formatSize(N)}):t()):"confirm"===U?(e=m.getStats()).uploadFailNum&&(a=z("selected_has_failed",{success:e.successNum,fail:e.uploadFailNum})):t(),c.html(a))}function W(e,a){var r;if(a=a||{},e!==U){switch(u&&(u.removeClass("state-"+U),u.addClass("state-"+e)),U=e){case"pedding":if(t.disabled)return;f.removeClass("element-invisible"),o.hide(),d.addClass("element-invisible"),_&&(l.removeAttr("style"),l.find(".queueList").removeAttr("style")),$();break;case"ready":f.addClass("element-invisible"),i.find(x).removeClass("element-invisible"),o.show(),t.disabled||(d.removeClass("element-invisible"),t.autoUpload&&m.upload()),$(),_&&l.find(".queueList").css({border:"1px solid #d3dde5",padding:"5px"}),setTimeout(J,1);break;case"uploading":i.find(x).addClass("element-invisible"),p.show(),u.text(z("pause_upload"));break;case"paused":p.show(),u.text(z("go_on_upload"));break;case"confirm":if(m&&(p.hide(),i.find(x).removeClass("element-invisible"),u.text(z("start_upload")),(r=m.getStats()).successNum&&!r.uploadFailNum))return void W("finish");break;case"finish":m&&((r=m.getStats()).successNum?(g.success(z("upload_success_message",{success:r.successNum})),setTimeout((function(){1==t.upload.fileNumLimit&&(m.request("get-stats").numOfSuccess=0)}),10)):(U="done",location.reload()));break;case"decrOriginalFileNum":w>0&&w--;break;case"incrOriginalFileNum":w++;break;case"decrFileNumLimit":if(!m)return;"-1"==(n=m.option("fileNumLimit"))&&(n=0),0==(s=n>=(s=a.num||1)?n-s:0)&&(s="-1"),m.option("fileNumLimit",s);break;case"incrFileNumLimit":if(!m)return;var n,s;"-1"==(n=m.option("fileNumLimit"))&&(n=0),s=n+(s=a.num||1),m.option("fileNumLimit",s);break;case"init":u.addClass("state-"+U),P(),w||t.disabled?(f.addClass("element-invisible"),t.disabled?l.addClass("disabled"):d.show(),W("ready")):_&&(l.removeAttr("style"),l.find(".queueList").css("margin","0")),$()}Q()}}function X(e){if(e){var a=F[e];Z(e),delete F[e],m&&!a.fake&&m.removeFile(a),W("decrOriginalFileNum"),W("incrFileNumLimit"),g.helpers.len(F)||g.helpers.len(D)||W("pedding")}}function q(){var e=y.val();return e?e.split(","):[]}function B(e){var a=q();a.push(e),R(a)}function R(e){e=e.filter((function(e,a,t){return t.indexOf(e)===a})).filter((function(e){return!!e})),y.val(e.join(","))}function Z(e){var a;if(a=e,j=j.filter((function(e){return e.serverId!=a})),!e)return y.val("");R(q().filter((function(a){return a!=e})))}function V(e){e.serverId&&-1===G(e.serverId)&&j.push(e)}function G(e){for(var a in j)if(j[a].serverId===e)return a;return-1}function Y(e,a){var t=parseInt(G(e)),i=j[t],r=j[t-1],n=j[t+1];if(a){if(0===t)return;j[t-1]=i,j[t]=r}else{if(!n)return;j[t+1]=i,j[t]=n}!function(){var e=[];for(var a in j)j[a]&&e.push(j[a].serverId);R(e)}()}function H(){for(var e in o.html(""),j)j[e]&&ee(j[e])}function $(){m.refresh()}function J(){y.parents(".form-group,.form-label-group,.form-field").find(".with-errors").html("")}function K(){var e=a(this),t=e.parents("li").first(),i=e.data("id"),r=e.data("order"),n=t.prev(),s=t.next();if(r){if(!n.length)return;return Y(i,r),void H()}s.length&&(Y(i,r),H())}function ee(e){var i="";i+="<li title='"+e.serverPath+"'>",!_&&t.sortable&&(i+='\n<p style="right: 45px" class="file-action" data-file-act=\'order\' data-order="1" data-id=\''.concat(e.serverId,"'><i class='feather icon-arrow-up'></i></p>\n<p style=\"right: 25px\" class=\"file-action\" data-file-act='order' data-order=\"0\" data-id='").concat(e.serverId,"'><i class='feather icon-arrow-down'></i></p>\n")),_?i+="<p class='imgWrap'><img src='".concat(e.serverUrl,"'></p>"):t.disabled||(i+='<p class="file-action" data-file-act="delete" data-id="'.concat(e.serverId,'"><i class="feather icon-trash red-dark"></i></p>')),i+="<p class='title' style=''><i class='feather icon-check text-white icon-success text-white'></i>",i+=e.serverPath,i+="</p>",_&&(i+="<p class='title' style='margin-bottom:20px;'>&nbsp;</p>",i+="<div class='file-panel' >",t.disabled||(i+="<a class='btn btn-sm btn-white' data-file-act='deleteurl' data-id='".concat(e.serverId,"'><i class='feather icon-trash red-dark' style='font-size:13px'></i></a>")),i+="<a class='btn btn-sm btn-white' data-file-act='preview' data-url='".concat(e.serverUrl,"' ><i class='feather icon-zoom-in'></i></a>"),t.sortable&&(i+="\n<a class='btn btn-sm btn-white' data-file-act='order' data-order=\"1\" data-id='".concat(e.serverId,"'><i class='feather icon-arrow-up'></i></a>\n<a class='btn btn-sm btn-white' data-file-act='order' data-order=\"0\" data-id='").concat(e.serverId,"'><i class='feather icon-arrow-down'></i></a>\n")),i+="</div>"),i=a(i+="</li>"),_||(i.find(".file-type").show(),i.find(".title").show(),l.css("background","transparent"));var s=function(){var s=a(this).data("id"),l=t.deleteData;if(t.disableRemove)return i.remove(),X(s);g.confirm(z("confirm_delete_file"),e.serverId,(function(){l.key=s,l._column=r,l._relation=n,g.loading(),a.post(t.deleteUrl,l,(function(e){if(g.loading(!1),e.status)return i.remove(),void X(s);g.error(e.message||"Remove file failed.")}))}))};i.find('[data-file-act="deleteurl"]').click(s),i.find('[data-file-act="delete"]').click(s),t.sortable&&i.find('[data-file-act="order"').click(K),i.find('[data-file-act="preview"]').click((function(){var e=a(this).data("url");g.helpers.previewImage(e)})),F[e.serverId]=e,B(e.serverId),o.append(i),_&&(setTimeout((function(){i.css("margin","5px")}),h?0:400),h=1)}return this.uploader=m,this.options=t,this.build=function(){l=i.find(t.wrapper),o=a('<ul class="filelist"></ul>').appendTo(l.find(".queueList")),d=l.find(".statusBar"),c=d.find(".info"),u=l.find(".upload-btn"),f=l.find(".placeholder"),p=d.find(".upload-progress").hide(),function(){if(!WebUploader.Uploader.support("flash")&&WebUploader.browser.ie)return void(A?function(e){window.expressinstallcallback=function(e){switch(e){case"Download.Cancelled":break;case"Download.Failed":g.error("Install failed!");break;default:g.success("Install Success！")}delete window.expressinstallcallback};var a="./expressInstall.swf",t='<object type="application/x-shockwave-flash" data="'.concat(a,'" ');WebUploader.browser.ie&&(t+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),t+='width="100%" height="100%" style="outline:0">\n                            <param name="movie" value="'.concat(a,'" />\n                            <param name="wmode" value="transparent" />\n                            <param name="allowscriptaccess" value="always" />\n                            </object>'),e.html(t)}(l):l.html('<a href="http://www.adobe.com/go/getflashplayer" target="_blank" border="0"><img alt="get flash player" src="http://www.adobe.com/macromedia/style_guide/images/160x41_Get_Flash_Player.jpg" /></a>'));if(!WebUploader.Uploader.support())g.error("您的浏览器不支持Web Uploader！")}(),this.uploader=m=WebUploader.create(t.upload),m.on("dndAccept",(function(e){for(var a=!1,t=e.length,i=0;i<t;i++)if(~"text/plain;application/javascript ".indexOf(e[i].type)){a=!0;break}return!a})),t.upload.fileNumLimit>1&&!t.disabled&&m.addButton({id:x,label:'<i class="feather icon-folder"></i> &nbsp;'+z("go_on_add")}),m.onUploadProgress=function(e,a){D[e.id][1]=a,P()},m.onBeforeFileQueued=function(e){},m.onFileQueued=function(e){C++,N+=e.size,1===C&&(f.addClass("element-invisible"),d.show()),M(e),W("ready"),P()},m.onFileDequeued=function(e){C--,N-=e.size,C||g.helpers.len(F)||W("pedding"),O(e)},m.on("all",(function(e,i,s){switch(e){case"uploadFinished":W("confirm"),function(){var e=q(),i=m.getStats().successNum,s=a.extend({},t.formData);if(i&&e&&t.autoUpdateColumn){if(n){if(!n[1])return;s[n[0]]={},s[n[0]][n[1]]={},s[n[0]][n[1]][r]=e.join(",")}else s[r]=e.join(",");delete s._relation,delete s.upload_column,a.post(t.updateServer,s)}}();break;case"startUpload":W("uploading");break;case"stopUpload":W("paused");break;case"uploadAccept":if(s&&s.error)return g.error(s.error.message),E[i.file.id]=i.file,!1;if(s.merge)return;i.file.serverId=s.id,i.file.serverName=s.name,i.file.serverPath=s.path,i.file.serverUrl=s.url||null,V(i.file),B(s.id);var l=k(i.file.id);_||(l.find(".file-action").hide(),l.find('[data-file-act="delete"]').show()),t.sortable&&l.find('[data-file-act="order"]').removeClass("d-none").show()}})),m.onError=function(e){switch(e){case"Q_TYPE_DENIED":g.error(z("Q_TYPE_DENIED"));break;case"Q_EXCEED_NUM_LIMIT":g.error(z("Q_EXCEED_NUM_LIMIT",{num:t.upload.fileNumLimit}));break;case"F_EXCEED_SIZE":g.error(z("F_EXCEED_SIZE"));break;case"Q_EXCEED_SIZE_LIMIT":g.error(z("Q_EXCEED_SIZE_LIMIT"));break;case"F_DUPLICATE":g.warning(z("F_DUPLICATE"));break;default:g.error("Error: "+e)}},u.on("click",(function(){if(a(this).hasClass("disabled"))return!1;"ready"===U||"paused"===U?m.upload():"uploading"===U&&m.stop()})),c.on("click",".retry",(function(){m.retry()})),c.on("click",".ignore",(function(){for(var e in E)m.removeFile(e,!0),delete E[e]})),W("init")},this.preview=function(){for(var e in t.preview){var a,i=t.preview[e].path;i.indexOf(".")&&(a=i.split(".").pop());var r={serverId:t.preview[e].id,serverUrl:t.preview[e].url,serverPath:i,ext:a,fake:1};W("incrOriginalFileNum"),W("decrFileNumLimit"),ee(r),V(r)}},this.setState=W,this.refreshButton=$,this.getFileView=k,this.getFileViewSelector=I,this.addFileView=M,this.removeUploadFileView=O,this.isImage=T,this.getColumn=function(){return r},this}Dcat.Uploader=function(e){return new t(e)}}(window,jQuery)}});
//# sourceMappingURL=upload.js.map