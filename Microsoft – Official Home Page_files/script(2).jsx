//Add this to "OnDomLoad" event<!-- ClickTale Bottom part -->

(function(win,doc){

var scriptElement, scrSrc;

if (typeof (win.ClickTaleCreateDOMElement) != "function")
{
	win.ClickTaleCreateDOMElement = function(tagName)
	{
		if (doc.createElementNS)
		{
			return doc.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return doc.createElement(tagName);
	}
}

win.WRInitTime=(new Date()).getTime();

scriptElement = ClickTaleCreateDOMElement('script');
scriptElement.type = "text/javascript";

scrSrc = doc.location.protocol=='https:'? 'https://cdnssl.clicktale.net/':	'http://cdn.clicktale.net/';

scrSrc += 'www07/ptc/959721af-e707-44b6-9b6a-d14f3ec0f756.js';

scriptElement.src = scrSrc;

doc.getElementsByTagName('body')[0].appendChild(scriptElement);
})(window,document);

<!-- ClickTale end of Bottom part -->