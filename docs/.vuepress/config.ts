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
            description: '技术、产品、运维博客，不想成为某一类，只想成为某一个',
        }
    },
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: '⭐⭐⭐热门',
                link: '/hot/',
                items: [
                    {text: '流媒体', link: '/hot/51d349/'},
                    {text: '物联网', link: '/hot/67a5c9/'},
                    {text: '看热搜', link: '/hot/4ace57/'},
                    {text: '产品列表', link: '/hot/4cce18/'},
                    {text: '技术相关', link: '/hot/55dcd9/'},
                    {text: '智慧城市', link: '/hot/f36858/'},
                    {text: '代码质量', link: '/hot/8525be/'},
                    {text: '监控平台', link: '/hot/870e3c/'},
                    {text: '搭建网站', link: '/hot/ae30fe/'},
                    {text: '可视化大屏', link: '/hot/bcea3f/'},
                    {text: 'PostgreSQL', link: '/hot/e8c4ae/'},
                    {text: '常用兼职网站', link: '/hot/5d21ce/'},
                    {text: '优质资源分享', link: '/hot/4df664/'},
                    {text: '快速开发平台', link: '/hot/0d5cb5/'},
                    {text: '简历工作相关', link: '/hot/b665ff/'},
                    {text: '万字详解Apollo', link: '/apollo/apollo01/'},
                    {text: '搭建博客或网站', link: '/hot/7591eb/'},
                    {text: '接口API管理工具', link: '/hot/389faf/'},
                    {text: '为什么你应该写博客', link: '/hot/6726b8/'},
                ],
            },
			{
                text: '面试题',
                link: '/interview/',
                items: [
                    {
                        text: '面试题',
                        items: [
                            {text: '00.Java基础', link: '/interview/java-base/'},
                            {text: '01.Java并发', link: '/interview/concurrent/'},
                            {text: '02.JUC线程池', link: '/interview/JUCTheadPool/'},
                            {text: '05.Java IO', link: '/interview/java-io/'},
                            {text: '06.RPC', link: '/interview/rpc/'},
                            {text: '07.Dubbo', link: '/interview/dubbo/'},
                            {text: '08.多线程', link: '/interview/thread08/'},
                            {text: '10.JVM和调优', link: '/jvm/jvm10/'},
                            {text: '15.Java新版本', link: '/interview/interview15/'},
                            {text: '18.数据结构和算法', link: '/interview/interview18/'},
                            {text: '20.数据库和MySQL', link: '/interview/interview20/'},
                            {text: '21.Redis', link: '/interview/interview21/'},
                            {text: '22.计算机网络', link: '/interview/interview22/'},
                            {text: '23.架构', link: '/interview/interview23/'},
                            {text: '24.微服务', link: '/interview/interview24/'},
                            {text: '25.Docker', link: '/interview/interview25/'},
                            {text: '26.K8S面试题', link: '/interview/interview26/'},
                            {text: '27.设计模式面试题', link: '/interview/interview27/'},
                            {text: '28.分布式面试题', link: '/interview/interview28/'},
                            {text: '40.Java源码相关', link: '/interview/interview40/'},
                            {text: '50.数据结构与算法系列', link: '/interview/interview50/'},
                            {text: '99.其他', link: '/interview/interview99/'},
                        ],
                    },
					{
                        text: '计算机网络',
                        items: [
                            {text: '00.OSI和TCPIP网络分层模型详解', link: '/network/network01/'},
                            {text: '01.HTTP VS HTTPS（应用层）', link: '/network/network02/'},
                            {text: '02.HTTP 1·0 vs HTTP 1·1（应用层）', link: '/network/network03/'},
                            {text: '03.谢希仁老师的《计算机网络》内容总结', link: '/network/network04/'},
                            {text: '04.计算机网络常见知识点&面试题', link: '/network/network05/'},
                            {text: '05.常用通讯协议详解', link: '/network/network06/'},
                        ],
                    },
                ],
            },
            {
                text: 'Web及WebGis',
                link: '/web/',
                items: [
                    {
                        text: '前端文章',
                        items: [
                            {text: '01.Npm、Yarn手册', link: '/yarn/yarn01/'},
                        ],
                    },
                    {
                        text: 'WebGis',
                        items: [
                            {text: '01.WebGis笔记', link: '/webgis/webgis01/'},
                            {text: '02.坐标转换工具类', link: '/webgis/gisutil/'},
                            {text: '03.GIS投影与坐标系', link: '/webgis/webgis03/'},
                            {text: '10.开源WebGIS架构', link: '/webgis/webgis10/'},
                        ],
                    }
                ],
            },
			{
                text: '后端',
                link: '/Java/',
                items: [
					{
                        text: 'JVM系列',
                        items: [
                            {text: '01.JVM总结', link: '/JVM/JVM01/'},
                            {text: '02.GC性能优化', link: '/GC/GC01/'},
                            {text: '10.JVM系列', link: '/JVM/jvm10/'},
                            {text: '11.OutOfMemoryError系列', link: '/jvm/OutOfMemoryError/'},
                            {text: '04.JVM系列文章', link: '/JVM/JVM99/'},
                        ],
                    },
                    {
                        text: 'Java',
                        items: [
                            {text: '01.Java操作Yaml文件', link: '/Java/j1f871/'},
                            {text: '02.Java中使用protobuf', link: '/Java/java02/'},
                            {text: '04.读取resources目录下的文件路径', link: '/Java/java04/'},
                            {text: '20.Java8 Stream', link: '/Java/8stream/'},
                            {text: '30.JavaIO讲解', link: '/Java/io41f871/'},
                            {text: '40.Java线程池解析', link: '/Java/threadpool/'},
                        ],
                    },
                    {
                        text: 'SpringBoot',
                        items: [
                            {text: '00.SpringBoot运维', link: '/SpringBoot/SpringBoot00/'},
                            {text: '01.SpringBoot参数传递', link: '/SpringBoot/SpringBoot01/'},
                            {text: '02.SpringBoot多线程', link: '/SpringBoot/SpringBoot02/'},
                            {text: '03.SpringBoot整合中间件', link: '/SpringBoot/SpringBoot03/'},
                        ],
                    },
                ],
            },
			{
                text: '运维',
                link: '/docker/',
                items: [
                    {
                        text: 'Linux Shell',
                        items: [
                            {text: '01.Linux手册', link: '/linux/linux/'},
                            {text: '02.Shell手册', link: '/linux/shell/'},
                            {text: '03.Nginx手册', link: '/linux/nginx/'},
                            {text: '04.Jenkins手册', link: '/linux/jenkins/'},
                        ],
                    },
                    {
                        text: 'Docker',
                        items: [
                            {text: 'Dockers底层技术', link: '/docker/docker07/'},
                            {text: 'Docker镜像操作手册', link: '/docker/docker-images/'},
                            {text: 'Docker-Compose手册', link: '/docker/compose01/'},
                        ],
                    },
                ],
            },
			{
                text: '大数据相关',
                link: '/bigdata/',
                items: [
                    {
                        text: '大数据',
                        items: [
                            {text: '01.理想汽车从 Hadoop 到云原生的演进与思考', link: '/bigdata/bigdata01/'},
                            {text: '02.大数据平台比较', link: '/bigdata/bigdata-02/'},
                            {text: '10.HBase知识手册', link: '/bigdata/HBase01/'},
                            {text: '11.Hive知识手册', link: '/bigdata/Hive01/'},
                            {text: '40.数据同步工具Sqoop', link: '/bigdata/Sqoop01/'},
                            {text: '41.数据同步工具DataX和DataWeb', link: '/bigdata/DataX01/'},
                            {text: '90.大数据平台搭建及集群规划', link: '/bigdata/bigdata90/'},
                            {text: '91.CDH集群离线部署', link: '/bigdata/cdh01/'},
                        ],
                    },
					{
                        text: '大数据架构',
                        items: [
                            {text: '01.实时数据平台设计', link: '/bigdata/framework01/'},
                            {text: '02.大数据分析平台搭建指南', link: '/bigdata/framework02/'},
                            {text: '03.爱奇艺大数据生态的实时化建设', link: '/bigdata/framework03/'},
                        ],
                    },
					{
                        text: '数据治理',
                        items: [
                            {text: '01.数据治理体系', link: '/bigdata/data-governance/'},
                            {text: '02.数据集成产品分析', link: '/bigdata/Data-integration/'}
                        ],
                    },
					{
                        text: '数据仓库',
                        items: [
                            {text: '01.数仓建设教程', link: '/bigdata/datahub01/'},
                            {text: '02.数据仓库开发', link: '/bigdata/datahub03/'},
                            {text: '03.数仓分层设计', link: '/bigdata/datahub04/'},
                            {text: '04.实时数仓建设', link: '/bigdata/datahub05/'},
                            {text: '05.数仓建设规范', link: '/bigdata/datahub06/'},
                            {text: '06.数仓开发过程', link: '/bigdata/datahub07/'},
                            {text: '07.离线+实时数仓建设方案', link: '/bigdata/datahub08/'},
                            {text: '10.数据质量建设', link: '/bigdata/datahub20/'}
                        ],
                    },
					{
                        text: '元数据管理',
                        items: [
                            {text: '01.元数据系统', link: '/bigdata/metadata01/'},
                            {text: '10.元数据治理平台Datahub', link: '/bigdata/metadata-daahub/'}
                        ],
                    },
                ],
            },
			{
                text: '物联网',
                link: '/iot/',
                items: [
                    {
                        text: 'MQTT',
                        items: [
                            {text: '00.MQTT协议', link: '/mqtt/fd34e7/'},
                            {text: '03.Docker搭建MQTT服务器', link: '/mqtt/12xced6/'},
                            {text: '07.MQTT主题设计开发实践', link: '/mqtt/ttkaced7/'},
                            {text: '10.MQTT和TCP协议的对比', link: '/mqtt/c5f6292/'},
                            {text: '12.MQTT协议的消息传递可靠性和持续性', link: '/mqtt/mkaced9/'},
                        ],
                    },
                    {
                        text: 'EMQX',
                        items: [
                            {text: '01.EMQX+Kafka 性能物联网MQTT消息处理方案', link: '/emq/198ced6/'},
                            {text: '02.车联网平台百万级消息吞吐架构设计', link: '/emq/2908ced6/'},
                            {text: '03.千万级车联网MQTT消息平台架构设计', link: '/emq/14235d/'},
                            {text: '04.车联网TSP平台场景中的MQTT主题设计', link: '/emq/21fcc47/'},
                            {text: '05.EMQ车路协同', link: '/emq/dc662b8/'},
                            {text: '06.车联网中MQTT心跳保活与远程唤醒设计', link: '/emq/emqx06/'},
                            {text: '16.EMQX持久化至数据库及Kafka', link: '/emq/emqx16/'},
                            {text: '19.EMQ X持久化PostgreSQL数据持久化', link: '/emq/dbc6262b8/'},
                        ],
                    },
                    {
                        text: '物联网平台',
                        items: [
                            {text: '00.开源物联网平台建设、参考解决方案', link: '/platform/wlw8ced6/'},
                            {text: '01.物联网应用层协议选择和分析', link: '/platform/wl1w8ced6/'},
                            {text: '03.腾讯物联网平台学习', link: '/platform/tx8ced6/'},
                            {text: '04.物联网平台设计学习', link: '/platform/stw8ced6/'},
                            {text: '05.规则引擎', link: '/platform/rule8ced6/'},
                            {text: '06.物模型', link: '/platform/moe8ced6/'},
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
                            {text: '01.MySQL运维', link: '/mysql/mysql01/'},
                            {text: '02.MySQL数据表优化设计', link: '/mysql/mysql02/'},
                            {text: '03.MySQL常用函数汇总', link: '/mysql/mysql03/'},
                            {text: '04.MySQL规范', link: '/mysql/mysql04/'},
                        ],
                    },
                    {
                        text: 'PostgreSQL',
                        items: [
                            {text: '00.PostGIS总结', link: '/postgresql/4de1e18/'},
                            {text: '01.PostgreSQL自动类型转换', link: '/postgresql/6p21e18/'},
                            {text: '02.PostGis操作', link: '/postgresql/42e1e18/'},
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
                            {text: '40.Redis九种数据类型和应用场景', link: '/redis/redis40/'},
                        ],
                    },
					{
                        text: 'TDengine',
                        items: [
                            {text: '01.TDengine系列教程', link: '/TDengine/TDengine01/'},
                            {text: '02.TDengine系列教程', link: '/TDengine/TDengine02/'},
                        ],
                    },
                ],
            },
            {
                text: '消息队列',
                link: '/mq/',
                items: [
                    {
                        text: '消息队列',
                        items: [
                            {text: '01.消息队列使用场景', link: '/mq/mq01/'},
                            {text: '02.事务消息如何实现？', link: '/mq/mq02/'},
                            {text: '03.消息消费的2种方式：pull方式、push方式，如何选择？', link: '/mq/mq03/'},
                            {text: '04.如何确保消息消息至少被成功消费一次？', link: '/mq/mq04/'},
                            {text: '05.如何确保消息消费的幂等性？', link: '/mq/mq05/'},
                            {text: '06.顺序消息如何实现？', link: '/mq/mq06/'},
                            {text: '10.消息队列原理和选型', link: '/mq/mq10/'},
                            {text: '11.消息队列对比', link: '/mq/mq11/'},
                        ],
                    },
					{
                        text: 'RabbitMQ',
                        items: [
                            {text: '01.RabbitMQ总结', link: '/RabbitMQ/RabbitMQ01/'},
                            {text: '02.RabbitMQ（一）概述', link: '/RabbitMQ/RabbitMQ02/'},
                            {text: '03.RobbitMQ（二）消息应答', link: '/RabbitMQ/RabbitMQ03/'},
                            {text: '04.RabbitMQ（三）持久化', link: '/RabbitMQ/RabbitMQ04/'},
                            {text: '05.RabbitMQ（四）发布确认', link: '/RabbitMQ/RabbitMQ05/'},
                            {text: '06.RabbitMQ（五）交换机', link: '/RabbitMQ/RabbitMQ06/'},
                            {text: '07.RabbitMQ（六）死信队列', link: '/RabbitMQ/RabbitMQ07/'},
                            {text: '08.RabbitMQ（七）延迟队列', link: '/RabbitMQ/RabbitMQ08/'},
                            {text: '09.RabbitMQ（八）发布确认', link: '/RabbitMQ/RabbitMQ09/'},
                            {text: '10.RabbitMQ（九）其他知识', link: '/RabbitMQ/RabbitMQ10/'},
                        ],
                    },
                    {
                        text: 'RocketMQ',
                        items: [
                            {text: 'RocketMQ（一）概述', link: '/RocketMQ/RocketMQ01/'},
                            {text: 'RocketMQ（二）架构', link: '/RocketMQ/RocketMQ02/'},
                            {text: 'RocketMQ（三）安装', link: '/RocketMQ/RocketMQ03/'},
                            {text: 'RocketMQ（四）消息生产', link: '/RocketMQ/RocketMQ04/'},
                            {text: 'RocketMQ（五）消息存储', link: '/RocketMQ/RocketMQ05/'},
                            {text: 'RocketMQ（六）IndexFile', link: '/RocketMQ/RocketMQ06/'},
                            {text: 'RocketMQ（七）消息消费', link: '/RocketMQ/RocketMQ07/'},
                            {text: 'RocketMQ（八）订阅关系一致性', link: '/RocketMQ/RocketMQ08/'},
                            {text: 'RocketMQ（九）Offset处理', link: '/RocketMQ/RocketMQ09/'},
                            {text: 'RocketMQ（十）消息清理', link: '/RocketMQ/RocketMQ10/'},
                            {text: 'RocketMQ（十一）消息幂等', link: '/RocketMQ/RocketMQ11/'},
                            {text: 'RocketMQ（十二）消息堆积与消息延迟', link: '/RocketMQ/RocketMQ12/'},
                            {text: 'RocketMQ（十三）普通消息', link: '/RocketMQ/RocketMQ13/'},
                            {text: 'RocketMQ（十四）顺序消息', link: '/RocketMQ/RocketMQ14/'},
                            {text: 'RocketMQ（十五）延时消息', link: '/RocketMQ/RocketMQ15/'},
                            {text: 'RocketMQ（十六）事务消息', link: '/RocketMQ/RocketMQ16/'},
                            {text: 'RocketMQ（十七）批量消息', link: '/RocketMQ/RocketMQ17/'},
                            {text: 'RocketMQ（十八）消息过滤', link: '/RocketMQ/RocketMQ18/'},
                            {text: 'RocketMQ（十九）消息发送重试', link: '/RocketMQ/RocketMQ19/'},
                            {text: 'RocketMQ（二十）消息消费重试机制', link: '/RocketMQ/RocketMQ20/'},
                            {text: 'RocketMQ（二十一）死信队列', link: '/RocketMQ/RocketMQ21/'},
                            {text: 'RocketMQ（二十二）高级功能汇总', link: '/RocketMQ/RocketMQ22/'},
                            {text: 'RocketMQ（二十三）消息发送案例汇总', link: '/RocketMQ/RocketMQ23/'},
                            {text: 'RocketMQ（二十四）整合SpringBoot', link: '/RocketMQ/RocketMQ24/'},
                        ],
                    },
                ]
            },
			{
                text: '微服务',
                link: '/springcloud/',
                items: [
                    {
                        text: 'SpringCloud',
                        items: [
                            {text: '01.SpringCloud架构说明', link: '/SpringCloud/SpringCloud01/'},
                            {text: '02.自定义通用响应消息及统一异常处理', link: '/SpringCloud/SpringCloud03/'},
                            {text: '03.Nacos发现、配置管理', link: '/SpringCloud/SpringCloud03/'},
                            {text: '04.OpenFeign服务调用', link: '/SpringCloud/SpringCloud04/'},
                            {text: '05.Sentinel限流、熔断降级', link: '/SpringCloud/SpringCloud05/'},
                            {text: '06.Gateway路由转发', link: '/SpringCloud/SpringCloud06/'},
                            {text: '07.基于RBAC模型的系统权限设计', link: '/SpringCloud/SpringCloud07/'},
                            {text: '08.Gateway+OAuth2+JWT实现微服务统一认证授权', link: '/SpringCloud/SpringCloud08/'},
                            {text: '09.集成多数据源+Seata分布式事务+读写分离+分库分表', link: '/SpringCloud/SpringCloud09/'},
                            {text: '10.扩展MybatisPlus插件DataPermissionInterceptor实现数据权限控制', link: '/SpringCloud/SpringCloud010/'},
                            {text: '11.Skywalking实现链路追踪', link: '/SpringCloud/SpringCloud011/'},
                            {text: '12.微服务日志系统设计与实现', link: '/SpringCloud/SpringCloud012/'},
                            {text: '13.使用Redis分布式锁（Redisson）+自定义注解+AOP实现微服务重复请求控制', link: '/SpringCloud/SpringCloud013/'},
                            {text: '14.使用Spring Security OAuth2实现单点登录(SSO)系统', link: '/SpringCloud/SpringCloud014/'},
                            {text: '15.XXL-JOB分布式任务调度平台', link: '/SpringCloud/SpringCloud015/'},
                            {text: '16.使用Actuator（Micrometer）+Prometheus+Grafana实现完整的微服务监控', link: '/SpringCloud/SpringCloud016/'},
                            {text: '17.SpringCloud+Docker+k8s实现微服务集群打包部署-打包配置 ', link: '/SpringCloud/SpringCloud017/'},
                        ],
                    },
					{
                        text: 'SpringCloud Alibaba',
                        items: [
                            {text: 'Spring Cloud Alibaba 微服务实战', link: '/SpringCloud/Alibaba99/'},
                        ],
                    },
                ]
            },
			{
                text: '架构',
                link: '/gbf/',
                items: [
                    {
                        text: 'Java高并发系列',
                        items: [
                            {text: '01.Java高并发系列', link: '/gbf/gbf01/'},
                            {text: '02.JUC系列', link: '/gbf/juc01/'},
                            {text: '03.线程池系列', link: '/ThreadPool/ThreadPool01/'},
                            {text: '04.Google Guava系列', link: '/guava/guava01/'},
                            {text: '05.高并发案例', link: '/gbf/gbf-demo01/'},
                        ],
                    },
                    {
                        text: '分布式系列',
                        items: [
                            {text: '01.Redis实现分布式锁', link: '/fbs/fbs_redis01/'},
                            {text: '02.分布式事务', link: '/fbs/fbs02/'},
                            {text: '03.分布式唯一ID生成企业级方案', link: '/fbs/fbs03/'},
                            {text: '10.什么是分布式事务？', link: '/fbs/fbs10/'},
                            {text: '11.CAP原则？', link: '/fbs/fbs11/'},
                            {text: '12.Base理论', link: '/fbs/fbs12/'},
                        ],
                    },
					{
                        text: 'RPC',
                        items: [
                            {text: '01.Thrift基本概念', link: '/Thrift/Thrift01/'},
                            {text: '02.gRPC', link: '/RPC/gRPC01/'},
                        ],
                    },
                ],
            },  
            {
                text: '项目管理',
                link: '/standard/',
                items: [
                    {
                        text: '研发规范',
                        items: [
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
                            {text: '07.大厂晋升指南', link: '/team/2c533e/'},
                            {text: '10.IT技术人的知识体系', link: '/team/86a3e8/'},
                            {text: '12.项目管理', link: '/team/4fd6d9/'},
                            {text: '14.如何做工作汇报', link: '/team/4d63c2/'},
                        ],
                    },
                ],
            },
            {
                text: '关于我',
                link: '/life/',
                items: [
                    {
                        text: '生活',
                        items: [
							{text: '⭐关于我⭐', link: '/life/aboutme/'},
                            {text: '01.生活那些事儿', link: '/life/life/'},
                        ],
                    },
                ]
            },
            {
                text: '工具及其他索引',
                link: '/archives/',
                items: [
					{text: '分类', link: '/categories/'},
                    {text: '标签', link: '/tags/'},
                    {text: '归档', link: '/archives/'},
                    {text: '01.IDEA使用手册', link: '/tool/idea/'},
                    {text: '02.Typora及Markdown手册', link: '/tool/Typora/'},
                    {text: '03.Git使用手册', link: '/tool/git/'},
                    {text: '11.常用好用软件整理', link: '/tool/software/'},
                    {text: '12.开源项目创作指南', link: '/tool/open/'},
                    {text: '13.推荐一些常用工具箱', link: '/tool/tools/'},
                    {text: '40.推荐博客', link: '/tool/blog/'}
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
            slogan: '铲屎官',
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
            createYear: 2021, // 博客创建年份
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
                content: '博客，个人技术博客，后端，运维，车路协同，智慧交通，智慧城市',
            },
        ],
        ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    ],
    // 插件配置
    plugins: <UserPlugins>[
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
