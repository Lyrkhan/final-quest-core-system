export class FQCharacters {
    static modifyActors() {
        for (let specKey of Object.keys(game.system.model.Actor)) {
            console.log(specKey)
        }

    }

    static primaryAttributes = (game, actor) => `
<li class="attribute action">
    <h4 class="attribute-name box-title">${game.i18n.localize("FQBS.ActionPoints")}</h4>
    <div class="attribute-value multiple">
        <input name="system.attributes.action.value" type="text"
               value="${actor.system.attributes.action?.value}" placeholder="10"
               data-dtype="Number" data-tooltip="${game.i18n.localize('FQBS.ActionPointsCurrent')}">
        <span class="sep"> / </span>
        <input name="system.attributes.action.max" type="text"
               value="${actor.system.attributes.action?.max}" placeholder="10"
               data-dtype="Number" data-tooltip="${game.i18n.localize('FQBS.ActionPointsMax')}">
    </div>
</li>
<li class="attribute mana">
    <h4 class="attribute-name box-title">${game.i18n.localize("FQBS.Mana")}</h4>
    <div class="attribute-value multiple">
        <input name="system.attributes.mana.value" type="text"
               value="${actor.system.attributes.mana?.value}" placeholder="10"
               data-dtype="Number" data-tooltip="${game.i18n.localize('FQBS.ManaCurrent')}">
        <span class="sep"> / </span>
        <input name="system.attributes.mana.max" type="text"
               value="${actor.system.attributes.mana?.max}" placeholder="10"
               data-dtype="Number" data-tooltip="${game.i18n.localize('FQBS.ManaMax')}">
    </div>
</li>

<li class="attribute zeal">
    <h4 class="attribute-name box-title">${game.i18n.localize("FQBS.Zeal")}</h4>
    <div class="attribute-value multiple">
        <input name="system.attributes.zeal.value" type="text"
               value="${actor.system.attributes.zeal?.value}" placeholder="0"
               data-dtype="Number" data-tooltip="${game.i18n.localize('FQBS.ZealCurrent')}">
        <span class="sep"> / </span>
        <input name="system.attributes.zeal.max" type="text"
               value="${actor.system.attributes.zeal?.max}" placeholder="10"
               data-dtype="Number" data-tooltip="${game.i18n.localize('FQBS.ZealMax')}">
    </div>

    <footer class="attribute-footer">
        <input name="system.attributes.zeal.init" type="text" class="temphp"
               placeholder="Init"
               value="${actor.system.attributes.zeal?.init}" data-dtype="Number"
               data-tooltip="${game.i18n.localize('FQBS.ZealInit')}">
    </footer>
</li>
`

    static primaryAttributes2 = ``
    static renderActorSheet5e = (app, element, options) => {
        let $element = $(element);
        let $ac = $element.find('.attribute.armor');
        // Generate Tooltip On Actor Sheet Load
        $ac.replaceWith(FQCharacters.primaryAttributes(game, options));

    }
}