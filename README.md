# TP #1 : Produire une application Web avec des composants `React` modulaires et intégrant des effets d’animation.
## Travail d'équipe permis (mais pas plus de 2 personnes par équipe).

>Si vous travaillez en équipe, les deux personnes doivent accepter les fichiers du TP sur *GitHub Classroom*.

>Divisez le travail dans l'équipe de façon à simplifier/faciliter ces fusions (expérimentez, c'est le moment idéal !)

## Objectif/exigences généraux
* Vous créez une application `React` monopage pour gérer une liste de **tâches à compléter**. Votre application doit être modulaire, adaptative (*mobile first*), visuellement attrayante et comportant des effets d'animation pertinents à l'interactivité de l'IU

* Pour ce TP, vous gérez la *sauvegarde* des tâches *côté client* à l'aide de l'API `Storage` de JavaScript

* Utilisez `Sass` pour produire votre code `CSS` : un fichier par composant SVP ! 

* Préférez le code *déclaratif* (ou *fonctionnel*, ou *expressif*) au lieu du code *impératif* partout où c'est possible

## Étapes à suivre
1. Clonez le dépôt sur votre machine locale

2. Un gabarit Vite est déjà fourni : installez les modules de base de l'appli (ou laissez le temps à `Codespaces` de finir l'installation :wink:)

3. Installez d'autres *modules* au fur et à mesure qu'ils sont requis dans votre solution

4. Commencez par produire la structure, le contenu et le format des composants statiques de l'interface utilisateur ; l'interface minimale et l'interactivité sont illustrées dans la démo jointe au bas de ces instructions (image `gif` animée), cependant la conception graphique et la mise en page doivent être différents de cette démo ; n'oubliez pas de personnaliser les `title`, `meta/description`, et `favicon` de votre page Web

5. Utilisez des composants IU d’une librairie externe au besoin (par exemple `MUI`, comme dans la démo)

6. Produisez les fonctionnalités requises par l'interactivité de votre application : 
    1. Afficher la liste des tâches à partir de `localStorage` 
       (pour chaque tâche, vous voulez gérer les caractéristiques suivantes : *identifiant*, *texte*, *date et heure d'ajout*, *état* ou *statut* de la tâche : est-elle complétée ou encore active ?)

       (suggestion 1 : utilisez un tableau JavaScript pour stocker la liste des tâches)
       
       (suggestion 2 : vous avez besoin de générer des identifiants uniques pour chaque tâche, c'est assez facile, mais pas trivial, faites une recherche ou venez en classe pour un exemple)
    2. Ajouter une tâche
    3. Supprimer une tâche
    4. Basculer l’état d’une tâche (complétée/non-complétée) 
    5. Filtrer des tâches (toutes, complétées, actives)
    6. Afficher le nombre de tâches actives (c'est à dire *non-complétées*)
    7. Supprimer toutes les tâches complétées
    8. Sauvegarder les tâches dans `localStorage`

7. Produisez au minimum trois animations ou effets de transition de l'interactivité d'interface utilisateur : 
    1. Lors de l'affichage d'une nouvelle tâche
    2. Lors du retrait d'une tâche 
    3. Lors du basculement de l'état d'une tâche

8. Synchronisez votre solution complétée avec le dépôt GitHub qui vous a été assigné lorsque vous avez accepté le travail (c'est le dépôt distant (*remote*) déjà défini dans votre projet)

>ATTENTION : ne faites aucune synchronisation après la date limite de remise à moins que vous ne voulez en payer le prix (5% par jour de retard)

:bangbang: :warning: :x: NON, NON, et NON : pour ce travail, **NE DÉPLOYEZ PAS** votre solution sur `GitHub Pages` (sinon, risque de plagiat) :bangbang: :warning: :x:

### Gardez une copie personnelle de votre travail : le dépôt de remise sur `582-4PA` pourrait être supprimé une fois la correction complétée et les notes publiées.

---

![Démo de la solution modèle](https://github.com/582-4PA/h24-eval-ressources/blob/main/h24-tp1-demo-solution.gif)
