function handleSubmit(event) {
  event.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'Cảm ơn bạn! Đội ngũ tư vấn sẽ liên hệ trong thời gian sớm nhất.';
  event.target.reset();
  return false;
}
