(function(){$(document).ready(function(){var e,t;return 0!==$("#editor").length?(e=ace.edit("editor"),e.setTheme("ace/theme/clouds_midnight"),e.session.setMode("ace/mode/yaml"),e.setOptions({enableBasicAutocompletion:!0}),t={getCompletions:function(e,t,o,n,a){var r;r=tokens,a(null,r.map(function(e){return{caption:e,value:e,meta:"static"}}))}},e.completers=[t],$("#evaluator-form").on("ajax:before",function(){return $("#evaluator").val(e.getValue()),$("#result-evaluator").html("")}).on("ajax:success",function(t,o,n,a){var r,l,s,u;if(0!==a.responseText.length){r=JSON.parse(a.responseText),s=[];for(l in r)u=r[l],s.push(u);return alert("You have "+s.length+" error(s) in your yaml. Please, fix them!!"),e.getSession().setAnnotations(s)}}),$("#deploy-form").on("ajax:before",function(){return $("#deploy").val(e.getValue()),$("#result-evaluator").html("")}),$("#deploy-btn").click(function(){return $("#myModal").modal("hide")}),$("#readme-form").on("ajax:success",function(){return $("#readmeModal").modal("show")})):void 0})}).call(this);