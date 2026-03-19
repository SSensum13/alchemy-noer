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

function getReagentsAsIngameText(categoryNames) {
    var textoutput = "";
    categoryNames.forEach((category) => {
        var reagents = getReagentsByCategory(category)
        textoutput += `# ${category}\n`;
        reagents.forEach((r) => {
            textoutput += `**${r.name}**: ${r.desc}\n`;
            if(r.recipe !== undefined && r.recipe !== null) {
                textoutput += `Рецепт: `;
                var firstReagent = true;
                r.recipe.forEach((recipe_part, recipe_rkey) => {
                    if(!firstReagent) {
                        textoutput += ` + `;
                    }
                    textoutput += `${recipe_part} ${reagentsMap.get(recipe_rkey).name}`;
                    firstReagent = false;
                });
                textoutput += `\n`;
            }
        });
    });
    return textoutput;
}