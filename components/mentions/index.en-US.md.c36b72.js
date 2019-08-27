(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1538:function(t,n){t.exports={content:["section",["p","Mention component."],["blockquote",["p","Mention component is deprecated. Please click ",["a",{title:null,href:"/components/mention"},"here"]," to view old document."]],["h2","When To Use"],["p","When need to mention someone or something."]],meta:{category:"Components",type:"Data Entry",title:"Mentions",filename:"components/mentions/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mentions</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mentions.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sample<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mentions.Option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mentions</span><span class="token punctuation">></span></span>'},["code",'<Mentions onChange={onChange}>\n  <Mentions.Option value="sample">Sample</Mentions.Option>\n</Mentions>']],["h3","Mention"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoFocus"],["td","Auto get focus when component mounted"],["td","boolean"],["td",["code","false"]],["td","3.19.0"]],["tr",["td","defaultValue"],["td","Default value"],["td","string"],["td","-"],["td","3.19.0"]],["tr",["td","filterOption"],["td","Customize filter option logic"],["td","false ","|"," (input: string, option: OptionProps) => boolean"],["td","-"],["td","3.19.0"]],["tr",["td","notFoundContent"],["td","Set mentions content when not match"],["td","ReactNode"],["td","'Not Found'"],["td","3.19.0"]],["tr",["td","placement"],["td","Set popup placement"],["td","'top' ","|"," 'bottom'"],["td","'bottom'"],["td","3.19.0"]],["tr",["td","prefix"],["td","Set trigger prefix keyword"],["td","string ","|"," string[]"],["td","'@'"],["td","3.19.0"]],["tr",["td","split"],["td","Set split string before and after selected mention"],["td","string"],["td","' '"],["td","3.19.0"]],["tr",["td","validateSearch"],["td","Customize trigger search logic"],["td","(text: string, props: MentionsProps) => void"],["td","-"],["td","3.19.0"]],["tr",["td","value"],["td","Set value of mentions"],["td","string"],["td","-"],["td","3.19.0"]],["tr",["td","onChange"],["td","Trigger when value changed"],["td","(text: string) => void"],["td","-"],["td","3.19.0"]],["tr",["td","onSelect"],["td","Trigger when user select the option"],["td","(option: OptionProps, prefix: string) => void"],["td","-"],["td","3.19.0"]],["tr",["td","onSearch"],["td","Trigger when prefix hit"],["td","(text: string, prefix: string) => void"],["td","-"],["td","3.19.0"]],["tr",["td","onFocus"],["td","Trigger when mentions get focus"],["td","() => void"],["td","-"],["td","3.19.0"]],["tr",["td","onBlur"],["td","Trigger when mentions lose focus"],["td","() => void"],["td","-"],["td","3.19.0"]],["tr",["td","getPopupContainer"],["td","Set the mount HTML node for suggestions"],["td","() => HTMLElement"],["td","-"],["td","3.22.0"]]]],["h3","Mention methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","remove focus"],["td","3.19.0"]],["tr",["td","focus()"],["td","get focus"],["td","3.19.0"]]]],["h3","Option"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","children"],["td","suggestion content"],["td","ReactNode"],["td","-"],["td","3.19.0"]],["tr",["td","value"],["td","value of suggestion, the value will insert into input filed while selected"],["td","string"],["td","''"],["td","3.19.0"]]]]]}}}]);