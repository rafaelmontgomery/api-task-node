import app from './src/app';

// TODO: USE Dotenv
const port = 3001;

// app => server = express();
app.listen(port, () => {
  console.log(`BackEnd listen port ${port}`);
});
