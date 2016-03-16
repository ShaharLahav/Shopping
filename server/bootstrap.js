if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Lists.find().count() === 0) {
      
 
      var lists = [
        {
          name: 'Eden'
        },
        {
          name: 'Mega'
        }
      ];
 
      for (var i = 0; i < lists.length; i++) {
        // var message = Messages.findOne({ chatId: { $exists: false } });
        var list = lists[i];
        // chat.lastMessage = message;
        var listID = Lists.insert(list);
        // Messages.update(message._id, { $set: { chatId: chatId } })
      }
    }
  });
}