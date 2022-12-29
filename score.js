fetch('http://185.211.170.225:80/score')
.then((data)=>{
     return data.json();
}).then((objectData)=>{
     console.log(objectData[0].name)
     let tableData="";
     let selectOption="<option selected>Select player</option>";
     objectData.map((values)=>{
          tableData += `
          <tr>
          <td>${values.place}</td>
          <td>${values.name}</td>
          <td>${values.points}</td>
          <td>${values.games}</td>
          <td>${values.percentage}</td>
          </tr>`;
          selectOption += `<option>(id ${values.id} ${values.name} )</option>`;
     
});
document.getElementById("table_body").
innerHTML=tableData;
document.getElementById("players").
innerHTML=selectOption;
document.getElementById("players2").
innerHTML=selectOption;
}).catch((err)=>{
     console.log(err)
});
