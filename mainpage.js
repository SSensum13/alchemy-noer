var mframe = document.getElementById("mframe");
mframe.innerHTML = ""

mframe.innerHTML += "<h1>Базовые вещества</h1>"
getReagentsByCategory("basic").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})

mframe.innerHTML += "<h1>Зелья</h1>"
getReagentsByCategory("support").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})
