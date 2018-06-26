import app, {Component} from 'apprun';

export default class extends Component {
  state = 'Home';

  view = (state) => {
    return <div>
      {state} - {new Date().toLocaleTimeString()}
    </div>
  }

  update = {
    '/': state => state,
  }
}

