const fs=require("fs");
const path=require("path");
function treefn(dirpath){
    if(dirpath==undefined){
        treeHelper(process.cwd(),"");
     //   console.log("Please enter path of directory");
    }else{
        var doesPathExist=fs.existsSync(dirpath);
        if(!doesPathExist){
            console.log("please enter correct directory path ");
            return;
        }else{
            treeHelper(dirpath,"");
        }
    }
    console.log("tree function called with directory path : "+ dirpath);
}

function treeHelper(dirpath, indent){
    var isFile=fs.lstatSync(dirpath).isFile();
    var Name=path.basename(dirpath);
    if(isFile){
         console.log(indent+"\\---"+Name);
    }else{
        console.log(indent+"+---"+Name);
        var childrens=fs.readdirSync(dirpath);
        childrens.forEach(function(files){
            treeHelper(path.join(dirpath,files),indent+"\t");
        })
    }
}
module.exports={
    TreeKey:treefn
}