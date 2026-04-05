// Auto-generated from README.md - DO NOT EDIT MANUALLY
// Run: python3 parse_md.py to regenerate

const tagCategories = {"methods": ["RL-based", "Self-Play", "Memory", "Multi-Agent", "Process Reward", "SFT"], "tasks": ["Search Agent", "Multi-hop QA", "Deep Research", "Benchmark", "Dataset"], "features": ["Token-Efficient", "Training-free", "Open-Source"]};

const papers = [
  {
    "date": "2025.01",
    "name": "Search-o1",
    "url": "https://arxiv.org/abs/2501.05366",
    "title": "Search-o1",
    "description": "Search-o1: Agentic Search-Enhanced Large Reasoning Models 增强具有类似O1推理模式的LRMs的自主检索能力，使模型在推理过程中能动态检索外部知识，从而提高推理的准确性和可靠性",
    "codeLinks": [
      "https://github.com/sunnynexus/Search-o1"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "Multi-Agent"
    ],
    "id": 1
  },
  {
    "date": "2025.02",
    "name": "O1 Embedder",
    "url": "https://arxiv.org/abs/2502.07555",
    "title": "O1 Embedder",
    "description": "O1 Embedder: Let Retrievers Think Before Action 已经有很多训练LLM作为Embedder的工作，如何让Embedder在检索目标文档之前生成对输入查询有用的thoughts，类似于一个推理的过程？",
    "codeLinks": [
      "https://github.com/RuiranYan/o1embedder"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [],
    "id": 2
  },
  {
    "date": "2025.03",
    "name": "DeepRetrieval",
    "url": "https://arxiv.org/abs/2503.00223",
    "title": "DeepRetrieval",
    "description": "DeepRetrieval: Hacking Real Search Engines and Retrievers with Large Language Models via Reinforcement Learning 与前面基于答案匹配度作为奖励信号不同(前面主要是RAG的QA任务)，该工作主要聚焦在检索任务，以检索指标作为奖励信号，LLM通过查询增强的方式，补充原始查询的语义，然后进行检索",
    "codeLinks": [
      "https://github.com/pat-jj/DeepRetrieval"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Benchmark"
    ],
    "id": 3
  },
  {
    "date": "2025.03",
    "name": "Search-R1",
    "url": "https://arxiv.org/abs/2503.09516",
    "title": "Search-R1",
    "description": "Search-R1: Training LLMs to Reason and Leverage Search Engines with Reinforcement Learning 收到R1的启发，将强化学习扩展到RAG场景，将搜索引擎建模为强化学习环境的一部分，使LLM能通过试错自主学习；仅用最终答案正确性作为奖励信号，创新检索内容掩码",
    "codeLinks": [
      "https://github.com/PeterGriffinJin/Search-R1"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based"
    ],
    "id": 4
  },
  {
    "date": "2025.03",
    "name": "R1-Searcher",
    "url": "https://arxiv.org/abs/2503.05592",
    "title": "R1-Searcher",
    "description": "R1-Searcher: Incentivizing the Search Capability in LLMs via Reinforcement Learning 与Search-R1类似，不过采用的是基于两阶段RL框架，通过自主调用外部搜索工具增强LLM的回答能力，无过程奖励或蒸馏。仅依赖最终奖励。",
    "codeLinks": [
      "https://github.com/RUCAIBox/R1-Searcher"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Process Reward"
    ],
    "id": 5
  },
  {
    "date": "2025.03",
    "name": "ReSearch",
    "url": "https://arxiv.org/abs/2503.19470",
    "title": "ReSearch",
    "description": "ReSearch: Learning to Reason with Search for LLMs via Reinforcement Learning 基本和Search-R1一样，不同点在于考虑了格式奖励，同时用的是F1 score",
    "codeLinks": [
      "https://github.com/Agent-RL/ReSearch"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based"
    ],
    "id": 6
  },
  {
    "date": "2025.03",
    "name": "ReAgent",
    "url": "https://arxiv.org/abs/2503.06951",
    "title": "ReAgent",
    "description": "ReAgent: Reversible Multi-Agent Reasoning for Knowledge-Enhanced Multi-Hop QA 通过引入多智能体可逆回溯推理机制，解决了多跳问答中错误积累和不可纠正的问题。",
    "codeLinks": [
      "https://github.com/astridesa/ReAgent"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "Multi-Agent",
      "Multi-hop QA"
    ],
    "id": 7
  },
  {
    "date": "2025.04",
    "name": "DeepResearcher",
    "url": "https://arxiv.org/abs/2504.03160",
    "title": "DeepResearcher",
    "description": "DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-World Environments 是现有搜索代理在实际环境中扩展困难，通过强化学习在真实环境中扩展深度研究能力，缺少在真实网络环境中，应对环境动态性，不可预测性，噪声、搜索网页质量差异和内容格式问题的强大Agent框架，不仅有Search还有Browse",
    "codeLinks": [
      "https://github.com/GAIR-NLP/DeepResearcher"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent",
      "Deep Research"
    ],
    "id": 8
  },
  {
    "date": "2025.05",
    "name": "AutoRefine",
    "url": "https://arxiv.org/abs/2505.11277",
    "title": "Search and Refine During Think",
    "description": "Search and Refine During Think: Facilitating Knowledge Refinement for Improved Retrieval-Augmented Reasoning Search-R1检索到的文档往往包含无关内容，可能影响到模型有效利用新的知识。可以考虑边检索，边精炼的方式，使模型在检索过程中自我进化。同时精炼过程提供奖励，避免仅结果奖励",
    "codeLinks": [
      "https://github.com/syr-cn/AutoRefine"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Self-Play",
      "Benchmark"
    ],
    "id": 9
  },
  {
    "date": "2025.05",
    "name": "IKEA",
    "url": "https://arxiv.org/abs/2505.07596",
    "title": "IKEA",
    "description": "IKEA: Reinforced Internal-External Knowledge Synergistic Reasoning for Efficient Adaptive Search Agent 解决现有搜索代理过度依赖外部搜索、未充分利用内部知识的问题，提出强化学习的内外部知识协同推理代理，识别知识边界，优先使用内部知识，减少冗余检索和知识冲突",
    "codeLinks": [
      "https://github.com/hzy312/knowledge-r1"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 10
  },
  {
    "date": "2025.05",
    "name": "ZeroSearch",
    "url": "https://arxiv.org/abs/2505.04588",
    "title": "ZeroSearch",
    "description": "ZeroSearch: Incentivize the Search Capability of LLMs without Searching 解决RL训练搜索代理时面临的文档质量不可控和API成本高昂两大挑战，无需真实搜索，直接用LLM模拟搜索引擎，引入课程学习策略，在降低88%成本的同时性能超过依赖真实搜索的方法",
    "codeLinks": [
      "https://github.com/Alibaba-NLP/ZeroSearch"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "Search Agent"
    ],
    "id": 11
  },
  {
    "date": "2025.05",
    "name": "InForage",
    "url": "https://arxiv.org/abs/2505.09316",
    "title": "Scent of Knowledge",
    "description": "Scent of Knowledge: Optimizing Search-Enhanced Reasoning with Information Foraging 针对传统RAG采用静态预推理检索策略、无法应对模糊多步或动态信息需求的问题，提出了InForage框架。受信息觅食理论启发，作者通过强化学习将检索增强推理形式化为动态信息搜寻过程，显式奖励中间检索质量以鼓励LLM通过自适应搜索行为迭代收集和整合信息。为支持训练，团队构建了人工引导的数据集捕捉复杂真实网络任务的迭代搜索和推理轨迹。",
    "codeLinks": [
      "https://github.com/VectorSpaceLab/Infomatica"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Dataset"
    ],
    "id": 12
  },
  {
    "date": "2025.05",
    "name": "s3",
    "url": "https://arxiv.org/abs/2505.14146",
    "title": "s3",
    "description": "s3: You Don't Need That Much Data to Train a Search Agent via RL 解决现有方法要么优化检索指标忽略下游效用，要么端到端训练导致搜索与生成纠缠的问题，提出轻量级框架解耦搜索器和生成器，仅用2.4k训练样本实现强大性能，提出Gain Beyond RAG奖励",
    "codeLinks": [
      "https://github.com/pat-jj/s3"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 13
  },
  {
    "date": "2025.05",
    "name": "StepSearch",
    "url": "https://arxiv.org/abs/2505.15107",
    "title": "StepSearch",
    "description": "StepSearch: Igniting LLMs Search Ability via Step-Wise Proximal Policy Optimization 目前Search-R1等现有方法因依赖稀疏全局奖励而缺乏对中间搜索过程细粒度监督的问题，通过引入基于信息增益和冗余惩罚的token级别步骤奖励机制（StePPO），解决了其在复杂多跳问答中缺乏中间查询和多步检索细粒度监督的问题。需要做数据增强得到Golden轨迹",
    "codeLinks": [
      "https://github.com/Zillwang/StepSearch"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-hop QA"
    ],
    "id": 14
  },
  {
    "date": "2025.05",
    "name": "R1-Searcher++",
    "url": "https://arxiv.org/abs/2505.17005",
    "title": "R1-Searcher++",
    "description": "R1-Searcher++: Incentivizing the Dynamic Knowledge Acquisition of LLMs via Reinforcement Learning 作为R1-Searcher的增强版，解决如何更好地利用内部和外部知识的问题，采用两阶段策略，引入内部知识利用奖励机制和记忆机制，实现动态知识获取",
    "codeLinks": [
      "https://github.com/RUCAIBox/R1-Searcher-plus"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based"
    ],
    "id": 15
  },
  {
    "date": "2025.05",
    "name": "Search Wisely β-GRPO",
    "url": "https://arxiv.org/abs/2505.17281",
    "title": "Search Wisely",
    "description": "Search Wisely: Mitigating Sub-optimal Agentic Searches By Reducing Uncertainty 解决代理搜索中存在的不确定性导致次优搜索行为（搜索不足or冗余搜索）的问题，通过减少不确定性来缓解次优的代理搜索，提高搜索效率和质量",
    "codeLinks": [
      "https://github.com/mianzhang/Search-R1"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "Multi-Agent",
      "Token-Efficient"
    ],
    "id": 16
  },
  {
    "date": "2025.05",
    "name": "LeTS",
    "url": "https://arxiv.org/abs/2505.17447",
    "title": "LeTS",
    "description": "LeTS: Learning to Think-and-Search via Process-and-Outcome Reward Hybridization 解决了Search-R1/ReSearch等结果监督RL方法因忽略中间步骤而导致的冗余搜索与无关搜索问题，通过设计基于规则的过程级奖励模块（包括 惩罚同一轨迹内重复检索相同文档的行为 和 利用组内优秀轨迹指导弱轨迹，解决无关搜索问题）并用过程奖励动态调整结果奖励的优势值实现过程-结果奖励混合",
    "codeLinks": [
      "https://github.com/Cheungki/LeTS"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Process Reward"
    ],
    "id": 17
  },
  {
    "date": "2025.05",
    "name": "EvolveSearch",
    "url": "https://arxiv.org/abs/2505.22501",
    "title": "EvolveSearch",
    "description": "EvolveSearch: An Iterative Self-Evolving Search Agent 解决当前搜索代理需要外部人工标注推理轨迹的问题，提出迭代自进化框架，协同结合RL与SFT，无需外部人工标注即可提升网络搜索能力，实现自我进化",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "Self-Play",
      "Multi-Agent",
      "SFT",
      "Search Agent"
    ],
    "id": 18
  },
  {
    "date": "2025.06",
    "name": "R-Search",
    "url": "https://arxiv.org/abs/2506.04185",
    "title": "R-Search",
    "description": "R-Search: Empowering LLM Reasoning with Search via Multi-Reward Reinforcement Learning 通过引入多阶段混合奖励机制（答案质量、跨模型证据质量、格式正确性）和证据整合模块，解决了Search-R1中检索时机与真实需求不对齐、推理-搜索交互深度受限的问题，使LLM能够动态决定何时检索并从全局视角提炼关键证据，从而优化整个推理-搜索交互轨迹",
    "codeLinks": [
      "https://github.com/QingFei1/R-Search"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based"
    ],
    "id": 19
  },
  {
    "date": "2025.08",
    "name": "Self-Search RL",
    "url": "https://arxiv.org/abs/2508.10874",
    "title": "SSRL",
    "description": "SSRL: Self-Search Reinforcement Learning 研究LLM作为RL任务模拟器的潜力，训练LLM直接作为搜索引擎，减少对外部搜索引擎的昂贵交互依赖，通过结构化提示和重复采样量化LLM的内在搜索能力，增强自我搜索能力",
    "codeLinks": [
      "https://github.com/TsinghuaC3I/SSRL"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based"
    ],
    "id": 20
  },
  {
    "date": "2025.08",
    "name": "ASearcher",
    "url": "https://arxiv.org/abs/2508.07976",
    "title": "Beyond Ten Turns",
    "description": "Beyond Ten Turns: Unlocking Long-Horizon Agentic Search with Large-Scale Asynchronous RL 解决长视野搜索任务的挑战，通过大规模异步强化学习解锁长视野代理搜索能力，支持超过十轮以上的复杂搜索交互",
    "codeLinks": [
      "https://github.com/inclusionAI/ASearcher"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Deep Research"
    ],
    "id": 21
  },
  {
    "date": "2025.08",
    "name": "Atom-Searcher",
    "url": "https://arxiv.org/abs/2508.12800",
    "title": "Atom-Searcher",
    "description": "Atom-Searcher: Enhancing Agentic Deep Research via Fine-Grained Atomic Thought Reward 深度研究依赖结果奖励 RL，存在梯度冲突与奖励稀疏，训练低效且难收敛。提出“原子思维”范式，把推理拆成细粒度功能单元，并设计原子思维奖励 ATR 对其逐段打分；再用课程式聚合策略先重过程 ATR、后重结果奖励，平滑优化路径。Atom-Searcher 框架 = 原子思维分解 + ATR 细粒度引导 + 课程式混合奖励，无需额外标注即可在七项基准上稳定超越 SOTA，推理更可解释、测试算力可伸缩。",
    "codeLinks": [
      "https://github.com/antgroup/Research-Venus"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Process Reward",
      "Deep Research",
      "Benchmark"
    ],
    "id": 22
  },
  {
    "date": "2025.09",
    "name": "InfoSeek",
    "url": "https://arxiv.org/abs/2509.00375",
    "title": "Open Data Synthesis For Deep Research 针对现有基准无法捕捉DeepResearch复杂性、而合成数据集常引入捷径推理和知识泄漏的问题，提出了InfoSeek。将具",
    "description": "Open Data Synthesis For Deep Research 针对现有基准无法捕捉DeepResearch复杂性、而合成数据集常引入捷径推理和知识泄漏的问题，提出了InfoSeek。将具有可验证答案的深度研究任务形式化为层次约束满足问题（HCSPs），设计一个双代理系统从大规模网页递归构建研究树，将中间节点模糊化为有效子问题，再转换为需遍历完整层次的自然语言问题。通过拒绝采样生成推理轨迹，快速扩展产出50K+训练样本和精选测试集，保留中间步骤和检索标签等元信息以支持复合奖励设计和轨迹级探索等高级优化策略。",
    "codeLinks": [
      "https://github.com/VectorSpaceLab/Infomatica"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Process Reward",
      "Deep Research",
      "Benchmark",
      "Dataset"
    ],
    "id": 23
  },
  {
    "date": "2025.09",
    "name": "EviNote-RAG",
    "url": "https://arxiv.org/abs/2509.00877",
    "title": "EviNote-RAG",
    "description": "EviNote-RAG: Enhancing RAG Models via Answer-Supportive Evidence Notes 针对 RAG 信号噪声低、多跳误差累积两大痛点，提出“检索→笔记→回答”新流程：先让模型把原始文档蒸馏成“支持证据笔记”（SEN），显式标记关键与不确定信息，再用基于蕴涵的 Evidence Quality Reward 保证笔记足以推出答案",
    "codeLinks": [
      "https://github.com/Da1yuqin/EviNoteRAG"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-hop QA"
    ],
    "id": 24
  },
  {
    "date": "2025.09",
    "name": "AceSearcher",
    "url": "https://arxiv.org/abs/2509.24193",
    "title": "AceSearcher",
    "description": "AceSearcher: Bootstrapping Reasoning and Search for LLMs via Reinforced Self-Play 检索增强 LLM 多跳检索弱、推理差，于是让同一模型“左右互搏”：自演分解者+解题者，用监督微调混合搜索推理任务后，再直接用最终答案准确率做强化学习，无需中间标注，10 数据集平均 EM 提升 7.6%，32B 版仅用 DeepSeek-V3 5% 参数就在金融文档推理上打平，1.5/8B 版也常跑赢参数量大 9 倍的现有模型。",
    "codeLinks": [
      "https://github.com/ritaranx/AceSearcher"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Self-Play",
      "SFT",
      "Multi-hop QA",
      "Dataset"
    ],
    "id": 25
  },
  {
    "date": "2025.10",
    "name": "DeSA",
    "url": "https://arxiv.org/abs/2510.04695",
    "title": "Beyond Outcome Reward",
    "description": "Beyond Outcome Reward: Decoupling Search and Answering Improves LLM Agents 目前Search-R1主要依赖基于结果的奖励，这隐含了一个关键假设：优化最终答案会自动教会智能体进行有效搜索。作者质疑这一假设，指出结果奖励存在以下根本缺陷：信用分配问题：结果奖励提供的是稀疏、延迟的反馈，无法有效指导中间的搜索行为 行为-结果脱节：没有证据表明好的结果必然来自于有效的搜索过程。导致不搜索，重复搜索，无效搜索。",
    "codeLinks": [
      "https://github.com/yiding-w/DeSA"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent"
    ],
    "id": 26
  },
  {
    "date": "2025.10",
    "name": "DecEx-RAG",
    "url": "https://arxiv.org/abs/2510.05691",
    "title": "DecEx-RAG",
    "description": "DecEx-RAG: Boosting Agentic Retrieval-Augmented Generation with Decision and Execution Optimization via Process Supervision 将RAG建模为马尔可夫决策过程，显式解耦决策（终止/检索）与执行（内容质量）两阶段，通过搜索树构建过程监督数据，并利用多轮rollout的聚合奖励动态剪枝冗余分支，将搜索复杂度从指数降为线性。采用SFT+DPO两阶段训练学习最优决策与执行策略",
    "codeLinks": [
      "https://github.com/sdsxdxl/DecEx-RAG"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Process Reward",
      "SFT",
      "Benchmark"
    ],
    "id": 27
  },
  {
    "date": "2025.10",
    "name": "HiPRAG",
    "url": "https://arxiv.org/abs/2510.07794",
    "title": "HiPRAG",
    "description": "HiPRAG: Hierarchical Process Rewards for Efficient Agentic Retrieval Augmented Generation 通过分层过程奖励优化RAG智能体搜索决策，将推理轨迹分解为可解析步骤并实时检测冗余/缺失搜索 β-GRPO续作",
    "codeLinks": [
      "https://github.com/qualidea1217/HiPRAG"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Process Reward",
      "Benchmark"
    ],
    "id": 28
  },
  {
    "date": "2025.10",
    "name": "QAgent",
    "url": "https://arxiv.org/abs/2510.08383",
    "title": "QAgent",
    "description": "QAgent: A modular Search Agent with Interactive Query Understanding 解决传统RAG难以理解复杂查询、RL训练搜索代理泛化和部署困难的问题，提出模块化搜索代理框架，通过交互式推理和检索优化查询理解，即插即用于复杂系统",
    "codeLinks": [
      "https://github.com/LivingFutureLab/QAgent"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 29
  },
  {
    "date": "2025.10",
    "name": "InfoFlow",
    "url": "https://arxiv.org/abs/2510.26575",
    "title": "InfoFlow",
    "description": "InfoFlow: Reinforcing Search Agent via Reward Density Optimization 解决深度搜索场景中奖励密度低、探索成本高的问题，提出奖励密度优化框架，通过子问题分解、失败引导提示和双代理精炼三方面提高奖励密度和训练效率",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent",
      "Token-Efficient"
    ],
    "id": 30
  },
  {
    "date": "2025.10",
    "name": "Search Self-play",
    "url": "https://arxiv.org/abs/2510.18821",
    "title": "Search Self-play",
    "description": "Search Self-play: Pushing the Frontier of Agent Capability without Supervision 解决无监督情况下如何提升代理能力的问题，通过搜索自我博弈强化学习，让LLM交替提问和解决持续训练自我进化，无需监督即可推动代理能力边界，解决当前训练Agent的RL方法对数据的依赖问题",
    "codeLinks": [
      "https://github.com/Alibaba-Quark/SSP"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Self-Play",
      "Multi-Agent"
    ],
    "id": 31
  },
  {
    "date": "2025.10",
    "name": "E-GRPO",
    "url": "https://arxiv.org/abs/2510.24694",
    "title": "Repurposing Synthetic Data for Fine-grained Search Agent Supervision 解决GRPO方法缺乏细粒度监督信号的问题，提出E-GRPO框架",
    "description": "Repurposing Synthetic Data for Fine-grained Search Agent Supervision 解决GRPO方法缺乏细粒度监督信号的问题，提出E-GRPO框架，利用合成数据中的实体信息作为细粒度奖励，解决\"近失\"问题，提升复杂搜索任务性能",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Process Reward",
      "Search Agent"
    ],
    "id": 32
  },
  {
    "date": "2025.10",
    "name": "GlobalRAG",
    "url": "https://arxiv.org/abs/2510.20548",
    "title": "GlobalRAG",
    "description": "GlobalRAG: Enhancing Global Reasoning in Multi-hop Question Answering via Reinforcement Learning 解决多跳QA中缺乏全局规划和不忠实执行的问题，通过强化学习增强全局推理，分解问题为子目标，协调检索与推理，仅使用8k训练数据就实现显著性能提升。需要做数据增强得到Golden轨迹",
    "codeLinks": [
      "https://github.com/CarnegieBin/GlobalRAG"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-hop QA"
    ],
    "id": 33
  },
  {
    "date": "2025.10",
    "name": "Interact-RAG",
    "url": "https://arxiv.org/abs/2510.27566",
    "title": "Interact-RAG",
    "description": "Interact-RAG: Reason and Interact with the Corpus, Beyond Black-Box Retrieval 现有Agentic RAG方法将检索过程视为黑盒，智能体只能被动查询，限制了复杂任务的信息探索能力。Interact-RAG通过语料库交互引擎赋予智能体细粒度检索控制权：多面检索（语义/精确搜索、加权融合）锚定匹配（实体匹配聚焦关键信息）上下文塑造（动态包含/排除文档、调整检索规模）配合推理增强工作流（全局规划器→自适应推理器→执行器）实现零样本执行和轨迹合成，再通过SFT+RL两阶段训练（GRPO算法）内化策略",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "SFT",
      "Benchmark"
    ],
    "id": 34
  },
  {
    "date": "2025.10",
    "name": "MARAG-R1",
    "url": "https://arxiv.org/abs/2510.27569",
    "title": "MARAG-R1",
    "description": "MARAG-R1: Beyond Single Retriever via Reinforcement-Learned Multi-Tool Agentic Retrieval 现有RAG系统依赖单一检索器和固定的top-k选择策略，这导致：只能访问语料库的狭窄静态子集；无法获取任务所需的全面外部信息；在需要语料库级推理和跨文档综合的任务上成为主要瓶颈。多工具架构：为LLM配备四种互补的检索工具：语义搜索（广度探索）关键词搜索（精确匹配）文档过滤（基于约束选择）聚合工具（统计综合）两阶段训练：SFT+RL 复合奖励设计：答案奖励 + 文档覆盖率奖励 + 工具探索奖励：平衡探索效率，避免冗余调用",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "SFT",
      "Benchmark",
      "Token-Efficient"
    ],
    "id": 35
  },
  {
    "date": "2025.11",
    "name": "TeaRAG",
    "url": "https://arxiv.org/abs/2511.05385",
    "title": "TeaRAG",
    "description": "TeaRAG: A Token-Efficient Agentic Retrieval-Augmented Generation Framework 现有Agentic RAG方法因过度关注答案准确性而忽视token开销，导致模型过度思考和冗余检索，且训练效率低下。TeaRAG通过两个层面提升token效率：1) 检索压缩：构建知识关联图融合语义检索与三元组图检索，用Personalized PageRank筛选关键信息，以高密度知识三元组替代冗余文本块；2) 推理压缩：提出迭代式过程感知DPO（IP-DPO），设计基于知识匹配的过程奖励函数评估每步的知识充分性并惩罚多余步骤，通过迭代优化生成更简洁的推理路径。",
    "codeLinks": [
      "https://github.com/Applied-Machine-Learning-Lab/TeaRAG"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Process Reward",
      "SFT",
      "Benchmark",
      "Token-Efficient"
    ],
    "id": 36
  },
  {
    "date": "2025.11",
    "name": "IterResearch",
    "url": "https://arxiv.org/abs/2511.07327",
    "title": "IterResearch",
    "description": "IterResearch: Rethinking Long-Horizon Agents via Markovian State Reconstruction 通过马尔可夫状态重建机制（用演进报告替代完整历史上下文）解决了单上下文范式的上下文窒息与噪声污染问题，使智能体在任意探索深度（实验验证至 2048 轮）保持恒定推理能力。提出EAPO（效率感知策略优化）——引入几何折扣奖励激励高效探索，配合自适应下采样实现稳定分布式训练。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Memory",
      "Multi-Agent",
      "Deep Research",
      "Token-Efficient"
    ],
    "id": 37
  },
  {
    "date": "2025.11",
    "name": "Bi-RAR",
    "url": "https://arxiv.org/abs/2511.09109",
    "title": "Thinking Forward and Backward",
    "description": "Thinking Forward and Backward: Multi-Objective Reinforcement Learning for Retrieval-Augmented Reasoning 现有检索增强推理方法因仅依赖最终答案监督，易导致模型生成冗长低效推理链和幻觉。通过Kolmogorov复杂度理论量化每个推理步骤的双向信息距离——既衡量与答案的接近程度（正向），也评估对问题的契合度（反向），并采用多目标强化学习优化这两个目标：设计级联奖励结构鼓励早期建立正确方向，独立训练正向/反向模型后通过权重插值融合，实现细粒度的步骤级监督，生成更精确简洁的推理过程。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Process Reward",
      "Benchmark"
    ],
    "id": 38
  },
  {
    "date": "2025.12",
    "name": "LLDS&MA-GRPO4Search-R1",
    "url": "https://arxiv.org/abs/2512.04220",
    "title": "On GRPO Collapse in Search-R1",
    "description": "On GRPO Collapse in Search-R1: The Lazy Likelihood-Displacement Death Spiral 为了解决再用GRPO训练Search-R1出现突然崩溃的现象，作者发现其核心原因是\"懒惰似然位移\"（LLD）——优化过程中正确与错误响应的似然度均出现停滞或下降，进而引发自我强化的\"LLD死亡螺旋\"，导致低置信度响应、梯度膨胀和训练崩溃。提出轻量级似然保持正则化LLDS，通过响应级门控（仅当轨迹总似然下降时激活）和令牌级选择性（仅惩罚导致下降的令牌），精准抑制LLD且最小化对优化的干扰，其变体LLDS-MA掩码答案令牌以鼓励多步推理。!🌟",
    "codeLinks": [
      "https://github.com/vengdeng/LLDS-On-Group-Relative-Policy-Optimization-Collapse-in-Search-R1"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based"
    ],
    "id": 39
  },
  {
    "date": "2025.12",
    "name": "RouteRAG",
    "url": "https://arxiv.org/abs/2512.09487",
    "title": "RouteRAG",
    "description": "RouteRAG: Efficient Retrieval-Augmented Generation from Text and Graph via Reinforcement Learning 解决RAG缺乏自适应能力：图结构或混合检索系统依赖固定流程，无法像文本RAG那样通过强化学习实现多轮动态检索，难以在推理过程中按需补充证据；检索效率问题：图检索虽对多跳推理至关重要，但计算成本远高于文本检索，现有方法无法根据查询需求灵活选择检索方式，导致不必要的开销；通过Search-R1的范式实现，两阶段RL训练",
    "codeLinks": [
      "https://github.com/YucanGuo/RouteRAG"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-hop QA",
      "Benchmark",
      "Token-Efficient"
    ],
    "id": 40
  },
  {
    "date": "2025.12",
    "name": "EKA",
    "url": "https://arxiv.org/abs/2512.20144",
    "title": "Multi-hop Reasoning via Early Knowledge Alignment 现有迭代RAG系统因模型在缺乏检索语料上下文的情况下分解问题，导致初始推理缺乏信息基础，易产生错误检",
    "description": "Multi-hop Reasoning via Early Knowledge Alignment 现有迭代RAG系统因模型在缺乏检索语料上下文的情况下分解问题，导致初始推理缺乏信息基础，易产生错误检索和级联错误。为此提出早期知识对齐（EKA），通过在规划阶段前执行首次检索并将结果注入模型，使其后续强化学习优化的迭代过程具备上下文基础",
    "codeLinks": [
      "https://github.com/yxzwang/EarlyKnowledgeAlignment"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "RL-based",
      "Multi-hop QA"
    ],
    "id": 41
  },
  {
    "date": "2025.12",
    "name": "Laser",
    "url": "https://arxiv.org/abs/2512.20458",
    "title": "Laser",
    "description": "Laser: Governing Long-Horizon Agentic Search via Structured Protocol and Context Register 基于LLM/LRM的智能体搜索系统面临两个核心瓶颈：自然语言推理的脆弱性和上下文窗口污染溢出，Laser通过符号化动作协议+状态寄存器，将智能体搜索从\"自由发挥的自然语言对话\"转变为\"可解析、可回溯、高效率的结构化程序执行\"，从根本上解决了长程推理的稳定性和可扩展性问题。免训练模式：直接通过提示工程驱动（在Qwen3-8b/32b上表现强劲）；RFT微调：使用拒绝采样微调（Rejection Sampling Fine-Tuning），从强模型（DeepSeek-V3.1）收集高质量结构化轨迹进行蒸馏",
    "codeLinks": [
      "https://github.com/ShootingWong/Laser"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "Memory",
      "Multi-Agent",
      "Deep Research",
      "Token-Efficient",
      "Training-free"
    ],
    "id": 42
  },
  {
    "date": "2025.12",
    "name": "HGMem",
    "url": "https://arxiv.org/abs/2512.23959",
    "title": "Improving Multi-step RAG with Hypergraph-based Memory for Long-Context Complex Relational Modeling 把",
    "description": "Improving Multi-step RAG with Hypergraph-based Memory for Long-Context Complex Relational Modeling 把多步 RAG 的“工作记忆”从堆叠孤立事实的被动仓库升级为可动态演化的超图：用超边灵活建模 n 阶关系，通过检索-更新-插入-合并循环让记忆不断长出高阶关联骨架，从而给后续推理提供结构化、全局化的知识支撑，显著提升长文本复杂关系与全局理解任务的效果",
    "codeLinks": [
      "https://github.com/Encyclomen/HGMem"
    ],
    "datasetLinks": [],
    "year": 2025,
    "tags": [
      "Memory"
    ],
    "id": 43
  },
  {
    "date": "2026.01",
    "name": "ARR",
    "url": "https://arxiv.org/abs/2601.04651",
    "title": "Adversarial Yet Cooperative",
    "description": "Adversarial Yet Cooperative: Multi-Perspective Reasoning in Retrieved-Augmented Language Models 对检索增强推理模型单视角局限和训练信号不足的问题，提出“对抗推理RAG”框架：让推理器与验证器互评逻辑，并用过程感知奖励同时优化两者，无需外部打分即可提升多步推理质量",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Process Reward"
    ],
    "id": 44
  },
  {
    "date": "2026.01",
    "name": "M-ASK",
    "url": "https://arxiv.org/abs/2601.04703",
    "title": "Beyond Monolithic Architectures",
    "description": "Beyond Monolithic Architectures: A Multi-Agent Search and Knowledge Optimization Framework for Agentic Search 针对当前智能体搜索系统中单一架构智能体存在的推理轨迹冗长、信用分配困难和训练不稳定等问题，该论文提出了M-ASK框架，通过将搜索行为与知识管理解耦为两个专门的智能体角色，并引入轮次级奖励机制进行细粒度监督，从而在多跳问答任务上实现了更高的答案准确率和更稳定的训练动态。",
    "codeLinks": [
      "https://github.com/chenyiqun/M-ASK"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Multi-hop QA"
    ],
    "id": 45
  },
  {
    "date": "2026.01",
    "name": "GRACE",
    "url": "https://arxiv.org/abs/2601.04525",
    "title": "GRACE",
    "description": "GRACE: Reinforcement Learning for Grounded Response and Abstention under Contextual Evidence 针对RAG“无证据也答、证据不足就编”的双重幻觉，用异构检索器自动生成训练样本，再以多阶段门控奖励强化学习，让模型同时学会证据接地与主动弃权，用1/10标注成本实现准确率与拒答率的新平衡",
    "codeLinks": [
      "https://github.com/YiboZhao624/Grace"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based"
    ],
    "id": 46
  },
  {
    "date": "2026.01",
    "name": "SmartSearch",
    "url": "https://arxiv.org/abs/2601.04888",
    "title": "SmartSearch",
    "description": "SmartSearch: Process Reward-Guided Query Refinement for Search Agents 发现 LLM 搜索智能体败在中间查询不准，于是用“过程奖励+双层信用评估”实时给每步查询打分，并只重训劣质查询及其后续轮次；配合“模仿-对齐-泛化”三阶段课程学习，让智能体自优化查询质量，在效率与准确率上全面超越现有基线。",
    "codeLinks": [
      "https://github.com/MYVAE/SmartSearch"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Process Reward",
      "Search Agent",
      "Token-Efficient"
    ],
    "id": 47
  },
  {
    "date": "2026.01",
    "name": "PRISMA",
    "url": "https://arxiv.org/abs/2601.05465",
    "title": "PRISMA",
    "description": "PRISMA: Reinforcement Learning Guided Two-Stage Policy Optimization in Multi-Agent Architecture for Open-Domain Multi-Hop Question Answering 发现端到端 RL 多跳 RAG 会“检索崩溃”找不到桥接证据，又“信用分配弱”易过拟合，于是把系统拆成 Plan-Retrieve-Inspect-Solve-Memoize 五智能体：Inspector提供基于推理的反馈，精炼规划者的分解方案，并强制要求 Solver 进行基于证据的推理，Solver 必须接地；两阶段：GRPO 先分别把 Planner/Solver 训成专家，再用 OARPO(观察感知残差策略优化)让 Inspector 学会验证据、触发修复",
    "codeLinks": [
      "https://github.com/Ameame1/PRISIMA"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Multi-hop QA"
    ],
    "id": 48
  },
  {
    "date": "2026.01",
    "name": "CaRR & C-GRPO",
    "url": "https://arxiv.org/abs/2601.06021",
    "title": "Chaining the Evidence",
    "description": "Chaining the Evidence: Robust Reinforcement Learning for Deep Search Agents with Citation-Aware Rubric Rewards 指出深度搜索 RL 只用二元结果奖励会走捷径、编幻觉，于是把复杂提问拆成可验证的单跳“评分细则”，要求智能体显式补全隐藏实体、给出正确引文并串成完整证据链；再配 C-GRPO 算法联合细则奖励与结果奖励训练，全面抑制捷径，提升证据完备性与事实准确率",
    "codeLinks": [
      "https://github.com/THUDM/CaRR"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 49
  },
  {
    "date": "2026.01",
    "name": "TreePS-RAG",
    "url": "https://arxiv.org/abs/2601.06922",
    "title": "TreePS-RAG",
    "description": "TreePS-RAG: Tree-based Process Supervision for Reinforcement Learning in Agentic RAG 指出仅用最终奖励做 RL 难以对中间推理步骤信用分配，而离线过程监督又易分布漂移；于是把多步检索-推理展开成 rollout 树，节点即步骤，用后代结局的蒙特卡洛估计在线计算每步优势，无需人工中间标签",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Process Reward"
    ],
    "id": 50
  },
  {
    "date": "2026.01",
    "name": "Dr. Zero",
    "url": "https://arxiv.org/abs/2601.07055",
    "title": "Dr. Zero",
    "description": "Dr. Zero: Self-Evolving Search Agents without Training Data 高质量训练数据难获且多轮搜索智能体在“无数据自进化”中问题单一、计算爆炸，于是让同一基模型的“命题者”与“解题者”互搏：命题者不断生成更难却可解的新题，解题者用 hop-grouped 相对策略优化（HRPO）按结构聚类批训，省掉逐题难度评估的采样开销；全程零人工数据，自进化出的智能体在多项任务上追平甚至超越全监督方案",
    "codeLinks": [
      "https://github.com/facebookresearch/drzero"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Self-Play",
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 51
  },
  {
    "date": "2026.01",
    "name": "RAGShaper",
    "url": "https://arxiv.org/abs/2601.08699v1",
    "title": "RAGShaper",
    "description": "RAGShaper: Eliciting Sophisticated Agentic RAG Skills via Automated Data Synthesis 针对 Agentic RAG 系统缺乏“带噪声”训练数据的痛点，提出 RAGShaper 框架：先用 InfoCurator 围绕种子实体检索并生成感知-认知两级干扰文档，再让教师智能体在“受限导航”下完成多跳问答，自动产出含纠错、抗噪行为的轨迹，无需人工标注即可大规模合成高质量训练数据。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Multi-hop QA"
    ],
    "id": 52
  },
  {
    "date": "2026.01",
    "name": "EvoFSM",
    "url": "https://arxiv.org/abs/2601.09465",
    "title": "EvoFSM",
    "description": "EvoFSM: Controllable Self-Evolution for Deep Research with Finite State Machines 把自演化从易失控的“自由改代码”收束到显式有限状态机，将优化空间解耦为宏观 Flow（状态转移）与微观 Skill（状态行为），用批评机制指导少量受控操作迭代 FSM，并配自我演化记忆库，把成功轨迹转为可复用先验、失败模式转为约束",
    "codeLinks": [
      "https://github.com/QuantaAlpha/EvoFSM"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Deep Research"
    ],
    "id": 53
  },
  {
    "date": "2026.01",
    "name": "BAPO",
    "url": "https://arxiv.org/abs/2601.11037",
    "title": "BAPO",
    "description": "BAPO: Boundary-Aware Policy Optimization for Reliable Agentic Search 用 RL 驱动的搜索智能体虽能迭代检索、提升答案准确率，却普遍缺乏“自知之明”——在证据不足或推理到头时仍强行给出看似合理却不可靠的答案，极少主动回答“我不知道”(IDK)，给高风险场景带来隐患。提出 BAPO（Boundary-Aware Policy Optimization）框架，通过两项机制实现“边界感知”：基于组对比的边界奖励——仅当同组内多条轨迹均无法逼近正确答案时才给 IDK 正向信号，避免误奖；自适应奖励调制器——训练初期暂停该奖励，防止 agent 把 IDK 当捷径滥用。",
    "codeLinks": [
      "https://github.com/Liushiyu-0709/BAPO-Reliable-Search"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 54
  },
  {
    "date": "2026.01",
    "name": "Agentic-R",
    "url": "https://arxiv.org/abs/2601.11888",
    "title": "Agentic-R",
    "description": "Agentic-R: Learning to Retrieve for Agentic Search 现有“搜索智能体”多轮检索依赖的仍是面向单轮 RAG 的相似度检索器，无法保证中间 passage 既局部相关又最终导向正确答案，亟需专为多轮 agentic search 定制的检索器。把检索器从“单轮相似”升级为“多轮有用”：先用 LLM 打分衡量局部相关，再用“代入该段落能否推得最终正确答案”衡量全局贡献，自动构建正负例做对比学习；同时让搜索 agent 与检索器双向迭代，agent 产出更高质量查询反哺检索器，两轮后得到跨 agent 通用、EM 提升且减少 10–15% 搜索步数的“自我进化”检索器。",
    "codeLinks": [
      "https://github.com/8421BCD/Agentic-R"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Self-Play",
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 55
  },
  {
    "date": "2026.01",
    "name": "SearchGym",
    "url": "https://arxiv.org/abs/2601.14615",
    "title": "SearchGym",
    "description": "SearchGym: Bootstrapping Real-World Search Agents via Cost-Effective and High-Fidelity Environment Simulation 通过构建高保真模拟环境解决搜索智能体训练中的数据不对齐问题，用可验证知识图谱和对齐语料库替代昂贵的真实API交互，在此基础上引入SearchGym-RL，一种课程学习方法，通过纯化反馈逐步优化智能体策略，从基本交互发展到复杂的长远规划。",
    "codeLinks": [
      "https://github.com/JIA-Lab-research/SearchGym"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 56
  },
  {
    "date": "2026.01",
    "name": "SAGE",
    "url": "https://arxiv.org/abs/2601.18202v1",
    "title": "SAGE",
    "description": "SAGE: Steerable Agentic Data Generation for Deep Search with Execution Feedback 深度搜索智能体需要跨文档多跳推理，但人工标注长轨迹成本极高，现有合成数据又难控难度与质量，导致训练样本稀缺且分布失衡。提出 SAGE——可转向的 Agentic 数据生成 pipeline：生成器先草拟 QA → 搜索 agent 实跑轨迹给出“能否答对、难度是否匹配”的执行反馈 → 生成器据此多轮精修问题与答案，直至满足预设难度。 intrinsic 评估显示生成题需多样策略且难度/正确率显著提升；extrinsic 上，用 SAGE 数据训练的 agent 在主流深度搜索基准获最高 23 % 相对提升，并可零样本迁移到 Google 搜索",
    "codeLinks": [
      "https://github.com/carriex/sage"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Multi-hop QA",
      "Benchmark"
    ],
    "id": 57
  },
  {
    "date": "2026.01",
    "name": "PaperSearchQA",
    "url": "https://arxiv.org/abs/2601.18207v1",
    "title": "PaperSearchQA",
    "description": "PaperSearchQA: Learning to Search and Reason over Scientific Papers with RLVR 现有 RLVR 搜索智能体只在通用 QA 上验证“最终答案对不对”，缺乏面向科学文献的深层技术问答，难以满足科研工作者与未来“AI 科学家”的真实需求。如何构建大规模、可验证reward 的科学文献搜索环境，让智能体学会在 1600 万篇生物医学摘要里做复杂检索与推理，并系统评估其规划、自检等能力。发布 PaperSearchQA——含 1600 万摘要的搜索语料 + 6 万可验证事实问答对 + 评测基准；基于 Search-R1 框架训练智能体，以“最终答案 EM”为可验证奖励，显著优于非 RL 检索基线，并展现出规划、推理、自验证等可解释行为；数据与代码全部开源，且创建流程可低成本扩展到其他科学领域",
    "codeLinks": [
      "https://github.com/jmhb0/PaperSearchQA"
    ],
    "datasetLinks": [
      "https://huggingface.co/datasets/jmhb/PaperSearchQA"
    ],
    "year": 2026,
    "tags": [
      "RL-based",
      "Search Agent",
      "Benchmark",
      "Open-Source"
    ],
    "id": 58
  },
  {
    "date": "2026.01",
    "name": "Dep-Search",
    "url": "https://arxiv.org/abs/2601.18771v1",
    "title": "Dep-Search",
    "description": "Dep-Search: Learning Dependency-Aware Reasoning Traces with Persistent Memory 现有“搜索+推理”框架全靠隐式自然语言串来决策搜什么、怎么用，导致子问题依赖关系混乱、旧知识无法重用、RL 信号稀疏，难以学会最优搜索策略。提出 Dep-Search，用依赖感知的结构化分解将主问题拆成带先后依赖的子图，引入持久记忆库保存已获事实；通过 GRPO 联合优化“何时检索/复用记忆/更新记忆”的显式动作，实现依赖-检索-记忆一体化控制，在 7 个 QA 数据集上显著超越强基线。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Memory",
      "Dataset"
    ],
    "id": 59
  },
  {
    "date": "2026.01",
    "name": "Yunque DeepResearch",
    "url": "https://arxiv.org/pdf/2601.19578",
    "title": "Yunque DeepResearch Technical Report 针对DeepResearch在长程任务中面临的上下文噪声累积、系统脆弱性导致级联错误、以及缺乏模块化可扩展性等关键限制，提出了",
    "description": "Yunque DeepResearch Technical Report 针对DeepResearch在长程任务中面临的上下文噪声累积、系统脆弱性导致级联错误、以及缺乏模块化可扩展性等关键限制，提出了Yunque DeepResearch框架。设计了一个层次化、模块化且鲁棒的架构，包含三个核心组件：集中式多智能体编排系统将子任务路由到原子能力池的工具和专用子代理；动态上下文管理机制将完成的子目标结构化为语义摘要以缓解信息过载；主动监督模块通过异常检测和上下文剪枝确保系统韧性。",
    "codeLinks": [
      "https://github.com/Tencent-BAC/YunqueAgent"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Deep Research"
    ],
    "id": 60
  },
  {
    "date": "2026.01",
    "name": "ProRAG",
    "url": "https://arxiv.org/abs/2601.21912v1",
    "title": "ProRAG",
    "description": "ProRAG: Process-Supervised Reinforcement Learning for Retrieval-Augmented Generation 通过MCTS构建过程奖励模型并引入双粒度优势机制，解决了长程多跳RAG任务中基于结果的RL奖励稀疏和信用分配困境，在5个多跳推理基准上显著超越强基线，特别在处理复杂长程任务时表现出优秀的鲁棒性和泛化能力。",
    "codeLinks": [
      "https://github.com/lilinwz/ProRAG"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Process Reward",
      "Multi-hop QA",
      "Deep Research",
      "Benchmark"
    ],
    "id": 61
  },
  {
    "date": "2026.01",
    "name": "JADE",
    "url": "https://arxiv.org/abs/2601.21916v1",
    "title": "JADE",
    "description": "JADE: Bridging the Strategic-Operational Gap in Dynamic Agentic RAG * 动机：现有 Agentic RAG 范式面临关键二分困境：要么在刚性固定图架构内联合优化模块（静态联合优化），丧失动态适应能力；要么赋予动态规划能力却将执行器视为冻结黑盒（动态解耦优化），导致\"战略-运营不匹配\"——规划器设计的精妙策略因执行器未协同训练而无法实现，反而造成负面性能收益且增加系统复杂度。 1. 静态方法（如 MMOA-RAG）受限于固定工作流程，无法处理需要多变推理路径的复杂多跳查询； 2. 解耦方法（如 MAO-ARAG）仅优化规划器而冻结执行器，导致规划与实际执行能力脱节； 3. 单体方法（如 Search-R1）虽提供端到端灵活性，但缺乏结构先验导致训练不稳定，在巨大上下文窗口中同时学习推理、查询和过滤会陷入优化困境。 * 提出的方法： JADE（Joint Agentic Dynamic Execution），核心包括： 1. 参数共享的 MSMDP 建模：将动态 RAG 建模为多智能体半马尔可夫决策过程，规划器和执行器（查询重写、文档选择、答案生成等）共享同一个 LLM 主干，通过角色特定提示区分功能； 2. 统一经验回放缓冲：将异构的规划和执行转移数据聚合到共享缓冲区，使用 PPO 进行端到端联合优化； 3. 双层奖励机制：全局共享奖励（最终答案质量减去计算成本）促进团队协作解决信用分配问题，局部格式惩罚确保各角色输出结构合规； 4. 动态工作流编排：规划器根据查询复杂度自适应选择\"串行分解\"、\"并行分解\"或\"直接求解\"等工作流拓扑。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Multi-hop QA"
    ],
    "id": 62
  },
  {
    "date": "2026.01",
    "name": "DeepSearchQA",
    "url": "https://arxiv.org/abs/2601.20975",
    "title": "DeepSearchQA",
    "description": "DeepSearchQA: Bridging the Comprehensiveness Gap for Deep Research Agents 通过引入 900 个要求生成完整答案集的多步骤检索任务，解决了现有单答案基准无法评估的\"全面性缺口\"问题（包括系统整理、实体去重和停止准则推理），采用 F1 分数等严格指标对深度研究智能体进行基于结果的评估，揭示了即使最先进的 Gemini Deep Research Agent 和 GPT-5 Pro 在平衡召回率与精确率（F1 约 81-82%）及完全正确率（约 66%）方面仍存在显著局限性。",
    "codeLinks": [],
    "datasetLinks": [
      "https://www.kaggle.com/benchmarks/google/dsqa/leaderboard"
    ],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Benchmark"
    ],
    "id": 63
  },
  {
    "date": "2026.02",
    "name": "InfoReasoner",
    "url": "https://arxiv.org/abs/2602.00845",
    "title": "Optimizing Agentic Reasoning with Retrieval via Synthetic Semantic Information Gain Reward 针对智能体推理中检",
    "description": "Optimizing Agentic Reasoning with Retrieval via Synthetic Semantic Information Gain Reward 针对智能体推理中检索优化缺乏密集奖励信号的问题，提出了一种基于合成语义信息增益奖励的统一框架；理论上将信息增益重新定义为模型信念状态的不确定性减少，实践上通过双向文本蕴含的语义聚类设计输出感知的内在估计器，无需人工标注即可直接从输出分布计算奖励",
    "codeLinks": [
      "https://github.com/dl-m9/InfoReasoner"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Benchmark"
    ],
    "id": 64
  },
  {
    "date": "2026.02",
    "name": "RE-TRAC",
    "url": "https://arxiv.org/abs/2602.02486",
    "title": "RE-TRAC",
    "description": "RE-TRAC: REcursive TRAjectory Compression for Deep Search Agents 针对当前基于大语言模型（LLM）的深度研究代理在执行复杂信息检索任务时存在的局限性展开，动机源于主流的ReAct框架采用线性推理结构，难以回溯先前状态、探索替代路径或在长上下文下保持全局感知，容易陷入局部最优、重复探索和低效搜索。要解决的核心问题是如何突破ReAct框架的线性限制，实现跨轨迹的有效探索与全局感知，以提升深度研究代理的信息收集与推理效率。为解决该问题，作者提出了**RE-TRAC**（REcursive TRAjectory Compression），一种通过在每条搜索轨迹后生成结构化状态表示来总结证据、不确定性、失败原因及未来计划，并将后续轨迹建立在此状态表示之上的新型代理框架，从而支持迭代反思和全局引导的规划。该方法通过轨迹压缩机制实现递归状态更新，使研究过程更具渐进性和目标导向性。",
    "codeLinks": [
      "https://github.com/microsoft/InfoAgent"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Token-Efficient"
    ],
    "id": 65
  },
  {
    "date": "2026.02",
    "name": "DAS",
    "url": "https://arxiv.org/abs/2602.03304v1",
    "title": "To Search or Not to Search",
    "description": "To Search or Not to Search: Aligning the Decision Boundary of Deep Search Agents via Causal Intervention 如何诊断和纠正深度搜索智能体的决策边界错位问题（包括过度搜索和搜索不足），即确定何时积累的信息足以回答的阈值；提出DAS（Decision Boundary Alignment for Deep Search agents）框架，包含两个关键组件：一是基于因果干预的诊断方法，通过在每个决策点比较事实轨迹和反事实轨迹来识别边界错误；二是构建来自因果反馈的偏好数据集并通过偏好优化对齐策略，从而有效校准决策边界，缓解过度搜索和搜索不足问题。",
    "codeLinks": [
      "https://github.com/Applied-Machine-Learning-Lab/WWW2026_DAS"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Dataset"
    ],
    "id": 66
  },
  {
    "date": "2026.02",
    "name": "A-RAG",
    "url": "https://arxiv.org/abs/2602.03442v1",
    "title": "A-RAG",
    "description": "A-RAG: Scaling Agentic Retrieval-Augmented Generation via Hierarchical Retrieval Interfaces 现有RAG系统仍依赖两种范式（单次检索后拼接输入或预定义工作流逐步执行），这些范式不允许模型参与检索决策，无法随着模型能力提升而有效扩展；提出A-RAG框架，通过将分层检索接口直接暴露给模型，提供关键词搜索、语义搜索和块读取三种检索工具，使智能体能够在多个粒度上自适应地搜索和检索信息，从而有效利用模型能力并动态适应不同RAG任务。",
    "codeLinks": [
      "https://github.com/Ayanami0730/arag"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Benchmark"
    ],
    "id": 67
  },
  {
    "date": "2026.02",
    "name": "Search-R2",
    "url": "https://arxiv.org/abs/2602.03647v1",
    "title": "Search-R2",
    "description": "Search-R2: Enhancing Search-Integrated Reasoning via Actor-Refiner Collaboration 搜索集成推理使语言智能体能够超越静态参数知识主动查询外部信息源，但通过强化学习训练这些智能体时面临多尺度信用分配问题（现有方法依赖稀疏的轨迹级奖励，无法区分高质量推理和偶然猜测，导致冗余或误导性的搜索行为）；提出Search-R2框架，通过Actor-Refiner协作机制增强推理，其中Actor生成初始推理轨迹，Meta-Refiner通过\"剪切-再生\"机制选择性诊断和修复缺陷步骤，并引入结合结果正确性与证据信息密度的混合奖励设计，将Actor-Refiner交互形式化为平滑混合策略，证明选择性修正能严格优于强基线。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent"
    ],
    "id": 68
  },
  {
    "date": "2026.02",
    "name": "BAR-RAG",
    "url": "https://arxiv.org/abs/2602.03689v1",
    "title": "Rethinking the Reranker",
    "description": "Rethinking the Reranker: Boundary-Aware Evidence Selection for Robust Retrieval-Augmented Generation 检索增强生成（RAG）系统依赖重排序器（reranker）从检索到的文档中选择最相关的证据，但现有方法忽视了检索文档与查询之间的边界关系，导致在证据选择时无法有效区分真正相关的文档和噪声文档；提出边界感知证据选择方法（Boundary-Aware Evidence Selection），通过引入边界感知机制来显式建模文档与查询之间的边界关系，实现更鲁棒的证据选择，提升检索增强生成系统在存在噪声文档时的性能。Reranker变成Selector。",
    "codeLinks": [
      "https://github.com/GasolSun36/BAR-RAG"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Benchmark"
    ],
    "id": 69
  },
  {
    "date": "2026.02",
    "name": "BranPO",
    "url": "https://arxiv.org/abs/2602.03719v1",
    "title": "Training Multi-Turn Search Agent via Contrastive Dynamic Branch Sampling 现有的智能体强化学习在长周期多轮任务中面临稀疏轨迹级奖",
    "description": "Training Multi-Turn Search Agent via Contrastive Dynamic Branch Sampling 现有的智能体强化学习在长周期多轮任务中面临稀疏轨迹级奖励带来的学习困难，而基于树的方法虽然试图缓解此问题但存在高方差和计算效率低下的缺陷，作者通过经验分析发现性能差异主要由轨迹尾部附近的决策造成；提出分支相对策略优化（BranPO），通过截断轨迹尾部并重新采样替代延续来构建共享前缀上的对比后缀，结合难度感知分支采样和冗余步骤掩码技术，实现了无需价值模型的高效稳定训练。",
    "codeLinks": [
      "https://github.com/YubaoZhao/BranPO"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent",
      "Token-Efficient"
    ],
    "id": 70
  },
  {
    "date": "2026.02",
    "name": "DeepRead",
    "url": "https://arxiv.org/abs/2602.05014v1",
    "title": "DeepRead",
    "description": "DeepRead: Document Structure-Aware Reasoning to Enhance Agentic Search 现有的智能体搜索系统（如Search-o1-style）在处理文档问答任务时，未能充分利用文档的结构信息，导致在理解和推理复杂文档内容时效率低下；DeepRead框架，通过引入文档结构感知的推理机制来增强智能体搜索能力，使系统能够理解和利用文档的层次结构、章节关系等结构信息，从而显著提升文档问答任务的性能。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Token-Efficient"
    ],
    "id": 71
  },
  {
    "date": "2026.02",
    "name": "SAGE",
    "url": "https://arxiv.org/abs/2602.05975",
    "title": "SAGE",
    "description": "SAGE: Benchmarking and Improving Retrieval for Deep Research Agents 现有深度研究智能体（deep research agents）在复杂信息寻求任务中依赖检索系统，但缺乏系统性的研究来深入理解这些智能体的检索行为，特别是在需要深度推理的科学文献搜索任务中；SAGE（Scientific AGentic retrieval Evaluation）基准测试框架，包含1,200个查询和20万篇论文的科学文献语料库，涵盖四种科学领域，同时提出一种语料库级别的测试时扩展框架，通过利用LLM推理为每篇论文生成信息丰富的元数据和关键词来丰富语料库，使现成的检索器更容易找到相关论文。",
    "codeLinks": [
      "https://github.com/HughieHu/Sage"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Benchmark"
    ],
    "id": 72
  },
  {
    "date": "2026.02",
    "name": "DLLM-Searcher",
    "url": "https://arxiv.org/abs/2602.07035",
    "title": "DLLM-Searcher",
    "description": "DLLM-Searcher: Adapting Diffusion Large Language Model for Search Agents 第一个dLLM Search Agent。针对扩散大语言模型推理和工具调用能力弱、ReAct 范式串行执行导致端到端延迟严重的问题，提出两阶段后训练（Agentic SFT 增强信息搜索与推理能力，Agentic VRPO 进一步提升智能体能力）和 P-ReAct 并行推理与行动范式（优先解码工具调用指令，在等待工具返回时持续思考实现并行化），使 dLLM 搜索智能体达到与主流 LLM 智能体相当性能并实现约 15% 推理加速。",
    "codeLinks": [
      "https://github.com/bubble65/DLLM-Searcher"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "SFT",
      "Search Agent"
    ],
    "id": 73
  },
  {
    "date": "2026.02",
    "name": "SCOUT-RAG",
    "url": "https://arxiv.org/abs/2602.08400v1",
    "title": "SCOUT-RAG",
    "description": "SCOUT-RAG: Scalable and Cost-Efficient Unifying Traversal for Agentic Graph-RAG over Distributed Domains 传统 Graph-RAG（基于知识图谱的检索增强生成）依赖集中式知识图谱设计，但在以下场景面临挑战：分布式环境：数据分散在不同领域（如医院、跨国组织）；访问受限：无法获得全局图谱可见性；成本敏感：无法承受穷举式查询的高昂开销。需要在无全局可见性和避免穷举查询的约束下，智能选择相关领域并确定合适的遍历深度。渐进式跨领域检索：基于增量效用目标引导检索过程，而非一次性穷举；四智能体协作系统 ① 领域相关性估计 — 判断哪些领域可能包含相关信息 ② 扩展决策 — 决定何时扩展到额外领域 ③ 深度自适应 — 动态调整遍历深度，避免不必要的图谱探索 ④ 答案合成 — 整合检索结果生成高质量答案",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent"
    ],
    "id": 74
  },
  {
    "date": "2026.02",
    "name": "GISA",
    "url": "https://arxiv.org/abs/2602.08543v1",
    "title": "GISA",
    "description": "GISA: A Benchmark for General Information-Seeking Assistant 本研究旨在解决现有信息检索代理评估基准中存在的诸多问题，如任务设计不贴近真实用户需求、依赖反向构建查询导致的不自然性、以及静态答案集易受数据污染等；为实现这一目标，GISA采用了由人工精心设计的373个真实信息寻求查询，并引入四种结构化答案格式（项目、集合、列表和表格），支持确定性度量评估；同时构建了一个包含完整人类搜索轨迹的数据集，可用于过程级监督与模仿学习，并设立定期更新的动态子集以抵抗模型记忆",
    "codeLinks": [
      "https://github.com/RUC-NLPIR/GISA"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Benchmark",
      "Dataset"
    ],
    "id": 75
  },
  {
    "date": "2026.02",
    "name": "SIGHT",
    "url": "https://arxiv.org/abs/2602.11551",
    "title": "SIGHT",
    "description": "SIGHT: Reinforcement Learning with Self-Evidence and Information-Gain Diverse Branching for Search Agent 针对多轮搜索场景中搜索结果高冗余、低信噪比以及智能体被迫解释早期嘈杂结果导致的\"隧道视野\"问题，SIGHT 提出自证据支持机制将搜索结果蒸馏为高保真证据，并通过信息增益分数驱动多样化分支动态干预（去重、反思或自适应分支），结合 GRPO 训练整合自证据和正确性奖励，使模型无需外部验证器即可内化稳健探索策略",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 76
  },
  {
    "date": "2026.02",
    "name": "DualGraph",
    "url": "https://arxiv.org/abs/2602.13830v1",
    "title": "A Tale of Two Graphs",
    "description": "A Tale of Two Graphs: Separating Knowledge Exploration from Outline Structure for Open-Ended Deep Research 针对开放式深度研究中\"搜索-然后生成\"线性累积导致的\"迷失在中间\"问题，以及大纲中心规划仅从大纲隐式推断知识缺口导致的弱监督问题，DualGraph 提出将知识探索与大纲结构分离的双图架构，通过大纲图捕获报告结构、知识图存储细粒度知识单元及其关系，联合分析两图拓扑生成针对性搜索查询，实现迭代知识驱动探索",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Deep Research"
    ],
    "id": 77
  },
  {
    "date": "2026.02",
    "name": "REDSearcher",
    "url": "https://arxiv.org/abs/2602.14234v1",
    "title": "REDSearcher",
    "description": "REDSearcher: A Scalable and Cost-Efficient Framework for Long-Horizon Search Agents 提出了 REDSearcher，一个统一框架，协同设计复杂任务合成、中期训练和后期训练：1. 任务合成：将任务合成建模为双约束优化，通过图拓扑和证据分散度精确控制任务难度，实现复杂高质量任务的可扩展生成；2. 工具增强查询：引入工具增强查询，鼓励主动使用工具而非被动回忆；3. 中期训练：强化核心原子能力（知识、规划、函数调用），大幅降低下游训练收集高质量轨迹的成本；4. 本地模拟环境：构建本地模拟环境，实现快速、低成本的强化学习算法迭代。实验结果：在纯文本和多模态搜索智能体基准测试中均达到最先进性能。开源贡献：将发布10K高质量复杂文本搜索轨迹、5K多模态轨迹和1K文本RL查询集，以及代码和模型检查点。",
    "codeLinks": [
      "https://github.com/RedSearchAgent/REDSearcher"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Benchmark",
      "Open-Source"
    ],
    "id": 78
  },
  {
    "date": "2026.02",
    "name": "ASQ",
    "url": "https://arxiv.org/abs/2602.17518v1",
    "title": "A Picture of Agentic Search 随着自动化搜索查询日益增多，信息检索系统面临范式转变，但现有工具仍以人为中心，导致性能评估与优化脱节。为此，本研究聚焦于缺乏智能体搜索行为数据集",
    "description": "A Picture of Agentic Search 随着自动化搜索查询日益增多，信息检索系统面临范式转变，但现有工具仍以人为中心，导致性能评估与优化脱节。为此，本研究聚焦于缺乏智能体搜索行为数据集这一核心问题，提出了一种系统性方法，收集推理增强检索中的全流程数据，并构建了Agentic Search Queryset（ASQ）数据集。该数据集基于HotpotQA、Researchy Questions和MS MARCO任务，包含智能体的查询、文档及内部推理，覆盖3类智能体和2种检索流程，旨在推动系统对新型代理用户的适应。",
    "codeLinks": [
      "https://github.com/fpezzuti/ASQ"
    ],
    "datasetLinks": [
      "https://huggingface.co/datasets/AgenticSearchQueryset/ASQ"
    ],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Dataset"
    ],
    "id": 79
  },
  {
    "date": "2026.02",
    "name": "RVR",
    "url": "https://arxiv.org/abs/2602.18425v1",
    "title": "RVR",
    "description": "RVR: Retrieve-Verify-Retrieve for Comprehensive Question Answering 针对多答案查询需要全面检索多样化文档的问题，RVR 提出\"检索-验证-再检索\"多轮迭代框架，通过验证器筛选高质量子集并将已验证文档增强到查询中启动下一轮检索以发现未覆盖答案，即使使用现成检索器也有效且微调后性能进一步提升",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-hop QA"
    ],
    "id": 80
  },
  {
    "date": "2026.02",
    "name": "Search-R1++",
    "url": "https://arxiv.org/abs/2602.19526v1",
    "title": "How to Train Your Deep Research Agent? Prompt, Reward, and Policy Optimization in Search-R1 通过解耦分析提示",
    "description": "How to Train Your Deep Research Agent? Prompt, Reward, and Policy Optimization in Search-R1 通过解耦分析提示模板、奖励函数和策略优化三个维度，来构建更可靠且高效的RL训练框架。作者采用包括：对比不同思维模式的提示模板（Fast Thinking vs. Slow Thinking）、设计并评估基于EM（Exact Match）和F1的奖励函数，并引入动作级惩罚机制以缓解答案回避问题，同时比较REINFORCE、PPO和GRPO等主流策略优化算法的表现。实验结果表明，Fast Thinking模板更具稳定性，F1奖励因训练崩溃表现不佳但可通过动作级惩罚改善，而REINFORCE在减少搜索步数的同时优于PPO，GRPO则稳定性最差。基于这些发现，作者提出了改进基线模型Search-R1++，显著提升了原有Search-R1在Qwen2.5-7B和Qwen2.5-3B上的性能。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent",
      "Deep Research"
    ],
    "id": 81
  },
  {
    "date": "2026.02",
    "name": "Search-P1",
    "url": "https://arxiv.org/abs/2602.22576",
    "title": "Search-P1",
    "description": "Search-P1: Path-Centric Reward Shaping for Stable and Efficient Agentic RAG Training 针对智能体 RAG 训练中稀疏结果奖励丢弃中间学习信号、失败样本无法贡献信号导致低样本效率的问题，Search-P1 提出路径中心奖励塑形框架，通过不依赖顺序的步骤覆盖率评估轨迹结构质量，使用软评分机制从失败样本提取学习信号，并结合参考规划器从自洽性和参考对齐双轨评估路径质量，在多个问答基准上相比强基线实现平均 7.7 个百分点准确率提升。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Benchmark",
      "Token-Efficient"
    ],
    "id": 82
  },
  {
    "date": "2026.03",
    "name": "DeepResearch-9K",
    "url": "https://arxiv.org/abs/2603.01152v1",
    "title": "DeepResearch-9K",
    "description": "DeepResearch-9K: A Challenging Benchmark Dataset of Deep-Research Agent 研究旨在解决当前深度研究型智能体（deep-research agents）发展中面临的两大瓶颈：一是缺乏具有真实世界难度的大规模、高挑战性数据集，二是缺少开放、可复用的数据合成与智能体训练框架。为此，论文构建了一个名为 DeepResearch-9K 的大规模基准数据集，该数据集包含 9000 个涵盖 L1 到 L3 三个难度级别的多跳问答问题，均由开源多跳 QA 数据集通过低成本自主流水线生成，并附有来自先进智能体 Tongyi-DeepResearch-30B-A3B 生成的高质量搜索轨迹、推理链和可验证答案。为支持智能体训练，作者进一步开发了开源训练框架 DeepResearch-R1，该框架支持多轮网页交互、多种强化学习（RL）方法以及包括基于规则的结果奖励和大语言模型作为评判者（LLM-as-judge）在内的多种奖励建模机制",
    "codeLinks": [
      "https://github.com/Applied-Machine-Learning-Lab/DeepResearch-R1"
    ],
    "datasetLinks": [
      "https://huggingface.co/datasets/artillerywu/DeepResearch-9K"
    ],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent",
      "Multi-hop QA",
      "Deep Research",
      "Benchmark",
      "Dataset",
      "Open-Source"
    ],
    "id": 83
  },
  {
    "date": "2026.03",
    "name": "OBM",
    "url": "https://arxiv.org/abs/2603.01416v1",
    "title": "Securing the Floor and Raising the Ceiling",
    "description": "Securing the Floor and Raising the Ceiling: A Merging-based Paradigm for Multi-modal Search Agents 该研究旨在解决当前多模态搜索智能体在构建过程中依赖大规模监督轨迹或昂贵的强化学习（RL）所带来的高训练成本、不稳定性以及标准视觉-语言模型（VLMs）面临的严重冷启动问题。论文要解决的核心问题是：如何在无需额外多模态训练数据的前提下，赋予VLMs自主调用外部搜索工具并进行多步推理的多模态搜索能力。为此，作者提出了一种无需训练的新范式——跨模态模型合并（cross-modal model merging），通过将一个基于文本的搜索智能体与基础VLM在参数级别上融合，实现多模态搜索能力的有效组合；同时，为缓解跨模态融合过程中的参数干扰，引入了一种基于显著性的合并算法Optimal Brain Merging（OBM），该方法利用少量校准样本根据参数对模型损失的影响来识别任务关键参数",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent"
    ],
    "id": 84
  },
  {
    "date": "2026.03",
    "name": "AgentIR",
    "url": "https://arxiv.org/abs/2603.04384v1",
    "title": "AgentIR",
    "description": "AgentIR: Reasoning-Aware Retrival for Deep Research Agents 与动机相似，需要适配Search Agent的检索器。现有检索模型在处理这类智能体发出的查询时，忽略了其在每次搜索前生成的自然语言推理痕迹中蕴含的丰富意图和上下文信息。为此，论文旨在解决如何有效利用这些推理轨迹以提升检索性能这一核心问题。为实现这一目标，作者提出了**Reasoning-Aware Retrieval**这一新范式，通过联合嵌入智能体的推理过程与查询来增强检索效果，并设计了数据合成方法**DR-Synth**，将标准问答数据集（如WebShaper）自动转换为适用于深度研究场景的训练样本。",
    "codeLinks": [
      "https://github.com/texttron/AgentIR"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Benchmark",
      "Dataset"
    ],
    "id": 85
  },
  {
    "date": "2026.03",
    "name": "MPW",
    "url": "https://arxiv.org/abs/2603.04751v1",
    "title": "Evaluating the Search Agent in a Parallel World 理想公司的工作。旨在解决当前对具备网页搜索能力的LLM代理（Search Agents）进行有效评估所面",
    "description": "Evaluating the Search Agent in a Parallel World 理想公司的工作。旨在解决当前对具备网页搜索能力的LLM代理（Search Agents）进行有效评估所面临的多重挑战，**研究动机**源于现有评估方法在动态性、可靠性和科学性上的不足：静态基准易因互联网信息演变而过时（如“难度坍塌”和“事实漂移”），难以区分模型是依赖参数记忆还是真实搜索与推理能力，且高质量人工标注成本高昂。为此，论文要**解决的核心问题**是如何构建一个可复现、抗时效干扰、能准确衡量搜索代理真实检索与推理能力的评估框架。为应对这些问题，作者**采用的主要方法/技术**是提出Mind-ParaWorld（MPW）框架，该框架通过采样现实世界实体生成超越模型知识截止时间的“未来场景与问题”，利用“平行世界法则模型”构建不可分割的原子事实和唯一真值，并引入“平行世界引擎模型”（PEM）动态生成基于这些原子事实的SERP式证据，使代理在封闭可控的虚拟环境中完成交互式搜索任务。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Benchmark"
    ],
    "id": 86
  },
  {
    "date": "2026.03",
    "name": "KARL",
    "url": "https://arxiv.org/abs/2603.05218v1",
    "title": "KARL",
    "description": "KARL: Knowledge Agents via Reinforcement Learning 该研究旨在应对企业级知识代理在复杂、多步骤的“基于证据的推理”（grounded reasoning）任务中表现不足的问题，尤其是在依赖专有数据且难以验证结果的场景下，现有模型缺乏系统性评估和有效训练方法（研究动机）。为此，论文聚焦于提升知识代理在多样化、高难度的企业搜索任务中的综合性能，并解决模型在分布外任务上的泛化能力与训练效率问题（解决的核心问题）。为实现这一目标，作者提出KARL——一种基于迭代大规模离线强化学习（iterative large-batch off-policy RL）的后训练范式，结合一个具备长视野推理和工具调用能力的代理合成管道（agentic synthesis pipeline），通过不断迭代生成高质量、多样化的合成训练数据来驱动多任务强化学习（采用的主要方法/技术）",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Deep Research",
      "Token-Efficient"
    ],
    "id": 87
  },
  {
    "date": "2026.03",
    "name": "DeepFact",
    "url": "https://arxiv.org/abs/2603.05912v1",
    "title": "DeepFact",
    "description": "DeepFact: Co-Evolving Benchmarks and Agents for Deep Research Factuality 旨在解决搜索增强型大语言模型代理生成的深度研究报道（DRRs）中声明级事实性验证困难的问题，其研究动机源于现有事实核查工具主要针对通用领域、原子化的简单事实，缺乏适用于复杂、多跳科学推理场景的评估基准，且静态专家标注的基准在实践中表现出脆弱性。论文要解决的核心问题是：如何构建一个可靠、可进化的DRR事实性评测基准，并开发能有效验证此类复杂报告事实性的方法。为此，作者提出了一种名为“先审计后评分”（Audit-then-Score, AtS）的演进式基准构建框架，该方法允许验证器对当前基准提出异议并提交证据，由专家作为审计员裁决争议，若提议被接受则更新基准标签和理由，从而实现基准的动态演化。基于此框架，作者构建了DeepFact-Bench——一个带可审计理由的版本化DRR事实性基准，并设计了DeepFact-Eval——一种文档级验证代理（及其轻量分组变体），用于评估DRR的事实一致性。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Multi-hop QA",
      "Deep Research",
      "Benchmark"
    ],
    "id": 88
  },
  {
    "date": "2026.03",
    "name": "WeDAS",
    "url": "https://arxiv.org/abs/2603.07241v1",
    "title": "Rethinking Deep Research from the Perspective of Web Content Distribution Matching 该论文提出WeDAS框架，通过**",
    "description": "Rethinking Deep Research from the Perspective of Web Content Distribution Matching 该论文提出WeDAS框架，通过**Query-Result Alignment Score（QRAS）** 和**少样本探测机制**解决深度搜索智能体的查询-内容错位问题：QRAS是一个0-10分的综合指标，由LLM从主题相关性、信息密度、噪音鲁棒性三个维度评估查询与检索结果的匹配度；少样本探测机制则通过迭代生成候选查询、计算QRAS分数、动态筛选高分查询的方式，在有限预算内估计局部网页内容分布，使智能体能够自适应调整查询粒度，在内容稀疏时放宽查询、密集时收紧查询，从而提升检索效率。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Search Agent",
      "Deep Research",
      "Token-Efficient"
    ],
    "id": 89
  },
  {
    "date": "2026.03",
    "name": "DualSpec",
    "url": "https://arxiv.org/abs/2603.07416v1",
    "title": "DualSpec",
    "description": "DualSpec: Accelerating Deep Research Agents via Dual-Process Action Speculation 该论文提出DualSpec框架，通过异构动作推测和语义验证加速深度研究智能体。其核心洞察是Search动作（需要显式推理制定查询）和Visit动作（基于检索结果直接选择）具有不同的不确定性特征，分别对应认知科学中的System 2和System 1。DualSpec采用小模型带推理推测Search、大模型跳过推理推测Visit的异构策略，并通过基于置信度的语义验证器（而非精确匹配）来接受或拒绝推测动作，将基座模型推理移出关键路径。实验表明该方法可实现1.33-3.28倍的端到端加速，同时保持准确率。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Deep Research"
    ],
    "id": 90
  },
  {
    "date": "2026.03",
    "name": "RecPilot",
    "url": "https://arxiv.org/abs/2603.07605v1",
    "title": "Deep Research for Recommender Systems 该论文提出RecPilot框架，将推荐系统从传统的\"物品列表展示\"转变为\"综合研究报告生成\"的深度研究范式。其核心包含两个智",
    "description": "Deep Research for Recommender Systems 该论文提出RecPilot框架，将推荐系统从传统的\"物品列表展示\"转变为\"综合研究报告生成\"的深度研究范式。其核心包含两个智能体：用户轨迹模拟智能体通过生成式建模和强化学习（结合结果奖励、协作一致性过程奖励和格式约束奖励）自主模拟用户从探索到决策的完整行为轨迹；自进化报告生成智能体则利用结构化评分标准和文本经验记忆双通道表征用户偏好，通过多维度兴趣分解进行并行排序，生成包含探索轨迹、意图摘要和多维度对比的可解释报告，并通过自进化机制基于用户反馈持续优化而无需重新训练。实验表明该方法在推荐准确性和报告质量上均显著优于基线，能有效降低用户决策负担。",
    "codeLinks": [
      "https://github.com/RUCAIBox/RecPilot"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Self-Play",
      "Process Reward",
      "Deep Research"
    ],
    "id": 91
  },
  {
    "date": "2026.03",
    "name": "SynPlanResearch-R1",
    "url": "https://arxiv.org/abs/2603.07853v1",
    "title": "SynPlanResearch-R1",
    "description": "SynPlanResearch-R1: Encouraging Tool Exploration for Deep Research with Synthetic Plans 该论文提出SynPlanResearch-R1框架，通过计划引导的合成数据解决RLVR训练研究智能体时的探索受限问题。其核心是生成随机工具计划（指定web_search和crawl_webpage的调用序列），并通过线索注入软性引导大模型生成多样化轨迹，经格式和答案正确性过滤后用于冷启动SFT，为后续RL提供强初始化。同时提出两项训练稳定技巧：对无效轨迹进行损失掩码、对JSON错误立即终止惩罚。实验表明该方法能诱导更深的工具探索和更高的策略熵，在7个基准上相比SOTA提升最高达6%。",
    "codeLinks": [
      "https://github.com/HansiZeng/syn-plan-research"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "SFT",
      "Search Agent",
      "Deep Research",
      "Benchmark"
    ],
    "id": 92
  },
  {
    "date": "2026.03",
    "name": "Ares",
    "url": "https://arxiv.org/abs/2603.07915v1",
    "title": "Ares",
    "description": "Ares: Adaptive Reasoning Effort Selection for Efficient LLM Agents 该论文提出ARES框架，通过轻量级路由器为LLM智能体的每一步动态选择最低足够的推理努力级别（低/中/高），以平衡性能与成本。其核心是自动化数据生成流程：先收集成功轨迹，再逐步骤验证最低足够推理努力（通过多次采样确保稳定性），最后生成推理依据用于监督微调；并进一步通过GRPO强化学习优化长期决策效果，结合结果奖励、推理成本惩罚和格式奖励。实验表明该方法可减少高达52.7%的推理token消耗，同时保持甚至提升任务成功率，且能跨模型规模泛化。",
    "codeLinks": [
      "https://github.com/UCSB-NLP-Chang/Ares"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "SFT",
      "Token-Efficient"
    ],
    "id": 93
  },
  {
    "date": "2026.03",
    "name": "EvalAct",
    "url": "https://arxiv.org/abs/2603.09203",
    "title": "Evaluate-as-Action",
    "description": "Evaluate-as-Action: Self-Evaluated Process Rewards for Retrieval-Augmented Agents 将检索质量评估从隐式推理转化为显式策略动作，通过强制耦合的 Search→Evaluate 协议让智能体在每次检索后立即输出结构化自评分数，从而生成密集、轨迹对齐的过程信号；配合 PCAR 方法基于这些分数对 GRPO 优势值进行段级重缩放，实现细粒度信用分配，在七个开放域 QA 基准上取得最佳平均性能，尤其显著提升了多跳推理任务的准确率。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Multi-hop QA",
      "Benchmark"
    ],
    "id": 94
  },
  {
    "date": "2026.03",
    "name": "MR-Search",
    "url": "https://arxiv.org/abs/2603.11327v1",
    "title": "Meta-Reinforcement Learning with Self-Reflection for Agentic Search 该论文提出MR-Search框架，通过元强化学习与自我反思机制解",
    "description": "Meta-Reinforcement Learning with Self-Reflection for Agentic Search 该论文提出MR-Search框架，通过元强化学习与自我反思机制解决智能体搜索中的稀疏奖励问题。其核心是将独立搜索尝试转变为跨轮次的元学习过程：每个元轮次包含多个内轮次，智能体在每轮后生成显式自我反思，将前序轮次作为上下文指导后续探索；同时提出多轮次RL算法，在轮次级别估计分组相对优势并传播未来奖励，实现细粒度信用分配。实验表明该方法在8个多跳问答基准上相比强基线实现9.2%-19.3%的相对提升，且能有效外推到更多测试轮次。",
    "codeLinks": [
      "https://github.com/tengxiao1/MR-Search"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Multi-hop QA",
      "Benchmark"
    ],
    "id": 95
  },
  {
    "date": "2026.03",
    "name": "InterDeepResearch",
    "url": "https://arxiv.org/abs/2603.12608v1",
    "title": "InterDeepResearch",
    "description": "InterDeepResearch: Enabling Human-Agent Collaborative Information Seeking through Interactive Deep Research 该论文提出InterDeepResearch系统，首个支持人机协作信息搜索的交互式深度研究系统。其核心是分层研究上下文架构，将研究过程组织为信息、动作、会话三个层次，支持动态上下文缩减和跨动作证据回溯；界面集成聊天式、图形式、卡片式三视图，通过跨视图联动和跨动作回溯机制，使用户能够实时观察研究过程、灵活调整研究方向、高效导航大规模上下文。实验表明该系统在基准测试上达到SOTA性能，用户研究验证了其有效支持人机协作。",
    "codeLinks": [
      "https://github.com/bopan3/InterDeepResearch"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Deep Research",
      "Benchmark"
    ],
    "id": 96
  },
  {
    "date": "2026.03",
    "name": "APEX-Searcher",
    "url": "https://arxiv.org/abs/2603.13853v1",
    "title": "APEX-Searcher",
    "description": "APEX-Searcher: Augmenting LLMs' Search Capabilities through Agentic Planning and Execution 该论文提出APEX-Searcher框架，通过显式分离战略规划与迭代执行来增强LLM的多跳搜索能力。其核心是两阶段训练：首先使用GRPO强化学习训练规划智能体，将复杂查询分解为逻辑有序的子问题序列；然后基于规划结果通过监督微调训练执行智能体，实现自适应多轮检索（包括知识充分性评估、动态查询生成和继续决策）。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "SFT",
      "Multi-hop QA"
    ],
    "id": 97
  },
  {
    "date": "2026.03",
    "name": "OpenSeeker",
    "url": "https://arxiv.org/abs/2603.15594v1",
    "title": "OpenSeeker",
    "description": "OpenSeeker: Democratizing Frontier Search Agents by Fully Open-Sourcing Training Data 该论文提出OpenSeeker，首个完全开源（模型和数据）且达到前沿性能的搜索智能体，旨在打破工业巨头对高质量训练数据的垄断。其核心创新包括：事实可扩展可控QA合成，通过拓扑图扩展和实体混淆将真实网页转化为复杂多跳推理问题；去噪轨迹合成，采用回顾性摘要机制在生成阶段提供清晰上下文，但训练时基于原始噪声数据强制模型学习内在去噪能力。仅用11.7k样本和单次SFT，OpenSeeker在多个基准上达到SOTA，甚至超过采用复杂训练流程的工业模型。",
    "codeLinks": [
      "https://github.com/rui-ye/OpenSeeker"
    ],
    "datasetLinks": [
      "https://huggingface.co/datasets/OpenSeeker/OpenSeeker-v1-Data"
    ],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "SFT",
      "Search Agent",
      "Multi-hop QA",
      "Benchmark",
      "Open-Source"
    ],
    "id": 98
  },
  {
    "date": "2026.03",
    "name": "MiroThinker-1.7 & H1",
    "url": "https://arxiv.org/abs/2603.15726v1",
    "title": "MiroThinker-1.7 & H1",
    "description": "MiroThinker-1.7 & H1: Towards Heavy-Duty Research Agents via Verification 该论文提出MiroThinker-1.7和MiroThinker-H1，通过\"有效交互扩展\"而非简单增加轨迹长度来提升长程推理能力。其核心包括：Agentic Mid-training阶段通过大规模监督学习强化规划、推理、工具使用和摘要等原子能力；四阶段训练流程（Mid-training→SFT→DPO→GRPO）逐步优化交互质量；Heavy-duty推理模式引入局部验证器（优化中间步骤）和全局验证器（审计完整轨迹），在可控计算预算下选择最可靠证据支持的答案。实验表明该方法在多个基准上达到SOTA，在相同参数量下实现更高性能且减少43%交互轮次。",
    "codeLinks": [
      "https://github.com/MiroMindAI/MiroThinker"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Process Reward",
      "SFT",
      "Search Agent",
      "Deep Research",
      "Benchmark"
    ],
    "id": 99
  },
  {
    "date": "2026.03",
    "name": "MyScholarQA",
    "url": "https://arxiv.org/abs/2603.16120v1",
    "title": "Language Models Don't Know What You Want",
    "description": "Language Models Don't Know What You Want: Evaluating Personalization in Deep Research Needs Real Users 当前Deep Research工具虽能综合科学论文回答查询，但缺乏对用户个体需求的理解。为此，作者提出MyScholarQA（MySQA），一个开源个性化DR系统，通过三阶段方法实现以用户为中心的研究辅助：推断用户研究兴趣画像、推荐个性化操作建议、利用多LLM协同生成遵循用户批准动作的多章节报告。实验采用合成数据集进行离线评估，并开展真实用户访谈。结果显示，尽管MySQA在LLM judge评估中表现优于基线，但真实用户反馈揭示了**九类LLM无法检测的细微错误**，证明仅依赖自动指标会忽略关键的人因因素，强调真正的个性化必须依赖**真实用户参与**而非仅靠LLM裁判。",
    "codeLinks": [
      "https://github.com/allenai/personalized-scholarqa-eval"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Deep Research",
      "Benchmark",
      "Dataset",
      "Open-Source"
    ],
    "id": 100
  },
  {
    "date": "2026.03",
    "name": "CDR",
    "url": "https://arxiv.org/abs/2603.25342v1",
    "title": "From Intent to Evidence",
    "description": "From Intent to Evidence: A Categorical Approach for Structural Evaluation of Deep Research Agents 该研究针对深度研究智能体（DRAs）评估缺乏理论严谨性的问题，基于范畴论将研究工作流形式化为函子组合，构建包含296个问题的机制感知基准，从序列连通性、V-结构拉回验证、拓扑排序和Yoneda本体论证伪四个维度进行压力测试；评估显示SOTA模型平均准确率仅19.9%，暴露出当前智能体虽能有机统一搜索与推理、在动态拓扑重排序和本体论验证上表现稳健，却在多跳结构综合上普遍崩溃，反映出对脆弱启发式而非系统性理解的依赖，实现复杂结构信息的泛化掌握仍是重大开放挑战。",
    "codeLinks": [
      "https://github.com/tzq1999/CDR"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Multi-hop QA",
      "Deep Research",
      "Benchmark"
    ],
    "id": 101
  },
  {
    "date": "2026.03",
    "name": "Marco-DeepResearch",
    "url": "https://arxiv.org/abs/2603.28376v1",
    "title": "Marco DeepResearch",
    "description": "Marco DeepResearch: Unlocking Efficient Deep Research Agents via Verification-Centric Design Marco DeepResearch 针对现有深度研究智能体在 QA 数据合成、轨迹构建和测试时扩展中缺乏显式验证机制导致错误传播的问题，提出了三层验证中心框架：在数据合成阶段引入验证机制控制问题难度并确保答案唯一正确，在轨迹构建阶段注入显式验证模式，在推理阶段将自身作为验证器实现测试时扩展，最终使 8B 规模的模型在 BrowseComp 等挑战性基准上超越或接近 30B 规模智能体的性能。",
    "codeLinks": [
      "https://github.com/AIDC-AI/Marco-DeepResearch"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Benchmark"
    ],
    "id": 102
  },
  {
    "date": "2026.03",
    "name": "MiroEval",
    "url": "https://arxiv.org/abs/2603.28407v1",
    "title": "MiroEval",
    "description": "MiroEval: Benchmarking Multimodal Deep Research Agents in Process and Outcome MiroEval 针对现有深度研究系统评估仅关注最终输出、缺乏多模态覆盖、依赖合成任务且无法动态更新的局限，构建了包含100个真实用户需求任务（含30个多模态）的可更新基准，并提出三维评估框架——自适应综合质量评估、智能体事实性验证和过程中心评估——以全面审计系统能力；实验发现过程质量能有效预测整体结果并暴露输出指标无法发现的弱点，且多模态任务使多数系统性能下降3-10分，其中MiroThinker-H1表现最优。",
    "codeLinks": [
      "https://github.com/MiroMindAI/MiroEval"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Benchmark"
    ],
    "id": 103
  },
  {
    "date": "2026.03",
    "name": "PAR<sup>2</sup>-RAG",
    "url": "https://arxiv.org/abs/2603.29085v1",
    "title": "PAR<sup>2</sup>-RAG",
    "description": "PAR<sup>2</sup>-RAG: Planned Active Retrieval and Reasoning for Multi-Hop Question Answering 针对大语言模型在多跳问答任务中表现脆弱的问题，提出了PAR²-RAG框架。现有迭代检索系统容易在早期锁定低召回率的检索路径并放大下游错误，而纯规划方法则产生无法适应中间证据变化的静态查询集。为此，作者设计了一个两阶段框架：首先通过广度优先锚定构建高召回率的证据前沿，确保覆盖充分；然后通过深度优先精修结合证据充分性控制进行迭代循环，实现灵活适应。该方法将\"覆盖\"与\"承诺\"分离。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-hop QA",
      "Benchmark"
    ],
    "id": 104
  },
  {
    "date": "2026.04",
    "name": "Doctor-RAG",
    "url": "https://arxiv.org/abs/2604.00865v1",
    "title": "Doctor-RAG",
    "description": "Doctor-RAG: Failure-Aware Repair for Agentic Retrieval-Augmented Generation 针对Agentic RAG在长推理轨迹中失败频发的问题，提出了Doctor-RAG（DR-RAG）框架。现有方法处理失败时要么仅做诊断分析，要么重跑整个检索-推理管道，导致计算开销大且推理冗余。为此设计了一个统一的诊断-修复框架：首先通过轨迹级失败诊断与定位，将错误归因到覆盖门控分类法并识别最早失败点；然后通过工具条件的局部修复，仅在失败点进行干预，同时最大化复用已验证的推理前缀和检索证据。通过显式分离错误归因与纠正，DR-RAG实现了精准错误定位和最小成本干预，在三个多跳问答基准测试上显著提升了答案准确率，同时大幅降低了推理token消耗。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Multi-hop QA",
      "Benchmark",
      "Token-Efficient"
    ],
    "id": 105
  },
  {
    "date": "2026.04",
    "name": "HERA",
    "url": "https://arxiv.org/pdf/2604.00901v1",
    "title": "Experience as a Compass",
    "description": "Experience as a Compass: Multi-agent RAG with Evolving Orchestration and Agent Prompts 针对现有多智能体RAG系统依赖静态编排策略和固定智能体行为导致在多跳任务上表现脆弱、错误传播难以归因、且难以持续适应动态环境的问题，提出了HERA(Hierarchical Evolution RAG)分层演化框架，通过经验库积累成功与失败轨迹的语义洞察来指导全局编排策略优化，同时采用角色感知提示演化（RoPE）对特定智能体进行双轴适应（操作规则和行为原则）的行为级改进，在六个知识密集型基准上相比近期SOTA平均提升38.69%，并展现出良好的跨分布泛化能力和token效率。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Multi-Agent",
      "Multi-hop QA",
      "Benchmark",
      "Token-Efficient"
    ],
    "id": 106
  },
  {
    "date": "2026.04",
    "name": "ORBIT",
    "url": "https://arxiv.org/abs/2604.01195v1",
    "title": "ORBIT",
    "description": "ORBIT: Scalable and Verifiable Data Generation for Search Agents on a Tight Budget 针对为DeepResearch构建训练数据集时人工标注昂贵、前置条件繁琐的问题，提出了ORBIT框架。现有数据生成方法依赖付费API服务，成本高昂。为此设计了一个节俭的模块化四阶段流程（种子创建、问答对生成、自我验证、外部验证），无需付费API即可生成20K推理密集型查询数据集——每对训练数据需4-5步推理、答案简短可验证，覆盖15个领域且需完整网络搜索验证。作者基于GRPO用ORBIT训练Qwen3-4B作为搜索代理基座模型，在维基百科问答任务上的实验表明，ORBIT-4B在小于4B参数的LLM中表现强劲，证明了合成数据集在训练搜索代理方面的实用性。",
    "codeLinks": [
      "https://github.com/castorini/orbit"
    ],
    "datasetLinks": [
      "https://huggingface.co/orbit-ai"
    ],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Dataset"
    ],
    "id": 107
  },
  {
    "date": "2026.04",
    "name": "Reasoning-Memory",
    "url": "https://arxiv.org/pdf/2604.01348v1",
    "title": "Procedural Knowledge at Scale Improves Reasoning 该论文针对现有测试时缩放方法孤立处理每个问题、未能系统性复用程序性知识（如问题重构、方法选择、验证回溯",
    "description": "Procedural Knowledge at Scale Improves Reasoning 该论文针对现有测试时缩放方法孤立处理每个问题、未能系统性复用程序性知识（如问题重构、方法选择、验证回溯等元推理策略）的局限，提出了**Reasoning Memory**框架——通过将大规模推理轨迹分解为3200万条\"子问题-子程序\"对构建知识库，并设计轻量级思维内检索机制，使模型能在推理过程中动态获取相关程序性先验，从而在数学、科学和编程任务上相比无检索基线提升最高19.2%，相比最强计算匹配基线提升7.9%。",
    "codeLinks": [
      "https://github.com/facebookresearch/reasoning-memory"
    ],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "Memory"
    ],
    "id": 108
  },
  {
    "date": "2026.04",
    "name": "ContextBudget",
    "url": "https://arxiv.org/abs/2604.01664v1",
    "title": "ContextBudget",
    "description": "ContextBudget: Budget-Aware Context Management for Long-Horizon Search Agents 针对长程推理搜索智能体在部署时面临的上下文预算限制（受内存、延迟和成本约束）问题，提出了Budget-Aware Context Management (BACM)方法，将上下文管理建模为带预算约束的序列决策问题，使智能体能在纳入新观察前评估可用预算并决定何时及如何压缩交互历史；进一步开发了基于课程学习的端到端强化学习方法BACM-RL来学习不同预算下的压缩策略，在组合多目标问答和长程网页浏览基准上，该方法在多种模型规模和任务复杂度下均优于现有方法，在高复杂度场景下相比强基线提升超过1.6倍，且在预算缩减时仍保持显著优势。",
    "codeLinks": [],
    "datasetLinks": [],
    "year": 2026,
    "tags": [
      "RL-based",
      "Multi-Agent",
      "Search Agent",
      "Deep Research",
      "Benchmark"
    ],
    "id": 109
  }
];
