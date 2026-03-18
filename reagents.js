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
    return `<a href="./reagent?${reagent.key}">
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
        key: "_aurum", name: "Aurum", color: "#d9ff32", categories: ["basic"],
        desc: `Получается из цветов Кальты (Calta petal).
        Для того, чтобы дробить Кальту, нужен опытный навык алхимии.`,
    },
    {
        key: "_rubrum", name: "Rubrum", color: "#df4646", categories: ["basic"],
        desc: `Добывается из цветка Паравеус (Paraverus petal)`,
    },
    {
        key: "_viridis", name: "Viridis", color: "#80d149", categories: ["basic"],
        desc: `Добывается из цветка листьев Уртики (Urtica leaf)`,
    },
    {
        key: "_berry_poison", name: "Berry Poison", color: "#4afff6", categories: ["basic", "poison"],
        desc: `Ягодный Яд (Berry Poison) - вещество, получаемое из сока ядовитых ягод. 
        Чтобы понять, что ягоды ядовитые, нужно их надкусить, и если чувствуется Berry Juice - это яд. 
        Ягоды этого же цвета всегда будут ядовитыми в этом раунде.
        <br><br>
        Также пиявки по идеи должны давать это вещество.`,
    },
    {
        key: "_purpura", name: "Purpura", color: "#bf55fc", categories: ["basic"],
        desc: `Добывается из фиолетового цветка Кардуус (Carduus petal)`,
    },
    {
        key: "_vermis", name: "Vermis", color: "#63dd45", categories: ["basic"],
        desc: `Добывается из зелёной травы растения Абсинтиум (Absinthium leaf).`,
    },

    {
        key: "_umbra", name: "Umbra", color: "#9040af", categories: ["basic"],
        desc: `Добывается из зелёной травы растения Абсинтиум (Absinthium leaf).`,
    },
];

var reagentsMap = new Map();
reagentsArr.forEach((r) => {
    reagentsMap.set(r.key, r);
});

