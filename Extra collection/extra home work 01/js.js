document.getElementById("copyButton1").addEventListener("click", function() {
    var textToCopy = "display: flex; justify-content:flex-end;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton2").addEventListener("click", function() {
    var textToCopy = "display: flex; justify-content:center;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton3").addEventListener("click", function() {
    var textToCopy = "display: flex; justify-content:space-around;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton4").addEventListener("click", function() {
    var textToCopy = "display: flex; justify-content:space-between;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton5").addEventListener("click", function() {
    var textToCopy = "display: flex; align-items: flex-end;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton6").addEventListener("click", function() {
    var textToCopy = "display: flex; align-items:center; justify-content:center;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton7").addEventListener("click", function() {
    var textToCopy = "display: flex; justify-content:space-around; align-items: flex-end;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton8").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-direction:row-reverse;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton9").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-direction: column;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton10").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-direction:row-reverse; justify-content:flex-end;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton11").addEventListener("click", function() {
    var textToCopy = "flex; flex-direction: column; justify-content:flex-end;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton12").addEventListener("click", function() {
    var textToCopy = "display: flex; justify-content:space-between; flex-direction: column-reverse;display: flex; justify-content:center;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton13").addEventListener("click", function() {
    var textToCopy = "display: flex; justify-content:center; flex-direction:row-reverse; align-items: flex-end;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton14").addEventListener("click", function() {
    var textToCopy = "order:1;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });
  
  document.getElementById("copyButton15").addEventListener("click", function() {
    var textToCopy = "order:-2;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton16").addEventListener("click", function() {
    var textToCopy = "align-self:flex-end;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton17").addEventListener("click", function() {
    var textToCopy = "display: flex; align-self:flex-end; order:2";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton18").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-wrap:wrap;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton19").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-wrap:wrap; flex-direction:column;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton20").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-direction:column; flex-wrap:wrap;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton21").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-wrap: wrap; align-content:flex-start;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton22").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-wrap: wrap; align-content:flex-end;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton23").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-wrap: wrap; align-content: center; flex-direction: column-reverse;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });

  document.getElementById("copyButton24").addEventListener("click", function() {
    var textToCopy = "display: flex; flex-wrap: wrap-reverse; flex-direction: column-reverse; justify-content: center; align-content: space-between;";
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text");
  });


  