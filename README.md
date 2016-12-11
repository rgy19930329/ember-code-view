# Ember-my-radios

Ember implementation of custom radios.

## Guide

step1: template.hbs

```
{{my-radios
    content=model.list
    optionValuePath="valx"
    optionLabelPath="fname"
    value=model.curr.val
    name=model.curr.name
}}
```

step2: data

```
list: [
    { valx: '1', fname: '影视' },
    { valx: '2', fname: '艺术' },
    { valx: '3', fname: '剧目' },
    { valx: '4', fname: '其它' }
],

curr: { val: '3', name: '剧目' },
```

step3: style (you can overwrite if you want)

> tips: less base style

```
.my-radios {
    font-size: 0;
    input {
        display: none;
    }
    span {
        background: #560;
        color: #fff;
        display: inline-block;
        font-size: 20px;
        padding: 3px 10px;
        border-radius: 3px;
        margin: 0 2px;
    }
    input:checked + span {
        background: #f60;
    }
}
```

## Access on Line
[ember-my-radios](https://rgy19930329.github.io/project/ember-kylin/dist/index.html#/ember-addon/ember-my-radios).

## Installation

* `git clone https://github.com/rgy19930329/ember-my-radios.git`
* `cd ember-my-radios`
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
