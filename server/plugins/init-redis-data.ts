import fs from 'fs';
import csv from 'csv-parser';

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

fs.createReadStream('server/plugins/juejin.csv')
  .pipe(csv())
  .on('data', data => result.push(data))
  .on('end', () => {
    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      element.postId = `postItem${i}`;
      postText[`postItem${i}`] = element.postText;
      delete element.postText;
    }
    useStorage().setItem('postItem', result);
    useStorage().setItem('postText', postText);
  });

export default defineNitroPlugin(async app => {
  console.log(app.hooks.addHooks);
});
