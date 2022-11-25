module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'ftp.provisorio.xyz'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'provisor_wongames'),
        username: env('DATABASE_USERNAME', 'provisor_denisales'),
        password: env('DATABASE_PASSWORD', 'Deni@mydatabase'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
