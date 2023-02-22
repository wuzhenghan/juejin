export default defineEventHandler(async event => {
  // console.log(event);
  const data = await useStorage().getItem('postItem');
  return data;
});
