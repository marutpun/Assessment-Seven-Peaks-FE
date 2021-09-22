/**
 * utils for group news base on sectionID
 *  add filtered array into a new one
 * https://github.com/karlhadwen/netflix/blob/master/src/utils/selection-filter.js
 */
import { nanoid } from 'nanoid';

export function selectionFilter(content = []) {
  return {
    news: [
      {
        id: nanoid(),
        title: 'Australia News',
        data: content?.filter((item) => item.sectionId === 'australia-news'),
      },
      {
        id: nanoid(),
        title: 'Sport',
        data: content?.filter((item) => item.sectionId === 'sport'),
      },
      {
        id: nanoid(),
        title: 'Opinion',
        data: content?.filter((item) => item.sectionId === 'commentisfree'),
      },
      {
        id: nanoid(),
        title: 'US News',
        data: content?.filter((item) => item.sectionId === 'us-news'),
      },
      {
        id: nanoid(),
        title: 'World News',
        data: content?.filter((item) => item.sectionId === 'world'),
      },
      {
        id: nanoid(),
        title: 'Politics',
        data: content?.filter((item) => item.sectionId === 'politics'),
      },
      ,
      {
        id: nanoid(),
        title: 'UK News',
        data: content?.filter((item) => item.sectionId === 'uk-news'),
      },
      {
        id: nanoid(),
        title: 'Society',
        data: content?.filter((item) => item.sectionId === 'society'),
      },
      {
        id: nanoid(),
        title: 'Technology',
        data: content?.filter((item) => item.sectionId === 'technology'),
      },
      ,
      {
        id: nanoid(),
        title: 'Business',
        data: content?.filter((item) => item.sectionId === 'business'),
      },
    ],
  };
}

export function bookmarkFilter(arrMain, arrayFilter) {
  return arrMain.filter((item) => arrayFilter.includes(item.id));
}
