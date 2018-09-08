function addReinbToTable(reinb) {
  const tbody = document.getElementById('rei-table-body');

  // console.log(reinb);
  tbody.innerHTML += `
  <tr>
  <td scope "col" >${reinb.user_id}</td>
  <td scope="col">${reinb.ri_id}</td>
  <td scope="col">${reinb.amount}</td>
  <td scope="col">${reinb.type}</td>
  <td scope="col">${reinb.status}</td>
  <td scope="col">${reinb.submitted}</td>
  <td scope="col">${reinb.resolved}</td>
  <td scope="col" >${reinb.resolver}</td>
  </tr> `
}


 




fetch(`http://localhost:8888/ri/`)

  .then(res => res.json())
  .then(res => {
    console.log(res);
    res.forEach(reinb => {
      addReinbToTable(reinb);
    })
  })
  .catch(err => {
    console.log(err);
  })


function filter(event) {


}
