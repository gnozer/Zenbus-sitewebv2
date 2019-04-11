---
layout: blog-article
title:  Retour sur la nouvelle App&nbsp;!
date: 2019-02-05
image: couv.jpg
categories: [technical, news]
tags: nouvelle app design workflow optimisation
author: romain
lang: fr
---

L’application Zenbus a été mise à jour&nbsp;! Quoi de mieux qu’un petit article de blog pour vous faire part des dernières nouveautés ?

### Un peu de contexte
Nous sommes en décembre 2018. Depuis quelque temps, des retours étranges nous parviennent des utilisateurs iOs&nbsp;: le temps de chargement est immensément long, impossible pour la plupart de consulter leur réseau. Après un diagnostic poussé, il s’avère que la base de données que nous utilisions est obsolète. Diantre&nbsp;! Malgré une roadmap chargée, il nous faut résoudre cet épineux problème au plus vite, de peur que notre app ne devienne totalement inutilisable.

### Et si on en profitait un peu&nbsp;?
L’application voyageur Zenbus est la vitrine de notre écosystème&nbsp;: elle est gratuite, visible et téléchargeable par tous, et montre de façon simple notre savoir-faire&nbsp;; bref, elle est fondamentale. Cependant, comme Zenbus ne se limite pas à sa seule application, nous n’avions pas récemment consacré de temps à sa mise à jour (pour la partie native). Conséquence directe&nbsp;: nous avions des retours utilisateurs que nous n’avions pas eu le temps de prendre en compte et l’app vieillissait. L’occasion est trop belle, c’est le moment d’intégrer ces quelques modifications à la mise à jour de décembre&nbsp;!
C’est parti pour un petit tour d’horizon des nouvelles fonctionnalités.

### L’OPTIMISATION
#### 1 / Le chargement
Il est à l’origine de tous nos problèmes. Attention, petite parenthèse technique&nbsp;! Fiers de nos développements hybrides (web + natif), nous avions fait le choix d’une base de données commune à Android et iOS. À cette époque, seuls deux choix étaient disponibles (indexedDB et websql) et une seule gérait les deux OS. Quelle ne fut pas notre surprise de constater quelque temps après que la base de données choisie, la seconde, n’était plus maintenue par iOS et que de surcroît, ils autorisaient dorénavant la première. Conséquence directe&nbsp;? Vos données que nous vous affichons sur la carte étaient re-téléchargées à chaque connexion, engendrant des temps de chargement rédhibitoires à l’ouverture de l’app.

#### 2 / Vous avez dit favoris&nbsp;?
Comme dit Denis Brogniart&nbsp;: ah&nbsp;! Effectivement, beaucoup d’entre vous ont remonté la perte de leurs favoris. L’explication est à la fois malheureuse et simple&nbsp;: la base de données obsolète a nécessité une refonte complète, faisant ainsi disparaître toutes les données de favoris sauvegardées. Rassurez-vous cependant, cette opération était exceptionnelle et vous conserverez vos favoris aux prochaines mises à jour.

#### 3 / Fichtre, je suis sur Android et je ne peux pas quitter l’application&nbsp;!
En fait, "quitter l'application" n'a jamais été proposé dans Zenbus, pour la bonne raison qu'à l'instar de la plupart des apps, Zenbus devient totalement inactive une fois qu'elle est en arrière-plan. En revanche, nous avons bien désactivé la touche "retour arrière" afin que les comportements de Zenbus sur iPhone et Android soient similaires. Peut-être que nous rétablirons cette fonction dans la prochaine version, n'hésitez pas à nous donner votre avis&nbsp;!
**EDIT: La fonction "retour en arrière" a été remise en place tout dernièrement à la suite des demandes des utilisateurs.**

### LES FONCTIONNALITÉS 
#### 1 / Le sélecteur de réseau
Qui dit multiplication du nombre de réseaux (et de leurs topologies&nbsp;: un scolaire n’est pas pareil qu’un urbain), dit grooooosse liste à gérer&nbsp;; et dans cette liste, il arrive même qu’une ville possède plusieurs réseaux (pour des raisons que nous vous épargnerons ici). Qu’il est loin le temps de la première expérimentation Zenbus et des quelques réseaux qui ne nécessitaient pas un tri préalable&nbsp;!
Désormais, vous pouvez visualiser facilement la distance d’un réseau par rapport à votre position, en chercher un dans la barre de recherche (qui permet aussi d’entrer un réseau privé) ou consulter les réseaux récents dans lesquels vous étiez.

![Tous les réseaux disponibles à gauche, les récents visités à droite](/assets/img/blog/network_selector.png)
*Tous les réseaux disponibles à gauche, les récents visités à droite*
{: style="font-size: 14px; text-align: center; width: 100%"}

#### 2 / La recherche
![La recherche active à gauche, le menu arrêts au centre et le menu ligne à droite](/assets/img/blog/search.png)
*La recherche active à gauche, le menu arrêts au centre et le menu ligne à droite*
{: style="font-size: 14px; text-align: center; width: 100%"}

Demandée, souhaitée, voulue, réclamée, désirée… Elle est là. Sur la carte, dans les menus arrêts et lignes. Rapide et précise, elle vous propose en premier lieu les dix arrêts les plus proches de vous, avant de vous laisser chercher l’objet de votre désir (oui, tout ça, au moins).

#### 3 / Le menu contextuel devient le switch lignes / arrêts&nbsp;!
![La vue lignes à gauche, la vue arrêts à droite](/assets/img/blog/switch.png)
*La vue lignes à gauche, la vue arrêts à droite*
{: style="font-size: 14px; text-align: center; width: 100%"}

Les utilisateurs les plus assidus l’auront peut-être remarqué, la carte ne se pare plus de son menu contextuel (la zone d’informations / navigation un peu floue que l’on trouvait par défaut sur la carte), qui rassemblait beaucoup de données à la fois et qui était difficilement utilisable. À la place, nous avons décidé de simplement procéder à une double vue&nbsp;: celle par arrêt et celle par ligne. Pour tout ce qui concerne les éléments contextuels à proprement parler, ils ont été intégrés à la nouvelle façon de naviguer dans la carte, grâce au “triple menu” (ceci est un teasing pour la suite).

### UN PEU DE DESIGN
#### 1 / Le triple menu
![Les 3 vues possibles (ici, la ligne 26 de Nantes)](/assets/img/blog/teaser.png)
*Les 3 vues possibles (ici, la ligne 26 de Nantes)*
{: style="font-size: 14px; text-align: center; width: 100%"}

Les informations qui concernaient la carte dans l’ancienne version n’interagissaient que très peu avec celle-ci. Qui plus est, la zone contenant les informations en question manquait d’interactivité (problème lié en partie aux contraintes web de l’époque). Désormais, vous trouverez trois vues différentes avec lesquelles vous pouvez jouer d’un simple geste du pouce&nbsp;:
* Vue 1&nbsp;: seul le nom de l’arrêt ou de la ligne est affiché (avec la possibilité de mettre en favori) et la carte est “focus” sur ce qui vous intéresse. Elle n’exclut cependant pas les autres lignes du réseau, en grisé.
* Vue 2&nbsp;: La carte et les informations se partagent l’écran. Seule la ou les lignes (dans le cas d’un arrêt multilignes) concernées sont affichées sur la carte.
* Vue 3&nbsp;: La carte a disparu au profit d’informations plus conséquentes&nbsp;: dans le cas d’un véhicule, vous verrez plus d’arrêts desservis, tandis que dans le cas d’un arrêt, vous verrez les prochains passages.

Cette zone d’informations est centrale dans l’application. Elle a bénéficié d’un léger lifting pour plus de lisibilité et d’un déplacement de certains éléments (tels que le bouton “changer de direction” ou l’ajout aux favoris)

#### 2 / Les icônes de carte
La carte en elle-même n’a pas subi beaucoup de changements si ce n’est l’interaction plus poussée avec les informations correspondantes. Nous avons surtout remplacé l’iconographie des arrêts pour la faire correspondre avec la version pur web et ainsi éviter les zooms hasardeux. Les arrêts n’ont plus cette fâcheuse tendance à avoir des tailles aléatoires.
Les lignes, quant à elles, ont été grossies lorsqu’elles sont sélectionnées. Vous pouvez aussi distinguer, pour les plus coriaces d’entre vous, un trajet aller d’un trajet retour quand celui-ci n’est pas strictement le même.

#### 3 / Les messages
Ah, les messages&nbsp;! Superbe invention qui permet notamment à votre opérateur de transport de vous communiquer des informations. Mais tous les opérateurs ne communiquent pas à la même fréquence, et il arrivait que la pile de nouveaux messages soit conséquente. Seule solution&nbsp;: les passer, un à un… Nous avons donc rendu possible la vision directe de tous les messages dans l’onglet prévu à cet effet (et sobrement intitulé “messages”), ainsi que le nombre de ces messages, ceci grâce à une notification discrète sur l'icône de menu.

### ET LA SUITE…	
… me direz-vous&nbsp;? Eh bien, notre équipe technique et ses cerveaux planchent sur une toute nouvelle architecture (ce n’est pas nouveau, mais il est bon de le préciser). Ce changement de paradigme entraînera des modifications profondes dans notre façon d’appréhender la donnée et de la restituer&nbsp;; la prochaine grosse mise à jour, si elle n’est pas encore d’actualité, sera conséquente à bien des égards. Restez connectés&nbsp;!