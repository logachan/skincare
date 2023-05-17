


  var alanBtnInstance = alanBtn({
    key: "a5e7222d41ea8701f462d15992026ffe2e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
      let mycommand=Object.values(commandData)[0];
      switch(mycommand){
        case "go to products page":
            window.location.href="products.html";
            break;

        case "go to home page":
            window.location.href="index.html";
            break;

        case "go to login page":
            window.location.href="login.html";
            break;

        case "go to assistance page":
            window.location.href="assistance.html";
            break;

        case "show me the products":
            window.location.href="index.html#pricing";
            break;

        case "add fungal to the cart":
            setfungal(Cream);
            break;
        case "getname":
          window.location.href="products.html#contact";
          document.getElementById("name").values=Object.values(commandData)[1];
          break;
        case "getemail":
          window.location.href="products.html#contact";
          document.getElementById("email").values=Object.values(commandData)[1];
          break;

      }
    },
    rootEl: document.getElementById("alan-btn"),
  });
  let Cream = 'fungus';

  function setfungal(cream){
    document.getElementById("fungal").innerHTML = cream;
  }