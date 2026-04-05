import re
import os
import json

with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'README.md'), 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

tag_keywords = {
    'RL-based': ['reinforcement learning', '强化学习', 'grpo', 'ppo', 'reinforce', 'policy optimization', '奖励'],
    'Self-Play': ['self-play', '自我进化', '自我博弈', '左右互搏', '互搏', 'self-evolving', 'self-evolve', '自进化'],
    'Memory': ['memory', '持久记忆', 'hypergraph', '超图', 'context register', 'state reconstruction', 'evolving report', '演进报告'],
    'Multi-Agent': ['multi-agent', '多智能体', 'agent', 'actor-refiner', '五智能体', '四智能体'],
    'Process Reward': ['过程奖励', '步骤级', '过程监督', 'credit assignment', '过程感知', '中间步骤', 'fine-grained'],
    'SFT': ['sft', '监督微调', 'supervised fine-tuning', 'dpo', 'preference optimization'],
    'Search Agent': ['搜索智能体', '搜索代理', 'research agent', '研究智能体', 'search agent', 'deep research agent'],
    'Multi-hop QA': ['multi-hop', '多跳', '多跳问答', 'question answering'],
    'Deep Research': ['deep research', '深度研究', 'long-horizon', '长视野', '长程', 'deepresearch'],
    'Benchmark': ['benchmark', '基准', '评测', 'evaluation', 'eval'],
    'Dataset': ['dataset', 'huggingface', 'kaggle', '数据集'],
    'Token-Efficient': ['token-efficient', 'token效率', 'token开销', 'token消耗', '效率'],
    'Training-free': ['training-free', '免训练', '提示工程', 'zero-shot'],
    'Open-Source': ['open-sourc', '开源'],
}

# Organize tags by category for frontend display
tag_methods = ['RL-based', 'Self-Play', 'Memory', 'Multi-Agent', 'Process Reward', 'SFT']
tag_tasks = ['Search Agent', 'Multi-hop QA', 'Deep Research', 'Benchmark', 'Dataset']
tag_features = ['Token-Efficient', 'Training-free', 'Open-Source']
all_tags = tag_methods + tag_tasks + tag_features

def extract_tags(text):
    tags = []
    text_lower = text.lower()
    for tag in all_tags:
        for kw in tag_keywords[tag]:
            if kw.lower() in text_lower:
                if tag not in tags:
                    tags.append(tag)
                break
    return tags

papers = []

# Regex for paper entries: starts with "- [" followed by YYYY.MM]
entry_re = re.compile(r'^-\s+\[(\d{4}\.\d{2})\]\s+')

i = 0
while i < len(lines):
    line = lines[i]
    m = entry_re.match(line)
    if not m:
        i += 1
        continue

    date_short = m.group(1)

    # Extract name and arxiv URL
    name_url_match = re.search(r'\[\[?([^\]]+)\]?\]\((https?://[^\s)]+)\)', line)
    if not name_url_match:
        i += 1
        continue

    name = name_url_match.group(1)
    url = name_url_match.group(2)

    # Get text after the name+URL link on the same line
    after_link = line[name_url_match.end():]

    # Check if this is a multi-line entry (like JADE) where description is on next lines
    is_multiline = after_link.strip() == ''

    desc_parts = []
    if not is_multiline:
        desc_parts.append(after_link.strip())
    else:
        # Multi-line entry: collect continuation lines
        pass

    # Collect continuation lines (indented with 2+ spaces, or starting with  * or 1. etc.)
    j = i + 1
    while j < len(lines):
        next_line = lines[j]
        if next_line.strip() == '':
            # Empty line: could be a paragraph break in multi-line entry
            # Check if next non-empty line is still a continuation
            k = j + 1
            if k < len(lines) and (lines[k].startswith('  ') or lines[k].startswith('\t') or lines[k].startswith('    ')):
                desc_parts.append('')
                j = k
                continue
            else:
                break
        # Sub-bullet, numbered list, or continuation
        if next_line.startswith('    ') or next_line.startswith('  *') or next_line.startswith('  '):
            desc_parts.append(next_line.strip())
            j += 1
        elif next_line.startswith('- ['):
            # It's a new paper entry
            break
        else:
            break

    full_desc = ' '.join([p for p in desc_parts if p])  # filter empty

    # Extract code links (GitHub) - match any github.com URL regardless of surrounding markup
    code_links = []
    for cm in re.finditer(r'(https://github\.com/[^\s)]+)', full_desc):
        code_links.append(cm.group(1))

    # Extract dataset links (HuggingFace, Kaggle with .co and .com TLDs)
    dataset_links = []
    for dm in re.finditer(r'(https://(www\.)?(huggingface|kaggle)\.(co|com)/[^\s)]+)', full_desc):
        link = dm.group(1)
        if link not in dataset_links:
            dataset_links.append(link)

    # Clean description
    desc = full_desc
    # Step 1: Remove nested markdown links: [![code](...)](...) or [![Dataset](...)](...)
    desc = re.sub(r'\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)', '', desc)
    # Step 2: Remove any remaining embedded link patterns with nested brackets (e.g. [[name](url)])
    desc = re.sub(r'\[\[?\w[^\]]*\]?\]\([^)]*\)', '', desc)
    # Step 3: Replace normal markdown links with text (paper title links like [title](url))
    desc = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', desc)
    # Step 4: Remove leftover badge markers
    desc = re.sub(r'\s*!\s*$', '', desc)
    desc = desc.replace(' !', '').replace('! ', ' ')
    # Step 5: Clean up whitespace
    desc = re.sub(r'\s+', ' ', desc).strip()
    # Remove leading colon if any
    desc = desc.lstrip(':* ')

    # Extract title: usually before the first colon
    title_match = re.match(r'^(.+?):', desc)
    title = title_match.group(1).strip() if title_match else desc[:100]

    # Year
    year = int(date_short.split('.')[0])

    # Tags
    tags = extract_tags(desc)

    papers.append({
        'date': date_short,
        'name': name,
        'url': url,
        'title': title,
        'description': desc,
        'codeLinks': code_links,
        'datasetLinks': dataset_links,
        'year': year,
        'tags': tags,
        'id': len(papers) + 1
    })

    i = j

print(f'Total papers parsed: {len(papers)}')
for p in papers:
    print(f'  [{p["date"]}] {p["name"][:50]} -> tags: {p["tags"]} | code: {len(p["codeLinks"])} | dataset: {len(p["datasetLinks"])}')

# Generate JS
js_data = json.dumps(papers, ensure_ascii=False, indent=2)
with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src/data/papers.js'), 'w', encoding='utf-8') as f:
    f.write('// Auto-generated from README.md - DO NOT EDIT MANUALLY\n')
    f.write('// Run: python3 parse_md.py to regenerate\n\n')
    f.write('const tagCategories = ' + json.dumps({
        'methods': tag_methods,
        'tasks': tag_tasks,
        'features': tag_features
    }, ensure_ascii=False) + ';\n\n')
    f.write('const papers = ' + js_data + ';\n')

print('\nGenerated src/data/papers.js successfully')
