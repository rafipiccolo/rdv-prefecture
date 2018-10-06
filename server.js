var moment = require('moment');
var request = require('request');
var exec = require('child_process').execFile;
var jar = request.jar();

var url = 'http://www.seine-saint-denis.gouv.fr/booking/create/2616/0';
var wait = 5;

function isRdvDisponible(callback) {
    request({
        url: url,
        method: 'post',
        form: {
            condition: 'on',
            nextButton: 'Effectuer une demande de rendez-vous',
        },
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
            'Referer': 'http://www.seine-saint-denis.gouv.fr/booking/create/2616/0'
        },
        jar: jar
    }, function(err, response, body) {

        // gère les erreurs possibles
        if (err) return callback('erreur grave :) '+err.code+' '+err.message);
        if (response.statusCode != 200) return callback('Le site est planté : code '+response.statusCode);
        
        // analyse la page obtenue
        body = body.toLowerCase();
        var nordv = body.indexOf('plus de plage horaire') != -1;
        var formulairevisible = body.indexOf('nextButton') != -1;
        var plante = body.indexOf('site indisponible') != -1 || body.indexOf('maintenance') != -1;

        if (plante) return callback('Le site est en maintenance');
        else if (nordv) return callback('pas de rdv disponible');
        else return callback('RDV disponible !!!', 1);
    });
}

function startWatch() {
    var start = new Date();
    isRdvDisponible(function(message, ok) {
        var end = new Date();

        // on affiche le resultat
        console.log(moment().format('YYYY-MM-DD HH:mm:ss')+' '+(String(end-start).padStart(6, ' '))+'ms '+message);

        // si un rdv est disponible :
        if (ok) exec('/usr/bin/say', ['rdv disponible'], function() {});

        // on attend un peu et on relance le programme
        setTimeout(startWatch, wait * 1000)
    });
}

startWatch();
