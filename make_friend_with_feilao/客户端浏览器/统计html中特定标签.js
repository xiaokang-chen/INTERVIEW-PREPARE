// 1. 先获取当前dom中所有的标签集合
const tags = document.getElementsByTagName('*');
// 2. 利用filter筛选满足条件的标签(例如查找以B开头的标签)
const finalTags = [...tags].filter((item) => {item.tagName.startsWith('B')})