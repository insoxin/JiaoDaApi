/**
 * Created by GuobaoYang on 15/3/8.
 */
var config = {
    queryUrl:"http://queue.scuinfo.com",

    mongodbUrl:"mongodb://localhost/xxxx",

    querySecret:{

        appId:"99999999999999",
        appSecret:"dsgygb123456"

    },

    mysql:{
        'host':'127.0.0.1',
        'user':'root',
        'password':'xxxx',
        'database':'xxxx'
    },

    urls:{
        "college" :"http://127.0.0.1/bjkbcxAction.do?oper=bjkb_lb",
        "teacherPost":"http://127.0.0.1/lskbcxAction.do?oper=kbtjcx",
        "teacherGet":"http://127.0.0.1/lskbcxAction.do?oper=lskb_lb",
        "courseGet":"http://127.0.0.1/kclbAction.do",
        "coursePost":"http://127.0.0.1/kclbAction.do?oper=kclb",
        "courseSearch":"http://127.0.0.1/courseSearchAction.do",
        "courseDetailCount":"http://127.0.0.1/courseSearchAction.do?&showColumn=xss%23%D1%A7%C9%FA%CA%FD&pageNumber=0&actionType=1",
        "courseDetail":"http://127.0.0.1/courseSearchAction.do?showColumn=kkxsjc%23%BF%AA%BF%CE%CF%B5&showColumn=kch%23%BF%CE%B3%CC%BA%C5&showColumn=kcm%23%BF%CE%B3%CC%C3%FB&showColumn=kxh%23%BF%CE%D0%F2%BA%C5&showColumn=xf%23%D1%A7%B7%D6&showColumn=kslxmc%23%BF%BC%CA%D4%C0%E0%D0%CD&showColumn=skjs%23%BD%CC%CA%A6&showColumn=zcsm%23%D6%DC%B4%CE&showColumn=skxq%23%D0%C7%C6%DA&showColumn=skjc%23%BD%DA%B4%CE&showColumn=xqm%23%D0%A3%C7%F8&showColumn=jxlm%23%BD%CC%D1%A7%C2%A5&showColumn=jasm%23%BD%CC%CA%D2&showColumn=bkskrl%23%BF%CE%C8%DD%C1%BF&showColumn=xss%23%D1%A7%C9%FA%CA%FD&showColumn=xkxzsm%23%D1%A1%BF%CE%CF%DE%D6%C6%CB%B5%C3%F7&actionType=1",
        "scoreAll":"http://127.0.0.1/gradeLnAllAction.do?type=ln&oper=lnFajhKcCjInfo",
        "scorePass":"http://127.0.0.1/gradeLnAllAction.do?type=ln&oper=qbinfo",
        "scoreFail":"http://127.0.0.1/gradeLnAllAction.do?type=ln&oper=bjg",
        "logout":"http://127.0.0.1/logout.do",
        "major":"http://127.0.0.1/xkAction.do?actionType=6",
        'exam':"http://127.0.0.1/ksApCxAction.do?oper=getKsapXx",
        "classroomFreeGet":"http://127.0.0.1/xszxcxAction.do?oper=xszxcx_lb",
        "classroomFreePost":"http://127.0.0.1/xszxcxAction.do?oper=tjcx",
        "building":"http://127.0.0.1/xszxcxAction.do?oper=ld"
    },
    params:{
        "term" :"2014-2015-2-1",
        "teacherListPageSize":300,
        "courseListPageSize":300,
        "currentCoursePageSize":50
    },

};

module.exports = config;