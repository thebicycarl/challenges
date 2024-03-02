const disemvowel = str => {
    // Takes string and removes all vowels
    return str.replace(/[aeiouAEIOU]/g, '')
  };
  
  console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'