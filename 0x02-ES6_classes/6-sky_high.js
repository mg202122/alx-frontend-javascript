import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
     *
     * @param { Number } sqft
     * @param { Number } floors
     */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors; /* eslint-disable-line no-underscore-dangle */
  }

  get sqft() {
    return this._sqft; /* eslint-disable-line no-underscore-dangle */
  }

  get floors() {
    return this._floors; /* eslint-disable-line no-underscore-dangle */
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; /* eslint-disable-line no-underscore-dangle */
  }
}
