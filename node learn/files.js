const fs= require("fs");

//reading files
//fs.readFile( "./docs/file1.txt", (err, data) => {
//    if(err){
 //       console.log(err);
 //   }
  //  console.log(data.toString());
//});

//writing files
//fs.writeFile("./docs/file1.txt", "good going", () => {
 //   console.log("The content is saved");
//});

if(!fs.existsSync("./assets")){
fs.mkdir( "./assets", (err) => {
if(err) {
    console.log(err)
}
console.log("file created");
});
} else
fs.rmdir("./assets", (err) => {
    if(err) {
        console.log(err);
    }
    console.log("File deleted");
});