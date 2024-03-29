// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Song Card documents
 */
interface SongCardDocumentData {
  /**
   * Name field in *Song Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: song_card.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Year field in *Song Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: song_card.year
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;

  /**
   * Cover Art field in *Song Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: song_card.cover_art
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover_art: prismic.ImageField<never>;
}

/**
 * Song Card document from Prismic
 *
 * - **API ID**: `song_card`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SongCardDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SongCardDocumentData>,
    "song_card",
    Lang
  >;

export type AllDocumentTypes = SongCardDocument;

/**
 * Default variation for Songs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SongsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Songs*
 */
type SongsSliceVariation = SongsSliceDefault;

/**
 * Songs Shared Slice
 *
 * - **API ID**: `songs`
 * - **Description**: Songs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SongsSlice = prismic.SharedSlice<"songs", SongsSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      SongCardDocument,
      SongCardDocumentData,
      AllDocumentTypes,
      SongsSlice,
      SongsSliceVariation,
      SongsSliceDefault,
    };
  }
}
