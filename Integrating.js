/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */

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
  const prevbtn = document.getElementById("btn2");
  //getting windows width
  //when a window screen change the function will call
  var windowWidth = window.innerWidth;
  window.onresize = onload = () => {
    windowWidth = this.innerWidth;
    Sidebar(windowWidth);
    qlik.resize();
  };

  Sidebar(windowWidth);
  function Sidebar(windowWidth) {
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
    } else {
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
  tabs[0].classList.add("active");
  show[0].classList.add("showdisplay");

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

      show[i].classList.remove("shownone");
      show[i].classList.add("showdisplay");

      if (show[i].id === "document") {
        documentTab();
      }
      if (show[i].id === "contact") {
        contact();
      }
      if (show[i].id === "prospect") {
        Prospect();
      }
      if (show[i].id === "workflow") {
        workflow();
      }
      if (show[i].id === "chating") {
        chating();
      }
      if (show[i].id === "marketing") {
        marketing();
      }
      if (show[i].id === "email") {
        Email();
      }
      if (show[i].id === "transaction") {
        transition();
      }
      if (show[i].id === "maintaince") {
        maintainence();
      }
    });
  });

  function Dashboard() {
    app.getObject("card1", "uBCNQnw").then(() => {
      document.getElementById("card1").classList.remove("loader");
    });
    app.getObject("card2", "uBCNQnw").then(() => {
      document.getElementById("card2").classList.remove("loader");
    });
    app.getObject("card3", "uBCNQnw").then(() => {
      document.getElementById("card3").classList.remove("loader");
    });
    app.getObject("linechart", "kjcmDFj").then(() => {
      document.getElementById("linechart").classList.remove("loader");
    });
    app.getObject("barchart", "YtZMjQu").then(() => {
      document.getElementById("barchart").classList.remove("loader");
    });
    app.getObject("Qlik-table", "dXgjx").then(() => {
      document.getElementById("Qlik-table").classList.remove("loader");
    });
    app.getObject("Gauge chart", "MqMVdfh").then(() => {
      document.getElementById("Gauge chart").classList.remove("loader");
    });
    app.getObject("pei chart", "CxEzm").then(() => {
      document.getElementById("pei chart").classList.remove("loader");
    });
  }
  function documentTab() {
    app.getObject("Charts1", "CxEzm").then(() => {
      document.getElementById("Charts1").classList.remove("loader");
    });
    app.getObject("Charts2", "MqMVdfh").then(() => {
      document.getElementById("Charts2").classList.remove("loader");
    });
    app.getObject("Charts3", "CxEzm").then(() => {
      document.getElementById("Charts3").classList.remove("loader");
    });
    app.getObject("Charts4", "CxEzm").then(() => {
      document.getElementById("Charts4").classList.remove("loader");
    });
  }
  function contact() {
    app.getObject("Charts5", "CxEzm").then(() => {
      document.getElementById("Charts5").classList.remove("loader");
    });

    app.getObject("Charts6", "CxEzm").then(() => {
      document.getElementById("Charts6").classList.remove("loader");
    });

    app.getObject("Charts7", "MqMVdfh").then(() => {
      document.getElementById("Charts7").classList.remove("loader");
    });

    app.getObject("Charts8", "CxEzm").then(() => {
      document.getElementById("Charts8").classList.remove("loader");
    });
  }
  function Prospect() {
    app.getObject("Charts9", "CxEzm").then(() => {
      document.getElementById("Charts9").classList.remove("loader");
    });
    app.getObject("Charts10", "CxEzm").then(() => {
      document.getElementById("Charts10").classList.remove("loader");
    });
    app.getObject("Charts11", "MqMVdfh").then(() => {
      document.getElementById("Charts11").classList.remove("loader");
    });
    app.getObject("Charts12", "CxEzm").then(() => {
      document.getElementById("Charts12").classList.remove("loader");
    });
  }
  function workflow() {
    app.getObject("Charts13", "MqMVdfh").then(() => {
      document.getElementById("Charts13").classList.remove("loader");
    });
    app.getObject("Charts14", "CxEzm").then(() => {
      document.getElementById("Charts14").classList.remove("loader");
    });
    app.getObject("Charts15", "MqMVdfh").then(() => {
      document.getElementById("Charts15").classList.remove("loader");
    });
    app.getObject("Charts16", "CxEzm").then(() => {
      document.getElementById("Charts16").classList.remove("loader");
    });
  }
  function chating() {
    app.getObject("Charts17", "MqMVdfh").then(() => {
      document.getElementById("Charts17").classList.remove("loader");
    });
    app.getObject("Charts18", "CxEzm").then(() => {
      document.getElementById("Charts18").classList.remove("loader");
    });
    app.getObject("Charts19", "MqMVdfh").then(() => {
      document.getElementById("Charts19").classList.remove("loader");
    });
    app.getObject("Charts20", "MqMVdfh").then(() => {
      document.getElementById("Charts20").classList.remove("loader");
    });
  }
  function marketing() {
    app.getObject("Charts21", "MqMVdfh").then(() => {
      document.getElementById("Charts21").classList.remove("loader");
    });
    app.getObject("Charts22", "CxEzm").then(() => {
      document.getElementById("Charts22").classList.remove("loader");
    });
    app.getObject("Charts23", "MqMVdfh").then(() => {
      document.getElementById("Charts23").classList.remove("loader");
    });
    app.getObject("Charts24", "MqMVdfh").then(() => {
      document.getElementById("Charts24").classList.remove("loader");
    });
  }
  function Email() {
    app.getObject("Charts25", "CxEzm").then(() => {
      document.getElementById("Charts25").classList.remove("loader");
    });
    app.getObject("Charts26", "MqMVdfh").then(() => {
      document.getElementById("Charts26").classList.remove("loader");
    });
    app.getObject("Charts27", "MqMVdfh").then(() => {
      document.getElementById("Charts27").classList.remove("loader");
    });
    app.getObject("Charts28", "MqMVdfh").then(() => {
      document.getElementById("Charts28").classList.remove("loader");
    });
  }
  function transition() {
    app.getObject("Charts29", "CxEzm").then(() => {
      document.getElementById("Charts29").classList.remove("loader");
    });
    app.getObject("Charts30", "MqMVdfh").then(() => {
      document.getElementById("Charts30").classList.remove("loader");
    });
    app.getObject("Charts31", "MqMVdfh").then(() => {
      document.getElementById("Charts31").classList.remove("loader");
    });
    app.getObject("Charts32", "MqMVdfh").then(() => {
      document.getElementById("Charts32").classList.remove("loader");
    });
  }
  function maintainence() {
    app.getObject("Charts33", "MqMVdfh").then(() => {
      document.getElementById("Charts33").classList.remove("loader");
    });
    app.getObject("Charts34", "MqMVdfh").then(() => {
      document.getElementById("Charts34").classList.remove("loader");
    });
    app.getObject("Charts35", "MqMVdfh").then(() => {
      document.getElementById("Charts35").classList.remove("loader");
    });
    app.getObject("Charts36", "MqMVdfh").then(() => {
      document.getElementById("Charts36").classList.remove("loader");
    });
  }
  Dashboard();
  prevbtn.addEventListener("click", previous);
  function previous() {
    app.back();
  }
  // app.getAppLayout(function (layout) {
  //   console.log(layout);
  // });
  // app.getAppObjectList("sheet", function (reply) {
  //   var str = "";
  //   $.each(reply.qAppObjectList.qItems, function (key, value) {
  //     str += value.qData.title + " ";
  //     $.each(value.qData.cells, function (k, v) {
  //       str += v.name + " ";
  //     });
  //   });
  //   alert(str);
  // });
  // app.getList("SelectionObject", function (reply) {
  //   var box = `
  // <div id='box'>
  // </div>`;
  //   var str = reply.qSelectionObject.qSelections;
  //   for (i = 0; i < str.length; i++) {
  //     console.log(str[i].qField, str[i].qSelectedCount + "of" + str[i].qTotal);
  //     box = str[i].qField + str[i].qSelectedCount + "of" + str[i].qTotal;
  //   }
  // });
  // app.getScript().then(function (script) {
  //   console.log(script);
  // });
  // app.bookmark.create("City", "City-bookmark", "kjcmDFj");
  // app.bookmark.apply("Test");
  // var global = qlik.getGlobal(config);
  // console.log(global);
  // global.getAuthenticatedUser(function (reply) {
  //   console.log(reply);
  // });

  app.getObject("CurrentSelections", "CurrentSelections");
});