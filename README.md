# rdv-prefecture
Permet de surveiller le site de la prefecture afin de savoir quand un rdv aparait.

## Pour installer :
    
    - installez nodejs
    
    - récupérer le projet
        via git : 
        $ git clone https://github.com/rafipiccolo/rdv-prefecture.git rdv-prefecture
    
        ou directement en téléchargeant le zip :
        https://github.com/rafipiccolo/rdv-prefecture/archive/master.zip
        decompresser le zip.

    - aller dans le dossier du projet avec le terminal et lancer la commande :
        $ npm install

## Pour lancer le projet :
    $ node server.js

## fonctionnement
    Par default il se connecte :
    - sur http://www.seine-saint-denis.gouv.fr/booking/create/2616/0
    - toutes les 5 secondes.
    - et il utilise la commande say du pc pour dire qu'il y a un rdv de disponible

    ps: la comande say ne marche que sur mac

    La durée et l'action effectuée peuvent facilement être modifiée directement dans le fichier server.js

Bon courage à tous les étrangers !
