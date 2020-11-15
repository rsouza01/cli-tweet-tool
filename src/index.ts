import Twitter from 'twitter-lite';

import * as config from '../config';

const client = new Twitter(config);

client
  .post('statuses/update', { status: 'Hello world!' })
  .then((result) => {
    console.log(`You successfully tweeted this : ${result.text}`);
  })
  .catch(console.error);
