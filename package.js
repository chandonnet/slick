// package metadata file for Meteor.js

Package.describe({
    name: 'fchandonnet:slick',  // http://atmospherejs.com/fchandonnet/slick
    summary: 'Slick js skeleton wrapper for meteor',
    version: '1.7.1',
    git: 'https://github.com/chandonnet/slick.git'
});


Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

    api.addFiles([
        'slick/slick.js',
        'slick/slick.css'
    ], 'client');

    api.use('jquery', 'client');
    api.imply('jquery', 'client');
});
