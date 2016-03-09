import { register } from 'commando';

register({
  name: 'Repeat',

  component: 'commando-repeat/lib/Repeat',

  example: 'Repeat something',

  pattern: /repeat (.+)/i,

  properties: [
    { name: 'message' }
  ],

  invoke ({ message }, callback) {
    console.log('Received', message);
    callback(null, { message });
  }
});
