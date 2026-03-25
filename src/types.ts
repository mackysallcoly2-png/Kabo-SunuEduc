/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Tab = 'dashboard' | 'curriculum' | 'resources' | 'assistant' | 'future' | 'about' | 'my-fiches';
export type Language = 'fr' | 'ar' | 'en';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: 'teacher' | 'admin';
  createdAt: any;
}

export interface Fiche {
  id: string;
  uid: string;
  level: string;
  domain: string;
  object: string;
  content: string;
  language: Language;
  createdAt: any;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
