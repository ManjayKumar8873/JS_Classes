 const myHeros = ["shaktiman", "spiderman", "rahul"]
 const otherHeros = ["superman", "flash", "batman"]

// ++++++++ worng write +++++++++//

//  myHeros.push(otherHeros)
//  console.log((myHeros));
 
 
 // ++++++++++ right Write ++++++++++++

  const allHeros = myHeros.concat(otherHeros)
  console.log(allHeros);

  // OR //

  const all_new_heros = [...myHeros, ...otherHeros]
  console.log(all_new_heros);
  
   const anothe_array = [1, 2, 5, [3, 4, 2], 7, [6, 1, [8, 9,5]]]
   const all_another_array = anothe_array.flat(Infinity)
   console.log(all_another_array);

   console.log(Array.isArray("Manjay"));
   console.log(Array.from("Manjay"));
   
   console.log(Array.from({name: "Manjay"}));  // interesting for interview 
   

  let score1 = 100
  let score2 = 200
  let score3 = 300

  console.log(Array.of(score1, score2, score3));
  