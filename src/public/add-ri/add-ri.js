console.log('loading js');
function reiRequest(event) {
  event.preventDefault();

  const amount = document.getElementById('input-amount').value;
  const type = document.getElementById('input-type').value;
 const user = JSON.parse(localStorage.getItem('user'));
 const userId = user.userId;

  const reinb = {
    userId,
    amount,
    type

  }
  console.log(reinb);
  
  fetch('http://localhost:8888/ri/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reinb)
  })
  .then(resp => resp.json())
  .then(resp => {
    window.location = 'http://localhost:8888/home/home.html';
  })
  .catch(err => {
    console.log(err);
  });
}