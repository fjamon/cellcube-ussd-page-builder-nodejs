Myriade USSD Page builder for nodeJs
=========

A small library providing utility methods to generate USSD page for Myriade platorm.

## Installation

  npm install myriade-ussd-page-builder-node --save

## Usage
  
 ```js
  builder = require('myriade-ussd-page-builder-node');
  
  var options = {
      descr: "ussd-page-builder",
      content: "Page content goes there",
      links: [
          {href: "somepath/option_one", text: "Option one"},            
          {href: "somepath/option_two", text: "Option two"}    
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

* 1.0.0
* 0.1.0 Initial release