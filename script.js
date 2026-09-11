(function () {
  "use strict";

  var FLAVORS = [
    { name: "포도 맛", percent: 4, color: "#2a78d6" },
    { name: "딸기 맛", percent: 8, color: "#eb6834" },
    { name: "오렌지 맛", percent: 8, color: "#1baf7a" },
    { name: "수박 맛", percent: 4, color: "#eda100" },
    { name: "라즈베리 맛", percent: 4, color: "#e87ba4" },
    { name: "그린애플 맛", percent: 4, color: "#008300" },
    { name: "유자 맛", percent: 4, color: "#4a3aa7" },
    { name: "레몬 맛", percent: 8, color: "#e34948" },
    { name: "5개입", percent: 6, color: "#c98500" },
    { name: "14개(1줄)", percent: 0, color: "#898781" },
    { name: "안 줄 확률", percent: 50, color: null }
  ];

  var chart = document.getElementById("chart");
  var max = Math.max.apply(null, FLAVORS.map(function (f) { return f.percent; }));

  var frag = document.createDocumentFragment();

  FLAVORS.forEach(function (f) {
    var row = document.createElement("div");
    row.className = "row";
    row.title = f.name + " " + f.percent + "%";

    var dot = document.createElement("span");
    dot.className = "dot";
    if (f.color) {
      dot.style.background = f.color;
    } else {
      dot.classList.add("ink");
    }

    var label = document.createElement("span");
    label.className = "label";
    label.textContent = f.name;

    var track = document.createElement("div");
    track.className = "track";

    var fill = document.createElement("div");
    fill.className = "fill";
    fill.style.width = Math.max((f.percent / max) * 100, f.percent === 0 ? 0 : 3) + "%";
    if (f.color) {
      fill.style.background = f.color;
    } else {
      fill.classList.add("ink");
    }
    track.appendChild(fill);

    var value = document.createElement("span");
    value.className = "value";
    value.textContent = f.percent + "%";

    row.appendChild(dot);
    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(value);
    frag.appendChild(row);
  });

  chart.appendChild(frag);

})();
