/*\
$:/plugins/eucaly/titleme/titleme.js
type: application/javascript
module-type: macro

!!! Feature
This TitleMe macro returns the title of source tiddler (even in a transclude hierarchy)

!!! Usage
<<TitleMe>>
* returns the title of source tiddler

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.name = "TitleMe";

exports.params = [
];

/*
Run the macro
*/
exports.run = function() {
    var output = "",
	variable_name = "transclusion",
    meRegex = /\{[^|]*\|([^|]*)\|/,
    p = this,
    v0 = "";
    while (p)
    {
        var v = p.getVariable(variable_name);
		if ( v && v!=v0 )
        {
        	var match = meRegex.exec(v);
            if (match && match.length>1)
            {
				output = match[1];
                break;
			}
		}
		p = p.parentWidget;
    }
	return output;
};

})();