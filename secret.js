(function(){
  const inputBox = document.getElementById('secretInput');

  inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Important: prevent default Enter behavior in input fields

      const input = inputBox.value.trim().toLowerCase();

      switch (input) {
        case 'bad manners':
          //console.log('🪄 Secret unlocked!');
          console.log('Hello friend. you are on the right path but this is not a valid input.');
          break;
        case 'debug':
          console.log('🔍 Debugging mode activated');
          break;
        case 'cheat':
          console.log('💣 You found the cheat code');
          break;
        default:
          console.log('❌ Incorrect input');
      }

      inputBox.value = ''; // This will definitely clear the input field
    }
  });
})();
