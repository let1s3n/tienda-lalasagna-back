import 'dotenv/config';

import app from "./app.mjs"
import './database.mjs'

async function main() {
  await app.listen(app.get('port'));
  console.log('server on port', app.get('port'));
}

main();

