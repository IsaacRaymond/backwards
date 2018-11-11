let numFiles = 0;

document.addEventListener('DOMContentLoaded', function() {
  fillCells();
}, false);

function fillCells(){

  let folderSelector = '';

  for( let i = 1; i <25; i++ ){

    folderArray = getNewFolder();
    let selector = Math.floor(Math.random()*folderArray[1]);
    itemName = '"Resources/'+folderArray[0]+'/'+selector+'.png"';

    document.getElementById('a'+i).innerHTML = "<img src="+itemName+">";
    document.getElementById('a'+i).value = folderArray[2];
    if ( document.getElementById('a'+i).value===0 ){
        document.getElementById('a'+i).addEventListener("click", no);
    } else{
      document.getElementById('a'+i).addEventListener("click", yes);
    }

  }
}

function getNewFolder(){
  let rand = Math.floor(Math.random() * 6);
  if (rand === 0){
    return ["CapitalsCorrect", 25, 1];
  } else if (rand === 1){
    return ["CapitalsIncorrect", 25, 0];
  } else if (rand === 2){
    return ["LowercaseCorrect", 19, 1];
  } else if (rand === 3){
    return ["LowercaseIncorrect", 19, 0]
  } else if (rand === 4){
    return ["NumbersCorrect", 8, 1];
  } else {
    return ["NumbersIncorrect", 8, 0];
  }
}

function no(){
  window.open('https://www.youtube.com/watch?v=OFr74zI1LBM');
}

function yes(){
  alert('YES');
}
