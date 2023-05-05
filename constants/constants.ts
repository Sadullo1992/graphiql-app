import { AppLanguage } from '@/types/types';

export const LANGUAGE_NAMES: { [key in AppLanguage]: string } = {
  en: 'English',
  ru: 'Русский',
};

export const DEFAULT_LANGUAGE: AppLanguage = 'en';