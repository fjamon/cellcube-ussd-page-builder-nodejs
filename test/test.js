var should = require('chai').should(),
    builder = require('../index'),
    generateRedirectPage = builder.generateRedirectPage,
    generateContentPage = builder.generateContentPage,
    generateForm = builder.generateForm,
    generateEmptyPage = builder.generateEmptyPage;
    

describe('#generateContentPage', function() {
  it('Generate a basic USSD page with links', function() {
    var options = {
        descr: "ussd-page-builder",
        content: "Page content goes there",
        links: [
            {href: "somepath/option_one", text: "Option one"},            
            {href: "somepath/option_two", text: "Option two"}    
        ]
    };    
    var result = "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE pages SYSTEM 'cellflash.dtd'><pages descr='ussd-page-builder'><page count='true' volatile='false' ismenu='true'>Page content goes there<br/><br/><a key = '1' href = 'somepath/option_one'>Option one</a><br/><a key = '2' href = 'somepath/option_two'>Option two</a><br/></page></pages>";
    generateContentPage(options).should.equal(result);
  });

});

describe('#generateRedirectPage', function() {
  it('Generate an USSD redirect page. The kind of page used for change service plugin', function() {
    var options = {
        descr: '6604',
        erl: "/mcel/acceptance/ussddemo/home",
        encodeUrl: true
    };      
    var result = "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE pages SYSTEM 'cellflash.dtd'><pages descr='6604'><page count='true' volatile='undefined' ismenu='undefined'><redirect src='erl://svc_core:change_service?file:%2Fmcel%2Facceptance%2Fussddemo%2Fhome'/></page></pages>";
    generateRedirectPage(options).should.equal(result);
  });

});

describe('#generateForm', function() {
  it('Generate an USSD form page. The kind of page that lets user input some value', function() {
    var options = {
        descr: 'form',
        prompt: 'enter your name',
        var: "name",
        action: "askForPhone" 
    };      
    var result = "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE pages SYSTEM 'cellflash.dtd'><pages descr='form'><page count='true' volatile='false' ismenu='true'><form action='askForPhone'><entry var='name' kind='digits'><prompt>enter your name<br/></prompt></entry></form></page></pages>";
    generateForm(options).should.equal(result);
  });

});

describe('#generateEmptyPage', function() {
  it('Generate an empty USSD form page with no content inside.', function() {
    var options = {
        descr: 'empty' 
    };      
    var result = "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE pages SYSTEM 'cellflash.dtd'><pages descr='empty'><page count='true' volatile='false' ismenu='true'><br/></page></pages>";
    generateEmptyPage(options).should.equal(result);
  });

});