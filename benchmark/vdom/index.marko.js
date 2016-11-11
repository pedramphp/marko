var template = require("marko/html").c(__filename);

module.exports = template;

var __browser_json = require.resolve("./browser.json"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("lasso/taglib/page-tag")),
    lasso_head_tag = marko_loadTag(require("lasso/taglib/head-tag")),
    lasso_body_tag = marko_loadTag(require("lasso/taglib/body-tag"));

function render(data, out) {
  lasso_page_tag({
      packagePath: __browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>marko-vdom benchmarks</title>");

  lasso_head_tag({}, out);

  out.w("</head><body><button type=\"button\" data-benchmark=\"walk\">Run benchmark: walk</button><button type=\"button\" data-benchmark=\"create\">Run benchmark: create</button><pre id=\"results\" style=\"width: 100%; border: 1px solid black;\">\n    </pre><section id=\"todoapp\" style=\"display: none\"><div id=\"w0\"><header id=\"header\"><h1>todos</h1><form data-w-onsubmit=\"handleFormSubmit|header\"><input id=\"new-todo\" placeholder=\"What needs to be done?\"></form></header><section id=\"main\"><input id=\"toggle-all\" type=\"checkbox\" data-w-onchange=\"handleToggleAllOnChange|main\"><label for=\"toggle-all\">Mark all as complete</label><ul id=\"todo-list\"><li id=\"main-todo-0\"><div class=\"view\"><input class=\"toggle\" type=\"checkbox\" aria-label=\"Toggle todo completed\" data-w-onchange=\"handleCheckboxChange|main-todo-0\"><label data-w-ondblclick=\"handleLabelDblClick|main-todo-0\">Go to the grocery store</label><button class=\"destroy\" aria-label=\"Delete todo\" data-w-onclick=\"handleDestroyClick|main-todo-0\"></button></div><input title=\"Enter the new todo title\" type=\"text\" class=\"edit\" id=\"main-todo-0-titleInput\" data-w-onchange=\"handleInputChange|main-todo-0\" data-w-onkeydown=\"handleInputKeyDown|main-todo-0\"></li><li class=\"completed\" id=\"main-todo-1\"><div class=\"view\"><input class=\"toggle\" type=\"checkbox\" checked=\"\" aria-label=\"Toggle todo completed\" data-w-onchange=\"handleCheckboxChange|main-todo-1\"><label data-w-ondblclick=\"handleLabelDblClick|main-todo-1\">Ship item</label><button class=\"destroy\" aria-label=\"Delete todo\" data-w-onclick=\"handleDestroyClick|main-todo-1\"></button></div><input title=\"Enter the new todo title\" type=\"text\" class=\"edit\" id=\"main-todo-1-titleInput\" data-w-onchange=\"handleInputChange|main-todo-1\" data-w-onkeydown=\"handleInputKeyDown|main-todo-1\"></li><li id=\"main-todo-2\"><div class=\"view\"><input class=\"toggle\" type=\"checkbox\" aria-label=\"Toggle todo completed\" data-w-onchange=\"handleCheckboxChange|main-todo-2\"><label data-w-ondblclick=\"handleLabelDblClick|main-todo-2\">Respond to email</label><button class=\"destroy\" aria-label=\"Delete todo\" data-w-onclick=\"handleDestroyClick|main-todo-2\"></button></div><input title=\"Enter the new todo title\" type=\"text\" class=\"edit\" id=\"main-todo-2-titleInput\" data-w-onchange=\"handleInputChange|main-todo-2\" data-w-onkeydown=\"handleInputKeyDown|main-todo-2\"></li><li id=\"main-todo-3\"><div class=\"view\"><input class=\"toggle\" type=\"checkbox\" aria-label=\"Toggle todo completed\" data-w-onchange=\"handleCheckboxChange|main-todo-3\"><label data-w-ondblclick=\"handleLabelDblClick|main-todo-3\">Foo</label><button class=\"destroy\" aria-label=\"Delete todo\" data-w-onclick=\"handleDestroyClick|main-todo-3\"></button></div><input title=\"Enter the new todo title\" type=\"text\" class=\"edit\" id=\"main-todo-3-titleInput\" data-w-onchange=\"handleInputChange|main-todo-3\" data-w-onkeydown=\"handleInputKeyDown|main-todo-3\"></li><li id=\"main-todo-4\"><div class=\"view\"><input class=\"toggle\" type=\"checkbox\" aria-label=\"Toggle todo completed\" data-w-onchange=\"handleCheckboxChange|main-todo-4\"><label data-w-ondblclick=\"handleLabelDblClick|main-todo-4\">Bar</label><button class=\"destroy\" aria-label=\"Delete todo\" data-w-onclick=\"handleDestroyClick|main-todo-4\"></button></div><input title=\"Enter the new todo title\" type=\"text\" class=\"edit\" id=\"main-todo-4-titleInput\" data-w-onchange=\"handleInputChange|main-todo-4\" data-w-onkeydown=\"handleInputKeyDown|main-todo-4\"></li><li id=\"main-todo-5\"><div class=\"view\"><input class=\"toggle\" type=\"checkbox\" aria-label=\"Toggle todo completed\" data-w-onchange=\"handleCheckboxChange|main-todo-5\"><label data-w-ondblclick=\"handleLabelDblClick|main-todo-5\">Baz</label><button class=\"destroy\" aria-label=\"Delete todo\" data-w-onclick=\"handleDestroyClick|main-todo-5\"></button></div><input title=\"Enter the new todo title\" type=\"text\" class=\"edit\" id=\"main-todo-5-titleInput\" data-w-onchange=\"handleInputChange|main-todo-5\" data-w-onkeydown=\"handleInputKeyDown|main-todo-5\"></li></ul></section><footer id=\"footer\"><span id=\"todo-count\"><strong>5</strong> items left</span><ul id=\"filters\"><li><a href=\"#/\" class=\"selected\" data-w-onclick=\"handleAllFilterClick|footer\">All</a></li><li><a href=\"#/active\" data-w-onclick=\"handleActiveFilterClick|footer\">Active</a></li><li><a href=\"#/completed\" data-w-onclick=\"handleCompletedFilterClick|footer\">Completed</a></li></ul><button id=\"clear-completed\" data-w-onclick=\"handleClearCompletedClick|footer\">Clear completed (1)</button></footer></div></section>");

  lasso_body_tag({}, out);

  out.w("</body></html>");
}

template._ = render;
