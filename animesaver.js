
function salvaFiltro(mieidati,gist,token){
    writedata(mieidati,gist,token,"arraySaved.js");
}

function salvaAttivo(mieidati,gist,token){
    writedata(mieidati,gist,token,"arraySaved.js");
}

function salvaFiltro3(mieidati,gist,token){
    writedata(mieidati,gist,token,'"arraySaved.js"');
}

function salvaAttivo3(mieidati,gist,token){
    writedata(mieidati,gist,token,'"arraySaved.js"');
}


function writedata(mieidati,gist,token,file){
    var data = {
        "description": "posting gist",
        "public": true,
        "files": {
            file: {
           //'"' + file + '"': {
                "content": mieidati
                }
            }
        }
    sendData(data,gist,token)
}



function sendData(data,gist,token){
    
        $.ajax({ 
            url: 'https://api.github.com/gists/'+gist,
            type: 'POST',
            //type: 'PATCH',	
            dataType: 'json',
            data: JSON.stringify(data),
            beforeSend: function(xhr) {xhr.setRequestHeader("Authorization", "token "+token);},
            async: false
            }).fail( function(e) {
                console.warn("Dati non salvati errore:", e);
            }).done(function(response) {
               console.log("Done: " +  response);
               window.aniRes = response
            })
    }

        
        
        
        
 
function convertiMultiDimensionalArray(name,arr){
    var fil = "var "+name+" = [\\n'" + arr[0] + "'";
    for (i = 1; i < arr.length; i++) { 
        fil += ",\\n'" + arr[i] + "'";
        } 
    fil +="\\n]\\n\\n\\n"
}
 
function convertiArrays(name,arr){
    fil += "var "+name+" = [\\n"
    fil += "[" + arr[0][0] + "," +  arr[0][1] +"]"
    for (i = 1; i < arr.length; i++) { 
        fil += ",\\n[" + arr[i][0] + "," +  arr[i][1] +"]"
        } 
    fil +="\\n]\\n\\n\\n"
    return fil;
}
 
 
