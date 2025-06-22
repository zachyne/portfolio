export default {
    name: 'kdrama',
    title: 'K-Drama',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'poster_image',
        title: 'Poster Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'casts',
        title: 'Casts',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'episode_number',
        title: 'Episode Number',
        type: 'number',
      },
      {
        name: 'release_year',
        title: 'Release Year',
        type: 'number',
      },
      {
        name: 'watch_year',
        title: 'Watch Year',
        type: 'number',
      },
      {
        name: 'synopsis',
        title: 'Synopsis',
        type: 'text',
      },
    ],
  }
  