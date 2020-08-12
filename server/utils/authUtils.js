async function queryDatabase(key, db) {
  const ref = db.ref(key);
  let data;
  await ref.once(
    'value',
    (snapshot) => {
      data = snapshot.val();
    },
    (err) => {
      console.log(err);
    }
  );

  return data;
}

// this function will return either the user object or false.
async function getUser(email, db) {
  const data = (await queryDatabase(`appUsers`, db)) || {};

  let dataValue;
  for (const userID in data) {
    const user = data[userID];

    if (user.email === email) {
      dataValue = {userID, ...user};
      break;
    }
  }

  return dataValue || false;
};

module.exports = {
  getUser,
  queryDatabase,
}
