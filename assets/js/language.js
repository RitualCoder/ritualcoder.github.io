let language_select = "french";
let jsondata = {};

function replace_text(country) {
    const title1 = document.getElementById("title1");
    title1.innerHTML = jsondata[0].title[country];

    const portfolio = document.getElementById("portfolio");
    portfolio.innerHTML = jsondata[0].portfolio[country];

    const about = document.getElementById("about");
    about.innerHTML = jsondata[0].about[country];

    const text_about = document.getElementById("text_about");
    text_about.innerHTML = jsondata[0].text_about[country];

    const title2 = document.getElementById("title2");
    title2.innerHTML = jsondata[0].title2[country];

    const project1 = document.getElementById("project1");
    project1.innerHTML = jsondata[0].project1[country];
    console.log

    const project2 = document.getElementById("project2");
    project2.innerHTML = jsondata[0].project2[country];
}

function doDate() {
    var now = new Date();
    str = now.toLocaleDateString("en") + "&nbsp;&nbsp;" + now.toLocaleTimeString("fr");
    document.getElementById("dateHeure").innerHTML = str;
}
setInterval(doDate, 1000);

const select = document.getElementById("language-picker-select");
select.addEventListener("change", function() {
    select.blur();
    language_select = select.value;
    replace_text(language_select);
});

async function getJSONFromFile() {
    try {
        const response = await fetch("assets/json/languages.json");
        if (!response.ok) {
            throw new Error("Une erreur est survenue lors de la récupération du JSON.");
        }
        const json = await response.json();
        return json;
    } catch (err) {
      console.error(err);
    }
}
async function main() {
    const data = await getJSONFromFile("assets/json/languages.json");
    jsondata = data;
    console.log(jsondata[0].title["english"]);
}

main();
