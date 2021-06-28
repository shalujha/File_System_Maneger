const fs=require("fs");
const path=require("path");
function helpfn(dirpath){
    console.log("list of commands available are : \n\t\t\t node Main.js Tree 'directoryPath' \n \t\t\t node Main.js Organise 'directoryPath'");
}

module.exports={
    HelpKey:helpfn
}