import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/local';

export default defineEventHandler(async event => {
  const client = await MongoClient.connect(uri);
  const db = client.db('juejin');

  const postText = db.collection('postText');
  const data = postText.find({ id: event.context.params.name });

  console.log(data);
  return '';
});
