var mframe = document.getElementById("mframe");
mframe.innerHTML = ""

getReagentsByCategory("basic").forEach((r) => {
    mframe.innerHTML += getHtmlEntryForReagent(r);
})

