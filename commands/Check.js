/*CMD
  command: Check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// for all chats and channels:
// this method perform force checking without delay
// it is slowly method and spend iterations
// but not more often than once every 2 seconds
function onCanCheck(){
  Libs.MembershipChecker.check({ sample: "data" });
  Bot.sendMessage(
    "Force cheking your membership..."
  );
}

function onWaiting(time){
  Bot.sendMessage("Please wait " + time + " sec. before next checking...")
}

// we use colldow lib
// because user can press button many times
// so we can restrict this and save iterations
Libs.CooldownLib.user.watch({
  // you need name for cooldown
  name: "CheckJoiningCooldown",
  time: 15, // cooldown time in sec, you can increase it
  onStarting: onCanCheck,
  onEnding: onCanCheck,
  onWaiting: onWaiting
})
