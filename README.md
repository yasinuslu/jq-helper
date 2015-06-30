# A helper that makes it easy to quickly initialize jQuery plugins

```
meteor add yasinuslu:jq-helper
```

Usage:

```html
<template name="myTemplate">
  <h1>My Template</h1>
  {{#jq options=popoverOptions}}
  	<div class="popover"></div>
  {{/jq}}
</template>
```


```js
Template.myTemplate.helpers({
  popoverOptions: function() {
    return {
   	  onRendered: function() {
   	    this.$('.popover).popover();
   	  } 
    };
  }
});
```