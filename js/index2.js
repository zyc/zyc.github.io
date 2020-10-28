$(() => {
    const e = Global.getEventAlias();

    $.getJSON('data/menu-' + e + '.json')
        .done(data => {
            const template = Handlebars.compile($('#menu-template').html());
            $('#menu').html(template(data));

            Global.applyStyle();
        })
        .fail(() => location.href = Global.buildFailUrl());

    // $('.buttons').prepend('<button /><button />');

    $('#order').on('click', function () {
        location.href = Global.buildUrl('order');
    });

    $('#contact').on('click', function () {
        window.open(Global.buildUrl('contact'), '_blank');
    });

    console.log('opaaa2');
    // const shareButton = document.querySelector('.share-btn');

    register()
});

function register() {
    $('#share').one('click', event => {
        // shareButton.addEventListener('click', event => {
        if (navigator.share) {
            navigator.share({
                title: 'WebShare API Demo',
                url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(err => {
                console.log(err);
            });

            register();
        } else {
            console.error('ops');
        }
    });
}