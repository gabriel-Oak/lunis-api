db.createUser({
  user: 'api',
  pwd: 'api123',
  roles: [
    {
      role: 'readWrite',
      db: 'lunis',
    },
  ],
});
