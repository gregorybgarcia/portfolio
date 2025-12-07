import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.gregorygarcia.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Note: This is a single-page application (SPA)
    // Hash fragments (#about, #experience, etc.) are not indexed by search engines
    // Only the main URL is included in the sitemap
  ]
}
