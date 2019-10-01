# intranet-ecole-alternative
Site intranet open-source pour une école alternative

## Pré-requis:

 - Installer  nodeJS version superieur à 12 sur https://nodejs.org/en/ 
 - Installer visual studio code https://code.visualstudio.com/download 

## Structure du project 

 - Root:
    - **UI/**: Contient les solutions de mockup et de template generic
        - **Mockup_CoreUI/**: Contient un mockup du site en CoreUI (html seulement)
        - **GetCoreUITemple.bat**: Script pour allez chercher le full template de coreUI

### Comment generer le full template.

    1 - Ouvrir un terminal dans visual studio code
    2 - Allez dans le répertoire de UI
    3 - Exécuter le fichier GetCoreUITemple.bat

### Comment voir le mockup avec CoreUI

    1 - Allez dans le répertoire du mockup UI\Mockup_CoreUI
    2 - Faire npm install (seulement pour la prenmière fois)
    3 - Faire npm run serve 
    4 - Le mockup du site va demarrer sur localhost:3005
