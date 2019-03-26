	Mousetrap.bind('ctrl+y', function(e) {
        var win = window.open('https://www.youtube.com/user/anil45s', '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
});
	Mousetrap.bind('ctrl+m', function(e) {
        var win = window.open('https://www.instagram.com/anilsolankar0102/', '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
});
	Mousetrap.bind('ctrl+l', function(e) {
        var win = window.open('https://www.linkedin.com/in/anil-s-2396b1109/', '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
});
Mousetrap.bind('ctrl+q', function(e) {
 if (confirm("Do You Want To Close This Window?")) {
    close();
  }
  

 
});

Mousetrap.bind('ctrl+b', function(e) {

  if($('.hide').hasClass('bar')) {
			$('.trap').hide();
		}
		else {
			$('.trap').show();
		}
		$('.top').toggleClass('slide-up');
		$('.bottom').toggleClass('slide-down');
		

});
