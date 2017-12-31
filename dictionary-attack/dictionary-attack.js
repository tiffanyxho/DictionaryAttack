var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  var pw = document.getElementById("pw").value.toLowerCase();
   secure = false

  for (var i in wordsList) {
    if (var pw == var i) {
      secure = false
    }

    else {
      secure = true
    }
  }

  printResults(secure);
}

function printResults(isSecure) {
  if (isSecure) {
    document.getElementById("results").style.color = "#01426a";
    document.getElementById("results").innerHTML = "Good password";
  }
  else {
    document.getElementById("results").style.color = "#f4364c";
    var resultsStr = "Bad Password";
    document.getElementById("results").innerHTML = resultsStr;
  }
}
