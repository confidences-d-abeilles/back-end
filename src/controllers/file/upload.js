
const multer = require('multer');
const sharp = require('sharp');
const { logDebug, logError } = require('@cda/logger');

const File = require('../../models/file');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Please upload only images.', false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadFiles = upload.array('images', 10);

const uploadImages = (req, res, next) => {
  uploadFiles(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).send('Too many files to upload.');
      }
    } else if (err) {
      logError(err);
      return res.status(500).send(err);
    }

    return next();
  });
};

const resizeImages = async (req, res, next) => {
  if (!req.files) return next();

  req.body.images = [];
  await Promise.all(
    req.files.map(async (file) => {
      const filename = file.originalname.replace(/\..+$/, '');
      const newFilename = `${filename}-${Date.now()}.webp`;

      try {
        await sharp(file.buffer)
          .resize(512)
          .toFormat('webp', {})
          .webp({ lossless: false })
          .toFile(`upload/${newFilename}`);
        const newFile = new File({
          filename: newFilename,
        });
        await newFile.save();
        if (req.params.beehiveId) {
          logDebug('Attaching to hive');
          await newFile.attatchToHive(req.params.beehiveId);
        }
      } catch (e) {
        logError(e);
      }

      req.body.images.push(newFilename);
    }),
  );

  return next();
};

const getResult = async (req, res) => {
  if (req.body.images.length <= 0) {
    return res.send('You must select at least 1 image.');
  }

  const images = req.body.images
    .map((image) => `${image}`)
    .join('');

  return res.send(`Images were uploaded: ${images}`);
};

module.exports = {
  uploadImages,
  resizeImages,
  getResult,
};
