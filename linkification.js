$('li').each(function(key, index) {     
  $(index).wrap("<a href=\""+index.innerText+"\"></a>");
});
