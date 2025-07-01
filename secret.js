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
        case 'meredith':
          console.log('💣 You found the test code');
          break;
        default:
          console.log('Khoor, brx kdyh douhdgb ehhq jlyhq wkh sdvvzrug. Brx zloo qhhg wr iljxuh rxw zkdw wkdw lv dqg hqwhu lw khuh. Grlqj vr zloo jlyh brx wkh rxwsxw brx duh orrnlqj iru. Brx duh grlqj juhdw! Brx duh jhwwlqj forvh wr wkh hqg. Nhhslqj brxu edgjhv vdih lv lpsruwdqw. Zh zrxogq’w zdqw wkhp wr idoo lqwr wkh kdqgv ri wkh zurqj shrsoh. Wkhq dqbrqh frxog sodb erdug jdphv zlwk xv. L krsh brx kdyh kdg ixq zlwk wklv jdph. L kdyh kdg ixq pdnlqj lw. Wkrxjk L gr uhdolch wkdw pdnlqj wkh gliilfxowb wkh fruuhfw ohyho lv wkh kdug sduw. Wrr hdvb ru wrr kdug lv hdvb. Mxvw uljkw lv gliilfxow. Ohw xv nqrz li brx hqmrbhg lw vr zh fdq ghflgh li zh zdqw wr gr lw djdlq qhaw bhdu. Wklv kdv wr eh orqj hqrxjk vr wkdw brx kdyh uhihuhqfh srlqwv wr eh deoh wr ghfrgh lw. Li lw lv wrr vkruw lw zloo eh xqghflskhudeoh. Brx vkrxog kdyh vhhq zkdw fkdwjsw wkrxjkw wkh uhvsrqvh wr wkh fruuhfw sdvvzrug vdlg.');
      }

      inputBox.value = ''; // This will definitely clear the input field
    }
  });
})();
