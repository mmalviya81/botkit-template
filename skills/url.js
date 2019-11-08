//
// Simplest use of Botkit's conversation system
//
module.exports = function (controller) {

    controller.hears([/^url$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('This is a Botkit conversation sample.');

            convo.ask('Which tool URLs you are looking for?', function (response, convo) {
                convo.say("Here are the URL '" + response.text + "' https://www.google.com/");
                convo.next();
            });
        });

    });
};
