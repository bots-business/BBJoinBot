/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⚙️ System
  answer: 
  keyboard: 
  aliases: 
CMD*/

// common function. It can be used in any command
// because it is declared in before All command "@"
function getNeedJoinMessage(){
  const notJoinedChats = Libs.MembershipChecker.getNotJoinedChats();
  if(notJoinedChats==""){
    return "You can use /bonus command"
  }

  return (
    "You need to join: " + notJoinedChats +
    "\n\nYou *can not use* /bonus command before this!"
  )
}

// we want skip "Check" and "Soft check"
// because we have checking in "Check" already
// and in "Soft check" - we don't need handle for debug
const skipCommands = ["Check", "Soft check", "/setup"]

// For automatic checking before all commands!
// with checking delay from admin panel
// This method allow use quickly method isMember()
//
// handle() spend iterations
// but you can reduce it via delay:
//    increase delay in admin panel

if(!skipCommands.includes(message)){
  Libs.MembershipChecker.handle();
}
