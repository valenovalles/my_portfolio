import PropTypes from 'prop-types';

function Btn({ text, bgColor, textColor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: '10px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
      }}
    >
      {text}
    </button>
  );
}

Btn.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func
};

Btn.defaultProps = {
  text: 'Botón',
  bgColor: '#007bff',
  textColor: '#6B7280',
};

export default Btn;
