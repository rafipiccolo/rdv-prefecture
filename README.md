# rdv-prefecture
Permet de surveiller le site de la prefecture afin de savoir quand un rdv aparait.

## Pour installer :
    
    $ git clone https://github.com/rafipiccolo/rdv-prefecture.git rdv-prefecture
    $ cd rdv-prefecture
    $ npm install

## Pour lancer :
    $ node server.js

## réglages
Par default il se connecte au site toutes les 5 secondes.
Et il utilise la commande say du pc pour dire qu'il y a un rdv de disponible

ps: la comande say ne marche que sur mac

La durée et l'action effectuée peuvent facilement être modifiée directement dans le fichier server.js
