/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
    config.allowedContent = true;
    // 加载的插件列表
    config.extraPlugins = ['autosave', 'image2', 'tableresize', 'html5video', 'audio', 'spacingsliders', 'pbckcode'];
    // 语言设置
    config.language = 'zh-cn';
    // 皮肤设置
    config.skin = 'bootstrapck';
    // 颜色设置
    config.uiColor = '#f1f1f1';
    // Z-Index 设置
    config.baseFloatZIndex = 9999999;
    // 允许折叠
    config.toolbarCanCollapse = true;
    // 表单自动更新
    config.autoUpdateElement = true;
    // 高度设置
    config.height = 280;
    // jquery CDN
    config.jq_cdn = '//upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.3.min.js';
    // 工具栏分组设置
    config.toolbarGroups = [
        {name: 'document', groups: ['mode', 'pbckcode', 'document', 'doctools']},
        {name: 'clipboard', groups: ['clipboard', 'undo']},
        {name: 'styles', groups: ['styles', 'spacingsliders']},
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
        {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
        {name: 'links', groups: ['links']},
        {name: 'insert', groups: ['audio', 'insert']},
        {name: 'colors', groups: ['colors']},
        {name: 'others', groups: ['others']},
        {name: 'forms', groups: ['forms']},
        {name: 'tools', groups: ['tools']},
        {name: 'about', groups: ['about']}
    ];
    // 禁用的按钮
    config.removeButtons = 'Language,Save,About';
    // 禁用的插件
    config.removePlugins = 'image';
    // 字体设置
    config.font_names = '宋体/SimSun;新宋体/NSimSun;仿宋/FangSong;楷体/KaiTi;仿宋_GB2312/FangSong_GB2312;' +
        '楷体_GB2312/KaiTi_GB2312;黑体/SimHei;华文细黑/STXihei;华文楷体/STKaiti;华文宋体/STSong;华文中宋/STZhongsong;' +
        '华文仿宋/STFangsong;华文彩云/STCaiyun;华文琥珀/STHupo;华文隶书/STLiti;华文行楷/STXingkai;华文新魏/STXinwei;' +
        '方正舒体/FZShuTi;方正姚体/FZYaoti;细明体/MingLiU;新细明体/PMingLiU;微软雅黑/Microsoft YaHei;微软正黑/Microsoft JhengHei;' +
        'Arial Black/Arial Black;' + config.font_names;
    // 是否禁用表格编辑功能
    config.disableNativeTableHandles = false;
    // 是否禁用 图片和表格 的改变大小的功能
    config.disableObjectResizing = false;
};
