const detectType = (type) => {
    if(type !== 'undefined') {
      switch (typeof type) {
        case 'number':
          return 'number';
        break;
        case 'string':
          return 'string';
        break;
        case 'boolean':
          return 'boolean';
        break;
        default:
          return 'Тип x не определён';
        break;
      }
    }
  }
  const varTypes = [12, 'string', true, {}];
  varTypes.map(type => console.log(detectType(type)))
