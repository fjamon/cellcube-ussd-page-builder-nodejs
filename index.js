
var generateRedirectPage = function(options){
    if (!options)
        return this.getEmptyPage()
    
    //Encoder l'url pour l'ussd
    var urlencode = require('urlencode')
    if (options.encodeUrl){
        if (options.encodeUrl == true)
            options.erl = urlencode.encode(options.erl)
    }        
    else{
        if (options.encodeUrl == true)
            options.erl = urlencode.encode(options.erl)        
    }
            
    var page = require('./templates/redirect.xml')
                .replace("{descr}",options.descr? options.descr : process.pid)                
                .replace("{count}",options.count? options.count : true)
                .replace("{ismenu}",options.descr? options.ismenu : true)                
                .replace("{volatile}",options.descr? options.volatile : false)
                .replace("{erl}",options.erl)
    
    return page
}

var generateContentPage = function(options){
    if (!options)
        return this.getEmptyPage()

    //Ajout des liens
    var links = ""
    if (options.links){
        var ussdLink
        for (var i = 0; i<options.links.length; i++){
            if (options.links[i]){
                ussdLink = "<a key = '{key}' href = '{href}'>{text}</a>"
                if (options.links[i].href)
                    ussdLink = ussdLink.replace("{href}",options.links[i].href)
                else
                    ussdLink = ussdLink.replace("{href}","")
                    
                if (options.links[i].text)
                    ussdLink = ussdLink.replace("{text}",options.links[i].text)
                else
                    ussdLink = ussdLink.replace("{text}","")
                    
                if (!options.autoIncrementKeys){
                    if (options.links[i].key)
                        ussdLink = ussdLink.replace("{key}",options.links[i].key)
                    else
                        ussdLink = ussdLink.replace("{key}",i+1)
                }
                else{
                    ussdLink = ussdLink.replace("{key}",i+1)
                }
                links += ussdLink + "<br/>"
            }
        }
    }
    
    var page = require('./templates/page.xml')
                .replace("{descr}",options.descr? options.descr : process.pid)
                .replace("{count}",options.count? options.count : true)
                .replace("{volatile}",options.volatile? options.volatile : false)
                .replace("{ismenu}",options.ismenu? options.ismenu : true)
                .replace("{content}",options.content? options.content + "<br/>" : "")
                .replace("{links}",links)
    
    return page
}

var generateForm = function(options){
    
    if (!options)
        return this.getEmptyPage()
        
    /*
    var options = {
        descr: descr,
        prompt: text,
        var: "plateNumber",
        action: "askForParkingZone?isOwnVehicle=" + isOwnVehicle                         
    };
    */
    if (options.req){
        options.action = options.action? options.action.split('?') : ""
        var i = 0
        for(var param in options.req.query){
            if (i == 0){                
                options.action += "?" + param + "=" + options.req.query[param]
            }
            else{
                options.action += "&" + param + "=" + options.req.query[param]
            }                            
            i++
        }
    }
    
    var page = require('./templates/form.xml')
                .replace("{descr}", options.descr? options.descr : process.pid )
                .replace("{count}",options.count? options.count : true)
                .replace("{volatile}",options.volatile? options.volatile : false)
                .replace("{ismenu}",options.ismenu? options.ismenu : true)
                .replace("{action}", options.action? options.action : "")
                .replace("{var}", options.var? options.var : "")
                .replace("{kind}",options.kind? options.kind : "digits")
                .replace("{prompt}",options.prompt? options.prompt + "<br/>" : "")
    return page
}

var generateEmptyPage = function(options){
    return require('./templates/page.xml')
                .replace("{descr}", options.descr? options.descr : process.pid)
                .replace("{count}",true)
                .replace("{volatile}",false)
                .replace("{ismenu}",true)
                .replace("{content}","")
                .replace("{links}","")
}

module.exports.generateRedirectPage = generateRedirectPage
module.exports.generateContentPage = generateContentPage
module.exports.generateForm = generateForm
module.exports.generateEmptyPage = generateEmptyPage




