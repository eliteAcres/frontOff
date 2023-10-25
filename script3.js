document.addEventListener("DOMContentLoaded", function () {
    var button3 = document.getElementById("cusRequest");

    button3.addEventListener("click", function () {
        window.open("https://docs.google.com/spreadsheets/d/1V9kW1hkkVaWrrLpahRmNv6MBV33ISUObpKauOBpJGQc/edit#gid=0", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var button4 = document.getElementById("cusFeedback");

    button4.addEventListener("click", function () {
        window.open("https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=mw7H7l5jw43DaVRYMM5v4XEWuT0cjvYv&id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAYAACF8esdUQ1YwMk05Q0dONEVOUTgzSUZNVldVOVo3Mi4u", "_blank");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
