!function(t){function e(){$("h1").each(function(){var t=$(this),e=t.nextUntil("h1"),n=$('<section id="section-'+t.prop("id")+'"></section>');t.after(n.append(e)),n.prepend(t),v.add({id:t.prop("id"),title:t.text(),body:e.text()})})}function n(){c=$(".content"),d=$(".dark-box"),f=$(".search-info"),$("#input-search").on("keyup",s).on("focus",a).on("blur",h)}function i(t){return $(".tocify-item[data-unique="+t+"]").closest(".tocify-header")}function o(t,e){var n=parseInt(e.id.replace(/[^\d]/g,""),10),i=parseInt(t.id.replace(/[^\d]/g,""),10);return n===i?0:i>n?-1:1}function r(){var t=$(".tocify-header").sort(o);$.each(t,function(t,e){$(e).insertBefore($("#toc ul:first-child"))})}function s(t){var e=$("section, #toc .tocify-header");if(f.hide(),u(),27===t.keyCode&&(this.value=""),this.value){e.hide();var n=v.search(this.value),o=[];if($.each(n,function(t,e){e.score>=1e-4&&o.push(e)}),o.length){if(lastRef=null,r(),$.each(o,function(t,e){var n=e.ref;$("#section-"+n).show();var o=i(n);lastRef&&i(lastRef).insertBefore(o),o.show(),lastRef=n}),o.length>1){var s=o[0].ref,a=o[1].ref;i(s).insertBefore(i(a))}l.call(this)}else e.show(),f.text('No Results Found for "'+this.value+'"').show()}else e.show();p.triggerHandler("scroll.tocify"),p.triggerHandler("resize")}function a(){s.call(this,{})}function h(){u(),f.hide()}function l(){this.value&&c.highlight(this.value,g)}function u(){c.unhighlight(g)}var c,d,f,p=$(t),g={element:"span",className:"search-highlight"},v=new lunr.Index;v.ref("id"),v.field("title",{boost:10}),v.field("body"),v.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(e),$(n)}(window);