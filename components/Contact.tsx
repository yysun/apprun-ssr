import app, {Component} from 'apprun';

export default class extends Component {
  state = '';

  view = (state) => {
    return <div>
      Contact - {state}
    </div>
  }

  update = {
    '/contact': async _ => {
      const state = new Promise(resolve =>
        setTimeout(() => resolve(new Date().toLocaleTimeString()), 200));
      console.log(state);
      return state;
    }
  }
}

