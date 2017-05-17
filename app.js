'use strict'

const views = require('koa-views')
const path = require('path')
const Koa = require('koa')
const logger = require('koa-logger')
const staticServe = require('koa-static')
const app = new Koa()

app.use(logger())
app.use(staticServe(__dirname + '/public'))
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

app.use(async (ctx) => {
    if (ctx.url == '/index') {
        let opts = {
            // keywordsID:[],
            // totalID:[],
            // ruleName:[],
            // keywords:[],
            // replyID:[],
            // reply:[],
            keywordsID:[
                [2],
                [0,1],
                [6,7],
                [5,3,4],
                [11]
            ],
            totalID: [1124,1013,1012,1101,1010],
            ruleName:['ds','asas','qdqw','qwdq','trtr'],
            keywords:[
                ['dwqwd'],
                ['键字1','键字2'],
                ['键字3','键字4'],
                ['键字5','键字6','键字7'],
                ['rere']
            ],
            replyID:[
                [2000],
                [2550],
                [3570],
                [3590],
                [2660]
            ],
            reply:[
                ['你哈'],
                ['傻笑'],
                ['http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg'],
                ['http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg'],
                ['文档']
            ],
            sucaikuImgUrl:['http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg',
                           'http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg',
                            'http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg']

        }
        
        return ctx.render('index',opts)
    } else if (ctx.url == '/index2.ejs') {
        let opts = {
            addedReply: 'hello!',
            showImgURL: 'http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg',
            // sucaikuImgUrl:["//192.168.1.109:3030/image/ba59a968afff7.jpg"]
            sucaikuImgUrl:['http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg',
                'http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg',
                'http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg'
            ]
        }

        return ctx.render('index2.ejs',opts)
    } else if (ctx.url == '/index3') {
        let opts = {
            menuTittle:[['hello'],['hello2','wenzi','zhaopian','tuwen','wenzi'],[]],
            replyCon:[['http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg'],
                        ['文字回复', 'http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg',
                        {
                            tittle:'标题',
                            des:'描述描述',
                            img:'http://img05.tooopen.com/images/20150830/tooopen_sy_140703593676.jpg',
                            url:'www.baidu.com'
                        },
                        'wenzi2'],
                        []]
                    }

        return ctx.render('index3',opts)
    } else {
        // return ctx.body = 'hello'
    }
})

app.listen(3000)
console.log('listening on 3000')