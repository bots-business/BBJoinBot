/*CMD
  command: /onNeedJoining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard(
  // button check will run command /check
  "Check",
  // message
  "You still need to join: " + options.chat_id +
  "\n\nYou *can not use* /bonus command before this!"
)
