import fs from 'fs';
import csv from 'csv-parser';
import { MongoClient } from 'mongodb';

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

const result: PostItem[] = [];
const postText: { [k in string]?: any } = {};

const uri = 'mongodb://localhost:27017/local';

fs.createReadStream('server/plugins/juejin.csv')
  .pipe(csv())
  .on('data', data => result.push(data))
  .on('end', () => {
    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      element.postTitle = element['﻿postTitle'];
      element.postId = `postItem${i}`;
      postText[`postItem${i}`] = element.postText;
      delete element.postText;
      delete element['﻿postTitle'];
      console.log();

      element.author = element.author ? element.author : '安东尼_';
      element.time = element.time ? element.time : new Date().getDay() + '天前';
      element.category = element.category ? element.category : '前端';
      // 清除文章内容
      if (i === 0 || i === 18) {
        console.log('line 37', element);
      }
    }
    useStorage().setItem('postItem', result);
    useStorage().setItem('postText', postText);
  });

// try {
//   const client = await MongoClient.connect(uri);
//   console.log('Connected to the database');

//   const db = client.db('mydb');
//   const collection = db.collection('');

//   // Perform database operations here

//   client.close();
//   console.log('Connection to the database closed');
// } catch (error) {
//   console.log(error);
// }
export default defineNitroPlugin(async app => {
  console.log(app.hooks.addHooks);
});
