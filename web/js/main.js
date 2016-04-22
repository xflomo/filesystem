// Rechtsklick Menü

$('body')
.delegate('[contextmenu]', 'contextmenu', function (e) {
    var contextmenu  = $(this).attr('contextmenu');
    var $contextmenu = $('#' + contextmenu);
    
    if ($contextmenu.length == 0) {
        return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    
    $contextmenu.show();
    $contextmenu.css({
        'top' : (e.pageY - 18) + 'px',
        'left': e.pageX + 'px'
    });
    
    return false;
})



.on({
    'keydown' : function (e) {
        if (e.which == 27) {
            $('menu[type=context]').hide();
        }
    },
    
    'click' : function () {
        $('menu[type=context]').hide();
    }
});




Prism.plugins.NormalizeWhitespace.setDefaults({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
});

Prism.highlightAll();