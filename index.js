/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var html2jade = require('html2jade');
var root = fis.project.getProjectPath();

module.exports = function(content){

    html2jade.convertHtml(content, {}, function (err, jade) {
        if (err) {
            throw err;
            return;
        }
        content = jade;
    });

  return content;
};
