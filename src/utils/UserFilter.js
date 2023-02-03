// export const userCookieFilter = (data, searchItrem) => {
//   // console.log('====================================');
//   // console.log(data?.items, searchItrem,"data, searchItrem");
//   // console.log('====================================');
//   return data?.items?.filter((items, index) => {
//     items?.tokens?.filter((item) =>item?.token == searchItrem?.loginToken);
//   });
// };

// userData.items[0].tokens[0].token == searchItrem tokens
// console.log(item?.tokens[0],index,"item,index")

export const userCookieFilter =async  (data, searchItrem, setItem) => {
  console.log("data", data);
  await  data?.items?.filter(async(item) => {
    console.log(item, "vivek");
    if (item.tokens.token == searchItrem?.loginToken) {
      console.log("finall item should bee", item);
     await setItem(item);
    } else {
      item?.tokens?.filter(async(tok) => {
        console.log(tok, "ttttttttttttttttt");
        if (tok?.token == searchItrem?.loginToken) {
          console.log("finall item should bee", item);
        await  setItem(item);
        }
      });
    }
  });
};
