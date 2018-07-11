import app, {Component} from 'apprun';

const SSR = ({ cb }, children) => cb ? cb(children) : children;

export class Home extends Component {
  state = ''

  view = (state) => <SSR cb={state.cb}>
    <div>
      Home - {state.time}
    </div>
  </SSR>;


  update = {
    '/home': (_, cb) => ({ time: new Date().toLocaleTimeString(), cb })
  }
}

export default new Home().mount();