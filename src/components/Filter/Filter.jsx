import { Component } from 'react';

class Filter extends Component {
  render() {
    const { changeFilter, filter } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          onChange={changeFilter}
          type="search"
          name="filter"
          value={filter}
        />
      </label>
    );
  }
}

export default Filter;
