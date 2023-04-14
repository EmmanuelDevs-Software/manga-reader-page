export interface MangaByProviderInterface {
    provider: string,
    slug: string,
    title: string,
    sourceURL: string,
    shortURL: string,
    coverURL: string,
    synopsis: string,
    genre: string[],
    createdAt: string,
    updatedAt: string
}