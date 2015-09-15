var urlList = {};

var myDataRef = new Firebase('https://boiling-torch-464.firebaseio.com/');
$('#tagInput').keypress(function(e) {
    if (e.keyCode == 13) {
        var url = $('#urlInput').val();
        var text = $('#tagInput').val();
        myDataRef.push({
            url: url,
            text: text
        });
        location.reload();
        $('#tagInput').val('');
    }
});

myDataRef.on('child_added', function(snapshot) {
    var bookmark = snapshot.val();
    displayBookmarks(bookmark.url, bookmark.text);
});

var displayBookmarks = function(url, text) {
    $('#urlInput').focus().val('');
    var x = "";
    x = x + '<div><br><div>#' + text + '</div>';
    x = x + '<div><a href="http://www.' + url + '" target="_blank">' + url + '</a></div></div>';
    $("#bookmarkDiv").append(x);
}