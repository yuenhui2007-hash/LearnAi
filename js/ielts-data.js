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
          },
{
        id: 'listening-2',
        title: 'Test 2: Job Interview & Museum Tour',
        difficulty: 'Medium',
        audioScript: [
          {
            section: 1,
            title: 'Job Interview',
            transcript: `INTERVIEWER: Good morning. Please take a seat. I'm Helen Marsh from the Human Resources department.
CANDIDATE: Good morning. Thank you. I'm David Okafor.
INTERVIEWER: Nice to meet you, David. Let's begin. Could you tell me why you're interested in this position?
CANDIDATE: Certainly. I've been working as a marketing assistant for two years at a digital agency, and I'm looking to move into a coordinator role with more responsibility. Your company's focus on sustainable products really appeals to me.
INTERVIEWER: That's good to hear. The salary for this role is £28,000 per year, with 25 days of annual leave plus bank holidays. We also offer flexible working — you can choose to work from home two days a week.
CANDIDATE: That sounds ideal. What are the main day-to-day responsibilities?
INTERVIEWER: You'll be managing social media campaigns, coordinating with external agencies, and preparing monthly reports for the marketing director. You'll also oversee a small team of two interns. The position requires proficiency in Google Analytics and at least basic knowledge of graphic design software.
CANDIDATE: I'm comfortable with both. I use Google Analytics daily, and I've completed a course in Adobe Photoshop. Would there be opportunities for professional development?
INTERVIEWER: Yes. We provide an annual training budget of £500 per employee, and we encourage attendance at industry conferences. We also run an internal mentorship programme.
CANDIDATE: That's excellent. When would you expect the successful candidate to start?
INTERVIEWER: We'd like someone to begin on the first of September, as our autumn campaign launches in mid-September. Do you have any questions?
CANDIDATE: Just one — is there a probationary period?
INTERVIEWER: Yes, six months. During that time, we'll set monthly objectives and provide regular feedback.`,
            questions: [
              { type: 'completion', q: 'The candidate has been working as a marketing assistant for ______ years.', answer: '2/two', marks: 1 },
              { type: 'completion', q: 'The candidate wants to move into a ______ role.', answer: 'coordinator', marks: 1 },
              { type: 'completion', q: 'The salary for the position is £______ per year.', answer: '28,000', marks: 1 },
              { type: 'completion', q: 'Employees receive ______ days of annual leave plus bank holidays.', answer: '25/twenty-five', marks: 1 },
              { type: 'completion', q: 'Staff can work from home ______ days a week.', answer: '2/two', marks: 1 },
              { type: 'multiple', q: 'Which software does the candidate mention having completed a course in?', options: ['Google Analytics','Microsoft Excel','Adobe Photoshop','Canva'], a: 2, marks: 1 },
              { type: 'completion', q: 'The annual training budget per employee is £______.', answer: '500', marks: 1 },
              { type: 'completion', q: 'The successful candidate should start on the first of ______.', answer: 'September', marks: 1 },
              { type: 'completion', q: 'The autumn campaign launches in mid-______.', answer: 'September', marks: 1 },
              { type: 'completion', q: 'The probationary period lasts ______ months.', answer: '6/six', marks: 1 }
            ]
          },
          {
            section: 2,
            title: 'Museum Audio Guide',
            transcript: `Welcome to the National Maritime Museum. You are currently in Gallery Three, which traces Britain's naval history from 1500 to 1800. This audio guide will accompany you through the main exhibits. Please follow the numbered signs on the floor.

Exhibit One shows a replica of the HMS Victory, the flagship of Admiral Lord Nelson. Launched in 1765, it is most famous for its role in the Battle of Trafalgar in 1805. The ship required a crew of 821 men and carried 104 guns. Look closely at the rigging — over 26 miles of rope were used.

Moving to Exhibit Two, you'll see navigational instruments from the Age of Exploration. The astrolabe, a device used to measure the altitude of stars, was essential for determining latitude at sea. The brass instrument in the centre of the case dates from 1585 and was recovered from a shipwreck off the coast of Cornwall.

Exhibit Three explores life below deck. Conditions were cramped: sailors slept in hammocks slung just 45 centimetres apart. Their daily ration included one pound of biscuit, a gallon of beer, and salted meat. Disease was common, with scurvy — caused by vitamin C deficiency — claiming more lives than combat.

Before you leave this gallery, note the large oil painting on the east wall. It depicts the Battle of Trafalgar and took the artist, J.M.W. Turner, three years to complete. The museum acquired it in 1825.

The next gallery opens at 10:30 a.m. and covers the era of steam-powered vessels.`,
            questions: [
              { type: 'completion', q: 'Gallery Three covers naval history from 1500 to ______.', answer: '1800', marks: 1 },
              { type: 'completion', q: 'The HMS Victory was launched in ______.', answer: '1765', marks: 1 },
              { type: 'multiple', q: 'Which battle is the HMS Victory most famous for?', options: ['Battle of Waterloo','Battle of Trafalgar','Battle of Hastings','Battle of Britain'], a: 1, marks: 1 },
              { type: 'completion', q: 'The HMS Victory required a crew of ______ men.', answer: '821', marks: 1 },
              { type: 'completion', q: 'Over ______ miles of rope were used on the HMS Victory.', answer: '26/twenty-six', marks: 1 },
              { type: 'completion', q: 'The astrolabe was used to measure the altitude of ______.', answer: 'stars', marks: 1 },
              { type: 'completion', q: 'The brass astrolabe dates from ______.', answer: '1585', marks: 1 },
              { type: 'completion', q: 'Sailors slept in hammocks slung ______ centimetres apart.', answer: '45/forty-five', marks: 1 },
              { type: 'completion', q: 'The disease caused by vitamin C deficiency was called ______.', answer: 'scurvy', marks: 1 },
              { type: 'completion', q: 'The museum acquired the painting in ______.', answer: '1825', marks: 1 }
            ]
          },
          {
            section: 3,
            title: 'Academic Discussion',
            transcript: `PROFESSOR: Welcome back, everyone. Today we're discussing your literature review progress. Aisha, let's start with you. What sources have you found for your essay on urban gentrification?
AISHA: I've gathered about fifteen peer-reviewed articles so far. The most useful is a 2019 study by Nguyen and Patel that surveyed 400 residents in East London. They found that 62% of long-term residents felt priced out of their own neighbourhoods after new developments were built.
PROFESSOR: That's a strong statistic. Have you looked at any counter-arguments?
AISHA: Yes. Henderson, in a 2021 paper, argues that gentrification can improve public services and reduce crime rates. He studied three districts in Manchester and found a 30% drop in reported crime over five years.
PROFESSOR: Good balance. Tom, how is your research on food deserts coming along?
TOM: Slowly, I'm afraid. I initially focused on rural areas, but I've had to narrow my scope to inner-city Birmingham because there was too much data. I've found government reports showing that 18% of households in those wards lack access to a supermarket within a 15-minute walk.
PROFESSOR: A 15-minute walk is the standard metric used in public health. That's useful. How many case studies are you planning to include?
TOM: I'm thinking three — two from Birmingham and one from Leeds for comparison. Each case study will examine transport links, income levels, and the presence of fast-food outlets versus grocery stores.
PROFESSOR: That sounds manageable. Remember, your literature reviews are due on the 12th of November, and they should be between 2,000 and 2,500 words. Please use Harvard referencing and include at least twenty sources.`,
            questions: [
              { type: 'completion', q: 'Aisha\'s essay topic is urban ______.', answer: 'gentrification', marks: 1 },
              { type: 'completion', q: 'The Nguyen and Patel study surveyed ______ residents in East London.', answer: '400', marks: 1 },
              { type: 'completion', q: '______% of long-term residents felt priced out of their neighbourhoods.', answer: '62/sixty-two', marks: 1 },
              { type: 'completion', q: 'Henderson studied three districts in ______.', answer: 'Manchester', marks: 1 },
              { type: 'completion', q: 'Henderson found a ______% drop in reported crime over five years.', answer: '30/thirty', marks: 1 },
              { type: 'multiple', q: 'Why did Tom narrow his scope to inner-city Birmingham?', options: ['He preferred the city','There was too much data','His supervisor advised it','Funding was limited'], a: 1, marks: 1 },
              { type: 'completion', q: '______% of households in those wards lack access to a supermarket within a 15-minute walk.', answer: '18/eighteen', marks: 1 },
              { type: 'completion', q: 'Tom plans to include ______ case studies.', answer: '3/three', marks: 1 },
              { type: 'completion', q: 'The literature reviews are due on the ______ of November.', answer: '12th/12', marks: 1 },
              { type: 'completion', q: 'The literature review should be between ______ and 2,500 words.', answer: '2,000', marks: 1 }
            ]
          },
          {
            section: 4,
            title: 'Lecture on Climate Change',
            transcript: `Good afternoon. In today's lecture, I'll examine the evidence for anthropogenic climate change and discuss some of the misconceptions that persist in public debate.

Let's begin with the data. Since the Industrial Revolution, global average temperatures have risen by approximately 1.2 degrees Celsius. The last decade — 2011 to 2020 — was the warmest on record. This warming correlates strongly with atmospheric carbon dioxide concentrations, which have increased from 280 parts per million in pre-industrial times to over 420 parts per million today.

Now, a common misconception is that climate change is caused by the ozone hole. This is incorrect. The ozone hole, located primarily over Antarctica, is caused by chlorofluorocarbons — CFCs — and was addressed by the 1987 Montreal Protocol. While ozone depletion has its own environmental impacts, it is not the primary driver of global warming.

Another misconception is that global warming stopped in 1998. This claim arose because 1998 was an unusually warm year due to a strong El Niño event. However, if you look at long-term trends rather than individual years, the warming trajectory is unmistakable. Ocean heat content, which absorbs over 90% of excess heat, has continued to rise steadily.

What are the consequences? Sea levels have risen by about 21 centimetres since 1880, and the rate of rise is accelerating. Arctic sea ice extent has declined by 13% per decade. Extreme weather events — heatwaves, droughts, and heavy rainfall — are becoming more frequent and more intense.

Mitigation efforts are underway but remain insufficient. The 2015 Paris Agreement set a target of limiting warming to 1.5 degrees Celsius, but current national commitments put us on track for 2.7 degrees by 2100. Transitioning to renewable energy, improving energy efficiency, and protecting natural carbon sinks such as forests are essential strategies.

In conclusion, the scientific consensus is clear: climate change is real, it is driven by human activity, and urgent action is required.`,
            questions: [
              { type: 'completion', q: 'Global average temperatures have risen by approximately ______ degrees Celsius since the Industrial Revolution.', answer: '1.2', marks: 1 },
              { type: 'completion', q: 'The last decade on record covered ______ to 2020.', answer: '2011', marks: 1 },
              { type: 'completion', q: 'Carbon dioxide concentrations were ______ parts per million in pre-industrial times.', answer: '280', marks: 1 },
              { type: 'completion', q: 'Current CO2 levels exceed ______ parts per million.', answer: '420', marks: 1 },
              { type: 'multiple', q: 'What caused the ozone hole?', options: ['Carbon dioxide','Chlorofluorocarbons','Nitrous oxide','Methane'], a: 1, marks: 1 },
              { type: 'completion', q: 'The ozone issue was addressed by the ______ Protocol.', answer: 'Montreal', marks: 1 },
              { type: 'completion', q: '______% of excess heat is absorbed by the oceans.', answer: '90/ninety', marks: 1 },
              { type: 'completion', q: 'Sea levels have risen by about ______ centimetres since 1880.', answer: '21/twenty-one', marks: 1 },
              { type: 'completion', q: 'Arctic sea ice extent has declined by ______% per decade.', answer: '13/thirteen', marks: 1 },
              { type: 'completion', q: 'Current national commitments put the world on track for ______ degrees of warming by 2100.', answer: '2.7', marks: 1 }
            ]
          }
        ]
      },
      {
        id: 'listening-3',
        title: 'Test 3: Library & Festival Events',
        difficulty: 'Medium',
        audioScript: [
          {
            section: 1,
            title: 'Library Registration',
            transcript: `STAFF: Good morning. Welcome to City Central Library. How can I help you today?
MEMBER: Hi, I'd like to register for a library card, please.
STAFF: Of course. Are you a resident of the city?
MEMBER: Yes, I moved here last month. I live at 14 Brookfield Road.
STAFF: Excellent. I'll need to see proof of address and one form of photo identification. A driving licence or passport is fine.
MEMBER: I have my driving licence and a recent utility bill. Will that do?
STAFF: Perfect. Now, we offer three types of membership. Standard membership is free and allows you to borrow up to 6 items for 3 weeks. Premium membership costs £15 per year and lets you borrow 12 items, including DVDs and video games, and you can keep them for 6 weeks.
MEMBER: I'll go with standard for now, thank you.
STAFF: Fine choice. With standard membership, you also get access to our online catalogue and e-book lending service. You can download up to 5 e-books or audiobooks at a time using the CloudLibrary app.
MEMBER: That's useful. What are the library opening hours?
STAFF: Monday to Friday, 9 a.m. to 7 p.m.; Saturday, 10 a.m. to 5 p.m.; and Sunday, 12 p.m. to 4 p.m. We are closed on public holidays.
MEMBER: And is there Wi-Fi?
STAFF: Yes, free Wi-Fi throughout the building. The password is printed on your receipt. There is also a quiet study room on the second floor with 20 desks — no booking required, but it does fill up quickly during exam periods.
MEMBER: Great. Thank you very much.
STAFF: You're all set. Your card number is on the back. Welcome to the library.`,
            questions: [
              { type: 'completion', q: 'The new member lives at ______ Brookfield Road.', answer: '14', marks: 1 },
              { type: 'completion', q: 'Proof of address and one form of photo ______ are required.', answer: 'identification/ID', marks: 1 },
              { type: 'multiple', q: 'Which document did the member NOT mention having?', options: ['Driving licence','Passport','Utility bill'], a: 1, marks: 1 },
              { type: 'completion', q: 'Standard membership allows borrowing up to ______ items.', answer: '6/six', marks: 1 },
              { type: 'completion', q: 'Standard loans are for ______ weeks.', answer: '3/three', marks: 1 },
              { type: 'completion', q: 'Premium membership costs £______ per year.', answer: '15/fifteen', marks: 1 },
              { type: 'completion', q: 'Premium members can borrow ______ items at a time.', answer: '12/twelve', marks: 1 },
              { type: 'completion', q: 'The library is open until ______ p.m. on Saturdays.', answer: '5/five', marks: 1 },
              { type: 'completion', q: 'The quiet study room is on the ______ floor.', answer: 'second/2nd', marks: 1 },
              { type: 'completion', q: 'The quiet study room has ______ desks.', answer: '20/twenty', marks: 1 }
            ]
          },
          {
            section: 2,
            title: 'Festival Announcement',
            transcript: `Welcome, everyone, to the launch event for this year's Riverside Arts Festival. I'm Marcus Lane, the festival director, and I'm thrilled to announce our programme for the week of the 14th to the 20th of August.

This year's theme is "Voices of the World," celebrating cultural diversity through music, theatre, dance, and visual arts. We have artists coming from 22 different countries, making this our most international festival yet.

The opening concert will take place on the 14th at 7 p.m. in the Grand Theatre. The headline act is the Senegalese drum ensemble Nder, who will perform their award-winning piece "Sabar Dreams." Tickets for this event are £25 for adults and £12 for concessions.

Our free outdoor stage in Riverside Park will host performances every afternoon from noon until 6 p.m. Highlights include a Japanese taiko drumming workshop on the 16th, a Brazilian capoeira demonstration on the 17th, and a community ceilidh on the 19th. No tickets are required, but bring a blanket as seating is limited.

For theatre lovers, we're staging three plays at the Old Mill Playhouse. "Crossing Borders," a new work by playwright Amara Okafor, runs on the 15th and 18th at 8 p.m. Matinee performances are at 2:30 p.m. on both days.

Visual arts will be exhibited at the Town Hall Gallery throughout the week, open daily from 10 a.m. to 5 p.m. The featured exhibition, "Threads of Identity," showcases textile art from Indigenous communities in Guatemala and Peru.

Finally, please note that all festival venues are wheelchair accessible, and British Sign Language interpreters will be present at all ticketed performances. A full programme is available on our website or at the festival box office on King Street.`,
            questions: [
              { type: 'completion', q: 'The festival runs from the 14th to the ______ of August.', answer: '20th/twenty', marks: 1 },
              { type: 'completion', q: 'This year\'s theme is "______ of the World."', answer: 'Voices', marks: 1 },
              { type: 'completion', q: 'Artists are coming from ______ different countries.', answer: '22/twenty-two', marks: 1 },
              { type: 'completion', q: 'The opening concert is at ______ p.m. in the Grand Theatre.', answer: '7/seven', marks: 1 },
              { type: 'completion', q: 'The headline act is a ______ drum ensemble called Nder.', answer: 'Senegalese', marks: 1 },
              { type: 'completion', q: 'Concession tickets for the opening concert cost £______.', answer: '12/twelve', marks: 1 },
              { type: 'multiple', q: 'Which event takes place on the 19th?', options: ['Japanese taiko drumming','Brazilian capoeira','Community ceilidh','Crossing Borders matinee'], a: 2, marks: 1 },
              { type: 'completion', q: 'Matinee performances of "Crossing Borders" are at ______ p.m.', answer: '2:30', marks: 1 },
              { type: 'completion', q: 'The Town Hall Gallery is open daily from 10 a.m. to ______ p.m.', answer: '5/five', marks: 1 },
              { type: 'completion', q: 'The featured exhibition is called "______ of Identity."', answer: 'Threads', marks: 1 }
            ]
          },
          {
            section: 3,
            title: 'Study Group Project',
            transcript: `TUTOR: Right, let's check in on your group project about reducing food waste on campus. Fatima, could you give us an update on your research?
FATIMA: Sure. I conducted a survey of 200 students in the three main halls of residence. I found that 45% of food waste comes from uneaten leftovers, 30% from expired produce, and 25% from food prepared but never served. The most common reason students gave was that portion sizes in the cafeteria are too large.
TUTOR: That's really useful data. Kai, what did you find about potential solutions?
KAI: I looked into what other universities are doing. The University of Melbourne introduced smaller plate sizes and saw a 20% reduction in waste within one semester. The University of Edinburgh set up a "too good to go" scheme where students can buy unsold meals at a discount after 7 p.m. That reduced their waste by 35%.
TUTOR: Both sound very promising. Amina, you're looking at the composting angle?
AMINA: Yes. Currently, none of our campus food waste is composted — it all goes to landfill. I spoke with the Facilities Manager, and he said we could trial an on-site composting system for £3,000 in set-up costs. It would produce soil for the campus gardens within 12 weeks.
TUTOR: Excellent initiative. For your final report, I'd like you to compare at least two intervention strategies and include cost-benefit analysis. The report should be 3,000 words and is due by 4 p.m. on Friday the 3rd of May.
FATIMA: Should we include graphs and charts?
TUTOR: Yes, at least three visual elements. And don't forget to cite your sources using APA style. You'll present your findings to the Sustainability Committee on the 10th of May, so prepare a 10-minute slide presentation.`,
            questions: [
              { type: 'completion', q: 'Fatima surveyed ______ students in the halls of residence.', answer: '200/two hundred', marks: 1 },
              { type: 'completion', q: '______% of food waste comes from uneaten leftovers.', answer: '45/forty-five', marks: 1 },
              { type: 'completion', q: '______% of waste comes from expired produce.', answer: '30/thirty', marks: 1 },
              { type: 'multiple', q: 'What was the most common reason students gave for food waste?', options: ['Food is too expensive','They forget about it','Portion sizes are too large','They don\'t like the taste'], a: 2, marks: 1 },
              { type: 'completion', q: 'The University of Melbourne reduced waste by ______% with smaller plate sizes.', answer: '20/twenty', marks: 1 },
              { type: 'completion', q: 'Edinburgh\'s discount scheme operates after ______ p.m.', answer: '7/seven', marks: 1 },
              { type: 'completion', q: 'Edinburgh\'s waste reduction was ______%.', answer: '35/thirty-five', marks: 1 },
              { type: 'completion', q: 'The on-site composting trial would cost £______ to set up.', answer: '3,000', marks: 1 },
              { type: 'completion', q: 'Compost would be ready for campus gardens within ______ weeks.', answer: '12/twelve', marks: 1 },
              { type: 'completion', q: 'The presentation to the Sustainability Committee is on the ______ of May.', answer: '10th/10', marks: 1 }
            ]
          },
          {
            section: 4,
            title: 'Lecture on Psychology',
            transcript: `Today's lecture focuses on cognitive dissonance — a theory developed by Leon Festinger in 1957. Cognitive dissonance occurs when a person holds two or more contradictory beliefs, values, or attitudes, especially when their behaviour conflicts with their self-image.

Festinger's original study involved participants who performed a boring task — turning pegs on a board for an hour. Afterward, some were paid $1 to tell the next participant that the task was enjoyable, while others were paid $20. Those paid $1 rated the task as more interesting than those paid $20. Why? Because earning only $1 provided insufficient justification for lying; their minds resolved the discomfort by changing their attitude toward the task.

This has profound implications for understanding human motivation. Contrary to intuition, larger rewards do not always produce greater attitude change. In fact, smaller rewards can lead to more internalised beliefs because the individual must generate their own justification for the behaviour.

Cognitive dissonance appears in everyday life constantly. A smoker who knows cigarettes cause cancer experiences dissonance. They might resolve it by quitting, by rationalising that smoking relieves stress, or by dismissing the health evidence. Each route reduces psychological discomfort but has very different consequences.

In the field of consumer behaviour, dissonance explains buyer's remorse. After purchasing an expensive item, consumers actively seek information that confirms they made the right choice while ignoring negative reviews. Marketers exploit this by sending reassuring emails and offering loyalty programmes.

Therapeutic applications are equally important. Cognitive behavioural therapy often involves deliberately inducing manageable dissonance to help clients examine and revise maladaptive beliefs. For example, a person with social anxiety might be asked to perform small social acts that contradict their belief that they are socially incompetent.

In summary, cognitive dissonance is not merely an abstract theory. It is a fundamental mechanism that drives attitude change, shapes consumer habits, and offers pathways for psychological intervention.`,
            questions: [
              { type: 'completion', q: 'Cognitive dissonance theory was developed by Leon Festinger in ______.', answer: '1957', marks: 1 },
              { type: 'completion', q: 'Participants in Festinger\'s study performed the boring task for ______ hour(s).', answer: '1/one/an', marks: 1 },
              { type: 'completion', q: 'Some participants were paid $______ to lie about the task.', answer: '1/one', marks: 1 },
              { type: 'completion', q: 'Other participants were paid $______ to lie about the task.', answer: '20/twenty', marks: 1 },
              { type: 'multiple', q: 'Which group rated the task as more interesting?', options: ['Those paid $20','Those paid $1','Both groups equally','Neither group'], a: 1, marks: 1 },
              { type: 'completion', q: 'Smaller rewards can lead to more ______ beliefs.', answer: 'internalised', marks: 1 },
              { type: 'multiple', q: 'What example of dissonance is given from consumer behaviour?', options: ['Impulse buying','Buyer\'s remorse','Window shopping','Brand loyalty'], a: 1, marks: 1 },
              { type: 'completion', q: 'After purchasing, consumers seek information that ______ their choice.', options: ['confirms','contradicts','ignores','challenges'], a: 0, marks: 1 },
              { type: 'completion', q: 'Cognitive behavioural therapy uses manageable dissonance to revise ______ beliefs.', answer: 'maladaptive', marks: 1 },
              { type: 'completion', q: 'A person with social anxiety might be asked to perform small ______ acts.', answer: 'social', marks: 1 }
            ]
          }
        ]
      },
      {
        id: 'listening-4',
        title: 'Test 4: Travel & Community Events',
        difficulty: 'Medium',
        audioScript: [
          {
            section: 1,
            title: 'Flight Booking',
            transcript: `AGENT: Thank you for calling Skylink Travel. This is Priya speaking. How may I assist you?
CUSTOMER: Hi, I'd like to book a return flight from London to Tokyo, departing on the 10th of October and returning on the 24th of October.
AGENT: Certainly, sir. Let me search for available options. Are you flexible with your departure time?
CUSTOMER: I'd prefer a morning flight if possible. And I'll need one checked bag — approximately 23 kilograms.
AGENT: Understood. I have two options for you. British Airways has a direct flight departing Heathrow at 10:45 a.m., arriving at Narita Airport at 6:30 a.m. the next day. The return departs at 9:15 p.m. and arrives at 3:40 p.m. the same day. The total fare, including one checked bag and meals, is £780.
CUSTOMER: That's quite steep. What's the other option?
AGENT: Lufthansa offers a connecting flight via Frankfurt. Outbound departs Heathrow at 8:20 a.m., arrives in Tokyo at 9:50 a.m. the next day. Return departs at 11:30 a.m. The total fare is £620, but the connection time in Frankfurt is only 90 minutes.
CUSTOMER: I'll take the British Airways direct flight, please. It's worth the extra for the convenience.
AGENT: Excellent choice. Would you like to select your seats now? There's a £15 charge per seat for standard seats, or £45 for extra legroom.
CUSTOMER: Just standard seats, please. Aisle seats if available.
AGENT: Noted. Your booking reference is SKL-884290. Please arrive at the airport at least three hours before departure for international flights. Is there anything else?
CUSTOMER: Yes — what's the cancellation policy?
AGENT: You can cancel up to 24 hours before departure for a full refund minus a £50 administration fee.`,
            questions: [
              { type: 'completion', q: 'The customer wants to fly from London to ______.', answer: 'Tokyo', marks: 1 },
              { type: 'completion', q: 'The departure date is the ______ of October.', answer: '10th/10', marks: 1 },
              { type: 'completion', q: 'The return date is the ______ of October.', answer: '24th/24', marks: 1 },
              { type: 'completion', q: 'The customer prefers a ______ flight.', answer: 'morning', marks: 1 },
              { type: 'completion', q: 'The British Airways flight departs at ______ a.m.', answer: '10:45', marks: 1 },
              { type: 'completion', q: 'The British Airways flight arrives at Narita at ______ a.m.', answer: '6:30', marks: 1 },
              { type: 'completion', q: 'The Lufthansa fare is £______.', answer: '620', marks: 1 },
              { type: 'completion', q: 'The connection time in Frankfurt is ______ minutes.', answer: '90/ninety', marks: 1 },
              { type: 'completion', q: 'Standard seat selection costs £______ per seat.', answer: '15/fifteen', marks: 1 },
              { type: 'completion', q: 'Cancellation incurs a £______ administration fee.', answer: '50/fifty', marks: 1 }
            ]
          },
          {
            section: 2,
            title: 'Community Centre',
            transcript: `Hello, and welcome to the newly refurbished Westside Community Centre. I'm your guide, Eleanor, and I'm going to walk you through the facilities that are now available to all residents.

The centre is open six days a week — Monday through Saturday — from 8 a.m. until 9 p.m. We are closed on Sundays and all public holidays.

To your left is the main hall, which can seat up to 150 people. It is available for private hire at a rate of £40 per hour, or £250 for a full day. Local charities receive a 50% discount. The hall has a full audio-visual system and a small stage.

Straight ahead is the fitness suite, which opened just last month. It features 20 cardio machines, a free weights area, and two studios for exercise classes. Membership is £35 per month for adults, £20 for seniors over 60, and £15 for students. Day passes are £8. Classes included in membership are yoga on Monday evenings, spinning on Wednesdays, and Pilates on Friday mornings.

On the ground floor, you'll also find the community café, run by volunteers. It serves hot meals from noon to 2:30 p.m., and light snacks until 5 p.m. All profits go back into centre programmes.

Upstairs, we have three meeting rooms that can be booked free of charge by local clubs and societies. Each room holds approximately 12 people and has a whiteboard and projector.

Finally, the centre runs a weekly food bank every Thursday from 10 a.m. to 1 p.m. Anyone in need can visit — no referral is required.

If you'd like to become a member or book any facility, please speak to reception or visit our website.`,
            questions: [
              { type: 'completion', q: 'The centre is open ______ days a week.', answer: '6/six', marks: 1 },
              { type: 'completion', q: 'The main hall can seat up to ______ people.', answer: '150', marks: 1 },
              { type: 'completion', q: 'Hiring the main hall for a full day costs £______.', answer: '250', marks: 1 },
              { type: 'completion', q: 'Local charities receive a ______% discount on hall hire.', answer: '50/fifty', marks: 1 },
              { type: 'completion', q: 'The fitness suite has ______ cardio machines.', answer: '20/twenty', marks: 1 },
              { type: 'completion', q: 'Senior membership costs £______ per month.', answer: '20/twenty', marks: 1 },
              { type: 'multiple', q: 'On which day is the spinning class held?', options: ['Monday','Wednesday','Friday','Saturday'], a: 1, marks: 1 },
              { type: 'completion', q: 'Hot meals are served from noon to ______ p.m.', answer: '2:30', marks: 1 },
              { type: 'completion', q: 'Each meeting room holds approximately ______ people.', answer: '12/twelve', marks: 1 },
              { type: 'completion', q: 'The food bank runs every ______ from 10 a.m. to 1 p.m.', answer: 'Thursday', marks: 1 }
            ]
          },
          {
            section: 3,
            title: 'Tutor Meeting',
            transcript: `TUTOR: Come in, Ben. Have a seat. I wanted to talk about your dissertation proposal on renewable energy policy.
BEN: Thanks, Dr. Morris. I've drafted the introduction and literature review, but I'm struggling to refine my research question.
TUTOR: Let's look at what you have. Your title is "The Effectiveness of Feed-in Tariffs in Promoting Residential Solar Panel Adoption." That's a strong topic. What data are you planning to collect?
BEN: I was thinking of a mixed-methods approach. First, I'd analyse installation data from the Department of Energy from 2010 to 2022. Then I'd conduct interviews with 15 homeowners who installed panels during that period.
TUTOR: Fifteen interviews is a reasonable number for a master's dissertation. Have you considered which theoretical framework to use?
BEN: I was looking at Rogers' Diffusion of Innovations theory. It explains how new technologies spread through populations, which seems relevant to solar adoption.
TUTOR: That's an excellent fit. Make sure you also address the policy context. The UK's feed-in tariff scheme closed to new applicants in 2019 and was replaced by the Smart Export Guarantee. You'll need to compare both schemes in your analysis.
BEN: I hadn't thought about comparing them directly. Should I narrow my timeframe?
TUTOR: I suggest focusing on 2015 to 2023. That captures the final years of the feed-in tariff and the early impact of the Smart Export Guarantee. It also gives you enough data points. Remember, your draft chapter is due on the 15th of March, and the full dissertation must be submitted by the 30th of June.
BEN: Understood. I'll revise my research question accordingly.
TUTOR: One more thing — have you checked whether you need ethics approval for the interviews?
BEN: I submitted the ethics form last week. I'm waiting for a response.
TUTOR: Good. Ethics clearance usually takes two to three weeks. Factor that into your timeline.`,
            questions: [
              { type: 'completion', q: 'Ben\'s dissertation is about the effectiveness of ______ tariffs.', answer: 'feed-in', marks: 1 },
              { type: 'completion', q: 'Ben plans to analyse installation data from ______ to 2022.', answer: '2010', marks: 1 },
              { type: 'completion', q: 'Ben plans to conduct interviews with ______ homeowners.', answer: '15/fifteen', marks: 1 },
              { type: 'completion', q: 'Ben wants to use Rogers\' ______ of Innovations theory.', answer: 'Diffusion', marks: 1 },
              { type: 'completion', q: 'The UK feed-in tariff scheme closed to new applicants in ______.', answer: '2019', marks: 1 },
              { type: 'completion', q: 'The feed-in tariff was replaced by the Smart ______ Guarantee.', answer: 'Export', marks: 1 },
              { type: 'completion', q: 'The tutor suggests focusing on ______ to 2023.', answer: '2015', marks: 1 },
              { type: 'completion', q: 'The draft chapter is due on the ______ of March.', answer: '15th/15', marks: 1 },
              { type: 'completion', q: 'The full dissertation must be submitted by the ______ of June.', answer: '30th/30', marks: 1 },
              { type: 'completion', q: 'Ethics clearance usually takes ______ to three weeks.', answer: '2/two', marks: 1 }
            ]
          },
          {
            section: 4,
            title: 'Lecture on Space Exploration',
            transcript: `In today's lecture, I'll provide an overview of humanity's journey into space, from the first artificial satellite to contemporary missions aimed at returning humans to the Moon and reaching Mars.

The Space Age began on the 4th of October, 1957, when the Soviet Union launched Sputnik 1. This 83-kilogram metal sphere, roughly the size of a beach ball, orbited Earth for three months before burning up in the atmosphere. Its radio pulses, detectable by amateur radio operators worldwide, sent shockwaves through the Western world and triggered the space race.

Four years later, in 1961, Yuri Gagarin became the first human in space, completing a single orbit of Earth in 108 minutes aboard Vostok 1. The United States responded with the Apollo programme, culminating in the Apollo 11 mission. On the 20th of July, 1969, Neil Armstrong and Buzz Aldrin became the first humans to walk on the lunar surface, while Michael Collins orbited above in the command module.

After the Apollo era, robotic exploration took precedence. The Voyager probes, launched in 1977, have now travelled beyond the heliosphere — the bubble of charged particles from the Sun — and entered interstellar space. Voyager 1 is currently over 24 billion kilometres from Earth, making it the most distant human-made object.

The International Space Station, a collaboration between NASA, Roscosmos, ESA, JAXA, and CSA, has been continuously occupied since November 2000. It serves as a microgravity laboratory where over 3,000 experiments have been conducted in fields ranging from biology to combustion science.

Looking ahead, NASA's Artemis programme aims to land the first woman and the next man on the Moon by the mid-2020s. The Lunar Gateway, a small space station in lunar orbit, will support these missions. Meanwhile, SpaceX's Starship is being developed for crewed missions to Mars, with a long-term vision of establishing a self-sustaining colony.

Mars presents formidable challenges: the journey takes six to nine months, radiation levels are hazardous, and the thin atmosphere offers little protection from micrometeoroids. Yet the scientific payoff is immense. Evidence of ancient river valleys and mineral deposits suggests Mars once had liquid water — and possibly life.

In conclusion, space exploration is entering a new era defined by international collaboration, commercial participation, and ambitious goals. Whether we reach Mars within our lifetimes remains uncertain, but the endeavour itself continues to expand the boundaries of human knowledge.`,
            questions: [
              { type: 'completion', q: 'Sputnik 1 was launched on the 4th of ______, 1957.', answer: 'October', marks: 1 },
              { type: 'completion', q: 'Sputnik 1 weighed ______ kilograms.', answer: '83/eighty-three', marks: 1 },
              { type: 'completion', q: 'Yuri Gagarin\'s flight lasted ______ minutes.', answer: '108', marks: 1 },
              { type: 'completion', q: 'The Apollo 11 lunar landing took place on the ______ of July, 1969.', answer: '20th/20', marks: 1 },
              { type: 'completion', q: 'Michael Collins remained in the ______ module during the lunar landing.', answer: 'command', marks: 1 },
              { type: 'completion', q: 'The Voyager probes were launched in ______.', answer: '1977', marks: 1 },
              { type: 'completion', q: 'The ISS has been continuously occupied since November ______.', answer: '2000', marks: 1 },
              { type: 'completion', q: 'Over ______ experiments have been conducted on the ISS.', answer: '3,000/3000/three thousand', marks: 1 },
              { type: 'multiple', q: 'What is the Lunar Gateway?', options: ['A rocket','A lunar rover','A small space station in lunar orbit','A lunar mining facility'], a: 2, marks: 1 },
              { type: 'completion', q: 'A journey to Mars takes ______ to nine months.', answer: '6/six', marks: 1 }
            ]
          }
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
          },
{
        id: 'reading-2',
        title: 'Test 2: Roman Engineering, Memory & Sustainable Fashion',
        difficulty: 'Medium',
        passages: [
          {
            title: 'Ancient Roman Engineering',
            text: `The Roman Empire is remembered for its military conquests, political institutions, and legal systems, yet its most enduring legacy may be its engineering. Roman engineers transformed the ancient world with innovations in construction, water management, and transportation that remain impressive even by modern standards.\n\nThe Romans did not invent the arch, but they perfected its use in architecture. By employing a round arch made of wedge-shaped stones called voussoirs, they could span greater distances without internal support. This technique enabled the construction of the Colosseum, the Pantheon, and countless aqueducts. The Pont du Gard in southern France, built around 50 CE, stands nearly 50 metres high and carried water across a river valley for over 500 years.\n\nRoman aqueducts were marvels of hydraulic engineering. Using gravity alone, they transported water from distant sources into cities at a gradient of just 0.5 percent — a drop of merely 50 centimetres per 100 metres. The city of Rome was supplied by eleven aqueducts delivering over one million cubic metres of water daily, sufficient for public baths, fountains, and private homes.\n\nRoman concrete was another revolutionary material. Unlike modern concrete, which deteriorates in seawater, Roman concrete grows stronger. Recent research by scientists at the University of California has revealed that the volcanic ash used in Roman concrete creates a crystalline structure that prevents cracks from spreading. This discovery is now inspiring engineers to develop more durable modern concrete.\n\nRoman roads, stretching over 80,000 kilometres at their peak, featured layered foundations of rubble, gravel, and paving stones, with a cambered surface for drainage. These roads enabled rapid military movement and facilitated trade across the empire. Many of these routes still form the basis of modern European highways.`,
            questions: [
              { type: 'truefalse', q: 'The Romans invented the arch.', a: false, marks: 1 },
              { type: 'completion', q: 'The stones used in Roman arches are called ______.', answer: 'voussoirs', marks: 1 },
              { type: 'completion', q: 'The Pont du Gard was built around ______ CE.', answer: '50', marks: 1 },
              { type: 'completion', q: 'Roman aqueducts transported water at a gradient of ______ percent.', answer: '0.5', marks: 1 },
              { type: 'completion', q: 'Rome was supplied by ______ aqueducts.', answer: '11/eleven', marks: 1 },
              { type: 'truefalse', q: 'Roman concrete deteriorates in seawater.', a: false, marks: 1 },
              { type: 'multiple', q: 'What ingredient in Roman concrete creates a crystalline structure?', options: ['Limestone','Volcanic ash','Iron oxide','Marble dust'], a: 1, marks: 1 },
              { type: 'completion', q: 'Roman roads stretched over ______ kilometres at their peak.', answer: '80,000', marks: 1 },
              { type: 'completion', q: 'Roman roads had a ______ surface for drainage.', answer: 'cambered', marks: 1 },
              { type: 'multiple', q: 'What is the main focus of the passage?', options: ['Roman military tactics','Roman engineering innovations','Roman political institutions','Roman legal systems'], a: 1, marks: 1 }
            ]
          },
          {
            title: 'The Neuroscience of Memory',
            text: `Memory is one of the most fascinating and complex functions of the human brain, allowing us to learn from experience, recognise faces, and maintain our sense of identity. Neuroscientists have made remarkable progress in understanding how memories are formed, stored, and retrieved.\n\nThe process begins with encoding. When we experience something, sensory information travels to the hippocampus, a seahorse-shaped structure deep in the temporal lobe. The hippocampus acts as a temporary storage centre, consolidating information from short-term to long-term memory during sleep. Patients with hippocampal damage, such as the famous case of Henry Molaison in the 1950s, can form no new long-term memories yet retain those from before their injury.\n\nMemory is not stored in a single location but distributed across networks of neurons. Long-term potentiation (LTP) is the cellular mechanism underlying learning: when neurons fire together repeatedly, the synaptic connections between them strengthen. This principle, often summarised as "neurons that fire together, wire together," was first proposed by Canadian psychologist Donald Hebb in 1949.\n\nEmotion profoundly affects memory formation. The amygdala, an almond-shaped cluster of nuclei, modulates hippocampal activity during emotionally arousing events. This explains why traumatic experiences and joyful moments are often remembered with exceptional vividness — a phenomenon called flashbulb memory.\n\nMemory is also surprisingly reconstructive. Each time we recall an event, we alter it slightly. Elizabeth Loftus demonstrated that false memories can be implanted through suggestion, raising profound questions about the reliability of eyewitness testimony. Understanding memory's fallibility has significant implications for criminal justice and therapeutic practice.`,
            questions: [
              { type: 'completion', q: 'The hippocampus is shaped like a ______.', answer: 'seahorse', marks: 1 },
              { type: 'truefalse', q: 'Henry Molaison could form new long-term memories after his injury.', a: false, marks: 1 },
              { type: 'completion', q: 'Long-term potentiation is abbreviated as ______.', answer: 'LTP', marks: 1 },
              { type: 'completion', q: 'Donald Hebb proposed the principle of memory in ______.', answer: '1949', marks: 1 },
              { type: 'multiple', q: 'Which structure modulates hippocampal activity during emotional events?', options: ['The cortex','The cerebellum','The amygdala','The thalamus'], a: 2, marks: 1 },
              { type: 'completion', q: 'Exceptionally vivid emotional memories are called ______ memories.', answer: 'flashbulb', marks: 1 },
              { type: 'truefalse', q: 'Memories remain completely unchanged each time they are recalled.', a: false, marks: 1 },
              { type: 'completion', q: '______ Loftus demonstrated that false memories can be implanted.', answer: 'Elizabeth', marks: 1 },
              { type: 'multiple', q: 'What does the passage suggest about eyewitness testimony?', options: ['It is always reliable','It is completely unreliable','Its reliability is questionable','It has improved over time'], a: 2, marks: 1 },
              { type: 'completion', q: 'Memory consolidation from short-term to long-term occurs during ______.', answer: 'sleep', marks: 1 }
            ]
          },
          {
            title: 'Sustainable Fashion',
            text: `The fashion industry is one of the world's most polluting sectors, responsible for 10 percent of global carbon emissions and 20 percent of global wastewater. As awareness grows, sustainable fashion has emerged as both a moral imperative and a growing market segment, challenging the dominance of fast fashion.\n\nThe environmental toll of conventional clothing is staggering. Producing a single cotton T-shirt requires approximately 2,700 litres of water — enough for one person to drink for 2.5 years. Synthetic fabrics like polyester shed microplastic fibres during washing, with an estimated 500,000 tonnes entering oceans annually. Meanwhile, the industry produces 92 million tonnes of textile waste each year, much of which ends up in landfills or is incinerated.\n\nSustainable fashion addresses these issues through multiple strategies. First, material innovation: organic cotton, hemp, and bamboo require significantly less water and no pesticides. Second, circular design: brands like Patagonia and Eileen Fisher now offer repair services and take-back programmes that extend garment lifespans. Third, slow fashion: consumers are encouraged to buy fewer, higher-quality pieces that last longer.\n\nHowever, sustainable fashion faces significant barriers. Greenwashing — misleading marketing that exaggerates environmental credentials — confuses consumers. Additionally, sustainable garments often cost more, limiting access for lower-income shoppers. Some critics argue that individual consumption choices cannot address systemic problems without regulatory intervention.\n\nThe future likely lies in a combination of technological innovation, policy change, and shifting consumer attitudes. Biomaterials grown from agricultural waste, blockchain tracking for supply chain transparency, and extended producer responsibility laws are all gaining traction. As one industry analyst noted, "The question is no longer whether fashion will become sustainable, but how quickly."`,
            questions: [
              { type: 'completion', q: 'The fashion industry is responsible for ______ percent of global carbon emissions.', answer: '10/ten', marks: 1 },
              { type: 'completion', q: 'Producing one cotton T-shirt requires approximately ______ litres of water.', answer: '2,700', marks: 1 },
              { type: 'completion', q: 'An estimated ______ tonnes of microplastic fibres enter oceans annually from synthetic fabrics.', answer: '500,000', marks: 1 },
              { type: 'completion', q: 'The industry produces ______ million tonnes of textile waste each year.', answer: '92', marks: 1 },
              { type: 'multiple', q: 'Which material is NOT mentioned as a sustainable alternative?', options: ['Organic cotton','Hemp','Bamboo','Silk'], a: 3, marks: 1 },
              { type: 'truefalse', q: 'Patagonia offers repair services and take-back programmes.', a: true, marks: 1 },
              { type: 'completion', q: 'Misleading marketing about environmental credentials is called ______.', answer: 'greenwashing', marks: 1 },
              { type: 'multiple', q: 'What is one barrier to sustainable fashion mentioned in the passage?', options: ['Lack of demand','Greenwashing and higher costs','Government restrictions','Limited material availability'], a: 1, marks: 1 },
              { type: 'completion', q: '______ tracking is mentioned as a tool for supply chain transparency.', answer: 'Blockchain', marks: 1 },
              { type: 'truefalse', q: 'The passage suggests that individual choices alone can solve fashion\'s environmental problems.', a: false, marks: 1 }
            ]
          }
        ]
      },
      {
        id: 'reading-3',
        title: 'Test 3: Ocean Plastic, Writing Systems & Urban Transport',
        difficulty: 'Hard',
        passages: [
          {
            title: 'The Plastic Crisis in Our Oceans',
            text: `Every year, approximately 8 million tonnes of plastic waste enter the world's oceans — the equivalent of dumping one garbage truck full of plastic into the sea every minute. This pollution poses an existential threat to marine ecosystems and, increasingly, to human health.\n\nThe majority of ocean plastic originates from land-based sources. Rivers act as conveyor belts, carrying waste from inland areas to coastal waters. A 2017 study identified ten rivers in Asia and Africa as the source of 90 percent of river-borne plastic entering oceans. Once at sea, plastic does not biodegrade; instead, it fragments into smaller pieces under ultraviolet radiation and mechanical abrasion.\n\nMicroplastics — particles smaller than 5 millimetres — have been found in virtually every marine environment, from Arctic sea ice to the deepest ocean trenches. They enter the food web when ingested by zooplankton and are biomagnified as they move up the chain. Recent studies have detected microplastics in human blood, lungs, and placentas, though the long-term health effects remain uncertain.\n\nCleanup efforts are underway but face enormous challenges. The Ocean Cleanup project has deployed passive collection systems in the Great Pacific Garbage Patch, but critics argue that removing plastic from open oceans is technically and economically impractical at scale. Most experts agree that prevention — reducing plastic production and improving waste management — is more effective than cleanup.\n\nLegislative responses vary globally. The European Union has banned single-use plastics such as straws and cutlery. Several African nations have prohibited plastic bags entirely. However, global plastic production continues to rise, projected to double by 2040. Without fundamental systemic change, the plastic crisis will deepen.`,
            questions: [
              { type: 'completion', q: 'Approximately ______ million tonnes of plastic enter oceans annually.', answer: '8/eight', marks: 1 },
              { type: 'multiple', q: 'What percentage of river-borne plastic comes from ten rivers in Asia and Africa?', options: ['50%','70%','90%','95%'], a: 2, marks: 1 },
              { type: 'truefalse', q: 'Plastic biodegrades quickly in the ocean.', a: false, marks: 1 },
              { type: 'completion', q: 'Microplastics are defined as particles smaller than ______ millimetres.', answer: '5/five', marks: 1 },
              { type: 'completion', q: 'Microplastics have been found in human blood, lungs, and ______.', answer: 'placentas', marks: 1 },
              { type: 'multiple', q: 'What is the Ocean Cleanup project targeting?', options: ['River plastic','The Great Pacific Garbage Patch','Coastal beaches','Arctic sea ice'], a: 1, marks: 1 },
              { type: 'truefalse', q: 'Most experts believe cleanup is more effective than prevention.', a: false, marks: 1 },
              { type: 'completion', q: 'The European Union has banned single-use plastics such as straws and ______.', answer: 'cutlery', marks: 1 },
              { type: 'completion', q: 'Global plastic production is projected to ______ by 2040.', answer: 'double', marks: 1 },
              { type: 'multiple', q: 'What does the passage identify as the primary source of ocean plastic?', options: ['Shipping','Fishing nets','Land-based sources','Offshore drilling'], a: 2, marks: 1 }
            ]
          },
          {
            title: 'The Evolution of Writing Systems',
            text: `Writing is one of humanity's most transformative inventions, enabling the preservation of knowledge across generations and the administration of complex societies. The journey from pictographic symbols to alphabetic scripts spans thousands of years and multiple civilisations.\n\nThe earliest known writing system emerged in Mesopotamia around 3200 BCE. Cuneiform, created by the Sumerians, began as pictographs pressed into clay tablets with a reed stylus. Over centuries, these pictures evolved into abstract wedge-shaped marks representing syllables and words. Cuneiform was used for administrative records, literature, and astronomy for over three millennia.\n\nIndependently, ancient Egyptians developed hieroglyphics around 3000 BCE. Unlike cuneiform, hieroglyphics remained largely pictorial, combining logographic and phonetic elements. The Rosetta Stone, discovered in 1799, proved crucial for decipherment because it presented the same text in hieroglyphics, Demotic script, and Greek.\n\nThe alphabet represents a radical simplification. Around 1050 BCE, Phoenician traders developed a consonant-only script of 22 letters that could represent any word through sound. The Greeks later adapted this system by adding vowels, creating the first complete alphabet. This innovation dramatically increased literacy because far fewer symbols needed to be memorised.\n\nThe Roman alphabet, derived from Greek via Etruscan, became the world's most widely used script through the expansion of the Roman Empire and, later, European colonialism. Today, over 130 languages use variants of the Roman alphabet, making it a powerful tool for global communication.`,
            questions: [
              { type: 'completion', q: 'Cuneiform emerged in Mesopotamia around ______ BCE.', answer: '3200', marks: 1 },
              { type: 'completion', q: 'Cuneiform was pressed into clay tablets with a ______ stylus.', answer: 'reed', marks: 1 },
              { type: 'completion', q: 'Hieroglyphics were developed around ______ BCE.', answer: '3000', marks: 1 },
              { type: 'completion', q: 'The ______ Stone was crucial for deciphering hieroglyphics.', answer: 'Rosetta', marks: 1 },
              { type: 'multiple', q: 'How many letters did the Phoenician alphabet have?', options: ['15','22','26','30'], a: 1, marks: 1 },
              { type: 'completion', q: 'The ______ adapted the Phoenician script by adding vowels.', answer: 'Greeks', marks: 1 },
              { type: 'truefalse', q: 'The Phoenician alphabet included both consonants and vowels.', a: false, marks: 1 },
              { type: 'completion', q: 'The Roman alphabet was derived from Greek via ______.', answer: 'Etruscan', marks: 1 },
              { type: 'completion', q: 'Over ______ languages use variants of the Roman alphabet.', answer: '130', marks: 1 },
              { type: 'multiple', q: 'What is the main advantage of alphabetic writing over logographic systems?', options: ['It is more beautiful','Fewer symbols need to be memorised','It is older','It can only represent sounds'], a: 1, marks: 1 }
            ]
          },
          {
            title: 'Urban Transportation in the 21st Century',
            text: `Cities worldwide are grappling with a transportation paradox: as populations grow and economies expand, the very systems that enable mobility are creating congestion, pollution, and social inequity. The challenge of the 21st century is to reimagine urban transport as a sustainable, equitable service rather than a private convenience.\n\nPrivate car ownership has long been the dominant model in wealthy nations. Yet the externalities are severe. In the United States, transportation accounts for 29 percent of greenhouse gas emissions, with personal vehicles responsible for the majority. Urban drivers in Los Angeles spend an average of 119 hours per year stuck in traffic — nearly five full days. The cost of congestion in lost productivity, fuel waste, and health impacts runs into hundreds of billions of dollars annually.\n\nPublic transport offers a partial solution. High-capacity systems like metro rail and bus rapid transit can move thousands of passengers per hour in the space occupied by a few dozen cars. Cities like Tokyo, Seoul, and Singapore have achieved remarkable efficiency through integrated networks. However, public transport requires substantial public investment and often faces political resistance from motorists.\n\nEmerging technologies are reshaping the landscape. Electric vehicles eliminate tailpipe emissions but do not solve congestion or road space limitations. Ride-sharing platforms promised to reduce car ownership but have been shown to increase vehicle miles travelled in many cities. Micromobility — electric scooters and bicycles — offers a promising last-mile solution but raises safety concerns and questions about sidewalk clutter.\n\nThe most successful cities are adopting multimodal strategies that combine various transport types with urban planning reforms. Copenhagen's extensive cycling infrastructure, where 62 percent of residents commute by bike, demonstrates what is possible when political will aligns with investment. Similarly, congestion charging in London has reduced traffic by 30 percent in the city centre since 2003. The path forward requires not technological fixes alone, but a fundamental reimagining of how cities are designed and how citizens move within them.`,
            questions: [
              { type: 'completion', q: 'In the US, transportation accounts for ______ percent of greenhouse gas emissions.', answer: '29/twenty-nine', marks: 1 },
              { type: 'completion', q: 'Los Angeles drivers spend an average of ______ hours per year in traffic.', answer: '119', marks: 1 },
              { type: 'truefalse', q: 'Public transport requires substantial public investment.', a: true, marks: 1 },
              { type: 'multiple', q: 'Which city is mentioned as having 62 percent of residents commute by bike?', options: ['Amsterdam','Tokyo','Copenhagen','Berlin'], a: 2, marks: 1 },
              { type: 'completion', q: 'London\'s congestion charging has reduced traffic by ______ percent.', answer: '30/thirty', marks: 1 },
              { type: 'truefalse', q: 'Ride-sharing platforms have consistently reduced vehicle miles travelled.', a: false, marks: 1 },
              { type: 'completion', q: 'Micromobility includes electric scooters and ______.', answer: 'bicycles/bikes', marks: 1 },
              { type: 'multiple', q: 'What is identified as a limitation of electric vehicles?', options: ['They produce noise pollution','They do not solve congestion','They are too expensive','They require special roads'], a: 1, marks: 1 },
              { type: 'completion', q: 'The passage suggests that solving transport problems requires reimagining how ______ are designed.', answer: 'cities', marks: 1 },
              { type: 'multiple', q: 'What is the main topic of the passage?', options: ['The history of cars','Urban transportation challenges and solutions','Electric vehicle technology','Public transport funding'], a: 1, marks: 1 }
            ]
          }
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
        },
{
        id: 'writing-4',
        title: 'Test 4: Population Table & Dangerous Sports Essay',
        difficulty: 'Hard',
        task1: {
          type: 'table',
          title: 'Urban and Rural Population Percentages Across Five Countries',
          description: `The table below shows the percentage of urban and rural population in five countries in 1950, 1980, 2010, and 2023.

Countries: USA, UK, China, India, Brazil

Data (Urban / Rural percentages):
- USA: 1950: 64% / 36% | 1980: 74% / 26% | 2010: 81% / 19% | 2023: 83% / 17%
- UK: 1950: 77% / 23% | 1980: 89% / 11% | 2010: 82% / 18% | 2023: 84% / 16%
- China: 1950: 12% / 88% | 1980: 20% / 80% | 2010: 50% / 50% | 2023: 65% / 35%
- India: 1950: 17% / 83% | 1980: 23% / 77% | 2010: 31% / 69% | 2023: 36% / 64%
- Brazil: 1950: 36% / 64% | 1980: 68% / 32% | 2010: 85% / 15% | 2023: 88% / 12%`,
          instructions: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
        },
        task2: {
          type: 'opinion',
          title: 'Banning Dangerous Sports',
          prompt: 'Some people believe that governments should ban dangerous sports because they pose unnecessary risks to participants. To what extent do you agree or disagree? Write at least 250 words.',
          instructions: 'Give reasons for your answer and include any relevant examples from your own knowledge or experience.'
        }
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
        },
{
        id: 'speaking-4',
        title: 'Test 4: Health & Fitness',
        difficulty: 'Medium',
        part1: {
          title: 'Introduction & Interview',
          duration: '4-5 minutes',
          topics: [
            {
              topic: 'Exercise habits',
              questions: [
                'How often do you exercise?',
                'What kind of exercise do you enjoy?',
                'Do you prefer exercising alone or with others?',
                'Has your attitude towards exercise changed over the years?'
              ]
            },
            {
              topic: 'Diet',
              questions: [
                'How would you describe your typical diet?',
                'Do you pay attention to nutrition labels on food?',
                'Have you ever tried to change your eating habits?',
                'What role does traditional food play in your diet?'
              ]
            },
            {
              topic: 'Sleep',
              questions: [
                'How many hours of sleep do you usually get?',
                'Do you have a regular sleep schedule?',
                'What do you do if you have trouble falling asleep?',
                'How does lack of sleep affect you during the day?'
              ]
            }
          ]
        },
        part2: {
          title: 'Individual Long Turn',
          duration: '3-4 minutes (1 minute preparation + 1-2 minutes speaking)',
          card: {
            topic: 'Describe a time you improved your health.',
            prompts: [
              'What change you made',
              'Why you decided to make this change',
              'How you implemented it',
              'How you felt about the results'
            ],
            followUp: [
              'Would you recommend this change to others?',
              'What challenges did you face during this process?'
            ]
          }
        },
        part3: {
          title: 'Two-Way Discussion',
          duration: '4-5 minutes',
          questions: [
            'What are the biggest public health challenges facing societies today?',
            'How do healthcare systems differ between developed and developing countries?',
            'Should governments invest more in preventive medicine or treatment?',
            'What role do schools play in promoting healthy lifestyles among children?',
            'How might public health priorities change over the next few decades?'
          ]
        }
      },
      {
        id: 'speaking-5',
        title: 'Test 5: Work & Career',
        difficulty: 'Medium',
        part1: {
          title: 'Introduction & Interview',
          duration: '4-5 minutes',
          topics: [
            {
              topic: 'Current job or studies',
              questions: [
                'What do you do for a living, or what are you currently studying?',
                'What does a typical day look like for you?',
                'What aspects of your work or studies do you find most rewarding?',
                'Are there any parts of your daily routine you would like to change?'
              ]
            },
            {
              topic: 'Dream job',
              questions: [
                'What was your dream job when you were a child?',
                'If you could choose any career, what would it be and why?',
                'What skills do you think are most important for your ideal job?',
                'Do you think it is realistic to follow your dream career?'
              ]
            },
            {
              topic: 'Work-life balance',
              questions: [
                'How do you balance your professional and personal life?',
                'Do you think people in your country work too much?',
                'What activities help you relax after a busy week?',
                'Should employers do more to support work-life balance?'
              ]
            }
          ]
        },
        part2: {
          title: 'Individual Long Turn',
          duration: '3-4 minutes (1 minute preparation + 1-2 minutes speaking)',
          card: {
            topic: 'Describe a challenging project you worked on.',
            prompts: [
              'What the project was about',
              'What your role and responsibilities were',
              'What difficulties you encountered',
              'How you overcame the challenges and what you learned'
            ],
            followUp: [
              'Would you take on a similar project again?',
              'How has this experience influenced your approach to teamwork?'
            ]
          }
        },
        part3: {
          title: 'Two-Way Discussion',
          duration: '4-5 minutes',
          questions: [
            'How do you think the nature of work will change over the next 20 years?',
            'Do you believe automation and artificial intelligence will create more jobs than they eliminate?',
            'What can governments do to prepare workers for an automated economy?',
            'Why do some people stay in jobs they dislike rather than pursuing something more fulfilling?',
            'Is job satisfaction more important than salary? What is your opinion?'
          ]
        }
      },
      {
        id: 'speaking-6',
        title: 'Test 6: Environment & Nature',
        difficulty: 'Hard',
        part1: {
          title: 'Introduction & Interview',
          duration: '4-5 minutes',
          topics: [
            {
              topic: 'Local environment',
              questions: [
                'How would you describe the natural environment in your area?',
                'Are there any environmental problems where you live?',
                'What do people in your community do to protect the environment?',
                'How has your local environment changed since you were a child?'
              ]
            },
            {
              topic: 'Outdoor activities',
              questions: [
                'How often do you spend time outdoors?',
                'What outdoor activities do you enjoy?',
                'Do you prefer visiting the countryside or the seaside? Why?',
                'What is the most beautiful natural place you have been to near your home?'
              ]
            },
            {
              topic: 'Weather',
              questions: [
                'What is the weather usually like in your hometown?',
                'How does the weather affect your daily activities?',
                'Do you prefer hot or cold climates?',
                'Have you experienced any extreme weather events?'
              ]
            }
          ]
        },
        part2: {
          title: 'Individual Long Turn',
          duration: '3-4 minutes (1 minute preparation + 1-2 minutes speaking)',
          card: {
            topic: 'Describe a beautiful natural place you visited.',
            prompts: [
              'Where this place is located',
              'When and why you visited it',
              'What you saw and did there',
              'Why you found it beautiful and memorable'
            ],
            followUp: [
              'Would you like to visit this place again?',
              'How do you think tourism affects such natural places?'
            ]
          }
        },
        part3: {
          title: 'Two-Way Discussion',
          duration: '4-5 minutes',
          questions: [
            'What are the main causes of climate change, and who should bear the greatest responsibility for addressing it?',
            'How effective are international conservation agreements in protecting endangered species and habitats?',
            'Should individuals be expected to make sacrifices for environmental protection, or is this primarily a government responsibility?',
            'What are the challenges of transitioning to a more sustainable way of living?',
            'How might cities be redesigned in the future to reduce their environmental impact?'
          ]
        }
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
