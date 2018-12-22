﻿CKEDITOR.plugins.add('audio', {
    lang: 'zh-cn',
    icons: 'audio',
    getPlaceholderCss: function () {
        return 'img.cke_audio' +
            '{' +
            'background-image: url(' + CKEDITOR.getUrl(this.path + 'images/placeholder.png') + ');' +
            'background-position: center center;' +
            'background-repeat: no-repeat;' +
            'background-color:gray;' +
            'border: 1px solid #a9a9a9;' +
            'width: 80px;' +
            'height: 80px;' +
            '}';
    },
    
    onLoad: function () {
        // v4
        if (CKEDITOR.addCss) {
            CKEDITOR.addCss(this.getPlaceholderCss());
        }
    },
    
    init: function (editor) {
        var lang = editor.lang.audio;
        
        CKEDITOR.dialog.add('audio', this.path + 'dialogs/audio.js');
        
        editor.addCommand('audio', new CKEDITOR.dialogCommand('audio'));
        
        editor.ui.addButton('audio', {
            label: lang.toolbar,
            command: 'audio',
            icon: this.path + 'icons/audio.png',
            toolbar: 'audio',
        });
        
        // If the "menu" plugin is loaded, register the menu items.
        if (editor.addMenuItems) {
            editor.addMenuItems({
                audio: {
                    label: lang.properties,
                    command: 'audio',
                    group: 'insert'
                }
            });
        }
        
        editor.on('doubleclick', function (evt) {
            var element = evt.data.element;
            
            if (element.is('img') && element.data('cke-real-element-type') == 'audio')
                evt.data.dialog = 'audio';
        });
        
        // If the "contextmenu" plugin is loaded, register the listeners.
        if (editor.contextMenu) {
            editor.contextMenu.addListener(function (element, selection) {
                if (element && element.is('img') && !element.isReadOnly()
                    && element.data('cke-real-element-type') == 'audio')
                    return {audio: CKEDITOR.TRISTATE_OFF};
            });
        }
        
        // Add special handling for these items
        CKEDITOR.dtd.$empty['cke:source'] = 1;
        CKEDITOR.dtd.$empty['source'] = 1;
        
        editor.lang.fakeobjects.audio = lang.fakeObject;
    }, //Init
    
    afterInit: function (editor) {
        var dataProcessor = editor.dataProcessor,
            htmlFilter = dataProcessor && dataProcessor.htmlFilter,
            dataFilter = dataProcessor && dataProcessor.dataFilter;
        
        // dataFilter : conversion from html input to internal data
        dataFilter.addRules({
            elements: {
                $: function (realElement) {
                    if (realElement.name == 'audio') {
                        realElement.name = 'cke:audio';
                        for (var i = 0; i < realElement.children.length; i++) {
                            if (realElement.children[i].name == 'source')
                                realElement.children[i].name = 'cke:source'
                        }
                        
                        var fakeElement = editor.createFakeParserElement(realElement, 'cke_audio', 'audio', false),
                            fakeStyle = fakeElement.attributes.style || '';
                        
                        var width = realElement.attributes.width,
                            height = realElement.attributes.height,
                            poster = realElement.attributes.poster;
                        
                        if (typeof width != 'undefined')
                            fakeStyle = fakeElement.attributes.style = fakeStyle + 'width:' + CKEDITOR.tools.cssLength(width) + ';';
                        
                        if (typeof height != 'undefined')
                            fakeStyle = fakeElement.attributes.style = fakeStyle + 'height:' + CKEDITOR.tools.cssLength(height) + ';';
                        
                        if (poster)
                            fakeStyle = fakeElement.attributes.style = fakeStyle + 'background-image:url(' + poster + ');';
                        
                        return fakeElement;
                    }
                }
            }
        });
    }
});
