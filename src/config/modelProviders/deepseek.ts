import { ModelProviderCard } from '@/types/llm';

// ref https://platform.deepseek.com/api-docs/pricing
const DeepSeek: ModelProviderCard = {
  chatModels: [
    {
      description: 'Skilled at general conversation tasks',
      displayName: 'DeepSeek V4 Flash',
      enabled: true,
      functionCall: true,
      id: 'deepseek-v4-flash',
      tokens: 128_000,
    },
    {
      description: 'Skilled at complex reasoning and professional tasks',
      displayName: 'DeepSeek V4 Pro',
      enabled: true,
      functionCall: true,
      id: 'deepseek-v4-pro',
      tokens: 128_000,
    },
  ],
  checkModel: 'deepseek-v4-flash',
  id: 'deepseek',
  modelList: { showModelFetcher: true },
  name: 'DeepSeek',
};

export default DeepSeek;
