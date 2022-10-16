import packageJson from '../package.json';

const env = process.env;
const version = `v-${packageJson.version}`; 

const config = {
    apiUrl: env.REACT_APP_APIURL,
    apiVersion: env.REACT_APP_API_VERSION,
    environment: env.REACT_APP_ENVIRONMENT,
    version: `${env.REACT_APP_ENVIRONMENT}-${version}`,
};

export default config;
