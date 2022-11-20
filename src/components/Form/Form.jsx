import css from './Form.module.css';
// const { Component } = require('react');

import { useState } from 'react';

export default function Form({ stateForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handlSubmit = e => {
    e.preventDefault();

    stateForm({ name, number });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlSubmit} className={css.form}>
      <label className={css.label}>
        <span className={css.spanLabel}>Name</span>
        <input
          className={css.input}
          type="text"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
        />
      </label>
      <label className={css.label}>
        <span className={css.spanLabel}>Number</span>
        <input
          className={css.input}
          type="tel"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumberChange}
        />
      </label>
      <button type="Submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleNameChange = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   handleNumberChange = e => {
//     this.setState({ number: e.currentTarget.value });
//   };

//   handlSubmit = e => {
//     e.preventDefault();

//     this.props.stateForm(this.state);

//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handlSubmit} className={css.form}>
//         <label className={css.label}>
//          <span className={css.spanLabel}>Name</span>
//           <input
//             className={css.input}
//             type="text"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleNameChange}
//           />
//         </label>
//         <label className={css.label}>
//          <span className={css.spanLabel}>Number</span>
//           <input
//             className={css.input}
//             type="tel"
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleNumberChange}
//           />
//         </label>
//         <button type="Submit" className={css.btn}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;
