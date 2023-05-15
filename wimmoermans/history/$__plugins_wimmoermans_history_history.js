/*\
title: $:/plugins/wimmoermans/history.js
type: application/javascript
module-type: filteroperator

a filter to generate tiddler titles from historylist, reverse order, no duplicates (only most recent), no drafts.

assumptions
  "title":\s"(.*)"  where .* is the title
  "Draft of '" is the prefix for tiddler in edit mode

@preserve
\*/

 (function() {
        "use strict";
        exports.history = function(e, t, i) {
           var results = new Array(),
                    o = [],
                    match="",
                    regexp= "",
                    text="",
ttt="",
                    i=0,
                    j=0,
                    entries=0,
                    found=0;
            regexp = new RegExp("\"title\": \"(.+)\"", "ig");
            text = $tw.wiki.getTiddlerText("$:/HistoryList");
            while (match = regexp.exec(text)) {
                ttt=match[1].replace(/\\\"/g,"\"");
                ttt=ttt.replace(/\\\\/g,"\\");
                if (ttt.substr(0, 10) !== "Draft of '") {
                    results.push(ttt); /* oldest first */
                    entries = entries + 1;
                }
            }
            i = entries-1;
            while (i >= 0) {
                j = i + 1;
                found = 0;
                while ((j <= entries) && (found === 0)) {
                    if (results[i] === results[j]) {
                        found = 1;
                    }
                    j = j + 1;
                }
                if (found === 0) {

                    if( results[i] !== ""){
                         o.push(results[i]);
                    }
                }
                i = i - 1;
            };
            return o;
        }

 }   )();