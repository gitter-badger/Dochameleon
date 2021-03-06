const color = require('./color.js');

const SearchTheme = { search: {
  container: {
    position: 'relative'
  },
  input: {
    lineHeight: '1.5em',
    background: '#eee',
    padding: '0 0.5em',
    margin: '0 10px',
    fontSize: '0.8em',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderColor: color.nav.primary,
    borderRadius: '1em',
    width: '12em',
    '@media (max-width: 767px)': {
      width: '8em',
      borderColor: color.nav.secondary
    }
  },
  list: {
    display: 'none',
    position: 'absolute',
    right: '1em',
    top: '1.5em',
    minWidth: '25em',
    maxWidth: '30em',
    maxHeight: '25em',
    whiteSpace: 'pre-wrap',
    overflow: 'auto',
    background: '#fff',
    opacity: '0.9',
    listStyle: 'none',
    textAlign: 'left',
    borderRadius: '5px',
    borderBottom: '1px solid',
    borderColor: color.nav.primary,
    boxSizing: 'border-box',
    padding: '0',
    '@media (max-width: 575px)': {
      right: '0.5em',
      minWidth: '20em',
      maxWidth: '25em'
    }
  },
  item: {
    padding: '0',
    title: {
      padding: '1em 1em 0.5em 1em',
      color: color.primary,
      display: 'block',
      textDecoration: 'underline'
    },
    description: {
      padding: '0 1em 0 2em',
      color: color.secondary,
      whiteSpace: 'pre-wrap',
      fontSize: '0.7em'
    }
  },
  footer: {
    padding: '1em',
    textAlign: 'right',
    search_by: {
      marginRight: '0.5em'
    },
    logo: {
      width: '4em',
      verticalAlign: 'middle'
    }
  }
}}

module.exports = SearchTheme;
