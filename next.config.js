const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {  return {
  env: {
    //mongodb+srv://sbandes:RicosRoughNecks1!@cluster0.nqyrx.mongodb.net/my-site?retryWrites=true&w=majority
    mongodb_username: "sbandes",
    mongodb_password: "RicosRoughNecks1!", //keeping this here could be a security issue. webhost providers all allow you to let them set environmental variables, so you should usually do that instead.
    mongodb_clustername: "cluster0",
    mongodb_database: "my-dev-site",
  },
};
}

return {
    env: {
      //mongodb+srv://sbandes:RicosRoughNecks1!@cluster0.nqyrx.mongodb.net/my-site?retryWrites=true&w=majority
      mongodb_username: "sbandes",
      mongodb_password: "RicosRoughNecks1!",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };

}

//this is nodejs syntax. it's basically an export default statement.
