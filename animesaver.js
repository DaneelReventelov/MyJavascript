function writedata(mieidati,gist,token){
$.ajax(
        { 
            url: 'https://api.github.com/gists/' + gist,
            type: 'PATCH',  
                beforeSend: function(xhr) { 
                    xhr.setRequestHeader("Authorization", "token "+token); 
                },
            data: '{"description": "updated gist via ajax","public": true,"files": {"testa.txt": {"content":"'+ mieidati+'"}}}',
            async: false,
            success: function (result) {
                if (result.isOk == false) console.log("Caricato con successo: " + result.message);
                else console.log("Dati non salvati: " + result.message);
            }
        }).done(function(response) {
            console.log(response);
            }
    );
 
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
 
 
