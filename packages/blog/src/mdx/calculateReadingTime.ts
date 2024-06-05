import readingTime from 'reading-time';

export function calculateReadingTime(content: string) {
  const contentWithoutSvg = content.replace(/<svg+.+?(?=<\/svg>)<\/svg>/gs, '');
  return readingTime(contentWithoutSvg).text;
}
