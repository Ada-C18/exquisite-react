import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const makeLine = (formData, fields) => {
  return fields.map((field) => {
    if (field.key) {
      return formData[field.key];
    } else {
      return field;
    }}).join(' ');
};

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  const handleSubmission = (formData) => {
    console.log(formData);
    const line = makeLine(formData, FIELDS);
    setLines(lines => [...lines, line]);
  };

  const handleReveal = () => {
    setDone(true);
  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {
        !done && lines.length > 0 &&
        <RecentSubmission submission={lines[lines.length - 1]} />
      }

      {
        !done &&
        <PlayerSubmissionForm fields={FIELDS} index={lines.length + 1} sendSubmission={handleSubmission} />
      }

      <FinalPoem isSubmitted={done} submissions={lines} revealPoem={handleReveal} />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
