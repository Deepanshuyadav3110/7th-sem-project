import { Client,Account } from 'appwrite';

const client = new Client();
client
    .setProject('6734d74f00092e549768')
    .setEndpoint('https://cloud.appwrite.io/v1')

export const account = new Account(client);

export default client;