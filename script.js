// Code goes here

var x = document.getElementById('txtUname');
var y = document.getElementById('txtPass');
var z = document.getElementById('txtEmail');
var k = document.getElementById('txtLocation');
var m = document.getElementsByClassName('gender');
var n = document.getElementById('txtOrg');
var g;

var arr = [];
var j = 0;
var fl1 = 0;
var container = document.getElementById('DivTable');
var html;


var obj = {};

function validate() {
  if (x.value === '' && document.getElementById('r1') === null)
    x.insertAdjacentHTML('afterend', '<div id="r1">Please enter UserName</div>');

  if (y.value === '' && document.getElementById('r2') === null)
    y.insertAdjacentHTML('afterend', '<div id="r2">Please enter Password</div>');

  if (z.value === '' && document.getElementById('r3') === null)
    z.insertAdjacentHTML('afterend', '<div id="r3">Please enter Email</div>');

  if (k.value === '' && document.getElementById('r4') === null)
    k.insertAdjacentHTML('afterend', '<div id="r4">Please enter Location</div>');

  if (n.value === '' && document.getElementById('r5') === null)
    n.insertAdjacentHTML('afterend', '<div id="r5">Please enter Organization</div>');

  if (m[0].checked !== true && m[1].checked !== true && document.getElementById('r6') === null)
    m[0].parentNode.insertAdjacentHTML('afterend', '<div id="r6">Please select gender</div>');

  if (m[0].checked)
    g = "male";
  else if (m[1].checked)
    g = "female";

  if (x.value !== '' && y.value !== '' && z.value !== '' && k.value !== '' && g !== 'test') {
    obj.uname = x.value;
    obj.password = y.value;
    obj.email = z.value;
    obj.loc = k.value;
    obj.org = n.value;
    obj.gender = g;

    x.value = "";
    y.value = "";
    z.value = "";
    k.value = "";
    m[0].checked = false;
    m[1].checked = false;
    n.value = "";

    store(obj);
  }

}

var remove = function() {
  var temp = document.getElementById('r' + arguments[0]);
  if (temp !== null)
    temp.parentNode.removeChild(temp);
}

var fl2 = 0;
var store = function(obj1) {
  if (fl2 === 0) {
    arr[0] = obj1;
    localStorage.setItem("list_data_key", JSON.stringify(arr));
    fl2 = 1;
  } else {
    var tempLS = localStorage.getItem("list_data_key");
    var tempSTR = JSON.parse(tempLS);
    tempSTR.push(obj1);
    localStorage.setItem("list_data_key", JSON.stringify(tempSTR));
  }


  if (fl1 === 0) {
    html = '<table id="tb1" class="table table-bordered table-hover"><tr><th class="bg-warning">UserName</th><th class="bg-warning">Email</th><th class="bg-warning">Location</th><th class="bg-warning">Gender</th><th class="bg-warning">Organization</th></tr>';
    container.innerHTML = html;
    fl1 = 1;
  }

  var storedData = localStorage.getItem("list_data_key");

  if (storedData) {
    var ArrayData = JSON.parse(storedData);
    var trav = document.getElementById('tb1').lastChild;
    if (trav) {
      var lslen = 0;
      while (lslen < ArrayData.length) {

        lslen++;
      }
      lslen = lslen - 1;
      trav.insertAdjacentHTML('afterend', '<tr><td>' + ArrayData[lslen]["uname"] + '</td><td>' + ArrayData[lslen]["email"] + '</td><td>' + ArrayData[lslen]["loc"] + '</td><td>' + ArrayData[lslen]["gender"] + '</td><td>' + ArrayData[lslen]["org"] + '</td></tr>');
    }
  }
  j++;
}