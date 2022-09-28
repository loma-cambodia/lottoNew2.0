export const speedUp = (value) => {
    return {
      type: 'SPEED_UP',
      value:value,
      step: 200,
      maxValue: 100
    }
  }