/*CMD
  command: Soft check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏠 Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Soft cheking your membership.\n\nIt is quickly checking but works with delay and need `Libs.MembershipChecker.handle()` method");

// It is soft quickly checking without delay
// this method don't spend iterations
// this method needs handle() method in "@" command
// for all chats and channels:
// you can use this method in any command that must be quickly
// ! but if you need accurate data
//      prefer to use check() method
let isMember = Libs.MembershipChecker.isMember();

let msg = "You are member of all channels and can use /bonus command"

if(!isMember){
  msg = getNeedJoinMessage();
}

Bot.sendMessage(msg);
