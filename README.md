# earlygame-frontend

League of Legends champions data visualization.

This project makes use of HTML, Vanilla JavaScript and JQuery.

## WIDGET

## Featured Champions

The featured champion script can be found in either the `widget/large` or `widget/mini` directories from the root.

It returns four (4) featured champions from the list of all champions available.

1. The featured champions script passes some parameters to the api url.
   The API url: `https://lolbe2.azurewebsites.net/api/v1/featuredchampions?champ1=1&champ2=2&champ3=3&champ4=4`

2. The parameters passed represent keys for respective champions.
   The parameters can either be manually updated or randomly picked from the reference script `loadChampionKeys()` exported from the `./championKeys` script file.
   Path to file -> /widget/large/championKeys.js and /widget/mini/championKeys.js

## Best / Top Champions Champions

The best/top champions script can be found in either the `widget/large` or `widget/mini` directories from the root.

It returns the best/top three (3) champions for each lane: Top, Jungle, Midlane, Bot/ADC, Support. w
