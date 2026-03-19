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
        key: "_boiled_vermis", name: "Boiled Vermis", color: "#63dd45", categories: ["basic"],
        desc: `Настойка Vermis, которая была отварена в котелке или чайнике. `,
    },
    {
        key: "_umbra", name: "Umbra", color: "#9040af", categories: ["basic"],
        desc: `Добывается из Теневых Грибов.`,
    },
    /*
    # Лекарства и полезности
    */
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
        key: "_calta_poison", name: "Calta Poison", color: "#fffc2e", categories: ["poison", "support"],
        desc: `Яд кальты - сильная отрава, которая в небольших дозах (1-2 ед) способна лечить чуму.`,
        recipe: new Map([
            ["_aurum", 1],
            ["_berry_poison", 1],
        ]),
        recipeResult: 2
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
        desc: `Высшее (мастерское) зелье лечения высшей пробы.`,
        recipe: new Map([
            ["_heal_potion", 1],
            ["_aurum", 1]
        ]),
        recipeResult: 2
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
        desc: `Высшее (мастерское) зелье маны.`,
        recipe: new Map([
            ["_mana_potion", 1],
            ["_aurum", 1]
        ]),
        recipeResult: 2
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
        desc: `Высшее (мастерское) зелье выносливости.`,
        recipe: new Map([
            ["_stamina_potion", 1],
            ["_aurum", 1]
        ]),
        recipeResult: 2
    },
    {
        key: "_dark_vision_poion", name: "Dark Vision Potion", color: "#ff41f6", categories: ["support"],
        desc: `Зелье, которое позволяет видеть в темноте.`,
        recipe: new Map([
            ["_umbra", 1],
            ["_calta_poison", 1]
        ]),
        recipeResult: 2
    },
    /*
    # Прочие интресности
    */
    {
        key: "_aphrodisiac", name: "Aphrodisiac", color: "#ff41f6", categories: ["misc"],
        desc: `Афродизиак - отвар действующий как средство пробуждающее возбуждение и похоть.`,
        recipe: new Map([
            ["_rubrum", 1],
            ["_aurum", 1],
            ["_water", 1]
        ]),
        recipeResult: 3
    },
    {
        key: "_bug_repellent", name: "Bug Repellent", color: "#8afa3f", categories: ["misc"],
        desc: `Репеллент от насекомых.`,
        recipe: new Map([
            ["_vermis", 1],
            ["_berry_poison", 1]
        ]),
        recipeResult: 2
    },
    {
        key: "_sleep_toxin", name: "Снотворное", color: "#966acf", categories: ["misc"],
        desc: `Весьма эффективное снотворное.`,
        recipe: new Map([
            ["_umbra", 1],
            ["_water", 1]
        ]),
        recipeResult: 2
    },
    {
        key: "_master_sleep_toxin", name: "Сильное Снотворное", color: "#b17bf8", categories: ["misc"],
        desc: `Усиленная версия снотворного.`,
        recipe: new Map([
            ["_sleep_toxin", 1],
            ["_aurum", 1]
        ]),
        recipeResult: 2
    },
    /*
    # Яды, отравы
    */
    {
        key: "_blinding_poison", name: "Ослепляющий Яд", color: "#e4f046", categories: ["poison"],
        desc: `Настойка, которая должна ослеплить жертву.`,
        recipe: new Map([
            ["_boiled_vermis", 1],
            ["_berry_poison", 1],
            ["_aurum", 1]
        ]),
        recipeResult: 3
    },
    {
        key: "_love_potion", name: "Любовное Зелье", color: "#bd53c7", categories: ["poison"],
        desc: `При употреблении/введении 2 или более кубов настойки - очаровывает жертву.`,
        recipe: new Map([
            ["_aphrodisiac", 1],
            ["_calta_poison", 1],
        ]),
        recipeResult: 2
    },
];

var reagentsMap = new Map();
reagentsArr.forEach((r) => {
    reagentsMap.set(r.key, r);
});

function safeReagentsMapGet(reagentKey) {
    var output = reagentsMap.get(reagentKey);
    if(output === undefined) {
        console.error(`В списке реагентов не найден найден ключ ${reagentKey}!`);
    }
    return output;
}
