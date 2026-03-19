var mframe = document.getElementById("mframe");


var reagentKey = document.documentURI.split("?r=")[1];
mframe.innerHTML = getHtmlEntryForReagent(safeReagentsMapGet(reagentKey));