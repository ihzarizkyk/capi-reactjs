import Head from './Head.js';
import Api from './Api.js';

function Button(){
  return(
    <button type="button" className="welcome">
    Consume API with react
    </button>
    );
}

export default function App(){
  return(
    <section>
      <Head 
      margin={10}
      color="red" />
      <Button />
      <Api />
    </section>
    );
}