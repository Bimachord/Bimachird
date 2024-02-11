var savedComments = JSON.parse(localStorage.getItem("savedComments")) || [];
var commentSection = document.getElementById("commentSection");

savedComments.forEach(function(savedComment) {
    if (savedComment.type === "user") {
        addComment(savedComment.name, savedComment.comment);
    } else if (savedComment.type === "admin") {
        addAdminReply(savedComment.reply);
    }
});

function submitComment() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    if (name && comment) {
        // Tambahkan komentar pengguna
        addComment(name, comment);

        // Simpan komentar pengguna ke local storage
        savedComments.unshift({ type: "user", name: name, comment: comment });

        // Tambahkan balasan otomatis dari admin
        var adminReply = "Komentar segera kami tanggapi, mohon menunggu";
        addAdminReply(adminReply);

        // Simpan balasan admin ke local storage
        savedComments.unshift({ type: "admin", reply: adminReply });

        // Simpan data ke local storage
        localStorage.setItem("savedComments", JSON.stringify(savedComments));

        // Kosongkan input fields
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    } else {
        notif("nama dan request harus diisi.");
    }
}

// Fungsi untuk menambahkan komentar ke bagian komentar
function addComment(name, comment) {
    var newComment = document.createElement("div");
    newComment.classList.add("comment-box"); // Menambahkan kelas untuk styling
    newComment.innerHTML = "<strong>" + name + ":</strong> " + comment;

    // Menyisipkan komentar di paling atas
    commentSection.insertBefore(newComment, commentSection.firstChild);
}

// Fungsi untuk menambahkan balasan otomatis dari admin
function addAdminReply(adminReply) {
    var adminReplyElement = document.createElement("div");
    adminReplyElement.classList.add("comment-box"); // Menambahkan kelas untuk styling
    adminReplyElement.innerHTML = "<strong style='color:red;'>Admin:</strong> " + adminReply;

    // Menyisipkan balasan di paling atas
    commentSection.insertBefore(adminReplyElement, commentSection.firstChild);
}

function notif(message) {
    // Membuat elemen untuk notifikasi
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
  
    // Menambahkan notifikasi ke dalam body
    document.body.appendChild(notification);
  
    // Menghilangkan notifikasi setelah 2 detik
    setTimeout(function() {
      notification.remove();
    }, 2000);
  }
