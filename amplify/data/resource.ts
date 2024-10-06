import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { improveEnglish } from "../functions/gpt/resource"

const schema = a.schema({    
  improveEnglish: a
    .query()
    .arguments({
      description: a.string(),
    })
    .returns(a.string())
    .handler(a.handler.function(improveEnglish))
    .authorization((allow) => [
      allow.authenticated(),
    ]),

  Note: a
    .model({
      name:a.string(),
      description: a.string(),
      image: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
