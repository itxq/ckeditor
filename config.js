/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
    config.allowedContent = true;
    // 加载的插件列表
    config.extraPlugins = ['autosave', 'image2', 'tableresize', 'html5video'];
    // 语言设置
    config.language = 'zh-cn';
    // 皮肤设置
    config.skin = 'moono-lisa';
    // 颜色设置
    config.uiColor = '#F1F1F1';
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
    // 代码编辑器设置
    config.pbckcode = {
        // An optional class to your pre tag.
        cls: '',
        // The syntax highlighter you will use in the output view
        highlighter: 'SYNTAX_HIGHLIGHTER',
        
        // An array of the available modes for you plugin.
        // The key corresponds to the string shown in the select tag.
        // The value correspond to the loaded file for ACE Editor.
        // The theme of the ACE Editor of the plugin.
        theme: 'tomorrow_night',
        
        // Tab indentation (in spaces)
        tab_size: '4',
        keystrokes: [
            [CKEDITOR.ALT + 121, 'toolbarFocus'], //获取焦点
            [CKEDITOR.ALT + 122, 'elementsPathFocus'], //元素焦点
            [CKEDITOR.SHIFT + 121, 'contextMenu'], //文本菜单
            [CKEDITOR.CTRL + 90, 'undo'], //撤销
            [CKEDITOR.CTRL + 89, 'redo'], //重做
            [CKEDITOR.CTRL + CKEDITOR.SHIFT + 90, 'redo'], //
            [CKEDITOR.CTRL + 76, 'link'], //链接
            [CKEDITOR.CTRL + 66, 'bold'], //粗体
            [CKEDITOR.CTRL + 73, 'italic'], //斜体
            [CKEDITOR.CTRL + 85, 'underline'], //下划线
            [CKEDITOR.ALT + 109, 'toolbarCollapse']
        ],
        //设置快捷键 可能与浏览器快捷键冲突 plugins/keystrokes/plugin.js.
        blockedKeystrokes: [
            CKEDITOR.CTRL + 66,
            CKEDITOR.CTRL + 73,
            CKEDITOR.CTRL + 85
        ]
    };
};
