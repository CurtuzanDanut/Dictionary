let wList = ["\0"];
let input = document.getElementById('word');
let search = document.getElementById('searchword');

function addWord(){
  const node = document.createElement("li");
  const word = document.createTextNode(document.getElementById("word").value);
  node.appendChild(word);
  document.getElementById("wordList").appendChild(node);
  wList.push(input.value)
  input.value = ''
  return false;
}

function searchWord(){
  for(let i = 0; i < wList.length; ++i){
    if(wList[i] === search.value && (search)){
      alert("The word " + search.value + " exists in dictionary")
      i = wList.length
    }else if(i === wList.length - 1){
      alert("The word " + search.value + " does not exist in dictionary")
    }
  }
  search.value = ''
  return false;
}