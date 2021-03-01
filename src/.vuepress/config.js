module.exports = {
    title: 'hexo-theme-keep',
    description: 'A simple and elegant theme for Hexo.',
    head: [
        ['link', {rel: 'icon', href: '/assets/images/keep-logo.svg'}],
    ],
    // base: '/docs/',  // 如果编译后的静态文件部署不在网站根域名下，需要指定该项
    serviceWorker: false,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'hexo-theme-keep',
            description: '一款简约且优雅的 Hexo 主题',
        },
        '/i18n/en/': {
            lang: 'en',
            title: 'hexo-theme-keep',
            description: 'A simple and elegant theme for Hexo',
        }
    },
    themeConfig: {
        repo: 'https://github.com/XPoet/hexo-theme-keep',
        logo: '/assets/images/keep-logo.svg',
        editLinks: true,
        // 文档仓库和项目本身不在一个仓库，需要指定该项
        docsRepo: 'https://github.com/theme-keep/documents',
        docsDir: 'src',          // 文档不是放在仓库的根目录下，需要指定该项
        docsBranch: 'master',    // 文档源文件（未构建的）所在的分支
        sidebarDepth: 3,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '帮助完善文档',
                lastUpdated: '上次更新',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用",
                        buttonText: "刷新"
                    }
                },
                sidebar: {
                    '/': [
                        {
                            title: '使用教程',
                            collapsable: false,
                            children: [
                                '/usage-tutorial/quick-start',
                                '/usage-tutorial/configuration-guide',
                                '/usage-tutorial/advanced',
                            ],
                        },
                        {
                            title: '参与贡献',
                            collapsable: false,
                            children: [
                                '/contribute/contribute',
                            ],
                        },
                    ],
                },
                nav: [
                    {
                        text: '使用教程',
                        items: [
                            {
                                text: '快速开始',
                                link: '/usage-tutorial/quick-start',
                            },
                            {
                                text: '配置指南',
                                link: '/usage-tutorial/configuration-guide',
                            },
                            {
                                text: '进阶设置',
                                link: '/usage-tutorial/advanced',
                            },
                        ],
                    },
                    {
                        text: '参与贡献',
                        link: '/contribute/contribute',
                    },
                ],
            },
            '/i18n/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                sidebar: {
                    '/i18n/en/': [
                        {
                            title: 'Usage guide',
                            collapsable: false,
                            children: [
                                '/i18n/en/usage-tutorial/quick-start',
                                '/i18n/en/usage-tutorial/configuration-guide',
                                '/i18n/en/usage-tutorial/advanced',
                            ],
                        },
                        {
                            title: 'Contribution',
                            collapsable: false,
                            children: [
                                '/i18n/en/contribute/contribute',
                            ],
                        },
                    ],
                },
                nav: [
                    {
                        text: 'Usage guide',
                        items: [
                            {
                                text: 'Quick start',
                                link: '/i18n/en/usage-tutorial/quick-start',
                            },
                            {
                                text: 'Configuration guide',
                                link: '/i18n/en/usage-tutorial/configuration-guide',
                            },
                            {
                                text: 'Advanced',
                                link: '/i18n/en/usage-tutorial/advanced',
                            },
                        ],
                    },
                    {
                        text: 'Contribute',
                        link: '/i18n/en/contribute/contribute',
                    },
                ],
            },
        },
    }
};
