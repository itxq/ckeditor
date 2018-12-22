// needed js files
var js = {
    ace: 'ace.js',
    aceExtWhitespace: 'ext-whitespace.js',
    pbSyntaxHighlighter: CKEDITOR.plugins.getPath('pbckcode') + 'dialogs/PBSyntaxHighlighter.js'
};

var commandName = 'pbckcode';

/**
 * Plugin definition
 */
CKEDITOR.plugins.add('pbckcode', {
    icons: 'pbckcode',
    hidpi: true,
    lang: ['fr', 'en', 'ru', 'zh-cn'],
    init: function (editor) {
        // if there is no user settings
        // create an empty object
        if (editor.config.pbckcode === undefined) {
            editor.config.pbckcode = {};
        }
        
        // default settings object
        var DEFAULT_SETTINGS = {
            cls: '',
            modes: [
                ["Ruby", "ruby"], ["Batch", "batch"], ["Vim", "vim"], ["As", "as"], ["Tex", "tex"], ["Applescript", "applescript"], ["Reg", "reg"], ["Tsql", "tsql"], ["Vb", "vb"], ["Mel", "mel"], ["Sh", "sh"], ["Apache", "apache"], ["Ilogic", "ilogic"], ["Amigados", "amigados"], ["Arduino", "arduino"], ["Lua", "lua"], ["Miva", "miva"], ["Yaml", "yaml"], ["Rust", "rust"], ["Coffee", "coffee"], ["Java", "java"], ["Haskell", "haskell"], ["Swift", "swift"], ["1cKod", "1c-kod"], ["Php", "php"], ["Python", "python"], ["Ocaml", "ocaml"], ["C++", "c++"], ["Papyrus", "papyrus"], ["Ps", "ps"], ["Kl", "kl"], ["C", "c"], ["Autoit", "autoit"], ["Scheme", "scheme"], ["Xhtml", "xhtml"], ["Pgsql", "pgsql"], ["Zsh", "zsh"], ["Vbnet", "vbnet"], ["Asp", "asp"], ["Default", "default"], ["C#", "c#"], ["Mysql", "mysql"], ["Plsql", "plsql"], ["Objc", "objc"], ["Css", "css"], ["Lisp", "lisp"], ["Js", "js"], ["Sass", "sass"], ["Dws", "dws"], ["Less", "less"], ["Diff", "diff"], ["Asm", "asm"], ["Go", "go"], ["Matlab", "matlab"], ["Clojure", "clojure"], ["R", "r"], ["Scala", "scala"], ["Ini", "ini"], ["Ada", "ada"], ["Erlang", "erlang"], ["Abap", "abap"], ["Perl", "perl"], ["1cZapros", "1c-zapros"], ["Delphi", "delphi"], ["Monkey", "monkey"]
            ],
            theme: 'textmate',
            tab_size: 4,
            code_themes: [
                ["使用默认", "default"], ["Onderka15", "onderka15"], ["TomorrowNight", "tomorrow-night"], ["Coy", "coy"], ["ObsidianLight", "obsidian-light"], ["Turnwall", "turnwall"], ["MircDark", "mirc-dark"], ["Terminal", "terminal"], ["ShellDefault", "shell-default"], ["Vs2012Black", "vs2012-black"], ["Monokai", "monokai"], ["Kayote", "kayote"], ["Github", "github"], ["DarkTerminal", "dark-terminal"], ["Epicgeeks", "epicgeeks"], ["MmDarkBlue", "mm-dark-blue"], ["Amity", "amity"], ["SecretsOfRock", "secrets-of-rock"], ["IrisVfx", "iris-vfx"], ["Kaderu", "kaderu"], ["Twilight", "twilight"], ["Feeldesign", "feeldesign"], ["SolarizedLight", "solarized-light"], ["1cKod", "1c-kod"], ["Ssms2012", "ssms2012"], ["PlainWhite", "plain-white"], ["Tomorrow", "tomorrow"], ["809finest", "809finest"], ["Idle", "idle"], ["Qtcreator", "qtcreator"], ["Raygun", "raygun"], ["SublimeText", "sublime-text"], ["FlatuiLight", "flatui-light"], ["Capacitacionti", "capacitacionti"], ["InlellijIdea", "inlellij-idea"], ["Classic", "classic"], ["Neon", "neon"], ["Vs2012", "vs2012"], ["Ado", "ado"], ["CiscoRouter", "cisco-router"], ["PrismLike", "prism-like"], ["Pspad", "pspad"], ["ArduinoIde", "arduino-ide"], ["Obsidian", "obsidian"], ["Bncplusplus", "bncplusplus"], ["Powershell", "powershell"], ["Eclipse", "eclipse"], ["Familiar", "familiar"], ["PowershellIse", "powershell-ise"], ["SolarizedDark", "solarized-dark"], ["OrangeCode", "orange-code"], ["SonOfObsidian", "son-of-obsidian"], ["CgCookie", "cg-cookie"], ["Xcode", "xcode"], ["X3info", "x3info"], ["VisualAssist", "visual-assist"], ["1cZapros", "1c-zapros"], ["LightAbite", "light-abite"], ["CodaSpecialBoard", "coda-special-board"]
            ],
            code_fonts: [
                ["使用默认", "default"],
                ["Sourcecodepro", "sourcecodepro"],
                ["LiberationMono", "liberation-mono"],
                ["DroidSansMono", "droid-sans-mono"],
                ["UbuntuMono", "ubuntu-mono"],
                ["Consolas", "consolas"],
                ["AdobeSourceSans", "adobe-source-sans"],
                ["Monaco", "monaco"],
                ["Inconsolata", "inconsolata"]
            ],
            js: this.path + 'libs/'
            //'//cdnjs.cloudflare.com/ajax//ace/1.2.6/'
        };
        
        // merge user settings with default settings
        editor.settings = CKEDITOR.tools.extend(DEFAULT_SETTINGS, editor.config.pbckcode, true);
        editor.settings.js = normalizeJsUrl(editor.settings.js);
        
        // load CSS for the dialog
        editor.on('instanceReady', function () {
            CKEDITOR.document.appendStyleSheet(this.path + 'dialogs/style.css');
        }.bind(this));
        
        // add the button in the toolbar
        editor.ui.addButton('pbckcode', {
            label: editor.lang.pbckcode.addCode,
            command: commandName,
            toolbar: 'pbckcode'
        });
        
        // link the button to the command
        editor.addCommand(commandName, new CKEDITOR.dialogCommand('pbckcodeDialog', {
                allowedContent: 'pre[*]{*}(*)'
            })
        );
        
        // disable the button while the required js files are not loaded
        editor.getCommand(commandName).disable();
        
        // add the plugin dialog element to the plugin
        CKEDITOR.dialog.add('pbckcodeDialog', this.path + 'dialogs/pbckcode.js');
        
        // add the context menu
        if (editor.contextMenu) {
            editor.addMenuGroup('pbckcodeGroup');
            editor.addMenuItem('pbckcodeItem', {
                label: editor.lang.pbckcode.editCode,
                icon: this.path + 'icons/pbckcode.png',
                command: commandName,
                group: 'pbckcodeGroup'
            });
            
            editor.contextMenu.addListener(function (element) {
                if (element.getAscendant('pre', true)) {
                    return {pbckcodeItem: CKEDITOR.TRISTATE_OFF};
                }
            });
        }
        
        var scripts = [
            getScriptUrl(editor.settings.js, js.ace),
            js.pbSyntaxHighlighter
        ];
        
        // Load the required js files
        // enable the button when loaded
        CKEDITOR.scriptLoader.load(scripts, function () {
            editor.getCommand(commandName).enable();
            
            // need ace to be loaded
            CKEDITOR.scriptLoader.load([
                getScriptUrl(editor.settings.js, js.aceExtWhitespace)
            ]);
        });
    }
});

function normalizeJsUrl(js) {
    return js.concat('/')
    .replace(new RegExp('([^:]\/)\/+', 'g'), '$1');
}

function getScriptUrl(prefix, scriptName) {
    return prefix + scriptName;
}

