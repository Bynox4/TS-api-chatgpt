import { Configuration, OpenAIApi } from "openai";

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');

export const llamarApi = async( msg:string ) => {
    const configuration = new Configuration({
      apiKey: ''
  });

    delete configuration.baseOptions.headers['User-Agent'];
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `Mejora este texto: ${msg}`}],
});
    textarea!.value = response.data.choices[0].message?.content || 'ERROR';
  }


button!.addEventListener('click', async() => {
  if ( textarea!.value.trim().length !== 0 ){
    await llamarApi( textarea!.value );
  }
});