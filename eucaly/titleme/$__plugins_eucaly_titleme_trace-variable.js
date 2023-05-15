/*\
$:/macros/eucaly/trace-variable.js
type: application/javascript
module-type: macro

!!! Feature
This trace-variable macro trace the variable through widget/transclude hierarchy.
Undefined and neighboring redundant values are dropped.

!!! Usage
<<trace-variable variableName>>
<<trace-variable variableName delimiter>>

!!! Return value
* if delimiter not specified
[[value of this]] [[value of parent widget]] ... [[value until root widget]]

!!! Example
<$text text=<<trace-variable "listItem">>/>

<$list filter=<<trace-variable "listItem">>>
	{{!!title}} - {{!!tags}}<br/>
</$list>

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
This is the mysamplemacro of Tiddly Wiki 5 written in JavaScript 
*/

exports.name = "trace-variable";

exports.params = [
	{ name: "variable_name" },
    { name: "delimiter" }
];

/*
Run the macro
*/
exports.run = function(variable_name, delimiter) {
	var output = "";
    var p = this;
    var v0 = "";
    while (p)
    {
        var v = p.getVariable(variable_name);
		if ( v && v!=v0 )
        {
			if (delimiter) {
				output = output + v + delimiter;
			} else {
				output = output + "[[" + v + "]] ";
            }
			v0 = v;
		}
		p = p.parentWidget;
    }
	return output;
};

})();