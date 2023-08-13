const generateButton = document.getElementById('generate-button');
const inputText = document.getElementById('input-text');
const qrCodeContainer = document.getElementById('qr-code');
const downloadLink = document.getElementById('download-link');

generateButton.addEventListener('click', () => {
  const inputValue = inputText.value;
  if (inputValue.trim() !== '') {
    qrCodeContainer.innerHTML = ''; // Clear previous QR code
    const qrcode = new QRCode(qrCodeContainer, {
      text: inputValue,
      width: 200,
      height: 200,
    });
    downloadLink.href = qrCodeContainer.querySelector('canvas').toDataURL('image/png');
    downloadLink.style.display = 'block';
  }
});
