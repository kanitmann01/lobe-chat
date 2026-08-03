import { UserGeneralConfig } from '@/types/user/settings';

export const DEFAULT_COMMON_SETTINGS: UserGeneralConfig = {
  fontSize: 14,
  // K13 Chat: pin to English (was 'auto', which follows browser language)
  language: 'en-US',
  themeMode: 'auto',
};
