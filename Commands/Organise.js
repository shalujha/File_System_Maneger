const fs=require("fs");
const path=require("path");
function organisefn(dirpath){
    if(dirpath==undefined){
        organisefn(process.cwd());
     //   console.log("Please enter path of directory");
    }else{
        var doesPathExist=fs.existsSync(dirpath);
        if(!doesPathExist){
            console.log("please enter correct directory path ");
            return;
        }else{
            var current_path=path.join(dirpath,"organised_files");
            if(!fs.existsSync(current_path)){
                fs.mkdirSync(current_path);
            }
            organiseHelper(dirpath,current_path);
        }
    }
  //  console.log("organse function called with dirpath : "+dirpath);
}

function organiseHelper(src, dest){
    var files=fs.readdirSync(src);
    files.forEach(function(file){
        var current_file_path=path.join(src,file);
        if(fs.lstatSync(current_file_path).isFile()){
            var category=getCategory(current_file_path);
            console.log(file+" belongs to --> "+category);
            sendFile(current_file_path,category,dest);
        }   
    })
}

function sendFile(srcPath, category, destPath){
    var category_path=path.join(destPath,category);
    if(!fs.existsSync(category_path)){
        fs.mkdirSync(category_path);
    }
  //   console.log("source path : "+ srcPath);
  //   console.log('destination path : '+ category_path);
     var fileName=path.basename(srcPath);
  //   console.log("name of file : "+fileName);
     var destFilePath=path.join(category_path,fileName);
     fs.copyFileSync(srcPath,destFilePath);
     fs.unlinkSync(srcPath);

}

function getCategory(current_file_path){
    if(fs.lstatSync(current_file_path).isFile()){
        var extension=path.extname(current_file_path).slice(1);
      //  console.log("extension is : "+ extension);
     //   console.log("*********************************");
        for(var key in types){
          //  console.log("key : "+ key);
            for(var i=0;i<types[key].length;i++){
              //  console.log(types[key][i]);
                if(types[key][i].localeCompare(extension)===0){
                 //   console.log("if condition me aye ")
                    return key;
                }
            }
        }
        return "other";
      //  console.log("****************************");
      //  console.log(extension);
    }

}

module.exports={
    OrganiseKey:organisefn
}