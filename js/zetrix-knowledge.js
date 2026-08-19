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

  'ai-embeddings': {
    patterns: ['embedding','embeddings','vector','semantic search','vector search','what are embeddings'],
    response: `<h4>Embeddings</h4>
<p>Embeddings are <strong>numerical representations</strong> that capture useful relationships between information.</p>
<p><strong>Concept:</strong></p>
<div class="formula-block">
  TEXT → EMBEDDING MODEL → VECTOR (list of numbers)
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
</ul>`
  },

  'ai-llm': {
    patterns: ['llm','large language model','what is an llm','language model','gpt','chatgpt','claude','gemini'],
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
</ul>`
  },

  'ai-fine-tuning': {
    patterns: ['fine tuning','fine-tuning','what is fine tuning','model training','adapt model','custom model'],
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

  'ai-prompt-engineering': {
    patterns: ['prompt engineering','prompt','how to prompt','prompt tips','better prompts','prompt framework'],
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
    patterns: ['voice agent','speech recognition','text to speech','tts','stt','voice ai','talking ai'],
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
      { q: 'What is the difference between a chatbot and an AI avatar?', options: ['There is no difference','An avatar adds visual, voice, and action capabilities beyond conversation','A chatbot is smarter','An avatar is always free'], a: 1, explain: 'An avatar can combine conversation + identity + voice + visual representation + knowledge + tools + actions.' }
    ]
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
</ul>
<p>Try asking about a specific topic, or say <strong>"quiz me"</strong> for practice questions!</p>`
  }
};
