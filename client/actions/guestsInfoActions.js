const addAdult = () => ({
  type: 'ADD_ADULT',
});

const subtractAdult = () => ({
  type: 'SUBTRACT_ADULT',
});

const addChild = () => ({
  type: 'ADD_CHILD',
});

const subtractChild = () => ({
  type: 'SUBTRACT_CHILD',
});

const addInfant = () => ({
  type: 'ADD_INFANT',
});

const subtractInfant = () => ({
  type: 'SUBTRACT_INFANT',
});

export default {
  addAdult,
  subtractAdult,
  addChild,
  subtractChild,
  addInfant,
  subtractInfant,
};
