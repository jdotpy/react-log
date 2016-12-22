import BaseElement from './baseElement'

export default class Div extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black'
    }
  }

  render() {
    return super.render();
  }
}
