const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'js', 'data');
let out = [];
// 用 stub window 跑数据文件
global.window = {};
for (let i = 1; i <= 21; i++) {
  const f = `ch${String(i).padStart(2, '0')}.js`;
  const code = fs.readFileSync(path.join(dir, f), 'utf8');
  eval(code);
}
const chapters = global.window.CHAPTERS;
console.log('chapter count:', chapters.length);
for (const ch of chapters) {
  out.push(`\n########## CH${ch.id} ${ch.title} ##########`);
  (ch.grammar || []).forEach((g, gi) => {
    out.push(`--- G${ch.id}.${gi + 1} t: ${g.t}`);
    out.push(`  RULE: ${g.rule}`);
    out.push(`  EX: ${g.ex}`);
    out.push(`  EXCN: ${g.excn}`);
    out.push(`  SIGNAL: ${g.signal}`);
  });
  (ch.quiz || []).forEach((q, qi) => {
    const ans = q.options[q.answer];
    out.push(`--- Q${ch.id}.${qi + 1}: ${q.q}`);
    out.push(`  OPTS: ${q.options.map((o, i) => `[${i}]${o}`).join(' | ')}`);
    out.push(`  ANSWER(${q.answer}): ${ans}`);
    out.push(`  EXPLAIN: ${q.explain}`);
  });
  (ch.sentences || []).forEach((s, si) => {
    out.push(`--- S${ch.id}.${si + 1}: ${s.en}`);
    (s.parts || []).forEach(p => out.push(`  PART: ${p}`));
  });
}
fs.writeFileSync(path.join(__dirname, '_tmp_audit_out.txt'), out.join('\n'), 'utf8');
console.log('done, bytes:', out.join('\n').length);
