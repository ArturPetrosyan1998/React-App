export const getMapUsersById = (users) => users.map(({
  id, name, username, website, phone, email,
}) => ({
  col1: id,
  col2: name,
  col3: username,
  col4: website,
  col5: phone,
  col6: email,
}));
