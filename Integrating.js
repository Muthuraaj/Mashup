var prefix = window.location.pathname.substr(
  0,
  window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1
);
var config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:",
};
require.config({
  baseUrl:
    (config.isSecure ? "https://" : "http://") +
    config.host +
    (config.port ? ":" + config.port : "") +
    config.prefix +
    "resources",
});

require(["js/qlik"], function (qlik) {
  qlik.on("error", function (error) {
    $("#popupText").append(error.message + "<br>");
    $("#popup").fadeIn(1000);
  });
  $("#closePopup").click(function () {
    $("#popup").hide();
  });
  //Getting HTML Elements
  const button = document.getElementById("btn");
  const SideContent = document.getElementsByClassName("Sidebar");
  const Sidemenu = document.getElementById("sidebar");
  const mobSide = document.getElementsByClassName("Mobclass");
  const mobBtn = document.getElementById("mobileButton");
  const show = document.querySelectorAll(".showcase");
  const tabs = document.querySelectorAll(".tabs");
  const chevron = document.getElementById("chevron");
  const mobchevron = document.getElementById("mobIcon");
  var app = qlik.openApp("3158d525-f15e-4afd-acdb-cb8a162e78ef", config);
  const main = document.getElementById("maincontent");
  const exportdata = document.getElementById("export");
  const nextChart = document.getElementById("nextChart");
  const linechart = document.getElementById("linechart");
  const chevron2 = document.getElementById("chevron2");
  const prevtext = document.getElementById("prevtext");
  //getting windows width
  //when a window screen change the function will call
  var windowWidth = window.innerWidth;
  window.onresize = onload = () => {
    windowWidth = this.innerWidth;
    Sidebar(windowWidth);
  };

  Sidebar(windowWidth);
  function Sidebar(windowWidth) {
    //windows width is less than 1000

    if (windowWidth < 1000) {
      Sidemenu.style.height = "5%";
      Sidemenu.style.width = "100%";
      for (i = 0; i < mobSide.length; i++) {
        mobSide[i].style.display = "none";
      }
      for (i = 0; i < SideContent.length; i++) {
        SideContent[i].style.display = "block";
      }
      mobBtn.addEventListener("click", mobilescreen);
    }

    //windows width is greater than 1000
    else {
      Sidemenu.style.width = "5%";
      Sidemenu.style.height = "100%";
      for (i = 0; i < SideContent.length; i++) {
        SideContent[i].style.display = "none";
      }
      for (i = 0; i < mobSide.length; i++) {
        mobSide[i].style.display = "block";
      }
      button.addEventListener("click", lapscreen);
    }
  }
  //Mobile Sidebar function
  function mobilescreen() {
    if (Sidemenu.style.height === "5%") {
      Sidemenu.style.height = "100%";
      Sidemenu.style.transition = "1s  ease";

      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("before");
      }
      for (i = 0; i < mobSide.length; i++) {
        mobSide[i].style.display = "block";
      }
      mobchevron.classList.remove("bx-chevron-down");
      mobchevron.classList.add("bx-chevron-up");
    } else {
      Sidemenu.style.height = "5%";
      Sidemenu.style.transition = "1s  ease";

      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("before");
      }
      for (i = 0; i < mobSide.length; i++) {
        mobSide[i].style.display = "none";
      }
      mobchevron.classList.remove("bx-chevron-up");
      mobchevron.classList.add("bx-chevron-down");
    }
  }
  //Lap sidebar function
  function lapscreen() {
    if (Sidemenu.style.width === "5%") {
      Sidemenu.style.width = "20%";
      Sidemenu.style.transition = "1s  ease";
      main.style.paddingRight = "10px";
      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("before");
      }
      for (i = 0; i < SideContent.length; i++) {
        SideContent[i].style.display = "block";
      }
      chevron.classList.add("bx-chevron-left");
      chevron.classList.remove("bx-chevron-right");
    } else {
      Sidemenu.style.width = "5%";

      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("before");
      }
      for (i = 0; i < SideContent.length; i++) {
        SideContent[i].style.display = "none";
      }
      chevron.classList.add("bx-chevron-right");
      chevron.classList.remove("bx-chevron-left");
    }
  }

  // tabs
  //Default active tabs
  tabs[0].classList.add("active");
  show[0].classList.add("showdisplay");

  //switchin tabs condition using For each

  tabs.forEach((t, i) => {
    t.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.add("disable");
        t.classList.remove("active");
      });
      show.forEach((s) => {
        s.classList.add("shownone");
        s.classList.remove("showdisplay");
      });

      t.classList.remove("disable");
      t.classList.add("active");

      //for displaying the content when the tab click
      show[i].classList.remove("shownone");
      show[i].classList.add("showdisplay");
      gettingTabs(show[i].id);
    });
  });

  const objsarr = {
    dashboard: {
      card1: "uBCNQnw",
      card2: "DPYTJen",
      card3: "dpHNqS",
      linechart: "kjcmDFj",
      barchart: "YtZMjQu",
      "Qlik-table": "dXgjx",
      "Gauge chart": "MqMVdfh",
      "pei chart": "CxEzm",
    },
    document: {
      Charts1: "DPYTJen",
      Charts2: "MqMVdfh",
      Charts3: "YtZMjQu",
      Charts4: "CxEzm",
    },
    contact: {
      Charts5: "dpHNqS",
      Charts6: "CxEzm",
      Charts7: "MqMVdfh",
      Charts8: "dXgjx",
    },
    prospect: {
      Charts9: "uBCNQnw",
      Charts10: "dXgjx",
      Charts11: "MqMVdfh",
      Charts12: "CxEzm",
    },
    workflow: {
      Charts13: "MqMVdfh",
      Charts14: "YtZMjQu",
      Charts15: "dXgjx",
      Charts16: "CxEzm",
    },
    chating: {
      Charts17: "uBCNQnw",
      Charts18: "CxEzm",
      Charts19: "MqMVdfh",
      Charts20: "YtZMjQu",
    },
    marketing: {
      Charts21: "MqMVdfh",
      Charts22: "CxEzm",
      Charts23: "kjcmDFj",
      Charts24: "dXgjx",
    },
    email: {
      Charts25: "CxEzm",
      Charts26: "MqMVdfh",
      Charts27: "DPYTJen",
      Charts28: "YtZMjQu",
    },
    transaction: {
      Charts29: "DPYTJen",
      Charts30: "MqMVdfh",
      Charts31: "CxEzm",
      Charts32: "YtZMjQu",
    },
    maintaince: {
      Charts33: "MqMVdfh",
      Charts34: "YtZMjQu",
      Charts35: "CxEzm",
      Charts36: "dXgjx",
    },
  };
  console.log(objsarr);
  function gettingTabs(tab) {
    for (const x in objsarr[tab]) {
      app.getObject(x, objsarr[tab][x]).then(() => {
        document.getElementById(x).classList.remove("loader");
      });
    }
  }
  for (const x in objsarr.dashboard) {
    app.getObject(x, objsarr.dashboard[x]).then(() => {
      document.getElementById(x).classList.remove("loader");
    });
  }
  //qlik selection bar
  app
    .getObject("CurrentSelections", "CurrentSelections")
    .then((CurrentSelection) => {
      console.log(CurrentSelection);
      setTimeout(() => {
        const pagerElements = document.getElementsByClassName(
          "qv-selections-pager"
        );
        console.log(pagerElements);
        const buttondiv = pagerElements[0].children[0];
        buttondiv.innerHTML = `<div class="buttons1" id="buttonDiv">
          <button class="button1" id="btn2" title="Backward Selection">
            <i class="bx bx-chevron-left" id="chevron"></i>
          </button>
          <button class="button1" id="btn3" title="clearAll Selection">
            <i class="bx bx-x-circle"></i>
          </button>
          <button class="button1" id="btn4" title="Forward Selection">
            <i class="bx bx-chevron-right" id="chevron"></i>
          </button>
        </div>`;
        const prevbtn = document.getElementById("btn2");
        const closebtn = document.getElementById("btn3");
        const forwardbtn = document.getElementById("btn4");
        prevbtn.addEventListener("click", previous);
        function previous() {
          app.back();
        }

        //clearall selection
        closebtn.addEventListener("click", clearall);
        function clearall() {
          app.clearAll();
        }

        //forward the selection
        forwardbtn.addEventListener("click", forward);
        function forward() {
          app.forward();
        }
        console.log(buttondiv);
      }, 100);
    });

  // Exporting Data of chart using Visualization api
  exportdata.addEventListener("click", Exportdata);
  function Exportdata() {
    app.visualization.get("YtZMjQu").then(function (vis) {
      vis.exportData({ format: "CSV_T", state: "A" }).then(function (link) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", link, true);
        xhr.responseType = "blob";

        xhr.onload = function () {
          if (xhr.status === 200) {
            var blob = new Blob([xhr.response], { type: "text/csv" });
            var downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = "Barhchart.csv"; // Set a custom filename

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }
        };

        xhr.send();
      });
    });
  }

  //Bookmark Functions for applying bookmarks
  // function option1() {
  //   app.bookmark.apply("db4e31c1-69b4-4f5e-abfd-682e92b53a9c");
  // }
  // function option2() {
  //   app.bookmark.apply("9d14b53a-f406-48fd-8866-1184a038278d");
  // }
  // function option3() {
  //   app.bookmark.apply("6691bb34-ccf1-4c7f-8f5e-45dd75f61ec5");
  // }

  // document.querySelector("#admin").addEventListener("click", function () {
  //   if (this.value === "1") {
  //     option1();
  //   }
  //   if (this.value === "2") {
  //     option2();
  //   }
  //   if (this.value === "3") {
  //     option3();
  //   }
  // });
  nextChart.addEventListener("click", function switching() {
    if (linechart.id === "linechart") {
      chevron2.classList.remove("bx-chevron-right");
      chevron2.classList.add("bx-chevron-left");
      linechart.id = "barchart2";
      app.getObject("barchart2", "YtZMjQu");
      prevtext.innerText = "Barchart";
    } else {
      chevron2.classList.remove("bx-chevron-left");
      chevron2.classList.add("bx-chevron-right");
      linechart.id = "linechart";
      app.getObject("linechart", "kjcmDFj");
      prevtext.innerText = "Linechart";
    }
  });
  const field = app.field("EmployeeName").getData();
  const searcharr = {
    1: [{ qText: "Tom Lindwall" }],
    2: [{ qText: "Tom Lindwall" }, { qText: "Leif Shine" }],
    3: [
      { qText: "Tom Lindwall" },
      { qText: "Leif Shine" },
      { qText: "Rock Roll" },
    ],
    4: [
      {
        qText: "Tom Lindwall",
      },
      { qText: "Leif Shine" },
      { qText: "Rock Roll" },
      { qText: "Helen Brolin" },
    ],
    5: [
      {
        qText: "Tom Lindwall",
      },
      { qText: "Leif Shine" },
      { qText: "Rock Roll" },
      { qText: "Helen Brolin" },
      { qText: "Joan Callins" },
    ],
  };
  for (const i = 0; i < searcharr.length; i++) {
    console.log(searcharr[i]);
  }
  const searchbar = document.querySelector("#searchbar");
  searchbar.addEventListener("input", function () {
    searchbarfun(searchbar.value);
    function searchbarfun(select) {
      for (const x in searcharr[select]) {
        field.selectValues(searcharr[select]);
      }
      if (select === "") {
        app.clearAll();
      }
      if (select > 5) {
        alert("you can select only top 5 values");
        searchbar.value = "";
        app.clearAll();
      }
    }
  });
});
