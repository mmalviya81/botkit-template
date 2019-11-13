//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        
         var text = "We are currently have Url for,";
        text +="\n- " +bot.enrichCommand(message, ".CCW") + " | "+	bot.enrichCommand(message, ".CDT SR") + "|"+	bot.enrichCommand(message, ".CPR");
        text += "\n- " +bot.enrichCommand(message, ".CSONE")	+ "|"+bot.enrichCommand(message, ".Dashboard")+ "|"+	bot.enrichCommand(message, ".DM Info");
        text +="\n- " +bot.enrichCommand(message, ".E2 Open CSR Case")+ "|"+	bot.enrichCommand(message, ".E2Net")+ "|"+	bot.enrichCommand(message, ".E2Open");
        text +="\n- " +bot.enrichCommand(message, ".Eco Matrix")+ "|"+	bot.enrichCommand(message, ".EEM")+ "|"+	bot.enrichCommand(message, ".GOM Wiki Page");
        text +="\n- " +bot.enrichCommand(message, ".Histroy of Cntrct History" )	+ "|"+bot.enrichCommand(message, ".IP")	+ "|"+bot.enrichCommand(message, ".Legacy Sort");
        text +="\n- " +bot.enrichCommand(message, ".MuleSoft")+ "|"+	bot.enrichCommand(message, ".Umpire")+ "|"+	bot.enrichCommand(message, ".OFS - Vise FE direct link:" );
        text +="\n- " +bot.enrichCommand(message, ".OPS Report")+ "|"+	bot.enrichCommand(message, ".Oracle EBS")+ "|"+	bot.enrichCommand(message, ".OSC - FSMS");
        text +="\n- " +bot.enrichCommand(message, ".Pega ")+ "|"+	bot.enrichCommand(message, ".Pega Location form")+ "|"+		bot.enrichCommand(message, ".PRR");
        text +="\n- " +bot.enrichCommand(message, ".PSD-ESRI")+ "|"+	bot.enrichCommand(message, ".SAM")+ "|"+	bot.enrichCommand(message, ".Test RMA creation");
        text +="\n- " +bot.enrichCommand(message, ".Tracer")	+ "|"+bot.enrichCommand(message, ".Xelus")+ "|";
       
        //var text = "Here are my skills:";
        //text += "\n- " + bot.appendMention(message, "color") + ": ask to pick a random color";
        //text += "\n- " + bot.appendMention(message, "loop") + ": example of a menu that loops until explicitly stopped";
        //text += "\n- " + bot.appendMention(message, "menu") + ": implement a menu via a conversation";
        //text += "\n- " + bot.appendMention(message, "quiz") + ": multi-threaded conversation with timeout";
        //text += "\n- " + bot.appendMention(message, "restricted") + ": let a user pick a color among a set of options";
        //text += "\n- " + bot.appendMention(message, "storage") + ": store picked color as a user preference";
        //text += "\n- " + bot.appendMention(message, "threads") + ": branch to another thread";
        //text += "\n- " + bot.appendMention(message, "variables") + ": enriched user-context among threads";
        //text += "\n\nI also understand:";
        //text += "\n- " + bot.appendMention(message, "about") + ": shows metadata about myself";
        //text += "\n- " + bot.appendMention(message, "help") + ": spreads the word about my skills";
        //text += "\n- " + bot.appendMention(message, "show [skill]") + ": display the code of the specified skill";
        bot.reply(message, text);
    });
}
