function addReinbToTable(reinb) {
  const tbody = document.getElementById('viewUser-table');

  // console.log(reinb);
  tbody.innerHTML += `
  <tr>
  <th scope "col">${reinb.user_id}</th>
  <th scope="col">${reinb.ri_id}</th>
  <th scope="col">${reinb.amount}</th>
  <th scope="col">${reinb.type}</th>
  <th scope="col">${reinb.status}</th>
  <th scope="col">${reinb.submitted}</th>
  <th scope="col">${reinb.resolved}</th>
  <th scope="col">${reinb.resolver}</th>
  </tr>
  `
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