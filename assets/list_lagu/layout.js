function showImage(imageSrc) {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
  
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  }
