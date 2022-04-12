/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import {defineConfig4CustomTheme, UserPlugins} from 'vuepress/config'
import {VdoingThemeConfig} from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块
export default defineConfig4CustomTheme<VdoingThemeConfig>({
    theme: 'vdoing', // 使用npm包主题

    locales: {
        '/': {
            lang: 'zh-CN',
            title: "爱是与世界平行",
            description: '技术、产品、运维博客，不想成为某一类，只想成为某一个。',
        }
    },
    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            {text: '首页', link: '/'},
            {
                text: '热门',
                link: '/hot/',
                items: [
                    {text: '⭐⭐⭐产品列表', link: '/hot/4cce18/'},
                    {text: '⭐⭐⭐技术相关', link: '/hot/55dcd9/'},
                    {text: '流媒体', link: '/hot/51d349/'},
                    {text: '物联网', link: '/hot/67a5c9/'},
                    {text: '简历工作相关', link: '/hot/b665ff/'},
                    {text: '优质资源分享', link: '/hot/4df664/'},
                    {text: '可视化大屏', link: '/hot/bcea3f/'},
                    {text: 'PostgreSQL', link: '/hot/e8c4ae/'},
                    {text: '智慧城市', link: '/hot/f36858/'},
                    {text: '常用兼职网站', link: '/hot/5d21ce/'},
                    {text: '快速开发平台', link: '/hot/0d5cb5/'},
                    {text: '接口API管理工具', link: '/hot/389faf/'},
                    {text: '代码质量', link: '/hot/8525be/'},
                    {text: '看热搜', link: '/hot/4ace57/'},
                    {text: '搭建博客或网站', link: '/hot/7591eb/'},
                    {text: '监控平台', link: '/hot/870e3c/'},
                    {text: '搭建网站', link: '/hot/ae30fe/'},
                    {text: '为什么你应该写博客', link: '/hot/6726b8/'},
                ],
            },
            {
                text: '前端',
                link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
                items: [
                    // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
                    {
                        text: '前端文章',
                        items: [
                            {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'},
                        ],
                    },
                    {
                        text: '页面',
                        items: [
                            {text: 'HTML', link: '/ui/8309a5b876fc95e3/'},
                            {text: 'CSS', link: '/ui/0a83b083bdf257cb/'},
                        ],
                    },
                    {
                        text: '学习笔记',
                        items: [
                            {text: '《JavaScript教程》', link: '/note/javascript/'},
                            {text: '《JavaScript高级程序设计》', link: '/note/js/'},
                            {text: '《ES6 教程》', link: '/note/es6/'},
                            {text: '《Vue》', link: '/note/vue/'},
                            {text: '《React》', link: '/note/react/'},
                            {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/',},
                            {text: '《Git》', link: '/note/git/',},
                            {text: 'TypeScript', link: '/pages/51afd6/',},
                            {text: 'JS设计模式总结', link: '/pages/4643cd/',},
                        ],
                    },
                ],
            },
            {
                text: '数据库',
                link: '/database/',
                items: [
                    {
                        text: 'MySQL',
                        items: [
                            {text: '00.SQL优化万能公式', link: '/mysql/4a1e18/'},
                            {text: '01.MySQL-IP存储方式', link: '/mysql/4b1e18/'},
                            {text: '02.MySQL GIS功能介绍', link: '/mysql/4de1e18/'},
                        ],
                    },
                    {
                        text: 'PostgreSQL',
                        items: [
                            {text: '00.PostGIS总结', link: '/postgresql/4de1e18/'},
                            {text: '01.PostGIS常用函数', link: '/postgresql/41ee18/'},
                            {text: '02.PostGis添加Geometry类型字段', link: '/postgresql/42e1e18/'},
                            {text: '03.Java Geometry空间几何数据的处理应用', link: '/postgresql/43e1e18/'},
                            {text: '04.PostGIS创建Gis空间数据库，shp数据入库', link: '/postgresql/45e1e18/'},
                        ],
                    },
                    {
                        text: 'Redis',
                        items: [
                            {text: '00.Redis开发规范', link: '/redis/4de1e181/'},
                            {text: '01.Redis常见使用场景', link: '/redis/4de1e182/'},
                            {text: '02.Redis的持久化方案', link: '/redis/4de1e183/'},
                            {text: '03.Redis内存淘汰机制与算法', link: '/redis/4de1e184/'},
                            {text: '04.Redis主从同步和哨兵模式', link: '/redis/4de1e185/'},
                            {text: '05.Redis生产架构选型解决方案', link: '/redis/4de1e186/'},
                            {text: '06.Redis缓存雪崩、缓存穿透、缓存击穿、缓存预热', link: '/redis/4de1e187/'},
                        ],
                    },
                ],
            },
            {
                text: '云原生',
                link: '/cloudnative/',
                items: [
                    {text: '00.云原生概念', link: '/cloud/4c1e18/'},
                    {text: '01.云原生架构', link: '/cloud/4c2e18/'},
                    {text: '02.快速了解云原生架构', link: '/cloud/4c3e1823/'},
                    {text: '03.最全云原生全景图解读', link: '/cloud/4c4e18/'},
                    {text: '04.Serverless概述及案例', link: '/cloud/4c5e18/'},
                    {text: '05.什么是云计算，云计算的三种模式', link: '/cloud/4c6e18/'},
                    {text: '06.基于云原生的大数据实时分析方案实践', link: '/cloud/4c7e18/'},
                    {text: '07.一文读懂 Serverless 的起源、发展和落地实践', link: '/cloud/4c8e18/'},
                    {text: '08.传统IT架构转型，从云原生平台到微服务应用构建', link: '/cloud/4c9e18/'},
                    {text: '09.应用的交付形态-云原生应用交付的过去、现在与未来', link: '/cloud/4c10e18/'},
                    {text: '10.阿里巴巴服务网格技术三位一体战略背后的思考与实践', link: '/cloud/4c11e18/'},
                ],
            },
            {
                text: '物联网',
                link: '/iot/',
                items: [
                    {
                        text: 'MQTT',
                        items: [
                            {text: '00.MQTT 协议', link: '/mqtt/fd34e7/'},
                            {text: '01.MQTT Broker 比较与选型——开源与商业服务器服务对比', link: '/mqtt/1222ced6/'},
                            {text: '03.Docker搭建MQTT服务器', link: '/mqtt/12xced6/'},
                            {text: '04.MQTT.fx', link: '/mqtt/12ced6/'},
                            {text: '05.MQTTX使用指南', link: '/mqtt/1dced6/'},
                            {text: '06.MQTT应用开发- MQTT客户端开发', link: '/mqtt/15ced6/'},
                        ],
                    },
                    {
                        text: 'EMQ',
                        items: [
                            {text: '01.EMQ X+Kafka高性能物联网MQTT消息处理方案', link: '/emq/198ced6/'},
                            {text: '02.车联网平台百万级消息吞吐架构设计', link: '/emq/2908ced6/'},
                            {text: '03.千万级车联网MQTT消息平台架构设计', link: '/emq/14235d/'},
                            {text: '04.车联网TSP平台场景中的MQTT主题设计', link: '/emq/21fcc47/'},
                            {text: '05.EMQ车路协同', link: '/emq/dc662b8/'},
                            {text: '06.EMQX桥接数据到Kafka', link: '/emq/xc6262b8/'},
                        ],
                    },
                ],
            },
            {
                text: '车路协同自动驾驶',
                link: '/cvis/',
                items: [
                    {
                        text: '车路协同',
                        items: [
                            {text: '00.万字详解车路协同、C-V2X通信协议', link: '/c-v2x/f232234e7/'},
                        ],
                    },
                ],
            },
            {
                text: '人工智能',
                link: '/ais/',
                items: [
                    {
                        text: '机器学习',
                        items: [
                            {text: '00.机器学习和深度学习的区别', link: '/ai/4a1e18/'},
                            {text: '01.自动驾驶、无人驾驶、车联网笔记分享', link: '/ai/4bw1e18/'},
                            {text: '02.深度学习思维导图、人工智能思维导图、深度学习综述', link: '/ai/4cd1e18/'},
                        ],
                    },
                ],
            },
            {
                text: '项目管理',
                link: '/project/',
                items: [
                    {
                        text: '研发规范',
                        items: [
                            {text: '00.IDEA注释和方法模板', link: '/standard/fffaf6/'},
                            {text: '01.大型项目的 Gitflow 实践', link: '/standard/5e8efc/'},
                            {text: '02.项目README规范', link: '/standard/efac91/'},
                            {text: '03.关于研发规范化的一些思考', link: '/standard/dddf6c/'},
                            {text: '04.代码仓库的创建规范', link: '/standard/faf9a8/'},
                            {text: '05.Java命名规范', link: '/standard/e08015/'},
                            {text: '06.代码开发规范', link: '/standard/c3cb2e/'},
                            {text: '07.接口设计规范', link: '/standard/a7482d/'},
                            {text: '08.数据库的设计规范', link: '/standard/d1a40a/'},
                        ],
                    },
                    {
                        text: '团队管理',
                        items: [
                            {text: '01.管理认知：程序员要不要做技术管理？', link: '/team/cc93e5/'},
                            {text: '02.管理规划：目标是什么？', link: '/team/ae6d0a/'},
                            {text: '03.团队建设：怎么带队伍？', link: '/team/780a4c/'},
                            {text: '04.任务管理：如何跟踪执行？', link: '/team/5406fa/'},
                            {text: '05.管理沟通：管理的必修课！', link: '/team/a6cc85/'},
                            {text: '06.大厂晋升指南-材料准备,PPT写作和现场答辩', link: '/team/dc6d6f/'},
                            {text: '07.大厂晋升指南-上', link: '/team/2c533e/'},
                            {text: '08.大厂晋升指南-中', link: '/team/3a9f32/'},
                            {text: '09.大厂晋升指南-下', link: '/team/b2b7be/'},
                            {text: '10.IT技术人的知识体系', link: '/team/86a3e8/'},
                            {text: '12.项目管理', link: '/team/4fd6d9/'},
                            {text: '14.如何做工作汇报', link: '/team/4d63c2/'},
                        ],
                    },
                ],
            },
            {
                text: '技术',
                link: '/technology/',
                items: [
                    {
                        text: '技术',
                        items: [
                            {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
                            {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
                            {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
                            {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
                            {text: '计算机网络', link: '/network/41f871/'},
                        ],
                    },
                    {
                        text: '运维',
                        items: [
                            {text: '00.Linux系统初始化', link: '/devops/5c1e18/'},
                            {text: '01.vim常用命令', link: '/devops/8c1e18/'},
                            {text: '02.Linux打包与压缩', link: '/devops/6c1e18/'},
                            {text: '03.防火墙firewalld概述及常用操作', link: '/devops/7c1e18/'},
                            {text: '04.nginx安装', link: '/devops/nginx18/'},
                        ],
                    },
                ],
            },
            {
                text: '更多',
                link: '/more/',
                items: [
                    {text: '学习', link: '/pages/f2a556/'},
                    {text: '面试', link: '/pages/aea6571b7a8bae86/'},
                    {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
                    {text: '实用技巧', link: '/pages/baaa02/'},
                    {text: '友情链接', link: '/friends/'},
                ],
            },
            {text: '关于', link: '/about/'},
            {
                text: '收藏',
                link: '/pages/beb6c0bd8a66cea6/',
            },
            {
                text: '索引',
                link: '/archives/',
                items: [
                    {text: '分类', link: '/categories/'},
                    {text: '标签', link: '/tags/'},
                    {text: '归档', link: '/archives/'},
                ],
            },
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/logo.png', // 导航栏logo
        repo: 'lovebetterworld/lovebetterworld', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        editLinks: false, // 启用编辑
        editLinkText: '编辑',
        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',
        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: '爱是与世界平行', // 必需
            link: 'https://www.lovebetterworld.com/', // 可选的
        },
        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: '/img/touxiang.jpg',
            name: '爱是与世界平行',
            slogan: '拼命铲屎官',
        },
        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: {
            // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:1090239782@qq.com',
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://gitee.com/AiShiYuShiJiePingXing',
                },
                {
                    iconClass: 'icon-erji',
                    title: '听音乐',
                    link: 'https://music.163.com/#/playlist?id=755597173',
                },
            ],
        },
        // 页脚信息
        footer: {
            createYear: 2022, // 博客创建年份
            copyrightInfo:
                '爱是与世界平行 | <a href="https://www.lovebetterworld.com/" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
        },
        // 自定义hmtl(广告)模块
        htmlModules
    },
    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}], //favicons，资源放在public文件夹
        [
            'meta',
            {
                name: 'keywords',
                content: '博客,个人技术博客，后端，运维，车路协同，智慧交通，智慧城市',
            },
        ],
        ['meta', {name: 'baidu-site-verification', content: '7F55weZDDc'}], // 百度统计的站长验证（你可以去掉）
        ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    ],


    // 插件配置
    plugins: <UserPlugins>[

        'vuepress-plugin-baidu-autopush', // 百度自动推送

        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: baiduCode,
            },
        ],
        // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
        'fulltext-search',
        [
            'one-click-copy', // 代码块复制按钮
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],
        [
            'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            {
                settings: {
                    jsfiddle: false, // 是否显示 jsfiddle 链接
                    codepen: true, // 是否显示 codepen 链接
                    horizontal: false, // 是否展示为横向样式
                },
            },
        ],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],
        [
            'vuepress-plugin-comment', // 评论
            {
                choosen: 'gitalk',
                options: {
                    clientID: 'a6e1355287947096b88b',
                    clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
                    repo: 'blog-gitalk-comment', // GitHub 仓库
                    owner: 'xugaoyi', // GitHub仓库所有者
                    admin: ['xugaoyi'], // 对仓库有写权限的人
                    // distractionFreeMode: true,
                    pagerDirection: 'last', // 'first'正序 | 'last'倒序
                    id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                    title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                    labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                    body:
                        '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            },
        ],
    ],

    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },
    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.ts',
        '.vuepress/config/htmlModules.ts',
    ]
})
