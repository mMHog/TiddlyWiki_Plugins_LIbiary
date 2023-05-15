/*\
title: $:/plugins/wimmoermans/fhistory.js
type: application/javascript
module-type: filteroperator

a filter to generate ALL tiddler titles from historylist, 
repairs escaped characters " \

assumptions format of historylist 
  "title":\s"(.*)"  where .* is the title of the visited tiddler

@preserve
\*/

 (function() {
        "use strict";
        exports.fullhistory = function(e, t, i) {
           var    o = [],
                    match="",
                    regexp= "",
                    ttt="",
                    text="";
            regexp = new RegExp("\"title\": \"(.+)\"", "ig");
            text = $tw.wiki.getTiddlerText("$:/HistoryList");
            while (match = regexp.exec(text)) {
                ttt=match[1].replace(/\\\"/g,"\"");
                ttt=ttt.replace(/\\\\/g,"\\");
                o.push(ttt); /* oldest first */
            }; /*while*/
            return o;
        }; /* export */

 }   )();