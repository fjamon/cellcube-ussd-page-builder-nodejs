Myriade's CellCube USSD Page builder for nodeJs
=========

A small library providing utility methods to generate USSD page for CellCube platorm.

## Installation

  npm install cellcube-ussd-page-builder-nodejs --save

## Usage
  
 ```js
  builder = require('cellcube-ussd-page-builder-nodejs');
  
  var options = {
      descr: "cellcube-ussd-page-builder-nodejs",
      content: "Page content goes there",
      links: [
          {href: "path/option_one", text: "Option one"},            
          {href: "path/option_two", text: "Option two"}    
      ]
  };

  
  console.log(builder.generateContentPage(options));
```

## Tests

```shell
  npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.3
* 1.0.2
* 1.0.1 
* 1.0.0 Initial release