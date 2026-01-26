// Utils //
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// Preliminary Calls //
const jsPsych = initJsPsych({
  show_progress_bar: false,
  auto_update_progress_bar: false,
  on_finish: function(data) {
    // proliferate.submit({ trials: data.values() });
    jsPsych.data.displayData('csv');
  }
});

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var prolificID = urlParams.get('PROLIFIC_PID')   // ID unique to the participant
var studyID = urlParams.get('STUDY_ID')          // ID unique to the study
var sessionID = urlParams.get('SESSION_ID')      // ID unique to the particular submission
const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}_${prolificID}.csv`;

let timeline = [];

// EXPERIMENT CODE //


// IRB Consent
const irb = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="max-width: 1000px; margin: 0 auto; text-align: left;">
    <h2 style="text-align: center;">Consent to Participate</h2>
    <p>By completing this study, you are participating in research being performed by cognitive scientists in the Stanford University Department of Linguistics. ...</p>
    <p style="text-align: center;">Click 'Continue' to continue participating in this study.</p>
  </div>`,
  choices: ['Continue'],
  on_finish: function(data) {
    data.category = "irb";
  }
};
timeline.push(irb);


var stims = generateStimuli();

// Shuffle stimuli
stims = shuffleArray(stims);

console.log(stims);


const trial_3 = {
  timeline: [
    {
      type: jsPsychLikertStim,
      stimulus: jsPsych.timelineVariable('stimulus'),
      questions: jsPsych.timelineVariable('questions'),
      scale_min: 1,
      scale_max: 7,
      randomize_question_order: true,
      prompt: `Please read the following prompt and answer each of the questions below`,
      question_labels: function() {
        var q_labels = {
          valence: {
            right: `Extremely ${jsPsych.timelineVariable('adjective')}</strong>`,
            center: 'Average',
            left: `Not at all ${jsPsych.timelineVariable('adjective')}</strong>`
          },
          formality: {
            left: 'Not at all formal',
            center: 'Neutral',
            right: 'Extremely formal'
          },
          maturity: {
            right: 'Extremely mature',
            center: 'Average',
            left: 'Not at all mature'
          },
          coolness: {
            right: 'Extremely cool',
            center: 'Average',
            left: 'Not at all cool'
          },
          articulateness: {
            right: 'Extremely articulate',
            center: 'Average',
            left: 'Not at all articulate'
          },
          age: {
            left: 'Much younger',
            center: 'Around my age',
            right: 'Much older'
          },
          friendliness: {
            right: 'Extremely friendly',
            center: 'Average',
            left: 'Not at all friendly'
          },
          certainty: {
            right: 'Extremely surprised',
            center: 'Average',
            left: 'Not at all surprised'
          },
          natural: {
            right: 'Natural',
            center: '',
            left: 'Unnatural' 
          },
          gender: {
            right: 'Extremely feminine',
            center: 'Neutral',
            left: 'Extremely masculine'
          }
      }
      return q_labels;
      },
      data: {
        category: "mainTrial",
        name1: jsPsych.timelineVariable('name1'),
        name2: jsPsych.timelineVariable('name2'),
        modifier: jsPsych.timelineVariable('modifier'),
        adjective: jsPsych.timelineVariable('adjective'),
        object: jsPsych.timelineVariable('object'),
        frame: jsPsych.timelineVariable('frame'),
        frame_type: jsPsych.timelineVariable('frame_type')
      },
      on_finish: function(data) {
        console.log(data);
      }
    }
  ],
  timeline_variables: stims,
  randomize_order: true
};

timeline.push(trial_3);



// Demographics 

const demoSurvey = {
  type: jsPsychSurveyHtmlForm,
  html: `
  <style>
    #survey-container {
      font-family: 'Arial', sans-serif; 
      line-height: 1.6; 
      background-color: #ffffff; 
      color: #333; 
      margin: 0; 
      padding: 20px;
    }
    #survey-container div {
      margin-bottom: 20px; 
      padding: 15px; 
      background: #fff; 
      border-radius: 8px; 
    }
    #survey-container p {
      font-size: 16px; 
      font-weight: bold; 
      margin-bottom: 10px;
    }
    #survey-container label {
      margin-right: 15px; 
      font-size: 14px; 
    }
    #survey-container input[type='text'], 
    #survey-container select, 
    #survey-container textarea {
      font-size: 14px; 
      padding: 10px; 
      border: 1px solid #ccc; 
      border-radius: 5px; 
      width: 100%; 
      box-sizing: border-box;
    }
    #survey-container textarea { resize: vertical; }
    .likert-scale {
      display: flex; 
      justify-content: space-between; 
      margin-top: 10px;
    }
    .likert-scale label {
      flex: 1; 
      text-align: center; 
      font-size: 13px;
    }
    .likert-scale input {
      display: block; 
      margin: 0 auto 5px auto;
    }
  </style>

  <div id='survey-container'>

    <div>
      <p>Did you read the instructions and do you think you did the task correctly?</p>
      <label><input type='radio' name='correct' value='Yes'> Yes</label>
      <label><input type='radio' name='correct' value='No'> No</label>
      <label><input type='radio' name='correct' value='I was confused'> I was confused</label>
    </div>

    <div>
      <p>Gender:</p>
      <select name='gender'>
        <option value='null'> </option>
        <option value='Female'>Female</option>
        <option value='Male'>Male</option>
        <option value='Non-binary/Non-conforming'>Non-binary/Non-conforming</option>
        <option value='Other'>Other</option>
      </select>
    </div>

    <div>
      <p>Age:</p>
      <input type='text' name='age' size='10'>
    </div>

    <div>
      <p>Level of education:</p>
      <select name='education'>
        <option value='null'> </option>
        <option value='Some high school'>Some high school</option>
        <option value='Graduated high school'>Graduated high school</option>
        <option value='Some college'>Some college</option>
        <option value='Graduated college'>Graduated college</option>
        <option value='Hold a higher degree'>Hold a higher degree</option>
      </select>
    </div>

    <div>
      <p>Race/Ethnicity:</p>
      <select name='ethnicity'>
        <option value='null'> </option>
        <option value='Black'>Black</option>
        <option value='White'>White / Caucasian</option>
        <option value='API'>Asian / Pacific Islander </option>
        <option value='Latinx'>Hispanic / Latinx</option>
        <option value='Indigenous'>Native American / Alaskan</option>
      </select>
    </div>

    <div>
      <p>Location:</p>
      <select name='Location'>
        <option value='null'> </option>
        <option value='West Coast'>West Coast</option>
        <option value='Midwest'>Midwest</option>
        <option value='South'>South</option>
        <option value='East Coast'>East Coast</option>
        <option value='Great Plains'>Great Plains</option>
        <option value='Hawaii'>Hawaii</option>
        <option value='Alaska'>Alaska</option>
      </select>
    </div>

    <div>
      <p>How fair was the payment for this experiment?</p>
      <div class='likert-scale'>
        <label><input type='radio' name='payment' value='1'>Very underpaid</label>
        <label><input type='radio' name='payment' value='2'>2</label>
        <label><input type='radio' name='payment' value='3'>3</label>
        <label><input type='radio' name='payment' value='4'>4</label>
        <label><input type='radio' name='payment' value='5'>5</label>
        <label><input type='radio' name='payment' value='6'>6</label>
        <label><input type='radio' name='payment' value='7'>Very well paid</label>
      </div>
    </div>

    <div>
      <p>How much did you enjoy the experiment?</p>
      <div class='likert-scale'>
        <label><input type='radio' name='enjoy' value='1'>Not at all</label>
        <label><input type='radio' name='enjoy' value='2'>2</label>
        <label><input type='radio' name='enjoy' value='3'>3</label>
        <label><input type='radio' name='enjoy' value='4'>4</label>
        <label><input type='radio' name='enjoy' value='5'>5</label>
        <label><input type='radio' name='enjoy' value='6'>6</label>
        <label><input type='radio' name='enjoy' value='7'>Very much</label>
      </div>
    </div>

    <div>
      <p>Do you have any other comments about this experiment?</p>
      <textarea name='comments' cols='30' rows='4'></textarea>
    </div>

  </div>
  `,
  on_finish: function(data) {
    data.category = "demoSurvey";
  }
};


timeline.push(demoSurvey);


const save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: "3ZL0jQ70aZqW", // ADD EXPERIMENT ID
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
};

timeline.push(save_data);


// FINAL FUNCTION CALL //
jsPsych.run(timeline);
