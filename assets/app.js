(function () {
  'use strict';

function parseAnswer(line){var parts=[],m,re=/\((\d+)\)\s*([A-Z])/g;while((m=re.exec(line)))parts.push({n:+m[1],letters:[m[2]]});if(parts.length)return{mode:"sub",parts:parts};var arrow=line.match(/[A-Z](?:\s*→\s*[A-Z])+/);if(arrow)return{mode:"sub",parts:arrow[0].split("→").map(function(x,i){return{n:i+1,letters:[x.trim()]}})};var letters=(line.match(/[A-Z]/g)||[]),u=[];letters.forEach(function(x){if(u.indexOf(x)<0)u.push(x)});return{mode:u.length>1?"multi":"single",parts:[{n:1,letters:u}]}}

function parseQuestions(text){return text.split(/^## 題目\s+/m).slice(1).map(function(block){var title=(block.match(/^([^\n]+)/)||[0,""])[1].trim(),n=/^\d+$/.test(title)?+title:title,tm=block.match(/\*\*主題：\*\*\s*([^\n]+)/),am=block.match(/^\*\*正確答案：\*\*\s*(.+)$/m),al=am?am[1].trim():"",topic=tm?tm[1].trim().replace(new RegExp(String.fromCharCode(96),"g"),""):"",body=block.replace(/^[^\n]*\n/,"").replace(/\*\*主題：\*\*[^\n]*\n?/,"").replace(/^\*\*正確答案：\*\*.*$/m,"").trim();return{number:n,topic:topic,body:body,answer:parseAnswer(al)}})}

function answerText(q){if(q.answer.mode==="sub")return q.answer.parts.map(function(p){return p.n+". "+p.letters[0]}).join("；");return q.answer.parts[0].letters.join("、")}

function escapeHtml(value){return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}

function addCodeLineNumbers(html){return String(html).replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/g,function(_,attrs,content){var startMatch=attrs.match(/(?:^|\s)start=(\d+)/),start=startMatch?Math.max(1,parseInt(startMatch[1],10)):1,cleanAttrs=attrs.replace(/\s+start=\d+/g,""),lines=content.split("\n");return'<pre class="code-with-lines"><code'+cleanAttrs+' style="counter-reset:code-line '+(start-1)+';">'+lines.map(function(line){return'<span class="code-line">'+(line||"&#8203;")+'</span>'}).join("")+'</code></pre>'})}

function inlineMarkdown(value){var stash=[],tick=String.fromCharCode(96),codeRe=new RegExp(tick+"([^"+tick+"\\n]+)"+tick,"g"),text=String(value).replace(codeRe,function(_,code){var key=stash.length;stash.push("<code>"+escapeHtml(code)+"</code>");return "@@CODE"+key+"@@"});text=escapeHtml(text);text=text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,function(_,label,url){return /chatgpt\.com|chat\.openai\.com/i.test(url)?label:'<a href="'+url+'" target="_blank" rel="noopener">'+label+"</a>"});text=text.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/\*([^*\n]+)\*/g,"<em>$1</em>").replace(/_([^_\n]+)_/g,"<em>$1</em>").replace(/  \n/g,"<br>").replace(/\n/g,"<br>");return text.replace(/@@CODE(\d+)@@/g,function(_,i){return stash[+i]})}

function markdownToHtml(source){var lines=String(source).replace(/\r/g,"").split("\n"),out=[],i=0,listType=null,tick=String.fromCharCode(96),fenceRe=new RegExp("^\\s*"+tick+"{3}(.*)$");function closeList(){if(listType){out.push(listType==="ul"?"</ul>":"</ol>");listType=null}}function cells(line){return line.trim().replace(/^\||\|$/g,"").split("|").map(function(x){return x.trim()})}function tableHtml(header,rows){var h="<table><thead><tr>"+header.map(function(x){return"<th>"+inlineMarkdown(x)+"</th>"}).join("")+"</tr></thead><tbody>";rows.forEach(function(row){h+="<tr>"+header.map(function(_,j){return"<td>"+inlineMarkdown(row[j]||"")+"</td>"}).join("")+"</tr>"});return h+"</tbody></table>"}while(i<lines.length){var line=lines[i],fm=fenceRe.exec(line);if(fm){closeList();var language=fm[1].trim(),code=[],j=i+1;while(j<lines.length&&!fenceRe.test(lines[j])){code.push(lines[j]);j++}out.push("<pre><code"+(language?' class="language-'+escapeHtml(language)+'"':"")+">"+escapeHtml(code.join("\n"))+"</code></pre>");i=j<lines.length?j+1:j;continue}if(!line.trim()){closeList();i++;continue}var next=lines[i+1];if(/^\s*\|/.test(line)&&next&&/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(next)){closeList();var header=cells(line),rows=[],k=i+2;while(k<lines.length&&/^\s*\|/.test(lines[k])&&lines[k].trim()){rows.push(cells(lines[k]));k++}out.push(tableHtml(header,rows));i=k;continue}var heading=line.match(/^\s*(#{1,6})\s+(.+)$/);if(heading){closeList();var level=heading[1].length;out.push("<h"+level+">"+inlineMarkdown(heading[2])+"</h"+level+">");i++;continue}var quote=line.match(/^\s*>\s?(.*)$/);if(quote){closeList();var quoted=[];while(i<lines.length){var qm=lines[i].match(/^\s*>\s?(.*)$/);if(!qm)break;quoted.push(qm[1]);i++}out.push("<blockquote>"+inlineMarkdown(quoted.join("\n"))+"</blockquote>");continue}var ul=line.match(/^\s*[-*+]\s+(.*)$/),ol=line.match(/^\s*\d+[.)]\s+(.*)$/);if(ul||ol){var kind=ul?"ul":"ol";if(listType!==kind){closeList();listType=kind;out.push("<"+kind+">")}out.push("<li>"+inlineMarkdown((ul||ol)[1])+"</li>");i++;continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/.test(line)){closeList();out.push("<hr>");i++;continue}closeList();out.push("<p>"+inlineMarkdown(line.trim())+"</p>");i++}closeList();return out.join("")}

function normalizeQuestionMarkdown(source){var lines=String(source).replace(/\r/g,"").split("\n"),tick=String.fromCharCode(96),labelRe=new RegExp("^\\s*-\\s*"+tick+"?\\((\\d+)\\)"+tick+"?\\s*$"),inFence=false;return lines.map(function(line){if(new RegExp("^\\s*"+tick+"{3}").test(line)){inFence=!inFence;return line}if(inFence)return line;var label=line.match(labelRe);if(label)return "("+label[1]+")";if(/^\s{2,}-\s+[A-G]\.\s/.test(line))return line.replace(/^\s{2,}-\s+/,"- ");return line}).join("\n")}

function splitInlineOptionsFixed2(source){var lines=String(source).split("\n"),out=[];lines.forEach(function(line){var re=/\b([A-G])\.\s*/g,m,found=[];while((m=re.exec(line)))found.push({index:m.index});if(found.length<2){out.push(line);return}var prefix=line.slice(0,found[0].index).trim();if(prefix&&prefix!=="-")out.push(prefix);for(var i=0;i<found.length;i++){var start=found[i].index,end=i+1<found.length?found[i+1].index:line.length,part=line.slice(start,end).replace(/[;\uFF1B]\s*$/,"").trim();out.push("- "+part)}});return out.join("\n")}

function normalizeNumberedSubquestionsFixed(source){var lines=String(source).split("\n"),out=[],tick=String.fromCharCode(96),fenceRe=new RegExp("^\\s*"+tick+"{3}"),inFence=false;for(var i=0;i<lines.length;i++){var line=lines[i];if(fenceRe.test(line)){inFence=!inFence;out.push(line);continue}if(!inFence){var m=line.match(/^\s*(\d+)\.\s+(.+)$/),j=i+1;if(m){while(j<lines.length&&!lines[j].trim())j++;if(j<lines.length&&fenceRe.test(lines[j])){j++;while(j<lines.length&&!fenceRe.test(lines[j]))j++;if(j<lines.length)j++;while(j<lines.length&&!lines[j].trim())j++}if(j<lines.length&&/^\s*-\s+[A-G]\.\s/.test(lines[j])){out.push("@@SUBQ"+m[1]+"@@ "+m[2]);continue}}}out.push(line)}return out.join("\n")}

function extractChoiceGroups(q){var html=renderQuestionMarkdown(q.body),groups=[],re=/<ul>([\s\S]*?)<\/ul>/g,m;while((m=re.exec(html))){var letters=[],itemRe=/<li>\s*([A-G])\./g,x;while((x=itemRe.exec(m[1])))if(letters.indexOf(x[1])<0)letters.push(x[1]);if(letters.length)groups.push(letters)}return groups}

function normalizeChoicePrefixesFixed(source){var tick=String.fromCharCode(96),re=new RegExp("^\\s*-\\s*"+tick+"?\\((\\d+)\\)"+tick+"?\\s*([:\\uFF1A])\\s*$");return String(source).split("\n").map(function(line){var m=line.match(re);return m?"("+m[1]+")"+m[2]:line}).join("\n")}

function topicKey(value){return String(value).replace(new RegExp(String.fromCharCode(96),"g"),"").replace(/\s*:\s*\d+\s*-\s*\d+\s*$/,"").trim()}

function topicColor(value){var key=topicKey(value);if(!topicColorMap[key])topicColorMap[key]=topicColorPairs[topicColorCount++%topicColorPairs.length];return topicColorMap[key]}

function initializeTopicColors(list){list.forEach(function(q){topicColor(q.topic)})}

var topicColorPairs=[["#dbeafe","#1e40af"],["#dcfce7","#166534"],["#fef3c7","#92400e"],["#fce7f3","#9d174d"],["#ede9fe","#5b21b6"],["#cffafe","#155e75"],["#ffedd5","#9a3412"],["#e2e8f0","#334155"]],topicColorMap={},topicColorCount=0;

function originalOptionLetters(q){var found=[],ms=q.body.match(/\b([A-G])\.(?=\s|`)/g)||[];ms.forEach(function(x){var m=x.match(/([A-G])\./);if(m&&found.indexOf(m[1])<0)found.push(m[1])});q.answer.parts.forEach(function(p){p.letters.forEach(function(x){if(found.indexOf(x)<0)found.push(x)})});if(!found.length)found=["A","B","C","D"];found.sort();return found}

function optionLetters(q){var found=originalOptionLetters(q),ms=q.body.match(/\b([A-G])\./g)||[];ms.forEach(function(x){var letter=x.charAt(0);if(found.indexOf(letter)<0)found.push(letter)});found.sort();return found};

function renderQuestionMarkdownRaw(source){var prepared=normalizeChoicePrefixesFixed(splitInlineOptionsFixed2(normalizeQuestionMarkdown(source)));prepared=normalizeNumberedSubquestionsFixed(prepared);var html=markdownToHtml(prepared.replace(/[;\uFF1B]\s*(?=[A-G]\.\s*)/g,"\n"));html=html.replace(/<p>@@SUBQ(\d+)@@\s*([\s\S]*?)<\/p>/g,function(_,n,content){return'<p class="subquestion-label"><strong>'+n+'.</strong> '+content+"</p>"});return html.replace(/<p>\((\d+)\)([:\uFF1A]?)<\/p>/g,function(_,n,punctuation){return'<p class="subquestion-label"><strong>'+n+'.</strong>'+punctuation+"</p>"})};

function renderQuestionMarkdown(source) { return addCodeLineNumbers(renderQuestionMarkdownRaw(source)); }

  const byId = (id) => document.getElementById(id);
  const workspace = byId('workspace');
  const storageKey = 'its-py-cert:answers:v1:' + new URL('.', location.href).pathname;
  let mode = 'review';
  let questionIndex = 0;
  let questions = [];
  let records = Object.create(null);

  function notice(message) {
    byId('storageNotice').textContent = message;
    byId('storageNotice').hidden = !message;
  }

  function numberText(q) { return String(q.number).padStart(2, '0'); }
  function keyOf(q) { return String(q.number); }
  function sameLetters(a, b) { return a.slice().sort().join('') === b.slice().sort().join(''); }
  function isCorrect(q, selections) {
    return q.answer.parts.every((part, index) => sameLetters(part.letters, selections[index]));
  }

  function choiceGroups(q) {
    let groups = extractChoiceGroups(q);
    if (groups.length === q.answer.parts.length) {
      const union = [...new Set(groups.flat())];
      if (groups.every((group) => group.length === 1) && union.length > 1) {
        groups = groups.map(() => union.slice());
      }
      return groups;
    }
    return q.answer.parts.map(() => optionLetters(q));
  }

  function readRecords() {
    const result = Object.create(null);
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return result;
      const stored = JSON.parse(raw);
      if (stored.version !== 1 || !stored.answers || typeof stored.answers !== 'object') {
        throw new Error('Invalid record format');
      }
      let invalid = false;
      for (const q of questions) {
        const record = stored.answers[keyOf(q)];
        if (record === undefined) continue;
        const groups = choiceGroups(q);
        const valid = record && Array.isArray(record.selections) &&
          record.selections.length === q.answer.parts.length &&
          record.selections.every((letters, index) => Array.isArray(letters) && letters.length > 0 &&
            (q.answer.mode === 'multi' || letters.length === 1) &&
            new Set(letters).size === letters.length &&
            letters.every((letter) => typeof letter === 'string' && groups[index].includes(letter)));
        if (valid) {
          result[keyOf(q)] = { selections: record.selections, correct: isCorrect(q, record.selections) };
        } else {
          invalid = true;
        }
      }
      if (invalid) notice('部分答題紀錄無法讀取，這些題目暫時顯示為未答；其他有效紀錄已保留。');
    } catch (error) {
      notice('無法讀取本機答題紀錄。仍可使用題庫；請確認瀏覽器允許此網站儲存資料。');
    }
    return result;
  }

  function saveRecords() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, answers: records }));
      notice('');
    } catch (error) {
      notice('答題紀錄無法永久保存，目前僅保留在此頁面。關閉或重新整理前，請確認瀏覽器儲存空間與設定。');
    }
  }

  function recordStatus(q) {
    const record = records[keyOf(q)];
    return !record ? '⚪ 未答' : record.correct ? '🟢 答對' : '🔴 答錯';
  }

  function updateQuizControls() {
    byId('questionJump').replaceChildren(...questions.map((q, index) => {
      const option = document.createElement('option');
      option.value = String(index);
      option.textContent = recordStatus(q).split(' ')[0] + ' 題目 ' + numberText(q);
      option.setAttribute('aria-label', '題目 ' + numberText(q) + '，' + recordStatus(q).split(' ')[1]);
      return option;
    }));
    byId('questionJump').value = String(questionIndex);
    const answered = Object.keys(records).length;
    const correct = Object.values(records).filter((record) => record.correct).length;
    byId('recordSummary').textContent = `已答 ${answered} / ${questions.length} 題 · 答對 ${correct} · 答錯 ${answered - correct}`;
    byId('progressBar').style.width = `${answered / questions.length * 100}%`;
    byId('modeStatus').textContent = `答題模式 · 第 ${questionIndex + 1} / ${questions.length} 題`;
  }

  function createCard(q, index, review) {
    const record = review ? null : records[keyOf(q)];
    const locked = review || Boolean(record);
    const card = document.createElement('section');
    card.className = 'card' + (review ? ' answer-card' : '');
    card.id = 'question-' + numberText(q);
    card.tabIndex = -1;
    card.setAttribute('aria-label', '題目 ' + numberText(q));
    const color = topicColor(q.topic);
    card.innerHTML = `<div class="meta"><span class="badge">題目 ${escapeHtml(numberText(q))}</span><span class="badge topic" style="background:${color[0]};color:${color[1]}">${escapeHtml(q.topic)}</span></div><div class="question-text">${renderQuestionMarkdown(q.body)}</div><div class="answer-panel"></div>`;
    const panel = card.querySelector('.answer-panel');
    const groups = choiceGroups(q);
    q.answer.parts.forEach((part, partIndex) => {
      const fieldset = document.createElement('fieldset');
      fieldset.disabled = locked;
      if (review || record) {
        fieldset.className = review || sameLetters(record.selections[partIndex], part.letters) ? 'correct' : 'wrong';
      }
      const legend = document.createElement('legend');
      legend.textContent = q.answer.mode === 'sub' ? `${part.n}.` : q.answer.mode === 'multi' ? '選擇答案（複選）' : '選擇答案';
      fieldset.append(legend);
      const row = document.createElement('div');
      row.className = 'choices';
      groups[partIndex].forEach((letter) => {
        const wrap = document.createElement('span');
        wrap.className = 'choice';
        const input = document.createElement('input');
        input.type = q.answer.mode === 'multi' ? 'checkbox' : 'radio';
        input.name = `q-${index}-part-${partIndex}`;
        input.value = letter;
        input.id = `${review ? 'review' : 'quiz'}-${index}-${partIndex}-${letter}`;
        input.checked = review ? part.letters.includes(letter) : Boolean(record && record.selections[partIndex].includes(letter));
        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = letter;
        wrap.append(input, label);
        row.append(wrap);
      });
      fieldset.append(row);
      panel.append(fieldset);
    });
    if (!review) {
      const result = document.createElement('div');
      result.id = 'result';
      result.setAttribute('role', 'status');
      if (record) {
        result.className = 'result ' + (record.correct ? 'good' : 'bad');
        result.textContent = record.correct ? '答對了！此題已作答並鎖定。' : '答錯了，正確答案是：' + answerText(q) + '。此題已作答並鎖定。';
      }
      panel.append(result);
      const actions = document.createElement('div');
      actions.className = 'actions';
      actions.innerHTML = `<button id="prev" class="secondary" type="button" ${index === 0 ? 'disabled' : ''}>上一題</button><button id="submit" class="primary" type="button" ${record ? 'disabled' : ''}>${record ? '已作答' : '送出答案'}</button><button id="next" class="secondary" type="button" ${index === questions.length - 1 ? 'disabled' : ''}>下一題</button>`;
      panel.append(actions);
    }
    return card;
  }

  function renderQuiz() {
    workspace.className = '';
    const main = document.createElement('main');
    main.id = 'app';
    main.append(createCard(questions[questionIndex], questionIndex, false));
    workspace.replaceChildren(main);
    updateQuizControls();
    byId('prev').onclick = () => goToQuestion(questionIndex - 1);
    byId('next').onclick = () => goToQuestion(questionIndex + 1);
    byId('submit').onclick = submitAnswer;
  }

  function goToQuestion(index) {
    if (!Number.isInteger(index) || index < 0 || index >= questions.length) return;
    questionIndex = index;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function submitAnswer() {
    const q = questions[questionIndex];
    if (records[keyOf(q)]) return;
    const selections = [...workspace.querySelectorAll('fieldset')].map((fieldset) =>
      [...fieldset.querySelectorAll('input:checked')].map((input) => input.value));
    if (selections.some((letters) => !letters.length)) {
      byId('result').className = 'result bad';
      byId('result').textContent = '請先完成所有小題。';
      return;
    }
    records[keyOf(q)] = { selections, correct: isCorrect(q, selections) };
    saveRecords();
    renderQuiz();
    byId('result').tabIndex = -1;
    byId('result').focus({ preventScroll: true });
  }

  function shortTopic(value) {
    const base = topicKey(value);
    return ({ '變數與資料型態': '變數與型態', '字串與資料串列': '字串與串列',
      '判斷式與迴圈流程控制': '流程控制', '錯誤處理與單元測試': '錯誤與測試' })[base] || base;
  }

  function updateSearchToggle(expanded) {
    const button = byId('searchToggle');
    const label = expanded ? '隱藏搜尋' : '顯示搜尋';
    button.textContent = expanded ? '<<' : '>>';
    button.setAttribute('aria-expanded', String(expanded));
    button.setAttribute('aria-label', label);
    button.title = label;
  }

  function renderReview() {
    workspace.className = 'answer-layout';
    workspace.innerHTML = `<aside id="searchSidebar" class="search-sidebar" aria-label="題目搜尋">
      <h2>搜尋題目</h2><form id="searchForm" role="search">
      <label class="search-label" for="searchInput">搜尋題目或答案</label>
      <div class="search-row"><input id="searchInput" class="search-input" type="search" autocomplete="off" placeholder="輸入文字後按 Enter"><button class="search-button" type="submit">搜尋</button></div>
      <label class="search-label topic-label" for="topicFilter">主題</label>
      <select id="topicFilter" class="topic-select"><option value="">全部主題</option></select>
      <p class="search-hint">可搜尋題目、選項、主題及正確答案。</p></form>
      <p id="searchCount" class="search-count" role="status"></p>
      <nav id="searchResults" class="search-results" aria-label="搜尋結果"></nav>
      </aside><main id="app" class="answer-content"></main>`;
    const main = byId('app');
    const fragment = document.createDocumentFragment();
    const cards = questions.map((q, index) => createCard(q, index, true));
    fragment.append(...cards);
    const emptyState = document.createElement('section');
    emptyState.className = 'card summary';
    emptyState.hidden = true;
    emptyState.innerHTML = '<h2>找不到符合的題目</h2><p>請試試其他關鍵字，或將主題改為「全部主題」。</p>';
    main.append(fragment, emptyState);
    const topics = [...new Set(questions.map((q) => topicKey(q.topic)))];
    topics.forEach((topic) => {
      const option = document.createElement('option');
      option.value = topic;
      option.textContent = shortTopic(topic);
      byId('topicFilter').append(option);
    });
    function search() {
      const query = byId('searchInput').value.trim().toLocaleLowerCase();
      const topic = byId('topicFilter').value;
      const matches = questions.filter((q) => (!topic || topicKey(q.topic) === topic) &&
        (!query || [q.number, q.topic, q.body, answerText(q), q.answer.parts.map((p) => p.letters.join(' ')).join(' ')].join(' ').toLocaleLowerCase().includes(query)));
      byId('searchCount').textContent = `${query || topic ? '找到' : '全部'} ${matches.length} 題`;
      const matchedIds = new Set(matches.map(keyOf));
      cards.forEach((card, index) => { card.hidden = !matchedIds.has(keyOf(questions[index])); });
      emptyState.hidden = matches.length > 0;
      byId('modeStatus').textContent = query || topic
        ? `複習模式 · 顯示 ${matches.length} / ${questions.length} 題`
        : `複習模式 · 共 ${questions.length} 題`;
      const results = byId('searchResults');
      results.replaceChildren();
      if (!matches.length) {
        results.textContent = '找不到符合的題目。';
      }
      matches.forEach((q) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'search-result';
        const color = topicColor(q.topic);
        button.innerHTML = `<span class="badge">題目 ${escapeHtml(numberText(q))}</span><span class="badge topic" style="background:${color[0]};color:${color[1]}">${escapeHtml(shortTopic(q.topic))}</span>`;
        button.onclick = () => {
          const target = document.getElementById('question-' + numberText(q));
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
        };
        results.append(button);
      });
    }
    byId('searchForm').onsubmit = (event) => { event.preventDefault(); search(); };
    byId('topicFilter').onchange = search;
    byId('searchInput').oninput = () => { if (!byId('searchInput').value.trim()) search(); };
    byId('searchInput').onsearch = search;
    updateSearchToggle(true);
    search();
  }

  function renderMode() {
    const review = mode === 'review';
    document.body.classList.toggle('answer-mode', review);
    document.title = 'ITS Python 題庫 v2.0｜' + (review ? '複習模式' : '答題模式');
    byId('modeToggle').setAttribute('aria-checked', String(!review));
    byId('modeToggle').title = review ? '切換答題模式' : '切換複習模式';
    byId('searchToggle').hidden = !review;
    byId('clearRecords').hidden = review;
    byId('quizControls').hidden = review;
    byId('quizHint').hidden = review;
    if (review) renderReview(); else renderQuiz();
  }

  try {
    if (typeof window.ITS_QUESTION_SOURCE !== 'string') throw new Error('Missing questions');
    questions = parseQuestions(window.ITS_QUESTION_SOURCE);
    if (!questions.length || new Set(questions.map(keyOf)).size !== questions.length ||
      questions.some((q) => !q.answer.parts.length || q.answer.parts.some((part) => !part.letters.length))) {
      throw new Error('Invalid questions');
    }
    initializeTopicColors(questions);
    records = readRecords();
    renderMode();
    byId('modeToggle').disabled = false;
    byId('searchToggle').disabled = false;
  } catch (error) {
    workspace.innerHTML = '<main class="card"><h2>題庫載入錯誤</h2><p>請確認 assets 資料夾已完整上傳，再重新整理網頁。</p></main>';
    return;
  }

  byId('modeToggle').onclick = () => {
    mode = mode === 'review' ? 'quiz' : 'review';
    questionIndex = 0;
    renderMode();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  byId('questionJump').onchange = (event) => goToQuestion(Number(event.target.value));
  byId('searchToggle').onclick = () => {
    const sidebar = byId('searchSidebar');
    sidebar.hidden = !sidebar.hidden;
    workspace.classList.toggle('search-collapsed', sidebar.hidden);
    updateSearchToggle(!sidebar.hidden);
  };
  byId('clearRecords').onclick = () => {
    if (!window.confirm('確定清除全部答題紀錄嗎？所有題目將恢復未答，清除後無法復原。')) return;
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      notice('無法清除本機紀錄，原有紀錄仍保留。請確認瀏覽器允許此網站存取儲存空間後再試。');
      return;
    }
    records = Object.create(null);
    notice('');
    renderQuiz();
    byId('modeStatus').textContent += ' · 已清除全部答題紀錄';
  };
})();
