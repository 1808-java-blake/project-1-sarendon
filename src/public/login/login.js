function login(event) {
    event.preventDefault();
    let username = document.getElementById('inputUsername').value;
    let password = document.getElementById('inputPassword').value;
  
    const credentials = { username, password };
    fetch('http://localhost:8888/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(credentials)
    })
      .then(resp => {
        if (resp.status === 401) {
          document.getElementById('error-message').innerText = 'Invalid Credentials';
        } else if (resp.status === 200) {
          return resp.json();
        } else {
          document.getElementById('error-message').innerText = 'Failed to Login at This Time';
        }
        throw 'Failed to Login';
      })
      .then(resp => {
        console.log(resp);
        localStorage.setItem('user', JSON.stringify(resp));

        const currentUser = JSON.parse(localStorage.getItem('user'));

        if(currentUser.role === "employee"){

          window.location = 'http://localhost:8888/home/home.html';

        }

        else if(currentUser.role ==="admin"){

          window.location = 'http://localhost:8888/home/admin-home.html';

        }

       //
      })
      .catch(err => {
        console.log(err);
      });
  }