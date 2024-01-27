document.addEventListener('DOMContentLoaded', function () {
    var myList = document.getElementById('myList');
    myList.style.display = 'none';
    // daftar lagu
    var names = [
      { name: "Nangi Dana Tambora", page: "assets/list_lagu/nangi-dana-tambora.html" },
      { name: "Sapa Moti Malingi", page: "assets/list_lagu/sapa-moti-malingi.html" },
      { name: "Pasole", page: "assets/list_lagu/pasole.html" },
      { name: "Pasapu Monca", page: "assets/list_lagu/pasapu-monca.html"},
      { name: "Nahu Ma Mbali", page: "assets/list_lagu/nahu-mambali.html"},
      { name: "Malingi", page: "assets/list_lagu/malingi.html"},
    ];
  

    names.forEach(function (item) {
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = item.name;
      listItem.setAttribute('data-halaman', item.page); 
      myList.appendChild(listItem);
    });
  
    document.getElementById('myInput').addEventListener('input', searchFunction);
    document.getElementById('myInput').addEventListener('blur', function () {
      if (this.value.trim() === '') {
        myList.style.display = 'none';
      }
    });
  
    var listItems = document.querySelectorAll('#myList li');
    listItems.forEach(function (item) {
      item.addEventListener('click', function () {

        var halaman = this.getAttribute('data-halaman');
    
        window.location.href = halaman;
      });
    });
  });
  
  function searchFunction() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myList');
    li = ul.getElementsByTagName('li');
  
    ul.style.display = 'block';
  
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  
    if (filter.trim() === '') {
      ul.style.display = 'none';
    }
  }
