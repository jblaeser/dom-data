//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

    consoleDisplay = document.getElementById("ConsoleDisplay");

    oldest = speechesArray[0].year,
    newest = speechesArray[0].year;

for(var i = 0; i < speechesArray.length; i++){
  if(speechesArray[i].year < oldest){
    oldest = speechesArray[i].year;
  }
  if(speechesArray[i].year > newest){
    newest = speechesArray[i].year;
  }
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.';

  if(speechesArray[0].yearIsBCE === true){
    consoleDisplay.innerHTML += "<br> <br> This speech took place before the common era."
  } else{
    consoleDisplay.innerHTML += "<br> <br> This speech took place during the common era."
  }


  if(speechesArray[0].year === oldest){
    consoleDisplay.innerHTML += "<br> <br> This is the oldest speech on the page.";
  } else if(speechesArray[0].year === newest){
    consoleDisplay.innerHTML += "<br> <br> This is the most recent speech on the page.";
  } else{
    consoleDisplay.innerHTML += "<br> <br> This is neither the oldest nor the most recent speech on the page."
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    consoleDisplay.innerHTML = "This speech took place before the common era."
  } else{
    consoleDisplay.innerHTML = "This speech took place during the common era."
  }

  

  if(speechesArray[1].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

    if(speechesArray[2].yearIsBCE === true){
    consoleDisplay.innerHTML = "This speech took place before the common era."
  }else{
    consoleDisplay.innerHTML = "This speech took place during the common era."
  }


  if(speechesArray[2].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});