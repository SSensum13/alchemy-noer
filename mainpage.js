var contentlist = document.getElementById("infoframe-contentlist");
var mframe = document.getElementById("mframe");

contentlist.innerHTML += `<h2>Содержание</h2>`;

mframe.innerHTML += `<h2 id="basic_sect">Базовые вещества</h1>`;
contentlist.innerHTML += `<a href="#basic_sect">Базовые вещества</a><br>`;
getReagentsByCategory("basic").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})
 
mframe.innerHTML += `<h2 id="support_sect">Лечение и помощь</h1>`;
contentlist.innerHTML += `<a href="#support_sect">Лечение и помощь</a><br>`;
getReagentsByCategory("support").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})

mframe.innerHTML += `<h2 id="misc_sect">Прочее</h1>`;
contentlist.innerHTML += `<a href="#misc_sect">Прочее</a><br>`;
getReagentsByCategory("misc").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})

var textarea = document.getElementById("text-to-paste");
textarea.value = getCategoriesAsIngameText(new Map([
            ["basic", "Базовые"],
            ["support", "Полезные"],
            ["misc", "Прочее"]
        ]));
