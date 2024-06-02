// Treats all passages as if they have the "nobr" tag
Config.passages.nobr = true;

// Limit passage history (1 disables history entirely and hides history controls)
// Config.history.maxStates = 1;

// Disable saving
// Config.saves.slots = 0;
// Config.saves.isAllowed = function () {
//     return false;
// }

// Wrap lines between `<<p>>` and `<</p>>` in `<p>` tags.
// Empty lines optional as they are ignored. Any new line becomes its own paragraph.
Config.passages.onProcess = function (p) {
	return p.text.replace(
		/<<p>>((?:.|(?:\r?\n))*)?<<\/p>>/gm,
		(_, contents) => contents
		.split(/(?:\r?\n\s*)+/g)
		.map(el => el.trim().length ? `<p>${el.trim()}</p>` : "")
		.join("")
	);
};

// Replace special characters on processed passages
$(document).on(':passagedisplay', function (ev) {
	(function iterate_node(root) {
		$(root).contents().each(function (_, node) {
			if (node.nodeType === Node.TEXT_NODE)
			{
				node.nodeValue = node.nodeValue.smartQuotes()
				.replace("...","…")
				.replace("--","—")
			}
			else
				iterate_node(node);
		});
	})($("#passages"));
});
