let language_select = "english";
let jsondata = {};

function replace_text(country) {
  const title1 = document.getElementById("title1");
  if (title1) {
    title1.innerHTML = jsondata[0].title[country];
  }

  const portfolio = document.getElementById("portfolio");
  if (portfolio) {
    portfolio.innerHTML = jsondata[0].portfolio[country];
  }

  const about = document.getElementById("about");
  if (about) {
    about.innerHTML = jsondata[0].about[country];
  }

  const text_about = document.getElementById("text_about");
  if (text_about) {
    text_about.innerHTML = jsondata[0].text_about[country];
  }

  const title2 = document.getElementById("title2");
  if (title2) {
    title2.innerHTML = jsondata[0].title2[country];
  }

  const project1 = document.getElementById("project1");
  if (project1) {
    project1.innerHTML = jsondata[0].project1[country];
  }

  const project2 = document.getElementById("project2");
  if (project2) {
    project2.innerHTML = jsondata[0].project2[country];
  }

  const project3 = document.getElementById("project3");
  if (project3) {
    project3.innerHTML = jsondata[0].project3[country];
  }

  const project4 = document.getElementById("project4");
  if (project4) {
    project4.innerHTML = jsondata[0].project4[country];
  }

  const project5 = document.getElementById("project5");
  if (project5) {
    project5.innerHTML = jsondata[0].project5[country];
  }

  const project6 = document.getElementById("project6");
  if (project6) {
    project6.innerHTML = jsondata[0].project6[country];
  }

  const project7 = document.getElementById("project7");
  if (project7) {
    project7.innerHTML = jsondata[0].project7[country];
  }

  const cv = document.getElementById("cv");
  if (cv) {
    cv.innerHTML = jsondata[0].cv[country];
  }

  const btn_cv = document.getElementById("btn_cv");
  if (btn_cv) {
    btn_cv.innerHTML = jsondata[0].btncv[country];
  }

  const discoverygames = document.getElementById("discoverygames");
  if (discoverygames) {
    discoverygames.textContent = jsondata[0].discoverygames[country];
  }

  const lightup = document.getElementById("lightup");
  if (lightup) {
    lightup.textContent = jsondata[0].lightup[country];
  }

  const calculator = document.getElementById("calculator");
  if (calculator) {
    calculator.textContent = jsondata[0].calculator[country];
  }

  const me = document.getElementById("me");
  if (me) {
    me.textContent = jsondata[0].me[country];
  }

  const allprojects = document.getElementById("allprojects");
  if (allprojects) {
    allprojects.textContent = jsondata[0].allprojects[country];
  }

  const bomb = document.getElementById("bomb");
  if (bomb) {
    bomb.textContent = jsondata[0].calculator[country];
  }

  const euler = document.getElementById("euler");
  if (euler) {
    euler.textContent = jsondata[0].euler[country];
  }
}

function doDate() {
  var now = new Date();
  str =
    now.toLocaleDateString("en") +
    "&nbsp;&nbsp;" +
    now.toLocaleTimeString("fr");
  document.getElementById("dateHeure").innerHTML = str;
}
setInterval(doDate, 1000);

const select = document.getElementById("language-picker-select");
select.addEventListener("change", function () {
  select.blur();
  language_select = select.value;
  replace_text(language_select);
});

async function getJSONFromFile() {
  try {
    const response = await fetch("assets/json/languages.json");
    if (!response.ok) {
      throw new Error(
        "Une erreur est survenue lors de la récupération du JSON."
      );
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
