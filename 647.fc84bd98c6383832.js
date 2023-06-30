"use strict";(self.webpackChunkGitBlurWeb=self.webpackChunkGitBlurWeb||[]).push([[647],{647:(b,a,i)=>{i.r(a),i.d(a,{ReleaseNotesModule:()=>v});var c=i(808),p=i(367);const l=[{version:"2.9.8",time:"2023-06-24",content:"\n    <p>1. Refactor the pipeline page, as there may be issues due to API versioning. If you encounter any problems, please provide timely feedback.</p>\n    <p>5. Fix some other bugs.</p>\n    "},{version:"2.9.6",time:"2023-05-24",content:"\n    <p>1. Labels support colors and clickable.</p>\n    <p>2. Milestones can be clicked to view details.</p>\n    <p>3. Time track optimization.</p>\n    <p>4. Comment input box supports autocomplete, with support for @user, %milestone, #issue, !MR, and ~label.</p>\n    <p>5. Fix some other bugs.</p>\n    "},{version:"2.9.5",content:"\n    <p>1. Support time tracking report and add time entry.</p>\n    <p>2. Improve merge request detail page performance.</p>\n    <p>3. Improve issue page performance.</p>\n    <p>4. Fix some other bugs.</p>\n    "},{version:"2.9.3",content:'\n    <p>1. Display time tracking on issues and merge requests, and the next version will include a time tracking report.</p>\n    <p>2. Improve comment input and support quick action.</p>\n    <p>3. Enable the "Resolve" of comments on merge requests.</p>\n    <p>4. Fix some other bugs.</p>\n    '},{version:"2.9.2",content:"\n    <p>1. Improve search history.</p>\n    <p>2. Improve merge request page.</p>\n    <p>3. Support saving and sharing user avatars.</p>\n    "},{version:"2.9.1",content:"\n    <p>1. Fix the crash issue caused by uploading images or opening the camera.</p>\n    "},{version:"2.9.0",content:"\n    <p>1. The project list can support pinning up to 10 projects maximum.</p>\n    <p>2. Optimized the draft cache.</p>\n    <p>3. Code browsing on iPhone now supports landscape mode.</p>\n    <p>4. Group members now support editing.</p>\n    <p>5. Search supports search history, can be disabled in settings.</p>\n    <p>6. Labels now support subscription.</p>\n    "},{version:"2.8.1",content:"\n    <p>1. Projects and groups support manage labels.</p>\n    "},{version:"2.8.0",content:"\n    <p>1. Projects and groups support  manage milestones.</p>\n    <p>2. Fix some other known bugs.</p>\n    "},{version:"2.7.0",content:"\n    <p>1. Improve the Action Sheet dialog.</p>\n    "},{version:"2.6.2",content:"\n    <p>1. Fix some crash issues.</p>\n    "},{version:"2.6.1",content:"\n    <p>1. The issue causing the app to crash due to expired tokens has been fixed.</p>\n    "},{version:"2.6.0",content:'\n    <p>1. Improve Paste & Go. If you don\'t want GitBlur to access your clipboard, you can input the URL in the search bar and then search to get the same "Paste & Go" result.</p>\n    <p>2. Improve account switching.</p>\n    <p>3. Improve the Action Sheet dialog.</p>\n    <p>4. Fix some subscription errors.</p>\n    <p>5. Fix the issue of label selection when editing Issues.</p>\n    '},{version:"2.5.2",content:"\n    <p>1. Improve Paste & Go.</p>\n    "},{version:"2.5.1",content:"\n    <p>1. Improve Paste & Go.</p>\n    "},{version:"2.5.0",content:'\n    <p>1. Add a "Paste And Go" feature located at "Menu -> Settings -> Paste And Go". When enabled, the app will automatically read the content of the clipboard. If it is a URL for commit or merge request or an issue, the app will automatically redirect to the corresponding page.</p>\n    <p>2. Fix the issue where searching for issues or merge requests causes the app to crash.</p>\n    '},{version:"2.4.0",content:'\n    <p>1. Fixed the issue with uploading images/files in the rich text editor.</p>\n    <p><img src="/assets/v2.4.0/1.jpg" /></p>\n    <p>2. Improve the App pop-up dialogues.</p>\n    <p>3. Disable launching feedback when device vibration.</p>\n    <p>4. GitBlur notifications now support deletion..</p>\n    <p><img src="/assets/v2.4.0/2.jpg" /></p>\n    '},{version:"2.3.0",content:'\n    <p>1. Project pinning: You can pin up to 5 projects. If you have more than 5, we suggest using the star feature instead. Pinning can be synchronized across different devices.</p>\n    <p><img src="/assets/v2.3.0/1.jpg" /></p>\n    <p>2. CI/CD job operations: We have updated the options for Play, Run Again, Retry, and Cancel.</p>\n    <p><img src="/assets/v2.3.0/2.jpg" /></p>\n    <p>3. Username matching: We have fixed an issue where underscores were not being recognized as valid characters.</p>\n    <p><img src="/assets/v2.3.0/3.jpg" /></p>\n    <p>4. Follow us on Twitter or contact us through feedback using Twitter.</p>\n    '},{version:"2.2.1",content:'\n    <p>1. Fixed merge request page, tap code diff view cause crash issue.</p>\n    <p><img src="/assets/v2.2.1/1.jpg" /></p>\n    <p>2. But currently, it\'s not possible to view or add comments from the merge request page to the code diff view. We will solve this issue in the next version.</p>\n    '},{version:"2.2.0",content:'\n    <p>1. Supports quick account switching when you have multiple accounts. In the bottom tab bar menu. Long press the user label.</p>\n    <p><img src="/assets/v2.2.0/1.jpg" /></p>\n\n    <p>2. The committed code viewer has been redesigned. Word wrap are supported.</p>\n    <p><img src="/assets/v2.2.0/3.jpg" /></p>\n\n    <p>2.1 Support for displaying comments for line of code.</p>\n    <p><img src="/assets/v2.2.0/4.jpg" /></p>\n\n    <p>2.2 Support for adding comments to single lines of code. Long press the code line, a menu will pop up.</p>\n    <p><img src="/assets/v2.2.0/5.jpg" /></p>\n\n    <p>3. Comment thread.</p>\n    <p>\n    <img src="/assets/v2.2.0/6.jpg" />\n    <img src="/assets/v2.2.0/7.jpg" />\n    </p>\n\n    <p>4. Labels list support keyword searching and single label editing.</p>\n    <p><img src="/assets/v2.2.0/9.jpg" /></p>\n\n    <p>5. Issues and merge requests filter by labels. </p>\n    <p><img src="/assets/v2.2.0/10.jpg" /></p>\n\n    <p>6. Fixed some other issues.</p>\n    '},{version:"2.1.1",content:'\n    <p>1. Supported notification pushed when other users operate on the project that you watched. This feature is called <a href="/#/watch">GitBlur Watch</a>.</p>\n    <p>2. Added label option for issue editing.</p>\n    <p>3. Fixed SVG images display in markdowns.</p>\n    '}];var e=i(96),u=i(270);const m=function(t){return[t]};function g(t,o){if(1&t&&(e.TgZ(0,"li")(1,"a",3),e._uU(2),e.qZA()()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(2,m,"/release-notes/"+n)),e.xp6(1),e.hij("",n," Release Notes")}}const h=p.Bz.forChild([{path:"",component:(()=>{class t{constructor(n){this.utils=n,this.notes=[]}ngOnInit(){this.utils.setTitle("Release Notes"),this.notes=l.map(n=>n.version)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-release-notes"]],decls:4,vars:1,consts:[[1,"content"],[1,"innerContent"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"ul"),e.YNc(3,g,3,4,"li",2),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("ngForOf",s.notes))},directives:[c.sg,p.yS],styles:[".innerContent[_ngcontent-%COMP%]{padding:0 0 0 15px}.innerContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.innerContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0;border-bottom:1px solid #f2f2f2}.innerContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.innerContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:15px 0}@media (prefers-color-scheme: dark){.innerContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #2d2d2d}}"]}),t})()},{path:":version",component:(()=>{class t{constructor(n,s){this.route=n,this.utils=s,this.note=""}ngOnInit(){this.route.paramMap.subscribe(n=>{const s=n.get("version");if(null!=s){const r=l.find(f=>f.version===s);r&&(this.note=r.content,this.time=r.time),this.utils.setTitle(`${s} Release Notes`)}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.gz),e.Y36(u.F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-release-detail"]],decls:5,vars:2,consts:[[1,"content"],[1,"innerContent",3,"innerHTML"],[1,"time"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div"),e.qZA(),e.TgZ(3,"p",2),e._uU(4),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("innerHTML",s.note,e.oJD),e.xp6(3),e.hij(" ",s.time?"release at "+s.time:"",""))},styles:[".innerContent[_ngcontent-%COMP%]     img{max-height:800px;margin-right:20px;margin-bottom:20px;max-width:100%}.innerContent[_ngcontent-%COMP%]     img.single{max-height:none;width:100%;max-width:500px}.time[_ngcontent-%COMP%]{font-size:12px;margin:0 30px;text-align:right;opacity:.5}"]}),t})()}]);let v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h,c.ez]]}),t})()}}]);