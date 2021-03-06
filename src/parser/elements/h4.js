import BaseElement from './baseElement'

export default class H4 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      fontFamily: 'Times New Roman',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'black',
      margin: '12px 0px'
    }
  }

  render() {
    return super.render();
  }
}
