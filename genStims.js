function generateStimuli() {
    const modifiers = ["pretty", "fairly", "very", "so", "really", "truly"];
    const names = ["Jim", "Bob", "Alice", "Samantha", "Tom", "Jessica", "Karen", "Michael", "Sarah", "David", "Emily", "Daniel", "Jose", "Maria", "Belinda", "Chanel", "Chris", "Jerome"];
    const buildings = ["restaurant", "library", "museum", "theater", "zoo", "bar"];
    const meals = ["burger", "pizza", "pasta", "seafood", "sushi", "dumpling"];
    const tasteAdjectives = ["delicious", "tasty", "scrumptious", "yummy"];
    const sizeAdjectives = ["gigantic", "huge", "massive", "enormous", "miniscule", "tiny", "small", "little"];
    const aestheticAdjectives = ["beautiful", "gorgeous", "hideous", "ugly", "stunning", "attractive", "lame", "boring"];
    const artTypes = ["painting", "sculpture", "mural", "drawing", "photograph"];
    const objects = ["car", "dress", "motocycle", "shirt", "table", "lamp"];
    const acquiringPlaces = ["estate sale", "auction", "warehouse sale", "swap meet"];
  
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
  
    const allStimuli = [];
  
    // Frame 1: burger at restaurant
    const modifiers1 = shuffle(modifiers).slice(0, 4);
    const tasteAdj1 = shuffle(tasteAdjectives);
    const namePairs1 = getNamePairs(4);
    for (let i = 0; i < 4; i++) {
      allStimuli.push({
        stimulus: `${namePairs1[i][0]} is telling ${namePairs1[i][1]} about a new restaurant in town and says: "The burger I had last night was <strong>${modifiers1[i]} ${tasteAdj1[i]}</strong>."`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
          { text: `How ${tasteAdj1[i]} does ${namePairs1[i][0]} think the burger is?`, name: 'valence' },
          { text: 'How natural does the bolded part of the sentence sound to you?', name: 'natural' },
          { text: 'How formal does the bolded part of the sentence sound to you?', name: 'formality' },
          { text: `How mature do you think ${namePairs1[i][0]} is?`, name: 'maturity' },
          { text: `How cool do you think ${namePairs1[i][0]} is?`, name: 'coolness' },
          { text: `How articulate do you think ${namePairs1[i][0]} is?`, name: 'articulateness' },
          { text: `How old do you think ${namePairs1[i][0]} is?`, name: 'age' },
          { text: `How friendly do you think ${namePairs1[i][0]} is?`, name: 'friendliness' },
          { text: `How certain do you think ${namePairs1[i][0]} is in the bolded statement?`, name: 'certainty' }
        ],
        name1: namePairs1[i][0],
        name2: namePairs1[i][1],
        modifier: modifiers1[i],
        adjective: tasteAdj1[i],
        object: 'burger',
        frame: 1,
        frame_type: 'restaurant_burger'
      });
    }
  
    // Frame 2: meal at meals place
    const modifiers2 = shuffle(modifiers).slice(0, 4);
    const tasteAdj2 = shuffle(tasteAdjectives);
    const meals2 = shuffle(meals).slice(0, 4);
    const namePairs2 = getNamePairs(4);
    for (let i = 0; i < 4; i++) {
      allStimuli.push({
        stimulus: `${namePairs2[i][0]} is telling ${namePairs2[i][1]} about a recent meal at a new ${meals2[i]} place and says: "The meal I had at the ${meals2[i]} place was <strong>${modifiers2[i]} ${tasteAdj2[i]}</strong>."`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
          { text: `How ${tasteAdj2[i]} does ${namePairs2[i][0]} think the meal is?`, name: 'valence' },
          { text: 'How natural does the bolded part of the sentence sound to you?', name: 'natural' },
          { text: 'How formal does the bolded part of the sentence sound to you?', name: 'formality' },
          { text: `How mature do you think ${namePairs2[i][0]} is?`, name: 'maturity' },
          { text: `How cool do you think ${namePairs2[i][0]} is?`, name: 'coolness' },
          { text: `How articulate do you think ${namePairs2[i][0]} is?`, name: 'articulateness' },
          { text: `How old do you think ${namePairs2[i][0]} is?`, name: 'age' },
          { text: `How friendly do you think ${namePairs2[i][0]} is?`, name: 'friendliness' },
          { text: `How certain do you think ${namePairs2[i][0]} is in the bolded statement?`, name: 'certainty' }
        ],
        name1: namePairs2[i][0],
        name2: namePairs2[i][1],
        modifier: modifiers2[i],
        adjective: tasteAdj2[i],
        object: meals2[i],
        frame: 2,
        frame_type: 'meal_at_place'
      });
    }
  
    // Frame 3: food at meals place on date
    const modifiers3 = shuffle(modifiers).slice(0, 4);
    const tasteAdj3 = shuffle(tasteAdjectives);
    const meals3 = shuffle(meals).slice(0, 4);
    const namePairs3 = getNamePairs(4);
    for (let i = 0; i < 4; i++) {
      allStimuli.push({
        stimulus: `${namePairs3[i][0]} is recounting to ${namePairs3[i][1]} a recent date and says: "The food I ordered at the ${meals3[i]} place was <strong>${modifiers3[i]} ${tasteAdj3[i]}</strong>."`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
          { text: `How ${tasteAdj3[i]} does ${namePairs3[i][0]} think the food is?`, name: 'valence' },
          { text: 'How natural does the bolded part of the sentence sound to you?', name: 'natural' },
          { text: 'How formal does the bolded part of the sentence sound to you?', name: 'formality' },
          { text: `How mature do you think ${namePairs3[i][0]} is?`, name: 'maturity' },
          { text: `How cool do you think ${namePairs3[i][0]} is?`, name: 'coolness' },
          { text: `How articulate do you think ${namePairs3[i][0]} is?`, name: 'articulateness' },
          { text: `How old do you think ${namePairs3[i][0]} is?`, name: 'age' },
          { text: `How friendly do you think ${namePairs3[i][0]} is?`, name: 'friendliness' },
          { text: `How certain do you think ${namePairs3[i][0]} is in the bolded statement?`, name: 'certainty' }
        ],
        name1: namePairs3[i][0],
        name2: namePairs3[i][1],
        modifier: modifiers3[i],
        adjective: tasteAdj3[i],
        object: meals3[i],
        frame: 3,
        frame_type: 'date_food'
      });
    }
  
    // Frame 4: new building in town
    const modifiers4 = shuffle(modifiers).slice(0, 4);
    const buildings4 = shuffle(buildings).slice(0, 4);
    const sizeOrAesthetic4 = shuffle([...sizeAdjectives, ...aestheticAdjectives]).slice(0, 4);
    const namePairs4 = getNamePairs(4);
    for (let i = 0; i < 4; i++) {
      allStimuli.push({
        stimulus: `${namePairs4[i][0]} is telling ${namePairs4[i][1]} about the new ${buildings4[i]} in town and says: "I went and saw the new ${buildings4[i]} last night and it is <strong>${modifiers4[i]} ${sizeOrAesthetic4[i]}</strong>."`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
          { text: `How ${sizeOrAesthetic4[i]} does ${namePairs4[i][0]} think the ${buildings4[i]} is?`, name: 'valence' },
          { text: 'How natural does the bolded part of the sentence sound to you?', name: 'natural' },
          { text: 'How formal does the bolded part of the sentence sound to you?', name: 'formality' },
          { text: `How mature do you think ${namePairs4[i][0]} is?`, name: 'maturity' },
          { text: `How cool do you think ${namePairs4[i][0]} is?`, name: 'coolness' },
          { text: `How articulate do you think ${namePairs4[i][0]} is?`, name: 'articulateness' },
          { text: `How old do you think ${namePairs4[i][0]} is?`, name: 'age' },
          { text: `How friendly do you think ${namePairs4[i][0]} is?`, name: 'friendliness' },
          { text: `How certain do you think ${namePairs4[i][0]} is in the bolded statement?`, name: 'certainty' }
        ],
        name1: namePairs4[i][0],
        name2: namePairs4[i][1],
        modifier: modifiers4[i],
        adjective: sizeOrAesthetic4[i],
        object: buildings4[i],
        frame: 4,
        frame_type: 'new_building'
      });
    }
  
    // Frame 5: describing artTypes
    const modifiers5 = shuffle(modifiers).slice(0, 4);
    const artTypes5 = shuffle(artTypes).slice(0, 4);
    const sizeOrAesthetic5 = shuffle([...sizeAdjectives, ...aestheticAdjectives]).slice(0, 4);
    const namePairs5 = getNamePairs(4);
    for (let i = 0; i < 4; i++) {
      allStimuli.push({
        stimulus: `${namePairs5[i][0]} is describing a ${artTypes5[i]} to ${namePairs5[i][1]} and says: "I thought the ${artTypes5[i]} was <strong>${modifiers5[i]} ${sizeOrAesthetic5[i]}</strong>."`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
          { text: `How ${sizeOrAesthetic5[i]} does ${namePairs5[i][0]} think the ${artTypes5[i]} is?`, name: 'valence' },
          { text: 'How natural does the bolded part of the sentence sound to you?', name: 'natural' },
          { text: 'How formal does the bolded part of the sentence sound to you?', name: 'formality' },
          { text: `How mature do you think ${namePairs5[i][0]} is?`, name: 'maturity' },
          { text: `How cool do you think ${namePairs5[i][0]} is?`, name: 'coolness' },
          { text: `How articulate do you think ${namePairs5[i][0]} is?`, name: 'articulateness' },
          { text: `How old do you think ${namePairs5[i][0]} is?`, name: 'age' },
          { text: `How friendly do you think ${namePairs5[i][0]} is?`, name: 'friendliness' },
          { text: `How certain do you think ${namePairs5[i][0]} is in the bolded statement?`, name: 'certainty' }
        ],
        name1: namePairs5[i][0],
        name2: namePairs5[i][1],
        modifier: modifiers5[i],
        adjective: sizeOrAesthetic5[i],
        object: artTypes5[i],
        frame: 5,
        frame_type: 'art_description'
      });
    }
  
    // Frame 6: recently-acquired object
    const modifiers6 = shuffle(modifiers).slice(0, 4);
    const objects6 = shuffle(objects).slice(0, 4);
    const acquiringPlaces6 = shuffle(acquiringPlaces);
    const sizeOrAesthetic6 = shuffle([...sizeAdjectives, ...aestheticAdjectives]).slice(0, 4);
    const namePairs6 = getNamePairs(4);
    for (let i = 0; i < 4; i++) {
      allStimuli.push({
        stimulus: `${namePairs6[i][0]} is telling ${namePairs6[i][1]} about a recently-acquired ${objects6[i]} and says: "The ${objects6[i]} I got at the ${acquiringPlaces6[i]} is <strong>${modifiers6[i]} ${sizeOrAesthetic6[i]}</strong>."`,
        prompt: 'Please read the following prompt, then answer each of the questions below:',
        questions: [
            { text: `How ${sizeOrAesthetic6[i]} does ${namePairs6[i][0]} think the ${objects6[i]} is?`, name: 'valence' },
            { text: 'How natural does the bolded part of the sentence sound to you?', name: 'natural' },
            { text: 'How formal does the bolded part of the sentence sound to you?', name: 'formality' },
            { text: `How mature do you think ${namePairs6[i][0]} is?`, name: 'maturity' },
            { text: `How cool do you think ${namePairs6[i][0]} is?`, name: 'coolness' },
            { text: `How articulate do you think ${namePairs6[i][0]} is?`, name: 'articulateness' },
            { text: `How old do you think ${namePairs6[i][0]} is?`, name: 'age' },
            { text: `How friendly do you think ${namePairs6[i][0]} is?`, name: 'friendliness' },
            { text: `How certain do you think ${namePairs6[i][0]} is in the bolded statement?`, name: 'certainty' }
        ],
        name1: namePairs6[i][0],
        name2: namePairs6[i][1],
        modifier: modifiers6[i],
        adjective: sizeOrAesthetic6[i],
        object: objects6[i],
        acquiring_place: acquiringPlaces6[i],
        frame: 6,
        frame_type: 'acquired_object'
      });
    }
  
    return allStimuli;
  }