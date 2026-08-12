// IELTS Practice Test Data Bank
// Comprehensive questions for all 4 skills

const ieltsData = {
  listening: {
    title: 'IELTS Listening',
    duration: 30,
    sections: 4,
    instructions: 'You will hear 4 recordings. Answer the questions as you listen. There is no pause between sections.',
    tests: [
      {
        id: 'listening-1',
        title: 'Test 1: Hotel Booking & Campus Tour',
        difficulty: 'Easy',
        audioScript: [
          {
            section: 1,
            title: 'Hotel Reservation',
            transcript: `WOMAN: Good morning, Riverside Hotel. How may I help you?
MAN: Good morning. I'd like to book a room for two nights, please — the 15th and 16th of July.
WOMAN: Certainly, sir. Let me check our availability. We have a standard double room at £85 per night, or a deluxe room with river view at £120 per night.
MAN: The standard room sounds fine. Does that include breakfast?
WOMAN: Breakfast is an additional £12 per person. We serve from 7 to 10 a.m.
MAN: I'll take the room without breakfast, thank you. Could you tell me what time check-in is?
WOMAN: Check-in is from 2 p.m., and check-out is by 11 a.m. May I have your name, please?
MAN: Yes, it's Robert Chen. C-H-E-N.
WOMAN: And a contact number?
MAN: 07789 456321.
WOMAN: Perfect. I've reserved a standard double room for July 15th and 16th under the name Robert Chen. Is there anything else?
MAN: Yes — is there parking available?
WOMAN: We have limited parking at £8 per night. Would you like me to reserve a space?
MAN: Yes, please do.`,
            questions: [
              { type: 'completion', q: 'The man wants to book a room for ______ nights.', answer: '2/two', marks: 1 },
              { type: 'completion', q: 'A standard double room costs £______ per night.', answer: '85', marks: 1 },
              { type: 'completion', q: 'Breakfast costs £______ per person.', answer: '12', marks: 1 },
              { type: 'completion', q: 'Check-in time is from ______ p.m.', answer: '2/two', marks: 1 },
              { type: 'completion', q: 'The man\'s phone number is ______.', answer: '07789 456321', marks: 1 },
              { type: 'completion', q: 'Parking costs £______ per night.', answer: '8/eight', marks: 1 },
              { type: 'multiple', q: 'What type of room did the man book?', options: ['Deluxe with river view','Standard double','Single room','Suite'], a: 1, marks: 1 },
              { type: 'multiple', q: 'Did the man choose to include breakfast?', options: ['Yes','No','He was unsure','Not mentioned'], a: 1, marks: 1 },
              { type: 'completion', q: 'Breakfast is served from 7 to ______ a.m.', answer: '10/ten', marks: 1 },
              { type: 'completion', q: 'The man\'s surname is spelled ______.', answer: 'C-H-E-N', marks: 1 }
            ]
          },
          {
            section: 2,
            title: 'Campus Facilities Tour',
            transcript: `Welcome, everyone, to the University of Westfield. I'm your guide, Sarah, and I'll be showing you around the campus today.

First, let's look at the library. It's open 24 hours during term time, and you'll find over 500,000 books across three floors. The top floor is the silent study zone — absolutely no talking there. The middle floor is for group study, and you can book rooms online. The ground floor has the café and IT support desk.

Next is the Student Union building. This is where you'll find the gym, which opens at 6 a.m. and closes at 10 p.m. Membership is free for all students — just register at reception with your student ID. There's also a swimming pool, but that requires a separate £5 monthly fee.

The health centre is next to the main car park. Appointments are available Monday to Friday, 9 a.m. to 5 p.m. For emergencies outside these hours, call the number on your student card.

Finally, the Careers Office is in the Old Building, room 204. They offer CV workshops every Tuesday at 2 p.m., and mock interviews can be booked online.`,
            questions: [
              { type: 'completion', q: 'The library is open ______ hours during term time.', answer: '24/twenty-four', marks: 1 },
              { type: 'completion', q: 'The library has over ______ books.', answer: '500,000', marks: 1 },
              { type: 'multiple', q: 'Which floor is the silent study zone?', options: ['Ground floor','Middle floor','Top floor','All floors'], a: 2, marks: 1 },
              { type: 'completion', q: 'The gym closes at ______ p.m.', answer: '10/ten', marks: 1 },
              { type: 'completion', q: 'Swimming pool membership costs £______ per month.', answer: '5/five', marks: 1 },
              { type: 'completion', q: 'The health centre is open Monday to Friday, ______ a.m. to 5 p.m.', answer: '9/nine', marks: 1 },
              { type: 'completion', q: 'The Careers Office is in room ______.', answer: '204', marks: 1 },
              { type: 'multiple', q: 'When are CV workshops held?', options: ['Every Monday','Every Tuesday','Every Wednesday','Every Thursday'], a: 1, marks: 1 },
              { type: 'completion', q: 'To use the gym, students must register at ______ with their student ID.', answer: 'reception', marks: 1 },
              { type: 'multiple', q: 'Where is the health centre located?', options: ['Next to the library','Next to the main car park','In the Student Union','In the Old Building'], a: 1, marks: 1 }
            ]
          },
          {
            section: 3,
            title: 'Study Group Discussion',
            transcript: `TUTOR: So, team, let's discuss your group project on renewable energy. Emma, could you start with your research on solar power?

EMMA: Sure. I found that solar energy has grown by 22% globally in the last year. However, the main challenge is storage — batteries are still quite expensive. I think we should focus on the cost-benefit analysis.

JAMES: I looked at wind energy. Offshore wind farms are becoming more popular because they're more efficient than onshore ones. But they cost about 40% more to build. The UK is actually leading in this area.

TUTOR: Good point, James. What about you, Priya?

PRIYA: I researched hydroelectric power. It's the most established renewable source, providing 16% of global electricity. But building dams has environmental impacts — it can displace local communities and affect fish migration.

TUTOR: That's an important social angle. For your presentation, I suggest you structure it as: first, give an overview of all three types; then compare their efficiency, cost, and environmental impact; and finally, recommend which one your fictional town should invest in.

EMMA: Should we include graphs?

TUTOR: Yes, visual data is essential. Also, each person should present for about 5 minutes. The total presentation should be 15 minutes, followed by 10 minutes for questions.

JAMES: When is the deadline?

TUTOR: The presentation is on March 24th. I'd like to see your slides by March 20th for feedback.`,
            questions: [
              { type: 'completion', q: 'Solar energy has grown by ______% globally in the last year.', answer: '22', marks: 1 },
              { type: 'completion', q: 'The main challenge for solar power is ______.', answer: 'storage', marks: 1 },
              { type: 'completion', q: 'Offshore wind farms cost about ______% more than onshore ones.', answer: '40/forty', marks: 1 },
              { type: 'multiple', q: 'Which country is leading in offshore wind energy?', options: ['USA','China','UK','Germany'], a: 2, marks: 1 },
              { type: 'completion', q: 'Hydroelectric power provides ______% of global electricity.', answer: '16/sixteen', marks: 1 },
              { type: 'multiple', q: 'What environmental impact of dams does Priya mention?', options: ['Air pollution','Displacing communities','Noise pollution','Soil erosion'], a: 1, marks: 1 },
              { type: 'completion', q: 'Each person should present for about ______ minutes.', answer: '5/five', marks: 1 },
              { type: 'completion', q: 'The total presentation should be ______ minutes.', answer: '15/fifteen', marks: 1 },
              { type: 'completion', q: 'Slides should be submitted by March ______ for feedback.', answer: '20th/20', marks: 1 },
              { type: 'completion', q: 'The presentation is on March ______.', answer: '24th/24', marks: 1 }
            ]
          },
          {
            section: 4,
            title: 'Lecture: The History of Maps',
            transcript: `Today, I'll be talking about the history of cartography — the science and art of map-making.

The earliest known maps date back to around 2300 BCE, carved into clay tablets in Babylonia. These were simple representations of land ownership. The ancient Greeks made significant advances. Eratosthenes, around 240 BCE, calculated the Earth's circumference with surprising accuracy — he was only off by about 15%.

During the Age of Exploration, from the 15th to 17th centuries, maps became crucial for navigation. The Portuguese and Spanish led the way. However, these early maps had a major problem: they couldn't accurately represent the curved Earth on a flat surface. This is called the projection problem, and it still affects maps today.

In the 19th century, national mapping agencies were established. Britain's Ordnance Survey, founded in 1791, produced the first comprehensive map of a country at a scale of one inch to one mile.

The 20th century brought aerial photography and satellite imagery. In 1972, the Landsat program began providing continuous Earth observation. Today, digital maps and GPS have revolutionised navigation. Services like Google Maps process over 20 petabytes of data. Yet despite technology, the fundamental challenge remains: how to represent a three-dimensional world on a two-dimensional surface without distortion.

In conclusion, maps are not just tools — they reflect the cultural and political values of their makers. A medieval Mappa Mundi placed Jerusalem at the centre not for geographic accuracy, but for religious significance.`,
            questions: [
              { type: 'completion', q: 'The earliest known maps date back to around ______ BCE.', answer: '2300', marks: 1 },
              { type: 'completion', q: 'Eratosthenes calculated the Earth\'s circumference around ______ BCE.', answer: '240', marks: 1 },
              { type: 'completion', q: 'Eratosthenes was off by about ______%.', answer: '15/fifteen', marks: 1 },
              { type: 'multiple', q: 'Which countries led map-making during the Age of Exploration?', options: ['Britain and France','Portugal and Spain','Italy and Greece','Netherlands and Germany'], a: 1, marks: 1 },
              { type: 'completion', q: 'The problem of representing the curved Earth on a flat surface is called the ______ problem.', answer: 'projection', marks: 1 },
              { type: 'completion', q: 'Britain\'s Ordnance Survey was founded in ______.', answer: '1791', marks: 1 },
              { type: 'completion', q: 'The scale of the first Ordnance Survey maps was one inch to one ______.', answer: 'mile', marks: 1 },
              { type: 'completion', q: 'The Landsat program began providing Earth observation in ______.', answer: '1972', marks: 1 },
              { type: 'completion', q: 'Google Maps processes over ______ petabytes of data.', answer: '20/twenty', marks: 1 },
              { type: 'multiple', q: 'Why was Jerusalem placed at the centre of medieval Mappa Mundi?', options: ['It was the largest city','For geographic accuracy','For religious significance','It was the capital of the empire'], a: 2, marks: 1 }
            ]
          }
        ]
      }
    ]
  },

  reading: {
    title: 'IELTS Reading',
    duration: 60,
    passages: 3,
    instructions: 'Read the passages and answer the questions. You have 60 minutes. Each correct answer receives 1 mark.',
    tests: [
      {
        id: 'reading-1',
        title: 'Test 1: Coral Reefs, Urban Farming & Sleep Science',
        difficulty: 'Medium',
        passages: [
          {
            title: 'The Future of Coral Reefs',
            text: `Coral reefs are among the most biodiverse ecosystems on Earth, supporting approximately 25% of all marine species despite covering less than 1% of the ocean floor. However, these underwater marvels face unprecedented threats from climate change, pollution, and overfishing.

Rising ocean temperatures cause coral bleaching — a phenomenon where corals expel the symbiotic algae living in their tissues, turning them white. Without these algae, corals lose their primary food source and become more susceptible to disease. In 2016 and 2017, the Great Barrier Reef experienced back-to-back mass bleaching events, affecting over two-thirds of the reef.

Scientists are exploring innovative solutions to save coral reefs. One promising approach is assisted evolution, where researchers breed corals that can tolerate higher temperatures. Another method involves "coral gardening" — growing coral fragments in underwater nurseries before transplanting them to damaged reefs. In Florida, the Coral Restoration Foundation has planted over 100,000 corals since 2007.

However, some marine biologists argue that these interventions are merely buying time. Dr. Sarah Mitchell of the University of Queensland states, "Without aggressive action to reduce carbon emissions, even the most resilient corals won't survive past 2050." The Paris Agreement aims to limit global warming to 1.5°C above pre-industrial levels, but current projections suggest we may exceed 2°C.

Tourism presents a paradox for coral reefs. While reef-related tourism generates $36 billion annually and provides employment for millions, unsustainable practices — such as anchoring on reefs and sunscreen pollution — cause significant damage. Some countries, including Palau and Hawaii, have banned sunscreens containing chemicals harmful to corals.

The future of coral reefs depends on a combination of local conservation efforts and global climate action. As one researcher noted, "We can't engineer our way out of this crisis without addressing the root cause."`,
            questions: [
              { type: 'truefalse', q: 'Coral reefs cover approximately 25% of the ocean floor.', a: false, marks: 1 },
              { type: 'truefalse', q: 'Coral bleaching occurs when corals expel symbiotic algae.', a: true, marks: 1 },
              { type: 'completion', q: 'In 2016 and 2017, over ______ of the Great Barrier Reef was affected by bleaching.', answer: 'two-thirds/2/3', marks: 1 },
              { type: 'multiple', q: 'What is "coral gardening"?', options: ['Growing coral in aquariums','Growing coral fragments in nurseries for transplantation','Planting gardens on coral reefs','Collecting coral samples for research'], a: 1, marks: 1 },
              { type: 'completion', q: 'The Coral Restoration Foundation in Florida has planted over ______ corals since 2007.', answer: '100,000', marks: 1 },
              { type: 'multiple', q: 'According to Dr. Sarah Mitchell, what is necessary for coral survival?', options: ['More underwater nurseries','Aggressive carbon emission reduction','Better tourism practices','More marine protected areas'], a: 1, marks: 1 },
              { type: 'completion', q: 'The Paris Agreement aims to limit warming to ______°C above pre-industrial levels.', answer: '1.5', marks: 1 },
              { type: 'truefalse', q: 'Reef-related tourism generates approximately $36 billion annually.', a: true, marks: 1 },
              { type: 'multiple', q: 'Which two locations have banned harmful sunscreens?', options: ['Australia and New Zealand','Palau and Hawaii','Florida and California','Japan and Thailand'], a: 1, marks: 1 },
              { type: 'completion', q: 'According to the text, the future of reefs depends on local conservation and global ______ action.', answer: 'climate', marks: 1 }
            ]
          },
          {
            title: 'Vertical Farming: Agriculture Goes Up',
            text: `By 2050, the world's population is expected to reach 9.7 billion, requiring 70% more food than is produced today. Traditional agriculture faces severe constraints: arable land is limited, water resources are depleting, and climate change is making weather patterns increasingly unpredictable. Vertical farming offers a radical alternative.

Vertical farms grow crops in stacked layers, usually indoors, using soilless cultivation techniques such as hydroponics and aeroponics. LED lighting mimics sunlight, and climate control systems maintain optimal growing conditions year-round. This eliminates the need for pesticides and reduces water usage by up to 95% compared to conventional farming.

The world's largest vertical farm opened in Dubai in 2022. Spanning 330,000 square feet, it produces over 1 million kilograms of leafy greens annually while using 95% less water than traditional methods. Similarly, AeroFarms in New Jersey grows kale, arugula, and other greens in a fully controlled environment, achieving up to 390 times greater productivity per square foot than field farming.

However, vertical farming faces significant challenges. The energy costs of LED lighting and climate control are substantial. Critics point out that if the electricity comes from fossil fuels, the environmental benefits are negated. Additionally, vertical farms are currently limited to high-value, fast-growing crops like lettuce and herbs. Staple crops such as wheat, rice, and corn — which provide 60% of human caloric intake — are not yet economically viable to grow vertically.

Despite these limitations, proponents argue that vertical farming complements rather than replaces traditional agriculture. Professor Dickson Despommier of Columbia University, who coined the term "vertical farming" in 1999, believes that integrating vertical farms into urban environments could reduce transportation costs, improve food security, and reconnect city dwellers with food production.

The technology is advancing rapidly. Researchers are experimenting with AI-driven growing systems that optimise light, nutrients, and harvest timing. As renewable energy becomes cheaper and technology improves, vertical farming may become an essential component of global food security.`,
            questions: [
              { type: 'completion', q: 'By 2050, the world\'s population is expected to reach ______ billion.', answer: '9.7', marks: 1 },
              { type: 'completion', q: 'Food production needs to increase by ______% by 2050.', answer: '70/seventy', marks: 1 },
              { type: 'multiple', q: 'How much water does vertical farming save compared to conventional farming?', options: ['50%','75%','90%','95%'], a: 3, marks: 1 },
              { type: 'completion', q: 'The world\'s largest vertical farm opened in ______ in 2022.', answer: 'Dubai', marks: 1 },
              { type: 'completion', q: 'AeroFarms achieves up to ______ times greater productivity per square foot than field farming.', answer: '390', marks: 1 },
              { type: 'truefalse', q: 'Vertical farms currently grow wheat, rice, and corn economically.', a: false, marks: 1 },
              { type: 'completion', q: 'Staple crops provide ______% of human caloric intake.', answer: '60/sixty', marks: 1 },
              { type: 'multiple', q: 'Who coined the term "vertical farming"?', options: ['Bill Gates','Dickson Despommier','Elon Musk','Norman Borlaug'], a: 1, marks: 1 },
              { type: 'completion', q: 'The term "vertical farming" was coined in ______.', answer: '1999', marks: 1 },
              { type: 'truefalse', q: 'AI-driven growing systems are being researched to optimise vertical farming.', a: true, marks: 1 }
            ]
          },
          {
            title: 'The Science of Sleep',
            text: `Sleep is not merely a passive state of rest — it is an active, complex process essential for physical health, cognitive function, and emotional wellbeing. Despite its importance, modern society increasingly treats sleep as a luxury rather than a necessity.

Sleep occurs in cycles of approximately 90 minutes, each containing four stages. Stages 1 and 2 are light sleep, Stage 3 is deep slow-wave sleep crucial for physical restoration, and REM (Rapid Eye Movement) sleep is when most dreaming occurs and memories are consolidated. A healthy adult typically needs 4-6 complete cycles per night, equating to 7-9 hours of sleep.

Chronic sleep deprivation has alarming consequences. After just 17 hours without sleep, cognitive performance is equivalent to having a blood alcohol concentration of 0.05% — the legal driving limit in many countries. After 24 hours, this rises to 0.10%. Long-term sleep deficiency is linked to increased risk of heart disease, diabetes, obesity, depression, and certain cancers.

The blue light emitted by smartphones, tablets, and computers suppresses melatonin production — the hormone that regulates sleep-wake cycles. Studies show that using these devices within two hours of bedtime can delay sleep onset by up to 90 minutes. The recommended solution is to avoid screens before bed or use blue-light filtering apps and glasses.

Caffeine further disrupts sleep architecture. With a half-life of 5-6 hours, consuming coffee at 4 p.m. means half the caffeine is still in your system at 10 p.m. Even if you fall asleep, caffeine reduces deep sleep quality by 20-30%.

Napping can be beneficial if done correctly. A 20-minute "power nap" in the early afternoon boosts alertness without causing grogginess. However, napping longer than 30 minutes or after 3 p.m. can interfere with nighttime sleep.

Sleep hygiene — the habits and practices that promote good sleep — is increasingly recognised as a pillar of health alongside diet and exercise. Recommendations include maintaining a consistent sleep schedule, keeping the bedroom cool (18-20°C), and avoiding large meals before bedtime.`,
            questions: [
              { type: 'completion', q: 'Each sleep cycle lasts approximately ______ minutes.', answer: '90/ninety', marks: 1 },
              { type: 'multiple', q: 'During which stage are memories consolidated?', options: ['Stage 1','Stage 2','Stage 3','REM'], a: 3, marks: 1 },
              { type: 'completion', q: 'A healthy adult needs ______ complete sleep cycles per night.', answer: '4-6/four to six', marks: 1 },
              { type: 'completion', q: 'After 17 hours without sleep, cognitive performance equals a blood alcohol concentration of ______%.', answer: '0.05', marks: 1 },
              { type: 'truefalse', q: 'Blue light from devices suppresses melatonin production.', a: true, marks: 1 },
              { type: 'completion', q: 'Using devices before bed can delay sleep onset by up to ______ minutes.', answer: '90/ninety', marks: 1 },
              { type: 'completion', q: 'Caffeine has a half-life of ______ hours.', answer: '5-6/five to six', marks: 1 },
              { type: 'multiple', q: 'How long should a power nap be?', options: ['10 minutes','20 minutes','45 minutes','60 minutes'], a: 1, marks: 1 },
              { type: 'completion', q: 'The recommended bedroom temperature for sleep is ______°C.', answer: '18-20', marks: 1 },
              { type: 'truefalse', q: 'Napping after 3 p.m. is recommended for good sleep hygiene.', a: false, marks: 1 }
            ]
          }
        ]
      }
    ]
  },

  writing: {
    title: 'IELTS Writing',
    duration: 60,
    tasks: 2,
    instructions: 'Task 1: Write at least 150 words. Task 2: Write at least 250 words. You have 60 minutes total. Task 2 carries more weight.',
    tests: [
      {
        id: 'writing-1',
        title: 'Test 1: Chart Analysis & Education Essay',
        difficulty: 'Medium',
        task1: {
          type: 'bar_chart',
          title: 'International Student Enrollment by Country (2015-2023)',
          description: `The bar chart below shows the number of international students enrolled in universities in five countries from 2015 to 2023.

Countries: USA, UK, Australia, Canada, Germany
Data points (thousands):
- USA: 2015: 975, 2019: 1095, 2023: 948
- UK: 2015: 436, 2019: 496, 2023: 679
- Australia: 2015: 278, 2019: 463, 2023: 713
- Canada: 2015: 208, 2019: 404, 2023: 682
- Germany: 2015: 302, 2019: 395, 2023: 458`,
          instructions: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
        },
        task2: {
          type: 'opinion',
          title: 'Technology in Education',
          prompt: 'Some people believe that technology has made education more accessible and effective, while others argue that it has created new inequalities and distractions. Discuss both views and give your own opinion. Write at least 250 words.',
          instructions: 'Give reasons for your answer and include any relevant examples from your own knowledge or experience.'
        }
      },
      {
        id: 'writing-2',
        title: 'Test 2: Process Diagram & Environment Essay',
        difficulty: 'Medium',
        task1: {
          type: 'process',
          title: 'The Process of Recycling Aluminium Cans',
          description: `The diagram below shows the process of recycling aluminium cans.

Stages:
1. Collection: Used cans are collected from homes and businesses
2. Sorting: Cans are separated from other materials at a recycling facility
3. Cleaning: Cans are washed to remove labels and contaminants
4. Shredding: Cans are shredded into small pieces
5. Heating: Shredded aluminium is heated to 700°C to melt it
6. Moulding: Liquid aluminium is poured into moulds to form ingots
7. Rolling: Ingots are rolled into thin sheets
8. Manufacturing: Sheets are used to make new cans

Note: The entire process takes approximately 6 weeks. Recycling aluminium uses 95% less energy than producing new aluminium from raw materials.`,
          instructions: 'Summarise the information by selecting and reporting the main features. Write at least 150 words.'
        },
        task2: {
          type: 'discussion',
          title: 'Individual vs Government Responsibility',
          prompt: 'Some people think that the best way to reduce environmental problems is for individuals to take action, while others believe that only governments and large companies can make a difference. Discuss both views and give your own opinion. Write at least 250 words.',
          instructions: 'Give reasons for your answer and include any relevant examples from your own knowledge or experience.'
        }
      },
      {
        id: 'writing-3',
        title: 'Test 3: Line Graph & Society Essay',
        difficulty: 'Hard',
        task1: {
          type: 'line_graph',
          title: 'Average Life Expectancy in Developed vs Developing Countries (1950-2020)',
          description: `The line graph below shows the average life expectancy in developed and developing countries from 1950 to 2020.

Developed countries:
- 1950: 66 years
- 1970: 71 years
- 1990: 75 years
- 2010: 79 years
- 2020: 80 years

Developing countries:
- 1950: 41 years
- 1970: 51 years
- 1990: 62 years
- 2010: 68 years
- 2020: 71 years`,
          instructions: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
        },
        task2: {
          type: 'advantages_disadvantages',
          title: 'Remote Work',
          prompt: 'In many countries, working from home has become much more common. What are the advantages and disadvantages of this trend? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.',
          instructions: 'Give reasons for your answer and include any relevant examples from your own knowledge or experience.'
        }
      }
    ]
  },

  speaking: {
    title: 'IELTS Speaking',
    duration: 14,
    parts: 3,
    instructions: 'Part 1: Introduction (4-5 min). Part 2: Long turn with 1 min preparation (3-4 min). Part 3: Discussion (4-5 min).',
    tests: [
      {
        id: 'speaking-1',
        title: 'Test 1: Travel & Tourism',
        difficulty: 'Easy',
        part1: {
          title: 'Introduction & Interview',
          duration: '4-5 minutes',
          topics: [
            {
              topic: 'Your hometown',
              questions: [
                'Where are you from?',
                'What do you like most about your hometown?',
                'Has your hometown changed much since you were a child?',
                'Would you like to live in your hometown in the future?'
              ]
            },
            {
              topic: 'Travel',
              questions: [
                'Do you enjoy travelling?',
                'What kind of places do you like to visit?',
                'Have you travelled to any foreign countries?',
                'What is the most interesting place you have ever visited?'
              ]
            },
            {
              topic: 'Transport',
              questions: [
                'How do you usually travel around your city?',
                'What is public transport like in your area?',
                'Do you prefer to drive or use public transport? Why?',
                'Do you think people will use cars less in the future?'
              ]
            }
          ]
        },
        part2: {
          title: 'Individual Long Turn',
          duration: '3-4 minutes (1 minute preparation + 1-2 minutes speaking)',
          card: {
            topic: 'Describe a memorable journey you have taken.',
            prompts: [
              'Where you went',
              'Who you were with',
              'What you did during the journey',
              'Why it was memorable'
            ],
            followUp: [
              'Would you like to make a similar journey again?',
              'What do you think makes a journey memorable?'
            ]
          }
        },
        part3: {
          title: 'Two-Way Discussion',
          duration: '4-5 minutes',
          questions: [
            'How has travel changed in your country over the last 50 years?',
            'What are the benefits and drawbacks of international tourism for local communities?',
            'Do you think space tourism will become common in the future? Why or why not?',
            'Some people say that the best way to learn about a culture is to visit it. Do you agree?',
            'How can governments balance the economic benefits of tourism with environmental protection?'
          ]
        }
      },
      {
        id: 'speaking-2',
        title: 'Test 2: Technology & Communication',
        difficulty: 'Medium',
        part1: {
          title: 'Introduction & Interview',
          duration: '4-5 minutes',
          topics: [
            {
              topic: 'Technology use',
              questions: [
                'How often do you use technology in your daily life?',
                'What is your favourite gadget or device? Why?',
                'Has technology made your life easier or more complicated?',
                'What technology did you use when you were a child?'
              ]
            },
            {
              topic: 'Communication',
              questions: [
                'How do you usually keep in touch with friends and family?',
                'Do you prefer to communicate by phone, message, or email?',
                'Has the way people communicate changed in recent years?',
                'Do you think face-to-face communication is still important?'
              ]
            },
            {
              topic: 'Social media',
              questions: [
                'Do you use social media? If so, which platforms?',
                'What are the advantages of social media?',
                'Are there any disadvantages to using social media?',
                'How do you think social media will change in the future?'
              ]
            }
          ]
        },
        part2: {
          title: 'Individual Long Turn',
          duration: '3-4 minutes (1 minute preparation + 1-2 minutes speaking)',
          card: {
            topic: 'Describe a piece of technology that has changed your life.',
            prompts: [
              'What the technology is',
              'When you started using it',
              'How it has changed your life',
              'Whether you think this change is positive or negative'
            ],
            followUp: [
              'Do you think people rely too much on technology?',
              'What technology do you think will be important in the future?'
            ]
          }
        },
        part3: {
          title: 'Two-Way Discussion',
          duration: '4-5 minutes',
          questions: [
            'How has technology changed the way people work?',
            'Do you think artificial intelligence will replace many jobs? Why or why not?',
            'What are the ethical concerns surrounding the use of AI?',
            'Should governments regulate technology companies more strictly?',
            'Some people believe that technology creates more problems than it solves. What is your view?'
          ]
        }
      },
      {
        id: 'speaking-3',
        title: 'Test 3: Education & Learning',
        difficulty: 'Hard',
        part1: {
          title: 'Introduction & Interview',
          duration: '4-5 minutes',
          topics: [
            {
              topic: 'Your studies',
              questions: [
                'What are you studying at the moment?',
                'Why did you choose this subject?',
                'What do you enjoy most about your studies?',
                'Do you prefer studying alone or with others?'
              ]
            },
            {
              topic: 'School memories',
              questions: [
                'What was your favourite subject at school?',
                'Did you have a favourite teacher? What made them special?',
                'What did you like and dislike about your school?',
                'How has education changed since you were at school?'
              ]
            },
            {
              topic: 'Learning styles',
              questions: [
                'How do you prefer to learn new things?',
                'Do you think some people are naturally better at learning than others?',
                'What is the best way to learn a new language?',
                'Do you think exams are the best way to assess students?'
              ]
            }
          ]
        },
        part2: {
          title: 'Individual Long Turn',
          duration: '3-4 minutes (1 minute preparation + 1-2 minutes speaking)',
          card: {
            topic: 'Describe a skill you would like to learn in the future.',
            prompts: [
              'What the skill is',
              'Why you want to learn it',
              'How you plan to learn it',
              'How this skill might benefit you'
            ],
            followUp: [
              'Do you think it is easier for children to learn new skills than adults?',
              'What role do you think schools should play in teaching practical skills?'
            ]
          }
        },
        part3: {
          title: 'Two-Way Discussion',
          duration: '4-5 minutes',
          questions: [
            'How has the purpose of education changed over time?',
            'Should education be free for everyone, including university? Why or why not?',
            'What is more important in education: theoretical knowledge or practical skills?',
            'How can countries ensure equal access to quality education?',
            'Do you think traditional universities will still exist in 50 years? Why or why not?'
          ]
        }
      }
    ]
  }
};

// Scoring tables
const ieltsBandScore = {
  listening: { 39: 9.0, 37: 8.5, 35: 8.0, 32: 7.5, 30: 7.0, 26: 6.5, 23: 6.0, 18: 5.5, 16: 5.0, 13: 4.5, 10: 4.0, 8: 3.5, 6: 3.0, 4: 2.5 },
  reading: { 39: 9.0, 37: 8.5, 35: 8.0, 32: 7.5, 30: 7.0, 26: 6.5, 23: 6.0, 18: 5.5, 15: 5.0, 13: 4.5, 10: 4.0, 8: 3.5, 6: 3.0, 4: 2.5 }
};

function calculateBandScore(skill, correct, total) {
  const table = ieltsBandScore[skill];
  if (!table) return null;
  const raw = Math.round((correct / total) * 40);
  let band = 2.5;
  for (const [threshold, score] of Object.entries(table)) {
    if (raw >= parseInt(threshold)) {
      band = score;
      break;
    }
  }
  return { raw, band, correct, total };
}
