// Zetrix AI Academy — Knowledge Base Module
// Loaded by tutor-v2.js to provide Zetrix-specific tutoring content.
// Source: pkm/zetrix-ai-academy-pkm.md (Master AI Tutor PKM)

const zetrixKnowledgeBase = {
  // ===================== GREETINGS / INTRO =====================
  'zetrix-greeting': {
    patterns: ['zetrix academy','ai academy','what is zetrix academy','zetrix ai','about zetrix','who are you','what do you do','your purpose'],
    response: `<h4>Zetrix AI Academy Tutor</h4>
<p>I am the Zetrix AI Academy Tutor — your always-available learning assistant for AI, Zetrix Avatar, and Zetrix Claw.</p>
<p><strong>I can help you with:</strong></p>
<ul>
  <li>Understanding AI concepts (neural networks, LLMs, RAG, fine-tuning)</li>
  <li>Learning Zetrix Avatar / Zetrix Claw products</li>
  <li>Business automation, sales & marketing AI</li>
  <li>Personal productivity with AI</li>
  <li>AI for coding and debugging</li>
  <li>Building one-person companies with AI</li>
  <li>Quizzes, flashcards, and practice exercises</li>
</ul>
<p><strong>My goal:</strong> Transform you from <em>"I don't know"</em> → <em>"I understand"</em> → <em>"I can build"</em> → <em>"I can teach someone else."</em></p>
<p>Ask me anything — no question is too basic.</p>`
  },

  // ===================== CORE AI CONCEPTS =====================
  'ai-what-is-ai': {
    patterns: ['what is ai','what is artificial intelligence','define ai','ai meaning','ai basics'],
    response: `<h4>What Is Artificial Intelligence?</h4>
<p>AI describes computer systems capable of performing tasks associated with human intelligence:</p>
<ul>
  <li>Language understanding</li>
  <li>Prediction & classification</li>
  <li>Generation (text, images, code)</li>
  <li>Planning & recommendation</li>
  <li>Pattern recognition</li>
</ul>
<p><strong>Hierarchy:</strong></p>
<div class="formula-block">
  ARTIFICIAL INTELLIGENCE<br>
  ↓ MACHINE LEARNING<br>
  ↓ DEEP LEARNING<br>
  ↓ NEURAL NETWORKS
</div>
<p>AI is the broad field. Machine learning is a subset that learns from data. Deep learning uses neural networks with many layers.</p>`
  },

  'ai-machine-learning': {
    patterns: ['machine learning','ml basics','what is ml','supervised learning','unsupervised learning'],
    response: `<h4>Machine Learning</h4>
<p>Machine learning allows systems to <strong>learn patterns from data</strong> rather than relying on manually programmed rules.</p>
<p><strong>Typical process:</strong></p>
<div class="formula-block">
  DATA → TRAINING → MODEL → NEW INPUT → PREDICTION
</div>
<p><strong>Main types:</strong></p>
<ul>
  <li><strong>Supervised:</strong> Learn from labeled examples (input → known output)</li>
  <li><strong>Unsupervised:</strong> Find hidden patterns in unlabeled data</li>
  <li><strong>Reinforcement:</strong> Learn through trial and reward</li>
</ul>
<p>Example: Spam filters learn from emails marked "spam" or "not spam."</p>`
  },

  'ai-neural-networks': {
    patterns: ['neural network','neuron','weights','hidden layers','activation function','backpropagation','what is a neural network'],
    response: `<h4>Neural Networks</h4>
<p>Neural networks are mathematical models containing connected processing units (neurons) arranged in layers.</p>
<p><strong>Core concepts:</strong></p>
<ul>
  <li><strong>Input layer:</strong> Receives raw data</li>
  <li><strong>Hidden layers:</strong> Process and transform information</li>
  <li><strong>Output layer:</strong> Produces the result</li>
  <li><strong>Weights:</strong> Adjust connection strengths</li>
  <li><strong>Activation:</strong> Decides whether a neuron fires</li>
  <li><strong>Loss:</strong> Measures error</li>
  <li><strong>Optimisation:</strong> Adjusts weights to reduce loss</li>
</ul>
<p><strong>Beginner analogy:</strong> Imagine a huge control board with millions of adjustable knobs. Training gradually adjusts those knobs so the model becomes better at producing the desired output.</p>`
  },

  'ai-deep-learning': {
    patterns: ['deep learning','what is deep learning','cnn','rnn','many layers'],
    response: `<h4>Deep Learning</h4>
<p>Deep learning uses neural networks with <strong>many processing layers</strong> (hence "deep").</p>
<p><strong>Applications:</strong></p>
<ul>
  <li>Language (chatbots, translation)</li>
  <li>Images (recognition, generation)</li>
  <li>Audio (speech recognition, synthesis)</li>
  <li>Video (analysis, generation)</li>
  <li>Recommendations (Netflix, Spotify)</li>
  <li>Generative AI (ChatGPT, Midjourney)</li>
</ul>
<p><strong>Important:</strong> "Deep" refers to the network architecture, not human-like depth of understanding.</p>`
  },

  'ai-transformers': {
    patterns: ['transformer','transformers','attention','self-attention','what are transformers','bert','gpt architecture'],
    response: `<h4>Transformers</h4>
<p>Transformers are a neural-network architecture used in most modern language models (GPT, BERT, Claude).</p>
<p><strong>Core concepts:</strong></p>
<ul>
  <li><strong>Tokens:</strong> Small text units the model processes</li>
  <li><strong>Embeddings:</strong> Numerical representations of meaning</li>
  <li><strong>Attention:</strong> Determines which parts of input are most relevant</li>
  <li><strong>Self-attention:</strong> Words attend to other words in the same sentence</li>
  <li><strong>Context window:</strong> How much text the model can consider at once</li>
  <li><strong>Parameters:</strong> Billions of learned values (weights)</li>
</ul>
<p><strong>Simple explanation:</strong> Attention helps the model determine which parts of the input are most relevant to other parts. When translating "The cat sat on the mat," the model learns that "cat" and "sat" are strongly related.</p>`
  },

  'ai-tokens': {
    patterns: ['token','tokens','tokenization','what is a token','how many tokens','token limit','context limit'],
    response: `<h4>Tokens</h4>
<p>Language models process text in units called <strong>tokens</strong>.</p>
<p>A token may represent:</p>
<ul>
  <li>Part of a word</li>
  <li>A whole word</li>
  <li>Punctuation</li>
  <li>Another textual unit</li>
</ul>
<p><strong>Examples:</strong></p>
<ul>
  <li>"Chat" = 1 token</li>
  <li>"GPT" = 3 tokens (G, P, T as subword pieces)</li>
  <li>"unbelievable" = 3 tokens (un, believ, able)</li>
</ul>
<p><strong>Why tokens matter:</strong></p>
<ul>
  <li>Context limits are measured in tokens</li>
  <li>Processing cost is often per-token</li>
  <li>Tokenization affects how the model "sees" text</li>
</ul>
<p><strong>Important:</strong> One token does NOT always equal one word.</p>`
  },

  'ai-context-windows': {
    patterns: ['context window','context limit','how much context','window size','max tokens','context length'],
    response: `<h4>Context Windows</h4>
<p>The context window represents <strong>how much information a model can consider</strong> during a particular interaction.</p>
<p>It may include:</p>
<ul>
  <li>System instructions</li>
  <li>User messages</li>
  <li>Previous messages</li>
  <li>Retrieved knowledge</li>
  <li>Tool outputs</li>
</ul>
<p><strong>Key insight:</strong> Larger context can be useful but does not automatically guarantee better reasoning. Quality of attention matters too.</p>`
  },

  'ai-hallucination': {
    patterns: ['hallucination','ai hallucination','making things up','false information','untrue','fabricated'],
    response: `<h4>AI Hallucination</h4>
<p>An AI hallucination occurs when a model produces <strong>unsupported or incorrect information</strong> as though it were true.</p>
<p><strong>Mitigation strategies:</strong></p>
<ul>
  <li><strong>RAG:</strong> Ground answers in retrieved documents</li>
  <li><strong>Verification:</strong> Cross-check against trusted sources</li>
  <li><strong>Citations:</strong> Require the model to cite sources</li>
  <li><strong>Tool use:</strong> Query live data instead of relying on training memory</li>
  <li><strong>Constrained prompts:</strong> Limit what the model can claim</li>
  <li><strong>Human review:</strong> Have experts verify critical outputs</li>
  <li><strong>Structured data:</strong> Use databases rather than free-form generation</li>
</ul>
<p><strong>Important:</strong> LLMs predict likely text — they don't "know" facts in a human sense.</p>`
  },

  'ai-embeddings': {
    patterns: ['embedding','embeddings','vector','semantic search','vector search','what are embeddings','vector database'],
    response: `<h4>Embeddings</h4>
<p>Embeddings are <strong>numerical representations</strong> that capture useful relationships between information.</p>
<p><strong>Concept:</strong></p>
<div class="formula-block">
  TEXT → EMBEDDING MODEL → VECTOR (list of numbers)<br>
  ↓ COMPARE WITH OTHER VECTORS<br>
  ↓ FIND SEMANTICALLY RELATED INFORMATION
</div>
<p><strong>Key property:</strong> Similar meanings produce similar vectors.</p>
<ul>
  <li>"King" and "Queen" vectors are close</li>
  <li>"Apple" (fruit) and "Orange" are closer than "Apple" (company) and "Orange"</li>
</ul>
<p><strong>Common uses:</strong></p>
<ul>
  <li>Semantic search (find related documents)</li>
  <li>Recommendation systems</li>
  <li>Clustering similar content</li>
  <li>RAG (Retrieval-Augmented Generation)</li>
</ul>
<p><strong>Analogy:</strong> Embeddings are like coordinates representing meaning in a high-dimensional map.</p>`
  },

  'ai-llm': {
    patterns: ['llm','large language model','what is an llm','language model','gpt','chatgpt','claude','gemini','llama'],
    response: `<h4>Large Language Models (LLMs)</h4>
<p>LLMs are AI systems trained on vast amounts of text to understand and generate human language.</p>
<p><strong>How they work:</strong></p>
<ol>
  <li><strong>Pre-training:</strong> Learn patterns from billions of text examples</li>
  <li><strong>Fine-tuning:</strong> Adjust for specific tasks or behaviors</li>
  <li><strong>Inference:</strong> Predict the most likely next token(s) given input</li>
</ol>
<p><strong>Key capabilities:</strong></p>
<ul>
  <li>Answer questions</li>
  <li>Summarize text</li>
  <li>Write code</li>
  <li>Translate languages</li>
  <li>Analyze sentiment</li>
  <li>Brainstorm ideas</li>
  <li>Tool use</li>
</ul>
<p><strong>Key concepts:</strong></p>
<ul>
  <li><strong>Training:</strong> Learning from data</li>
  <li><strong>Inference:</strong> Generating outputs</li>
  <li><strong>Tokens:</strong> Text units processed</li>
  <li><strong>Context:</strong> How much text the model can see</li>
  <li><strong>Parameters:</strong> Billions of learned values</li>
  <li><strong>Hallucination:</strong> Can make things up</li>
  <li><strong>Reasoning:</strong> Step-by-step problem solving</li>
</ul>
<p><strong>Limitations:</strong> LLMs predict likely text — they don't "know" facts in a human sense. They can hallucinate (make things up).</p>`
  },

  'ai-rag': {
    patterns: ['rag','retrieval augmented generation','retrieval','what is rag','knowledge retrieval','vector database'],
    response: `<h4>RAG — Retrieval-Augmented Generation</h4>
<p>RAG allows an AI system to <strong>retrieve relevant external information</strong> before generating its answer.</p>
<p><strong>Why RAG matters:</strong></p>
<ul>
  <li>Reduces hallucinations by grounding answers in real data</li>
  <li>Provides up-to-date information (beyond training cutoff)</li>
  <li>Enables access to private/organizational knowledge</li>
</ul>
<p><strong>Architecture:</strong></p>
<div class="formula-block">
  USER QUERY → RETRIEVE DOCUMENTS → COMBINE INTO PROMPT → GENERATE ANSWER
</div>
<p><strong>Key components:</strong></p>
<ul>
  <li><strong>Document ingestion:</strong> Parse and chunk source documents</li>
  <li><strong>Embedding:</strong> Convert chunks to vectors</li>
  <li><strong>Vector store:</strong> Database for fast similarity search</li>
  <li><strong>Retrieval:</strong> Find top-k relevant chunks for a query</li>
  <li><strong>Generation:</strong> LLM answers using retrieved context</li>
</ul>
<p><strong>Example:</strong> An employee asks "What does lesson six teach?" A RAG system searches Academy materials, finds lesson six, retrieves the text, and generates a grounded answer.</p>`
  },

  'rag-example': {
    patterns: ['rag example','how does rag work example','rag use case','rag scenario'],
    response: `<h4>RAG Example</h4>
<p>Imagine an employee asks: <em>"What does lesson six of Avatar Foundations teach?"</em></p>
<p>A generic language model may not know. A RAG system can:</p>
<ol>
  <li>Search Academy materials</li>
  <li>Find lesson six</li>
  <li>Retrieve the relevant text</li>
  <li>Provide that information to the model</li>
  <li>Generate a grounded, accurate answer</li>
</ol>
<p><strong>Full RAG architecture:</strong></p>
<div class="formula-block">
  DOCUMENTS → CHUNKING → EMBEDDINGS → VECTOR DATABASE<br>
  QUESTION → QUESTION EMBEDDING → SIMILARITY SEARCH → RELEVANT CHUNKS → LLM → ANSWER
</div>
<p>This is why RAG is valuable for specialized tutors and support agents.</p>`
  },

  'vector-databases': {
    patterns: ['vector database','vector db','pinecone','weaviate','chromadb','similarity search','vector store'],
    response: `<h4>Vector Databases</h4>
<p>A vector database stores and searches <strong>numerical representations (embeddings)</strong> rather than raw text.</p>
<p><strong>Typical RAG flow:</strong></p>
<div class="formula-block">
  DOCUMENTS → CHUNKING → EMBEDDINGS → VECTOR DATABASE<br>
  <br>
  QUESTION → EMBEDDING → SIMILARITY SEARCH → TOP-K CHUNKS → LLM → ANSWER
</div>
<p><strong>Key features:</strong></p>
<ul>
  <li><strong>Similarity search:</strong> Find vectors close to the query</li>
  <li><strong>Fast retrieval:</strong> Optimized for high-dimensional search</li>
  <li><strong>Scalable:</strong> Handle millions of documents</li>
  <li><strong>Metadata filtering:</strong> Combine vector search with filters</li>
</ul>
<p><strong>Popular options:</strong> Pinecone, Weaviate, ChromaDB, Qdrant, Milvus</p>`
  },

  'chunking': {
    patterns: ['chunking','text chunking','document chunking','split documents','chunk size'],
    response: `<h4>Chunking</h4>
<p>Large documents are often divided into smaller sections (<strong>chunks</strong>) before embedding.</p>
<p><strong>Why chunking matters:</strong></p>
<ul>
  <li>Embedding models have input size limits</li>
  <li>Smaller chunks enable precise retrieval</li>
  <li>Retrieval quality depends on knowledge preparation</li>
</ul>
<p><strong>Trade-offs:</strong></p>
<ul>
  <li><strong>Chunks too small:</strong> May lose meaningful context</li>
  <li><strong>Chunks too large:</strong> May retrieve irrelevant information</li>
</ul>
<p><strong>Good chunks preserve meaningful context</strong> while keeping content focused.</p>`
  },

  'ai-fine-tuning': {
    patterns: ['fine tuning','fine-tuning','what is fine tuning','model training','adapt model','custom model','lora','rlhf'],
    response: `<h4>Fine-Tuning</h4>
<p>Fine-tuning adapts a pre-trained model for a specific task or domain by training it further on targeted data.</p>
<p><strong>Pre-training vs Fine-tuning:</strong></p>
<ul>
  <li><strong>Pre-training:</strong> Learn general language from the internet (expensive, billions of parameters)</li>
  <li><strong>Fine-tuning:</strong> Specialize the model (cheaper, smaller dataset)</li>
</ul>
<p><strong>Types of fine-tuning:</strong></p>
<ul>
  <li><strong>Full fine-tuning:</strong> Update all model parameters</li>
  <li><strong>LoRA:</strong> Efficient method that updates only a small subset</li>
  <li><strong>Instruction tuning:</strong> Teach the model to follow instructions</li>
  <li><strong>RLHF:</strong> Reinforcement Learning from Human Feedback (aligns with preferences)</li>
</ul>
<p><strong>When to use:</strong> Specific terminology, consistent tone, specialized tasks, or domain expertise.</p>`
  },

  'rag-vs-fine-tuning': {
    patterns: ['rag vs fine tuning','rag or fine tuning','difference rag fine tuning','when to use rag','when to fine tune'],
    response: `<h4>RAG vs Fine-Tuning</h4>
<p>These solve different problems and can be combined.</p>
<p><strong>Use RAG when information:</strong></p>
<ul>
  <li>Changes frequently</li>
  <li>Comes from documents</li>
  <li>Should be retrievable</li>
  <li>Needs updates without retraining</li>
</ul>
<p><strong>Use fine-tuning when:</strong></p>
<ul>
  <li>Consistent behavior matters</li>
  <li>Specialized output patterns are required</li>
  <li>Training examples are available</li>
</ul>
<p><strong>Comparison:</strong></p>
<div class="formula-block">
  RAG: Retrieves external info at inference time<br>
  FINE-TUNING: Adjusts model weights through training<br>
  PROMPT ENGINEERING: Instructions at inference time
</div>
<p>They may be combined for best results.</p>`
  },

  'model-deployment': {
    patterns: ['model deployment','deploy ai model','hosting model','ai api','serve model','inference server'],
    response: `<h4>Model Deployment</h4>
<p>Deployment involves making an AI model or application available to users.</p>
<p><strong>Key concepts:</strong></p>
<ul>
  <li><strong>APIs:</strong> Interface for applications to call the model</li>
  <li><strong>Servers:</strong> Hardware/cloud resources running the model</li>
  <li><strong>Authentication:</strong> Who can access the API</li>
  <li><strong>Scaling:</strong> Handle more users and requests</li>
  <li><strong>Monitoring:</strong> Track performance, errors, usage</li>
  <li><strong>Reliability:</strong> Uptime, redundancy, failover</li>
  <li><strong>Latency:</strong> Response time</li>
  <li><strong>Cost:</strong> Compute and token pricing</li>
  <li><strong>Security:</strong> Protect models and data</li>
</ul>`
  },

  'ai-prompt-engineering': {
    patterns: ['prompt engineering','prompt','how to prompt','prompt tips','better prompts','prompt framework','write a prompt'],
    response: `<h4>Prompt Engineering</h4>
<p>Prompt engineering is the skill of crafting effective instructions for AI models.</p>
<p><strong>Use the framework:</strong></p>
<div class="formula-block">
  ROLE + TASK + CONTEXT + CONSTRAINTS + OUTPUT
</div>
<p><strong>Example:</strong></p>
<blockquote>"Act as a business analyst. Compare three customer-service automation approaches for a Malaysian SME. Evaluate implementation difficulty, cost, scalability and risks. Output as a table followed by a recommendation."</blockquote>
<p><strong>Best practices:</strong></p>
<ul>
  <li>Be specific and explicit</li>
  <li>Provide examples (few-shot prompting)</li>
  <li>Break complex tasks into steps</li>
  <li>Iterate: ask, review, refine, verify</li>
  <li>Set output format (table, bullet list, JSON)</li>
</ul>`
  },

  'prompt-iteration': {
    patterns: ['prompt iteration','iterate prompt','refine prompt','improve prompt','prompt testing'],
    response: `<h4>Prompt Iteration</h4>
<p>A prompt does not need to be perfect on the first attempt. Iteration is key.</p>
<div class="formula-block">
  ASK → REVIEW → IDENTIFY PROBLEM → REFINE → VERIFY
</div>
<p><strong>Process:</strong></p>
<ol>
  <li><strong>Ask:</strong> Write your first prompt</li>
  <li><strong>Review:</strong> Evaluate the output</li>
  <li><strong>Identify:</strong> What's missing or wrong?</li>
  <li><strong>Refine:</strong> Adjust the prompt</li>
  <li><strong>Verify:</strong> Test again</li>
</ol>
<p>Each cycle improves results. Treat prompting like debugging.</p>`
  },

  'prompt-chaining': {
    patterns: ['prompt chaining','chain prompts','break down task','step by step prompt','multi-step prompt'],
    response: `<h4>Prompt Chaining</h4>
<p>Complex tasks can be divided into smaller, chained prompts rather than one giant instruction.</p>
<p><strong>Instead of:</strong></p>
<blockquote>"Create my entire business."</blockquote>
<p><strong>Use sequential steps:</strong></p>
<ol>
  <li>Identify customer</li>
  <li>Define problem</li>
  <li>Develop offer</li>
  <li>Research competitors</li>
  <li>Develop positioning</li>
  <li>Build marketing</li>
  <li>Automate operations</li>
</ol>
<p>Breaking tasks improves control, quality, and debuggability.</p>`
  },

  'ai-agents': {
    patterns: ['ai agent','agent','what is an agent','autonomous agent','tool use','agent system'],
    response: `<h4>AI Agents</h4>
<p>An AI agent is an AI system that can <strong>work toward a goal</strong> and potentially use tools to take actions.</p>
<p><strong>Chatbot vs Agent:</strong></p>
<ul>
  <li><strong>Chatbot:</strong> Tells you how to schedule a meeting</li>
  <li><strong>Agent:</strong> Checks your calendar, finds an available time, and creates the meeting</li>
</ul>
<p><strong>Simple model:</strong></p>
<div class="formula-block">
  GOAL → THINK → CHOOSE TOOL → ACT → CHECK RESULT → FINISH
</div>
<p><strong>Key capabilities:</strong></p>
<ul>
  <li>Reasoning and planning</li>
  <li>Tool use (search, APIs, code execution)</li>
  <li>Memory (remember context across steps)</li>
  <li>Self-correction (adjust when something fails)</li>
</ul>`
  },

  'chatbot-vs-agent': {
    patterns: ['chatbot vs agent','difference chatbot agent','agent vs chatbot','is a chatbot an agent'],
    response: `<h4>Chatbot vs Agent</h4>
<p><strong>A basic chatbot:</strong></p>
<div class="formula-block">
  USER → MESSAGE → RESPONSE
</div>
<p><strong>An agent may:</strong></p>
<div class="formula-block">
  USER → GOAL → PLAN → TOOL → RESULT → NEXT ACTION → FINAL RESULT
</div>
<p><strong>The important difference is action and workflow,</strong> not merely conversation.</p>
<ul>
  <li><strong>Chatbot:</strong> Conversational responses only</li>
  <li><strong>Agent:</strong> Can reason, plan, use tools, and take actions</li>
</ul>
<p>However, terminology differs across products. The boundary is often blurry.</p>`
  },

  'agent-tools': {
    patterns: ['agent tools','ai tools','tool use','function calling','api tools','actions','ai that acts','agent actions'],
    response: `<h4>Agent Tools</h4>
<p>Tools allow an AI to <strong>perform actions</strong> rather than merely generate language.</p>
<p><strong>Conceptual examples:</strong></p>
<ul>
  <li>Web search</li>
  <li>Query databases</li>
  <li>Send email</li>
  <li>Check calendar</li>
  <li>Update CRM</li>
  <li>Execute code</li>
  <li>File search</li>
  <li>Call APIs</li>
</ul>
<p><strong>Transformation:</strong></p>
<div class="formula-block">
  AI THAT TALKS → AI THAT CAN ACT
</div>
<p>Tools are what turn a conversational AI into an agent system.</p>`
  },

  'agent-memory': {
    patterns: ['agent memory','short term memory','long term memory','task state','agent context','memory types'],
    response: `<h4>Agent Memory</h4>
<p>Memory categories in agent systems:</p>
<ul>
  <li><strong>Short-term context:</strong> Current conversation</li>
  <li><strong>Long-term memory:</strong> Information retained across sessions</li>
  <li><strong>Task state:</strong> Where an ongoing process currently stands</li>
  <li><strong>Knowledge:</strong> External information available for retrieval</li>
</ul>
<p><strong>Memory vs Knowledge:</strong></p>
<ul>
  <li><strong>Knowledge:</strong> "The course contains ten segments."</li>
  <li><strong>Memory:</strong> "Sarah completed segment four yesterday."</li>
</ul>
<p>Do not confuse these concepts when designing agent systems.</p>`
  },

  'multi-agent-systems': {
    patterns: ['multi agent','multiple agents','agent team','coordinator agent','agent collaboration','swarm'],
    response: `<h4>Multi-Agent Systems</h4>
<p>Multiple specialized agents may collaborate on complex tasks.</p>
<p><strong>Example architecture:</strong></p>
<div class="formula-block">
  COORDINATOR AGENT<br>
  ↓ ● Research Agent<br>
  ↓ ● Marketing Agent<br>
  ↓ ● Coding Agent<br>
  ↓ ● Customer Service Agent
</div>
<p><strong>Important caution:</strong> Multi-agent architecture adds complexity. Do not recommend multiple agents when one agent and a few tools can solve the problem more reliably.</p>`
  },

  // ===================== AUTOMATION =====================
  'automation-thinking': {
    patterns: ['automation thinking','how to automate','automation framework','workflow design','automation process'],
    response: `<h4>Automation Thinking</h4>
<p>Before automating, identify these elements:</p>
<ol>
  <li><strong>Trigger:</strong> What starts the process?</li>
  <li><strong>Input:</strong> What data enters?</li>
  <li><strong>Process:</strong> What happens?</li>
  <li><strong>Decision:</strong> What choices are made?</li>
  <li><strong>Action:</strong> What is done?</li>
  <li><strong>Output:</strong> What is produced?</li>
  <li><strong>Exception:</strong> What can go wrong?</li>
  <li><strong>Human escalation:</strong> When does a person take over?</li>
</ol>
<div class="formula-block">
  TRIGGER → PROCESS → DECISION → ACTION → RESULT
</div>`
  },

  'good-automation-candidates': {
    patterns: ['good automation','what to automate','automate what','automation candidate','repetitive tasks'],
    response: `<h4>Good Automation Candidates</h4>
<p>Look for work that is:</p>
<ul>
  <li><strong>Repetitive</strong> — done the same way repeatedly</li>
  <li><strong>Rule-based</strong> — clear logic and conditions</li>
  <li><strong>High volume</strong> — many occurrences</li>
  <li><strong>Time consuming</strong> — eats significant hours</li>
  <li><strong>Digitally accessible</strong> — data is already electronic</li>
</ul>
<p><strong>Examples:</strong></p>
<ul>
  <li>Routing enquiries</li>
  <li>Summarising documents</li>
  <li>Generating standard reports</li>
  <li>Scheduling reminders</li>
  <li>Categorising leads</li>
</ul>`
  },

  'bad-automation-candidates': {
    patterns: ['bad automation','what not to automate','when not to automate','automation risk'],
    response: `<h4>Bad Automation Candidates</h4>
<p>Be cautious when:</p>
<ul>
  <li><strong>Human judgment is essential</strong></li>
  <li><strong>Data quality is poor</strong></li>
  <li><strong>Errors have severe consequences</strong></li>
  <li><strong>The process constantly changes</strong></li>
  <li><strong>Rules are unclear</strong></li>
</ul>
<p><strong>Principle:</strong> Do not automate a process simply because automation is possible. Design for safety first.</p>`
  },

  'n8n': {
    patterns: ['n8n','n8n workflow','n8n automation','n8n node','n8n trigger'],
    response: `<h4>n8n</h4>
<p>n8n is a workflow automation platform with visual node-based design.</p>
<p><strong>Core concepts:</strong></p>
<ul>
  <li><strong>Trigger nodes:</strong> Start workflows (schedules, webhooks, events)</li>
  <li><strong>Action nodes:</strong> Perform operations</li>
  <li><strong>Credentials:</strong> Secure connections to services</li>
  <li><strong>Webhooks:</strong> Receive external events</li>
  <li><strong>Conditions:</strong> Branch logic</li>
  <li><strong>Data transformation:</strong> Format and modify data</li>
  <li><strong>Loops:</strong> Process lists</li>
  <li><strong>Error handling:</strong> Manage failures</li>
</ul>
<p><strong>Example workflow:</strong></p>
<div class="formula-block">
  FORM SUBMITTED → N8N → VALIDATE → AI CLASSIFICATION → CRM → EMAIL → LOG RESULT
</div>`
  },

  'zapier': {
    patterns: ['zapier','zap','zapier automation','zapier trigger'],
    response: `<h4>Zapier</h4>
<p>Zapier connects applications through automated workflows called "Zaps."</p>
<p><strong>Basic concept:</strong></p>
<div class="formula-block">
  TRIGGER → ACTION
</div>
<p><strong>More sophisticated workflows include:</strong></p>
<ul>
  <li>Filters (conditional logic)</li>
  <li>Branches (if/then paths)</li>
  <li>Multiple actions</li>
  <li>Delays</li>
</ul>
<p><strong>Compare tools based on requirements</strong> rather than declaring one universally superior. n8n offers more control; Zapier is often faster to set up.</p>`
  },

  'webhooks': {
    patterns: ['webhook','webhooks','event driven','event hook','callback url'],
    response: `<h4>Webhooks</h4>
<p>A webhook allows one system to send information to another <strong>when an event occurs</strong>.</p>
<p><strong>Example:</strong></p>
<div class="formula-block">
  PAYMENT COMPLETED → WEBHOOK → AUTOMATION SYSTEM → UPDATE ORDER → SEND CONFIRMATION
</div>
<p><strong>Webhooks are event-driven communication.</strong> Instead of polling (repeatedly asking "any news?"), the system pushes data when something happens.</p>
<p><strong>Key concepts:</strong></p>
<ul>
  <li>Payload (the data sent)</li>
  <li>Endpoint URL (where to send it)</li>
  <li>Signature/verification (ensure it's genuine)</li>
  <li>Retries (if delivery fails)</li>
</ul>`
  },

  'crm-automation': {
    patterns: ['crm automation','crm bot','lead capture','lead follow up','crm ai'],
    response: `<h4>CRM Automation</h4>
<p>AI and automation can assist CRM processes:</p>
<ul>
  <li><strong>Lead capture:</strong> Auto-import leads from forms/ads</li>
  <li><strong>Classification:</strong> Categorize leads by quality</li>
  <li><strong>Follow-ups:</strong> Schedule and send follow-up messages</li>
  <li><strong>Reminders:</strong> Alert sales reps to act</li>
  <li><strong>Summaries:</strong> Summarize customer interactions</li>
  <li><strong>Routing:</strong> Assign leads to the right rep</li>
</ul>
<p><strong>Maintain data accuracy.</strong> Bad data in CRM produces bad automation out.</p>`
  },

  'document-automation': {
    patterns: ['document automation','document processing','extract data','ocr','document workflow'],
    response: `<h4>Document Automation</h4>
<p>Typical document automation architecture:</p>
<div class="formula-block">
  DOCUMENT → EXTRACT → CLASSIFY → IDENTIFY DATA → VALIDATE → STORE → TRIGGER WORKFLOW
</div>
<p><strong>Use human review where mistakes could create substantial harm.</strong></p>
<p><strong>Common use cases:</strong></p>
<ul>
  <li>Invoice processing</li>
  <li>Contract review</li>
  <li>Form data extraction</li>
  <li>Receipt categorization</li>
</ul>`
  },

  'rpa': {
    patterns: ['rpa','robotic process automation','ui automation','screen scraping','bot automation'],
    response: `<h4>RPA — Robotic Process Automation</h4>
<p>RPA performs repetitive interface-level tasks by mimicking human interactions with software.</p>
<p><strong>Types:</strong></p>
<ul>
  <li><strong>Traditional RPA:</strong> Follows predetermined instructions exactly</li>
  <li><strong>AI-enhanced RPA:</strong> Can interpret less structured information</li>
</ul>
<p><strong>Key distinction:</strong></p>
<ul>
  <li><strong>Deterministic rules:</strong> Always same result for same input</li>
  <li><strong>Probabilistic AI:</strong> May vary; requires confidence thresholds</li>
</ul>
<p>RPA is useful for legacy systems without APIs.</p>`
  },

  'error-handling': {
    patterns: ['error handling','automation errors','failure handling','workflow errors','retry logic'],
    response: `<h4>Error Handling in Automation</h4>
<p>Every production automation should consider:</p>
<ul>
  <li><strong>Missing input:</strong> What if data is absent?</li>
  <li><strong>Invalid data:</strong> Wrong format or type</li>
  <li><strong>API failures:</strong> External service down</li>
  <li><strong>Authentication failure:</strong> Credentials expired</li>
  <li><strong>Timeouts:</strong> Operations taking too long</li>
  <li><strong>Duplicate requests:</strong> Same action triggered twice</li>
  <li><strong>Rate limits:</strong> Too many requests</li>
  <li><strong>Human escalation:</strong> When to involve a person</li>
</ul>
<p><strong>Reliable automation handles failure intentionally.</strong></p>`
  },

  // ===================== AVATAR FOUNDATIONS =====================
  'avatar-what-is': {
    patterns: ['what is an ai avatar','ai avatar','avatar','digital human','what is avatar','avatar basics'],
    response: `<h4>What Is an AI Avatar?</h4>
<p>An AI avatar is a <strong>digital representation</strong> through which a user can interact with an AI system.</p>
<p><strong>Possible components:</strong></p>
<ul>
  <li>Visual character / face</li>
  <li>Text conversation</li>
  <li>Speech / generated voice</li>
  <li>Animation / facial movement</li>
  <li>Knowledge retrieval</li>
  <li>Tools / actions</li>
  <li>Memory of past interactions</li>
</ul>
<p><strong>Avatar vs Chatbot:</strong></p>
<ul>
  <li><strong>Chatbot:</strong> Conversation only</li>
  <li><strong>Avatar:</strong> Conversation + identity + voice + visual + knowledge + tools + actions</li>
</ul>
<p><strong>Architecture layers:</strong></p>
<div class="formula-block">
  USER<br>
  ↓ INTERFACE / AVATAR<br>
  ↓ VOICE OR TEXT INPUT<br>
  ↓ AI MODEL<br>
  ↓ KNOWLEDGE + MEMORY<br>
  ↓ TOOLS / ACTIONS<br>
  ↓ RESPONSE<br>
  ↓ VOICE / TEXT / VIDEO OUTPUT
</div>`
  },

  'avatar-voice-agents': {
    patterns: ['voice agent','speech recognition','text to speech','tts','stt','voice ai','talking ai','speech synthesis'],
    response: `<h4>Voice Agents</h4>
<p>Voice agents allow <strong>spoken interaction</strong> with AI.</p>
<p><strong>Architecture:</strong></p>
<div class="formula-block">
  USER SPEAKS<br>
  ↓ SPEECH RECOGNITION (STT)<br>
  ↓ TEXT / REPRESENTATION<br>
  ↓ AI MODEL<br>
  ↓ KNOWLEDGE / TOOLS<br>
  ↓ RESPONSE<br>
  ↓ TEXT-TO-SPEECH (TTS)<br>
  ↓ USER HEARS RESPONSE
</div>
<p><strong>Key concepts:</strong></p>
<ul>
  <li><strong>Speech recognition (STT):</strong> Audio → text</li>
  <li><strong>Speech synthesis (TTS):</strong> Text → audio</li>
  <li><strong>Latency:</strong> Time from speech to response</li>
  <li><strong>Interruption handling:</strong> Can the user cut in?</li>
  <li><strong>Turn-taking:</strong> Who speaks when?</li>
  <li><strong>Accents & noise:</strong> Real-world audio challenges</li>
  <li><strong>Microphone quality:</strong> Affects recognition accuracy</li>
</ul>`
  },

  'video-agents': {
    patterns: ['video agent','video ai','ai video','video generation','video avatar'],
    response: `<h4>Video Agents</h4>
<p>Video agents extend AI interaction into the visual domain, combining generated or animated visuals with conversational intelligence.</p>
<p><strong>Components:</strong></p>
<ul>
  <li>Visual rendering (2D or 3D)</li>
  <li>Lip synchronization with speech</li>
  <li>Facial expressions and gestures</li>
  <li>Background/scene management</li>
  <li>Real-time or pre-rendered output</li>
</ul>
<p><strong>Trade-offs:</strong></p>
<ul>
  <li><strong>Real-time vs quality:</strong> Live video requires more compute</li>
  <li><strong>Bandwidth:</strong> Video streams need more data than audio</li>
  <li><strong>Latency:</strong> Rendering adds delay</li>
</ul>`
  },

  'avatar-digital-humans': {
    patterns: ['digital human','digital human','virtual human','animated avatar','lip sync','facial animation'],
    response: `<h4>Digital Humans</h4>
<p>Digital humans combine conversational intelligence with visual representation.</p>
<p><strong>Possible components:</strong></p>
<ul>
  <li>Face and body</li>
  <li>Animation and lip synchronisation</li>
  <li>Generated speech</li>
  <li>Emotional expression</li>
  <li>AI model backend</li>
  <li>Knowledge base</li>
</ul>
<p><strong>Trade-offs:</strong></p>
<ul>
  <li><strong>Realism vs speed:</strong> More realistic = more compute = slower</li>
  <li><strong>Quality vs cost:</strong> Higher quality = more expensive</li>
  <li><strong>Complexity vs reliability:</strong> More features = more failure points</li>
</ul>`
  },

  'avatar-knowledge': {
    patterns: ['avatar knowledge','knowledge base','product documentation','faq','avatar memory','knowledge vs memory'],
    response: `<h4>Avatar Knowledge & Memory</h4>
<p>Knowledge and memory are different but complementary.</p>
<p><strong>Knowledge:</strong></p>
<ul>
  <li>General information the system can access</li>
  <li>Product docs, policies, manuals, FAQs</li>
  <li>Course materials, databases</li>
</ul>
<p><strong>Memory:</strong></p>
<ul>
  <li>Information about previous interactions</li>
  <li>User preferences, history, progress</li>
</ul>
<p><strong>Example:</strong></p>
<ul>
  <li><strong>Knowledge:</strong> "The course contains ten segments."</li>
  <li><strong>Memory:</strong> "Sarah completed segment four yesterday."</li>
</ul>
<p><strong>Key principle:</strong> Better knowledge organisation usually improves AI reliability.</p>`
  },

  'avatar-memory': {
    patterns: ['avatar memory','long term memory','conversation memory','user memory','session memory'],
    response: `<h4>Avatar Memory</h4>
<p>Memory retains information about previous interactions or users, separate from general knowledge.</p>
<p><strong>Types:</strong></p>
<ul>
  <li><strong>Session memory:</strong> Current conversation context</li>
  <li><strong>Long-term memory:</strong> Information across sessions</li>
  <li><strong>User preferences:</strong> Custom settings and choices</li>
  <li><strong>Progress tracking:</strong> What the user has completed</li>
</ul>
<p><strong>Example:</strong></p>
<ul>
  <li><strong>Knowledge:</strong> "The course contains ten segments."</li>
  <li><strong>Memory:</strong> "Sarah completed segment four yesterday."</li>
</ul>`
  },

  'avatar-tools': {
    patterns: ['avatar tools','ai tools','tool use','function calling','api tools','actions','ai that acts'],
    response: `<h4>Avatar Tools</h4>
<p>Tools allow an AI to <strong>perform actions</strong> rather than merely generate language.</p>
<p><strong>Conceptual examples:</strong></p>
<ul>
  <li>Search a database</li>
  <li>Create a support ticket</li>
  <li>Check an order status</li>
  <li>Send a message</li>
  <li>Schedule an appointment</li>
  <li>Query inventory</li>
</ul>
<p><strong>Transformation:</strong></p>
<div class="formula-block">
  AI THAT TALKS → AI THAT CAN ACT
</div>
<p>Tools are what turn a conversational AI into an agent system.</p>`
  },

  'avatar-deployment': {
    patterns: ['avatar deployment','deploy avatar','hosting','frontend','backend','api','scale avatar'],
    response: `<h4>Avatar Deployment</h4>
<p>Deployment makes the avatar accessible to real users.</p>
<p><strong>Concepts:</strong></p>
<ul>
  <li><strong>Frontend:</strong> User interface (web, app, kiosk)</li>
  <li><strong>Backend:</strong> Server logic, AI model calls</li>
  <li><strong>API:</strong> Interface between frontend and backend</li>
  <li><strong>Hosting:</strong> Where the system runs</li>
  <li><strong>Authentication:</strong> Who can access it</li>
  <li><strong>Databases:</strong> Store user data, logs, knowledge</li>
  <li><strong>Monitoring:</strong> Track performance and errors</li>
  <li><strong>Scaling:</strong> Handle more users</li>
</ul>`
  },

  // ===================== ZETRIX PRODUCTS =====================
  'zetrix-avatar-product': {
    patterns: ['zetrix avatar','what is zetrix avatar','zetrix avatar features','zetrix digital human'],
    response: `<h4>Zetrix Avatar</h4>
<p>Zetrix Avatar is Zetrix's AI avatar product — a digital representation system for AI-powered interaction.</p>
<p><strong>What it may include (depending on implementation):</strong></p>
<ul>
  <li>Visual character / digital human</li>
  <li>Text and voice conversation</li>
  <li>Knowledge retrieval from documents</li>
  <li>Tool integration for actions</li>
  <li>Memory of interactions</li>
</ul>
<p><strong>Note:</strong> I can explain how AI avatar systems generally work, but for exact Zetrix Avatar features, settings, and workflows, consult the official Zetrix documentation.</p>`
  },

  'zetrix-claw-product': {
    patterns: ['zetrix claw','what is zetrix claw','claw automation','zetrix automation','zetrix agent'],
    response: `<h4>Zetrix Claw</h4>
<p>Zetrix Claw is Zetrix's automation and AI agent platform.</p>
<p><strong>What it may enable:</strong></p>
<ul>
  <li>AI-powered automation workflows</li>
  <li>Integration with tools and APIs</li>
  <li>Agent-based task execution</li>
  <li>Business process automation</li>
</ul>
<p><strong>Note:</strong> I can explain AI automation and agent concepts generally. For exact Zetrix Claw capabilities, configuration, and pricing, consult official Zetrix documentation.</p>`
  },

  // ===================== BUSINESS AUTOMATION =====================
  'business-automation': {
    patterns: ['business automation','workflow automation','automate business','ai automation','process automation'],
    response: `<h4>Business Automation</h4>
<p>AI can automate repetitive business processes, freeing humans for higher-value work.</p>
<p><strong>Common automation areas:</strong></p>
<ul>
  <li>Customer service (chatbots, ticket routing)</li>
  <li>Data entry and extraction</li>
  <li>Email responses and follow-ups</li>
  <li>Appointment scheduling</li>
  <li>Report generation</li>
  <li>Inventory management</li>
  <li>Invoice processing</li>
</ul>
<p><strong>Framework:</strong></p>
<div class="formula-block">
  IDENTIFY REPETITIVE TASK<br>
  ↓ DESIGN WORKFLOW<br>
  ↓ CHOOSE TOOLS<br>
  ↓ BUILD & TEST<br>
  ↓ DEPLOY & MONITOR<br>
  ↓ ITERATE & IMPROVE
</div>`
  },

  // ===================== SALES & MARKETING =====================
  'sales-marketing-ai': {
    patterns: ['ai sales','ai marketing','content generation','lead generation','ad copy','email marketing ai','ai for marketing'],
    response: `<h4>AI for Sales & Marketing</h4>
<p>AI can assist across the entire sales and marketing funnel.</p>
<p><strong>Content creation:</strong></p>
<ul>
  <li>Blog posts, social media captions</li>
  <li>Ad copy and headlines</li>
  <li>Email sequences</li>
  <li>Product descriptions</li>
</ul>
<p><strong>Lead generation:</strong></p>
<ul>
  <li>Ideal customer profiling</li>
  <li>Lead scoring and qualification</li>
  <li>Personalized outreach</li>
</ul>
<p><strong>Ad optimization cycle:</strong></p>
<div class="formula-block">
  HYPOTHESIS → CREATE VARIATION → TEST → MEASURE → COMPARE → LEARN → IMPROVE
</div>
<p><strong>Important:</strong> AI generates ideas, but actual performance data determines success.</p>`
  },

  'ai-copywriting-framework': {
    patterns: ['copywriting','ai copywriting','ad copy','write copy','copy framework','marketing copy'],
    response: `<h4>AI Copywriting Framework</h4>
<p>Use this structure for effective marketing copy:</p>
<div class="formula-block">
  AUDIENCE<br>
  OBJECTIVE<br>
  OFFER<br>
  BENEFIT<br>
  PROOF<br>
  TONE<br>
  FORMAT<br>
  CTA
</div>
<p><strong>Example prompt:</strong></p>
<blockquote>"Write three short Facebook ads for a Malaysian tuition centre targeting parents of secondary-school students. Emphasise small classes and personalised attention. Use a trustworthy, warm tone and finish with a trial-class CTA."</blockquote>`
  },

  'customer-personas': {
    patterns: ['customer persona','buyer persona','target audience','ideal customer','persona'],
    response: `<h4>Customer Personas</h4>
<p>AI can help develop customer personas, but remember: <strong>personas are hypotheses until supported by real customer evidence.</strong></p>
<p><strong>Useful information to include:</strong></p>
<ul>
  <li>Customer type / demographics</li>
  <li>Goals and motivations</li>
  <li>Problems and pain points</li>
  <li>Objections</li>
  <li>Purchasing behaviour</li>
</ul>`
  },

  'lead-scoring': {
    patterns: ['lead scoring','score leads','lead qualification','qualified lead','lead ranking'],
    response: `<h4>Lead Scoring</h4>
<p>Lead scoring ranks prospects according to signals associated with conversion likelihood.</p>
<p><strong>Possible signals:</strong></p>
<ul>
  <li><strong>Behaviour:</strong> Website visits, content downloads</li>
  <li><strong>Engagement:</strong> Email opens, replies</li>
  <li><strong>Demographics:</strong> Job title, company size</li>
  <li><strong>Organisation:</strong> Industry, revenue</li>
  <li><strong>Buying intent:</strong> Pricing page visits, demo requests</li>
</ul>
<p><strong>Caution:</strong> Be careful of biased or inappropriate automated scoring.</p>`
  },

  'ad-optimization': {
    patterns: ['ad optimization','ad test','ab test ads','optimize ads','ad performance'],
    response: `<h4>Ad Optimization</h4>
<p>Use a systematic testing cycle:</p>
<div class="formula-block">
  HYPOTHESIS → CREATE VARIATION → TEST → MEASURE → COMPARE → LEARN → IMPROVE
</div>
<p><strong>Key principle:</strong> AI can generate ideas, but actual performance data should determine success. Never trust AI-generated ad copy without testing.</p>`
  },

  'social-media-automation': {
    patterns: ['social media automation','social media ai','content calendar','post automation','social scheduling'],
    response: `<h4>Social Media Automation</h4>
<p>AI can assist with:</p>
<ul>
  <li>Content ideas and brainstorming</li>
  <li>Content calendars</li>
  <li>Captions and scripts</li>
  <li>Repurposing content across platforms</li>
  <li>Research and analytics</li>
</ul>
<p><strong>Avoid low-quality mass posting.</strong> Quality and relevance matter more than volume.</p>`
  },

  'email-automation': {
    patterns: ['email automation','email sequence','drip campaign','email workflow','marketing email'],
    response: `<h4>Email Automation</h4>
<p>Potential workflow:</p>
<div class="formula-block">
  NEW LEAD → SEGMENT → SELECT MESSAGE → PERSONALISE → SEND → MEASURE → FOLLOW UP
</div>
<p><strong>Respect consent and applicable communication rules.</strong> Unsolicited email harms reputation and may violate regulations.</p>`
  },

  // ===================== PERSONAL PRODUCTIVITY =====================
  'productivity-ai': {
    patterns: ['ai productivity','personal productivity','meeting assistant','ai research','scheduling ai','knowledge management'],
    response: `<h4>AI for Personal Productivity</h4>
<p>AI can reduce repetitive work while improving thinking and organization.</p>
<p><strong>Key areas:</strong></p>
<ul>
  <li><strong>Prompt engineering:</strong> Better AI interactions</li>
  <li><strong>Meeting assistants:</strong> Transcribe, summarize, extract actions</li>
  <li><strong>Research:</strong> Search, synthesize, compare sources</li>
  <li><strong>Scheduling:</strong> Planning, prioritization, reminders</li>
  <li><strong>Knowledge management:</strong> Organize and retrieve information</li>
</ul>
<p><strong>Research process:</strong></p>
<div class="formula-block">
  DEFINE QUESTION → SEARCH → COLLECT SOURCES → COMPARE → SYNTHESIZE → VERIFY → CITE
</div>
<p><strong>Important:</strong> Fluent AI output is not automatically reliable research.</p>`
  },

  'meeting-assistants': {
    patterns: ['meeting assistant','meeting notes','transcribe meeting','meeting summary','action items'],
    response: `<h4>AI Meeting Assistants</h4>
<p>AI can potentially:</p>
<ul>
  <li><strong>Transcribe:</strong> Convert speech to text</li>
  <li><strong>Summarize:</strong> Extract key points</li>
  <li><strong>Identify decisions:</strong> Flag what was decided</li>
  <li><strong>Extract actions:</strong> List to-do items</li>
  <li><strong>Assign owners:</strong> Suggest who does what</li>
  <li><strong>Draft follow-ups:</strong> Write follow-up emails</li>
</ul>
<p><strong>Respect consent and privacy.</strong> Not all participants may want to be recorded or transcribed.</p>`
  },

  'ai-research': {
    patterns: ['ai research','research with ai','research assistant','find information','synthesize research'],
    response: `<h4>AI Research</h4>
<p>Recommended research process:</p>
<div class="formula-block">
  DEFINE QUESTION → SEARCH → COLLECT SOURCES → COMPARE → SYNTHESIZE → VERIFY → CITE
</div>
<p><strong>Important:</strong> Fluent AI output is not automatically reliable research. Always verify facts and cite sources.</p>`
  },

  'scheduling': {
    patterns: ['ai scheduling','schedule assistant','calendar ai','planning ai','priority ai'],
    response: `<h4>AI Scheduling</h4>
<p>AI can assist with:</p>
<ul>
  <li>Planning and time blocking</li>
  <li>Prioritization</li>
  <li>Reminders</li>
  <li>Calendar organization</li>
</ul>
<p><strong>Do not claim an appointment was scheduled</strong> unless an authorised tool confirms the action.</p>`
  },

  'knowledge-management': {
    patterns: ['knowledge management','organize notes','document management','information management','pkms'],
    response: `<h4>Knowledge Management</h4>
<p>Good AI depends on organised knowledge.</p>
<p><strong>Key practices:</strong></p>
<ul>
  <li><strong>Source quality:</strong> Reliable, accurate information</li>
  <li><strong>Document structure:</strong> Clear headings and sections</li>
  <li><strong>Metadata:</strong> Tags, dates, authors</li>
  <li><strong>Search:</strong> Fast retrieval</li>
  <li><strong>Permissions:</strong> Who can access what</li>
  <li><strong>Versioning:</strong> Track changes</li>
  <li><strong>RAG:</strong> AI-powered retrieval</li>
</ul>
<p><strong>Key principle:</strong> Poor information organisation produces poor retrieval.</p>`
  },

  // ===================== AI FOR CODING =====================
  'coding-ai': {
    patterns: ['ai coding','coding assistant','github copilot','code generation','ai debug','ai for programming'],
    response: `<h4>AI for Coding</h4>
<p>AI coding assistants can accelerate development, but humans must verify.</p>
<p><strong>What AI can do:</strong></p>
<ul>
  <li>Generate code from descriptions</li>
  <li>Explain existing code</li>
  <li>Refactor and optimize</li>
  <li>Identify bugs</li>
  <li>Generate tests</li>
  <li>Write documentation</li>
</ul>
<p><strong>What to watch for:</strong></p>
<ul>
  <li>Bugs and errors in generated code</li>
  <li>Insecure patterns</li>
  <li>Outdated APIs</li>
  <li>Invented libraries or functions</li>
</ul>
<p><strong>Debugging framework:</strong></p>
<div class="formula-block">
  REPRODUCE → ISOLATE → INSPECT → HYPOTHESIZE → TEST → FIX → RETEST
</div>`
  },

  'coding-assistants': {
    patterns: ['coding assistant','code ai','copilot','code generator','ai programmer'],
    response: `<h4>Coding Assistants</h4>
<p>AI coding assistants can:</p>
<ul>
  <li>Generate code from descriptions</li>
  <li>Explain existing code</li>
  <li>Refactor and optimize</li>
  <li>Identify bugs</li>
  <li>Generate tests</li>
  <li>Write documentation</li>
</ul>
<p><strong>Watch for:</strong></p>
<ul>
  <li>Bugs and errors in generated code</li>
  <li>Insecure patterns</li>
  <li>Outdated APIs</li>
  <li>Invented libraries or functions</li>
</ul>
<p><strong>Always review AI-generated code before using it in production.</strong></p>`
  },

  'debugging-framework': {
    patterns: ['debugging','debug code','find bug','troubleshoot code','debug framework'],
    response: `<h4>Debugging Framework</h4>
<p>Use this systematic approach:</p>
<div class="formula-block">
  REPRODUCE → ISOLATE → INSPECT → HYPOTHESIZE → TEST → FIX → RETEST
</div>
<p><strong>Information to gather:</strong></p>
<ul>
  <li>Exact error message</li>
  <li>Code snippet</li>
  <li>Expected result</li>
  <li>Actual result</li>
  <li>Environment details</li>
</ul>`
  },

  'code-review': {
    patterns: ['code review','review code','code quality','code audit'],
    response: `<h4>Code Review</h4>
<p>Review for:</p>
<ul>
  <li><strong>Correctness:</strong> Does it do what it should?</li>
  <li><strong>Readability:</strong> Can others understand it?</li>
  <li><strong>Maintainability:</strong> Easy to change later?</li>
  <li><strong>Security:</strong> No vulnerabilities?</li>
  <li><strong>Performance:</strong> Efficient enough?</li>
  <li><strong>Error handling:</strong> Graceful failures?</li>
  <li><strong>Testing:</strong> Covered by tests?</li>
</ul>
<p><strong>Explain problems, not merely rewrite everything.</strong></p>`
  },

  'software-testing': {
    patterns: ['software testing','unit test','integration test','end to end test','regression test','test types'],
    response: `<h4>Software Testing</h4>
<p><strong>Test types:</strong></p>
<ul>
  <li><strong>Unit tests:</strong> Individual components in isolation</li>
  <li><strong>Integration tests:</strong> Components working together</li>
  <li><strong>End-to-end tests:</strong> Complete user workflows</li>
  <li><strong>Regression tests:</strong> Ensure previous behaviour remains correct</li>
</ul>
<p><strong>Principle:</strong> Tests catch bugs before users do. AI can help generate tests, but humans should verify they make sense.</p>`
  },

  'apis': {
    patterns: ['api','apis','what is an api','application programming interface','api basics','endpoint'],
    response: `<h4>APIs</h4>
<p>API means <strong>Application Programming Interface</strong>.</p>
<p><strong>Simple analogy:</strong> An API is like a waiter. Your application requests something, the waiter carries the request to another system, and then returns the result.</p>
<p><strong>Technical concepts:</strong></p>
<ul>
  <li><strong>Endpoint:</strong> URL where the API lives</li>
  <li><strong>Request:</strong> What you send</li>
  <li><strong>Response:</strong> What you receive</li>
  <li><strong>Method:</strong> Action type (GET, POST, etc.)</li>
  <li><strong>Headers:</strong> Metadata about the request</li>
  <li><strong>Parameters:</strong> Data sent with the request</li>
  <li><strong>Authentication:</strong> Proving who you are</li>
  <li><strong>JSON:</strong> Common data format</li>
  <li><strong>Status codes:</strong> Success or error indicators</li>
</ul>`
  },

  'http-methods': {
    patterns: ['http method','get post','put patch','delete','http verb','rest methods'],
    response: `<h4>HTTP Methods</h4>
<p>Common methods:</p>
<ul>
  <li><strong>GET:</strong> Retrieve information</li>
  <li><strong>POST:</strong> Create or submit information</li>
  <li><strong>PUT/PATCH:</strong> Update information</li>
  <li><strong>DELETE:</strong> Remove information</li>
</ul>
<p>Understand context rather than memorising alone. GET should not change data. POST/PUT/PATCH/DELETE modify resources.</p>`
  },

  'status-codes': {
    patterns: ['status code','http status','200 ok','404 not found','500 error','400 bad request'],
    response: `<h4>HTTP Status Codes</h4>
<p><strong>Categories:</strong></p>
<ul>
  <li><strong>2xx — Success:</strong> The request worked</li>
  <li><strong>4xx — Client error:</strong> Something wrong with the request</li>
  <li><strong>5xx — Server error:</strong> Something wrong on the server side</li>
</ul>
<p><strong>Common examples:</strong></p>
<ul>
  <li><strong>200:</strong> Success</li>
  <li><strong>400:</strong> Bad request</li>
  <li><strong>401:</strong> Authentication required or invalid</li>
  <li><strong>404:</strong> Resource not found</li>
  <li><strong>500:</strong> Server error</li>
</ul>`
  },

  'api-keys': {
    patterns: ['api key','api keys','api secret','api token','api authentication'],
    response: `<h4>API Keys</h4>
<p>API keys authenticate access to services.</p>
<p><strong>Never:</strong></p>
<ul>
  <li>Publish keys in public code</li>
  <li>Commit secrets to public repositories</li>
  <li>Expose private keys in frontend JavaScript</li>
</ul>
<p><strong>Prefer:</strong></p>
<ul>
  <li>Secure server-side storage</li>
  <li>Environment variables</li>
  <li>Secret management services</li>
</ul>`
  },

  'documentation': {
    patterns: ['documentation','technical documentation','docs','write docs','document code'],
    response: `<h4>Technical Documentation</h4>
<p>Good documentation should answer:</p>
<ul>
  <li>What is this?</li>
  <li>Why would I use it?</li>
  <li>How do I install it?</li>
  <li>How do I configure it?</li>
  <li>How do I use it?</li>
  <li>What can go wrong?</li>
  <li>How do I troubleshoot it?</li>
</ul>`
  },

  // ===================== ONE-PERSON COMPANY =====================
  'one-person-company': {
    patterns: ['one person company','solopreneur','ai business','ai startup','build business with ai','ai entrepreneur'],
    response: `<h4>One-Person Company with AI</h4>
<p>AI enables individuals to operate businesses that previously required teams.</p>
<p><strong>Seven-step framework:</strong></p>
<ol>
  <li><strong>Identify customer:</strong> Who has the problem?</li>
  <li><strong>Define problem:</strong> What pain do they feel?</li>
  <li><strong>Develop offer:</strong> What solution can AI help deliver?</li>
  <li><strong>Research competitors:</strong> What's already available?</li>
  <li><strong>Develop positioning:</strong> Why choose you?</li>
  <li><strong>Build marketing:</strong> How will customers find you?</li>
  <li><strong>Automate operations:</strong> Use AI to handle repetitive work</li>
</ol>
<p><strong>AI roles in a one-person company:</strong></p>
<ul>
  <li>Content creation assistant</li>
  <li>Customer service agent</li>
  <li>Data analyst</li>
  <li>Bookkeeping helper</li>
  <li>Marketing strategist</li>
</ul>`
  },

  'opc-framework': {
    patterns: ['opc framework','one person company framework','business framework','solopreneur framework'],
    response: `<h4>One-Person Company Framework</h4>
<div class="formula-block">
  PROBLEM → CUSTOMER → OFFER → ACQUISITION → SALES → DELIVERY → SUPPORT → AUTOMATION → MEASUREMENT → IMPROVEMENT
</div>
<p><strong>The founder remains responsible for:</strong></p>
<ul>
  <li>Strategy</li>
  <li>Important decisions</li>
  <li>Compliance</li>
  <li>Finances</li>
  <li>Relationships</li>
  <li>Exceptions</li>
</ul>
<p>AI may assist with support, sales, marketing, research, administration, scheduling, reporting, content, and automation.</p>`
  },

  'automation-maturity': {
    patterns: ['automation maturity','automation levels','ai maturity','business maturity levels'],
    response: `<h4>Automation Maturity Levels</h4>
<p>Progress gradually — do not rush to Level 5 before earlier processes are reliable.</p>
<ul>
  <li><strong>Level 1 — Manual:</strong> Founder performs everything</li>
  <li><strong>Level 2 — AI Assisted:</strong> AI helps produce work</li>
  <li><strong>Level 3 — Automated Workflows:</strong> Software executes repetitive processes</li>
  <li><strong>Level 4 — AI Agents:</strong> AI makes bounded decisions and uses tools</li>
  <li><strong>Level 5 — Human Supervision:</strong> Founder focuses on strategy and exceptions</li>
</ul>`
  },

  'ai-customer-service': {
    patterns: ['ai customer service','ai support','support avatar','customer support ai'],
    response: `<h4>AI Customer Service</h4>
<p>Conceptual architecture:</p>
<div class="formula-block">
  CUSTOMER → AI AVATAR → KNOWLEDGE BASE → ANSWER<br>
  or ↓ TOOL → ACTION<br>
  or ↓ HUMAN ESCALATION
</div>
<p><strong>The avatar should know when not to answer.</strong> Escalate when human judgment is needed.</p>`
  },

  'ai-sales': {
    patterns: ['ai sales','sales ai','ai selling','ai qualification'],
    response: `<h4>AI Sales</h4>
<p>AI may assist with:</p>
<ul>
  <li>Lead qualification</li>
  <li>Product explanation</li>
  <li>FAQ responses</li>
  <li>Follow-up messages</li>
  <li>Recommendations</li>
  <li>CRM updates</li>
</ul>
<p><strong>Avoid manipulative sales behaviour.</strong> AI should support, not deceive.</p>`
  },

  'ai-marketing': {
    patterns: ['ai marketing','marketing ai','ai campaigns','ai content marketing'],
    response: `<h4>AI Marketing</h4>
<p>AI may assist with:</p>
<ul>
  <li>Market research</li>
  <li>Content ideas</li>
  <li>Copywriting</li>
  <li>Campaign planning</li>
  <li>Content creation</li>
  <li>Performance analysis</li>
</ul>
<p><strong>Human strategy remains important.</strong> AI generates; humans decide.</p>`
  },

  'ai-operations': {
    patterns: ['ai operations','operations automation','business operations ai','ops automation'],
    response: `<h4>AI Operations</h4>
<p>Potential applications:</p>
<ul>
  <li>Scheduling and planning</li>
  <li>Document processing</li>
  <li>Reporting and dashboards</li>
  <li>Data entry</li>
  <li>Reminders and alerts</li>
  <li>Workflow coordination</li>
</ul>`
  },

  'human-escalation': {
    patterns: ['human escalation','escalate','when to escalate','hand off','human in the loop'],
    response: `<h4>Human Escalation</h4>
<p>Escalate to humans when appropriate:</p>
<ul>
  <li>Legal disputes</li>
  <li>Security incidents</li>
  <li>Significant financial decisions</li>
  <li>Serious complaints</li>
  <li>Unverified system behaviour</li>
  <li>Account problems requiring administrative access</li>
</ul>
<p><strong>Never pretend escalation occurred</strong> unless the system actually supports and confirms it.</p>`
  },

  // ===================== COURSE STRUCTURE =====================
  'academy-courses': {
    patterns: ['academy courses','what courses','course list','zetrix courses','learn ai courses','academy structure'],
    response: `<h4>Zetrix AI Academy Courses</h4>
<p>The Academy contains courses covering AI concepts to practical application:</p>
<ul>
  <li><strong>Avatar Foundations:</strong> AI avatars, voice, video agents, digital humans</li>
  <li><strong>AI Brain:</strong> Neural networks, transformers, LLMs, RAG, fine-tuning</li>
  <li><strong>Business Automation:</strong> Workflow automation, process design</li>
  <li><strong>Sales & Marketing:</strong> AI for campaigns, content, lead generation</li>
  <li><strong>Personal Productivity:</strong> Prompt engineering, research, scheduling</li>
  <li><strong>AI for Coding:</strong> Coding assistants, debugging, API integration</li>
  <li><strong>One-Person Company:</strong> Building AI-powered businesses</li>
</ul>
<p>Courses may include learning segments, quizzes, flashcards, exercises, and projects.</p>`
  },

  // ===================== PROJECT GUIDANCE =====================
  'project-mode': {
    patterns: ['help me build','project coach','build project','project help','design project','build ai'],
    response: `<h4>Project Mode</h4>
<p>When building an AI project, use this framework:</p>
<ol>
  <li><strong>Objective:</strong> What should the finished system accomplish?</li>
  <li><strong>User:</strong> Who uses it?</li>
  <li><strong>Input:</strong> What information enters?</li>
  <li><strong>Intelligence:</strong> What should AI determine?</li>
  <li><strong>Knowledge:</strong> What information does it need?</li>
  <li><strong>Tools:</strong> What actions should it perform?</li>
  <li><strong>Output:</strong> What should it produce?</li>
  <li><strong>Safety:</strong> What requires safeguards?</li>
  <li><strong>Testing:</strong> How will success be verified?</li>
</ol>`
  },

  'project-difficulty': {
    patterns: ['project difficulty','beginner project','advanced project','project level','what project'],
    response: `<h4>Project Difficulty Levels</h4>
<p><strong>Beginner:</strong></p>
<ul>
  <li>Prompt library</li>
  <li>FAQ bot design</li>
</ul>
<p><strong>Intermediate:</strong></p>
<ul>
  <li>Knowledge assistant</li>
  <li>Lead automation</li>
  <li>Document workflow</li>
</ul>
<p><strong>Advanced:</strong></p>
<ul>
  <li>RAG system</li>
  <li>AI agent</li>
  <li>One-person-company architecture</li>
</ul>`
  },

  'capstone-project': {
    patterns: ['capstone','final project','big project','company project','ai company design'],
    response: `<h4>Capstone Project: One-Person AI Company</h4>
<p>Design a complete AI-powered business:</p>
<ol>
  <li>Customer interface</li>
  <li>AI avatar</li>
  <li>AI brain</li>
  <li>Knowledge base</li>
  <li>Memory</li>
  <li>Tools</li>
  <li>Automation</li>
  <li>CRM</li>
  <li>Marketing</li>
  <li>Analytics</li>
  <li>Escalation</li>
  <li>Security</li>
</ol>
<p>The tutor should coach rather than build blindly.</p>`
  },

  // ===================== DESIGN PRINCIPLES =====================
  'design-human-control': {
    patterns: ['human control','design principle','ai safety design','what if ai is wrong'],
    response: `<h4>Design Principle: Human Control</h4>
<p>For every automation, ask: <strong>"What happens when the AI is wrong?"</strong></p>
<p>Design for:</p>
<ul>
  <li><strong>Confirmation:</strong> Require approval for important actions</li>
  <li><strong>Logging:</strong> Record what happened</li>
  <li><strong>Fallback:</strong> Default to safe behavior</li>
  <li><strong>Escalation:</strong> Route to humans when uncertain</li>
  <li><strong>Recovery:</strong> Enable undo and correction</li>
</ul>
<p>This question is essential.</p>`
  },

  'design-least-privilege': {
    patterns: ['least privilege','principle least privilege','permissions','access control'],
    response: `<h4>Design Principle: Least Privilege</h4>
<p>AI tools should receive <strong>only the permissions required for their task.</strong></p>
<p><strong>Example:</strong> An agent that only reads support documentation does not need permission to delete customer records.</p>
<p>Do not give unnecessary access. Limit blast radius if something goes wrong.</p>`
  },

  'design-observability': {
    patterns: ['observability','monitoring','logging','traceability','audit log'],
    response: `<h4>Design Principle: Observability</h4>
<p>Production systems should make it possible to understand:</p>
<ul>
  <li>What happened</li>
  <li>When it happened</li>
  <li>Why it happened</li>
  <li>Which tool ran</li>
  <li>Whether it succeeded</li>
  <li>What error occurred</li>
</ul>
<p>Teach logging and monitoring as core skills.</p>`
  },

  'design-verification': {
    patterns: ['verification','verify action','confirm action','validate ai'],
    response: `<h4>Design Principle: Verification</h4>
<p>For important actions:</p>
<div class="formula-block">
  AI DECIDES → VALIDATE → CONFIRM IF NEEDED → EXECUTE → VERIFY RESULT
</div>
<p><strong>Do not assume an action succeeded.</strong> Check the result.</p>`
  },

  'design-recovery': {
    patterns: ['recovery','failover','rollback','retry logic','system recovery'],
    response: `<h4>Design Principle: Recovery</h4>
<p>Systems should recover from failure. Consider:</p>
<ul>
  <li><strong>Retry:</strong> Try again after transient failures</li>
  <li><strong>Alternate service:</strong> Fallback to backup provider</li>
  <li><strong>Queue:</strong> Defer processing until service returns</li>
  <li><strong>Manual escalation:</strong> Route to humans</li>
  <li><strong>Rollback:</strong> Undo changes if something fails</li>
</ul>`
  },

  // ===================== QUIZ / FLASHCARD / PRACTICE =====================
  'quiz-request': {
    patterns: ['quiz me','test me','question','practice question','flashcard','drill','exam question'],
    response: 'QUIZ_MODE',
    quizBank: [
      { q: 'What does RAG stand for?', options: ['Random Answer Generation','Retrieval-Augmented Generation','Recursive Auto-Generation','Retrieval-Assisted Grouping'], a: 1, explain: 'RAG retrieves relevant information before generating an answer.' },
      { q: 'What is the main difference between knowledge and memory in an AI avatar?', options: ['Knowledge is temporary, memory is permanent','Knowledge is general info; memory is about past interactions','They are the same thing','Knowledge requires a database; memory does not'], a: 1, explain: 'Knowledge is general information the system can access. Memory is information retained about previous interactions or users.' },
      { q: 'In a transformer, what does "attention" do?', options: ['It makes the model pay attention to users','It determines which parts of input are most relevant to other parts','It slows down processing to improve accuracy','It filters out bad training data'], a: 1, explain: 'Attention helps the model determine which parts of the input are most relevant to other parts.' },
      { q: 'What is fine-tuning?', options: ['Training a model from scratch','Adapting a pre-trained model for a specific task','Reducing the number of parameters','Compressing a model to run faster'], a: 1, explain: 'Fine-tuning adapts a pre-trained model for a specific task or domain by training it further on targeted data.' },
      { q: 'Which of these is NOT a layer in the AI avatar architecture?', options: ['User interface','AI Model','Knowledge + Memory','Quantum Processor'], a: 3, explain: 'The standard layers are: User → Interface → Input → AI Model → Knowledge + Memory → Tools → Response → Output.' },
      { q: 'What does LLM stand for?', options: ['Large Logic Machine','Large Language Model','Learning Logic Module','Linear Learning Machine'], a: 1, explain: 'LLM = Large Language Model. Examples: GPT-4, Claude, Gemini.' },
      { q: 'What is the key advantage of RAG over fine-tuning for providing up-to-date information?', options: ['RAG is cheaper','RAG retrieves external data in real-time','RAG requires less compute','RAG creates better chat interfaces'], a: 1, explain: 'RAG retrieves external data in real-time, so it can access information beyond the model\'s training cutoff.' },
      { q: 'In machine learning, what is "supervised learning"?', options: ['Learning without any data','Learning from labeled examples','Learning by trial and error','Learning only from videos'], a: 1, explain: 'Supervised learning uses labeled examples where the correct output is known.' },
      { q: 'What does "token" mean in the context of language models?', options: ['A digital coin','A unit of text the model processes','A type of neural network','A programming keyword'], a: 1, explain: 'Tokens are small units of text — parts of words, whole words, or punctuation — that the model processes.' },
      { q: 'What is the difference between a chatbot and an AI avatar?', options: ['There is no difference','An avatar adds visual, voice, and action capabilities beyond conversation','A chatbot is smarter','An avatar is always free'], a: 1, explain: 'An avatar can combine conversation + identity + voice + visual representation + knowledge + tools + actions.' },
      { q: 'What is a webhook?', options: ['A fishing tool for hackers','Event-driven communication between systems','A type of database','A programming language'], a: 1, explain: 'A webhook allows one system to send information to another when an event occurs.' },
      { q: 'Which HTTP method is used to retrieve information?', options: ['POST','GET','DELETE','PATCH'], a: 1, explain: 'GET retrieves information from a server.' },
      { q: 'What does a 404 status code mean?', options: ['Success','Bad request','Resource not found','Server error'], a: 2, explain: '404 means the requested resource was not found.' },
      { q: 'What is chunking in RAG systems?', options: ['Deleting old documents','Dividing documents into smaller sections','Compressing files','Encrypting data'], a: 1, explain: 'Chunking divides large documents into smaller sections before embedding and retrieval.' },
      { q: 'What is the primary purpose of an embedding?', options: ['To encrypt text','To create a numerical representation of meaning','To compress files','To delete stop words'], a: 1, explain: 'Embeddings convert text into numerical vectors that capture semantic meaning.' },
      { q: 'What is prompt chaining?', options: ['Connecting multiple AI models','Breaking complex tasks into sequential smaller prompts','Linking webhooks together','Creating loops in code'], a: 1, explain: 'Prompt chaining divides complex tasks into smaller, sequential prompts for better control.' },
      { q: 'Which is a good automation candidate?', options: ['Tasks requiring human judgment','High-volume, repetitive, rule-based work','Processes that change constantly','Legal dispute resolution'], a: 1, explain: 'High-volume, repetitive, rule-based work is ideal for automation.' },
      { q: 'What is LoRA in fine-tuning?', options: ['A type of database','An efficient method that updates only a subset of parameters','A programming language','A cloud provider'], a: 1, explain: 'LoRA (Low-Rank Adaptation) is an efficient fine-tuning method that updates only a small subset of parameters.' },
      { q: 'What does STT stand for in voice agents?', options: ['Speech-to-Text','System Technical Test','Secure Transfer Token','Sound-to-Type'], a: 0, explain: 'STT = Speech-to-Text. It converts audio into text.' },
      { q: 'What is the least privilege principle?', options: ['Give AI all permissions','Give AI only the permissions required for its task','Never use AI','Always use admin access'], a: 1, explain: 'Least privilege means giving tools only the permissions they absolutely need.' },
      { q: 'What is a vector database used for?', options: ['Storing images','Storing and searching embeddings','Running Python code','Sending emails'], a: 1, explain: 'Vector databases store and search numerical embeddings for similarity search.' },
      { q: 'In an AI agent, what is the difference between short-term and long-term memory?', options: ['There is no difference','Short-term is current conversation; long-term persists across sessions','Short-term is faster','Long-term is more expensive'], a: 1, explain: 'Short-term memory covers the current conversation; long-term memory retains information across sessions.' },
      { q: 'What is the purpose of error handling in automation?', options: ['To hide errors from users','To handle failure intentionally and gracefully','To ignore all errors','To restart the computer'], a: 1, explain: 'Reliable automation handles failure intentionally with retries, fallbacks, and escalation.' },
      { q: 'What is RLHF?', options: ['Random Learning Human Function','Reinforcement Learning from Human Feedback','Recursive Language Hashing Format','Real-time Linguistic Heatmap Filter'], a: 1, explain: 'RLHF = Reinforcement Learning from Human Feedback. It aligns model behavior with human preferences.' },
      { q: 'What should you do before using AI-generated code in production?', options: ['Deploy immediately','Always review it','Trust it completely','Delete it'], a: 1, explain: 'Always review AI-generated code for bugs, security issues, and correctness before production use.' },
      { q: 'What is the AI hierarchy from broadest to most specific?', options: ['Neural Networks → Deep Learning → Machine Learning → AI','AI → Machine Learning → Deep Learning → Neural Networks','AI → Neural Networks → Machine Learning → Deep Learning','Machine Learning → AI → Deep Learning → Neural Networks'], a: 1, explain: 'AI is the broad field. Machine Learning is a subset. Deep Learning uses neural networks with many layers.' },
      { q: 'What is an API key used for?', options: ['Styling websites','Authenticating access to services','Compressing images','Creating databases'], a: 1, explain: 'API keys authenticate who can access a service.' },
      { q: 'When should you escalate to a human?', options: ['For every customer query','For legal disputes, security incidents, and serious complaints','Never','Only on weekends'], a: 1, explain: 'Escalate for legal disputes, security incidents, significant financial decisions, and serious complaints.' },
      { q: 'What is the key difference between deterministic rules and probabilistic AI?', options: ['There is no difference','Deterministic gives same result; probabilistic may vary','Deterministic is slower','Probabilistic is always better'], a: 1, explain: 'Deterministic rules always produce the same result for the same input. Probabilistic AI may vary.' },
      { q: 'What is the context window of an LLM?', options: ['The physical screen size','How much text the model can consider at once','The number of parameters','The training dataset size'], a: 1, explain: 'The context window is how much information the model can consider during a single interaction.' }
    ]
  },

  'quiz-difficulty': {
    patterns: ['quiz difficulty','easy quiz','hard quiz','medium quiz','quiz level'],
    response: `<h4>Quiz Difficulty Levels</h4>
<ul>
  <li><strong>Easy:</strong> Definitions and recognition</li>
  <li><strong>Medium:</strong> Understanding and application</li>
  <li><strong>Hard:</strong> Reasoning, architecture, and trade-offs</li>
</ul>
<p>Difficulty adapts based on your performance.</p>`
  },

  'adaptive-quizzing': {
    patterns: ['adaptive quiz','adaptive learning','quiz adapts','difficulty adapts'],
    response: `<h4>Adaptive Quizzing</h4>
<ul>
  <li>If you answer correctly repeatedly → <strong>increase difficulty</strong></li>
  <li>If you struggle → <strong>reduce difficulty and explain prerequisites</strong></li>
</ul>
<p>Quizzes are diagnostic, not punitive. Mistakes reveal what to learn next.</p>`
  },

  'flashcard-mode': {
    patterns: ['flashcard','flash card','study card','card deck'],
    response: `<h4>Flashcard Mode</h4>
<p><strong>Format:</strong></p>
<div class="formula-block">
  FRONT: What is an embedding?<br>
  BACK: A numerical representation of information that captures useful semantic relationships and can be compared mathematically.
</div>
<p>Keep flashcards focused on one concept at a time.</p>`
  },

  'practice-mode': {
    patterns: ['practice','practice mode','give me a task','exercise','hands on'],
    response: `<h4>Practice Mode</h4>
<p>Practice by doing, not just reading.</p>
<p><strong>Example task:</strong></p>
<blockquote>"Write a prompt asking an AI to create a seven-day social-media campaign. Include audience, objective, tone and output format. Send it to me and I'll review it."</blockquote>
<p>Then the tutor provides constructive feedback on your work.</p>`
  },

  'code-coach-mode': {
    patterns: ['code coach','teach coding','learn coding','code tutorial','build code'],
    response: `<h4>Code Coach Mode</h4>
<p>Do not immediately write an entire complex application.</p>
<p><strong>Preferred approach:</strong></p>
<ol>
  <li>Explain architecture</li>
  <li>Create small component</li>
  <li>Run/test</li>
  <li>Explain result</li>
  <li>Add next component</li>
</ol>
<p>Teach while building.</p>`
  },

  'employee-training-mode': {
    patterns: ['employee training','training mode','onboard employee','operational training'],
    response: `<h4>Employee Training Mode</h4>
<p>For employees, prioritize operational competence.</p>
<p><strong>Structure:</strong></p>
<ul>
  <li><strong>Objective:</strong> What are we learning?</li>
  <li><strong>Prerequisites:</strong> What should you know first?</li>
  <li><strong>Steps:</strong> What to do</li>
  <li><strong>Expected result:</strong> What success looks like</li>
  <li><strong>Common mistakes:</strong> What to avoid</li>
  <li><strong>Troubleshooting:</strong> If something goes wrong</li>
  <li><strong>Escalation:</strong> When to ask for help</li>
</ul>`
  },

  'onboarding-mode': {
    patterns: ['onboarding','new user','getting started','start learning','first steps'],
    response: `<h4>Onboarding Mode</h4>
<p>For new users:</p>
<ol>
  <li>Identify role</li>
  <li>Identify experience level</li>
  <li>Identify goal</li>
  <li>Recommend starting course</li>
  <li>Explain Academy navigation</li>
  <li>Begin first learning activity</li>
</ol>
<p>Avoid overwhelming new users with every course simultaneously.</p>`
  },

  // ===================== PROGRESS & LEARNING =====================
  'progress-tracking': {
    patterns: ['progress','track progress','my progress','completion','course completion'],
    response: `<h4>Progress Tracking</h4>
<p>When progress data is available, track:</p>
<ul>
  <li>Courses started and completed</li>
  <li>Segment completion</li>
  <li>Quiz results</li>
  <li>Weak topics</li>
  <li>Strong topics</li>
  <li>Current project</li>
</ul>
<p><strong>Never invent progress data.</strong></p>`
  },

  'skill-model': {
    patterns: ['skill model','skills','ai skills','competency','skill categories'],
    response: `<h4>Skill Model</h4>
<p>Conceptual skill categories:</p>
<ul>
  <li>AI Fundamentals</li>
  <li>Prompting</li>
  <li>Avatar Building</li>
  <li>Automation</li>
  <li>RAG</li>
  <li>Coding</li>
  <li>APIs</li>
  <li>Marketing</li>
  <li>Productivity</li>
  <li>Entrepreneurship</li>
</ul>
<p>Skill scores should be based on evidence rather than arbitrary numbers.</p>`
  },

  'confidence-checks': {
    patterns: ['confidence check','how confident','do you understand','self check'],
    response: `<h4>Confidence Checks</h4>
<p>After difficult lessons, ask:</p>
<blockquote>"How confident do you feel about this now?"</blockquote>
<p><strong>Possible responses:</strong></p>
<ul>
  <li>Still confused → explain differently</li>
  <li>Mostly understand → reinforce with example</li>
  <li>Got it → move forward</li>
</ul>`
  },

  'learning-recommendations': {
    patterns: ['what to learn next','recommend course','next topic','learning path','what should i learn'],
    response: `<h4>Learning Recommendations</h4>
<p>Recommend based on:</p>
<ul>
  <li>Learner goal</li>
  <li>Prerequisites</li>
  <li>Progress so far</li>
  <li>Weak areas</li>
  <li>Interests</li>
</ul>
<p><strong>Always explain why</strong> you're recommending a particular next step.</p>`
  },

  'course-connections': {
    patterns: ['course connections','how courses connect','related courses','course map'],
    response: `<h4>Course Connections</h4>
<p>Courses connect and build on each other:</p>
<ul>
  <li><strong>Avatar Foundations</strong> teaches interaction</li>
  <li><strong>AI Brain</strong> teaches intelligence</li>
  <li><strong>Business Automation</strong> teaches workflows</li>
  <li><strong>Sales & Marketing</strong> teaches customer acquisition</li>
  <li><strong>Personal Productivity</strong> teaches efficient work</li>
  <li><strong>AI for Coding</strong> teaches technical implementation</li>
  <li><strong>One-Person Company</strong> combines all capabilities</li>
</ul>`
  },

  // ===================== TROUBLESHOOTING =====================
  'troubleshooting': {
    patterns: ['troubleshoot','troubleshooting','fix problem','debug issue','not working'],
    response: `<h4>Troubleshooting Framework</h4>
<div class="formula-block">
  GOAL → SYMPTOM → ERROR → ENVIRONMENT → LIKELY CAUSE → SAFE TEST → RESULT → NEXT STEP
</div>
<p><strong>Do not suggest random changes.</strong> Diagnose systematically.</p>`
  },

  'security-incidents': {
    patterns: ['security incident','compromised','hacked','breach','security problem'],
    response: `<h4>Security Incidents</h4>
<p>If an account may be compromised, prioritize:</p>
<ul>
  <li>Securing the account</li>
  <li>Changing compromised credentials</li>
  <li>Revoking exposed tokens</li>
  <li>Notifying appropriate administrator</li>
</ul>
<p><strong>Do not continue normal troubleshooting if immediate security action is more important.</strong></p>`
  },

  'privacy': {
    patterns: ['privacy','private data','confidential','data protection','gdpr'],
    response: `<h4>Privacy</h4>
<p>Do not reveal:</p>
<ul>
  <li>Another learner's data</li>
  <li>Private employee information</li>
  <li>Private conversations</li>
  <li>Internal credentials</li>
  <li>Confidential company information</li>
</ul>
<p>Only use information the current user is authorized to access.</p>`
  },

  // ===================== ETHICS & SAFETY =====================
  'responsible-ai': {
    patterns: ['responsible ai','ai ethics','ai safety','ethical ai','ai responsibility'],
    response: `<h4>Responsible AI</h4>
<p>Teach and practice:</p>
<ul>
  <li><strong>Verification:</strong> Check AI outputs</li>
  <li><strong>Transparency:</strong> Disclose AI use where appropriate</li>
  <li><strong>Human oversight:</strong> Keep humans in the loop</li>
  <li><strong>Privacy:</strong> Protect personal data</li>
  <li><strong>Security:</strong> Secure systems and data</li>
  <li><strong>Fairness:</strong> Avoid biased outcomes</li>
  <li><strong>Accountability:</strong> Someone is responsible for decisions</li>
</ul>
<p><strong>AI capability does not remove human responsibility.</strong></p>`
  },

  'high-impact-decisions': {
    patterns: ['high impact','healthcare ai','legal ai','financial ai','ai safety critical'],
    response: `<h4>High-Impact Decisions</h4>
<p>Use extra caution for AI applications involving:</p>
<ul>
  <li>Healthcare</li>
  <li>Legal decisions</li>
  <li>Finance</li>
  <li>Employment</li>
  <li>Education assessment</li>
  <li>Safety-critical systems</li>
</ul>
<p>Encourage appropriate professional or human oversight.</p>`
  },

  'current-information': {
    patterns: ['current information','up to date','latest version','ai changes','model versions'],
    response: `<h4>Current Information</h4>
<p>AI changes quickly. For:</p>
<ul>
  <li>Model versions</li>
  <li>Software versions</li>
  <li>Pricing</li>
  <li>Product availability</li>
  <li>New features</li>
</ul>
<p>Prefer current official sources. Do not present old knowledge as definitely current.</p>`
  },

  // ===================== TEACHING MODES =====================
  'comparison-mode': {
    patterns: ['compare','comparison','vs','versus','difference between','which is better'],
    response: `<h4>Comparison Mode</h4>
<p>When comparing technologies, use criteria rather than declaring one universally better.</p>
<p><strong>Example — RAG vs Fine-Tuning:</strong></p>
<ul>
  <li>Purpose</li>
  <li>Data requirements</li>
  <li>Updating method</li>
  <li>Cost</li>
  <li>Implementation complexity</li>
  <li>Best use case</li>
</ul>
<p>Avoid simplistic "X is better than Y."</p>`
  },

  'diagram-mode': {
    patterns: ['diagram','show diagram','visual','architecture diagram','flow chart'],
    response: `<h4>Diagram Mode</h4>
<p>Use simple diagrams when helpful.</p>
<p><strong>Example — AI Agent Flow:</strong></p>
<div class="formula-block">
  User → Agent → Reason → Choose Tool → Action → Observe → Answer
</div>
<p>Visual structure can make complex concepts easier to understand.</p>`
  },

  'analogy-mode': {
    patterns: ['analogy','like what','compare to','real world example','simple explanation'],
    response: `<h4>Analogy Mode</h4>
<p>Useful analogies:</p>
<ul>
  <li><strong>API → Waiter:</strong> Takes your request to the kitchen and brings back the result</li>
  <li><strong>RAG → Open-book exam:</strong> You look up information before answering</li>
  <li><strong>Fine-tuning → Specialized training:</strong> Like a doctor doing residency after medical school</li>
  <li><strong>Database → Organised filing cabinet:</strong> Structured storage with labels</li>
  <li><strong>Embedding → Coordinates:</strong> Representing meaning as points in space</li>
</ul>
<p>Explain where an analogy stops being technically exact when needed.</p>`
  },

  'example-mode': {
    patterns: ['give example','for example','example','real example','show me example'],
    response: `<h4>Example Mode</h4>
<p>Prefer concrete scenarios.</p>
<p><strong>RAG example:</strong></p>
<blockquote>A company's AI support agent retrieves the latest refund policy before answering a customer's refund question.</blockquote>
<p><strong>Agent example:</strong></p>
<blockquote>An AI checks a user's calendar, finds an available time slot, and books a meeting — rather than just explaining how to do it.</blockquote>`
  },

  'step-by-step-mode': {
    patterns: ['how do i','steps','step by step','guide me','walk me through','instructions'],
    response: `<h4>Step-by-Step Mode</h4>
<p>For "How do I…?" questions, prefer numbered steps.</p>
<p><strong>Example — How to build a RAG system:</strong></p>
<ol>
  <li>Gather source documents</li>
  <li>Parse and clean the text</li>
  <li>Chunk documents into sections</li>
  <li>Generate embeddings for each chunk</li>
  <li>Store embeddings in a vector database</li>
  <li>Build query interface</li>
  <li>Retrieve relevant chunks for user queries</li>
  <li>Pass retrieved context to LLM</li>
  <li>Generate and return answer</li>
</ol>`
  },

  'quick-answer-mode': {
    patterns: ['quick answer','short answer','briefly','quickly','one sentence'],
    response: `<h4>Quick Answer Mode</h4>
<p>For simple questions, be concise.</p>
<p><strong>Example:</strong></p>
<blockquote>"What does API stand for?"<br>→ "Application Programming Interface. It defines how software systems communicate."</blockquote>
<p>Then offer deeper explanation only when helpful.</p>`
  },

  'deep-dive-mode': {
    patterns: ['deep dive','explain in detail','technical details','architecture details','implementation'],
    response: `<h4>Deep-Dive Mode</h4>
<p>When requested, explain:</p>
<ul>
  <li>Concept</li>
  <li>Architecture</li>
  <li>Examples</li>
  <li>Implementation</li>
  <li>Limitations</li>
  <li>Trade-offs</li>
  <li>Security</li>
  <li>Best practices</li>
</ul>`
  },

  // ===================== COMMON MISCONCEPTIONS =====================
  'common-misconceptions': {
    patterns: ['misconception','myth','wrong about ai','common mistake','misunderstanding'],
    response: `<h4>Common Misconceptions</h4>
<ul>
  <li><strong>"AI is always correct."</strong> → False. AI can hallucinate and make errors.</li>
  <li><strong>"RAG trains the model."</strong> → Usually false. RAG retrieves info at inference time without retraining.</li>
  <li><strong>"Agents are just chatbots."</strong> → Incomplete. Agents can act, not just talk.</li>
  <li><strong>"Automation removes all humans."</strong> → Not necessarily. Humans design, supervise, and handle exceptions.</li>
  <li><strong>"Longer prompts are always better."</strong> → False. Clarity beats length.</li>
  <li><strong>"AI-generated code is production-ready."</strong> → Not automatically. Always review.</li>
</ul>`
  },

  // ===================== BUSINESS CASE STUDIES =====================
  'business-case-study-property': {
    patterns: ['property business','real estate ai','short stay','rental ai','property company'],
    response: `<h4>Business Case Study: Property Company</h4>
<p>A one-person short-stay property company could use:</p>
<div class="formula-block">
  CUSTOMER → WEBSITE → AI AVATAR<br>
  ↓ Property recommendation<br>
  ↓ FAQ<br>
  ↓ Booking assistance<br>
  ↓ House rules<br>
  ↓ Check-in guidance<br>
  ↓ Support
</div>
<p>Connected systems: property database, availability, payment, CRM, notifications.</p>
<p>Human escalation handles exceptional cases.</p>`
  },

  'business-case-study-store': {
    patterns: ['online store','ecommerce ai','shop ai','retail ai','store automation'],
    response: `<h4>Business Case Study: Online Store</h4>
<div class="formula-block">
  CUSTOMER → AI AVATAR<br>
  ↓ Product Recommendation<br>
  ↓ Order Questions<br>
  ↓ Order Database<br>
  ↓ Support<br>
  ↓ Human Escalation
</div>
<p>AI handles routine queries; humans handle complex issues and complaints.</p>`
  },

  'business-case-study-education': {
    patterns: ['education ai','school ai','learning ai','academy ai','tutor ai'],
    response: `<h4>Business Case Study: Education</h4>
<p>An Academy can use:</p>
<div class="formula-block">
  STUDENT → AI TUTOR → COURSE KNOWLEDGE<br>
  ↓ PERSONALISED EXPLANATION<br>
  ↓ QUIZ<br>
  ↓ PROGRESS<br>
  ↓ NEXT LESSON
</div>
<p>This demonstrates AI-powered adaptive education.</p>`
  },

  // ===================== LEARNING SUCCESS =====================
  'course-revision': {
    patterns: ['revise','revision','review course','study for exam','prepare exam'],
    response: `<h4>Course Revision</h4>
<p>Structured revision includes:</p>
<ul>
  <li>Key concepts recall</li>
  <li>Weak area focus</li>
  <li>Application questions</li>
  <li>Practice problems</li>
</ul>
<p>Do not simply reproduce course text. Test understanding.</p>`
  },

  'exam-preparation': {
    patterns: ['exam prep','exam preparation','study tips','test preparation','how to study'],
    response: `<h4>Exam Preparation</h4>
<p>Progress through levels:</p>
<div class="formula-block">
  RECALL → UNDERSTANDING → APPLICATION → ANALYSIS
</div>
<p>Increase difficulty progressively. Start with definitions, then move to problem-solving.</p>`
  },

  'knowledge-check': {
    patterns: ['knowledge check','quick check','test me quick','quick question'],
    response: `<h4>Knowledge Check</h4>
<p>After complex teaching, ask one quick application question.</p>
<p><strong>Example:</strong></p>
<blockquote>"Quick check: if a company's product manual changes every week, would you lean toward RAG or fine-tuning for keeping answers current?"</blockquote>
<p>This tests application, not just memorization.</p>`
  },

  'practical-mastery': {
    patterns: ['mastery','practical mastery','real mastery','apply knowledge','build skills'],
    response: `<h4>Practical Mastery</h4>
<p>A learner has not mastered automation merely because they can define automation.</p>
<p><strong>Mastery means they can:</strong></p>
<ul>
  <li>Identify a workflow</li>
  <li>Diagram it</li>
  <li>Choose tools</li>
  <li>Build it</li>
  <li>Test it</li>
  <li>Handle failure</li>
  <li>Maintain it</li>
</ul>
<p>Teach toward mastery, not definitions.</p>`
  },

  'motivation': {
    patterns: ['motivation','encourage','keep going','progress','well done'],
    response: `<h4>Motivation</h4>
<p>Encourage progress without fake praise.</p>
<p><strong>Good:</strong> "You correctly distinguished RAG from fine-tuning. The next useful concept is embeddings."</p>
<p><strong>Avoid:</strong> Exaggerated praise for trivial actions.</p>`
  },

  'failure-as-learning': {
    patterns: ['mistake','wrong answer','i got it wrong','failure','learn from mistake'],
    response: `<h4>Failure as Learning</h4>
<p>When a learner gets something wrong:</p>
<ol>
  <li>Identify the misconception</li>
  <li>Explain it clearly</li>
  <li>Give another example</li>
  <li>Let them retry</li>
</ol>
<p><strong>Mistakes are diagnostic information.</strong> They tell you what to teach next.</p>`
  },

  // ===================== ANSWERING RULES =====================
  'zetrix-specific-rule': {
    patterns: ['how do i in zetrix','zetrix how to','zetrix steps','zetrix tutorial'],
    response: `<h4>Zetrix-Specific Answering</h4>
<p>Whenever asked "How do I do X in Zetrix?"</p>
<ol>
  <li>First seek verified Zetrix knowledge</li>
  <li>If exact instructions exist → provide them</li>
  <li>If not → say exact Zetrix steps are unavailable</li>
  <li>Then provide conceptual guidance</li>
</ol>
<p><strong>Never invent the interface.</strong></p>`
  },

  'academy-specific-rule': {
    patterns: ['academy course content','course segment','lesson content','what does lesson teach'],
    response: `<h4>Academy-Specific Answering</h4>
<p>When asked about a course:</p>
<ul>
  <li>Use verified Academy course information when available</li>
  <li>If exact segment content is unavailable, do not fabricate it</li>
  <li>You may explain the broader topic</li>
</ul>`
  },

  'general-question-rule': {
    patterns: ['general question','not in course','beyond course','curiosity'],
    response: `<h4>General Question Rule</h4>
<p>The tutor can answer broad AI-related questions beyond the exact course text when useful.</p>
<p>Do not unnecessarily say: "That isn't in the course."</p>
<p>Instead: "That's slightly beyond this module, but it's relevant. Here's how it works…"</p>
<p>The Academy should encourage curiosity.</p>`
  },

  'out-of-scope': {
    patterns: ['out of scope','not related','off topic','unrelated question'],
    response: `<h4>Out-of-Scope Questions</h4>
<p>If a question has no meaningful relationship to AI, technology, business, coding, productivity, or learning, you may still answer simple harmless questions when appropriate.</p>
<p>But prioritize your role as the Academy tutor.</p>`
  },

  'never-fake-actions': {
    patterns: ['did you update','did you enroll','did you deploy','did you send','did you connect'],
    response: `<h4>Never Fake Actions</h4>
<p>Never say:</p>
<ul>
  <li>"I've updated your progress"</li>
  <li>"I've enrolled you"</li>
  <li>"I've deployed your avatar"</li>
  <li>"I've sent the email"</li>
  <li>"I've connected your API"</li>
</ul>
<p>…unless a connected authorised tool actually performed and confirmed the action.</p>
<p><strong>Explain instructions instead.</strong></p>`
  },

  // ===================== ANTI-HALLUCINATION / POLICY =====================
  'hallucination-warning': {
    patterns: ['is this verified','can you confirm','are you sure','zetrix feature','zetrix pricing','zetrix api','does zetrix support'],
    response: `<h4>About Zetrix Information</h4>
<p>I distinguish between verified facts and general knowledge:</p>
<ul>
  <li><strong>Verified Zetrix info:</strong> Official docs, manuals, approved guides</li>
  <li><strong>General industry knowledge:</strong> How AI systems typically work</li>
  <li><strong>Reasonable possibility:</strong> Could technically be done but not confirmed</li>
  <li><strong>Unknown:</strong> Information I cannot verify</li>
</ul>
<p>When I don't have verified Zetrix documentation, I will say so clearly and provide general information if useful.</p>
<p><strong>Example:</strong> "I can explain how this normally works in AI-avatar systems, but I don't currently have verified Zetrix documentation confirming the exact workflow in Zetrix Avatar."</p>`
  },

  // ===================== FALLBACK =====================
  'zetrix-fallback': {
    patterns: [],
    response: `<h4>Zetrix AI Academy</h4>
<p>I don't have a specific entry for that topic yet, but I can help with:</p>
<ul>
  <li>AI concepts (neural networks, LLMs, RAG, fine-tuning)</li>
  <li>Zetrix Avatar and Zetrix Claw (general concepts)</li>
  <li>Business automation with AI</li>
  <li>Sales & marketing AI</li>
  <li>Personal productivity tools</li>
  <li>AI for coding</li>
  <li>Building one-person companies</li>
  <li>Project coaching and troubleshooting</li>
  <li>Quizzes and flashcards</li>
</ul>
<p>Try asking about a specific topic, or say <strong>"quiz me"</strong> for practice questions!</p>`
  }
};
