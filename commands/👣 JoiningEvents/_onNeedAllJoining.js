/*CMD
  command: /onNeedAllJoining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👣 JoiningEvents
  answer: 
  keyboard: 
  aliases: 
CMD*/

const chats = Libs.MembershipChecker.getChats();

Bot.sendMessage("*Need to join to All!*" + "\n\n" + chats);
