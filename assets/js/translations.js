window.localization = window.localization || {},
function(n) {
    localization.translate = {

      menu: function() {
        $('#aboutus-menu').text(i18n.__('About'));
        $('#whoweare-menu').text(i18n.__('Our Clients'));
        $('#ourwork-menu').text(i18n.__('Our Work'));
        $('#howwework-menu').text(i18n.__('How we work'));

      },

      welcome: function() {
        $('#welcome .inner p').text(i18n.__('Hopefully this helps someone to get up to speed with electron.'));
        $('#learn-more-button').text(i18n.__('Learn more'));
      },

      init: function() {
        this.welcome();
        this.menu();
      }
    };

    n(function() {
        localization.translate.init();
    })

}(jQuery);
