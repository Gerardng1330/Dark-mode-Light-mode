const express = require('express');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/generate', (req, res) => {
  const { text } = req.body;
  QRCode.toDataURL(text, (err, url) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to generate QR code' });
    }
    res.json({ url });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
