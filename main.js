import {FQCharacters} from "./scripts/fqcharacters.js";

export const TITLE = "Final Quest Core System";
export const MODULE_ID = "final-quest-core-system";
Hooks.once('init', async function () {
    console.log(`${TITLE} | App Initialisation`)
});
Hooks.once('ready', async function () {
    console.log(`${TITLE} | App Ready`)
    FQCharacters.modifyActors(game.actors)
});
Hooks.once('setup', function () {
    console.log(`${TITLE} | Module Setup`)
});

Hooks.once('i18nInit', () => {
    console.log(`${TITLE} | Initialising`);
});

Hooks.on('renderActorSheet5e', FQCharacters.renderActorSheet5e);
