export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5580e99e0e976c714f3b7a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-iq-landing-pages-studio',
                  apiId: '976ef6b0-c2e9-43fa-b2f5-fa09ad09e314'
                },
                {
                  buildHookId: '5f5580e9e319ee6e295d9082',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-iq-landing-pages',
                  apiId: '1962d2d7-d23f-4387-bd3d-0e9d314fd207'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pejantantangguh/sanity-nextjs-iq-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-iq-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
