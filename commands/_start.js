/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/


Bot.sendKeyboard(
  // button check will run command /check
  "Check, \nSoft check",
  // message
  "Hello!\n" + getNeedJoinMessage()
)
