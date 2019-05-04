'use strict';

// Constructor
var DataSwitcher = function() {
    var targets = $('[data-target]');
    var contents = $('[data-content]');

    function init() {
        targets.first().addClass('-active');
        contents.first().addClass('-active');
    }

    if (targets.length > 0) {
        targets.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var targettedContent = $this.data('target');

            targets.removeClass('-active');
            contents.removeClass('-active');

            $('[data-target="'+ targettedContent +'"]').addClass('-active');
            contents.filter(function() {
                return $(this).data('content') === targettedContent;
            }).addClass('-active');
        });

        init();
    }
};

module.exports = DataSwitcher;
