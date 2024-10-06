import { secret, defineFunction } from '@aws-amplify/backend';

export const improveEnglish = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'gpt',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts', 
  environment: {
    API_KEY: secret('OPENAI_API_KEY')
  }
});