export const userCookieFilter = async (data, searchItrem, setUser) => {
  await data?.items?.filter(async (item) => {
    if (item.tokens.token == searchItrem?.loginToken) {
      await setUser(item);
    } else {
      item?.tokens?.filter(async (tok) => {
        if (tok?.token == searchItrem?.loginToken) {
          await setUser(item);
        }
      });
    }
  });
};
