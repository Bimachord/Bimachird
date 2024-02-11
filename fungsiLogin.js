document.getElementById('submitBtn').addEventListener('click', function() {
    document.getElementById('loginFormContainer').style.display = 'block';
  });
  
  // Event listener untuk tombol register
  document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerFormContainer').style.display = 'block';
  });

    // Mengecek apakah ada pengguna yang sudah login setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      // Jika ada pengguna yang sudah login, tampilkan konten yang sesuai
      document.getElementById('commentForm').style.display = 'block';
      document.getElementById('submitBtn').style.display = 'none';
      document.getElementById('registerBtn').style.display = 'none';
      document.getElementById('logoutBtn').style.display = 'block';
    } else {
      // Jika tidak ada pengguna yang sudah login, tampilkan tombol login dan formulir login
      document.getElementById('commentForm').style.display = 'none';
      document.getElementById('submitBtn').style.display = 'block';
      document.getElementById('registerBtn').style.display = 'block';
      document.getElementById('logoutBtn').style.display = 'none';
    }
  });

   // Event listener untuk tombol logout
   document.getElementById('logoutBtn').addEventListener('click', function() {
    // Menghapus informasi login dari penyimpanan lokal
    localStorage.removeItem('loggedInUser');
  
    // Menampilkan kembali tombol login dan formulir login
    document.getElementById('commentForm').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('registerBtn').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
  });
  
  // Event listener untuk formulir login
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && username === storedUserData.username && password === storedUserData.password) {
        localStorage.setItem('loggedInUser', JSON.stringify({ username: username }));
      notif('Login berhasil..!!!');
      document.getElementById('commentForm').style.display = 'block';
      document.getElementById('submitBtn').style.display = 'none';
      document.getElementById('registerBtn').style.display = 'none';
      document.getElementById('logoutBtn').style.display = 'block';
    } else {
      notif('Username atau password salah..!!!');
    }
    document.getElementById('loginForm').reset();
    document.getElementById('loginFormContainer').style.display = 'none';
  });
  
  // Event listener untuk formulir register
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const gender = document.getElementById('gender').value;
    if (username === '' || password === '' || gender === '') {
      showNotification('Harap isi semua kolom!');
      return;
    }
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && username === storedUserData.username) {
      showNotification('Username sudah digunakan, harap gunakan username lain..!!!');
      return;
    }
    const userData = {
      username: username,
      password: password,
      gender: gender
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    showNotification('Pendaftaran berhasil, silahkan Login..!!!');
    document.getElementById('registerForm').reset();
    document.getElementById('registerFormContainer').style.display = 'none';
  });
  
  // Fungsi untuk menampilkan notifikasi
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(function() {
      notification.remove();
    }, 2000);
  }
  
  // Fungsi untuk menampilkan notifikasi login
  function notif(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(function() {
      notification.remove();
    }, 2000);
  }
  
  // Fungsi untuk menyembunyikan formulir login
function hideLoginForm() {
    document.getElementById('loginFormContainer').style.display = 'none';
  }
  
  // Fungsi untuk menyembunyikan formulir register
  function tutup() {
    document.getElementById('registerFormContainer').style.display = 'none';
  }
  
