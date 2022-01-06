window.onload = function () {
    let  Bus= [
    
    ];
  
    if (localStorage.getItem("BusDetails") == null) {
      localStorage.setItem("BusDetails", JSON.stringify(Bus));
    }
  };
  
  function display(thisarray = undefined) {
    let tabledata = "";
    let BusDetails;
    if (thisarray == undefined) {
      BusDetails = JSON.parse(localStorage.getItem("BusDetails"));
    } else {
      BusDetails = thisarray;
    }
  
    BusDetails.forEach(function (Buses, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${Buses.name}</td>
        <td>${Buses.source}</td>
        <td>${Buses.destiny}</td>
        <td>${Buses.num}</td>
        <td>${Buses.capacity}</td>
        <td>
        <button class = "w3-hover-green" onclick="deleteBusDetails(${index})">delete</button>
     </td>
        </tr>`;
  
      tabledata += currentrow;
    });
    document.getElementById('oppo').innerHTML = tabledata;
 
  }
  
  display();
  
  function addBusDetails(e) {
    e.preventDefault();
    let BusDetail = {};
    let name = document.getElementById("bname").value;
    let source = document.getElementById("source").value;
    let destiny = document.getElementById("des").value;
    let num = document.getElementById("num").value;
    let capacity = document.getElementById("capacity").value;
    BusDetail.name = name;
    BusDetail.source = source;
    BusDetail.destiny = destiny;
    BusDetail.num = Number(num);
    BusDetail.capacity = Number(capacity);

  
    let BusDetails = JSON.parse(localStorage.getItem("BusDetails"));
    BusDetails.push(BusDetail);
  
    localStorage.setItem("BusDetails", JSON.stringify(BusDetails));
  
    display();
  
    document.getElementById("bname").value = "";
    document.getElementById("source").value = "";
    document.getElementById("des").value = "";
    document.getElementById("num").value = "";
    document.getElementById("capacity").value = "";
  }
  
  function searchBysource() {
      let searchValue = document.getElementById("searchsour").value;
      let BusDetails = JSON.parse(localStorage.getItem("BusDetails"));
      let newdata = BusDetails.filter(function (BusDetail) {
        return (
          BusDetail.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );
      });
    
      display(newdata);
    }
    function searchBydestination() {
      let searchValue = document.getElementById("searchdes").value;
      let BusDetails = JSON.parse(localStorage.getItem("BusDetails"));
      let newdata = BusDetails.filter(function (BusDetail) {
        return (
          BusDetail.destiny.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );
      });
    
      display(newdata);
    }
  
  function deleteBusDetails(index) {
    let BusDetails = JSON.parse(localStorage.getItem("BusDetails"));
    BusDetails.splice(index, 1);
    localStorage.setItem("BusDetails", JSON.stringify(BusDetails));
    display();
  }