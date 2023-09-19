/*CMD
  command: /bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

const isMember = Libs.MembershipChecker.isMember();

if(!isMember){
  Bot.sendMessage("You can not use /bonus command before joining all chats and channels!");
  return
}


// can use /bonus command
Bot.sendMessage("You can use /bonus command now!");
Bot.sendMessage("You have welcome bonus: 10 Gold!");

