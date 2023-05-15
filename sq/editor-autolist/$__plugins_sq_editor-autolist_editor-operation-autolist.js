/*\
title: $:/plugins/sq/editor-autolist/editor-operation-autolist.js
type: application/javascript
module-type: texteditoroperation
Text editor operation to automate syntax for lists
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports["autolist"] = function(event,operation) {
	
	var lineStart = $tw.utils.findPrecedingLineBreak(operation.text,operation.selStart);
	var lineEnd = $tw.utils.findFollowingLineBreak(operation.text,operation.selStart);
	var line = operation.text.substring(lineStart,lineEnd);	
	
	var listPrefixRegex = /^((\*|#)+).*/;
	var match = line.match(listPrefixRegex);
	
	var mode = event.paramObject? event.paramObject.mode : undefined;
	
	//ensure we only handle lines starting with * or #
	if(match != null && match[1]) {
		// check if we are handling indent level
		if(mode === "indent" || mode === "unindent") {
			var indentRegExp = /^((\*|#)+)(.*)$/;
			var indentMatch = line.match(indentRegExp);
			if(indentMatch != null) {
				//check if the line has content
				var content = (indentMatch[3].trim().length != 0) ? indentMatch[3].trim() : "";
				operation.cutStart = lineStart;
				operation.cutEnd = lineEnd;
				if(mode === "indent") {				
					//indent a line
					operation.replacement = indentMatch[1] + indentMatch[2] + " " + content;
					operation.newSelStart = operation.selStart + 1;
					operation.newSelEnd = operation.selEnd + 1;
				} else if(mode === "unindent") {
					//unindent a line
					operation.replacement = indentMatch[1].substring(0,indentMatch[1].length - 1) + " " + content;
					operation.newSelStart = operation.selStart - 1;
					operation.newSelEnd = operation.selEnd - 1;					
				}
			}
		} else {
			//handle enter key, meaning new line
			var trimmed = match[0].replace(/\s\s*$/, '');
			var prefixRegEx = /^((\*|#)+)$/;
			var trimmedMatch = trimmed.match(prefixRegEx);
			if(trimmedMatch != null) {
				// the line only contains * or # characters and optional whitespace
				//terminate the list
				operation.replacement = "\n";
				operation.cutStart = lineStart;
				operation.cutEnd = operation.selStart;
				operation.newSelStart = lineStart + 1;
				operation.newSelEnd = lineStart + 1;
			} else {
				// continue indent level on next line
				var prefix = match[1];
				operation.replacement = "\n" + prefix + " ";
				operation.cutStart = operation.selStart;
				operation.cutEnd = operation.selStart;
				
				//check if there is trailing whitespace on the line we are on
				var lineEnd = $tw.utils.findFollowingLineBreak(operation.text,operation.selStart);
				var trailingText = operation.text.substring(operation.selStart,lineEnd);
				if(trailingText.trim().length == 0) {
					operation.cutEnd = lineEnd;
				}
				
				operation.newSelStart = operation.selStart + prefix.length + 2;
				operation.newSelEnd = operation.selEnd + prefix.length + 2;
			}
		}
	} else if(mode != "indent" && mode != "unindent") {
		// we need to manually add a linebreak for lines not starting with list markup
		operation.replacement = "\n";
		operation.cutStart = operation.selStart;
		operation.cutEnd = operation.selEnd;
		operation.newSelStart = operation.selStart + 1;
		operation.newSelEnd = operation.selEnd + 1;
	}
};

})();