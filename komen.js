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
        savedComments.push({ type: "user", name: name, comment: comment });
        localStorage.setItem("savedComments", JSON.stringify(savedComments));

        // Tambahkan balasan otomatis dari admin
        var adminReply = "Komentar segera kami tanggapi, mohon menunggu";
        addAdminReply(adminReply);

        // Simpan balasan admin ke local storage
        savedComments.push({ type: "admin", reply: adminReply });
        localStorage.setItem("savedComments", JSON.stringify(savedComments));

        // Kirim komentar ke server (opsional)
        // sendCommentToServer(name, comment);

        // Kosongkan input fields
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    } else {
        alert("Playcolder dan komentar harus diisi.");
    }
}

// Fungsi untuk menambahkan komentar ke bagian komentar
function addComment(name, comment) {
    var newComment = document.createElement("div");
    newComment.classList.add("comment-box"); // Menambahkan kelas untuk styling
    newComment.innerHTML = "<strong>" + name + ":</strong> " + comment;
    commentSection.appendChild(newComment);
}

// Fungsi untuk menambahkan balasan otomatis dari admin
function addAdminReply(adminReply) {
    var adminReplyElement = document.createElement("div");
    adminReplyElement.classList.add("comment-box"); // Menambahkan kelas untuk styling
    adminReplyElement.innerHTML = "<strong style='color:red;'>Admin:</strong> " + adminReply;
    commentSection.appendChild(adminReplyElement);
}
