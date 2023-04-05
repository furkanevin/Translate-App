import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-hl5EB4WbNWJlRMPqqtQeeUTY',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

async function getAnswer() {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
}
getAnswer();
