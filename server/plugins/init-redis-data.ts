import fs from 'fs';
import csv from 'csv-parser';
import { MongoClient, ObjectId } from 'mongodb';

interface PostItem {
  postTitle: string;
  postDiscription: string;
  viewNumber: string;
  like: string;
  commentNumber: string;
  author: string;
  time: string;
  category: string;
  postText?: string;
  postId: string;
}

const result: Array<PostItem> = [];
const postText: { [k in string]?: any } = {};

const uri = 'mongodb://localhost:27017/';

fs.createReadStream('server/plugins/juejin.csv')
  .pipe(csv())
  .on('data', data => result.push(data))
  .on('end', () => {
    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      element.postTitle = element['﻿postTitle'];
      postText[i] = element.postText;
      delete element.postText;
      delete element['﻿postTitle'];
      element.postId = i.toString();

      element.author = element.author ? element.author : '安东尼_';
      element.time = element.time ? element.time : new Date().getDay() + '天前';
      element.category = element.category ? element.category : '前端';
      // 清除文章内容
    }
    useStorage().setItem('postItem', result);
    connect();
  });

async function connect() {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db('juejin');
    const user = db.collection('user');
    const postItem = db.collection('postItem');
    const postTextC = db.collection('postText');

    const user_ = {
      userName: '用户',
      pwd: 123456,
      userId: new ObjectId().toString(),
    };

    const postTexts = [];
    const posts = [...result];

    const str = Object.values(postText)[0].replace(/\n/g, '');

    for (let i = 0; i < 980; i++) {
      posts.push({ ...result[0] });
      postTexts.push({ id: 0, postText: str });
    }

    // 循环添加现有数据

    postItem.insertMany(posts);
    postTextC.insertMany(postTexts);

    // client.close();
    // console.log('Connection to the database closed');
  } catch (error) {
    console.log(error);
  }
}

export default defineNitroPlugin(async app => {
  // console.log(app.hooks);
});
