function extractFile(string) {
  let index =  string.lastIndexOf('\\');
  let file = string.substring(index + 1).split('.'); 
  let extension = file.pop(); 
  let fileName = file.join('.');
  
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');