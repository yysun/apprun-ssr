import app, {Component} from 'apprun';

export class About extends Component {
  state = '';

  view = (state) => <div>
    About  - {state}
  </div>;
  
  update = {
    '/about': _ => {
      throw new Error('test');
    }
  }
}

export default new About().mount();