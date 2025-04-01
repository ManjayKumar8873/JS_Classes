const accountId = 8873
let accountEmail = "manjay@google.com"
var accountPassward = "1234"
accountCity = "Bettiah"

// accountId = 2 // not allow

accountEmail = "mk@gmail.com"
accountPassward = "4321"
accountCity = "bagaha"
let accountState;

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassward, accountCity, accountState])