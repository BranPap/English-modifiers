function generateStimuli() {
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
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
      allStimuli.push({
        stimulus: `${namePairs9[i][0]} is telling ${namePairs9[i][1]} about a some recent ${dramaTypes9[i]} drama and says: <strong>"When I read ${thirdNames9[i]}'s ${communicationTypes9[i]} I was ${modifiers9[i]} ${adjectives9[i]}."</strong>`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
            { text: `How ${adjectives9[i]} was ${namePairs9[i][0]} when reading the message?`, name: 'valence' },
            { text: `How natural does ${namePairs9[i][0]}'s sentence sound to you?`, name: 'natural' },
            { text: `How old do you think ${namePairs9[i][0]} is relative to your age?`, name: 'age' },
            { text: `How surprised do you think ${namePairs8[i][0]} was at feeling ${adjectives8[i]}?`, name: 'certainty' }
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

    return allStimuli;
  }