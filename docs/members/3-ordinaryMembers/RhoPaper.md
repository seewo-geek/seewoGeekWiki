---
layout: doc
editLink: true
---

<!-- 一点Vue~ -->
<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

// 是喜闻乐见的解耦！太爽了哦鼾鼾鼾（bushi）
const links = [
{ name: 'HomePage', url: 'https://rhopaper.top/', icon: '🏠', desc: '我的主页（🚧施工中🚧  暂时跳转至博客）' },
{ name: 'Blog', url: 'https://blog.rhopaper.top/', icon: '📝', desc: '随便写点烂文章' },
{ name: 'GitHub', url: 'https://github.com/RhoPaper', icon: '⬜', desc: '分享些不温不温的小项目' },
{ name: 'Bilibili', url: 'https://space.bilibili.com/1762881915', icon: '📺', desc: '偶尔发点淼视频，关注煮包谢谢喵❤️' },
{ name: '小黑盒', url: 'https://www.xiaoheihe.cn/bbs/user_profile_share?user_id=3a956b3914ac', icon: '🔳', desc: 'xhh是好盒子🥰' },
{ name: 'Twitter / X', url: 'https://x.com/RhoPaper_', icon: '🐦', desc: '永远的小蓝鸟😭😭😭' },
{ name: 'CCW', url: 'https://www.ccw.site/student/6250dfad4b064f31e504f47b', icon: '🎮', desc: '共创世界！（Scratch社区）' }
]
const skills = [
{ name: 'HTML5', color: '#E34F26' },
{ name: 'CSS3', color: '#1572B6' },
{ name: 'JavaScript', color: '#F7DF1E' },
{ name: 'Vue.js', color: '#4FC08D' },
{ name: 'Python', color: '#3776AB' },
{ name: 'Artificial Intelligence', color: '#DDA0DD'}
]
</script>

<!-- 动态样式注入/亿点CSS，爱来自Gemini 3.0 Pro❤️ -->
<component :is="'style'">
.rp-profile-header {
display: flex;
align-items: center;
gap: 2rem;
padding: 2rem;
background: var(--vp-c-bg-soft);
border-radius: 16px;
margin: 1.5rem 0;
border: 1px solid var(--vp-c-bg-soft);
transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.rp-profile-header:hover {
border-color: var(--vp-c-brand);
transform: translateY(-2px);
background: var(--vp-c-bg-alt);
}
.rp-avatar-container {
position: relative;
flex-shrink: 0;
}
.rp-avatar {
width: 100px;
height: 100px;
border-radius: 50%;
border: 4px solid var(--vp-c-bg);
box-shadow: var(--vp-shadow-3);
transition: transform 0.5s;
}
.rp-profile-header:hover .rp-avatar {
transform: rotate(360deg);
}
.rp-status-dot {
position: absolute;
bottom: 5px;
right: 5px;
width: 20px;
height: 20px;
background-color: #10b981;
border: 4px solid var(--vp-c-bg-soft);
border-radius: 50%;
animation: pulse 2s infinite;
}
@keyframes pulse {
0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}
.rp-bio h3 { margin: 0 0 0.5rem 0; border: none !important; }
.rp-tags { display: flex; gap: 0.6rem; margin-top: 1rem; flex-wrap: wrap; }
.rp-tag { font-size: 0.75rem; padding: 2px 10px; border-radius: 20px; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); font-weight: bold; }
.rp-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem; margin: 1rem 0; }
.rp-card { background: var(--vp-c-bg-soft); border-radius: 12px; padding: 1rem; border: 1px solid transparent; transition: all 0.3s; }
.rp-card:hover { border-color: var(--vp-c-brand-soft); background: var(--vp-c-bg-alt); }
.rp-link-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
.rp-link-card {
display: flex; align-items: center; padding: 1.2rem;
background: var(--vp-c-bg-soft); border-radius: 12px;
text-decoration: none !important; color: var(--vp-c-text-1) !important;
transition: all 0.3s; border: 1px solid var(--vp-c-bg-soft);
}
.rp-link-card:hover {
background: var(--vp-c-bg-alt); border-color: var(--vp-c-brand);
transform: translateX(5px);
}
.skill-badge {
display: inline-flex; align-items: center; gap: 6px;
padding: 4px 12px; border-radius: 8px; background: var(--vp-c-bg-alt);
margin: 4px; font-size: 0.9rem; border: 1px solid var(--vp-c-border);
}
.skill-dot { width: 8px; height: 8px; border-radius: 50%; }
.rp-banner { border-radius: 12px; width: 100%; margin: 2rem 0; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1)); }
@media (max-width: 640px) {
.rp-profile-header { flex-direction: column; text-align: center; padding: 1.5rem; }
}

html body #rp-balink{
    color: #007aff;
}
</component>

<!-- 正文才刚刚开始 -->
<!-- 窝也不知道为什么要现在才开始，反正代码能跑就不要动，就牺牲下易读性吧（用纯文本编辑器读的朋友们我对不起你们！） -->
<Badge type="tip" text="普通成员" /> RhoPaper
<div class="rp-profile-header">
<div class="rp-avatar-container">
<img src="https://rhopaper.top/avatar.jpg" alt="RhoPaper Avatar" class="rp-avatar" />
<div class="rp-status-dot" title="Coding Now"></div>
</div>
<div class="rp-bio">
<h3>你好 / Hi, there! 👋</h3>
<p>我是 <b>RhoPaper</b>，一个默默无闻的学牲党。</p>
<p style="opacity: 0.7; font-size: 0.9em; font-style: italic;">"纸至执 / Paper to Hold."</p>
<div class="rp-tags">
<span class="rp-tag"># 初(中)生</span>
<span class="rp-tag"># 前端入</span>
<span class="rp-tag"># vibe-coder</span>
<span class="rp-tag"># (科)幻迷</span>
<span class="rp-tag"># 音游</span>
<span class="rp-tag"># BA</span>
<span class="rp-tag"># 旮旯</span>
</div>
</div>
</div>

::: details 💡 自我评价

Just费雾一个，只会点EZ(eazy)前端，甚至vibe-coding（）当然有AI加成后端也能写，只是个人不太感兴趣……也许是不喜欢烧脑的算法？（js：你好？…）

正在学习React……  &&  最爱Vue! || [张鑫旭大佬](https://www.zhangxinxu.com/)简直就是神口牙！

<small> ~~介个入还是一只llk喵～~~ </small>

> <strong><a style="color: #007aff;" href="https://bluearchive-cn.com">与你的日常，就是奇迹！</a></strong>

:::

📊 个人成就与状态
<div class="rp-stats-grid">
<div class="rp-card">
<img src="https://github-readme-stats.rhopaper.top/api?username=RhoPaper&show_icons=true&theme=transparent" alt="Github Stats" />
</div>
</div>
🛠️ 技术栈 Tech Stack
<div style="margin-bottom: 2rem;">
<div v-for="skill in skills" :key="skill.name" class="skill-badge">
<span class="skill-dot" :style="{ backgroundColor: skill.color }"></span>
<span>{{ skill.name }}</span>
</div>
</div>
🔗 社交矩阵
<div class="rp-link-grid">
<a v-for="link in links" :key="link.name" :href="link.url" target="_blank" class="rp-link-card">
<div style="font-size: 1.8rem; margin-right: 1.2rem;">{{ link.icon }}</div>
<div>
<div style="font-weight: bold;">{{ link.name }}</div>
<div style="font-size: 0.8rem; opacity: 0.7;">{{ link.desc }}</div>
</div>
</a>
</div>
<div style="text-align: center; margin-top: 3rem;">
<a href="https://github.com/RhoPaper">
<img src="https://socialify.git.ci/RhoPaper/RhoPaper/image?custom_description=%E7%BA%B8%E8%87%B3%E6%89%A7%0APaper+to+Hold.&description=1&font=Jost&logo=https%3A%2F%2Frhopaper.top%2Favatar.jpg&name=1&pattern=Circuit+Board&theme=Auto" alt="RhoPaper Banner" class="rp-banner" />
</a>
<p style="font-size: 0.9rem; opacity: 0.5;">欢迎愿意扩列的大佬们加我QQ！<br/><small>（不过本人有点社恐请见谅QwQ）</small></p>
</div>
