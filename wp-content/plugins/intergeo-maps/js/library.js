
if (! intergeo) {
     var intergeo = {media: {view: {settings: {}}}};
}
(function (a) {
    if (!intergeo.media) {
        intergeo.media = {view: {settings: {}}};
    }
    intergeo.media.view.Map = a.view.MediaFrame.extend({
        initialize: function () {
            _.defaults(intergeo.media.view.settings, {tabUrl: a.view.settings.tabUrl});
            _.defaults(this.options, {map: false, copy: false, state: 'iframe:intergeo_map'});
            a.view.MediaFrame.prototype.initialize.apply(this, arguments);
            a.view.settings.tabUrl = intergeo.media.view.settings.tabUrl;
            if (this.options.map) {
                a.view.settings.tabUrl += '&map=' + this.options.map;
            } else {
                if (this.options.copy) {
                    a.view.settings.tabUrl += '&copy=' + this.options.copy;
                }
            }
            this.createIframeStates();
        }
    });
})(wp.media);
(function (b, a) {
    function c() {
        b('.intergeo_lbrr_map').height(b('.intergeo_lbrr_map').width() * 10 / 16);
        b('.intergeo_lbrr_map').each(function () {
            var d = b(this);
            d.height(d.width() * 10 / 16);
        });
    }

    b(document).ready(function () {
        c();
        b(window).resize(c);
        b('.intergeo_lbrr_code').focus(function () {
            var d = b(this);
            d.select().mouseup(function () {
                d.unbind('mouseup');
                return false;
            });
        });
        b('.intergeo_lbrr_add_new').click(function () {
            var d = new a({map: false});
            d.open();
            return false;
        });
        b('.intergeo_lbrr_item_edit').click(function () {
            var d = new a({map: b(this).data('map')});
            d.open();
            return false;
        });
        b('.intergeo_lbrr_item_copy').click(function () {
            var d = new a({copy: b(this).data('map')});
            d.open();
            return false;
        });
    });
})(jQuery, intergeo.media.view.Map);