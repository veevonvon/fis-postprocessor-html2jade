fis-postprocessor-html2jade
===============


## 功能
 - jade编译为html（使用插件fis-parser-jade）
 - 将html模版后处理为jade（使用插件fis-postprocessor-html2jade）

## 用法
postprocessor : fis.plugin('html2jade',{})

### 安装插件

    $ npm install -g fis-postprocessor-html2jade
    $ vi path/to/project/fis-conf.js

### 启用插件

```javascript
//file : path/to/project/fis-conf.js