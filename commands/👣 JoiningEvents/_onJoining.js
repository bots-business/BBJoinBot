/*CMD
  command: /onJoining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👣 JoiningEvents
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){
  Bot.sendMessage("you can not run this command!")
  return
}

Bot.sendMessage( "Thank you for joining to: " + options.chat_id );
