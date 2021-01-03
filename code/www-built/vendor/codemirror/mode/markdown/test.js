// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(){function e(e){test.mode(e,l,Array.prototype.slice.call(arguments,1))}function o(e){test.mode(e,n,Array.prototype.slice.call(arguments,1))}function t(e){test.mode(e,c,Array.prototype.slice.call(arguments,1))}function a(e){test.mode(e,s,Array.prototype.slice.call(arguments,1))}function r(e){test.mode(e,g,Array.prototype.slice.call(arguments,1))}var i={tabSize:4,indentUnit:2},l=CodeMirror.getMode(i,"markdown"),n=CodeMirror.getMode(i,{name:"markdown",highlightFormatting:!0}),m=CodeMirror.getMode(i,{name:"markdown",xml:!1}),d=CodeMirror.getMode(i,{name:"markdown",fencedCodeBlockHighlighting:!1}),c=CodeMirror.getMode(i,{name:"markdown",allowAtxHeaderWithoutSpace:!0}),s=CodeMirror.getMode(i,{name:"markdown",strikethrough:!0,emoji:!0,tokenTypeOverrides:{header:"override-header",code:"override-code",quote:"override-quote",list1:"override-list1",list2:"override-list2",list3:"override-list3",hr:"override-hr",image:"override-image",imageAltText:"override-image-alt-text",imageMarker:"override-image-marker",linkInline:"override-link-inline",linkEmail:"override-link-email",linkText:"override-link-text",linkHref:"override-link-href",em:"override-em",strong:"override-strong",strikethrough:"override-strikethrough",emoji:"override-emoji"}}),b=CodeMirror.getMode(i,{name:"markdown",highlightFormatting:!0,tokenTypeOverrides:{formatting:"override-formatting"}}),g=CodeMirror.getMode(i,{name:"markdown",emoji:!0});o("formatting_emAsterisk","[em&formatting&formatting-em *][em foo][em&formatting&formatting-em *]"),o("formatting_emUnderscore","[em&formatting&formatting-em _][em foo][em&formatting&formatting-em _]"),o("formatting_strongAsterisk","[strong&formatting&formatting-strong **][strong foo][strong&formatting&formatting-strong **]"),o("formatting_strongUnderscore","[strong&formatting&formatting-strong __][strong foo][strong&formatting&formatting-strong __]"),o("formatting_codeBackticks","[comment&formatting&formatting-code `][comment foo][comment&formatting&formatting-code `]"),o("formatting_doubleBackticks","[comment&formatting&formatting-code ``][comment foo ` bar][comment&formatting&formatting-code ``]"),o("formatting_atxHeader","[header&header-1&formatting&formatting-header&formatting-header-1 # ][header&header-1 foo # bar ][header&header-1&formatting&formatting-header&formatting-header-1 #]"),o("formatting_setextHeader","[header&header-1 foo]","[header&header-1&formatting&formatting-header&formatting-header-1 =]"),o("formatting_blockquote","[quote&quote-1&formatting&formatting-quote&formatting-quote-1 > ][quote&quote-1 foo]"),o("formatting_list","[variable-2&formatting&formatting-list&formatting-list-ul - ][variable-2 foo]"),o("formatting_list","[variable-2&formatting&formatting-list&formatting-list-ol 1. ][variable-2 foo]"),o("formatting_link","[link&formatting&formatting-link [][link foo][link&formatting&formatting-link ]]][string&formatting&formatting-link-string&url (][string&url http://example.com/][string&formatting&formatting-link-string&url )]"),o("formatting_linkReference","[link&formatting&formatting-link [][link foo][link&formatting&formatting-link ]]][string&formatting&formatting-link-string&url [][string&url bar][string&formatting&formatting-link-string&url ]]]","[link&formatting&formatting-link [][link bar][link&formatting&formatting-link ]]:] [string&url http://example.com/]"),o("formatting_linkWeb","[link&formatting&formatting-link <][link http://example.com/][link&formatting&formatting-link >]"),o("formatting_linkEmail","[link&formatting&formatting-link <][link user@example.com][link&formatting&formatting-link >]"),o("formatting_escape","[formatting-escape \\*]"),o("formatting_image","[formatting&formatting-image&image&image-marker !][formatting&formatting-image&image&image-alt-text&link [[][image&image-alt-text&link alt text][formatting&formatting-image&image&image-alt-text&link ]]][formatting&formatting-link-string&string&url (][url&string http://link.to/image.jpg][formatting&formatting-link-string&string&url )]"),o("codeBlock","[comment&formatting&formatting-code-block ```css]","[tag foo]","[comment&formatting&formatting-code-block ```]"),e("plainText","foo"),e("trailingSpace1","foo "),e("trailingSpace2","foo[trailing-space-a  ][trailing-space-new-line  ]"),e("trailingSpace3","foo[trailing-space-a  ][trailing-space-b  ][trailing-space-new-line  ]"),e("trailingSpace4","foo[trailing-space-a  ][trailing-space-b  ][trailing-space-a  ][trailing-space-new-line  ]"),e("codeBlocksUsing4Spaces","    [comment foo]"),e("codeBlocksUsing4SpacesIndentation","    [comment bar]","        [comment hello]","            [comment world]","    [comment foo]","bar"),e("codeBlocksWithTrailingIndentedLine","    [comment foo]","        [comment bar]","    [comment baz]","    ","hello"),e("codeBlocksUsing1Tab","\t[comment foo]"),e("noCodeBlocksAfterParagraph","Foo","    Bar"),e("codeBlocksAfterATX","[header&header-1 # foo]","    [comment code]"),e("codeBlocksAfterSetext","[header&header-2 foo]","[header&header-2 ---]","    [comment code]"),e("codeBlocksAfterFencedCode","[comment ```]","[comment foo]","[comment ```]","    [comment code]"),e("inlineCodeUsingBackticks","foo [comment `bar`]"),e("blockCodeSingleBacktick","[comment `]","[comment foo]","[comment `]"),e("unclosedBackticks","foo [comment `bar]"),e("doubleBackticks","[comment ``foo ` bar``]"),e("consecutiveBackticks","[comment `foo```bar`]"),e("consecutiveBackticks","[comment `foo```bar`] hello [comment `world`]"),e("unclosedBackticks","[comment ``foo ``` bar` hello]"),e("closedBackticks","[comment ``foo ``` bar` hello``] world"),e("closingFencedMarksOnSameLine","[comment ``` code ```] foo"),e("atxH1","[header&header-1 # foo]"),e("atxH2","[header&header-2 ## foo]"),e("atxH3","[header&header-3 ### foo]"),e("atxH4","[header&header-4 #### foo]"),e("atxH5","[header&header-5 ##### foo]"),e("atxH6","[header&header-6 ###### foo]"),e("noAtxH7","####### foo"),e("noAtxH1WithoutSpace","#5 bolt"),t("atxNoSpaceAllowed_H1NoSpace","[header&header-1 #foo]"),t("atxNoSpaceAllowed_H4NoSpace","[header&header-4 ####foo]"),t("atxNoSpaceAllowed_H1Space","[header&header-1 # foo]"),e("atxH1inline","[header&header-1 # foo ][header&header-1&em *bar*]"),e("atxIndentedTooMuch","[header&header-1 # foo]","    [comment # bar]"),e("atxNestedInsideBlockquote","[quote&quote-1 > # foo]"),e("atxAfterBlockquote","[quote&quote-1 > foo]","[header&header-1 # bar]"),e("setextH1","[header&header-1 foo]","[header&header-1 =]"),e("setextH1","[header&header-1 foo]","[header&header-1 ===]"),e("setextH2Single","foo","-"),e("setextH2","[header&header-2 foo]","[header&header-2 ---]"),e("setextH2AllowSpaces","[header&header-2 foo]","   [header&header-2 ----      ]"),e("noSetextAfterIndentedCodeBlock","     [comment foo]","[hr ---]"),e("setextAfterFencedCode","[comment ```]","[comment foo]","[comment ```]","[header&header-2 bar]","[header&header-2 ---]"),e("setextAferATX","[header&header-1 # foo]","[header&header-2 bar]","[header&header-2 ---]"),e("noSetextAfterQuote","[quote&quote-1 > foo]","[hr ---]","","[quote&quote-1 > foo]","[quote&quote-1 bar]","[hr ---]"),e("noSetextAfterList","[variable-2 - foo]","[hr ---]"),e("noSetextAfterList_listContinuation","[variable-2 - foo]","bar","[hr ---]"),e("setextAfterList_afterIndentedCode","[variable-2 - foo]","","      [comment bar]","[header&header-2 baz]","[header&header-2 ---]"),e("setextAfterList_afterFencedCodeBlocks","[variable-2 - foo]","","      [comment ```]","      [comment bar]","      [comment ```]","[header&header-2 baz]","[header&header-2 ---]"),e("setextAfterList_afterHeader","[variable-2 - foo]","  [variable-2&header&header-1 # bar]","[header&header-2 baz]","[header&header-2 ---]"),e("setextAfterList_afterHr","[variable-2 - foo]","","  [hr ---]","[header&header-2 bar]","[header&header-2 ---]"),e("setext_nestedInlineMarkup","[header&header-1 foo ][em&header&header-1 *bar*]","[header&header-1 =]"),e("setext_linkDef","[link [[aaa]]:] [string&url http://google.com 'title']","[hr ---]"),e("setext_oneLineLookahead","foo","[header&header-1 bar]","[header&header-1 =]"),e("setext_emptyList","foo","[variable-2 - ]","foo"),e("blockquoteSpace","[quote&quote-1 > foo]"),e("blockquoteNoSpace","[quote&quote-1 >foo]"),e("blockquoteNoBlankLine","foo","[quote&quote-1 > bar]"),e("blockquoteNested","[quote&quote-1 > foo]","[quote&quote-1 >][quote&quote-2 > foo]","[quote&quote-1 >][quote&quote-2 >][quote&quote-3 > foo]"),e("blockquoteNestedIndented"," [quote&quote-1 > foo]"," [quote&quote-1 >][quote&quote-2 > foo]"," [quote&quote-1 >][quote&quote-2 >][quote&quote-3 > foo]"),e("blockquoteIndentedTooMuch","foo","    > bar"),e("blockquoteThenParagraph","[quote&quote-1 >foo]","","bar"),e("multiBlockquoteLazy","[quote&quote-1 >foo]","[quote&quote-1 bar]"),e("multiBlockquoteLazyThenParagraph","[quote&quote-1 >foo]","[quote&quote-1 bar]","","hello"),e("multiBlockquote","[quote&quote-1 >foo]","[quote&quote-1 >bar]"),e("multiBlockquoteThenParagraph","[quote&quote-1 >foo]","[quote&quote-1 >bar]","","hello"),e("listNestedInBlockquote","[quote&quote-1 > - foo]"),e("fencedBlockNestedInBlockquote","[quote&quote-1 > ```]","[quote&quote-1 > code]","[quote&quote-1 > ```]","[quote&quote-1 > ][quote&quote-1&comment `code`]"),e("headerAfterContinuedBlockquote","[quote&quote-1 > foo]","[quote&quote-1 bar]",""," [header&header-1 # hello]"),e("listAsterisk","foo","bar","","[variable-2 * foo]","[variable-2 * bar]"),e("listPlus","foo","bar","","[variable-2 + foo]","[variable-2 + bar]"),e("listDash","foo","bar","","[variable-2 - foo]","[variable-2 - bar]"),e("listNumber","foo","bar","","[variable-2 1. foo]","[variable-2 2. bar]"),e("listFromParagraph","foo","[variable-2 1. bar]","[variable-2 2. hello]"),e("listAfterHr","[hr ---]","[variable-2 - bar]"),e("listAfterHeader","[header&header-1 # foo]","[variable-2 - bar]"),e("hrAfterList","[variable-2 - foo]","[hr -----]"),e("hrAfterFencedCode","[comment ```]","[comment code]","[comment ```]","[hr ---]"),e("hrInsideList","[variable-2 - foo]","","  [hr ---]","     [hr ---]","","      [comment ---]"),e("consecutiveHr","[hr ---]","[hr ---]","[hr ---]"),e("listAsteriskFormatting","[variable-2 * ][variable-2&em *foo*][variable-2  bar]","[variable-2 * ][variable-2&strong **foo**][variable-2  bar]","[variable-2 * ][variable-2&em&strong ***foo***][variable-2  bar]","[variable-2 * ][variable-2&comment `foo`][variable-2  bar]"),e("listPlusFormatting","[variable-2 + ][variable-2&em *foo*][variable-2  bar]","[variable-2 + ][variable-2&strong **foo**][variable-2  bar]","[variable-2 + ][variable-2&em&strong ***foo***][variable-2  bar]","[variable-2 + ][variable-2&comment `foo`][variable-2  bar]"),e("listDashFormatting","[variable-2 - ][variable-2&em *foo*][variable-2  bar]","[variable-2 - ][variable-2&strong **foo**][variable-2  bar]","[variable-2 - ][variable-2&em&strong ***foo***][variable-2  bar]","[variable-2 - ][variable-2&comment `foo`][variable-2  bar]"),e("listNumberFormatting","[variable-2 1. ][variable-2&em *foo*][variable-2  bar]","[variable-2 2. ][variable-2&strong **foo**][variable-2  bar]","[variable-2 3. ][variable-2&em&strong ***foo***][variable-2  bar]","[variable-2 4. ][variable-2&comment `foo`][variable-2  bar]"),e("listParagraph","[variable-2 * foo]","","[variable-2 * bar]"),e("listMultiParagraph","[variable-2 * foo]","","[variable-2 * bar]","","    [variable-2 hello]"),e("listMultiParagraphExtra","[variable-2 * foo]","","[variable-2 * bar]","","","    [variable-2 hello]"),e("listMultiParagraphExtraSpace","[variable-2 * foo]","","[variable-2 * bar]","","     [variable-2 hello]","","    [variable-2 world]"),e("listTab","[variable-2 * foo]","","[variable-2 * bar]","","\t[variable-2 hello]"),e("listNoIndent","[variable-2 * foo]","","[variable-2 * bar]","","hello"),e("listCommonMarkIndentationCode","[variable-2 * Code blocks also affect]","  [variable-3 * The next level starts where the contents start.]","   [variable-3 *    Anything less than that will keep the item on the same level.]","       [variable-3 * Each list item can indent the first level further and further.]","  [variable-3 * For the most part, this makes sense while writing a list.]","    [keyword * This means two items with same indentation can be different levels.]","     [keyword *  Each level has an indent requirement that can change between items.]","       [keyword * A list item that meets this will be part of the next level.]","   [variable-3 * Otherwise, it will be part of the level where it does meet this.]"," [variable-2 * World]"),e("listCommonMark_MixedIndents","[variable-2 * list1]","    [variable-2 list1]","  [variable-2&header&header-1 # heading still part of list1]","  [variable-2 text after heading still part of list1]","","      [comment indented codeblock]","  [variable-2 list1 after code block]","  [variable-3 * list2]","              ","","","    [variable-3 indented text part of list2]","    [keyword * list3]","","    [variable-3 text at level of list2]","","  [variable-2 de-indented text part of list1 again]","","  [variable-2&comment ```]","  [comment code]","  [variable-2&comment ```]","","  [variable-2 text after fenced code]"),e("listCommonMark_NumeberedListIndent","[variable-2 1000. list with base indent of 6]","","      [variable-2 text must be indented 6 spaces at minimum]","","         [variable-2 9-spaces indented text still part of list]","","          [comment indented codeblock starts at 10 spaces]","","     [comment text indented by 5 spaces no longer belong to list]"),e("listCommonMark_TabIndented","[variable-2 * list]","\t[variable-3 * list2]","","\t\t[variable-3 part of list2]"),e("listAfterBlockquote","[quote&quote-1 > foo]","[variable-2 - bar]"),e("nestedListIndentedTooMuch","[variable-2 - foo]","          [variable-2 - bar]"),e("listIndentedTooMuchAfterParagraph","foo","    - bar"),e("blockquote","[variable-2 * foo]","","[variable-2 * bar]","","    [variable-2&quote&quote-1 > hello]"),e("blockquoteCode","[variable-2 * foo]","","[variable-2 * bar]","","        [comment > hello]","","    [variable-2 world]"),e("blockquoteCodeText","[variable-2 * foo]","","    [variable-2 bar]","","        [comment hello]","","    [variable-2 world]"),e("listAsteriskNested","[variable-2 * foo]","","    [variable-3 * bar]"),e("listPlusNested","[variable-2 + foo]","","    [variable-3 + bar]"),e("listDashNested","[variable-2 - foo]","","    [variable-3 - bar]"),e("listNumberNested","[variable-2 1. foo]","","    [variable-3 2. bar]"),e("listMixed","[variable-2 * foo]","","    [variable-3 + bar]","","        [keyword - hello]","","            [variable-2 1. world]"),e("listBlockquote","[variable-2 * foo]","","    [variable-3 + bar]","","        [quote&quote-1&variable-3 > hello]"),e("listCode","[variable-2 * foo]","","    [variable-3 + bar]","","            [comment hello]"),e("listCodeIndentation","[variable-2 * foo]","","        [comment bar]","            [comment hello]","                [comment world]","        [comment foo]","    [variable-2 bar]"),e("listNested","[variable-2 * foo]","","    [variable-3 * bar]","","       [variable-3 hello]"),e("listNested","[variable-2 * foo]","","    [variable-3 * bar]","","      [keyword * foo]"),e("listCodeText","[variable-2 * foo]","","        [comment bar]","","hello"),e("hrSpace","[hr * * *]"),e("hr","[hr ***]"),e("hrLong","[hr *****]"),e("hrSpaceDash","[hr - - -]"),e("hrDashLong","[hr ---------------------------------------]"),e("Images","[image&image-marker !][image&image-alt-text&link [[alt text]]][string&url (http://link.to/image.jpg)]"),e("imageEm","[image&image-marker !][image&image-alt-text&link [[][image-alt-text&em&image&link *alt text*][image&image-alt-text&link ]]][string&url (http://link.to/image.jpg)]"),e("imageStrong","[image&image-marker !][image&image-alt-text&link [[][image-alt-text&strong&image&link **alt text**][image&image-alt-text&link ]]][string&url (http://link.to/image.jpg)]"),e("imageEmStrong","[image&image-marker !][image&image-alt-text&link [[][image&image-alt-text&em&strong&link ***alt text***][image&image-alt-text&link ]]][string&url (http://link.to/image.jpg)]"),e("linkTitle",'[link [[foo]]][string&url (http://example.com/ "bar")] hello'),e("linkNoTitle","[link [[foo]]][string&url (http://example.com/)] bar"),e("linkImage","[link [[][link&image&image-marker !][link&image&image-alt-text&link [[alt text]]][string&url (http://link.to/image.jpg)][link ]]][string&url (http://example.com/)] bar"),e("linkEm","[link [[][link&em *foo*][link ]]][string&url (http://example.com/)] bar"),e("linkStrong","[link [[][link&strong **foo**][link ]]][string&url (http://example.com/)] bar"),e("linkEmStrong","[link [[][link&em&strong ***foo***][link ]]][string&url (http://example.com/)] bar"),e("multilineLink","[link [[foo]","[link bar]]][string&url (https://foo#_a)]","should not be italics"),e("imageTitle",'[image&image-marker !][image&image-alt-text&link [[alt text]]][string&url (http://example.com/ "bar")] hello'),e("imageNoTitle","[image&image-marker !][image&image-alt-text&link [[alt text]]][string&url (http://example.com/)] bar"),e("imageAsterisks","[image&image-marker !][image&image-alt-text&link [[ ][image&image-alt-text&em&link *alt text*][image&image-alt-text&link ]]][string&url (http://link.to/image.jpg)] bar"),e("notALink","[link [[foo]]] (bar)"),e("linkReference","[link [[foo]]][string&url [[bar]]] hello"),e("linkReferenceEm","[link [[][link&em *foo*][link ]]][string&url [[bar]]] hello"),e("linkReferenceStrong","[link [[][link&strong **foo**][link ]]][string&url [[bar]]] hello"),e("linkReferenceEmStrong","[link [[][link&em&strong ***foo***][link ]]][string&url [[bar]]] hello"),e("linkReferenceSpace","[link [[foo]]] [string&url [[bar]]] hello"),e("linkReferenceDoubleSpace","[link [[foo]]]  [link [[bar]]] hello"),e("linkImplicit","[link [[foo]]][string&url [[]]] hello"),e("labelNoTitle","[link [[foo]]:] [string&url http://example.com/]"),e("labelIndented","   [link [[foo]]:] [string&url http://example.com/]"),e("labelSpaceTitle",'[link [[foo bar]]:] [string&url http://example.com/ "hello"]'),e("labelDoubleTitle",'[link [[foo bar]]:] [string&url http://example.com/ "hello"] "world"'),e("labelTitleDoubleQuotes",'[link [[foo]]:] [string&url http://example.com/  "bar"]'),e("labelTitleSingleQuotes","[link [[foo]]:] [string&url http://example.com/  'bar']"),e("labelTitleParentheses","[link [[foo]]:] [string&url http://example.com/  (bar)]"),e("labelTitleInvalid","[link [[foo]]:] [string&url http://example.com/] bar"),e("labelLinkAngleBrackets",'[link [[foo]]:] [string&url <http://example.com/>  "bar"]'),e("labelTitleNextDoubleQuotes","[link [[foo]]:] [string&url http://example.com/]",'[string "bar"] hello'),e("labelTitleNextSingleQuotes","[link [[foo]]:] [string&url http://example.com/]","[string 'bar'] hello"),e("labelTitleNextParentheses","[link [[foo]]:] [string&url http://example.com/]","[string (bar)] hello"),e("labelTitleNextMixed","[link [[foo]]:] [string&url http://example.com/]",'(bar" hello'),e("labelEscape","[link [[foo \\]] ]]:] [string&url http://example.com/]"),e("labelEscapeColon","[link [[foo \\]]: bar]]:] [string&url http://example.com/]"),e("labelEscapeEnd","\\[[foo\\]]: http://example.com/"),e("linkWeb","[link <http://example.com/>] foo"),e("linkWebDouble","[link <http://example.com/>] foo [link <http://example.com/>]"),e("linkEmail","[link <user@example.com>] foo"),e("linkEmailDouble","[link <user@example.com>] foo [link <user@example.com>]"),e("emAsterisk","[em *foo*] bar"),e("emUnderscore","[em _foo_] bar"),e("emInWordAsterisk","foo[em *bar*]hello"),e("emInWordUnderscore","foo_bar_hello"),e("emEscapedBySpaceIn","foo [em _bar _ hello_] world"),e("emEscapedBySpaceOut","foo _ bar [em _hello_] world"),e("emEscapedByNewline","foo","_ bar [em _hello_] world"),e("emIncompleteAsterisk","foo [em *bar]"),e("emIncompleteUnderscore","foo [em _bar]"),e("strongAsterisk","[strong **foo**] bar"),e("strongUnderscore","[strong __foo__] bar"),e("emStrongAsterisk","[em *foo][em&strong **bar*][strong hello**] world"),e("emStrongUnderscore","[em _foo ][em&strong __bar_][strong  hello__] world"),e("emStrongMixed","[em _foo][em&strong **bar*hello__ world]"),e("emStrongMixed","[em *foo ][em&strong __bar_hello** world]"),e("linkWithNestedParens","[link [[foo]]][string&url (bar(baz))]"),e("escapeBacktick","foo \\`bar\\`"),e("doubleEscapeBacktick","foo \\\\[comment `bar\\\\`]"),e("escapeAsterisk","foo \\*bar\\*"),e("doubleEscapeAsterisk","foo \\\\[em *bar\\\\*]"),e("escapeUnderscore","foo \\_bar\\_"),e("doubleEscapeUnderscore","foo \\\\[em _bar\\\\_]"),e("escapeHash","\\# foo");e("doubleEscapeHash","\\\\# foo"),e("escapeNewline","\\","[em *foo*]"),a("overrideHeader1","[override-header&override-header-1 # Foo]"),a("overrideHeader2","[override-header&override-header-2 ## Foo]"),a("overrideHeader3","[override-header&override-header-3 ### Foo]"),a("overrideHeader4","[override-header&override-header-4 #### Foo]"),a("overrideHeader5","[override-header&override-header-5 ##### Foo]"),a("overrideHeader6","[override-header&override-header-6 ###### Foo]"),a("overrideCode","[override-code `foo`]"),a("overrideCodeBlock","[override-code ```]","[override-code foo]","[override-code ```]"),a("overrideQuote","[override-quote&override-quote-1 > foo]","[override-quote&override-quote-1 > bar]"),a("overrideQuoteNested","[override-quote&override-quote-1 > foo]","[override-quote&override-quote-1 >][override-quote&override-quote-2 > bar]","[override-quote&override-quote-1 >][override-quote&override-quote-2 >][override-quote&override-quote-3 > baz]"),a("overrideLists","[override-list1 - foo]","","    [override-list2 + bar]","","        [override-list3 * baz]","","            [override-list1 1. qux]","","                [override-list2 - quux]"),a("overrideHr","[override-hr * * *]"),a("overrideImage","[override-image&override-image-marker !][override-image&override-image-alt-text&link [[alt text]]][override-link-href&url (http://link.to/image.jpg)]"),a("overrideLinkText","[override-link-text [[foo]]][override-link-href&url (http://example.com)]"),a("overrideLinkEmailAndInline","[override-link-email <][override-link-inline foo@example.com>]"),a("overrideEm","[override-em *foo*]"),a("overrideStrong","[override-strong **foo**]"),a("overrideStrikethrough","[override-strikethrough ~~foo~~]"),a("overrideEmoji","[override-emoji :foo:]"),function(e){test.mode(e,b,Array.prototype.slice.call(arguments,1))}("overrideFormatting","[override-formatting-escape \\*]"),e("taskList","[variable-2 * ][link&variable-2 [[ ]]][variable-2 bar]"),e("fencedCodeBlocks","[comment ```]","[comment foo]","","[comment bar]","[comment ```]","baz"),e("fencedCodeBlocks_invalidClosingFence_trailingText","[comment ```]","[comment foo]","[comment ``` must not have trailing text]","[comment baz]"),e("fencedCodeBlocks_invalidClosingFence_trailingTabs","[comment ```]","[comment foo]","[comment ```\t]","[comment baz]"),e("fencedCodeBlocks_validClosingFence","[comment ```]","[comment foo]","[comment ```     ]","baz"),e("fencedCodeBlocksInList_closingFenceIndented","[variable-2 - list]","    [variable-2&comment ```]","    [comment foo]","     [variable-2&comment ```]","    [variable-2 baz]"),e("fencedCodeBlocksInList_closingFenceIndentedTooMuch","[variable-2 - list]","    [variable-2&comment ```]","    [comment foo]","      [comment ```]","    [comment baz]"),e("fencedCodeBlockModeSwitching","[comment ```javascript]","[variable foo]","","[comment ```]","bar"),function(e){test.mode(e,d,Array.prototype.slice.call(arguments,1))}("fencedCodeBlock_noHighlight","[comment ```javascript]","[comment foo]","[comment ```]"),e("fencedCodeBlockModeSwitchingObjc","[comment ```objective-c]","[keyword @property] [variable NSString] [operator *] [variable foo];","[comment ```]","bar"),e("fencedCodeBlocksMultipleChars","[comment `````]","[comment foo]","[comment ```]","[comment foo]","[comment `````]","bar"),e("fencedCodeBlocksTildes","[comment ~~~]","[comment foo]","[comment ~~~]","bar"),e("fencedCodeBlocksTildesMultipleChars","[comment ~~~~~]","[comment ~~~]","[comment foo]","[comment ~~~~~]","bar"),e("fencedCodeBlocksMultipleChars","[comment `````]","[comment foo]","[comment ```]","[comment foo]","[comment `````]","bar"),e("fencedCodeBlocksMixed","[comment ~~~]","[comment ```]","[comment foo]","[comment ~~~]","bar"),e("fencedCodeBlocksAfterBlockquote","[quote&quote-1 > foo]","[comment ```]","[comment bar]","[comment ```]"),o("tooMuchIndentedFencedCode","    [comment ```]","    [comment code]","    [comment ```]"),e("autoTerminateFencedCodeWhenLeavingList","[variable-2 - list1]","  [variable-3 - list2]","    [variable-3&comment ```]","    [comment code]","  [variable-3 - list2]","  [variable-2&comment ```]","  [comment code]","[quote&quote-1 > foo]"),e("xmlMode","[tag&bracket <][tag div][tag&bracket >]","  *foo*","  [tag&bracket <][tag http://github.com][tag&bracket />]","[tag&bracket </][tag div][tag&bracket >]","[link <http://github.com/>]"),e("xmlModeWithMarkdownInside","[tag&bracket <][tag div] [attribute markdown]=[string 1][tag&bracket >]","[em *foo*]","[link <http://github.com/>]","[tag </div>]","[link <http://github.com/>]","[tag&bracket <][tag div][tag&bracket >]","[tag&bracket </][tag div][tag&bracket >]"),e("xmlModeLineBreakInTags",'[tag&bracket <][tag div] [attribute id]=[string "1"]','     [attribute class]=[string "sth"][tag&bracket >]xxx',"[tag&bracket </][tag div][tag&bracket >]"),e("xmlModeCommentWithBlankLine","[comment \x3c!-- Hello]","","[comment World --\x3e]"),e("xmlModeCDATA","[atom <![CDATA[ Hello]","","[atom FooBar]","[atom Test ]]]]>]"),e("xmlModePreprocessor","[meta <?php] [meta echo '1234'; ?>]"),function(e){test.mode(e,m,Array.prototype.slice.call(arguments,1))}("xmlHighlightDisabled","<div>foo</div>"),r("emojiDefault","[builtin :foobar:]"),r("emojiTable"," :--:")}();
//# sourceMappingURL=test.js.map