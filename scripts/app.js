var myDataRef = new Firebase('https://chat-app308.firebaseio.com/');

myDataRef.child('user/authData').on('value', function(snapshot) {
  //console.log(snapshot..val())
  const user = snapshot.val();
});

function displayUser(displayName) {
  $('#username').text(user.displayName)
}

//  RECIEVE INPUT
$('#messageInput').keypress(function (e) {
  if (e.keyCode == 13) {
    var text = $('#messageInput').val();
    myDataRef.child('user/messages').push({text: text});
    $('#messageInput').val('');
  }
});

// GET DATA FROM FB
myDataRef.child('user/messages').on('child_added', function(snapshot) {
  var message = snapshot.val()

  myDataRef.child('user/authData').on('value', function(snapshot){
  auth = snapshot.val();
  })
  displayChatMessage(auth.displayName, auth.profileImageURL, message.text);

});

//  DISPLAY ONGOING DATA
function displayChatMessage(displayName, img, text) {
  $('<div/>').html('<img src=' +img+ '/><span>' +text+ '</span>').appendTo($('#messagesDiv'))
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  // $('<div/>').text(displayName + ': '+ text).appendTo($('#messagesDiv'))
};
