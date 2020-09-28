$(document).ready(function () {

  //sentence array
  let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
  ];
  //sentences
  let sentenceIndex = 0;
  //letters
  let sentencePosition = 0;
  let letter = sentences[sentenceIndex][sentencePosition];
  let currentSentence = sentences[0];
  // let currentLetter = currentSentence.charAt(0);
  let startTime = Date.now();
  let errors = 0;
  



  let $sentenceDiv = $('#sentence')
  //hide uppercase keyboard on page load
  $('#keyboard-upper-container').hide();

  //when shift key is pressed, hide lower, show upper, add highlight
  $(document).keydown(function (e) {
    // console.log(e)
    if (e.shiftKey == true) {
      $('#keyboard-upper-container').show();
      $('#keyboard-lower-container').hide();
      // $(`#83`).css('background-color', '#F5F5F5');
    };
    let keynum = e.key.charCodeAt(0);
    $(`#${keynum}`).css('background-color', 'yellow');

  });

  //typing functions
  $(document).keypress(function (e) {
    //move to next letter
    startTime;
    if (e.key === letter) {
      console.log(startTime);
      sentencePosition++;
      letter = sentences[sentenceIndex][sentencePosition];
      $('#target-letter').text(letter);
      //move yellow block, letter check
      $('#yellow-block').css('left', '+=17.5');
      $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
      sentencePosition++;
      letter = sentences[sentenceIndex][sentencePosition];
      $('#target-letter').text(letter);
      $('#yellow-block').css('left', '+=17.5');
      $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
      errors++;
    };


    //go to next sentence
    if (sentencePosition === currentSentence.length) {
      sentenceIndex++;
      console.log(sentenceIndex);
      // if out of sentences  
      if (sentenceIndex == 5) {
        gameOver();
      } else {
      currentSentence = sentences[sentenceIndex];
      $('#sentence').empty();
      //move yellow block
      $('#yellow-block').css('left', '15px');
      //reset letter index
      printSentence();
      sentencePosition = 0;
      letter = sentences[sentenceIndex][sentencePosition];
      $('#target-letter').text(letter);
      $('#feedback').empty();
      };

    };
  });

  //game over function calculate typing speed, buttons to play again
  function gameOver() {
    //number of words / minutes -2 * numberOfMistakes
    alert('game over');
    $('#feedback').empty();
    $('#target-letter').empty();
    let endTime = Date.now();
    endTime;
    let score = 54/((endTime - startTime)/(60*1000)) * errors;
    $('#feedback').append('<span>' + 'Score:' + score + 'wpm' + '</span>', '<button id="resetButton">Play Again?</button>');
    $('#resetButton').click(function () {
      location.reload();
    });
    //54 words in sentence array
    

  };

  //when shift key is released, show lower, hide upper, remove highlight
  $(document).keyup(function (e) {
    if (e.keyCode == 16) {
      $('#keyboard-upper-container').hide();
      $('#keyboard-lower-container').show();
    };
    let keynum = event.key.charCodeAt(0);
    $(`#${keynum}`).css('background-color', '#F5F5F5');
  });


  //print sentence function
  function printSentence() {
    $sentenceDiv.append((sentences[sentenceIndex]));
    $('#target-letter').text(letter);
  };

  printSentence();

  







  

 

  //end of body
})