var jsPsychLikertStim = (function (jspsych) {
    'use strict';

    const info = {
        name: "likert-stim",
        parameters: {
            stimulus: { 
                type: jspsych.ParameterType.STRING, 
                default: 'This is the stimulus sentence.' 
            },
            prompt: { 
                type: jspsych.ParameterType.STRING, 
                default: 'Please rate the following:' 
            },
            questions: { 
                type: jspsych.ParameterType.COMPLEX, 
                array: true,
                default: [
                    { text: 'How much do you agree?', name: 'question_1' }
                ]
            },
            scale_labels: { 
                type: jspsych.ParameterType.COMPLEX, 
                default: {
                    left: 'Strongly Disagree',
                    center: 'Neutral',
                    right: 'Strongly Agree'
                }
            },
            question_labels: {
                type: jspsych.ParameterType.COMPLEX,
                default: null,
                description: 'Object mapping question names to custom labels. Each question can have left/center/right labels.'
            },
            scale_width: { 
                type: jspsych.ParameterType.INT, 
                default: 7 
            },
            require_all: { 
                type: jspsych.ParameterType.BOOL, 
                default: true 
            },
            button_label: { 
                type: jspsych.ParameterType.STRING, 
                default: 'Submit' 
            }
        }
    };

    class LikertStimPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }

        trial(display_element, trial) {
            const start_time = performance.now();
            
            // Shuffle questions
            const shuffled_questions = this.jsPsych.randomization.shuffle([...trial.questions]);
            
            // Track state
            let current_question_index = 0;
            const responses = {};
            
            // Function to display current question
            const display_question = () => {
                const question = shuffled_questions[current_question_index];
                const question_name = question.name || `question_${current_question_index}`;
                const question_number = current_question_index + 1;
                const total_questions = shuffled_questions.length;
                
                // Get labels for this specific question or use defaults
                let labels = trial.scale_labels;
                if (trial.question_labels && trial.question_labels[question_name]) {
                    labels = trial.question_labels[question_name];
                }
                
                // Build the HTML
                let html = `<div style="max-width: 900px; margin: 0 auto;">`;

                // Prompt
                html += `<div style="font-size: 18px; margin-bottom: 20px;">
                    ${trial.prompt}
                </div>`;
                
                // Stimulus
                html += `<div style="font-size: 24px; font-weight: normal; margin-bottom: 30px; text-align: left;">
                    ${trial.stimulus}
                </div>`;
                
                // Progress indicator
                html += `<div style="text-align: center; margin-bottom: 20px; font-size: 14px; color: #666;">
                    Question ${question_number} of ${total_questions}
                </div>`;
                
                // Current question with Likert scale
                html += `<div style="margin-bottom: 40px;">`;
                html += `<p style="font-weight: bold; margin-bottom: 15px;">${question.text}</p>`;
                
                // Create the scale with fixed widths
                html += `<div style="display: flex; justify-content: space-between; align-items: center;">`;
                
                // Left label - fixed width
                html += `<div style="flex: 0 0 150px; margin-right: 20px; text-align: left;">
                    ${labels.left || ''}
                </div>`;
                
                // Radio buttons - fixed width container
                html += `<div style="flex: 0 0 400px; display: flex; justify-content: space-between; align-items: flex-start;">`;
                for (let i = 1; i <= trial.scale_width; i++) {
                    const is_center = i === Math.ceil(trial.scale_width / 2);
                    html += `<label style="display: flex; flex-direction: column; align-items: center; cursor: pointer;">`;
                    html += `<input type="radio" name="${question_name}" value="${i}" required style="margin-bottom: 5px;">`;
                    
                    // Show center label if it exists and this is the center position, otherwise empty span with same height
                    if (is_center && labels.center) {
                        html += `<span style="font-size: 12px; min-height: 1.2em;">${labels.center}</span>`;
                    } else {
                        html += `<span style="font-size: 12px; min-height: 1.2em;">&nbsp;</span>`;
                    }
                    html += `</label>`;
                }
                html += `</div>`;
                
                // Right label - fixed width
                html += `<div style="flex: 0 0 150px; margin-left: 20px; text-align: right;">
                    ${labels.right || ''}
                </div>`;
                
                html += `</div>`; // end scale container
                html += `</div>`; // end question container
                
                // Submit/Next button
                const button_text = current_question_index < shuffled_questions.length - 1 ? 'Next' : trial.button_label;
                html += `<div style="text-align: center; margin-top: 30px;">
                    <button id="likert-submit-btn" class="jspsych-btn" style="padding: 10px 30px; font-size: 16px;">
                        ${button_text}
                    </button>
                </div>`;
                
                html += `</div>`; // end main container
                
                display_element.innerHTML = html;
                
                // Handle submit/next
                const submit_btn = document.getElementById('likert-submit-btn');
                submit_btn.addEventListener('click', () => {
                    // Collect response for current question
                    const selected = document.querySelector(`input[name="${question_name}"]:checked`);
                    
                    if (!selected && trial.require_all) {
                        alert('Please select a response before continuing.');
                        return;
                    }
                    
                    if (selected) {
                        responses[question_name] = parseInt(selected.value);
                    }
                    
                    // Move to next question or finish
                    current_question_index++;
                    
                    if (current_question_index < shuffled_questions.length) {
                        display_question();
                    } else {
                        // Calculate RT
                        const rt = Math.round(performance.now() - start_time);
                        
                        // End trial
                        const trial_data = {
                            stimulus: trial.stimulus,
                            responses: responses,
                            rt: rt,
                            question_order: shuffled_questions.map((q, idx) => q.name || `question_${idx}`)
                        };
                        
                        display_element.innerHTML = '';
                        this.jsPsych.finishTrial(trial_data);
                    }
                });
            };
            
            // Start with first question
            display_question();
        }
    }

    LikertStimPlugin.info = info;
    
    return LikertStimPlugin;
})(jsPsychModule);