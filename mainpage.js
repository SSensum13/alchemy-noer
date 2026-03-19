var contentlist = document.getElementById("infoframe-contentlist");
var mframe = document.getElementById("mframe");

contentlist.innerHTML += `<h2>Содержание</h2>`;

mframe.innerHTML += `<h2 id="basic_section">Базовые вещества</h1>`;
contentlist.innerHTML += `<a href="#basic_section">Базовые вещества</a><br>`;
getReagentsByCategory("basic").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})
 
mframe.innerHTML += `<h2 id="support_section">Лечение и помощь</h1>`;
contentlist.innerHTML += `<a href="#support_section">Лечение и помощь</a><br>`;
getReagentsByCategory("support").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})

mframe.innerHTML += `<h2 id="misc_section">Прочее</h1>`;
contentlist.innerHTML += `<a href="#misc_section">Прочее</a><br>`;
getReagentsByCategory("misc").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})

mframe.innerHTML += `<h2 id="posion_section">Опасные вещества</h1>`;
contentlist.innerHTML += `<a href="#posion_section">Опасные вещества</a><br>`;
getReagentsByCategory("poison").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})

var textarea = document.getElementById("text-to-paste");
textarea.value = getCategoriesAsIngameText(new Map([
            ["basic", "Базовые"],
            ["support", "Полезные"],
            ["misc", "Прочее"],
            ["poison", "Опасные вещества"]
        ]));
