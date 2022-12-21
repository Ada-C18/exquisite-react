import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({ index, sendSubmission, fields }) => {

  const [adj1, setAdj1] = useState('');
  const [noun1, setNoun1] = useState('');
  const [adv, setAdv] = useState('');
  const [verb, setVerb] = useState('');
  const [adj2, setAdj2] = useState('');
  const [noun2, setNoun2] = useState('');

  const handleAdj1Change = (e) => {
    const value = e.target.value;
    setAdj1(value);
  };

  const handleNoun1Change = (e) => {
    setNoun1(e.target.value);
  };

  const handleAdvChange = (e) => {
    setAdv(e.target.value);
  };

  const handleVerbChange = (e) => {
    setVerb(e.target.value);
  };

  const handleAdj2Change = (e) => {
    setAdj2(e.target.value);
  };

  const handleNoun2Change = (e) => {
    setNoun2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendSubmission({
      adj1,
      noun1,
      adv,
      verb,
      adj2,
      noun2,
    });

    setAdj1('');
    setNoun1('');
    setAdv('');
    setVerb('');
    setAdj2('');
    setNoun2('');
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">


        The
        <input
            placeholder="adjective"
            type="text"
            value={adj1} 
            className={adj1 || 'PlayerSubmissionFormt__input--invalid'}
            onChange={handleAdj1Change}
            />

        <input
            placeholder="noun"
            type="text"
            value={noun1} 
            className={noun1 || 'PlayerSubmissionFormt__input--invalid'}
            onChange={handleNoun1Change}
            />

        <input
            placeholder="adverb"
            type="text"
            value={adv} 
            className={adv || 'PlayerSubmissionFormt__input--invalid'}
            onChange={handleAdvChange}
            />

        <input
            placeholder="verb"
            type="text"
            value={verb} 
            className={verb || 'PlayerSubmissionFormt__input--invalid'}
            onChange={handleVerbChange}
            />

        the
        <input
            placeholder="adjective"
            type="text"
            value={adj2} 
            className={adj2 || 'PlayerSubmissionFormt__input--invalid'}
            onChange={handleAdj2Change}
            />

        <input
            placeholder="noun"
            type="text"
            value={noun2} 
            className={noun2 || 'PlayerSubmissionFormt__input--invalid'}
            onChange={handleNoun2Change}
            />
        .


        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  // fields: PropTypes.arrayOf(PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.shape({
  //     key: PropTypes.string.isRequired,
  //     placeholder: PropTypes.string.isRequired,
  //   }),
  // ])).isRequired,
}

export default PlayerSubmissionForm;
