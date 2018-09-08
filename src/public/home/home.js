function addReinbToTable(reinb) {
  const tbody = document.getElementById('rei-table-body');

  // console.log(reinb);
  tbody.innerHTML += `
  <tr>
  <th scope="col" >${reinb.RIid}</th>
  <th scope="col">${reinb.amount}</th>
  <th scope="col">${reinb.type}</th>
  <th scope="col">${reinb.status}</th>
  <th scope="col">${reinb.submitted}</th>
  <th scope="col">${reinb.resolved}</th>
  <th scope="col">${reinb.resolver}</th>
  </tr>
  `
}
let user = JSON.parse(localStorage.getItem('user'));
fetch(`http://localhost:8888/users/${user.userId}`)

  .then(res => res.json())
  .then(res => {
    console.log(res);
    res.reinbursement.forEach(reinb => {
      addReinbToTable(reinb);
    })
  })
  .catch(err => {
    console.log(err);
  })