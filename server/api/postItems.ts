import url from 'url';

import { MongoClient } from 'mongodb';

export default defineEventHandler(async event => {
  const query = getQuery(event);
  console.log(query);

  const data = await useStorage().getItem('postItem');

  const uri = 'mongodb://localhost:27017/local';

  if (!Object.keys(query).length) {
    return data;
  } else {
    const client = await MongoClient.connect(uri);
    const db = client.db('juejin');

    const postItem = db.collection('postItem');
    const data = postItem.find({}).skip(Number(query.start)).limit(20).toArray();
    client.close();

    return data;
  }
});
