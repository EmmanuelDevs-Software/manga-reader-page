export interface ChaptersInterface {
    provider_webtoon: string,
    slug: string,
    fullTitle: string,
    shortTitle: string,
    chapterNum: string,
    sourceURL: string,
    shortURL: string,
    chapterNav: {
        nextSlug: string
        nextURL: string
        prevSlug: string
        prevURL: string
    },
    contentURL: string[],
    createdAt: string,
    updatedAt: string,
}

