export default defineEventHandler(async event => {
  const storage = await useStorage();
  storage.getItem('postItem0').then(data => {
    console.log('line 5', data);
  });
  const data = await useStorage().getItem('postItem');
  return data;
});
