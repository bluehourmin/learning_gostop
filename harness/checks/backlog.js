function extractBacklogIssues(backlogText) {
  const lines = backlogText.split(/\r?\n/);
  const items = [];
  let currentTitle = null;

  for (const line of lines) {
    if (line.startsWith('### ')) {
      currentTitle = line.replace(/^###\s+/, '').trim();
      continue;
    }
    const match = line.match(/- 상태: `([^`]+)`/);
    if (match && currentTitle) {
      items.push({ title: currentTitle, status: match[1] });
      currentTitle = null;
    }
  }

  return items;
}

function summarizeBacklog(items) {
  const counts = items.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  return {
    counts,
    openItems: items.filter((item) => item.status === '치명' || item.status === '미완료')
  };
}

module.exports = {
  extractBacklogIssues,
  summarizeBacklog
};
