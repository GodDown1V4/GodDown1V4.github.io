function changeFont() { 
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/lxgwwenkaiscreen.css";
    document.head.append(link);
  };
  changeFont()