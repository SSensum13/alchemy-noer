function getHtmlEntryForReagent(reagent) {
    if(reagent.recipe === undefined || reagent.recipe === null) {
        return `
        <div class="entry">
            <div class="entry-name">
                <b style="color: ${reagent.color}">${reagent.name}</b>
            </div>
            <div class="entry-desc-only">
                ${reagent.desc}
            </div>
        </div>
        `;
    } else {
        var recipeText = "";
        reagentsMap.forEach
        reagent.recipe.forEach((v, r) => {
            if(recipeText != "") {
                recipeText += " + ";
            }
            recipeText += `${v} ${getLabelForReagentKey(r)}`;
        });

        recipeText += ` = ${reagent.recipeResult} <b style="color: ${reagent.color}">${reagent.name}</b>`;

        return `
        <div class="entry">
            <div class="entry-name">
                <b style="color: ${reagent.color}">${reagent.name}</b>
            </div>
            <div class="entry-desc">
                ${reagent.desc}
            </div>
            <div class="entry-recipe">
                ${recipeText}
            </div>
        </div>
        `;
    }
}

function getLabelForReagentKey(reagentKey) {
    var reagent = reagentsMap.get(reagentKey);
    return `<a href="./reagent?r=${reagent.key}">
        <b style="color: ${reagent.color}">${reagent.name}</b>
    </a>`;
}

function getReagentsByCategory(reagentCategory) {
    return reagentsArr.filter((r) => {
        if(r.categories.find((c) => c == reagentCategory)) {
            return true;
        }
        return false;
    });
}

/*
# СПИСОК РЕАГЕНТОВ
*/

var reagentsArr = [
    /*
    {
        key: "_test", name: "Test", color: "#00ff00", categories: ["basic"],
        desc: `Example reagent`,
        recipe: new Map([
            ["AA", 1],
            ["BB", 1]
        ]),
        recipeResult: 2
    },
    */
    {
        key: "_water", name: "Water", color: "#dadada", categories: ["basic"],
        desc: `Обычная вода.`,
    },
    {
        key: "_blood", name: "Blood", color: "#8f2727", categories: ["basic"],
        desc: `Обычная кровь, которую можно заполучить с помощью шприца.`,
    },
    {
        key: "_aurum", name: "Aurum", color: "#d9ff32", categories: ["basic"],
        desc: `Получается из цветов Кальты (Calta petal).
        Для того, чтобы дробить Кальту, нужен опытный навык алхимии.`,
    },
    {
        key: "_rubrum", name: "Rubrum", color: "#df4646", categories: ["basic"],
        desc: `Добывается из красного цветка Параверус (Paraverus petal).`,
    },
    {
        key: "_viridis", name: "Viridis", color: "#80d149", categories: ["basic"],
        desc: `Добывается из цветка листьев Уртики (Urtica leaf).`,
    },
    {
        key: "_berry_poison", name: "Berry Poison", color: "#4afff6", categories: ["basic", "poison"],
        desc: `Ягодный Яд (Berry Poison) - вещество, получаемое из сока ядовитых ягод. 
        Чтобы понять, что ягоды ядовитые, нужно их надкусить, и если чувствуется Berry Juice - это яд. 
        Ягоды этого же цвета всегда будут ядовитыми в этом раунде.
        <br><br>
        Также (вроде как) можно передробить пиявок, чтобы получить это вещество.`,
    },
    {
        key: "_purpura", name: "Purpura", color: "#bf55fc", categories: ["basic"],
        desc: `Добывается из фиолетового цветка Кардуус (Carduus petal).`,
    },
    {
        key: "_vermis", name: "Vermis", color: "#63dd45", categories: ["basic"],
        desc: `Добывается из зелёной травы растения Абсинтиум (Absinthium leaf).`,
    },
    {
        key: "_umbra", name: "Umbra", color: "#9040af", categories: ["basic"],
        desc: `Добывается из Теневых Грибов.`,
    },
    {
        key: "_heal_potion", name: "Health Potion", color: "#ff1616", categories: ["support"],
        desc: `Зелье лечения.`,
        recipe: new Map([
            ["_rubrum", 1],
            ["_berry_poison", 1]
        ]),
        recipeResult: 2
    },
    {
        key: "_master_heal_potion", name: "Master Health Potion", color: "#ff3583", categories: ["support"],
        desc: `Зелье лечения высшей пробы (мастерское).`,
        recipe: new Map([
            ["_heal_potion", 1],
            ["_aurum", 1]
        ]),
        recipeResult: 1
    },
    {
        key: "_mana_potion", name: "Mana Potion", color: "#221fff", categories: ["support"],
        desc: `Зелье маны.`,
        recipe: new Map([
            ["_purpura", 1],
            ["_berry_poison", 1]
        ]),
        recipeResult: 2
    },
    {
        key: "_master_mana_potion", name: "Master Mana Potion", color: "#7d46ff", categories: ["support"],
        desc: `Зелье маны высшей пробы (мастерское).`,
        recipe: new Map([
            ["_mana_potion", 1],
            ["_aurum", 1]
        ]),
        recipeResult: 1
    },
    {
        key: "_stamina_potion", name: "Stamina Potion", color: "#2d9c01", categories: ["support"],
        desc: `Зелье маны.`,
        recipe: new Map([
            ["_viridis", 1],
            ["_berry_poison", 1]
        ]),
        recipeResult: 2
    },
    {
        key: "_master_stamina_potion", name: "Master Stamina Potion", color: "#4cbe1e", categories: ["support"],
        desc: `Зелье выносливости высшей пробы (мастерское).`,
        recipe: new Map([
            ["_stamina_potion", 1],
            ["_aurum", 1]
        ]),
        recipeResult: 1
    },
    {
        key: "_aphrodisiac", name: "Aphrodisiac", color: "#ff41f6", categories: ["misc"],
        desc: `Афродизиак - отвар действующий как средство пробуждающее возбуждение и похоть.`,
        recipe: new Map([
            ["_rubrum", 1],
            ["_aurum", 1],
            ["_water", 1],
        ]),
        recipeResult: 3
    },
    {
        key: "_purified_blood", name: "Purified Blood", color: "#64283f", categories: ["support"],
        desc: `Очищенная кровь - это отвар на основе крови, 
        который временно повышает имунитет и защищает от прогрессирования/возникнокения заболеваний.`,
        recipe: new Map([
            ["_aurum", 1],
            ["_blood", 1],
        ]),
        recipeResult: 2
    },
    {
        key: "_calta_posion", name: "Calta Poison", color: "#fffc2e", categories: ["poison", "support"],
        desc: `Яд кальты - сильная отрава, которая в небольших дозах (1-2 ед) способна лечить чуму.`,
        recipe: new Map([
            ["_aurum", 1],
            ["_berry_poison", 1],
        ]),
        recipeResult: 2
    },
];

var reagentsMap = new Map();
reagentsArr.forEach((r) => {
    reagentsMap.set(r.key, r);
});

