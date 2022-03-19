const { capitalizeFirstLetter } = require('../utils')

function componentTemplate({type, ...rest}) {
  return type === 'class' ? classCompTemplate(rest) : funcCompTemplate(rest)
}

function funcCompTemplate({ name, withStyle, styleType, withRouter, withFolder }) {
  const capitalName = capitalizeFirstLetter(name)

  return `
    import React, { useState, useEffect } from 'react';
    ${withRouter ? `import { useHistory } from 'react-router-dom';` : ``}
    ${withStyle ? `import styles from './${withFolder ? `index` : capitalName}.module.${styleType}';` : ``}
    
    function ${capitalName}() {
      ${withRouter ? `const history = useHistory();` : ``}

      return <div${withStyle ? ` className={styles['${name}']}`:  ``}> </div>;
    }

    export default ${capitalName};
  `
}

function classCompTemplate({ name, withStyle, styleType, withRouter, withFolder }) {
  const capitalName = capitalizeFirstLetter(name)

  return `
    import React, { Component } from 'react';
    ${withRouter ? `import { withRouter } from 'react-router-dom';` : ``}
    ${withStyle ? `import styles from './${withFolder ? `index` : capitalName}.module.${styleType}';` : ``}

    class ${capitalName} extends Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {}

      render() {
        return <div${withStyle ? ` className={styles['${name}']}`:  ``}> </div>;
      }
    }

    export default ${withRouter ? `withRouter(${capitalName})` : `${capitalName}`};
  `
}

function styleTemplate(name) {
  return `
    .${name}{}
  `
}


module.exports = {
  componentTemplate,
  styleTemplate
}