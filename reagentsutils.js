// SIMT = Spaces In Miltiline Text
function fixSIMT(text) {
    var lines = text.split("\n");
    var textoutput = "";
    lines.forEach((str) => {
        if(textoutput != "") {
            textoutput += "\n";
        }
        textoutput += str.trim();
    });
    return textoutput;
}

function getHtmlEntryForReagent(reagent) {
    if(reagent.recipe === undefined || reagent.recipe === null) {
        return `
        <div class="entry">
            <div class="entry-name">
                <b style="color: ${reagent.color}">${reagent.name}</b>
            </div>
            <div class="entry-desc-only">
                ${reagent.desc.replaceAll("\n", "<br>")}
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
                ${reagent.desc.replaceAll("\n", "<br>")}
            </div>
            <div class="entry-recipe">
                ${recipeText}
            </div>
        </div>
        `;
    }
}

function getLabelForReagentKey(reagentKey) {
    var reagent = safeReagentsMapGet(reagentKey);
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

function getCategoriesAsIngameText(categories) {
    var textoutput = "";
    categories.forEach((category_display_name, category_key) => {
        var reagents = getReagentsByCategory(category_key)
        textoutput += `# ${category_display_name}\n`;
        reagents.forEach((r) => {
            textoutput += `**${r.name}**: ${fixSIMT(r.desc)}\n`;
            if(r.recipe !== undefined && r.recipe !== null) {
                textoutput += `Рецепт: `;
                var firstReagent = true;
                r.recipe.forEach((recipe_part, recipe_rkey) => {
                    if(!firstReagent) {
                        textoutput += ` + `;
                    }
                    textoutput += `${recipe_part} ${safeReagentsMapGet(recipe_rkey).name}`;
                    firstReagent = false;
                });
                textoutput += `\n`;
            }
        });
    });
    return textoutput;
}