export default defineEventHandler(async event => {
  const storage = await useStorage();
  storage.getItem('postItem0').then(data => {
    console.log('line 5', val);
  });
  const data = await useStorage().getItem('postItem');
  const text = await useStorage().getItem('postText');
  return {
    api: 'works',
    asd: true,
    data,
    text,
  };
});
