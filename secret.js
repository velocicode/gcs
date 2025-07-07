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
          console.log('💣 You found the cheat code (but it does not do anything)');
          break;
        case 'lakehouse':
          console.log('	Bhdk wkdw lv qrw lw. Vruub. Brx duh zhofrph wr bhoo: L ixfnlqj kdwh brx mxoldq! Dfurvv wkh urrp li wkdw pdnhv brx ihho ehwwhu wkr. Lw pljkw pdnh ph ihho ehwwhu. Jr iru lw!');
          break;
        case 'wlohlwtkl':
          console.log('Ghdg gursv duh vhfuhw exw xqvhfxuhg sodfhv rxw lq wkh uhdo zruog. Sodfhv wkdw prvw shrsoh zrxog qrw nqrz wr fkhfn. Vslhv fdq ohdyh rqh-dqrwkhu zkdwhyhu wkhb qhhg lq wkhp. D vhsdudwh pdunhu lv ohiw lq d gliihuhqw sodfh wr lqglfdwh wkdw dq lwhp kdv ehhq sodfhg lq wkh ghdg gurs. Wkdw vhshudwh pdunhu lv vrphwklqj lqqrfxrxv dqg ljqrudeoh, d vlqjoh orj lq d iluhsodfh shukdsv. \nOhdylqj lqwho dqg pdwhuldo iru frqwdfwv lv gliilfxow dqg gdqjhurxv. \nDvvxplqj brx jrw wklv idu, krz gr L jhw brx brxu edgjhv? \nNqrzlqj wkdw L fdq wuxvw brx lv wkh iluvw sduw. \nHolplqdwlqj ulvn lv wkh vhfrqg.\nVrphwlphv pdwhuldo dqg lqwhooljhqfh fdq eh ohiw yld ghdg gursv. Kdylqj d sodfh rxw lq wkh zruog zkhuh brx fdq ohdyh vrphwklqj lv qhfhvvdub. Hawuhphob gdqjhurxv, exw vrphwlphv qhfhvvdub. Ghdg gursv duh d zdb wr dffrpsolvk wklv. ');
          break;
        case 'bad manners':
          console.log('	Rri wklv lv qrw lw. Brx duh jhwwlqj forvhu wkr! Ru qrw. L dp qrw vxuh, L zurwh wkhvh phvvdjhv dqg wkhq frslhg wkhp lqwr udqgrp lqsxwv. Brx duh suredeob qrw forvh. Nhhs wublqj wkr. Brx jrw wklv!');
          break;
        case 'lean in':
          console.log('Jrrg wub! Qrw lw wkr. Nhhs dw lw!');
          break;
        case 'someone knows my name':
          console.log('	Wklv errn zdv khdyb. L glg qrw uhdolch krz khdyb xqwlo L vwduwhg xvlqj lw.');
          break;
        case 'fortune teller':
          console.log('	Brx glg lw! Wklv lv wkh dqvzhu! Oro! Qrsh mxvw nlgglqj. Nhhs wublqj!');
          break;
        case 'santa fe':
          console.log('	L zdv whpswhg wr sxw wkh obulfv wr “Gr Brx Nqrz Wkh Zdb wr Vdq Mrvh?” khuh. Exw L zdv jrlqj wr fkdqjh “Vdq Mrvh” wr “Vdqwd Ih”. exw lqvwhdg L mxvw zurwh wklv. Vr mxvw lpdjlqh wkdw, L jxhvv. ');
          break;
        case 'wlohlwtkl tnn':
          console.log('Ohdylqj lqwho dqg pdwhuldo iru frqwdfwv lv gliilfxow dqg gdqjhurxv. Dvvxplqj brx jrw wklv idu, krz gr L jhw brx brxu edgjhv? Nqrzlqj wkdw L fdq wuxvw brx lv wkh iluvw sduw. Holplqdwlqj ulvn lv wkh vhfrqg.');
          console.log('Vrphwlphv pdwhuldo dqg lqwhooljhqfh fdq eh ohiw yld ghdg gursv. Kdylqj d sodfh rxw lq wkh zruog zkhuh brx fdq ohdyh vrphwklqj lv qhfhvvdub. Hawuhphob gdqjhurxv, exw vrphwlphv qhfhvvdub. Ghdg gursv duh d zdb wr dffrpsolvk wklv. ');
          console.log(' ');
          console.log('Ghdg gursv duh vhfuhw exw xqvhfxuhg sodfhv rxw lq wkh uhdo zruog. Sodfhv wkdw prvw shrsoh zrxog qrw nqrz wr fkhfn. Vslhv fdq ohdyh rqh-dqrwkhu zkdwhyhu wkhb qhhg lq wkhp. D vhsdudwh pdunhu lv ohiw lq d gliihuhqw sodfh wr lqglfdwh wkdw dq lwhp kdv ehhq sodfhg lq wkh ghdg gurs. Wkdw vhshudwh pdunhu lv vrphwklqj lqqrfxrxv dqg ljqrudeoh, d vlqjoh orj lq d iluhsodfh shukdsv.');
          break;
        case 'cyrus':
          console.log('hey man. I thought you might find this. This is kind of ruining the fun dont you think? I will give you a hint if you want a hint. Just come to me and tell me this is too hard. Hints will be given. to anyone btw, not just Cy.');
          break;
        case 'cia':
          console.log('	Bhdk wklv lv qrw lw. nhhs wublqj wkr. brx duh suredeob jhwwlqj forvhu! khuh lv wkh wklqj, L kdyh klgghq ghwdlov, klqwv, dqg foxhv lq sodfhv brx pljkw qrw wklqn wr orrn. orrn wkhuh!');
          break;
        case 'meredith':
          console.log('Ghdg gursv duh fryhuw orfdwlrqv lq wkh uhdo zruog wkdw duh xqprqlwruhg, dw ohdvw lq wkhrub. Brx fdq xvh wkhp wr ohdyh lqwho dqg pdwhuldo iru frqwdfwv. Xvxdoob d vhsdudwh pdunhu lv pdgh lq sxeolf wr qrwh wkdw wkhuh lv dq lwhp zdlwlqj dw wkh ghdg gurs wr eh slfnhg xs. Wklv fdq eh dqbwklqj wkdw kdv ehhq djuhhg wr lq wkh sdvw. Wkh pdunhu lv pdgh zlwk vrphwklqj lqqrfxrxv wkdw zloo eh ljqruhg eb prvw shrsoh. D vlqjoh orj lq d iluhsodfh iru shukdsv.');
          break;
        case 'great bridge':
          console.log('💣 You found the cheat code');
          break;
        case 'the great bridge':
          console.log('💣 You found the cheat code');
          break;
        case 'hint':
          console.log('	Klqw!? brx zdqw d klqw!? Krz forvhob kdyh brx uhdg wkhvh phvvdjhv? Duh brx uhdglqj wrs wr erwwrp? vwduw dw wkh ehjlqlqj, uhdg wrs wr erwwrp. Brx fdq iljxuh lw rxw!');
          console.log('eat a salad and think about it. You will get it.');
          break;
        case 'help':
          console.log('	Klqw!? brx zdqw d klqw!? Krz forvhob kdyh brx uhdg wkhvh phvvdjhv? Duh brx uhdglqj wrs wr erwwrp? vwduw dw wkh ehjlqlqj, uhdg wrs wr erwwrp. Brx fdq iljxuh lw rxw!');
          console.log('eat a salad and think about it. You will get it.');
          break;
        case 'fuck you julian':
          console.log('💣 yeah I get it. I suck');
          break;
        case 'new hampshire':
          console.log('💣 You found the cheat code');
          break;
        default:
          console.log('Khoor, brx kdyh douhdgb ehhq jlyhq wkh sdvvzrug. Brx zloo qhhg wr iljxuh rxw zkdw wkdw lv dqg hqwhu lw khuh. Grlqj vr zloo jlyh brx wkh rxwsxw brx duh orrnlqj iru. Brx duh grlqj juhdw! Brx duh jhwwlqj forvh wr wkh hqg. Nhhslqj brxu edgjhv vdih lv lpsruwdqw. Zh zrxogq’w zdqw wkhp wr idoo lqwr wkh kdqgv ri wkh zurqj shrsoh. Wkhq dqbrqh frxog sodb erdug jdphv zlwk xv. L krsh brx kdyh kdg ixq zlwk wklv jdph. L kdyh kdg ixq pdnlqj lw. Wkrxjk L gr uhdolch wkdw pdnlqj wkh gliilfxowb wkh fruuhfw ohyho lv wkh kdug sduw. Wrr hdvb ru wrr kdug lv hdvb. Mxvw uljkw lv gliilfxow. Ohw xv nqrz li brx hqmrbhg lw vr zh fdq ghflgh li zh zdqw wr gr lw djdlq qhaw bhdu. Wklv kdv wr eh orqj hqrxjk vr wkdw brx kdyh uhihuhqfh srlqwv wr eh deoh wr ghfrgh lw. Li lw lv wrr vkruw lw zloo eh xqghflskhudeoh. Brx vkrxog kdyh vhhq zkdw fkdwjsw wkrxjkw wkh uhvsrqvh wr wkh fruuhfw sdvvzrug vdlg.');
      }

      inputBox.value = ''; // clears the input field
    }
  });
})();
