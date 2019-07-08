---
layout: changelog
date: 16/05/2018
---

C'est notre deuxième grande version publique, et nous l'avons _blindée_ de nouveautés !

Fer de lance de cette mouture, __le tableau de bord__ ! Au-dessus des stalactites, une zone vous donne la fiche d'identité du fichier ou répertoire actif. Dessus, vous pouvez __renommer__, __commenter__ ou __taguer__ l'élement. À l'avenir, ça va devenir central pour Archifiltre : soyez prêt.e.s !

Ce fut très demandé, __l'application est désormais accessible hors ligne__ ! Du moment que vous y avez accédé une fois en étant connecté.e à Internet, revenez à la même adresse sans avoir Internet, et elle se chargera quand même.

Plus de mauvaises surprises : si vous essayez de quitter la page, une __fenêtre de confirmation__ vous retiendra, juste au cas où !

Un regret ? Vous pouvez maintenant revenir sur vos pas, soit avec les boutons fléchés, soit avec le __raccourci Ctrl+Z__ !


En vrac, quelques __améliorations de l'interface__ :

- Pour être plus à l'aise avec le tableau de bord, cliquez une fois sur un rectangle pour le verrouiller. Pour zoomer dessus, il faudra désormais double-cliquer. Cliquez en dehors des stalactites pour déverrouiller.
- Le retour à la racine est maintenant un bouton plutôt que du simple texte.
- Une chouette animation vous distrait pendant les longs imports !
- On nous a dit que le nom des fichiers et répertoires directement sur les rectangles était perturbant : c'est fini !

Enfin, ça se voit moins à l'extérieur, mais il y a __de très gros changements sous le capot__ ! Pour les curieux, on a réécrit un module fait avec D3.js, pour que notre application fonctionne entièrement avec React ; d'autre part, comme framework CSS, on est passés de Material Design Lite à Foundation. Il se peut que les performances de l'application soient un poil moins bonnes qu'avant sur certains gros répertoires, mais pas d'inquiétude, on y travaille d'arrache-pied !

