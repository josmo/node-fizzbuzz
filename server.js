import express from 'express';
import config from 'config'
import {convertFizzBuzz,summary} from './src/fizzbuzz';
const router = express.Router();
const app = express();
const appPort = config.get('service.port');

app.use(express.json());
app.use('/v1', router);

app.listen(appPort, () => {
  console.log(`listening on ${appPort}`);
});


router.get('/healthcheck', (req, res) => {
 res.send('yep yep the service is up');
});

router.post('/convert', (req, res) => {
  console.log(`Processing ${req.body}`);
  const converted = convertFizzBuzz(req.body.convert);
  const convertedSummary = summary(converted);
  res.json({converted, convertedSummary});
});

