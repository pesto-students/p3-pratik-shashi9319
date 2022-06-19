What is the main functionality of the browser
Website is stored in a server, browser which is an interpreter after entering the search in the web browser contacts DNS<domain name system > Server, where each domain is linked to IP address. Once the website opens its mainly designed by use of these 3 methods HTML(what is a heading & paragraphs) CSS(appearance) & Java script(all the dynamic things i.e. dropdown).
Browsers main function is to bring data(Web pages) from servers along with necessary files i.e. images, flashes, videos & sound bites and interpret them in the screen

High Level Components of a browser
Browser components are:
The user interface:	this includes address bar, back and front toggle buttons, book marking options and settings of browser
The browser engine:	it marshals action between user interface and rendering engine
The rendering engine:	this performs the action of displaying the information which has been requested. For example if the the requested info is of HTML then the rendering engine parses the HTML and CSS content to display it on the browser.
Networking:	for network calls as for the HTTP requests, this uses different implementation on different platforms
UI backend:	this is a generic interface that’s not platform specific.It uses the Operating system’s user interface methods
JavaScript interpreter:	its used to parse and execute javascript code
Data storage:	the browser may need to store data locally as cookies 
 

Rendering engine & its use
The rendering engine is used to display the data requested on the web browser. By default it ca display HTML & XML codes on browser but it can also display the other format of data with extensions such as for PDF files it will us pdf extensions. In most of the cases it will be displaying the requested data in browser with HTML and CSS code

Parser
Its generally used to translate data to structured form so that it can be processed easily.it consists of 2 types such as Lexical(language vocabulary) and syntax Analysis(language syntax rules)
HTML Parser
The job of an HTML parser is to parse HTML it to a Parse Tree, vocabulary & syntax of html are defined by the spec of W3C.
DOM is shot for Document object model. It’s the object presentation f the HML document and the interface of HML elements t the outside world like Java Script
HTML code consists of open tag and closed tags in which indication of things will be present like para heading & type of language etc.
Eg:
<!docttype html>
<html>
<body>
Jai shree Ram
</body>
</html>
CSS Parsing:
Unlike HTML CSS is context free grammar can be used to parse with different types of parsers

Script Processers
The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

Tree construction
While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.
Firefox calls the elements in the render tree "frames". WebKit uses the term renderer or render object.
A renderer knows how to lay out and paint itself and its children.

Order of script processing
Scripts 
The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.
Speculative parsing 
Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved. Note: the speculative parser only parses references to external resources like external scripts, style sheets and images: it doesn't modify the DOM tree - that is left to the main parser.
Style sheets 
Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems. It seems to be an edge case but is quite common. Firefox blocks all scripts when there is a style sheet that is still being loaded and parsed. WebKit blocks scripts only when they try to access certain style properties that may be affected by unloaded style sheets.


Layout and Painting
Layout 
When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.
HTML uses a flow based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so layout can proceed left-to-right, top-to-bottom through the document. There are exceptions: for example, HTML tables may require more than one pass.
The coordinate system is relative to the root frame. Top and left coordinates are used.
Layout is a recursive process. It begins at the root renderer, which corresponds to the <html> element of the HTML document. Layout continues recursively through some or all of the frame hierarchy, computing geometric information for each renderer that requires it.
The position of the root renderer is 0,0 and its dimensions are the viewport - the visible part of the browser window.
All renderers have a "layout" or "reflow" method, each renderer invokes the layout method of its children that need layout.

Painting 
In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.
Global and Incremental #
Like layout, painting can also be global - the entire tree is painted - or incremental. In incremental painting, some of the renderers change in a way that does not affect the entire tree. The changed renderer invalidates its rectangle on the screen. This causes the OS to see it as a "dirty region" and generate a "paint" event. The OS does it cleverly and coalesces several regions into one. In Chrome it is more complicated because the renderer is in a different process then the main process. Chrome simulates the OS behavior to some extent. The presentation listens to these events and delegates the message to the render root. The tree is traversed until the relevant renderer is reached. It will repaint itself (and usually its children).
The painting order 
CSS2 defines the order of the painting process. This is actually the order in which the elements are stacked in the stacking contexts. This order affects painting since the stacks are painted from back to front. The stacking order of a block renderer is:
1.	background color
2.	background image
3.	border
4.	children
5.	outline

 
