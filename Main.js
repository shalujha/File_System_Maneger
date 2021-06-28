#!/usr/bin/env node
var fs=require("fs");
var path=require('path');
const Help=require("./Commands/Help.js");
const Organise=require("./Commands/Organise.js");
const Tree=require("./Commands/Tree.js");


var types={
    media:["mp4","mkv"],
    archives:["zip","7z","rar","tar","gz","ar","iso","xz","lnk"],
    documents:["docx","doc","pdf","pptx","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex"],
    app:["exe","dmg","pkg","deg",'ipynb',"html"]
};
var inputArr=process.argv.slice(2);
//console.log(inputArr);
var command=inputArr[0];
switch (command){
    case "Tree":
        Tree.TreeKey(inputArr[1]);
        break;
    case "Organise":
        Organise.OrganiseKey(inputArr[1]);
        break;
    case "Help":
        Help.HelpKey(inputArr[2]);
        break;
    default:
        console.log("😒 Please write a valid command");
}








