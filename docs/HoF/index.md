---
layout: page
---
<!-- markdownlint-disable MD033 -->
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const BBC = [
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=526143918&s=640',
    name: 'bili蓝屏的此电脑',
    title: '始祖',
    desc: '群BBC始祖级人物',
    sponsor:'/members/2-importantMembers/bili蓝屏的此电脑.md',
    actionText:'查看他的Wiki',
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=2418795196&s=640',
    name: '苏联球',
    title: '万恶之源',
    desc: '最爱黑钉佬',
    sponsor:'/members/2-importantMembers/苏联球.md',
    actionText:'查看他的Wiki',
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=1749425742&s=100',
    name: 'dfnn',
    title: '新晋成员',
    desc: '虽然入群不久，但是很快学会了如何当一名BBC',
  },
];

const Driver = [
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=3395314362&s=640',
    name: '落雪无痕LxHTT',
    title: '老司机了',
    desc: '擅长自黑',
    sponsor:'/members/2-importantMembers/落雪无痕LxHTT.md',
    actionText:'查看他的Wiki',
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=2418795196&s=640',
    name: '苏联球',
    title: '万恶之源',
    desc: '知道为什么是万恶之源了吧',
    sponsor:'/members/2-importantMembers/苏联球.md',
    actionText:'查看他的Wiki',
  },
];

const Nantong = [
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=407178567&s=640',
    name: '汝言妙，甚喜',
    title: '1',
    desc: '“老婆，我爱你”',
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=78195830&s=640',
    name: '谶无所依',
    title: '2',
    desc: '“就我一个跟男的谈吗”',
    sponsor:'/members/2-importantMembers/谶无所依.md',
    actionText:'查看他的Wiki',
  },
];

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      群BBC
    </template>
    <template #lead>
      最佳的断句大师
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="BBC"
  />

  <VPTeamPageTitle>
    <template #title>
      最佳老司机
    </template>
    <template #lead>
      兄弟，你超速了
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="Driver"
  />

  <VPTeamPageTitle>
    <template #title>
      最佳CP
    </template>
    <template #lead>
      非常相爱的彼此
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="Nantong"
  />
</VPTeamPage>
