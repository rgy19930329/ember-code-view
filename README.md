# Ember-code-view

Ember implementation of custom code-viewer, make code hightlight(html, js, css).


## Guide

step1: template.hbs

```
{{#code-view lang="js"}}
// write js code
{{/code-view}}

{{#code-view lang="css"}}
// write css code
{{/code-view}}

{{#code-view lang="html"}}
// write html code
{{/code-view}}
```

step2: copy kcodeview

copy `ember-code-view/vendor/kcodeview` to `your-project/vendor/kcodeview`

step3: pull in kcodeview

add this code in `your-project/ember-cli-bulid.js`

```
app.import('vendor/kcodeview/KylinJS.js')
app.import('vendor/kcodeview/kcodeview-js.js');
app.import('vendor/kcodeview/kcodeview-css.js');
app.import('vendor/kcodeview/kcodeview-html.js');
app.import('vendor/kcodeview/kcodeview.css');
```

end of Guide，that's all.


## Access on Line


## Installation

* `git clone https://github.com/rgy19930329/ember-code-view.git`
* `cd ember-code-view`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
