function generateStimuli() {
    // critical
    const modifiers = ["pretty", "fairly", "very", "so", "really", "truly", ""];
    const names = ["Jim", "Bob", "Alice", "Samantha", "Tom", "Jessica", "Karen", "Michael", "Sarah", "David", "Emily", "Daniel", "Jose", "Maria", "Belinda", "Chanel", "Chris", "Jerome", "Aisha", "Marcus", "Lin", "Sofia", "Kenji", "Fatima", "Dmitri", "Isabella", "Raj", "Emily", "Jamal", "Mei", "Diego", "Yuki", "Amara", "Liam", "Priya", "Carlos", "Fatou", "Alexander", "Zara", "Tyler", "Ling", "Mohammed"];
    const buildings = ["library", "museum", "theater", "zoo"];
    const meals = ["salad", "pizza", "pasta", "soup"];
    const tasteAdjectives = ["delicious", "tasty", "good", "amazing", "bad", "disgusting", "hot", "scalding", "cold", "freezing"];
    const sizeAdjectives = ["small", "minuscule", "large", "enormous", "tall", "towering", "short", "tiny"];
    const aestheticAdjectives = ["pretty", "gorgeous", "hideous", "ugly"];
    const roomAdjectives = ["pretty", "gorgeous", "hideous", "ugly", "clean", "spotless", "dirty", "filthy"];
    const emotionAdjectives = ["happy", "ecstatic", "sad", "depressed", "angry", "furious", "excited", "thrilled"];
    const artTypes = ["painting", "sculpture", "mural", "drawing"];
    const objects = ["car", "shirt", "table", "lamp"];
    const acquiringPlaces = ["estate sale", "auction", "warehouse sale", "swap meet"];
    const giftItems = ["book", "quilt", "sweater", "gift card", "candle"];
    const roomPlaces = ["bedroom", "living room", "kitchen", "bathroom"];
    const dramaTypes = ["friend group", "workplace", "family", "school"];
    const communicationTypes = ["text message", "email", "social media post", "letter"];

    // Helper function to shuffle array
    function shuffle(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
  
    // Helper function to get unique pairs of names
    function getNamePairs(count) {
      const pairs = [];
      const shuffledNames = shuffle(names);
      for (let i = 0; i < count; i++) {
        const idx1 = (i * 2) % shuffledNames.length;
        const idx2 = (i * 2 + 1) % shuffledNames.length;
        pairs.push([shuffledNames[idx1], shuffledNames[idx2]]);
      }
      return pairs;
    }
  
    // Helper function to create standardized questions
    function createQuestions(name, adjective, object) {
      return [
        { text: `How ${adjective} does ${name} think the ${object} is?`, name: 'valence' },
        { text: `How natural does ${name}'s sentence sound to you?`, name: 'natural' },
        { text: `How old do you think ${name} is relative to your age?`, name: 'age' },
        { text: `How surprised do you think ${name} is that ${object} is ${adjective}?`, name: 'certainty' }
      ];
    }
  
    const allStimuli = [];

  
    // Frame 2: cooked meal for family
    const modifiers2 = shuffle(modifiers).slice(0, 4);
    const adjectives2 = shuffle(tasteAdjectives).slice(0, 4);
    const mealTypes2 = shuffle(meals).slice(0, 4);
    const namePairs2 = getNamePairs(4);
    for (let i = 0; i < 2; i++) {
      allStimuli.push({
        stimulus: `${namePairs2[i][0]} is telling ${namePairs2[i][1]} about a recent meal and says: <strong>"I made some ${mealTypes2[i]} for the family the other night and it turned out ${modifiers2[i]} ${adjectives2[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: createQuestions(namePairs2[i][0], adjectives2[i], 'meal'),
        name1: namePairs2[i][0],
        name2: namePairs2[i][1],
        modifier: modifiers2[i],
        adjective: adjectives2[i],
        object: mealTypes2[i],
        frame: 2,
        frame_type: 'meal_at_place'
      });
    }
  
    // Frame 3: food at meals place on date
    const modifiers3 = shuffle(modifiers).slice(0, 4);
    const adjectives3 = shuffle(tasteAdjectives).slice(0, 4);
    const mealTypes3 = shuffle(meals).slice(0, 4);
    const namePairs3 = getNamePairs(4);
    for (let i = 0; i < 2; i++) {
      allStimuli.push({
        stimulus: `${namePairs3[i][0]} is recounting to ${namePairs3[i][1]} a recent date and says: <strong>"The food I ordered at the ${mealTypes3[i]} place was ${modifiers3[i]} ${adjectives3[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: createQuestions(namePairs3[i][0], adjectives3[i], 'food'),
        name1: namePairs3[i][0],
        name2: namePairs3[i][1],
        modifier: modifiers3[i],
        adjective: adjectives3[i],
        object: mealTypes3[i],
        frame: 3,
        frame_type: 'date_food'
      });
    }
  
    // Frame 4: new building in town
    const modifiers4 = shuffle(modifiers).slice(0, 4);
    const buildingTypes4 = shuffle(buildings).slice(0, 4);
    const adjectives4 = shuffle([...sizeAdjectives, ...aestheticAdjectives]).slice(0, 4);
    const namePairs4 = getNamePairs(4);
    for (let i = 0; i < 2; i++) {
      allStimuli.push({
        stimulus: `${namePairs4[i][0]} is telling ${namePairs4[i][1]} about the new ${buildingTypes4[i]} in town and says: <strong>"I went and saw the new ${buildingTypes4[i]} last night and it is ${modifiers4[i]} ${adjectives4[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: createQuestions(namePairs4[i][0], adjectives4[i], buildingTypes4[i]),
        name1: namePairs4[i][0],
        name2: namePairs4[i][1],
        modifier: modifiers4[i],
        adjective: adjectives4[i],
        object: buildingTypes4[i],
        frame: 4,
        frame_type: 'new_building'
      });
    }
  
    // Frame 5: describing artTypes
    const modifiers5 = shuffle(modifiers).slice(0, 4);
    const artTypes5 = shuffle(artTypes).slice(0, 4);
    const adjectives5 = shuffle(aestheticAdjectives).slice(0, 4);
    const namePairs5 = getNamePairs(4);
    for (let i = 0; i < 2; i++) {
      allStimuli.push({
        stimulus: `${namePairs5[i][0]} is describing a ${artTypes5[i]} to ${namePairs5[i][1]} and says: <strong>"I thought the ${artTypes5[i]} was ${modifiers5[i]} ${adjectives5[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: createQuestions(namePairs5[i][0], adjectives5[i], artTypes5[i]),
        name1: namePairs5[i][0],
        name2: namePairs5[i][1],
        modifier: modifiers5[i],
        adjective: adjectives5[i],
        object: artTypes5[i],
        frame: 5,
        frame_type: 'art_description'
      });
    }
  
    // Frame 6: recently-acquired object
    const modifiers6 = shuffle(modifiers).slice(0, 4);
    const objectTypes6 = shuffle(objects).slice(0, 4);
    const acquiringPlaces6 = shuffle(acquiringPlaces).slice(0, 4);
    const adjectives6 = shuffle([...sizeAdjectives, ...aestheticAdjectives]).slice(0, 4);
    const namePairs6 = getNamePairs(4);
    for (let i = 0; i < 2; i++) {
      allStimuli.push({
        stimulus: `${namePairs6[i][0]} is telling ${namePairs6[i][1]} about a recently-acquired ${objectTypes6[i]} and says: <strong>"The ${objectTypes6[i]} I got at the ${acquiringPlaces6[i]} is ${modifiers6[i]} ${adjectives6[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: createQuestions(namePairs6[i][0], adjectives6[i], objectTypes6[i]),
        name1: namePairs6[i][0],
        name2: namePairs6[i][1],
        modifier: modifiers6[i],
        adjective: adjectives6[i],
        object: objectTypes6[i],
        acquiring_place: acquiringPlaces6[i],
        frame: 6,
        frame_type: 'acquired_object'
      });
    }

    // Frame 7: date location comment
    const modifiers7 = shuffle(modifiers).slice(0, 4);
    const roomPlaces7 = shuffle(roomPlaces).slice(0, 4);
    const adjectives7 = shuffle(roomAdjectives).slice(0, 4);
    const namePairs7 = getNamePairs(4);
    for (let i = 0; i < 2; i++) {
      allStimuli.push({
        stimulus: `${namePairs7[i][0]} is telling ${namePairs7[i][1]} about the house of a recent date and says: <strong>"The ${roomPlaces7[i]} was ${modifiers7[i]} ${adjectives7[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: createQuestions(namePairs7[i][0], adjectives7[i], roomPlaces7[i]),
        name1: namePairs7[i][0],
        name2: namePairs7[i][1],
        modifier: modifiers7[i],
        adjective: adjectives7[i],
        object: roomPlaces7[i],
        frame: 7,
        frame_type: 'date_location'
      });
    }

    // Frame 8: birthday gift emotion
    const modifiers8 = shuffle(modifiers).slice(0, 4);
    const giftItems8 = shuffle(giftItems).slice(0, 4);
    const adjectives8 = shuffle(emotionAdjectives).slice(0, 4);
    const namePairs8 = getNamePairs(4);
    for (let i = 0; i < 2; i++) {
      allStimuli.push({
        stimulus: `${namePairs8[i][0]} is telling ${namePairs8[i][1]} about a recently-received birthday gift and says: <strong>"I got a ${giftItems8[i]} for my birthday and when I opened it I was ${modifiers8[i]} ${adjectives8[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
          { text: `How ${adjectives8[i]} was ${namePairs8[i][0]} when opening the gift?`, name: 'valence' },
          { text: `How natural does ${namePairs8[i][0]}'s sentence sound to you?`, name: 'natural' },
          { text: `How old do you think ${namePairs8[i][0]} is relative to your age?`, name: 'age' },
          { text: `How surprised do you think ${namePairs8[i][0]} was at feeling ${adjectives8[i]}?`, name: 'certainty' }
        ],
        name1: namePairs8[i][0],
        name2: namePairs8[i][1],
        modifier: modifiers8[i],
        adjective: adjectives8[i],
        object: giftItems8[i],
        frame: 8,
        frame_type: 'birthday_gift_emotion'
      });
    }

    // Frame 9: dramaComment 
    const modifiers9 = shuffle(modifiers).slice(0, 4);
    const adjectives9 = shuffle(emotionAdjectives).slice(0, 4);
    const namePairs9 = getNamePairs(4);
    const thirdNames9 = shuffle(names).slice(0, 4);
    const dramaTypes9 = shuffle(dramaTypes).slice(0, 4);
    const communicationTypes9 = shuffle(communicationTypes).slice(0, 4);
    for (let i = 0; i < 2; i++) {
      allStimuli.push({
        stimulus: `${namePairs9[i][0]} is telling ${namePairs9[i][1]} about a some recent ${dramaTypes9[i]} drama and says: <strong>"When I read ${thirdNames9[i]}'s ${communicationTypes9[i]} I was ${modifiers9[i]} ${adjectives9[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
            { text: `How ${adjectives9[i]} was ${namePairs9[i][0]} when reading the message?`, name: 'valence' },
            { text: `How natural does ${namePairs9[i][0]}'s sentence sound to you?`, name: 'natural' },
            { text: `How old do you think ${namePairs9[i][0]} is relative to your age?`, name: 'age' },
            { text: `How surprised do you think ${namePairs9[i][0]} was at feeling ${adjectives9[i]}?`, name: 'certainty' }
          ],
        name1: namePairs9[i][0],
        name2: namePairs9[i][1],
        modifier: modifiers9[i],
        adjective: adjectives9[i],
        object: communicationTypes9[i],
        third_name: thirdNames9[i],
        drama_type: dramaTypes9[i],
        frame: 9,
        frame_type: 'drama_comment'
      });
    }


// FILLER STIMULI GENERATION
const clausalModifiers = ["Honestly", "Truthfully", "Frankly", "Seriously", "For real", "No joke", "", "Listen"];
const emovementAdjs = ["impressed", "moved", "disappointed", "annoyed", "irritated", "touched"];
const whelmingAdjs = ["overwhelmed", "underwhelmed", "impressed", "disappointed"];
const vitalemotionAdjs = ["emboldened", "encouraged", "invigorated", "undermined", "impaired", "compromised"];
const performanceAdjs = ["enthralled", "bored", "captivated", "put off"];
const filmGenres = ["comedy film", "horror flick", "documentary", "action movie"];
const cocktails = ["Margaritas", "Mojitos", "Old Fashioneds", "Martinis", "beer"];
const speechTypes = ["CEO's presentation", "politician's concession speech", "professor's lecture", "actress's acceptance speech"];
const gameTypes = ["sports match", "board game night", "video game tournament", "escape room experience"];
const actorTypes = ["actor", "actress"];

function createFillerQuestions(name, adjective) {
  return [
    { text: `How ${adjective} was ${name}?`, name: 'valence' },
    { text: `How natural does ${name}'s sentence sound to you?`, name: 'natural' },
    { text: `How old do you think ${name} is relative to your age?`, name: 'age' },
    { text: `How surprised do you think ${name} was at feeling ${adjective}?`, name: 'certainty' }
  ];
}

// Filler Frame 1: cocktails at bar (2 instances)
const clauseMod1 = shuffle(clausalModifiers).slice(0, 2);
const adjs1 = shuffle(whelmingAdjs).slice(0, 2);
const cocktails1 = shuffle(cocktails).slice(0, 2);
const namePairs1 = getNamePairs(2);
for (let i = 0; i < 2; i++) {
  const clausalPart = clauseMod1[i] ? `${clauseMod1[i]}, ` : '';
  allStimuli.push({
    stimulus: `${namePairs1[i][0]} is telling ${namePairs1[i][1]} about a new bar in town and says: <strong>"${clausalPart}I was ${adjs1[i]} by their ${cocktails1[i]}."</strong>`,
    prompt: 'Please read the following prompt, then answer each of the questions below:',
    questions: createFillerQuestions(namePairs1[i][0], adjs1[i]),
    name1: namePairs1[i][0],
    name2: namePairs1[i][1],
    clausal_modifier: clauseMod1[i],
    adjective: adjs1[i],
    object: cocktails1[i],
    frame: 'F1',
    frame_type: 'filler_bar_cocktails',
    is_filler: true
  });
}

// Filler Frame 2: date film experience (2 instances)
const clauseMod2 = shuffle(clausalModifiers).slice(0, 2);
const adjs2 = shuffle(performanceAdjs).slice(0, 2);
const genres2 = shuffle(filmGenres).slice(0, 2);
const namePairs2f = getNamePairs(2);
for (let i = 0; i < 2; i++) {
  const clausalPart = clauseMod2[i] ? `${clauseMod2[i]}, ` : '';
  allStimuli.push({
    stimulus: `${namePairs2f[i][0]} is telling ${namePairs2f[i][1]} about a recent date and says: <strong>"${clausalPart}I was ${adjs2[i]} during the ${genres2[i]} we saw."</strong>`,
    prompt: 'Please read the following prompt, then answer each of the questions below:',
    questions: createFillerQuestions(namePairs2f[i][0], adjs2[i]),
    name1: namePairs2f[i][0],
    name2: namePairs2f[i][1],
    clausal_modifier: clauseMod2[i],
    adjective: adjs2[i],
    object: genres2[i],
    frame: 'F2',
    frame_type: 'filler_date_film',
    is_filler: true
  });
}

// Filler Frame 3: game experience (2 instances)
const clauseMod3 = shuffle(clausalModifiers).slice(0, 2);
const adjs3 = shuffle(vitalemotionAdjs).slice(0, 2);
const games3 = shuffle(gameTypes).slice(0, 2);
const namePairs3f = getNamePairs(2);
for (let i = 0; i < 2; i++) {
  const clausalPart = clauseMod3[i] ? `${clauseMod3[i]}, ` : '';
  allStimuli.push({
    stimulus: `${namePairs3f[i][0]} is telling ${namePairs3f[i][1]} about a recent ${games3[i]} and says: <strong>"${clausalPart}I was feeling ${adjs3[i]} by the other players on my team."</strong>`,
    prompt: 'Please read the following prompt, then answer each of the questions below:',
    questions: createFillerQuestions(namePairs3f[i][0], adjs3[i]),
    name1: namePairs3f[i][0],
    name2: namePairs3f[i][1],
    clausal_modifier: clauseMod3[i],
    adjective: adjs3[i],
    object: games3[i],
    frame: 'F3',
    frame_type: 'filler_game_experience',
    is_filler: true
  });
}

// Filler Frame 4: YouTube speech (2 instances)
const clauseMod4 = shuffle(clausalModifiers).slice(0, 2);
const adjs4 = shuffle(emovementAdjs).slice(0, 2);
const speeches4 = shuffle(speechTypes).slice(0, 2);
const namePairs4f = getNamePairs(2);
for (let i = 0; i < 2; i++) {
  const clausalPart = clauseMod4[i] ? `${clauseMod4[i]}, ` : '';
  allStimuli.push({
    stimulus: `${namePairs4f[i][0]} is telling ${namePairs4f[i][1]} about a recent YouTube video and says: <strong>"${clausalPart}the ${speeches4[i]} left me feeling ${adjs4[i]}."</strong>`,
    prompt: 'Please read the following prompt, then answer each of the questions below:',
    questions: createFillerQuestions(namePairs4f[i][0], adjs4[i]),
    name1: namePairs4f[i][0],
    name2: namePairs4f[i][1],
    clausal_modifier: clauseMod4[i],
    adjective: adjs4[i],
    object: speeches4[i],
    frame: 'F4',
    frame_type: 'filler_youtube_speech',
    is_filler: true
  });
}

// Filler Frame 5: viewing party speech (2 instances)
const clauseMod5 = shuffle(clausalModifiers).slice(0, 2);
const adjs5 = shuffle(emovementAdjs).slice(0, 2);
const speeches5 = shuffle(speechTypes).slice(0, 2);
const namePairs5f = getNamePairs(2);
for (let i = 0; i < 2; i++) {
  const clausalPart = clauseMod5[i] ? `${clauseMod5[i]}, ` : '';
  allStimuli.push({
    stimulus: `${namePairs5f[i][0]} is telling ${namePairs5f[i][1]} about a recent viewing party and says: <strong>"${clausalPart}I felt ${adjs5[i]} by the ${speeches5[i]} we watched last night."</strong>`,
    prompt: 'Please read the following prompt, then answer each of the questions below:',
    questions: createFillerQuestions(namePairs5f[i][0], adjs5[i]),
    name1: namePairs5f[i][0],
    name2: namePairs5f[i][1],
    clausal_modifier: clauseMod5[i],
    adjective: adjs5[i],
    object: speeches5[i],
    frame: 'F5',
    frame_type: 'filler_viewing_party',
    is_filler: true
  });
}

// Filler Frame 6: date conversation (2 instances)
const clauseMod6 = shuffle(clausalModifiers).slice(0, 2);
const adjs6 = shuffle(emovementAdjs).slice(0, 2);
const namePairs6f = getNamePairs(2);
for (let i = 0; i < 2; i++) {
  const clausalPart = clauseMod6[i] ? `${clauseMod6[i]}, ` : '';
  allStimuli.push({
    stimulus: `${namePairs6f[i][0]} is telling ${namePairs6f[i][1]} about a recent date and says: <strong>"${clausalPart}I was ${adjs6[i]} by the whole conversation."</strong>`,
    prompt: 'Please read the following prompt, then answer each of the questions below:',
    questions: createFillerQuestions(namePairs6f[i][0], adjs6[i]),
    name1: namePairs6f[i][0],
    name2: namePairs6f[i][1],
    clausal_modifier: clauseMod6[i],
    adjective: adjs6[i],
    object: 'conversation',
    frame: 'F6',
    frame_type: 'filler_date_conversation',
    is_filler: true
  });
}

// Filler Frame 7: movie release (2 instances)
const clauseMod7 = shuffle(clausalModifiers).slice(0, 2);
const adjs7 = shuffle(performanceAdjs).slice(0, 2);
const genres7 = shuffle(filmGenres).slice(0, 2);
const namePairs7f = getNamePairs(2);
for (let i = 0; i < 2; i++) {
  const clausalPart = clauseMod7[i] ? `${clauseMod7[i]}, ` : '';
  allStimuli.push({
    stimulus: `${namePairs7f[i][0]} is telling ${namePairs7f[i][1]} about a new movie release and says: <strong>"Have you seen the new ${genres7[i]}? ${clausalPart}I was ${adjs7[i]} the whole time."</strong>`,
    prompt: 'Please read the following prompt, then answer each of the questions below:',
    questions: createFillerQuestions(namePairs7f[i][0], adjs7[i]),
    name1: namePairs7f[i][0],
    name2: namePairs7f[i][1],
    clausal_modifier: clauseMod7[i],
    adjective: adjs7[i],
    object: genres7[i],
    frame: 'F7',
    frame_type: 'filler_movie_release',
    is_filler: true
  });
}

// Filler Frame 8: theatrical performance (2 instances)
const clauseMod8 = shuffle(clausalModifiers).slice(0, 2);
const adjs8 = shuffle(whelmingAdjs).slice(0, 2);
const actors8 = shuffle(actorTypes).slice(0, 2);
const namePairs8f = getNamePairs(2);
for (let i = 0; i < 2; i++) {
  const clausalPart = clauseMod8[i] ? `${clauseMod8[i]}, ` : '';
  allStimuli.push({
    stimulus: `${namePairs8f[i][0]} is telling ${namePairs8f[i][1]} about a recent theatrical production and says: <strong>"${clausalPart}I was ${adjs8[i]} by the lead ${actors8[i]}'s performance."</strong>`,
    prompt: 'Please read the following prompt, then answer each of the questions below:',
    questions: createFillerQuestions(namePairs8f[i][0], adjs8[i]),
    name1: namePairs8f[i][0],
    name2: namePairs8f[i][1],
    clausal_modifier: clauseMod8[i],
    adjective: adjs8[i],
    object: actors8[i],
    frame: 'F8',
    frame_type: 'filler_theatrical_performance',
    is_filler: true
  });
}

return allStimuli;

  }