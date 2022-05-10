const fs = require("fs");

const hello = "Hello Node";
console.log(hello);
 // Blocking synchronous way
const textIn = fs.readFileSync("./sample.txt", "utf-8");
console.log(textIn);

const textOut = `This is the output for the sample of the write file in the node. The node is popular backend language and more information is here: ${textIn}. \n Created on ${Date.now()}`;
fs.writeFileSync("./output.txt", textOut);

console.log("File is added as the textOut");

const sampleText = fs.readFileSync("./output.txt", "utf-8");
console.log(sampleText);

// non-blocking way

fs.readFile("./sample.txt", "utf-8", (err, data1) => {
  console.log(data1);
  fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
  });
});
console.log("Your file is reading");

fs.readFile("./start.txt", "utf-8", (err, data1) => {
  err && console.log("You have err 🌋");
  fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile("./sample.txt", "utf-8", (err, data3) => {
      fs.writeFile(
        "./final.txt",

        `${data2}\n ${data3}`,
        "utf-8",
        (err) => {
          console.log("Your file has been written 😁");
        }
      );
    });
  });
});

console.log("Your data2 is reading");
